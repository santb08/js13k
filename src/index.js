import MainCharacter from './character';
import Game from './game';

class NewGame extends Game {
    start() {
        const character = new MainCharacter();
        this.add(character);
    }

    loop() {
        super.loop();
    }
}

const newGame = new NewGame();

global.game = newGame;