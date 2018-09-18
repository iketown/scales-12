import Dingmp3 from "./LittleDing.mp3";
import Popmp3 from "./Blop.mp3";
import Plinkmp3 from "./pling.mp3";
import KeyClickmp3 from "./KeyClick.mp3";

export const ding = () => {
  new Audio(Dingmp3).play();
};

export const pop = () => {
  const popAudio = new Audio(Popmp3);
  popAudio.play();
};

export const plink = () => {
  new Audio(Plinkmp3).play();
};

export const keyClick = () => {
  new Audio(KeyClickmp3).play();
};
