export const TILE_SIZE = 16;
export const MAZE_ROWS = 31;
export const MAZE_COLS = 28;

export const CANVAS_WIDTH = MAZE_COLS * TILE_SIZE;
export const CANVAS_HEIGHT = MAZE_ROWS * TILE_SIZE + 80;

export const GAME_STATE = Object.freeze({
  MENU: 'MENU',
  READY_START: 'READY_START',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  DIES: 'DIES',
  LEVEL_CLEAR: 'LEVEL_CLEAR',
  GAME_OVER: 'GAME_OVER'
});

export const TILE = Object.freeze({
  WALL: 0,
  DOT: 1,
  EMPTY: 2,
  POWER_PELLET: 3,
  GHOST_GATE: 4,
  FRUIT_SPAWN: 5,
  TUNNEL: 6
});

export const FIXED_STEP_MS = 1000 / 60;
export const MAX_ACCUMULATOR_MS = FIXED_STEP_MS * 5;
