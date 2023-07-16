/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CpuPath extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./CpuPath/costumes/1.svg", {
        x: 230.9403422312639,
        y: 178.616555
      }),
      new Costume("2", "./CpuPath/costumes/2.svg", {
        x: 231.77189999999973,
        y: 165.92753
      }),
      new Costume("3", "./CpuPath/costumes/3.svg", {
        x: 232.64378236925452,
        y: 172.50821347553702
      }),
      new Costume("4", "./CpuPath/costumes/4.svg", {
        x: 233.40572500000002,
        y: 170.14980000000003
      }),
      new Costume("5", "./CpuPath/costumes/5.svg", {
        x: 227.87183372424772,
        y: 156.68860785681025
      }),
      new Costume("6", "./CpuPath/costumes/6.svg", {
        x: 205.14623540486238,
        y: 159.35935499999988
      }),
      new Costume("7", "./CpuPath/costumes/7.svg", {
        x: 225.55679,
        y: 156.63254
      }),
      new Costume("8", "./CpuPath/costumes/8.svg", {
        x: 178.22559999999996,
        y: 171.76827765427157
      }),
      new Costume("9", "./CpuPath/costumes/9.svg", {
        x: 238.68518409444746,
        y: 171.2942884800544
      }),
      new Costume("10", "./CpuPath/costumes/10.svg", {
        x: 223.24778909444746,
        y: 178.18518409444746
      }),
      new Costume("11", "./CpuPath/costumes/11.svg", {
        x: 234.93526728334265,
        y: 159.67010728334236
      }),
      new Costume("12", "./CpuPath/costumes/12.svg", {
        x: 202.92492409444745,
        y: 175.33611
      }),
      new Costume("13", "./CpuPath/costumes/13.svg", {
        x: 227.607392543581,
        y: 170.68519284018618
      }),
      new Costume("14", "./CpuPath/costumes/14.svg", {
        x: 206.685222283342,
        y: 176.27260993035424
      }),
      new Costume("15", "./CpuPath/costumes/15.svg", {
        x: 229.18526909444745,
        y: 173.10737909444745
      }),
      new Costume("16", "./CpuPath/costumes/16.svg", {
        x: 221.077905,
        y: 179.59379792690257
      }),
      new Costume("17", "./CpuPath/costumes/17.svg", {
        x: 215.19487968614482,
        y: 176.04383500000003
      }),
      new Costume("18", "./CpuPath/costumes/18.svg", {
        x: 218.34721,
        y: 174.261015
      }),
      new Costume("19", "./CpuPath/costumes/19.svg", {
        x: 218.86856883154587,
        y: 162.39476575715324
      }),
      new Costume("20", "./CpuPath/costumes/20.svg", {
        x: 232.7915896360639,
        y: 182.22610978134756
      }),
      new Costume("21", "./CpuPath/costumes/21.svg", { x: 247.5, y: 184.3 }),
      new Costume("22", "./CpuPath/costumes/22.svg", {
        x: 216.77341,
        y: 148.78735
      }),
      new Costume("23", "./CpuPath/costumes/23.svg", {
        x: 157.6790574347425,
        y: 148.35825243474252
      }),
      new Costume("24", "./CpuPath/costumes/24.svg", { x: 240, y: 180 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Unload Race" },
        this.whenIReceiveUnloadRace
      ),
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveUnloadRace() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveInit() {
    this.visible = true;
    this.effects.ghost = 99;
    this.goto(0, 0);
    this.costume = this.stage.vars.course;
  }
}
