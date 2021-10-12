import { generateTree, drawTree } from "./tree";
import Tree from "./tree";
import RandomTree from "./random_tree";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth / 1.5;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext("2d");
  const genTreeButton = document.querySelector(".generate-tree-button");
  const genRandTreeButton = document.querySelector(
    ".generate-random-tree-button"
  );

  new RandomTree(ctx, canvas);

  genTreeButton.addEventListener("click", e => {
    e.preventDefault();
    new Tree(ctx, canvas);
  });
  genRandTreeButton.addEventListener("click", e => {
    e.preventDefault();
    new RandomTree(ctx, canvas);
  });

  const zoom = document.getElementById("zoom");
  zoom.addEventListener("click", e => {
    e.preventDefault();
    let scale = 0.9;
    new Tree(ctx, canvas, scale);
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
