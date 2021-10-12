import RandomBranch from "./random_branch";
import RandomLeaf from "./random_leaf";

const ALLGOOD = false;
class RandomTree {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.startX = this.canvas.width / 2;
    this.startY = this.canvas.height - 10;
    this.angle = 0;
    // this.length = Math.floor(Math.random() * 100) + 80;
    this.length = Math.random() * (220 - 120) + 120;
    this.branchWidth = Math.random() * 140 + 1;
    this.color1 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    this.color2 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
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
      this.color1,
      this.color2
    );
  }

  drawTree(ctx, startX, startY, length, angle, branchWidth, color1, color2) {
    //   debugger
    //   if (this.allGood) {
    //     //   debugger
    //       return};
    // new Promise(() => {
    //   setTimeout(() => {
        new RandomBranch(
          ctx,
          startX,
          startY,
          length,
          angle,
          branchWidth,
          color1
        );
        if (length < 10) {
            new RandomLeaf(ctx, length, color2);
            //   this.ctx.restore();
            // debugger
            // this.allGood = true;
            return;
          }
    //   }, 1000);
    // })
    // .then(()=>{

        // if (length < 10) {
        //     // new RandomLeaf(ctx, length, color2);
        //     //   this.ctx.restore();
        //     return;
        // }
    // })
    // .then(() => {
      
    // });
    // debugger
    // might want to change this later for more consistenly beautiful trees
    const angleChange1 = Math.random() * 25 + 5;
    const angleChange2 = Math.random() * 25 + 5;

    //   add randomness to width shrink?
    //   let widthShrink = Math.random();
    //   let newBranchWidth;
    //   if (branchWidth * widthShrink < 0.3) {
    //     newBranchWidth = 0.3;
    //   } else {
    //     newBranchWidth = branchWidth * widthShrink;
    //   }
    let newBranchWidth;
    if (branchWidth * 0.5 < 0.3) {
      newBranchWidth = 0.3;
    } else {
      newBranchWidth = branchWidth * 0.5;
    }

    this.drawTree(
      ctx,
      0,
      -length,
      length * 0.75,
      angle + angleChange1,
      newBranchWidth,
      color1,
      color2
    );

    this.drawTree(
      ctx,
      0,
      -length,
      length * 0.75,
      angle - angleChange2,
      newBranchWidth,
      color1,
      color2
    );
    // debugger

    ctx.restore();
    // }, 100);--
  }
}

export default RandomTree;
