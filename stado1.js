

demo.state1 = function (){}

demo.state1.prototype = {
  preload: function(){},
  create:  function(){
    juego.stage.backgroundColor = '#cc0000';
        addChangeStateListeners();
  },
  update: function(){}

}
