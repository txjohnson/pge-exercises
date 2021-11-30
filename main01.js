class TheScene extends Phaser.Scene {
    constructor() {
        super("TheScene");
    }

    preload() {
        this.load.spritesheet ('dude', 'art/dude.png', {frameWidth: 32, frameHeight: 48});
        this.load.image ('sky', 'art/sky.png');
    }

    create() {
        this.add.image (400, 300, 'sky');
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = this.physics.add.sprite(110, 490, 'dude');
        this.player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'turn',
            frames: [ {key: 'dude', frame: 4}],
            frameRate: 20
         });
         this.player.anims.play('turn');
    }

    update(time, delta) {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX (-160);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX (160);
        }
        else {
            this.player.setVelocityX(0);
        }
        
        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY (-160);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY (160);
        }
        else {
            this.player.setVelocityY(0);
        }
    }
};

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
//            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [TheScene]
};

new Phaser.Game (config);