
function setupClouds(){
  	clouds = [];
  	let col;
  	for (var i=0; i<10; i+=1){
	  	col = 255 - 1*(30-i);
	  	clouds.push(new Cloud(random(-50,W+50), getRndBias(-50,250,100,0.75), random(100,150), random(40,60),random(0.4,1),random(-0.03,0.03),color(col,col,col,random(160,200)),15));
	}
}

function drawClouds(){
	for (var i=0; i<clouds.length; i+=1){
	  	clouds[i].draw();
	  	clouds[i].update();
  	}
}

function setupSky(){
	sky = createGraphics(W,H);
	sky.noStroke();
	sky.rectMode(CENTER);
	let colDiff = 0;
	for (var x=0; x<W+squareSize; x+=squareSize){
		for (var y=0; y<H+squareSize; y+=squareSize){
			colDiff = random(-6,6);
			if (random(0,1)<0.01){
				sky.fill(153+colDiff, 193+colDiff, 232+colDiff);
			} else {
				sky.fill(183+colDiff, 214+colDiff, 245+colDiff);
			}
			sky.rect(x,y,squareSize,squareSize);
		}
	}
}

function drawSky(){
	imageMode(CENTER);
	image(sky,W/2,H/2);
}

function setupEarth(){
	earth = createGraphics(groundWidth+squareSize, H+squareSize/2);
	earth.noStroke();
	features = createGraphics(groundWidth, H+squareSize/2);
	features.noStroke();
	
	for (var x=0; x<groundWidth+squareSize; x+=squareSize){
		for (var y=earthFloor(x,0); y<H+squareSize; y+=squareSize){
			if (locationFeatures(x,y)==='GROUND'){
				colDiff = random(-10,10);
				if (random(0,1)<0.2*(1 - 2*abs(y-(H+earthFloor(x,0))/2)/(H-earthFloor(x,0)))){
					// SOIL / MUD
					earth.fill(158+colDiff, 145+colDiff, 109+colDiff);
				} else if (random(0,1)<1*sq(sq((y-earthFloor(x,0))/(H-earthFloor(x,0))))){
					// ROCK
					earth.fill(146+colDiff, 161+colDiff, 150+colDiff);
				} else {
					// GRASS
					earth.fill(120+colDiff, 176+colDiff, 121+colDiff);
				}
				earth.rect(x,y+squareSize/2,squareSize,squareSize);
			} else {
				buildFeatures(x,y);
			}
		}
		for (var y=earthFloor(x,0)-squareSize; y>0; y-=squareSize){
			buildFeatures(x,y);
		}
	}
}

function buildFeatures(X,Y){
	colDiff = random(-10,10);
	let featureType = locationFeatures(X,Y);
	if (featureType === 'WATER'){
		features.fill(71+colDiff, 116+colDiff, 168+colDiff,150);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'BRICK'){
		features.fill(204+colDiff, 202+colDiff, 177+colDiff);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'DARK BRICK'){
		features.fill(189+colDiff, 184+colDiff, 130+colDiff,150);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'TILE'){
		features.fill(146+colDiff, 156+colDiff, 154+colDiff);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'MILESTONE'){
		features.fill(143+colDiff, 143+colDiff, 143+colDiff);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'WOOD'){
		features.fill(130+colDiff, 105+colDiff, 75+colDiff);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'DARK WOOD'){
		features.fill(130+colDiff, 105+colDiff, 75+colDiff, 150);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'RED'){
		features.fill(219, 113, 92);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'WHITE'){
		features.fill(242, 242, 242);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'BLUE'){
		features.fill(79, 147, 219);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'PAPER'){
		features.fill(240+colDiff, 245+colDiff, 225+colDiff);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'ROCK'){
		features.fill(146+colDiff, 161+colDiff, 150+colDiff);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	}  else if (featureType === 'MUD'){
		features.fill(158+colDiff, 145+colDiff, 109+colDiff);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'DARK ROCK'){
		features.fill(146+colDiff, 161+colDiff, 150+colDiff, 170);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'DARK GRASS'){
		features.fill(120+colDiff, 176+colDiff, 121+colDiff, 170);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	}
}

function drawEarth(){
	image(earth,groundWidth/2-sideX+squareSize/2,H/2-squareSize/4);
}

function drawFeatures(){
	image(features,groundWidth/2-sideX,H/2-squareSize/4);
}

function progressBar(){
	rectMode(CORNER);
	noStroke();
	fill(250, 249, 240);
	rect(W-squareSize,0,squareSize,H);
	fill(9, 168, 176);
	rect(W-squareSize,(H-squareSize)*(toby.x/groundWidth),squareSize,squareSize);
	stroke(9, 168, 176);
	line(W-squareSize,0,W-squareSize,H);
	textAlign(CENTER,CENTER);
	noStroke();
	textSize(18);
	push();
	if (100*toby.x/groundWidth<50){
		translate(W-squareSize/2,(H-squareSize)*(toby.x/groundWidth)+2.5*squareSize);
	} else {
		translate(W-squareSize/2,(H-squareSize)*(toby.x/groundWidth)-1.5*squareSize);
	}
	rotate(-90);
	text(str(round(100*toby.x/groundWidth))+' %',0,0);
	pop();
}

function drawAccessoriesBeforePeople(){
	for (var i in milestones){
		milestones[i].draw();
	}
	for (var i in birds){
		birds[i].update();
		birds[i].draw();
	}
}

function drawAccessoriesAfterPeople(){
	for (var i in boats){
		boats[i].update();
		boats[i].draw();
	}
	for (var i in treetops){
		treetops[i].draw();
	}
	for (var i in notices){
		notices[i].move();
		notices[i].draw();
	}
	for (var i in flags){
		flags[i].draw();
	}
	for (var i in writings){
		writings[i].draw();
	}
	for (var i in typings){
		typings[i].draw();
	}
	for (var i in specialClouds){
		specialClouds[i].draw();
	}
	for (var i in waterDroplets){
		waterDroplets[i].draw();
	}
	for (var i in fish){
		fish[i].update();
		fish[i].draw();
	}
	for (var i in bones){
		bones[i].draw();
	}
	
}
