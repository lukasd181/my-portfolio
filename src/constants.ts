export const SCENE_WHITE = "white";
export const BACKGROUND_BLACK = "black";

export const CUBE_COUNT = 14;
export const CUBE_SIZE_MIN = 0.5;
export const CUBE_SIZE_RANGE = 1.5;
export const CUBE_SPREAD_X = 20;
export const CUBE_SPREAD_Y = 6;
export const CUBE_Y_OFFSET = -0.5;
export const CUBE_SPREAD_Z = 15;
export const CUBE_SPEED_MIN = 0.5;
export const CUBE_SPEED_RANGE = 1.5;
export const CUBE_SOLID_FACE_CHANCE = 0.3;
export const CUBE_ROTATION_INTENSITY = 1;

export const TERRAIN_WIDTH = 80;
export const TERRAIN_DEPTH = 40;
export const TERRAIN_WIDTH_SEGMENTS = 120;
export const TERRAIN_DEPTH_SEGMENTS = 60;
export const TERRAIN_NOISE_FREQUENCY = 0.06;
export const TERRAIN_NOISE_AMPLITUDE = 2.5;
export const TERRAIN_Y = -2;
export const TERRAIN_Z = -10;
export const TERRAIN_OPACITY = 0.7;
export const TERRAIN_POSITION: [number, number, number] = [0, TERRAIN_Y, TERRAIN_Z];
export const TERRAIN_ROTATION: [number, number, number] = [-Math.PI / 2, 0, 0];

export const GRID_SIZE = TERRAIN_WIDTH;
export const GRID_DIVISIONS = 40;
export const GRID_Y_GAP = 0.01;
export const GRID_POSITION: [number, number, number] = [
  0,
  TERRAIN_Y - GRID_Y_GAP,
  0,
];

export const STAR_RADIUS = 60;
export const STAR_COUNT = 1500;
export const STAR_FACTOR = 2;

export const CAMERA_X = 0;
export const CAMERA_Y = 2;
export const CAMERA_Z = 12;
export const CAMERA_FOV = 50;
export const CAMERA_POSITION: [number, number, number] = [
  CAMERA_X,
  CAMERA_Y,
  CAMERA_Z,
];
export const CAMERA_PARALLAX_X = 1.5;
export const CAMERA_PARALLAX_Y = 0.75;
export const CAMERA_SCROLL_DOLLY = 10;
export const CAMERA_LERP_SPEED = 4;
export const CAMERA_LOOK_AT: [number, number, number] = [0, 0, -5];

export const SCROLL_PAGES = 4;
export const SCROLL_DAMPING = 0.25;

export const CANVAS_Z_INDEX = 0;
