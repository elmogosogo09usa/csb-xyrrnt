/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("None", "./Stage/costumes/None.png", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("Get Ready!", "./Stage/sounds/Get Ready!.mp3"),
      new Sound("Track 1", "./Stage/sounds/Track 1.mp3"),
      new Sound("Track 2", "./Stage/sounds/Track 2.mp3"),
      new Sound("Track 3", "./Stage/sounds/Track 3.mp3"),
      new Sound("Track 4", "./Stage/sounds/Track 4.mp3"),
      new Sound("Track 5", "./Stage/sounds/Track 5.mp3"),
      new Sound("Track 6", "./Stage/sounds/Track 6.mp3"),
      new Sound("Track 7", "./Stage/sounds/Track 7.mp3"),
      new Sound("Track 8", "./Stage/sounds/Track 8.mp3"),
      new Sound("Track 9", "./Stage/sounds/Track 9.mp3"),
      new Sound("Track 10", "./Stage/sounds/Track 10.mp3"),
      new Sound("Track 11", "./Stage/sounds/Track 11.mp3"),
      new Sound("Track 12", "./Stage/sounds/Track 12.mp3"),
      new Sound("Track 13", "./Stage/sounds/Track 13.mp3"),
      new Sound("Track 14", "./Stage/sounds/Track 14.mp3"),
      new Sound("Track 15", "./Stage/sounds/Track 15.mp3"),
      new Sound("Track 16", "./Stage/sounds/Track 16.mp3"),
      new Sound("Track 17", "./Stage/sounds/Track 17.mp3"),
      new Sound("Track 18", "./Stage/sounds/Track 18.mp3"),
      new Sound("Track 19", "./Stage/sounds/Track 19.mp3"),
      new Sound("Track 20", "./Stage/sounds/Track 20.mp3"),
      new Sound("Track 21", "./Stage/sounds/Track 21.mp3"),
      new Sound("Track 22", "./Stage/sounds/Track 22.mp3"),
      new Sound("Track 23", "./Stage/sounds/Track 23.mp3"),
      new Sound("Track 24", "./Stage/sounds/Track 24.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "GO!" }, this.whenIReceiveGo),
      new Trigger(Trigger.BROADCAST, { name: "GO!" }, this.whenIReceiveGo2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "finish!" },
        this.whenIReceiveFinish
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Race" },
        this.whenIReceiveStartRace
      )
    ];

    this.vars._0001Seconds = 23;
    this.vars.finished = 1;
    this.vars.time = "00:07.993";
    this.vars.minutes = 0;
    this.vars.seconds = 8;
    this.vars.totalPlayers = 2;
    this.vars.count = 8023;
    this.vars.course = 17;
    this.vars.startRotation = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      90,
      -90,
      0,
      0,
      -90,
      0,
      0,
      0,
      0,
      0,
      65,
      0,
      -90,
      0
    ];
    this.vars.startPositionsX = [
      -200,
      -200,
      -200,
      205,
      -190,
      -50,
      190,
      -150,
      -195,
      195,
      -31,
      19,
      198,
      -169,
      1,
      -189,
      -185,
      -80,
      200,
      55,
      -103,
      -195,
      81,
      -171
    ];
    this.vars.startPositionsY = [
      -18,
      -35,
      -15,
      0,
      40,
      50,
      -60,
      10,
      -35,
      -35,
      131,
      -146,
      -21,
      -35,
      -144,
      -27,
      -30,
      30,
      -25,
      45,
      111,
      -84,
      -127,
      -50
    ];
  }

  *quick() {
    for (let i = 0; i < 8; i++) {
      this.vars.startRotation.push(0);
    }
  }

  *whenIReceiveGo() {
    while (true) {
      if (this.compare(this.vars.minutes, 9) > 0) {
        if (this.compare(Math.floor(this.toNumber(this.vars.seconds)), 9) > 0) {
          this.vars.time =
            this.toString(this.vars.minutes) +
            (":" +
              (this.toString(this.vars.seconds) +
                ("." + this.toString(this.vars._0001Seconds))));
        } else {
          this.vars.time =
            this.toString(this.vars.minutes) +
            (":" +
              ("0" +
                (this.toString(this.vars.seconds) +
                  ("." + this.toString(this.vars._0001Seconds)))));
        }
      } else {
        if (this.compare(Math.floor(this.toNumber(this.vars.seconds)), 9) > 0) {
          this.vars.time =
            "0" +
            this.toString(this.vars.minutes) +
            (":" +
              (this.toString(this.vars.seconds) +
                ("." + this.toString(this.vars._0001Seconds))));
        } else {
          this.vars.time =
            "0" +
            this.toString(this.vars.minutes) +
            (":" +
              ("0" +
                (this.toString(this.vars.seconds) +
                  ("." + this.toString(this.vars._0001Seconds)))));
        }
      }
      this.vars.count = Math.floor(this.timer * 1000);
      if (
        this.compare(
          Math.floor(this.toNumber(this.vars.count) / 1000 / 60),
          99
        ) > 0
      ) {
        this.vars.minutes = 99;
        this.vars.seconds = 59;
        this.vars._0001Seconds = 999;
      } else {
        this.vars.minutes = Math.floor(
          this.toNumber(this.vars.count) / 1000 / 60
        );
        this.vars.seconds = Math.floor(
          (this.toNumber(this.vars.count) / 1000) % 60
        );
        this.vars._0001Seconds = Math.floor(
          this.toNumber(this.vars.count) % 1000
        );
        yield* this.check0s();
      }
      yield;
    }
  }

  *check0s() {
    for (
      let i = 0;
      i <
      3 -
        this.toString(Math.floor(this.toNumber(this.vars.count) % 1000)).length;
      i++
    ) {
      this.vars._0001Seconds = "0" + this.toString(this.vars._0001Seconds);
    }
  }

  *whenIReceiveGo2() {
    this.restartTimer();
    yield* this.wait(1);
    while (true) {
      yield* this.playSoundUntilDone(
        "Track " + this.toString(this.vars.course)
      );
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.vars.totalPlayers = 0;
    this.costume = "None";
    this.audioEffects.volume = 100;
  }

  *whenIReceiveFinish() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked2() {
    this.vars.startPositionsX = [];
    this.vars.startPositionsY = [];
    this.vars.startRotation = [];
    yield* this.quick();
    this.vars.startPositionsX.push(-200);
    this.vars.startPositionsY.push(-18);
    this.vars.startPositionsX.push(-200);
    this.vars.startPositionsY.push(-35);
    this.vars.startPositionsX.push(-200);
    this.vars.startPositionsY.push(-15);
    this.vars.startPositionsX.push(205);
    this.vars.startPositionsY.push(0);
    this.vars.startPositionsX.push(-190);
    this.vars.startPositionsY.push(40);
    this.vars.startPositionsX.push(-50);
    this.vars.startPositionsY.push(50);
    this.vars.startPositionsX.push(190);
    this.vars.startPositionsY.push(-60);
    this.vars.startPositionsX.push(-150);
    this.vars.startPositionsY.push(10);
    this.vars.startPositionsX.push(-195);
    this.vars.startPositionsY.push(-35);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(195);
    this.vars.startPositionsY.push(-35);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(-31);
    this.vars.startPositionsY.push(131);
    this.vars.startRotation.push(90);
    this.vars.startPositionsX.push(19);
    this.vars.startPositionsY.push(-146);
    this.vars.startRotation.push(-90);
    this.vars.startPositionsX.push(198);
    this.vars.startPositionsY.push(-21);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(-169);
    this.vars.startPositionsY.push(-35);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(1);
    this.vars.startPositionsY.push(-144);
    this.vars.startRotation.push(-90);
    this.vars.startPositionsX.push(-189);
    this.vars.startPositionsY.push(-27);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(-185);
    this.vars.startPositionsY.push(-30);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(-80);
    this.vars.startPositionsY.push(30);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(200);
    this.vars.startPositionsY.push(-25);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(55);
    this.vars.startPositionsY.push(45);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(-103);
    this.vars.startPositionsY.push(111);
    this.vars.startRotation.push(65);
    this.vars.startPositionsX.push(-195);
    this.vars.startPositionsY.push(-84);
    this.vars.startRotation.push(0);
    this.vars.startPositionsX.push(81);
    this.vars.startPositionsY.push(-127);
    this.vars.startRotation.push(-90);
    this.vars.startPositionsX.push(-171);
    this.vars.startPositionsY.push(-50);
    this.vars.startRotation.push(0);
    this.broadcast("Start Race");
  }

  *whenIReceiveInit() {
    yield* this.playSoundUntilDone("Get Ready!");
  }

  *whenIReceiveStartRace() {
    this.vars.course = this.random(1, this.vars.startPositionsX.length);
    this.broadcast("Init");
  }
}
