var levels = {};

levels.splash = {
    name:'By: Patrick Lorio',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 0, 0, 0, 0, 0, ],
        ['solid', 0, 'solid', 'solid', 'solid', 0, 'solid', 0, 'solid', 'solid', 0, 0, ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 0, 0, 0, ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 0, 0, ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 0, 0, 0, ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 'solid', 0, 'solid', 0, 'solid', 0, 0, 0, 0, 0, ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 'solid', 0, 'solid', 0, ],
        ['solid', 'solid', 0, 0, 0, 0, 'solid', 0, 0, 0, 0, 0, ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 'solid', 0, 0, 0, 0, 0, ],
        ['solid', 'blue', 'blue', 'blue', 'blue', 'red', 'solid', 0, 'solid', 0, 'solid', 0, ],
        ['solid', 'blue', 'blue', 'blue', 'blue', 'red', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'red', 'red', 'solid', 0, 0, 0, 'solid', 0, ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:12, y:2},
            left:true
        }
    ],
    size:{},
    speed:500
};

levels.tut1 = {
    name:'To kill a moving block, bring it to a static block of opposing color.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:3, y:6},
            left:false
        }
    ],
    size:{},
    speed:500
};

levels.tut2 = {
    name:'Hold shift and mouse click on grey blocks to pick them up. ' +
        'You can only remove the block if their is not a block above.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:3, y:6},
            left:false
        }
    ],
    size:{},
    speed:500
};


levels.tut3 = {
    name:'After picking up some blocks, click where you want to put them. They can only be placed ontop of other blocks.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 'block', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'red', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:3, y:6},
            left:false
        }
    ],
    size:{},
    speed:500
};

levels.tut4 = {
    name:'For blocks to die or be released, you must hit the colored blocks horizontally.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'blue', 'solid', 'solid', 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 'block', 'red', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 'block', 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'red', 'solid', 'solid', 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:8, y:3},
            left:false
        }
    ],
    size:{},
    speed:500
};

levels.lv3 = {
    name:'Lets get killing',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'block', 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'block', 'solid', ],
        ['solid', 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'block', 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'block', 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'block', 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'block', 'solid', 'solid', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 'solid', 'block', 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 'solid', 'solid', 'solid', 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 'solid', 'solid', 'solid', 0, 'solid', 'block', 'solid', 'block', 'block', 'solid', ],
        ['solid', 0, 'solid', 'solid', 'solid', 0, 'solid', 'block', 'solid', 'block', 'block', 'solid', ],
        ['solid', 'red', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'block', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:1, y:1},
            left:false
        }
    ],
    size:{},
    speed:500
};

levels.lv4 = {
    name:'Don\'t let him escape.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 'solid', 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 'solid', 'solid', 'block', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'solid', ],
        ['solid', 'solid', 'solid', 'block', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'solid', ],
        ['solid', 'solid', 'solid', 'block', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'solid', ],
        ['solid', 'solid', 'solid', 'block', 'block', 'block', 'block', 'block', 'block', 'block', 'block', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:1, y:3},
            left:false
        }
    ],
    size:{},
    speed:500
};

levels.lv5 = {
    name:'It\'s Impossible',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'solid', 'solid', 'solid', ],
        ['solid', 'blue', 0, 0, 0, 0, 0, 0, 'block', 'block', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 'red', 0, 0, 0, 0, 0, 0, 'block', 'block', 'solid', 'solid', ],
        ['solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
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

levels.lv6 = {
    name:'Blue has a friend.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'block', 'block', 'block', 'block', 'block', 'block', 'block', 'block', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'block', 'block', 'solid', ],
        ['solid', 'block', 'solid', 'red', 0, 0, 0, 0, 0, 'solid', 'block', 'solid', ],
        ['solid', 'block', 'solid', 'red', 0, 0, 0, 0, 0, 'solid', 'block', 'solid', ],
        ['solid', 'block', 'solid', 0, 0, 0, 0, 0, 0, 'solid', 'block', 'solid', ],
        ['solid', 'block', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'block', 'solid', ],
        ['solid', 'block', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'block', 'solid', ],
        ['solid', 'block', 'solid', 0, 0, 0, 0, 0, 0, 'solid', 'block', 'solid', ],
        ['solid', 'block', 'solid', 'blue', 0, 0, 0, 0, 0, 'solid', 'block', 'solid', ],
        ['solid', 'block', 'solid', 'blue', 0, 0, 0, 0, 0, 'solid', 'block', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'block', 'block', 'solid', ],
        ['solid', 'solid', 'block', 'block', 'block', 'block', 'block', 'block', 'block', 'block', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:11, y:4},
            left:false
        },
        {
            type:'red',
            start:{x:4, y:4},
            left:false
        }
    ],
    size:{},
    speed:500
};


levels.lv7 = {
    name:'I hope you break a leg.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 'blue', 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 'blue', 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 'blue', 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 'red', 'solid', ],
        ['solid', 'block', 0, 0, 0, 0, 0, 0, 0, 0, 'red', 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 'red', 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 'blue', 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 'blue', 'solid', ],
        ['solid', 0, 'solid', 0, 0, 0, 0, 0, 0, 0, 'blue', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:1, y:1},
            left:false
        },
        {
            type:'red',
            start:{x:13, y:1},
            left:false
        }
    ],
    size:{},
    speed:500
};


levels.lv8 = {
    name:'Tetris? You\'ve got to be quick.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 'block', 'block', 'solid', 'solid', 'block', 'block', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 'block', 'block', 'solid', 'solid', 'block', 'block', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'blue', 'blue', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'blue', 'red', 'solid', ],
        ['solid', 0, 0, 'solid', 'solid', 'solid', 'red', 'red', 'red', 'blue', 'red', 'solid', ],
        ['solid', 0, 0, 'solid', 'red', 'blue', 'blue', 'red', 'solid', 'solid', 'red', 'solid', ],
        ['solid', 0, 0, 'red', 'red', 'red', 'blue', 'blue', 'solid', 'solid', 'red', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 'block', 'block', 'solid', 'solid', 'block', 'block', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 'block', 'block', 'solid', 'solid', 'block', 'block', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:4, y:3},
            left:false
        },
        {
            type:'red',
            start:{x:11, y:2},
            left:false
        }
    ],
    size:{},
    speed:500
};

levels.lv9 = {
    name:'Wait, What?',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'red', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'red', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'red', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'block', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'blue', ],
        ['solid', 'solid', 0, 'solid', 'solid', 0, 0, 0, 0, 0, 0, 'blue', ],
        ['solid', 'solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'blue', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:8, y:2},
            left:false
        },
        {
            type:'red',
            start:{x:7, y:2},
            left:true
        }
    ],
    size:{},
    speed:500
};

levels.lv10 = {
    name:'Over the hill.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'red', 'red', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'red', 'red', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'solid', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'blue', 'blue', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 'blue', 'blue', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:9, y:6},
            left:false
        },
        {
            type:'red',
            start:{x:6, y:6},
            left:true
        }
    ],
    size:{},
    speed:500
};

levels.lv11 = {
    name:'Destroy the moles.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 'block', 'block', 'block', 'block', 'block', 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 'block', 'block', 'block', 'block', 'block', 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 'red', 'solid', ],
        ['solid', 0, 0, 'solid', 0, 0, 0, 0, 0, 0, 'red', 'solid', ],
        ['solid', 0, 0, 'solid', 0, 'solid', 0, 'solid', 0, 0, 'red', 'solid', ],
        ['solid', 0, 0, 'solid', 0, 'solid', 0, 'solid', 0, 0, 'red', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 'red', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 'blue', 'solid', ],
        ['solid', 0, 0, 'solid', 0, 'solid', 'solid', 0, 0, 0, 'blue', 'solid', ],
        ['solid', 0, 0, 'solid', 0, 'solid', 0, 'solid', 0, 0, 'blue', 'solid', ],
        ['solid', 0, 0, 'solid', 0, 0, 'solid', 'solid', 0, 0, 'blue', 'solid', ],
        ['solid', 0, 0, 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 'blue', 'solid', ],
        ['solid', 0, 0, 'block', 'block', 'block', 'block', 'block', 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 'block', 'block', 'block', 'block', 'block', 0, 0, 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:9, y:2},
            left:false
        },
        {
            type:'red',
            start:{x:6, y:2},
            left:true
        }
    ],
    size:{},
    speed:500
};

levels.lv12 = {
    name:'Loopy.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'red', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'block', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 'block', 'block', 'block', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 0, 0, 0, ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'block', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 'blue', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:12, y:11},
            left:false
        },
        {
            type:'red',
            start:{x:2, y:9},
            left:false
        }
    ],
    size:{},
    speed:500
};

levels.lv13 = {
    name:'Destroy the moles.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'blue', 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'blue', 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'blue', 'blue', 'blue', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'blue', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 'solid', 0, 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'block', 'block', 'solid', 0, 0, 0, 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'block', 'block', 'solid', 0, 0, 0, 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 'solid', 0, 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 0, 0, 0, 'solid', 'solid', 0, 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'red', 0, 0, 0, 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'red', 'red', 'red', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'red', 'red', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'red', 'red', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:9, y:10},
            left:false
        },
        {
            type:'red',
            start:{x:5, y:10},
            left:false
        }
    ],
    size:{},
    speed:500
};


levels.lv14 = {
    name:'Limited.',
    world:[
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 'block', 'block', 'block', 'solid', 'red', 'solid', 0, 0, 0, 0, 'solid', ],
        ['solid', 'block', 'block', 'block', 'solid', 'solid', 'solid', 0, 0, 0, 0, 'solid', ],
        ['solid', 'block', 'block', 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'block', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
        ['solid', 'block', 'block', 'block', 'solid', 'solid', 'solid', 0, 0, 0, 0, 'solid', ],
        ['solid', 'block', 'block', 'block', 'solid', 'blue', 'solid', 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'solid', ],
        ['solid', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'block', 'solid', ],
        ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', ],
    ],
    victims:[
        {
            type:'blue',
            start:{x:9, y:10},
            left:false
        },
        {
            type:'red',
            start:{x:6, y:10},
            left:false
        }
    ],
    size:{},
    speed:500
};

levels.order = [
    levels.splash,
    levels.tut1,
    levels.tut2,
    levels.tut3,
    levels.tut4,
    levels.lv3,
    levels.lv4,
    levels.lv5,
    levels.lv6,
    levels.lv7,
    levels.lv8,
    levels.lv9,
    levels.lv10,
    levels.lv11,
    levels.lv12,
    levels.lv13,
    levels.lv14
];