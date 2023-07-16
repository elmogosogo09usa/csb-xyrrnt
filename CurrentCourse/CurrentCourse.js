/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CurrentCourse extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("T1", "./CurrentCourse/costumes/T1.svg", {
        x: 235,
        y: 179.70000152587892
      }),
      new Costume("T2", "./CurrentCourse/costumes/T2.svg", {
        x: 235,
        y: 179.70000228881838
      }),
      new Costume("T3", "./CurrentCourse/costumes/T3.svg", {
        x: 235,
        y: 179.70000305175785
      }),
      new Costume("T4", "./CurrentCourse/costumes/T4.svg", {
        x: 235,
        y: 179.7000038146973
      }),
      new Costume("T5", "./CurrentCourse/costumes/T5.svg", {
        x: 235,
        y: 179.70000457763678
      }),
      new Costume("T6", "./CurrentCourse/costumes/T6.svg", {
        x: 235,
        y: 179.70000534057624
      }),
      new Costume("T7", "./CurrentCourse/costumes/T7.svg", {
        x: 235,
        y: 179.6999961035157
      }),
      new Costume("T8", "./CurrentCourse/costumes/T8.svg", {
        x: 235,
        y: 179.69999686645517
      }),
      new Costume("T9", "./CurrentCourse/costumes/T9.svg", {
        x: 235,
        y: 179.69999576293947
      }),
      new Costume("T10", "./CurrentCourse/costumes/T10.svg", {
        x: 235,
        y: 179.69998652587893
      }),
      new Costume("T11", "./CurrentCourse/costumes/T11.svg", {
        x: 235,
        y: 179.6999872888184
      }),
      new Costume("T12", "./CurrentCourse/costumes/T12.svg", {
        x: 235,
        y: 179.69998805175786
      }),
      new Costume("T13", "./CurrentCourse/costumes/T13.svg", {
        x: 235,
        y: 179.69998881469732
      }),
      new Costume("T14", "./CurrentCourse/costumes/T14.svg", {
        x: 235,
        y: 179.69998957763679
      }),
      new Costume("T15", "./CurrentCourse/costumes/T15.svg", {
        x: 235,
        y: 179.69999034057625
      }),
      new Costume("T16", "./CurrentCourse/costumes/T16.svg", {
        x: 235,
        y: 179.6999911035157
      }),
      new Costume("T17", "./CurrentCourse/costumes/T17.svg", {
        x: 235,
        y: 179.69999186645518
      }),
      new Costume("T18", "./CurrentCourse/costumes/T18.svg", {
        x: 235,
        y: 179.69999262939464
      }),
      new Costume("T19", "./CurrentCourse/costumes/T19.svg", {
        x: 235,
        y: 179.6999933923341
      }),
      new Costume("T20", "./CurrentCourse/costumes/T20.svg", {
        x: 235,
        y: 179.69999415527357
      }),
      new Costume("T21", "./CurrentCourse/costumes/T21.svg", {
        x: 235,
        y: 179.69999491821304
      }),
      new Costume("T22", "./CurrentCourse/costumes/T22.svg", {
        x: 235,
        y: 179.6999956811525
      }),
      new Costume("T23", "./CurrentCourse/costumes/T23.svg", {
        x: 235,
        y: 179.69998644409196
      }),
      new Costume("T24", "./CurrentCourse/costumes/T24.svg", {
        x: 235,
        y: 179.69998720703143
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveInit() {
    this.effects.clear();
    this.costume = "T" + this.toString(this.stage.vars.course);
    this.goto(2, -327);
    this.visible = true;
    yield* this.wait(3);
    for (let i = 0; i < 25; i++) {
      this.effects.ghost += 4;
      yield;
    }
    this.visible = false;
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
