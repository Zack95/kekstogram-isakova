import { imagePreview } from "./scaleImage.js";
//const effectOriginal = document.querySelector(".effects__preview--none");
//const effectChrome = document.querySelector(".effects__preview--chrome");
//const effectSepia = document.querySelector(".effects__preview--sepia");
//const effectMarvin = document.querySelector(".effects__preview--marvin");
//const effectPhobos = document.querySelector(".effects__preview--phobos");
//const effectHeat = document.querySelector(".effects__preview--heat");
//const effectOriginal = "effects__preview--none";
//const effectChrome = "effects__preview--chrome";
//const effectSepia = "effects__preview--sepia";
//const effectMarvin = "effects__preview--marvin";
//const effectPhobos = "effects__preview--phobos";
//const effectHeat = "effects__preview--heat";

const sliderElement = document.querySelector(".effect-level__slider");
const sliderResult = document.querySelector(".effect-level__value");

const effectImageArray = [
  { "effects__preview--none": "none" },
  { "effects__preview--chrome": "grayscale" },
  { "effects__preview--sepia": "grayscale" },
  { "effects__preview--marvin": "grayscale" },
  { "effects__preview--phobos": "grayscale" },
  { "effects__preview--heat": "grayscale" },
];

function effectAccept(effectName, filterName) {
  imagePreview.className = "";
  imagePreview.removeAttribute("style");
  imagePreview.classList.add(`${effectName}`);
  if (filterName != "none") {
    imagePreview.style.filter = `${filterName}(1)`;
  }
}

//console.log(typeof effectImageArray);

effectImageArray.forEach((effects) => {
  //console.log(effectImage);
  for (const [name, filter] of Object.entries(effects)) {
    //console.log(`${key} ${value}`);
    document.querySelector(`.${name}`).addEventListener("click", (evt) => {
      effectAccept(`${name}`, `${filter}`);
    });
  }
});

//const valueElement = document.querySelector(".level-form__value");
//const specialElement = document.querySelector(".level-form__special");
//
//valueElement.value = 80;
//
//noUiSlider.create(sliderElement, {
//  range: {
//    min: 0,
//    max: 1,
//  },
//  start: 0,
//  step: 0.1,
//  connect: "lower",
//  format: {
//    to: function (value) {
//      if (Number.isInteger(value)) {
//        return value.toFixed(0);
//      }
//      return value.toFixed(1);
//    },
//    from: function (value) {
//      return parseFloat(value);
//    },
//  },
//});

//document
//  .querySelector(`.${effectOriginal}`)
//  .addEventListener("click", (evt) => {
//    effectAccept(`${effectOriginal}`);
//  });
//
//document.querySelector(`.${effectChrome}`).addEventListener("click", (evt) => {
//  effectAccept(`${effectChrome}`);
//});

//effectSepia.addEventListener("click", (evt) => {
//  imagePreview.className = "";
//  imagePreview.classList.add("effects__preview--sepia");
//});
//
//effectMarvin.addEventListener("click", (evt) => {
//  imagePreview.className = "";
//  imagePreview.classList.add("effects__preview--marvin");
//});
//
//effectPhobos.addEventListener("click", (evt) => {
//  imagePreview.className = "";
//  imagePreview.classList.add("effects__preview--phobos");
//});
//
//effectHeat.addEventListener("click", (evt) => {
//  imagePreview.className = "";
//  imagePreview.classList.add("effects__preview--heat");
//});
