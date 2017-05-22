var juego = new Phaser.Game(370,550,Phaser.CANVAS,'bloque_juego');

juego.state.add('state1',demo.state1);
juego.state.start('state1');
