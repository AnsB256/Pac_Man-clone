import { MAZE_COLS, MAZE_ROWS, TILE } from './constants.js';

const W = TILE.WALL;
const D = TILE.DOT;
const E = TILE.EMPTY;
const P = TILE.POWER_PELLET;
const G = TILE.GHOST_GATE;
const F = TILE.FRUIT_SPAWN;
const T = TILE.TUNNEL;

// 31 rows x 28 cols layout foundation for iterative feature work.
const GRID = [
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
  [W,P,D,D,D,D,D,D,D,D,D,D,D,W,W,D,D,D,D,D,D,D,D,D,D,D,P,W],
  [W,D,W,W,W,W,D,W,W,W,W,W,D,W,W,D,W,W,W,W,W,D,W,W,W,W,D,W],
  [W,D,W,W,W,W,D,W,W,W,W,W,D,W,W,D,W,W,W,W,W,D,W,W,W,W,D,W],
  [W,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,W],
  [W,D,W,W,W,W,D,W,W,D,W,W,W,W,W,W,W,W,D,W,W,D,W,W,W,W,D,W],
  [W,D,D,D,D,D,D,W,W,D,D,D,D,W,W,D,D,D,D,W,W,D,D,D,D,D,D,W],
  [W,W,W,W,W,W,D,W,W,W,W,W,E,W,W,E,W,W,W,W,W,D,W,W,W,W,W,W],
  [E,E,E,E,E,W,D,W,W,E,E,E,E,E,E,E,E,E,E,W,W,D,W,E,E,E,E,E],
  [W,W,W,W,W,W,D,W,W,E,W,W,W,G,G,W,W,W,E,W,W,D,W,W,W,W,W,W],
  [T,E,E,E,E,E,D,E,E,E,W,E,E,E,E,E,E,W,E,E,E,D,E,E,E,E,E,T],
  [W,W,W,W,W,W,D,W,W,E,W,E,W,W,W,W,E,W,E,W,W,D,W,W,W,W,W,W],
  [E,E,E,E,E,W,D,W,W,E,W,E,E,E,E,E,E,W,E,W,W,D,W,E,E,E,E,E],
  [W,W,W,W,W,W,D,W,W,E,W,W,W,W,W,W,W,W,E,W,W,D,W,W,W,W,W,W],
  [W,D,D,D,D,D,D,D,D,E,E,E,E,F,F,E,E,E,E,D,D,D,D,D,D,D,D,W],
  [W,W,W,W,W,W,D,W,W,E,W,W,W,W,W,W,W,W,E,W,W,D,W,W,W,W,W,W],
  [E,E,E,E,E,W,D,W,W,E,W,E,E,E,E,E,E,W,E,W,W,D,W,E,E,E,E,E],
  [W,W,W,W,W,W,D,W,W,E,W,E,W,W,W,W,E,W,E,W,W,D,W,W,W,W,W,W],
  [T,E,E,E,E,E,D,E,E,E,W,E,E,E,E,E,E,W,E,E,E,D,E,E,E,E,E,T],
  [W,W,W,W,W,W,D,W,W,E,W,W,W,G,G,W,W,W,E,W,W,D,W,W,W,W,W,W],
  [E,E,E,E,E,W,D,W,W,E,E,E,E,E,E,E,E,E,E,W,W,D,W,E,E,E,E,E],
  [W,W,W,W,W,W,D,W,W,W,W,W,E,W,W,E,W,W,W,W,W,D,W,W,W,W,W,W],
  [W,D,D,D,D,D,D,W,W,D,D,D,D,W,W,D,D,D,D,W,W,D,D,D,D,D,D,W],
  [W,D,W,W,W,W,D,W,W,D,W,W,W,W,W,W,W,W,D,W,W,D,W,W,W,W,D,W],
  [W,P,D,D,W,W,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,W,W,D,D,P,W],
  [W,W,W,D,W,W,D,W,W,W,W,W,D,W,W,D,W,W,W,W,W,D,W,W,D,W,W,W],
  [W,D,D,D,D,D,D,W,W,D,D,D,D,W,W,D,D,D,D,W,W,D,D,D,D,D,D,W],
  [W,D,W,W,W,W,W,W,W,D,W,W,W,W,W,W,W,W,D,W,W,W,W,W,W,W,D,W],
  [W,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,W],
  [W,P,D,D,D,D,D,D,D,D,D,D,D,W,W,D,D,D,D,D,D,D,D,D,D,D,P,W],
  [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W]
];

export function createMazeMatrix() {
  if (GRID.length !== MAZE_ROWS || GRID.some((row) => row.length !== MAZE_COLS)) {
    throw new Error('Maze dimensions do not match configured constants.');
  }

  return GRID.map((row) => [...row]);
}
