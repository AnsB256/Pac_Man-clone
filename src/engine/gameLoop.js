import { FIXED_STEP_MS, MAX_ACCUMULATOR_MS } from '../constants.js';

export class FixedStepLoop {
  constructor({ update, render }) {
    this.update = update;
    this.render = render;
    this.accumulator = 0;
    this.lastTime = 0;
    this.running = false;
    this.requestId = null;
    this.stepMs = FIXED_STEP_MS;
  }

  start(initialTime = performance.now()) {
    if (this.running) {
      return;
    }

    this.running = true;
    this.lastTime = initialTime;

    const frame = (currentTime) => {
      if (!this.running) {
        return;
      }

      const rawDelta = Math.max(0, currentTime - this.lastTime);
      this.lastTime = currentTime;
      this.accumulator = Math.min(this.accumulator + rawDelta, MAX_ACCUMULATOR_MS);

      while (this.accumulator >= this.stepMs) {
        this.update(this.stepMs / 1000);
        this.accumulator -= this.stepMs;
      }

      this.render(this.accumulator / this.stepMs);
      this.requestId = requestAnimationFrame(frame);
    };

    this.requestId = requestAnimationFrame(frame);
  }

  stop() {
    this.running = false;

    if (this.requestId !== null) {
      cancelAnimationFrame(this.requestId);
      this.requestId = null;
    }
  }
}
