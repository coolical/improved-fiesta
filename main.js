var config={
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: '#4287f5',
    input:{
        activePointers: 1
    },
    scene:[tutorial]
}
const game = new Phaser.Game(config);
game.scene.start('tutorial');