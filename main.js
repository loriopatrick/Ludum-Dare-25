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
    add_prefab:function (name, image, width, height, styles, settings) {
        if (!height) height = width;
        if (!styles) styles = null;
        this.vars.prefabs[name] = {
            image:image,
            width:width,
            height:height,
            styles:styles,
            settings:settings
        };
    },
    get_prefab:function (name) {
        var sprite = Sprite3D.create();
        var s = sprite.style, p = this.vars.prefabs[name];
        s.background = 'url(' + p.image + ')';
        s.width = p.width + 'px';
        s.height = p.height + 'px';
        s.backgroundSize = 'contain';
        sprite.width = p.width;
        sprite.height = p.height;
        if (p.styles) {
            for (var style in p.styles) {
                s[style] = p.styles[style];
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

        function cross (axis, length) {
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

var distance = 0;
var sprites = {};
var roadItems = [];

function create_prefabs() {
    game.add_prefab('monster', 'img/monster2.gif', 150, 114, {'zIndex':100});
    game.add_prefab('player', 'img/plr.gif', 64, null, {'zIndex':50}, {
        'touch':true,
        'points':100,
        'replace':'player_dead',
        'r_road':true,
        'die':true
    });
    game.add_prefab('mine', 'img/mine.gif', 64, null, null, {
        'touch':true,
        'points':-10,
        'health':-10,
        'replace':'player_dead',
        'r_road':false,
        'die':true
    });
}

var monster;

function set_world() {
    monster = game.get_prefab('monster');
    game.add(game.get_prefab('mine'));
    game.add(monster);
}

function add_prefab_to_road(name, x, y, z, settings) {
    var prefab = game.get_prefab(name);
    prefab.position(x || 0, y || 0, z || 0);
    prefab.update();
    game.add(prefab);
    roadItems.push(prefab);
    if (!settings) return;
    for (var prop in settings) {
        prefab[prop] = settings[prop];
    }
}

var health = 100;
var points = 0;

var roadScrubs = [game.vars.stage, document.getElementById('streetLine')];

function loop(time) {

    var pos = monster.position();

    function updateWorld() {
        var runSpeed = 0.3;
        var step = time * runSpeed;
        distance += step;
        game.vars.stage.style.backgroundPosition = '0 ' + (distance % 255) + 'px';
        roadScrubs[1].style.backgroundPosition = '0 ' + (distance % 200) + 'px';

        for (var i = 0; i < roadItems.length;) {
            var item = roadItems[i];
            var posI = item.position();
            if (posI.y > game.settings.aspect.y) { // out of frame
                game.remove(item);
                roadItems.splice(i, 1);
                continue;
            }
            if (item.touch) {
                if(utl.touch(monster, item, pos, posI)) {
                    if (item.points) points += item.points;
                    if (item.health) health += item.health;
                    if (item.replace) {
                        if (item.r_road) {
                            add_prefab_to_road(item.replace, posI.x, posI.y, posI.z);
                        } else {
                            var prefab = game.get_prefab(item.replace);
                            prefab.position(posI.x, posI.y, posI.z);
                            prefab.update();
                            game.add(prefab);
                        }
                    }
                    if (item.replace || item.die) {
                        game.remove(item);
                        roadItems.splice(i, 1);
                        continue;
                    }
                }
            }
            item.move(0, step, 0).update();
            ++i;
        }
    }

//    function movePeople(monsterPos) {
//        if (!monsterPos) monsterPos = monster.position();
//        var playerPos = sprites.player.position();
//        var dist = Math.max(Math.sqrt(Math.pow(playerPos.x - monsterPos.x, 2) +
//            Math.pow(playerPos.y - monsterPos.y, 2)), 1);
//        var deg = Math.atan2(monsterPos.y + sprites.monster.height / 2 - playerPos.y,
//            monsterPos.x + sprites.monster.width / 2 - playerPos.x) + Math.PI / 2;
//        sprites.player.rotationZ(deg * 180 / Math.PI);
//        sprites.player.move(-timeScale / (dist / 100 + 1) * Math.sin(deg), timeScale / (dist / 100 + 1) * Math.cos(deg), 0);
//        sprites.player.update();
//        console.log(deg);
//    }


    function genTraps() {
        var ran = Math.random();
        if (Math.min(distance / 1000, 0.1) > ran * 10) {
            add_prefab_to_road('mine', utl.rand(0, game.settings.aspect.x), 10, {
                'trap':true,
                'replace':'explosion'
            });
        }
    }

    genTraps();

    function movePlayer() {
        var speed = 0.5 * time;
        if (game.btn_down('up')) {
            monster.move(0, -speed, 0);
        }
        if (game.btn_down('left')) {
            monster.move(-speed * 2, 0, 0);
        }
        if (game.btn_down('right')) {
            monster.move(speed * 2, 0, 0);
        }
        if (game.btn_down('down')) {
            monster.move(0, speed, 0);
        }
        if (pos.x < 0) {
            monster.x(0);
        }
        if (pos.x + monster.width > game.settings.aspect.x) {
            monster.x(game.settings.aspect.x - monster.width);
        }
        if (pos.y < 0) {
            monster.y(0);
        }
        if (pos.y + monster.height > game.settings.aspect.y) {
            monster.y(game.settings.aspect.y - monster.height);
        }
        monster.update();
    }

    updateWorld();
    movePlayer();
//    movePeople();
}

(function () {
    game.init('#game');
    create_prefabs();
    set_world();
    game.start_loop(loop);
})();