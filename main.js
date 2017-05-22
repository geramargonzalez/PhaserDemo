var juego = new Phaser.Game(1500,1000,Phaser.CANVAS,'bloque_juego');

juego.state.add('state0',demo.state0);
juego.state.add('state1',demo.state1);
juego.state.add('state2',demo.state2);
juego.state.add('state3',demo.state3);
juego.state.add('state4',demo.state4);
juego.state.add('state5',demo.state5);
juego.state.add('state6',demo.state6);
juego.state.add('state7',demo.state7);
juego.state.add('state8',demo.state8);
juego.state.add('state9',demo.state9);
juego.state.start('state0');
