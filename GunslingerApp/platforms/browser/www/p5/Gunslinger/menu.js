function menu(scale, bgColor, gunBarrel, iMen) {
	bHeight = windowHeight/10;
	this.dMode = 0;
	this.gunBarrel = gunBarrel;
	
	this.hamburgerButton = createButton('')
                 .mousePressed(() => this.displaySwap())
                 .size(25*scale+windowHeight/10/7+windowHeight/10/7/2*2, windowHeight/10/7*5+windowHeight/10/7)
				 .position(windowWidth-35*scale-windowHeight/10/7/2*2,
						   windowHeight/10/2-windowHeight/10/7*2-windowHeight/10/7/2-windowHeight/10/7/2)
				.addClass('hamburger');
	this.createMenuButtons = [
		createButton('')
		.mousePressed(() => iMen.show())
		.size(bHeight/5*4+2, bHeight/5*4+2)
		.position(bHeight/2-bHeight/5*2-1,
				  bHeight/2-bHeight/5*2-1)
		.addClass('add')
	];
	this.shootPageButtons = [
		createButton('shoot')
		  .mousePressed(() => this.gunBarrel.shoot())
		  .size(90*this.gunBarrel.scale, 50*this.gunBarrel.scale)
		  .position(this.gunBarrel.pos[0]-100*this.gunBarrel.scale,
		  		  this.gunBarrel.pos[1]+120*this.gunBarrel.scale)
		  .addClass('shoot'),
		createButton('reload')
		  .mousePressed(() => this.gunBarrel.reload())
		  .size(90*this.gunBarrel.scale, 50*this.gunBarrel.scale)
		  .position(this.gunBarrel.pos[0]+10*this.gunBarrel.scale,
		  		  this.gunBarrel.pos[1]+120*this.gunBarrel.scale)
		  .addClass('reload')
	];
	$(".shoot").css("font-size", (16*this.gunBarrel.scale).toString().concat('px'));
	$(".reload").css("font-size", (16*this.gunBarrel.scale).toString().concat('px'));
	
	

	this.showMenuCollapsed = function(){
		// Draw the menu Hamburger.
		push();
		fill('#f1f1f1');
		stroke('#f1f1f1');
		strokeWeight(3.5*scale);
		line(windowWidth-10*scale, windowHeight/10/7*2-windowHeight/10/7/2, windowWidth-35*scale, windowHeight/10/7*2-windowHeight/10/7/2);
		line(windowWidth-10*scale, windowHeight/10/2, windowWidth-35*scale, windowHeight/10/2);
		line(windowWidth-10*scale, windowHeight/10/7*6-windowHeight/10/7/2, windowWidth-35*scale, windowHeight/10/7*6-windowHeight/10/7/2);
		pop();
	}

	this.showFullMenu = function() {
		push();
		push();
		fill('#f1f1f1');
		rect(-1, -1, windowWidth+1, windowHeight+1);
		pop();
		push();
		fill('#a0a0a0');
		stroke('#a0a0a0');
		line(-1,windowHeight/10,windowWidth+1, windowHeight/10)
		pop()
		// Draw the add stack.
		push();
		fill('#f1f1f1');
		stroke('#a0a0a0');
		ellipse(bHeight/2, bHeight/2, bHeight/5*4, bHeight/5*4);
		strokeWeight(4);
		line(bHeight/2, bHeight/2-bHeight/5*0.75, bHeight/2, bHeight/2+bHeight/5*0.75);
		line(bHeight/2-bHeight/5*0.75, bHeight/2, bHeight/2+bHeight/5*0.75, bHeight/2);
		pop();
		// Draw the Menu hamburger
		push();
		fill('#a0a0a0');
		stroke('#a0a0a0');
		strokeWeight(3.5*scale);
		line(windowWidth-10*scale, windowHeight/10/7*2-windowHeight/10/7/2, windowWidth-35*scale, windowHeight/10/7*2-windowHeight/10/7/2);
		line(windowWidth-10*scale, windowHeight/10/2, windowWidth-35*scale, windowHeight/10/2);
		line(windowWidth-10*scale, windowHeight/10/7*6-windowHeight/10/7/2, windowWidth-35*scale, windowHeight/10/7*6-windowHeight/10/7/2);
		pop();






		pop();
	}
	
	this.displaySwap = function() {
		// The shoot page.
		if(this.dMode == 1){
			this.dMode = 0;
			this.createMenuButtons.forEach(function(element){
				element.show();
			});
			this.shootPageButtons.forEach(function(element){
				element.hide();
			});
			//ENABLE LATER
//			iMen.submitInputs.forEach(function(element){
//				element.show();
//			});
		}
		// The main menu page.
		else{
			this.dMode = 1;
			this.createMenuButtons.forEach(function(element){
				element.hide();
			});
			this.shootPageButtons.forEach(function(element){
				element.show();
			});
			//ENABLE LATER
//			iMen.submitInputs.forEach(function(element){
//				element.hide();
//			});
		}
	}
	
	this.updateButton = function() {
		bHeight = windowHeight/10;
		this.hamburgerButton.position(windowWidth-35*scale-windowHeight/10/7/2*2,
						              windowHeight/10/2-windowHeight/10/7*2-windowHeight/10/7/2-windowHeight/10/7/2)
							.size(25*scale+windowHeight/10/7+windowHeight/10/7/2*2, windowHeight/10/7*5+windowHeight/10/7);
		this.createMenuButtons[0].position(bHeight/2-bHeight/5*2-1,
				                           bHeight/2-bHeight/5*2-1)
								 .size(bHeight/5*4+2, bHeight/5*4+2);
		this.shootPageButtons[0].position(this.gunBarrel.pos[0]-100*this.gunBarrel.scale,
		  		                          this.gunBarrel.pos[1]+120*this.gunBarrel.scale)
								.size(90*this.gunBarrel.scale, 50*this.gunBarrel.scale);
		$(".shoot").css("font-size", (16*this.gunBarrel.scale).toString().concat('px'));
		this.shootPageButtons[1].position(this.gunBarrel.pos[0]+10*this.gunBarrel.scale,
		  		                          this.gunBarrel.pos[1]+120*this.gunBarrel.scale)
		
								.size(90*this.gunBarrel.scale, 50*this.gunBarrel.scale);
		$(".reload").css("font-size", (16*this.gunBarrel.scale).toString().concat('px'));
		//ENABLE LATER
		//iMen.updateButton();
	}
}

