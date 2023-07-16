import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";
import RaceText from "./RaceText/RaceText.js";
import CpuPath from "./CpuPath/CpuPath.js";
import CoursesOveralls from "./CoursesOveralls/CoursesOveralls.js";
import Line from "./Line/Line.js";
import Boost from "./Boost/Boost.js";
import Background from "./Background/Background.js";
import CourseOnView from "./CourseOnView/CourseOnView.js";
import CurrentCourse from "./CurrentCourse/CurrentCourse.js";
import Template from "./Template/Template.js";
import ScratchCat from "./ScratchCat/ScratchCat.js";
import CutePikachu from "./CutePikachu/CutePikachu.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  RaceText: new RaceText({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 19.62807999065558,
    visible: false,
    layerOrder: 9
  }),
  CpuPath: new CpuPath({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 17,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  CoursesOveralls: new CoursesOveralls({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 17,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Line: new Line({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 17,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Boost: new Boost({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Background: new Background({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 18,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  CourseOnView: new CourseOnView({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 18,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  CurrentCourse: new CurrentCourse({
    x: 2,
    y: -327,
    direction: 90,
    costumeNumber: 17,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Template: new Template({
    x: -167,
    y: -40,
    direction: 0,
    costumeNumber: 1,
    size: 19.23076923076923,
    visible: false,
    layerOrder: 7
  }),
  ScratchCat: new ScratchCat({
    x: -184,
    y: -37,
    direction: 0,
    costumeNumber: 1,
    size: 19.23076923076923,
    visible: false,
    layerOrder: 11
  }),
  CutePikachu: new CutePikachu({
    x: -177,
    y: -38,
    direction: 0,
    costumeNumber: 1,
    size: 19.23076923076923,
    visible: false,
    layerOrder: 10
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
