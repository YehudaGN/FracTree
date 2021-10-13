import RandomBranch from "./random_branch";
import RandomLeaf from "./random_leaf";

class RandomTree {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.startX = this.canvas.width / 2;
    this.startY = this.canvas.height - 10;
    this.angle = 0;
    // make length smaller for smaller size screens
    this.length = Math.random() * (220 - 120) + 120;
    this.branchWidth = Math.random() * 140 + 1;
    this.leafColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;

    this.branchColor1 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    this.branchColor2 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;

    this.genTree();
  }

  genTree() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTree(
      this.ctx,
      this.startX,
      this.startY,
      this.length,
      this.angle,
      this.branchWidth,
      this.leafColor,
      this.branchColor1,
      this.branchColor2
    );
  }

  drawTree(
    ctx,
    startX,
    startY,
    length,
    angle,
    branchWidth,
    leafColor,
    branchColor1,
    branchColor2
  ) {

    new RandomBranch(
      ctx,
      startX,
      startY,
      length,
      angle,
      branchWidth,
      branchColor1,
      branchColor2
    );

    if (length < 10) {
      new RandomLeaf(ctx, length, leafColor);
      return;
    }

    // might want to change this later for more consistenly beautiful trees
    const angleChange1 = Math.random() * 25 + 5;
    const angleChange2 = Math.random() * 25 + 5;

    let newBranchWidth;
    if (branchWidth * 0.5 < 0.3) {
      newBranchWidth = 0.3;
    } else {
      newBranchWidth = branchWidth * 0.5;
    }

      // right side
      this.drawTree(
        ctx,
        0,
        -length,
        length * 0.75,
        angle + angleChange1,
        newBranchWidth,
        leafColor,
        branchColor1,
        branchColor2
      );

      // left side
      this.drawTree(
        ctx,
        0,
        -length,
        length * 0.75,
        angle - angleChange2,
        newBranchWidth,
        leafColor,
        branchColor1,
        branchColor2
      );

      ctx.restore();

  }
}

export default RandomTree;
