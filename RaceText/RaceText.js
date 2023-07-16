/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RaceText extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("3", "./RaceText/costumes/3.svg", {
        x: 8.899159999999995,
        y: 11.62214999999992
      }),
      new Costume("2", "./RaceText/costumes/2.svg", {
        x: 8.80409499999999,
        y: 11.384455000000003
      }),
      new Costume("1", "./RaceText/costumes/1.svg", {
        x: 6.7465799999999945,
        y: 11.384494999999987
      }),
      new Costume("GO!", "./RaceText/costumes/GO!.svg", {
        x: 25.746515000000016,
        y: 12.165424999999999
      }),
      new Costume("Finish!", "./RaceText/costumes/Finish!.svg", {
        x: 50.54120999999995,
        y: 12.165395000000046
      })
    ];

    this.sounds = [
      new Sound("Countdown", "./RaceText/sounds/Countdown.mp3"),
      new Sound("Finish!", "./RaceText/sounds/Finish!.mp3"),
      new Sound("ChaChing", "./RaceText/sounds/ChaChing.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit),
      new Trigger(
        Trigger.BROADCAST,
        { name: "finish!" },
        this.whenIReceiveFinish
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Countdown sound" },
        this.whenIReceiveCountdownSound
      ),
      new Trigger(Trigger.BROADCAST, { name: "Lap" }, this.whenIReceiveLap)
    ];

    this.vars.id = -1;
    this.vars.var = -2;
  }

  *startAsClone() {
    if (this.toNumber(this.vars.id) === -2) {
      this.visible = true;
      this.effects.brightness = 100;
      this.moveAhead();
      for (let i = 0; i < 20; i++) {
        this.effects.brightness -= 1;
        this.size += (850 - this.size) / 55;
        this.effects.ghost += 5;
        yield;
      }
      this.visible = false;
      this.deleteThisClone();
    } else {
      this.visible = true;
      this.size = 600;
      this.effects.ghost = 100;
      this.vars.var = this.x;
      this.direction = 90;
      this.x = this.toNumber(this.vars.var) + -150;
      this.y = 75;
      this.moveAhead();
      for (let i = 0; i < 10; i++) {
        this.effects.ghost -= 7.5;
        this.x += (this.toNumber(this.vars.var) - this.x) / 2.25;
        yield;
      }
      this.x = this.toNumber(this.vars.var);
      yield* this.wait(1.75);
      this.vars.var = this.x + -2;
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 7.5;
        this.x += (this.toNumber(this.vars.var) - this.x) / -2;
        yield;
      }
      this.visible = false;
      this.deleteThisClone();
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.vars.id = -1;
  }

  *whenIReceiveInit() {
    yield* this.countdown();
  }

  *whenIReceiveFinish() {
    this.x = 0;
    this.effects.clear();
    this.audioEffects.volume = 100;
    yield* this.startSound("Finish!");
    this.moveAhead();
    this.effects.clear();
    this.costume = "Finish!";
    this.visible = true;
    this.size = 550;
    this.effects.ghost = 100;
    this.direction = 90;
    this.y = 0;
    for (let i = 0; i < 5; i++) {
      this.effects.ghost -= 20;
      this.size -= 40;
      yield;
    }
    this.size = 350;
    this.vars.id = -2;
    this.createClone();
    this.vars.id = -1;
    for (let i = 0; i < 60; i++) {
      this.size += (400 - this.size) / 15;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.size += (400 - this.size) / 15;
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    yield* this.wait(0.25);
    this.broadcast("Start Race");
    this.deleteThisClone();
  }

  *whenIReceiveCountdownSound() {
    for (let i = 0; i < 5; i++) {
      null;
      yield;
    }
    this.audioEffects.volume = 100;
    yield* this.startSound("Countdown");
  }

  *countdown() {
    this.visible = false;
    yield* this.wait(1.83);
    this.broadcast("Countdown sound");
    this.goto(0, 0);
    this.costume = 3;
    this.size = 300;
    for (let i = 0; i < 3; i++) {
      this.moveAhead();
      this.effects.clear();
      this.visible = true;
      this.y = 1000;
      this.size = 150;
      this.effects.ghost = 100;
      this.direction = 70;
      for (let i = 0; i < 5; i++) {
        this.effects.ghost -= 20;
        this.size += (350 - this.size) / 2;
        this.direction += (90 - this.direction) / 10;
        this.y += (0 - this.y) / 7;
        yield;
      }
      this.size = 350;
      for (let i = 0; i < 15; i++) {
        this.size += (500 - this.size) / 7;
        this.y += (0 - this.y) / 7;
        this.direction += (95 - this.direction) / 10;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.size += (502 - this.size) / -2;
        this.y += (15 - this.y) / -2;
        this.direction += (95 - this.direction) / 10;
        this.effects.ghost += 10;
        yield;
      }
      this.visible = false;
      this.costumeNumber++;
      yield;
    }
    this.moveAhead();
    this.effects.clear();
    this.direction = 90;
    this.visible = true;
    this.goto(0, 0);
    this.size = 850;
    this.effects.ghost = 100;
    for (let i = 0; i < 5; i++) {
      this.effects.ghost -= 20;
      this.size -= 80;
      yield;
    }
    this.size = 450;
    this.broadcast("GO!");
    this.vars.id = -2;
    this.createClone();
    this.vars.id = -1;
    for (let i = 0; i < 25; i++) {
      this.size += (500 - this.size) / 15;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.size += (500 - this.size) / -2;
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveLap() {
    this.audioEffects.volume = 100;
    yield* this.startSound("ChaChing");
  }
}
