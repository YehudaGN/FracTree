class Branch {
  constructor(ctx, X, Y, length, angle, width, color, scale) {
    this.ctx = ctx;
    this.X = X;
    this.Y = Y;
    this.length = length;
    this.angle = angle;
    this.width = width;
    this.scale = scale;
    this.color = this.ctx.createLinearGradient(
      0,
      -this.length,
      this.width,
      this.length / 4
    );
    this.color.addColorStop(0, color[0].value);
    this.color.addColorStop(0.5, color[1].value);
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
    this.ctx.translate(this.X, this.Y);
    this.ctx.rotate((this.angle * Math.PI) / 180);
    this.ctx.scale(this.scale, this.scale)
    this.ctx.moveTo(0, 0);
    let curveAmount = document.getElementById("curve-amount").value;
    this.ctx.quadraticCurveTo(curveAmount, -this.length / 2, 0, -this.length);
    this.ctx.stroke();
  }
}

export default Branch;
