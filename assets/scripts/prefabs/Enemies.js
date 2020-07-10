class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super();
        this.scene = scene;
        this.count = 10;
        this.timer = this.scene.time.addEvent({
            delay: 1000,
            loop: true,
            callback: this.tick,
            callbackScope: this
        })
    }

    tick() {
        console.log('cuttent length', this.getLength());
        if (this.getLength() < this.count){
            this.createEnemy()
        } else {
            console.log('remove timer');
            this.timer.remove()
        }
    }

    createEnemy() {
        let enemy  = Enemy.generate(this.scene);
        this.add(enemy);
        enemy.move();
    }
}