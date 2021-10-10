import Branch from "./branch";
import Leaf from "./leaf";

class Tree {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.X = this.canvas.width / 2;
    this.Y = this.canvas.height - 150;
    // this.angle = 0;

    let widthSlider = document.getElementById("width-slider");
    let branchLengthSlider = document.getElementById("branch-length-slider");
    // let treeColor = document.getElementById("tree-color");
    let leafColor = document.getElementById("leaf-color");
    let branchAngleSlider = document.getElementById("angle-slider");

    this.length = parseInt(branchLengthSlider.value);
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

    this.branches = [];
    this.leaves = [];
    this.genTree();
}

genTree() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTree(
        this.ctx,
        this.X,
        this.Y,
        this.length,
        this.angle,
        this.branchWidth,
        this.treeColor,
        this.leafColor
        );
    }
    
    drawTree(ctx, X, Y, length, angle, branchWidth, treeColor, leafColor) {
        this.branches.push(new Branch(ctx, X, Y, length, angle, branchWidth, treeColor));
        // debugger
        if (length < 10) {
            this.leaves.push(new Leaf(ctx, length, leafColor));
            // debugger
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
    
    // let lengthTracker = this.length
    // let branchLengthsArray = [];
    // while (lengthTracker  > 10) {
    //     let currentBranchLength = lengthTracker;
    //     branchLengthsArray.push(currentBranchLength);
    //     lengthTracker *= branchShrink;
    //     // debugger
    // }

    this.drawTree(
      ctx,
      0,
      -length,
      length * branchShrink,
      angle + rightBranchAngle,
      newBranchWidth,
      treeColor,
      leafColor
    );

    //left side
    this.drawTree(
      ctx,
      0,
      -length,
      length * branchShrink,
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
