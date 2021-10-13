class RandomBranch {
  constructor(ctx, startX, startY, length, angle, width, color1, color2) {
    this.ctx = ctx;
    this.startX = startX;
    this.startY = startY;
    this.length = length;
    this.angle = angle;
    this.width = width;
    this.color1 = color1;
    this.color2 = color2;
    this.drawBranch();
  }

  drawBranch() {
    this.ctx.beginPath();
    this.ctx.save();

    let grd = this.ctx.createLinearGradient(0, -this.length, this.width, this.length);
    grd.addColorStop(0, this.color1);
    grd.addColorStop(.5, this.color2);
    
    this.ctx.strokeStyle = grd;

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

    let curveAmount = Math.random() * (15);
    let curveSideChoose = Math.floor(Math.random() * 2);
    switch (curveSideChoose) {
        case 0:
            this.ctx.quadraticCurveTo(curveAmount, -this.length / 2, 0, -this.length);
            break;
        case 1:
            this.ctx.quadraticCurveTo(-curveAmount, -this.length / 2, 0, -this.length);
            break;
    }

    this.ctx.stroke();
  }
}

export default RandomBranch;
