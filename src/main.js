import { Game } from './game.js';
import { FixedStepLoop } from './engine/gameLoop.js';

const canvas = document.getElementById('game');

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error('Canvas element with id "game" was not found.');
}

const game = new Game(canvas);
const loop = new FixedStepLoop({
  update: (deltaSeconds) => game.update(deltaSeconds),
  render: (alpha) => game.render(alpha)
});

loop.start();
