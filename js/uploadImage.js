import { isEscapeKey } from "./util.js";
//import { scaleValue, scaleDefault } from "./scale.js";
import { scaleValueControl, scaleDefault } from "./scale.js";
import { imageUploadForm, pristine } from "./validation.js";

const uploadPhotoSection = document.querySelector(".img-upload__overlay");
const uploadTemplate = document.querySelector("#upload-file");
const cancelButton = document.querySelector("#upload-cancel");

uploadTemplate.onchange = function () {
  uploadPhotoSection.classList.remove("hidden");
  scaleValueControl.value = `${scaleDefault}%`;
  document.body.classList.add("modal-open");
};

const closephotoForm = () => {
  imageUploadForm.reset();
  pristine.reset();
  uploadPhotoSection.classList.add("hidden");
  document.body.classList.remove("modal-open");
};

cancelButton.addEventListener("click", () => {
  closephotoForm();
});

cancelButton.addEventListener("keydown", (evt) => {
  if (isEscapeKey(evt)) {
    closephotoForm();
  }
});
