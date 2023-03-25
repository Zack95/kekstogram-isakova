import { isEscapeKey } from "./util.js";
import { scaleValueControl, scaleDefault, imagePreview } from "./scaleImage.js";
import { imageUploadForm, pristine } from "./validation.js";
import { effectChange } from "./filter.js";

const imageUploadOverlay = document.querySelector(".img-upload__overlay");
const imageUpload = document.querySelector("#upload-file");
const cancelButton = document.querySelector("#upload-cancel");

imageUpload.onchange = function () {
  imageUploadOverlay.classList.remove("hidden");
  scaleValueControl.value = `${scaleDefault}%`;
  document.body.classList.add("modal-open");
  imageUploadForm.addEventListener("change", effectChange);
};

const closephotoForm = () => {
  imageUploadForm.reset();
  pristine.reset();
  imagePreview.style.transform = `scale(${scaleDefault / 100})`;
  imageUploadOverlay.classList.add("hidden");
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
