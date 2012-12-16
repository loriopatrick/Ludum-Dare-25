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
    scale:50,
    victims:[
        {
            type:'blue',
            start:{x:12, y:2},
            left:true
        }
    ],
    size:{},
    speed:500,
    free:true
};

levels.tut1 = {
    name:'Basics',
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
    scale:50,
    victims:[
        {
            type:'blue',
            start:{x:3, y:6},
            left:false
        }
    ],
    size:{},
    speed:500,
//    free:true
};

levels.tut2 = {
    name:'Shift and mouse click on grey blocks to pick them up. You can only remove from the top of the stack.',
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
    scale:50,
    victims:[
        {
            type:'blue',
            start:{x:3, y:6},
            left:false
        }
    ],
    size:{},
    speed:500,
//    free:true
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
    scale:50,
    victims:[
        {
            type:'blue',
            start:{x:3, y:6},
            left:false
        }
    ],
    size:{},
    speed:500,
//    free:true
};

levels.lv2 = {
    name:'They can only go through the horizontal sides.',
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
    scale:50,
    victims:[
        {
            type:'blue',
            start:{x:8, y:3},
            left:false
        }
    ],
    size:{},
    speed:500,
//    free:true
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
    scale:50,
    victims:[
        {
            type:'blue',
            start:{x:1, y:1},
            left:false
        }
    ],
    size:{},
    speed:500,
//    free:true
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
    scale:50,
    victims:[
        {
            type:'blue',
            start:{x:1, y:3},
            left:false
        }
    ],
    size:{},
    speed:500,
//    free:true
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
    scale:50,
    victims:[
        {
            type:'blue',
            start:{x:4, y:5},
            left:false
        }
    ],
    size:{},
    speed:500,
//    free:true
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
    scale:50,
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
    speed:500,
//    free:true
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
    scale:50,
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
    speed:500,
//    free:true
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
    scale:50,
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
    speed:500,
//    free:true
};

levels.order = [
    levels.splash,
    levels.tut1,
    levels.tut2,
    levels.tut3,
    levels.lv2,
    levels.lv4,
    levels.lv5,
    levels.lv6,
    levels.lv7,
    levels.lv8
];