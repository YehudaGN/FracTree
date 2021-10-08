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
});
