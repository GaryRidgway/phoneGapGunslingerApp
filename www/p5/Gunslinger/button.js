function button(x, y, w, h, scale) {
  this.scale = scale;
  this.sW = w * this.scale;
  this.sH = h * this.scale;
  this.color = '#ebebeb';
  this.border = '#d6d6d6';
  this.text = '';
  this.show = function() {
    push();
    // Make the actual Button.
    strokeWeight(1*this.scale);
    stroke(this.border);
    fill(this.color);
    rect(x, y, this.sW, this.sH);
    // Structure the text.
    push();
    textAlign(CENTER);
    textSize(16);
    fill(0);
    text('CLICK ME', this.sW/2, this.sH/2)
    pop();
    pop();
  }
  this.setText = function() {

  }

  mouseClicked = (function() {
    var cached_function = mouseClicked;
    return function() {
        if(mouseX > x &&
           mouseY > y &&
           mouseX < x + w * scale &&
           mouseY < y + h * scale) {
          console.log('HELLO');
        }
        var result = cached_function.apply(this, arguments);
        return result;
    };
  })();
}
