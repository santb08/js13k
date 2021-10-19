class GameObject {
    constructor(transform) {
        this.objectId = Date.now().toString(16);
        this.transform = transform;
    }

    get x () {
        return this.transform.x;
    }

    get y () {
        return this.transform.y;
    }

    paint() {
        throw Error('Not implemented');
    }

    setPosition(transform) {
        this.transform = transform;
    }
}

export default GameObject;