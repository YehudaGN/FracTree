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
    // this.ctx.strokeStyle = this.color;

    let color1 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    let color2 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    let color3 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;

    let grd = this.ctx.createLinearGradient(0, -this.len, this.width, this.len);
    grd.addColorStop(0, color1);
    grd.addColorStop(.5, color2);
    grd.addColorStop(1, color3);
    
    // let grd = this.ctx.createRadialGradient(0,-this.len,this.width/4,this.width/2,this.len/2,this.width);
    // grd.addColorStop(0,"red");
    // grd.addColorStop(1,"blue");
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

    this.ctx.quadraticCurveTo(10, -this.len / 2, 0, -this.len);

    this.ctx.stroke();
  }
}

export default RandomBranch;
