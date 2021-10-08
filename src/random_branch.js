class RandomBranch {
  constructor(ctx, startX, startY, len, angle, width, color) {
    this.ctx = ctx;
    this.startX = startX;
    this.startY = startY;
    this.len = len;
    this.angle = angle;
    this.width = width;
    this.color = color;
    this.drawBranch();
  }

  drawBranch() {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.strokeStyle = this.color;

    // glow
    this.ctx.shadowBlur = Math.floor(Math.random() * 20) + 20;
    this.ctx.shadowColor = this.color;
    let randColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    this.ctx.shadowColor = randColor;

    this.ctx.lineWidth = this.width;
    this.ctx.translate(this.startX, this.startY);
    this.ctx.rotate((this.angle * Math.PI) / 180);
    this.ctx.moveTo(0, 0);

    this.ctx.quadraticCurveTo(10, -this.len / 2, 0, -this.len);

    this.ctx.stroke();
  }
}

export default RandomBranch;
