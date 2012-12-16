"use strict";

window.loop_call = (function () {
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var game = {
    vars:{
        stage:null,
        keys:{},
        window_size:{x:null, y:null},
        scale:1,
        lastUpdate:null,
        prefabs:{}
    },
    settings:{
        aspect:{x:1280, y:800},
        keyMap:{
            87:'up',
            38:'up',
            65:'left',
            37:'left',
            68:'right',
            39:'right',
            40:'down',
            83:'down'
        }
    },
    events:{
        key_down:function (e) {
            if (e.keyCode in game.settings.keyMap) {
                game.vars.keys[game.settings.keyMap[e.keyCode]] = true;
            }
        },
        key_up:function (e) {
            if (e.keyCode in game.settings.keyMap) {
                game.vars.keys[game.settings.keyMap[e.keyCode]] = false;
            }
        },
        resize:function () {
            game.vars.window_size.x = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
            game.vars.window_size.y = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;
        }
    },
    init:function (elem) {
        if (typeof elem == 'string') elem = document.querySelector(elem);
        this.vars.stage = Sprite3D.stage(elem);
        var _this = this;
        (function centerStage() {
            var s = _this.vars.stage.style;
            s.width = _this.settings.aspect.x + 'px';
            s.height = _this.settings.aspect.y + 'px';
            s.position = 'absolute';
            s.left = (-_this.settings.aspect.x / 2) + 'px';
            s.top = (-_this.settings.aspect.y / 2) + 'px';
            s.overflow = 'hidden';
        })();

        (function addEvents() {
            addEventListener('keydown', _this.events.key_down);
            addEventListener('keyup', _this.events.key_up);
            addEventListener('resize', function () {
                _this.events.resize();
                _this.resize_stage();
            });
        })();

        this.events.resize();
        this.resize_stage();
    },
    resize_stage:function () {
        var scale = Math.min(this.vars.window_size.x / this.settings.aspect.x,
            this.vars.window_size.y / this.settings.aspect.y);
        if (scale == this.vars.scale) return;
        this.vars.scale = scale;
        this.vars.stage.scale(scale).update();
    },
    start_loop:function (loop) {
        this.vars.lastUpdate = new Date().getTime();
        var _this = this;
        (function update() {
            loop_call(update);
            var time = new Date().getTime(), last = _this.vars.lastUpdate;
            loop(time - last);
            _this.vars.lastUpdate = time;
        })();
    },
    btn_down:function (name) {
        return this.vars.keys[name];
    },
    add_prefab:function (name, width, height, styles, settings) {
        this.vars.prefabs[name] = {
            width:width,
            height:height,
            styles:styles,
            settings:settings
        };
    },
    get_prefab:function (name) {
        var sprite = Sprite3D.create();
        var s = sprite.style, p = this.vars.prefabs[name];
        sprite.height = p.height;
        sprite.width = p.width;
        s.width = p.width + 'px';
        s.height = p.height + 'px';
        if (p.styles) {
            if (typeof p.styles == 'string') {
                sprite.className = p.styles;
            } else {
                for (var style in p.styles) {
                    s[style] = p.styles[style];
                }
            }
        }
        if (p.settings) {
            for (var prop in p.settings) {
                s[prop] = p.settings[prop];
            }
        }
        return sprite;
    },
    add:function (elem) {
        this.vars.stage.appendChild(elem);
    },
    remove:function (elem) {
        elem.parentNode.removeChild(elem);
    }
};

var utl = {
    rand:function (min, max) {
        return Math.random() * (max - min) + min;
    },
    dist:function (a, b) {
        var sum = 0;
        for (var v in a) {
            sum += Math.pow(a[v] - b[v], 2);
        }
        return Math.sqrt(sum);
    },
    touch:function (a, b, a_pos, b_pos) {
        if (!a_pos) a_pos = a.position();
        if (!b_pos) b_pos = b.position();

        function cross(axis, length) {
            var a_start = a_pos[axis];
            var b_start = a_pos[axis];
            var a_end = a_start + a[length];
            var b_end = b_start + b[length];

            var start_in = a_start < b_start && a_end > b_start;
            var end_in = a_start < b_end && a_end > b_end;

            if (start_in && end_in) return 3;
            if (end_in) return 2;
            if (start_in) return 1;

            // What if it's b is enclosing a
            if (b_start < a_start && b_end > a_start) return 4;

            return 0;
        }

        var xCross = cross('x', 'width');
        var yCross = cross('y', 'height');

        // todo: give number to represent what is getting intersected
        if (xCross && yCross) return true;
    }
};

var steps = [], barrier = [], bombs = [], player;

function create_prefabs() {
    game.add_prefab('player', 64, 64, 'player');
    game.add_prefab('roof_tile', 128, 64, 'roof_tile');
    game.add_prefab('step', 128, 64, 'step');
}

function ready_game() {
    player = game.get_prefab('player');
    player.velocity = {x:0, y:0};
    player.touch = {left:false, top:false, right:false, bottom:false};

    player.position(game.settings.aspect.x / 2 - 65,
        game.settings.aspect.y / 2 - 32, 0).update();
    game.add(player);

    for (var i = 0; i < game.settings.aspect.x / 128; ++i) {
        var step = game.get_prefab('step');
        step.position(i * 128, game.settings.aspect.y - 64, 0).update();
        game.add(step);
        steps.push(step);
    }
}

var health = 100;
var physics_scale = 100;
function raiseStep(step, dist) {
    if (dist == 0) return;
    step.height += dist;
    step.style.height = step.height + 'px';
    step.move(0, -dist, 0).update();
}

function loop(time) {
    var sec_time = time / 1000;
    player.pos = player.position();

    (function controls() {
        if (game.btn_down('left')) {
            player.pos.x -= time;
        }
        if (game.btn_down('right')) {
            player.pos.x += time;
        }
    })();

    (function collision() {
        var upped = {};


        function world_collide(object) {
            object.grounded = false;

            // wall
            if (object.pos.x < 0) object.pos.x = 0;
            if (object.pos.x + object.width >= game.settings.aspect.x) {
                object.pos.x = game.settings.aspect.x - object.width - 1;
            }


            // floor / step collide
            var block = object.pos.x / 128,
                block_end = (object.pos.x + object.width) / 128;

            var temp1, temp2, diff = -10;

            var object_bottom = object.pos.y + object.height;
            var game_height = game.settings.aspect.y;

            if ((temp1 = Math.floor(block)) !=
                (temp2 = Math.floor(block_end))) { // block covers 2 steps
                var leftStep = steps[temp1];
                var rightStep = steps[temp2];
                var high = Math.max(leftStep.height, rightStep.height);

                diff = object_bottom - (game_height - high);
                if (diff >= 0 && leftStep.height == rightStep.height) {
                    var shift = (block - temp1 - .5) * 2;
                    if (shift > .5) {
                        raiseStep(leftStep, 10);
                        upped[temp1] = true;
                    } else {
                        raiseStep(rightStep, 10);
                        upped[temp2] = true;
                    }
                    object.pos.y = game.settings.aspect.y - high - object.height;
                    object.grounded = true;
                    object.velocity.y = 10;
                } else if (diff >= 0 && diff <= 10) {
                    if (leftStep.height >= rightStep.height) {
                        raiseStep(leftStep, 10);
                        object.pos.y = game.settings.aspect.y - leftStep.height - object.height;
                        upped[temp1] = true;
                    } else {
                        raiseStep(rightStep, 10);
                        object.pos.y = game.settings.aspect.y - rightStep.height - object.height;
                        upped[temp2] = true;
                    }
                    object.velocity.y = 10;
                    object.grounded = true;
                } else {
                    var side = diff > 10 && Math.abs(leftStep.height - rightStep.height) > 10;
                    diff = object_bottom - (game_height
                        - Math.min(leftStep.height, rightStep.height));
                    if (leftStep.height > rightStep.height) {
                        if (side) object.pos.x = temp2 * 128;
                        if (diff >= 0) {
                            raiseStep(rightStep, 10);
                            object.pos.y = game.settings.aspect.y - rightStep.height - object.height;
                            upped[temp2] = true;
                            object.grounded = true;
                        }
                    } else {
                        if (side) object.pos.x = temp1 * 128 + object.width;
                        if (diff >= 0) {
                            raiseStep(leftStep, 10);
                            object.pos.y = game.settings.aspect.y - leftStep.height - object.height;
                            upped[temp1] = true;
                            object.grounded = true;
                        }
                    }
                }
            } else {
                var step = steps[temp1];
                if (object_bottom >= game_height - step.height) {
                    raiseStep(step, 10);
                    object.pos.y = game.settings.aspect.y - step.height - object.height;
                    object.velocity.y = 10;
                    object.grounded = true;
                    upped[temp1] = true;
                }
            }
        }

        world_collide(player);

        // lower other steps
        for (var i = 0; i < steps.length; ++i) {
            if (upped[i]) continue;
            var step = steps[i];
            if (step.height <= 64) continue;
            var h = steps[i].height - 74;
            if (h < 0) {
                raiseStep(step, h);
                return;
            }
            raiseStep(step, -5);
        }
    })();

    if (game.btn_down('up') && player.grounded) {
        player.velocity.y += 500;
    }

    (function physics() {
        player.velocity.y -= 9.8 * sec_time * physics_scale;
        if (player.touch.bottom || player.touch.top) {
            player.velocity.x /= 1.5;
        }
        player.pos.x += player.velocity.x * sec_time;
        player.pos.y += -player.velocity.y * sec_time;
    })();

    player.position(player.pos.x, player.pos.y, player.pos.z);
    player.update();
}

(function () {
    game.init('#game');
    create_prefabs();
    ready_game();
    game.start_loop(loop);
})();