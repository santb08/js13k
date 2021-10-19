import GameObject from "./game-object";

class Game {
    constructor() {
        this.canvas = document.createElement('canvas', {
            id: 'game-canvas',
        });
        this.canvas.width = 1280;
        this.canvas.height = 720;

        this.context = this.canvas.getContext('2d');
        this.objects = new Map();
        this.start();
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        document.body.appendChild(this.canvas);

        this.loopInterval = setInterval(
            this.loop.bind(this),
            1000 / 60
        );
    }

    add(object) {
        if (!(object instanceof GameObject)) {
            throw Error('Not object');
        }

        console.log('added', object.transform);
        this.objects.set(object.objectId, object);
    }

    loop() {
        this.objects.forEach((object) => {
            object.paint(this.context);
        });
    }

    start() {
        throw Error('Not implemented');
    }

    stop() {
        clearInterval(this.loopInterval);
    }
}

export default Game;