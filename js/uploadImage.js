import { isEscapeKey } from "./util.js";
import {
  scaleValueControl,
  scaleDefault,
  imagePreview,
  scaleImageReset,
} from "./scaleImage.js";
import { imageUploadForm, pristine } from "./validation.js";
import { effectChange, effectReset } from "./filter.js";

const imageUploadOverlay = document.querySelector(".img-upload__overlay");
const imageUpload = document.querySelector("#upload-file");
const imageUploadCancel = document.querySelector("#upload-cancel");

function closeImageRedactor() {
  imageUploadForm.reset();
  pristine.reset();
  imageUploadOverlay.classList.add("hidden");
  document.body.classList.remove("modal-open");

  scaleImageReset();
  effectReset();

  imageUploadCancel.removeEventListener("click", closeImageRedactor);
}

function openImageRedactor() {
  imageUploadOverlay.classList.remove("hidden");
  scaleValueControl.value = `${scaleDefault}%`;
  document.body.classList.add("modal-open");

  imageUploadForm.addEventListener("change", effectChange);
  imageUploadCancel.addEventListener("click", closeImageRedactor);
}

imageUpload.addEventListener("change", openImageRedactor);

//imageUploadCancel.addEventListener("click", () => {
//  closeImageRedactor();
//});

imageUploadCancel.addEventListener("keydown", (evt) => {
  if (isEscapeKey(evt)) {
    closeImageRedactor();
  }
});
