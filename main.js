"use strict";

var BUILDING = false; // true;

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
        prefabs:{},
        mouse_pos:{x:null, y:null},
        mouse_down:false,
        quit:false,
        loop:false,
        close:null
    },
    settings:{
        aspect:{x:800, y:600},
        keyMap:{
            87:'up',
            38:'up',
            32:'up',
            65:'left',
            37:'left',
            68:'right',
            39:'right',
            40:'down',
            83:'down',
            16:'special'
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
        },
        mouse_move:function (e) {
            var x = event.clientX || e.pageX,
                y = event.clientY || e.pageY, vars = game.vars;
            var beginX = vars.window_size.x / 2 - game.settings.aspect.x * vars.scale / 2,
                beginY = vars.window_size.y / 2 - game.settings.aspect.y * vars.scale / 2;
            var localX = x - beginX,
                localY = y - beginY;
            vars.mouse_pos.x = localX / vars.scale;
            vars.mouse_pos.y = localY / vars.scale;
        },
        mouse_down:function (e) {
            game.events.mouse_move(e);
            game.vars.mouse_down = true;
        },
        mouse_up:function (e) {
            game.events.mouse_move(e);
            game.vars.mouse_down = false;
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
            addEventListener('mousemove', _this.events.mouse_move);
            addEventListener('mousedown', _this.events.mouse_down);
            addEventListener('mouseup', _this.events.mouse_up);
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
        game.vars.quit = false;
        (function update() {
            if (game.vars.quit) {
                console.log('quit');
                game.vars.loop = false;
                if (game.vars.close) game.vars.close();
            } else {
                game.vars.loop = true;
                loop_call(update);
                var time = new Date().getTime(), last = _this.vars.lastUpdate;
                loop(time - last);
                _this.vars.lastUpdate = time;
            }
        })();
    },
    btn_down:function (name) {
        return this.vars.keys[name];
    },
    add_prefab:function (name, width, height, styles, settings) {
        if (!height) height = width;
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
        if (!p) return null;
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
        } else {
            sprite.className = name;
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
    },
    clear:function () {
        var stage = game.vars.stage;
        while (stage.firstChild) {
            stage.removeChild(stage.firstChild);
        }
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

        if (xCross && yCross) return true;
    },
    clone:function (obj) {
        var res = (obj instanceof Array) ? [] : {};
        if (typeof obj == 'object') {
            for (var key in obj) {
                res[key] = utl.clone(obj[key]);
            }
            return res;
        }
        return obj;
    },
    set_cookie:function (c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    },
    get_cookie:function (c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
    }
};

function print_level() {
    var str = ['['];
    for (var i = 0; i < LEVEL.world.length; ++i) {
        str.push('[');
        for (var j = 0; j < LEVEL.world[i].length; ++j) {
            if (!LEVEL.world[i][j]) {
                str.push('0');
            } else {
                str.push('\'');
                str.push(LEVEL.world[i][j].type);
                str.push('\'');
            }
            str.push(',');
        }
        str.push('],');
    }
    str.push(']');
    return str.join('');
}

function create_prefabs() {
    game.add_prefab('block', scale);
    game.add_prefab('solid', scale);
    game.add_prefab('blue', scale);
    game.add_prefab('red', scale);

    load_audio('explosion', 'explosion.wav').volume = .05;
    load_audio('bounce', 'move.wav').volume = .02;
    load_audio('move', 'bounce.wav').volume = .1;
    load_audio('add', 'bounce.wav').volume = .5;
    load_audio('error', 'error.wav').volume = .05;
    load_audio('pickup', 'pickup.wav').volume = .01;
    load_audio('safe', 'safe.wav').volume = .5;
    load_audio('dead', 'dead.wav').volume = .5;
}

function set_block(pos, type) {
    var block = game.get_prefab(type);
    block.type = type;
    block.position(pos.x * scale, pos.y * scale, 0).update();
    game.add(block);
    LEVEL.world[pos.x][pos.y] = block;
}

var scale = 50;
var currentLevel = 0;
var time_buffer = 0, blocks = 0, LEVEL;

function ready_game() {
    LEVEL.size = {
        x:game.settings.aspect.x / scale,
        y:game.settings.aspect.y / scale
    };

    if (!LEVEL.world) {
        LEVEL.world = [];
        for (var i = 0; i < LEVEL.size.x; ++i) {
            LEVEL.world.push(new Array(LEVEL.size.y));
        }
    } else {
        for (var x = 0; x < LEVEL.size.x; ++x) {
            for (var y = 0; y < LEVEL.size.y; ++y) {
                if (!LEVEL.world[x][y]) continue;
                set_block({x:x, y:y}, LEVEL.world[x][y]);
            }
        }
    }

    for (var j = 0; j < LEVEL.victims.length; ++j) {
        var vi = LEVEL.victims[j];
        var victim = game.get_prefab(vi.type);
        victim.position(vi.start.x * scale, vi.start.y * scale, 0).update();
        vi.elem = victim;
        game.add(vi.elem);
        console.log(vi);
    }
}

function loadLevel(num, callback) {
    if (num >= levels.order.length) num = 0;
    currentLevel = num;
    utl.set_cookie('level', currentLevel, 30);
    if (game.vars.loop) {
        game.vars.close = function () {
            loadLevel(num);
        };
        game.vars.quit = true;
        return;
    }
    blocks = 0;
    time_buffer = 0;
    game.clear();
    LEVEL = utl.clone(levels.order[num]);
    if (BUILDING) LEVEL.free = true;
    console.log(LEVEL);
    ready_game();

    // title message
    var center = document.getElementsByClassName('center')[0];
    var msg = document.createElement('div');
    msg.id = 'msg';
    msg.innerHTML = LEVEL.name;
    center.appendChild(msg);
    setTimeout(function () {
        msg.style.top = (-msg.offsetHeight / 2) + 'px';
    }, 0);

    var t;

    function removeMsg() {
        center.removeChild(msg);
        window.onmousedown = null;
        game.start_loop(loop);
        console.log('started');
        if (callback) callback();
        clearTimeout(t);
    }

    window.onmousedown = removeMsg;
    t = setTimeout(removeMsg, LEVEL.name.length * 100);
}

function fail() {
    if (BUILDING) return;
    audio_clips['safe'].play();
    loadLevel(currentLevel);
}

function succeed() {
    if (BUILDING) return;
    audio_clips['explosion'].play();
    loadLevel(currentLevel + 1);
}
var last_down = false;
function loop(time) {
    time_buffer += time;

    function update_position(object, collide, times) {
        if (!times) times = 0;
        if (times > 1) return;

        object.pos = object.elem.position();
        var pos = {
            x:Math.floor(object.pos.x / scale),
            y:Math.floor(object.pos.y / scale)
        };

        function again() {
            object.elem.position(pos.x * scale, pos.y * scale, 0);
            object.elem.update();
            update_position(object, collide, times + 1);
        }

        var size = LEVEL.size, world = LEVEL.world;

        if (pos.y < size.y - 1 && !world[pos.x][pos.y + 1]) { // falling
            pos.y += 1;
        } else if (object.left) {
            if (pos.x > 0) {
                if (!world[pos.x - 1][pos.y]) {
                    if (pos.y < size.y - 1 && !world[pos.x - 1][pos.y + 1]) {
                        pos.y += 1;
                    }
                    pos.x -= 1;
                } else if (pos.y > 0 && !world[pos.x - 1][pos.y - 1] && !world[pos.x][pos.y - 1]) {
                    if (collide(world[pos.x - 1][pos.y].type)) return;
                    pos.x -= 1;
                    pos.y -= 1;
                } else {
                    if (collide(world[pos.x - 1][pos.y].type)) return;
                    object.left = false;
                    again();
                    return;
                }
            } else {
                object.left = false;
                again();
                return;
            }
        } else {
            if (pos.x < size.x - 1) {
                if (!world[pos.x + 1][pos.y]) {
                    if (pos.y < size.y - 1 && !world[pos.x + 1][pos.y + 1]) {
                        pos.y += 1;
                    }
                    pos.x += 1;
                } else if (pos.y > 0 && !world[pos.x + 1][pos.y - 1] && !world[pos.x][pos.y - 1]) {
                    if (collide(world[pos.x + 1][pos.y].type)) return;
                    pos.x += 1;
                    pos.y -= 1;
                } else {
                    if (collide(world[pos.x + 1][pos.y].type)) return;
                    object.left = true;
                    again();
                    return;
                }
            } else {
                object.left = true;
                again();
                return;
            }
        }

        object.elem.position(pos.x * scale, pos.y * scale, 0);
        object.elem.update();
    }

    // update victims
    if (time_buffer > LEVEL.speed) {
        time_buffer = 0;
        var pos_check = {};
        var collide = false;
        for (var i = 0; i < LEVEL.victims.length; ++i) {
            var victim = LEVEL.victims[i];
            if (!victim.elem) continue;
            var remove = false;
            var safe = false;
            update_position(victim, function (type) {
                collide = true;
                if (type == 'solid' || type == 'block') {
                    return;
                }
                remove = true;
                if (type != victim.type) {
                    victim.dead = true;
                    audio_clips['dead'].play();
                } else {
                    safe = true;
                }
                game.remove(victim.elem);
                victim.elem = null;

                return safe || victim.dead;
            });

            if (safe) {
                fail();
                return;
            }
            var res = victim.elem.position();
            var key = res.x + '-' + res.y;
            if (pos_check[key]) {
                fail();
                return;
            }
            pos_check[res.x + '-' + res.y] = true;
        }

        audio_clips['move'].play();

        if (collide) {
            audio_clips['bounce'].play();
        }

        var win = true;

        for (var i = 0; i < LEVEL.victims.length; ++i) {
            if (!LEVEL.victims[i].dead) {
                win = false;
                break;
            }
        }

        if (win) {
            succeed();
            return;
        }
    }

    function error() {
        if (!last_down) {
            audio_clips['error'].play();
        }
    }

    // mouse add
    if (game.vars.mouse_down) {
        var mouse_pos = {
            x:Math.floor(game.vars.mouse_pos.x / scale),
            y:Math.floor(game.vars.mouse_pos.y / scale)
        };
        if (LEVEL.free) { // level creator
            var type = 'block';
            if (game.btn_down('up')) {
                if (LEVEL.world[mouse_pos.x][mouse_pos.y]) {
                    game.remove(LEVEL.world[mouse_pos.x][mouse_pos.y]);
                    LEVEL.world[mouse_pos.x][mouse_pos.y] = null;
                }
                type = null;
            } else if (game.btn_down('left')) {
                type = 'red';
            } else if (game.btn_down('right')) {
                type = 'blue';
            } else if (game.btn_down('down')) {
                type = 'solid';
            }
            if (type && !LEVEL.world[mouse_pos.x][mouse_pos.y]) {
                var block = game.get_prefab(type);
                block.type = type;
                block.position(mouse_pos.x * scale, mouse_pos.y * scale, 0).update();
                game.add(block);
                LEVEL.world[mouse_pos.x][mouse_pos.y] = block;
            }
        } else { // level player
            var b;
            if (game.btn_down('special')) {
                b = LEVEL.world[mouse_pos.x][mouse_pos.y];
                if (b && b.type == 'block') {
                    if (mouse_pos.y == 0 || !LEVEL.world[mouse_pos.x][mouse_pos.y - 1] ||
                        LEVEL.world[mouse_pos.x][mouse_pos.y - 1].type != 'block') {
                        game.remove(LEVEL.world[mouse_pos.x][mouse_pos.y]);
                        LEVEL.world[mouse_pos.x][mouse_pos.y] = null;
                        ++blocks;
                        audio_clips['pickup'].play();
                    } else {
                        error();
                    }
                } else {
                    error();
                }
            } else {
                if (!LEVEL.world[mouse_pos.x][mouse_pos.y] &&
                    (mouse_pos.y + 1 >= LEVEL.size.y || LEVEL.world[mouse_pos.x][mouse_pos.y + 1])) {
                    if (blocks > 0) {
                        b = game.get_prefab('block');
                        b.type = 'block';
                        b.position(mouse_pos.x * scale, mouse_pos.y * scale, 0).update();
                        game.add(b);
                        LEVEL.world[mouse_pos.x][mouse_pos.y] = b;
                        --blocks;
                        audio_clips['add'].play();
                    } else {
                        error();
                    }
                } else {
                    error();
                }
            }
        }
        last_down = true;
    } else {
        last_down = false;
    }
}

(function () {
    game.init('#game');
    create_prefabs();
    if (BUILDING) {
        loadLevel(levels.order.length - 1);
        return;
    }
    currentLevel = utl.get_cookie('level') || 0;
    loadLevel(currentLevel);
})();