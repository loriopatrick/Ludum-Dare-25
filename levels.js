var lv1 = {
    name:'Learn',
    world:[
        [0, 0, 0, 0, 0, 'red', ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 'solid', 'solid', ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 'solid', 'solid', ],
        [0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 'blue', ],
    ],
    scale:100,
    victims:[
        {
            type:'blue',
            start:{x:4, y:5},
            left:false
        }
    ],
    size:{},
    speed:500
};

var lv2 = {
    name:'Learn',
    world:[
        [
            ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
            ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
            ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'solid', 'solid', 'solid', ],
            ['solid', 'blue', 0, 0, 0, 0, 0, 0, 'block', 'block', 'solid', 'solid', ],
            ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
            ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
            ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
            ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
            ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
            ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
            ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
            ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
            ['solid', 'red', 0, 0, 0, 0, 0, 0, 'block', 'block', 'solid', 'solid', ],
            ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'solid', 'solid', 'solid', ],
            ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
            ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ]
    ],
    scale:100,
    victims:[
        {
            type:'blue',
            start:{x:4, y:5},
            left:false
        }
    ],
    size:{},
    speed:500
};

var LEVEL = lv2;