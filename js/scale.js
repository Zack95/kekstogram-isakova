const scaleBigger = document.querySelector(".scale__control--bigger");
const scaleSmaller = document.querySelector(".scale__control--smaller");
export const scaleValueControl = document.querySelector(
  ".scale__control--value"
);
export const imagePreview = document.querySelector(".img-upload__preview img");
const scaleStep = 25;
const scaleMax = 100;
const scaleMin = 25;
export const scaleDefault = 100;

function scaleImage(scaleValue) {
  imagePreview.style.transform = `scale(${scaleValue / 100})`;
  scaleValueControl.value = `${scaleValue}%`;
}

function buttonBigger() {
  const scaleCurrentValue = parseInt(scaleValueControl.value, 10);
  let scaleNewValue = scaleCurrentValue + scaleStep;
  if (scaleNewValue > scaleMax) {
    scaleNewValue = scaleMax;
    scaleImage(scaleNewValue);
  }
  scaleImage(scaleNewValue);
}

function buttonSmaller() {
  const scaleCurrentValue = parseInt(scaleValueControl.value, 10);
  console.log(scaleCurrentValue);
  let scaleNewValue = scaleCurrentValue - scaleStep;
  if (scaleNewValue < scaleMin) {
    scaleNewValue = scaleMin;
    scaleImage(scaleNewValue);
  }
  scaleImage(scaleNewValue);
}

scaleBigger.addEventListener("click", () => {
  buttonBigger();
});

scaleSmaller.addEventListener("click", () => {
  buttonSmaller();
});
