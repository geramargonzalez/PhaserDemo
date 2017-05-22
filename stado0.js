var demo = {};

demo.state0 = function (){}

demo.state0.prototype = {
  preload: function(){},
  create:  function(){
    juego.stage.backgroundColor = '#80ffd4';
    juego.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(cambiarEstado,null,null,1);
    //juego.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(cambiarEstado,null,null,2);
    addChangeStateListeners();

  },
  update: function(){}

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
