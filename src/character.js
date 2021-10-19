import GameObject from './game-object';
const characterSpriteMap = [
    [0x0ff, 0x0ff, 0x0ff],
    [0x0ff, 0xff0, 0x0ff],
    [0x0ff, 0x0ff, 0x0ff]
];

class MainCharacter extends GameObject {
    constructor() {
        super({
            x: 0,
            y: 0
        });
    }

    paint() {
        return characterSpriteMap;
    }
}

export default MainCharacter;