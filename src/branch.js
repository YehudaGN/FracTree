class Branch {
  constructor(ctx, startX, startY, length, angle, width, color) {
    this.ctx = ctx;
    this.startX = startX;
    this.startY = startY;
    // debugger
    this.length = length;
    this.angle = angle;
    this.width = width;

    this.color = this.ctx.createLinearGradient(
      0,
      -this.length,
      this.width,
      this.length / 4
    );
    this.color.addColorStop(0, color[0].value);
    this.color.addColorStop(0.5, color[1].value);

    // this.color = color;
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

    // this.ctx.lineTo(0, -this.length);
    let curveAmount = document.getElementById("curve-amount").value;
    this.ctx.quadraticCurveTo(curveAmount, -this.length / 2, 0, -this.length);

    this.ctx.stroke();
  }
}

export default Branch;
