function barrel(x ,y, chambers, scale, bgColor, canvas, gunIndex) {
  this.scale = scale;
  this.pos = [x, y];
  this.chambers = chambers;
  this.bgColor = bgColor;
  this.guncanvas = canvas;
  this.cChamber = 0;
  this.bullets = [];
  while(this.bullets.length < this.chambers) {
    this.bullets.push(1);
  }
  this.rolls = [null,null,null,null,null,null];
  this.isOn = true;

  // Rotation Variables
  this.rotateCounter = 0;
  this.rotationCycle = 0;
  this.rotationSpeed = 5;

  // This should handle all of the visuals.
  this.show = function() {
    this.guncanvas.push();
    this.guncanvas.translate(this.pos[0],this.pos[1]);
    // Rotate the whole thing.
    if (this.rotationCycle != 0){
      this.rotateCounter++;
      this.rotationCycle--;
    }
    this.guncanvas.rotate(-TAU/this.chambers/this.rotationSpeed*this.rotateCounter);
    this.guncanvas.rotate(-TAU/this.chambers/2);
    this.guncanvas.strokeWeight(2*this.scale);
    this.guncanvas.stroke('#929292');
    this.guncanvas.fill('#bebebe');
    this.guncanvas.ellipse(0, 0, 200*this.scale);
    this.guncanvas.fill(this.bgColor);
    this.guncanvas.ellipse(0, 0, 20*this.scale);

    this.guncanvas.push();
    counter = 0;
    while(counter<this.chambers) {
      // Draw the chambers.
      this.guncanvas.rotate(TAU/this.chambers/2);
      this.guncanvas.ellipse(0, -65*this.scale, 50*this.scale);
      // Draw the bullets.
      if(this.bullets[counter] == 1) {
        this.guncanvas.push();
        this.guncanvas.stroke('#b8a233');
        this.guncanvas.fill('#e2c656');
        this.guncanvas.ellipse(0, -65*this.scale, 45*this.scale);
        this.guncanvas.fill('#d6d6d6');
        this.guncanvas.ellipse(0, -65*this.scale, 22*this.scale);
        this.guncanvas.strokeWeight(1*this.scale);
        this.guncanvas.stroke('#b1b1b1');
        this.guncanvas.ellipse(0, -65*this.scale, 20*this.scale);
        this.guncanvas.pop();
      }

      // Draw the rolls
      if (this.rolls[counter] != null){
        this.guncanvas.push();
        this.guncanvas.textAlign(CENTER, CENTER);
        this.guncanvas.textSize(24*this.scale);
        this.guncanvas.textStyle(BOLD);
        this.guncanvas.fill(255);
        this.guncanvas.noStroke();
        this.guncanvas.translate(0, -65*this.scale);
        this.guncanvas.rotate(-TAU/this.chambers*counter)
        this.guncanvas.rotate(TAU/this.chambers/this.rotationSpeed*this.rotateCounter);
        this.guncanvas.text(this.rolls[counter], 0, 0);
        this.guncanvas.pop()
      }

      // Draw the slices.
      this.guncanvas.rotate(TAU/this.chambers/2);
      this.guncanvas.push();
      this.guncanvas.noStroke();
	    this.guncanvas.fill(this.bgColor);
      // Only draw slices if you have 6 or less chambers, anything else gets really messy really quick.
      if(this.chambers<=6){
        this.guncanvas.ellipse(0, (48.75*this.chambers - 407.5)*this.scale, (-112.5*this.chambers + 725)*this.scale);
      }
      this.guncanvas.pop();

      counter++;
    }
    this.guncanvas.pop();
    this.guncanvas.pop();
  }
  this.updatePos = function(nX, nY, nScale) {
    this.pos = [nX,nY];
	this.scale = nScale;
  }
  this.shoot = function() {
    // Check if there are bullets in the chamber.
    if(this.bullets.indexOf(1) !== -1){
      // Tell the barrel to rotate;
      this.rotationCycle+= this.rotationSpeed;
      // Do the shooting
      this.bullets[this.cChamber] = 0;
      // Push a D20 roll;
      this.rolls[this.cChamber] = (Math.floor(Math.random() * (20 - 1 + 1)) + 1);
      this.cChamber = (this.cChamber+1)%this.chambers;
    }
  }
  this.reload = function() {
	  if(this.rotationCycle == 0&&
		this.bullets.includes(0)){
	      for (i = 0; i < this.bullets.length; i++) {
            // Replace all the bullets used.
            this.bullets[i] = 1;
            // Reset all the bullets.
            this.rolls[i] = null;
          }
          this.rotationCycle+= this.rotationSpeed*this.chambers;
		}
  }

  this.on = function(state) {
    this.isOn = state;
  }
}






















