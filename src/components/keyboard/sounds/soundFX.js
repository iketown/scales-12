import React from "react";
import Dingmp3 from "./LittleDing.mp3";
import Popmp3 from "./Blop.mp3";
import Plinkmp3 from "./pling.mp3";
export const ding = () => {
  new Audio(Dingmp3).play();
};

export const pop = () => {
  new Audio(Popmp3).play();
};

export const plink = () => {
  new Audio(Plinkmp3).play();
};