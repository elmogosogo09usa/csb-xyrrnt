/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Thumbnail extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Thumbnail", "./Thumbnail/costumes/Thumbnail.svg", {
        x: 485.1572,
        y: 338.5
      }),
      new Costume("Template", "./Thumbnail/costumes/Template.svg", {
        x: 215,
        y: 162.05000114440915
      }),
      new Costume("Resizer", "./Thumbnail/costumes/Resizer.svg", { x: 0, y: 0 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 0;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      this.moveAhead();
      yield;
    }
    while (true) {
      this.moveAhead();
      yield;
    }
  }
}
