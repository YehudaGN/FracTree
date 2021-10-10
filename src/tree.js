import Branch from "./branch";
import Leaf from "./leaf";

class Tree {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.startX = this.canvas.width / 2;
    this.startY = this.canvas.height - 150;
    // this.angle = 0;

    let widthSlider = document.getElementById("width-slider");
    let branchLengthSlider = document.getElementById("branch-length-slider");
    let treeColor = document.getElementById("tree-color");
    let leafColor = document.getElementById("leaf-color");
    let branchAngleSlider = document.getElementById("angle-slider");

    this.len = parseInt(branchLengthSlider.value);
    this.treeGradientButtons = document.querySelectorAll(
      'input[name="tree-gradient"]'
    );
    let treeColor1 = document.getElementById("tree-color-1");
    let treeColor2 = document.getElementById("tree-color-2");
    this.treeColor = [treeColor1, treeColor2];
    // this.treeColor = treeColor.value;
    this.branchWidth = widthSlider.value;
    this.leafColor = leafColor.value;
    this.angle = parseInt(branchAngleSlider.value);

    this.genTree();
  }

  genTree() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTree(
      this.ctx,
      this.startX,
      this.startY,
      this.len,
      this.angle,
      this.branchWidth,
      this.treeColor,
      this.leafColor
    );
  }

  drawTree(ctx, startX, startY, len, angle, branchWidth, treeColor, leafColor) {
    new Branch(ctx, startX, startY, len, angle, branchWidth, treeColor);

    if (len < 10) {
      new Leaf(ctx, len, leafColor);
      return;
    }

    let rightBranchAngle = parseInt(
      document.getElementById("right-branch-angle-slider").value
    );
    let leftBranchAngle = parseInt(
      document.getElementById("left-branch-angle-slider").value
    );

    //   requestAnimationFrame(() => {
    //right side

    // add randomness to width shrink?

    let newBranchWidth;
    if (branchWidth * 0.5 < 0.3) {
      newBranchWidth = 0.3;
    } else {
      newBranchWidth = branchWidth * 0.5;
    }

    let branchShrink = document.getElementById('branch-shrink').value;

    this.drawTree(
      ctx,
      0,
      -len,
      len * branchShrink,
      angle + rightBranchAngle,
      newBranchWidth,
      treeColor,
      leafColor
    );

    //left side
    this.drawTree(
      ctx,
      0,
      -len,
      len * branchShrink,
      angle - leftBranchAngle,
      newBranchWidth,
      treeColor,
      leafColor
    );
    //   });

    ctx.restore();
  }
}

export default Tree;
