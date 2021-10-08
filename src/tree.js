import Branch from "./branch";
import Leaf from "./leaf";

class Tree {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.startX = this.canvas.width / 2;
    this.startY = this.canvas.height - 150
    // this.angle = 0;
    
    let widthSlider = document.getElementById('width-slider');
    let branchLengthSlider = document.getElementById('branch-length-slider');
    let treeColor = document.getElementById('tree-color');
    let leafColor = document.getElementById('leaf-color');
    let branchAngleSlider = document.getElementById('angle-slider');

    this.len = branchLengthSlider.value;
    this.color1 = treeColor.value;
    this.branchWidth = widthSlider.value;
    this.color2 = leafColor.value;
    this.angle = parseInt(branchAngleSlider.value);

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
    new Branch(ctx, startX, startY, len, angle, branchWidth, color1);

    if (len < 10) {
      new Leaf(ctx, len, color2);
      return;
    }

    let rightBranchAngle = parseInt(document.getElementById('right-branch-angle-slider').value);
    let leftBranchAngle = parseInt(document.getElementById('left-branch-angle-slider').value);

    // const rightBranchAngle = Math.random() * 10 + 10;
    // const leftBranchAngle = Math.random() * 10 + 10;
    // switch (Math.floor(Math.random() * 2)) {
    //     case 0:
    //       angleChange = angleChange * 2;
    //       break;
    //     case 1:
    //       break;
    // }
  
    //   requestAnimationFrame(() => {
    //right side

    this.drawTree(
      ctx,
      0,
      -len,
      len * 0.75,
      angle + rightBranchAngle,
      branchWidth * 0.5,
      color1,
      color2
    );
  
    //left side
    this.drawTree(
      ctx,
      0,
      -len,
      len * 0.75,
      angle - leftBranchAngle,
      branchWidth * 0.5,
      color1,
      color2
    );
    //   });
  
    ctx.restore();
  }
}

export default Tree;