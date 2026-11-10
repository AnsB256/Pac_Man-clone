import { TILE, TILE_SIZE } from '../constants.js';

const TILE_COLOR = {
  [TILE.WALL]: '#0037ff',
  [TILE.DOT]: '#0a0a0a',
  [TILE.EMPTY]: '#0a0a0a',
  [TILE.POWER_PELLET]: '#0a0a0a',
  [TILE.GHOST_GATE]: '#ffb8ff',
  [TILE.FRUIT_SPAWN]: '#101010',
  [TILE.TUNNEL]: '#0a0a0a'
};

export function renderMaze(ctx, maze) {
  for (let row = 0; row < maze.length; row += 1) {
    for (let col = 0; col < maze[row].length; col += 1) {
      const tile = maze[row][col];
      const x = col * TILE_SIZE;
      const y = row * TILE_SIZE;

      ctx.fillStyle = TILE_COLOR[tile] ?? '#ff0000';
      ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

      if (tile === TILE.DOT) {
        ctx.fillStyle = '#ffb897';
        ctx.beginPath();
        ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (tile === TILE.POWER_PELLET) {
        ctx.fillStyle = '#ffb897';
        ctx.beginPath();
        ctx.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}
