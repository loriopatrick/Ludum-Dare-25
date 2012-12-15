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
//
//var stage = null;
//var sprites = {};
//var keys = {};
//var keyMap = {
//    87:'up',
//    38:'up',
//    65:'left',
//    37:'left',
//    68:'right',
//    39:'right',
//    40:'down',
//    83:'down'
//};
//var distance = 0;
//var people = [];
//var size = {x:null, y:null};
//

//
//function load() {
//    var person = Sprite3D.create();
//    person.className = 'player';
//    stage.appendChild(person);
//    var monster = Sprite3D.create();
//    monster.className = 'monster';
//    stage.appendChild(monster);
//    sprites['player'] = person;
//    sprites['monster'] = monster;
//}

"use strict";

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
        (function update () {
            this.loop_call(update);
            var time = new Date().getTime(), last = _this.vars.lastUpdate;
            loop(time - last);
            _this.vars.lastUpdate = time;
        })();
    },
    btn_down: function (name) {
        return this.vars.keys[name];
    },
    add_prefab: function (name, className) {
        if (!className) className = name;
        this.vars.prefabs[name] = className;
    },
    get_prefab: function (name) {
        var sprite = Sprite3D.create();
        sprite.className = this.vars.prefabs[name];
        return sprite;
    },
    add: function (elem) {
        this.vars.stage.appendChild(elem);
    }
};

var distance = 0;
var sprites = {};

function create_prefabs () {
    game.add_prefab('monster');
    game.add_prefab('player');
}

var monster;

function set_world () {
    monster = game.get_prefab('monster');
    game.add(monster);
}

function loop(time) {
    var timeScale = time;

    console.log('loop' + time);

    function moveWorld() {
        distance += timeScale;
        game.vars.stage.style.backgroundPosition = '0 ' + (distance % 254) + 'px';
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

    function movePlayer() {
        var speed = 0.5 * timeScale;
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
//        console.log(monster.position() + ' :: ');
        monster.update();
    }

    moveWorld();
    movePlayer();
//    movePeople();
}

(function () {
    game.init('#game');
    create_prefabs();
    set_world();
    game.start_loop(loop);
})();