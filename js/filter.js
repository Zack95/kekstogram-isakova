import { imagePreview } from "./scaleImage.js";
const sliderElement = document.querySelector(".effect-level__slider");
const sliderResult = document.querySelector(".effect-level__value");

const imageEffect = [
  { name: "none", filter: "none", min: 0, max: 100, step: 1 },
  { name: "chrome", filter: "grayscale", min: 0, max: 1, step: 0.1, unit: "" },
  { name: "sepia", filter: "sepia", min: 0, max: 1, step: 0.1, unit: "" },
  { name: "marvin", filter: "invert", min: 0, max: 100, step: 1, unit: "%" },
  { name: "phobos", filter: "blur", min: 0, max: 3, step: 0.1, unit: "px" },
  { name: "heat", filter: "brightness", min: 1, max: 3, step: 0.1, unit: "" },
];

export function effectChange(evt) {
  if (evt.target.classList.contains("effects__radio")) {
    const effectName = evt.target.value;
    imagePreview.className = `effects__preview--${effectName}`;
    currentEffect = imageEffect.find((effect) => effect.name === effectName);
    //updateSlider();
  }
}
