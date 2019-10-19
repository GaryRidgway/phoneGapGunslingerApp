function gritCounter(x, y, grit) {
  this.cx = x;
  this.cy = y;
  this.gCounter = grit;
  this.scale = 1.5;
  

  this.show = function() {
    push();
    textSize(40/2*this.scale);
    textAlign(CENTER, CENTER);
    fill('#f1f1f1');
    stroke('#f1f1f1');
    push();
    strokeWeight(7/2*this.scale);
    // Top chevron.
    line(this.cx-15/2*this.scale, this.cy-25/2*this.scale, this.cx, this.cy-40/2*this.scale);
    line(this.cx+15/2*this.scale, this.cy-25/2*this.scale, this.cx, this.cy-40/2*this.scale);
    // Bottom chevron.
    line(this.cx-15/2*this.scale, this.cy+25/2*this.scale, this.cx, this.cy+40/2*this.scale);
    line(this.cx+15/2*this.scale, this.cy+25/2*this.scale, this.cx, this.cy+40/2*this.scale);
    pop();
    text(this.gCounter.toString(), this.cx, this.cy);
    text('GRIT', this.cx, this.cy - 70/2*this.scale);
    pop();
  }

  this.checkClicked = function() {
    if (mouseX > this.cx - 22/2*this.scale &&
        mouseX < this.cx + 22/2*this.scale &&
        mouseY > this.cy - 45/2*this.scale &&
        mouseY < this.cy) {
      this.gCounter++;
    }
    else if (mouseX > this.cx - 22/2*this.scale &&
        mouseX < this.cx + 22/2*this.scale &&
        mouseY > this.cy &&
        mouseY < this.cy + 45/2*this.scale) {
      this.gCounter--;
    }
  }

  this.updatePos = function(x, y) {
    this.cx = x;
    this.cy = y;
  }
}
