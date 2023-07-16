/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Template extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Template", "./Template/costumes/Template.svg", {
        x: 214.43700058337134,
        y: 168.86646833127008
      }),
      new Costume("Main Hitbox", "./Template/costumes/Main Hitbox.svg", {
        x: 49.24595500000001,
        y: 16.167480000000012
      }),
      new Costume("Left Hitbox", "./Template/costumes/Left Hitbox.svg", {
        x: -87.39035999999999,
        y: 66.571655
      }),
      new Costume("Right Hitbox", "./Template/costumes/Right Hitbox.svg", {
        x: -86.820245,
        y: -60.601609999999994
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "GO!" }, this.whenIReceiveGo),
      new Trigger(Trigger.BROADCAST, { name: "GO!" }, this.whenIReceiveGo2),
      new Trigger(Trigger.BROADCAST, { name: "GO!" }, this.whenIReceiveGo3),
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit),
      new Trigger(Trigger.BROADCAST, { name: "Init" }, this.whenIReceiveInit2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "finish!" },
        this.whenIReceiveFinish
      )
    ];

    this.vars.speed = 3.4280546803972483;
    this.vars.slow = 1;
    this.vars.speedOffset = 0;
    this.vars.randomSpeed = 4.897220971996071;
    this.vars.lap = 1;
    this.vars.finish = 0;
    this.vars.name = "[YOUR NAME HERE]";
    this.vars.hideName = "N";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.helloMyNameIs("[YOUR NAME HERE]");
  }

  *turnLeft() {
    for (let i = 0; i < 10; i++) {
      if (
        this.touching(this.sprites["CpuPath"].andClones()) ||
        !(
          this.touching(this.sprites["CoursesOveralls"].andClones()) ||
          this.touching(this.sprites["CpuPath"].andClones())
        )
      ) {
        this.direction -= this.random(0.75, 13.5);
      }
    }
  }

  *turnRight() {
    for (let i = 0; i < 10; i++) {
      if (
        this.touching(this.sprites["CpuPath"].andClones()) ||
        !(
          this.touching(this.sprites["CoursesOveralls"].andClones()) ||
          this.touching(this.sprites["CpuPath"].andClones())
        )
      ) {
        this.direction += this.random(0.75, 13.5);
      }
    }
  }

  *whenIReceiveGo() {
    if (!(this.toString(this.vars.name) === "[YOUR NAME HERE]")) {
      this.vars.finish = 0;
      this.vars.speed = 0;
      this.vars.speedOffset = 0;
      while (true) {
        if (this.toNumber(this.vars.finish) === 0) {
          this.vars.slow = 0;
          this.costume = "Template";
          this.size = 50 / 4;
          this.costume = "Left Hitbox";
          if (
            this.touching(this.sprites["CpuPath"].andClones()) ||
            !(
              this.touching(this.sprites["CoursesOveralls"].andClones()) ||
              this.touching(this.sprites["CpuPath"].andClones())
            )
          ) {
            yield* this.turnRight();
            this.vars.slow = 1;
          }
          this.costume = "Right Hitbox";
          if (
            this.touching(this.sprites["CpuPath"].andClones()) ||
            !(
              this.touching(this.sprites["CoursesOveralls"].andClones()) ||
              this.touching(this.sprites["CpuPath"].andClones())
            )
          ) {
            yield* this.turnLeft();
            this.vars.slow = 1;
          }
          this.costume = "Main Hitbox";
          if (this.toNumber(this.vars.slow) === 1) {
            this.vars.speedOffset -= 0.05;
          } else {
            this.vars.speedOffset += 0.05;
          }
          if (this.compare(this.vars.speedOffset, 0.2) < 0) {
            this.vars.speedOffset = 0.2;
          }
          if (this.touching(this.sprites["Boost"].andClones())) {
            if (this.compare(this.vars.speedOffset, 2) > 0) {
              this.vars.speedOffset = 2;
            }
          } else {
            if (this.compare(this.vars.speedOffset, 1) > 0) {
              this.vars.speedOffset = 1;
            }
          }
          this.vars.speed =
            this.toNumber(this.vars.randomSpeed) *
            this.toNumber(this.vars.speedOffset);
          this.move(this.toNumber(this.vars.speed));
          this.costume = "Template";
          this.size = 50 / 2.6;
        } else {
          return;
        }
        yield;
      }
    }
  }

  *whenIReceiveGo2() {
    if (!(this.toString(this.vars.name) === "[YOUR NAME HERE]")) {
      while (true) {
        if (this.toNumber(this.vars.finish) === 0) {
          this.vars.randomSpeed = this.random(1.75, 5.1);
          yield* this.wait(this.random(0.5, 2));
        } else {
          return;
        }
        yield;
      }
    }
  }

  *whenIReceiveGo3() {
    if (!(this.toString(this.vars.name) === "[YOUR NAME HERE]")) {
      this.stage.vars.finished = 1;
      this.vars.finish = 0;
      this.vars.lap = 1;
      while (!this.touching(this.sprites["Line"].andClones())) {
        yield;
      }
      while (!!this.touching(this.sprites["Line"].andClones())) {
        yield;
      }
      while (true) {
        if (this.touching(this.sprites["Line"].andClones())) {
          this.broadcast("Lap");
          if (this.toNumber(this.vars.lap) === 3) {
            this.vars.finish = 1;
            this.vars.hideName = "Y";
            this.say(
              "Finished! Rank: " +
                (this.toString(this.stage.vars.finished) +
                  (" Time: " + this.toString(this.stage.vars.time)))
            );
            if (
              this.compare(
                this.stage.vars.finished,
                this.stage.vars.totalPlayers
              ) === 0
            ) {
              this.say(
                "Finished! Rank: " +
                  (this.toString(this.stage.vars.finished) +
                    (" Time: " + this.toString(this.stage.vars.time)))
              );
              this.broadcast("finish!");
              this.say("");
            }
            this.stage.vars.finished++;
            return;
          } else {
            this.vars.lap++;
            yield* this.lap();
          }
          while (!!this.touching(this.sprites["Line"].andClones())) {
            yield;
          }
        }
        yield;
      }
    }
  }

  *helloMyNameIs(name) {
    this.vars.name = name;
  }

  *lap() {
    this.vars.hideName = "Y";
    yield* this.sayAndWait("Lap " + (this.toString(this.vars.lap) + "/3"), 2);
    this.vars.hideName = "N";
  }

  *whenIReceiveInit() {
    if (!(this.toString(this.vars.name) === "[YOUR NAME HERE]")) {
      this.moveAhead();
      this.costume = "Template";
      this.size = 50 / 2.6;
      this.visible = true;
      this.goto(
        this.toNumber(
          this.itemOf(
            this.stage.vars.startPositionsX,
            this.stage.vars.course - 1
          )
        ) + this.random(-10, 10),
        this.toNumber(
          this.itemOf(
            this.stage.vars.startPositionsY,
            this.stage.vars.course - 1
          )
        ) + this.random(-10, 10)
      );
      this.direction = this.toNumber(
        this.itemOf(this.stage.vars.startRotation, this.stage.vars.course - 1)
      );
      this.vars.speedOffset = 0;
      this.stage.vars.totalPlayers = 0;
      yield* this.wait(0);
      this.stage.vars.totalPlayers++;
    }
  }

  *whenIReceiveInit2() {
    if (!(this.toString(this.vars.name) === "[YOUR NAME HERE]")) {
      this.vars.lap = 1;
      this.say("");
      this.vars.hideName = "N";
      while (true) {
        if (this.toString(this.vars.hideName) === "N") {
          if (this.touching("mouse")) {
            this.think(
              this.toString(this.vars.name) +
                (" | Lap " + (this.toString(this.vars.lap) + "/3"))
            );
          } else {
            this.think("");
          }
        }
        yield;
      }
    }
  }

  *whenIReceiveFinish() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
