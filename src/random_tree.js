import RandomBranch from "./random_branch";
import RandomLeaf from "./random_leaf";

class RandomTree {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.startX = this.canvas.width / 2;
    this.startY = this.canvas.height - 150
    this.angle = 0;
    // this.len = Math.floor(Math.random() * 100) + 80;
    this.len = Math.random() * (150 - 120) + 120;
    this.branchWidth = Math.random() * 140 + 1;
    this.color1 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    this.color2 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    this.genTree();
  }

  genTree () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTree(
      this.ctx,
      this.startX,
      this.startY,
      this.len,
      this.angle,
      this.branchWidth,
      this.color1,
      this.color2
    );
  }

  drawTree(ctx, startX, startY, len, angle, branchWidth, color1, color2) {
    new RandomBranch(ctx, startX, startY, len, angle, branchWidth, color1);

    if (len < 10) {
      new RandomLeaf(ctx, len, color2);
      return;
    }
    const angleChange1 = Math.random() * 50 + 5;
    const angleChange2 = Math.random() * 50 + 5;

    // might want to change this later for more consistenly beautiful trees
    // const angleChange1 = Math.random() * 10 + 10;
    // const angleChange2 = Math.random() * 10 + 10;


    // add condition for minimum branch width
    let newBranchWidth;
    if (branchWidth * 0.5 < .3) {
      newBranchWidth = .3;
    } else {
      newBranchWidth = branchWidth * 0.5;
    }

    this.drawTree(
      ctx,
      0,
      -len,
      len * 0.75,
      angle + angleChange1,
      newBranchWidth,
      color1,
      color2
    );
  


    this.drawTree(
      ctx,
      0,
      -len,
      len * 0.75,
      angle - angleChange2,
      newBranchWidth,
      color1,
      color2
    );
  
    ctx.restore();
  }
}

export default RandomTree;