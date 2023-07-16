/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Background extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Resizer", "./Background/costumes/Resizer.svg", {
        x: 0,
        y: 0
      }),
      new Costume("T1", "./Background/costumes/T1.png", { x: 480, y: 360 }),
      new Costume("T2", "./Background/costumes/T2.png", { x: 480, y: 360 }),
      new Costume("T3", "./Background/costumes/T3.png", { x: 480, y: 360 }),
      new Costume("T4", "./Background/costumes/T4.png", { x: 480, y: 360 }),
      new Costume("T5", "./Background/costumes/T5.png", { x: 480, y: 360 }),
      new Costume("T6", "./Background/costumes/T6.png", { x: 480, y: 360 }),
      new Costume("T7", "./Background/costumes/T7.png", { x: 480, y: 360 }),
      new Costume("T8", "./Background/costumes/T8.png", { x: 480, y: 360 }),
      new Costume("T9", "./Background/costumes/T9.png", { x: 480, y: 360 }),
      new Costume("T10", "./Background/costumes/T10.png", { x: 480, y: 360 }),
      new Costume("T11", "./Background/costumes/T11.png", { x: 480, y: 360 }),
      new Costume("T12", "./Background/costumes/T12.png", { x: 480, y: 360 }),
      new Costume("T13", "./Background/costumes/T13.png", { x: 480, y: 360 }),
      new Costume("T14", "./Background/costumes/T14.png", { x: 480, y: 360 }),
      new Costume("T15", "./Background/costumes/T15.png", { x: 480, y: 360 }),
      new Costume("T16", "./Background/costumes/T16.png", { x: 480, y: 360 }),
      new Costume("T17", "./Background/costumes/T17.png", { x: 480, y: 360 }),
      new Costume("T18", "./Background/costumes/T18.png", { x: 480, y: 360 }),
      new Costume("T19", "./Background/costumes/T19.png", { x: 480, y: 360 }),
      new Costume("T20", "./Background/costumes/T20.png", { x: 480, y: 360 }),
      new Costume("T21", "./Background/costumes/T21.png", { x: 480, y: 360 }),
      new Costume("T22", "./Background/costumes/T22.png", { x: 480, y: 360 }),
      new Costume("T23", "./Background/costumes/T23.png", { x: 480, y: 360 }),
      new Costume("T24", "./Background/costumes/T24.png", { x: 480, y: 360 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveInit() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.moveBehind();
    this.goto(0, 0);
    this.costume = "Resizer";
    this.size = 100;
    this.costume = "T" + this.toString(this.stage.vars.course);
    this.visible = true;
  }
}
