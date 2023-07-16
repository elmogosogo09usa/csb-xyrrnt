/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Line extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Line/costumes/1.svg", {
        x: 223.60416,
        y: 6.314930000000004
      }),
      new Costume("2", "./Line/costumes/2.svg", {
        x: 224.14696,
        y: -11.512654999999995
      }),
      new Costume("3", "./Line/costumes/3.svg", {
        x: 224.14697,
        y: 6.172944999999999
      }),
      new Costume("4", "./Line/costumes/4.svg", {
        x: -174.35303499999998,
        y: 34.42067499999999
      }),
      new Costume("5", "./Line/costumes/5.svg", {
        x: 216.604155,
        y: 49.357789999999994
      }),
      new Costume("6", "./Line/costumes/6.svg", {
        x: 62.604135000000014,
        y: 63.357805
      }),
      new Costume("7", "./Line/costumes/7.svg", {
        x: -171.39586000000003,
        y: -44.6422
      }),
      new Costume("8", "./Line/costumes/8.svg", {
        x: 165.60414,
        y: 34.48368500000001
      }),
      new Costume("9", "./Line/costumes/9.svg", {
        x: 220.916665,
        y: -9.953654999999998
      }),
      new Costume("10", "./Line/costumes/10.svg", {
        x: -171.08488,
        y: -9.953665
      }),
      new Costume("11", "./Line/costumes/11.svg", { x: 12, y: 153 }),
      new Costume("12", "./Line/costumes/12.svg", { x: 5, y: -124 }),
      new Costume("13", "./Line/costumes/13.svg", {
        x: -171.08488,
        y: -9.573395000000005
      }),
      new Costume("14", "./Line/costumes/14.svg", {
        x: 192.916665,
        y: -15.953685000000007
      }),
      new Costume("15", "./Line/costumes/15.svg", { x: 23, y: -118 }),
      new Costume("16", "./Line/costumes/16.svg", {
        x: 217.967555,
        y: -1.4766950000000065
      }),
      new Costume("17", "./Line/costumes/17.svg", {
        x: 206.10414,
        y: -3.016334999999998
      }),
      new Costume("18", "./Line/costumes/18.svg", {
        x: 108.35414,
        y: 57.983655
      }),
      new Costume("19", "./Line/costumes/19.svg", {
        x: -174.64586000000003,
        y: 3.983665000000002
      }),
      new Costume("20", "./Line/costumes/20.svg", {
        x: -27.645860000000027,
        y: 77.983655
      }),
      new Costume("21", "./Line/costumes/21.svg", { x: 80, y: 176.8 }),
      new Costume("22", "./Line/costumes/22.svg", {
        x: 225,
        y: -45.849999999999994
      }),
      new Costume("23", "./Line/costumes/23.svg", {
        x: -47.921910000000025,
        y: -93.83737000000002
      }),
      new Costume("24", "./Line/costumes/24.svg", {
        x: 205.55,
        y: -8.550000000000011
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveInit() {
    this.effects.ghost = 99;
    this.goto(0, 0);
    this.visible = true;
    this.costume = this.stage.vars.course;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
