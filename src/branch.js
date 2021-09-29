class Branch {
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
    let glowColor = document.getElementById("glow-color");
    this.ctx.shadowColor = glowColor.value;
    let glowStrength = document.getElementById("glow-strength");
    this.ctx.shadowBlur = glowStrength.value;
    this.ctx.lineWidth = this.width;
    this.ctx.translate(this.startX, this.startY);
    this.ctx.rotate((this.angle * Math.PI) / 180);
    this.ctx.moveTo(0, 0);
    // add button for straight line tree vs quadratic curve?
    // this.ctx.lineTo(0, -this.len);

    this.ctx.quadraticCurveTo(10, -this.len / 2, 0, -this.len);

    this.ctx.stroke();
  }
}

export default Branch;
