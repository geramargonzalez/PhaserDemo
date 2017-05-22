
var demo = {};
var centerx = 1500/2;
var centery = 1000/2;
var adam;
var speed = 4;
demo.state0 = function (){}

demo.state0.prototype = {
  preload: function(){
    juego.load.image('adam','assets/sprites/adam.png');
  },
  create:  function(){
    juego.stage.backgroundColor = '#80ddd4';
    //juego.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(cambiarEstado,null,null,1);
    //juego.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(cambiarEstado,null,null,2);
    addChangeStateListeners();
    juego.scale.scaleMode = Phaser.ScaleManager.SHOW_All;
    adam = juego.add.sprite(centerx,centery,'adam');
    //adam.anchor.x = 0.5;
    //adam.anchor.y = 0.5;
    adam.anchor.setTo(0.5,0.5);

  },
  update: function(){
    if (juego.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        adam.x += speed;
        //ufo.angle = -15;
    }
    else if (juego.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        adam.x -= speed;
      //  ufo.angle = 15;
    }
    if (juego.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        adam.y += speed;
        //ufo.angle = -15;
    }
    else if (juego.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        adam.y -= speed;
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
