
var demo = {};
var centerx = 1500/2;
var centery = 1000/2;
var adam;
var speed = 4;
var tree;
demo.state0 = function (){}

demo.state0.prototype = {
  preload: function(){
    juego.load.image('adam','assets/sprites/adam.png');
    juego.load.image('tree','assets/backgrounds/treeBG.png');
  },
  create:  function(){
    juego.physics.startSystem(Phaser.Physics.ARCADE);
    juego.stage.backgroundColor = '#80ddd4';
    juego.world.setBounds(0,0,2813,1000);
    //juego.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(cambiarEstado,null,null,1);
    //juego.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(cambiarEstado,null,null,2);
    addChangeStateListeners();
    juego.scale.scaleMode = Phaser.ScaleManager.SHOW_All;
    tree = juego.add.sprite(0,0,'tree');
    adam = juego.add.sprite(centerx,centery,'adam');
    //adam.anchor.x = 0.5;
    //adam.anchor.y = 0.5;
    adam.anchor.setTo(0.5,0.5);
    adam.scale.setTo(0.7,0.7);
    juego.camera.follow(adam);
    juego.physics.enable(adam);
    adam.body.collideWorldBounds = true;
    juego.camera.deadzone = new Phaser.Rectangle(centerx-300,0,600,1000);

  },
  update: function(){
    if (juego.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        adam.x += speed;
        adam.scale.setTo(0.7,0.7);
        //ufo.angle = -15;
    }
    else if (juego.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        adam.x -= speed;
        adam.scale.setTo(-0.7,0.7);
      //  ufo.angle = 15;
    }
    if (juego.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        adam.y += speed;

        //ufo.angle = -15;
    }
    else if (juego.input.keyboard.isDown(Phaser.Keyboard.UP))
    {

        if(adam.y > 381.79999999999995){
          adam.y -= speed;
        }
      //  ufo.angle = 15;
    }


  }

}

function cambiarEstado(i,num){
  console.log(i);
  juego.state.start('state' + num);
}

function addKeyCallback(key,fn,args){
  juego.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}

function addChangeStateListeners(){
  addKeyCallback(Phaser.Keyboard.ZERO,cambiarEstado,0);
  addKeyCallback(Phaser.Keyboard.ONE,cambiarEstado,1);
  addKeyCallback(Phaser.Keyboard.TWO,cambiarEstado,2);
  addKeyCallback(Phaser.Keyboard.THREE,cambiarEstado,3);
  addKeyCallback(Phaser.Keyboard.FOUR,cambiarEstado,4);
  addKeyCallback(Phaser.Keyboard.FIVE,cambiarEstado,5);
  addKeyCallback(Phaser.Keyboard.SIX,cambiarEstado,6);
  addKeyCallback(Phaser.Keyboard.SEVEN,cambiarEstado,7);
  addKeyCallback(Phaser.Keyboard.EIGHT,cambiarEstado,8);
  addKeyCallback(Phaser.Keyboard.NINE,cambiarEstado,9);
}
