/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Boost extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("A22", "./Boost/costumes/A22.svg", {
        x: 55.627054999999984,
        y: -126.67224500000003
      }),
      new Costume("A23", "./Boost/costumes/A23.svg", { x: 180.15, y: 153 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveInit() {
    if (
      this.toNumber(this.stage.vars.course) === 22 ||
      this.toNumber(this.stage.vars.course) === 23
    ) {
      this.effects.ghost = 99;
      this.goto(0, 0);
      this.visible = true;
      this.costume = "A" + this.toString(this.stage.vars.course);
    } else {
      this.visible = false;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
