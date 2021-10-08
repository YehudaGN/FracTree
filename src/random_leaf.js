class RandomLeaf {
    constructor(ctx, len, color) {
      this.ctx = ctx;
      this.len = len;
      this.color = color;
      this.drawLeaf();
    }
  
    drawLeaf() {
      this.ctx.strokeStyle = this.color;
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
 
      let randNum1 = Math.floor(Math.random() * 20) + 1;
      let randNum2 = Math.floor(Math.random() * 8) + 2;
      this.ctx.arc(0, -this.len, randNum1, 5, Math.PI / randNum2); // can change for dif leaf shape
      this.ctx.fill();
      this.ctx.restore();
    }
  }
  
  export default RandomLeaf;