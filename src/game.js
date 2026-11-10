import { CANVAS_HEIGHT, CANVAS_WIDTH, GAME_STATE } from './constants.js';
import { createMazeMatrix } from './maze.js';
import { renderMaze } from './render/mazeRenderer.js';

export class Game {
  constructor(canvas) {
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Game requires a valid HTMLCanvasElement.');
    }

    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Unable to get a 2D rendering context.');
    }

    this.canvas = canvas;
    this.ctx = context;
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;

    this.state = GAME_STATE.MENU;
    this.maze = createMazeMatrix();
    this.elapsed = 0;
  }

  update(deltaSeconds) {
    this.elapsed += deltaSeconds;

    if (this.state === GAME_STATE.MENU && this.elapsed >= 1) {
      this.state = GAME_STATE.READY_START;
    }
  }

  render(alpha) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    renderMaze(this.ctx, this.maze);

    this.ctx.fillStyle = '#ffff00';
    this.ctx.font = '20px Arial';
    this.ctx.fillText(this.state, 12, this.canvas.height - 28);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '14px Arial';
    this.ctx.fillText(`alpha ${alpha.toFixed(2)}`, 12, this.canvas.height - 8);
  }
}
