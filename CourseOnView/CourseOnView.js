/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CourseOnView extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Resizer", "./CourseOnView/costumes/Resizer.svg", {
        x: 0,
        y: 0
      }),
      new Costume("Track 1", "./CourseOnView/costumes/Track 1.svg", {
        x: 230.94034262406387,
        y: 178.61656407259997
      }),
      new Costume("Track 2", "./CourseOnView/costumes/Track 2.svg", {
        x: 231.77199256689914,
        y: 165.927527578
      }),
      new Costume("Track 3", "./CourseOnView/costumes/Track 3.svg", {
        x: 232.64378375956773,
        y: 172.508195
      }),
      new Costume("Track 4", "./CourseOnView/costumes/Track 4.svg", {
        x: 233.405735,
        y: 170.1498
      }),
      new Costume("Track 5", "./CourseOnView/costumes/Track 5.svg", {
        x: 227.87184283836206,
        y: 156.68861161056407
      }),
      new Costume("Track 6", "./CourseOnView/costumes/Track 6.svg", {
        x: 226.24999500000004,
        y: 159.35935499999988
      }),
      new Costume("Track 7", "./CourseOnView/costumes/Track 7.svg", {
        x: 238.89330797461938,
        y: 175.0502992048154
      }),
      new Costume("Track 8", "./CourseOnView/costumes/Track 8.svg", {
        x: 178.2256,
        y: 171.7682728286373
      }),
      new Costume("Track 9", "./CourseOnView/costumes/Track 9.svg", {
        x: 238.68519909444697,
        y: 171.2942434800542
      }),
      new Costume("Track 10", "./CourseOnView/costumes/Track 10.svg", {
        x: 223.2477890944472,
        y: 178.1851807657275
      }),
      new Costume("Track 11", "./CourseOnView/costumes/Track 11.svg", {
        x: 244.49999999999986,
        y: 175.4674636363635
      }),
      new Costume("Track 12", "./CourseOnView/costumes/Track 12.svg", {
        x: 316.438775,
        y: 234.06117778186143
      }),
      new Costume("Track 13", "./CourseOnView/costumes/Track 13.svg", {
        x: 227.60737754358095,
        y: 170.68518784018633
      }),
      new Costume("Track 14", "./CourseOnView/costumes/Track 14.svg", {
        x: 206.68523409444722,
        y: 176.2726166434513
      }),
      new Costume("Track 15", "./CourseOnView/costumes/Track 15.svg", {
        x: 232.5,
        y: 173.10737409444747
      }),
      new Costume("Track 16", "./CourseOnView/costumes/Track 16.svg", {
        x: 221.077905,
        y: 179.5937987807077
      }),
      new Costume("Track 17", "./CourseOnView/costumes/Track 17.svg", {
        x: 238.33182,
        y: 176.043835
      }),
      new Costume("Track 18", "./CourseOnView/costumes/Track 18.svg", {
        x: 218.34721,
        y: 174.261015
      }),
      new Costume("Track 19", "./CourseOnView/costumes/Track 19.svg", {
        x: 218.86856383154588,
        y: 162.39477575715324
      }),
      new Costume("Track 20", "./CourseOnView/costumes/Track 20.svg", {
        x: 232.7915896360639,
        y: 182.22610978134756
      }),
      new Costume("Track 21", "./CourseOnView/costumes/Track 21.svg", {
        x: 247.49999999999991,
        y: 184.3
      }),
      new Costume("Track 22", "./CourseOnView/costumes/Track 22.svg", {
        x: 225,
        y: 179.75
      }),
      new Costume("Track 23", "./CourseOnView/costumes/Track 23.svg", {
        x: 193.537,
        y: 179.75
      }),
      new Costume("Track 24", "./CourseOnView/costumes/Track 24.svg", {
        x: 210.616585,
        y: 179.75
      })
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
    this.goto(0, 0);
    this.costume = "Resizer";
    this.size = 100;
    this.costume = "Track " + this.toString(this.stage.vars.course);
    this.visible = true;
  }
}
