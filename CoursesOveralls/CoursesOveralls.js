/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CoursesOveralls extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./CoursesOveralls/costumes/1.svg", {
        x: 230.9403422312639,
        y: 178.61655499999998
      }),
      new Costume("2", "./CoursesOveralls/costumes/2.svg", {
        x: 230.02194,
        y: 164.17753
      }),
      new Costume("3", "./CoursesOveralls/costumes/3.svg", {
        x: 230.89378890958204,
        y: 172.01649423057216
      }),
      new Costume("4", "./CoursesOveralls/costumes/4.svg", {
        x: 231.655735,
        y: 168.3998
      }),
      new Costume("5", "./CoursesOveralls/costumes/5.svg", {
        x: 226.12127500000057,
        y: 154.9226000000001
      }),
      new Costume("6", "./CoursesOveralls/costumes/6.svg", {
        x: 203.39623540486238,
        y: 158.18069154134344
      }),
      new Costume("7", "./CoursesOveralls/costumes/7.svg", {
        x: 225.16227914051046,
        y: 154.90048502423983
      }),
      new Costume("8", "./CoursesOveralls/costumes/8.svg", {
        x: 178.6578624804436,
        y: 170.01827765427157
      }),
      new Costume("9", "./CoursesOveralls/costumes/9.svg", {
        x: 237.15566499999844,
        y: 169.73293499999997
      }),
      new Costume("10", "./CoursesOveralls/costumes/10.svg", {
        x: 221.71826547223594,
        y: 176.6556604722361
      }),
      new Costume("11", "./CoursesOveralls/costumes/11.svg", {
        x: 233.40575,
        y: 158.14059
      }),
      new Costume("12", "./CoursesOveralls/costumes/12.svg", {
        x: 201.39540499999998,
        y: 173.83607
      }),
      new Costume("13", "./CoursesOveralls/costumes/13.svg", {
        x: 226.07787,
        y: 169.15567
      }),
      new Costume("14", "./CoursesOveralls/costumes/14.svg", {
        x: 205.155715,
        y: 174.743095
      }),
      new Costume("15", "./CoursesOveralls/costumes/15.svg", {
        x: 227.65575,
        y: 171.57786
      }),
      new Costume("16", "./CoursesOveralls/costumes/16.svg", {
        x: 219.577905,
        y: 178.06428
      }),
      new Costume("17", "./CoursesOveralls/costumes/17.svg", {
        x: 213.47729230087816,
        y: 174.293835
      }),
      new Costume("18", "./CoursesOveralls/costumes/18.svg", {
        x: 216.59721,
        y: 173.61705261607887
      }),
      new Costume("19", "./CoursesOveralls/costumes/19.svg", {
        x: 217.11856766309168,
        y: 160.64476651430647
      }),
      new Costume("20", "./CoursesOveralls/costumes/20.svg", {
        x: 231.0415896360639,
        y: 180.47610978134756
      }),
      new Costume("21", "./CoursesOveralls/costumes/21.svg", {
        x: 247.49999999999991,
        y: 184.3
      }),
      new Costume("22", "./CoursesOveralls/costumes/22.svg", {
        x: 222.60000000000002,
        y: 179.75
      }),
      new Costume("23", "./CoursesOveralls/costumes/23.svg", {
        x: 193.537,
        y: 179.75
      }),
      new Costume("24", "./CoursesOveralls/costumes/24.svg", {
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
    this.visible = true;
    this.effects.ghost = 99;
    this.goto(0, 0);
    this.costume = this.stage.vars.course;
  }
}
