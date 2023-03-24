const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const sliderElement = document.querySelector('.img-upload__scale');
const valueElement = document.querySelector('.scale__control--value');

valueElement.value = 55;

noUiSlider.create(sliderElement, {
  range: {
    min: 25,
    max: 100,
  },
  step: 25,
  connect: 'lower'
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});


scaleControlSmaller.addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    step: valueElement.value - 25,
  });
  
});

scaleControlBigger.addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    step: valueElement.value + 25,
  });
});


