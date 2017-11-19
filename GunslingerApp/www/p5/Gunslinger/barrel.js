function barrel(x ,y, chambers, scale, bgColor) {
  this.scale = scale;
  this.pos = [x, y];
  this.chambers = chambers;
  this.bgColor = bgColor
  this.cChamber = 0;
  this.bullets = [];
  while(this.bullets.length < this.chambers) {
    this.bullets.push(1);
  }
  this.rolls = [null,null,null,null,null,null];

  // Rotation Variables
  this.rotateCounter = 0;
  this.rotationCycle = 0;
  this.rotationSpeed = 5;

  // This should handle all of the visuals.
  this.show = function() {
    push();
    translate(this.pos[0],this.pos[1]);
    // Rotate the whole thing.
    if (this.rotationCycle != 0){
      this.rotateCounter++;
      this.rotationCycle--;
    }
    rotate(-TAU/this.chambers/this.rotationSpeed*this.rotateCounter);
    rotate(-TAU/this.chambers/2);
    strokeWeight(2*this.scale);
    stroke('#929292');
    fill('#bebebe');
    ellipse(0, 0, 200*this.scale);
    fill(this.bgColor);
    ellipse(0, 0, 20*this.scale);

    push();
    counter = 0;
    while(counter<this.chambers) {
      // Draw the chambers.
      rotate(TAU/this.chambers/2);
      ellipse(0, -65*this.scale, 50*this.scale);
      // Draw the bullets.
      if(this.bullets[counter] == 1) {
        push();
        stroke('#b8a233');
        fill('#e2c656');
        ellipse(0, -65*this.scale, 45*this.scale);
        fill('#d6d6d6');
        ellipse(0, -65*this.scale, 22*this.scale);
        strokeWeight(1*this.scale);
        stroke('#b1b1b1');
        ellipse(0, -65*this.scale, 20*this.scale);
        pop();
      }

      // Draw the rolls
      if (this.rolls[counter] != null){
        push();
        textAlign(CENTER, CENTER);
        textSize(24*this.scale);
        textStyle(BOLD);
        fill(255);
        noStroke();
        translate(0, -65*this.scale);
        rotate(-TAU/this.chambers*counter)
        rotate(TAU/this.chambers/this.rotationSpeed*this.rotateCounter);
        text(this.rolls[counter], 0, 0);
        pop()
      }

      // Draw the slices.
      rotate(TAU/this.chambers/2);
      push();
      noStroke();
	  fill(this.bgColor);
      // Only draw slices if you have 6 or less chambers, anything else gets really messy really quick.
      if(this.chambers<=6){
        ellipse(0, (48.75*this.chambers - 407.5)*this.scale, (-112.5*this.chambers + 725)*this.scale);
      }
      pop();

      counter++;
    }
    pop();
    pop();

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

  this.checkClicked = function() {
    push();
    // Shoot.
    if (mouseX > this.pos[0]-100*this.scale &&
        mouseX < this.pos[0]-100*this.scale + 90*this.scale&&
        mouseY > this.pos[1]+120*this.scale &&
        mouseY < this.pos[1]+120*this.scale + 50*this.scale) {

    }
    // Reload.
    else if (mouseX > this.pos[0]+10*this.scale &&
        mouseX < this.pos[0]+10*this.scale + 90*this.scale&&
        mouseY > this.pos[1]+120*this.scale &&
        mouseY < this.pos[1]+120*this.scale + 50*this.scale) {
	  this.reload();
     
    }
    pop();
  }
}






















