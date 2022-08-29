import Tree from "./tree";
import RandomTree from "./random_tree";

let tree;
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth / 1.5;
  canvas.height = window.innerHeight / 1.09;

  const ctx = canvas.getContext("2d");
  const genTreeButton = document.querySelector(".generate-tree-button");
  const genRandTreeButton = document.querySelector(
    ".generate-random-tree-button"
  );

  const downloadImageBtn = document.querySelector(".download-image-button");
  downloadImageBtn.addEventListener("click", (e) => {
    e.preventDefault();
    downloadImage();
  });

  const downloadImage = () => {
    let img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let link = document.createElement("a");
    link.href = img;
    link.download = "tree.png";
    document.body.appendChild(link);
    link.click();
  }

  new RandomTree(ctx, canvas);
  genTreeButton.addEventListener("click", e => {
    e.preventDefault();
    tree = new Tree(ctx, canvas);
  });
  genRandTreeButton.addEventListener("click", e => {
    e.preventDefault();
    new RandomTree(ctx, canvas);
  });

  let description = document.getElementById("description");
  let descText = document.getElementById("desc-text");
  let descriptionModal = document.getElementById("description-modal");
  let closeDescModal = document.getElementById("close-desc-modal");

  description.onclick = () => {
    descriptionModal.classList.toggle("modal-open");
  };

  closeDescModal.onclick = e => {
    e.stopPropagation();
    descriptionModal.classList.toggle("modal-open");
  };

  let instructions = document.getElementById("instructions");
  let instrText = document.getElementById("instr-text");
  let instructionsModal = document.getElementById("instructions-modal");
  let closeInstrModal = document.getElementById("close-instr-modal");

  instructions.onclick = () => {
    instructionsModal.classList.toggle("modal-open");
  };

  closeInstrModal.onclick = e => {
    e.stopPropagation();
    instructionsModal.classList.toggle("modal-open");
  };

  window.onclick = function (event) {
    if (
      event.target !== descriptionModal &&
      event.target !== description &&
      event.target !== descText &&
      descriptionModal.classList[1] === "modal-open"
    ) {
      descriptionModal.classList.toggle("modal-open");
    }
    if (
      event.target !== instructionsModal &&
      event.target !== instructions &&
      event.target !== instrText &&
      instructionsModal.classList[1] === "modal-open"
    ) {
      instructionsModal.classList.toggle("modal-open");
    }
  };
});
