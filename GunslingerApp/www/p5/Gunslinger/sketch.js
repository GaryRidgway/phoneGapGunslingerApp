var guncanvases = [];
var guns        = [];
var guncounter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#181818');

  addgun(5);
  addgun(4);
  addgun(2);
  addgun(3);
}

function draw() {
  background('#181818');
  for( var i = 0 ; i < guncounter ; i++) {
    if(guns[i].isOn) {
      image(guncanvases[i], 0, 0);
      guns[i].show();
    }
  }
}

function clog(x) {
  console.log(x);
}

function addgun(chambers) {
  guncanvases[guncounter] = createGraphics(windowWidth, windowHeight);
  guns[guncounter]        = new barrel(windowWidth/2, windowHeight/2, chambers, 1.125, '#181818', guncanvases[guncounter], guncounter);

  if($('#bottom-buttons').length) {
  }
  else {
    $('#bottom-buttons').append('\
      <div id="fire-gun-' + guncounter + '" class="fire bottom-button">fire</div>\
      <div id="reload-gun-' + guncounter + '" class="reload bottom-button">reload</div>\
    ');
    $('#fire-gun-' + guncounter).click(function(guncounter) {
      guns[$(this).attr('id').split('-')[2]].shoot();
    });
    $('#reload-gun-' + guncounter).click(function() {
      guns[$(this).attr('id').split('-')[2]].reload();
    });
  }
  guncounter++;
}


// var lpos;
// var tpos;
// var loadScale;
// var cScale;

// var bgColor = '#181818';



// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(bgColor);
//   loadScale = 1.5;
//   dpos();
//   gunBarrel = new barrel(lpos, tpos, 6, cScale, bgColor);
//   gCount = new gritCounter(windowWidth-30*loadScale, windowHeight-30*loadScale, 4);
//   iMen = new inputGun();
//   MNU = new menu(loadScale, bgColor, gunBarrel, iMen);
// }
// function draw() {
//   background(bgColor);
//   if(MNU.dMode == 1) {
// 	gunBarrel.show();
//     gCount.show();
//     MNU.showMenuCollapsed();
//   } else {
// 	MNU.showFullMenu();
// 	//ENABLE LATER
// 	iMen.show();
//   }
// }

// function windowResized() {
//   dpos();
//   resizeCanvas(windowWidth, windowHeight);
//   gunBarrel.updatePos(lpos, tpos, cScale);
//   gCount.updatePos(windowWidth-60, windowHeight-60);
//   MNU.updateButton();
// }

// function mousePressed() {
//   // IT'S RIGHT FUCKING HERE
//   gCount.checkClicked();
//   //
//   gunBarrel.checkClicked();
//   return false;
// }

// function touchStarted() {
//   gCount.checkClicked();
//   gunBarrel.checkClicked();
//   return false;
// }

// function dpos() {
//   if (windowWidth>windowHeight){
// 	wScale = 0.75
// 	offset = 35*loadScale*wScale;
// 	cScale = loadScale*wScale;
// 	isTooSmall(windowHeight/2-offset);
// 	lpos = windowHeight/2-offset;
//     tpos = windowHeight/2-offset;
//   }
//   else{
// 	cScale = loadScale;
// 	isTooSmall(windowWidth/2);
// 	lpos = windowWidth/2;
//     tpos = windowWidth/2;
//   }
// }

// function isTooSmall(length) {
// 	if(length<200*cScale/2){
//       cScale = cScale*(length/cScale)/200*1.8
// 	}
// }
