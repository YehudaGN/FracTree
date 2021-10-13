class Leaf {
  constructor(ctx, length, color) {
    this.ctx = ctx;
    this.length = length;
    this.color = color;
    this.drawLeaf();
    this.x = 0;
    this.y = -this.length;
  }

  drawLeaf() {
    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    let leafSize = document.getElementById('leaf-size');
    let leafFullness = document.getElementById('leaf-fullness');
    this.ctx.arc(0, -this.length, leafSize.value, 5, Math.PI / leafFullness.value); // can change for dif leaf shape
    this.ctx.fill();
    this.ctx.restore();
  }
}

export default Leaf;
