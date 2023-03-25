import { isEscapeKey } from "./util.js";
import {
  scaleValueControl,
  scaleDefault,
  imagePreview,
  scaleImageReset,
} from "./scaleImage.js";
import { imageUploadForm, pristine } from "./validation.js";
import { effectChange } from "./filter.js";

const imageUploadOverlay = document.querySelector(".img-upload__overlay");
const imageUpload = document.querySelector("#upload-file");
const imageUploadCancel = document.querySelector("#upload-cancel");

function openImageRedactor() {
  imageUploadOverlay.classList.remove("hidden");
  scaleValueControl.value = `${scaleDefault}%`;
  document.body.classList.add("modal-open");
  imageUploadForm.addEventListener("change", effectChange);
}

function closeImageRedactor() {
  imageUploadForm.reset();
  pristine.reset();
  imagePreview.style.transform = `scale(${scaleDefault / 100})`;
  imageUploadOverlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

imageUpload.addEventListener("change", openImageRedactor);

imageUploadCancel.addEventListener("click", () => {
  closeImageRedactor();
});

imageUploadCancel.addEventListener("keydown", (evt) => {
  if (isEscapeKey(evt)) {
    closeImageRedactor();
  }
});
