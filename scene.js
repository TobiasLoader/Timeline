
function setupScene(){
	squareSize = 24;
  	ground = round(7*H/10);
  	startScrollDist = W/3;
  	sideX = 0;
  	groundWidth = 3*W;
  	control = 'Toby';
}

function setupPeople(){
	people = {
	  	'Toby': new Person(
	  		'Toby',
	  		new Human(70,140,color(9, 168, 176)),
	  		W/6,
	  		0,
	  		8),
	  	'Tom': new Person(
	  		'Tom',
	  		new Human(80,150,color(111, 179, 111)),
	  		2*W/6,
	  		-100,
	  		9),
	  	'Peter': new Person(
	  		'Peter',
	  		new Human(100,160,color(151, 179, 111)),
	  		3*W/6,
	  		-200,
	  		7),
	  	'Alice': new Person(
	  		'Alice',
	  		new Human(80,130,color(179, 112, 111)),
	  		4*W/6,
	  		-300,
	  		7),
	  	'Daisy': new Person(
	  		'Daisy',
	  		new Dog(140,60,color(158, 122, 74)), //199, 177, 135
	  		5*W/6,
	  		-400,
	  		7),
  	}
}

function drawPeople(){
	for (var name in people){
	if (name!==control){
		people[name].draw();
		people[name].move();
	}
	}
	people[control].draw();
	people[control].move();
  	
}

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
	image(sky,W/2,H/2);
}

function setupEarth(){
	earth = createGraphics(groundWidth, H);
	earth.noStroke();
	earth.rectMode(CENTER);
	features = createGraphics(groundWidth, H);
	features.noStroke();
	features.rectMode(CENTER);
	
	for (var x=0; x<groundWidth+squareSize; x+=squareSize){
		for (var y=earthFloor(x); y<H+squareSize; y+=squareSize){
			if (testFeatures(x,y)==='NONE'){
				colDiff = random(-10,10);
				if (random(0,1)<0.07){
				earth.fill(158+colDiff, 145+colDiff, 109+colDiff);
				} else {
					earth.fill(120+colDiff, 176+colDiff, 121+colDiff);
				}
				earth.rect(x,y+squareSize/2,squareSize,squareSize);
			} else {
				buildFeatures(x,y);
			}
		}
		for (var y=earthFloor(x)-squareSize; y>0; y-=squareSize){
			buildFeatures(x,y);
		}
	}
}

function testFeatures(X,Y){
	if (X>0.4*W && X<0.75*W && Y>ground+10 && Y<ground+80){
		// WATER
		return 'WATER';
	} else{
		return 'NONE';
	}
}

function buildFeatures(X,Y){
	colDiff = random(-10,10);
	let featureType = testFeatures(X,Y);
	if (featureType === 'WATER'){
		features.fill(71+colDiff, 116+colDiff, 168+colDiff,150);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	}
}

function drawEarth(){
	image(earth,groundWidth/2-sideX,H/2);
}

function drawFeatures(){
	image(features,groundWidth/2-sideX,H/2);
}


function earthFloor(X){
/*
	if (X<W){
		return ground;
	} else if (X<2*W){
		return ground;
	} else if (X<3*W){
		return ground;
	}
	return ground;
*/
	if (X<W/10){
		return ground;
	} else if (X<W/5){
		return ground - 80;
	} else if (X<2*W/5){
		return ground + round(0.2*(squareSize*(floor(X/squareSize))-W/2+80));
	} else if (X<3*W/4){
		return ground + 80;
	} else if (X<groundWidth) {
		return ground;
	} else {
		return ground;
	}
}


function setupLandMarks(){

}

function drawLandMarks(){
}

class Person {
	constructor (name, body, x, y, maxVX){
		this.name = name;
		this.body = body;
		this.body.build();
		this.bodyW = this.body.w;
		this.bodyH = this.body.h;
		this.x = x;
		this.y = y;
		this.vx = 0;
		this.vy = 0;
		this.maxvx = maxVX;
	}
	
	heady(Y){
		if (Y){return Y-this.bodyH/2;} else {return this.y-this.bodyH/2;}
	}
	footy(Y){
		if (Y){return Y+this.bodyH/2;} else {return this.y+this.bodyH/2;}	
	}
	
	draw(){
// 		if (this.body.type==='Dog'){
// 			image(this.body.body.left1,this.x,this.y);
// 		} else {
			if (this.vx>0){
				if (this.footy()>=earthFloor(this.x)){
					if (round(millis()/200)%3===0){
						image(this.body.body.left1,this.x-sideX,this.y);
					} else if (round(millis()/200)%3===1){
						image(this.body.body.left2,this.x-sideX,this.y);
					} else {
						image(this.body.body.left3,this.x-sideX,this.y);
					}
				} else {
					image(this.body.body.leftJ,this.x-sideX,this.y);
				}
			} else if (this.vx<0) {
				if (this.footy()>=earthFloor(this.x)){
					if (round(millis()/200)%3===0){
						image(this.body.body.right1,this.x-sideX,this.y);
					} else if (round(millis()/200)%3===1){
						image(this.body.body.right2,this.x-sideX,this.y);
					} else {
						image(this.body.body.right3,this.x-sideX,this.y);
					}
				} else {
					image(this.body.body.rightJ,this.x-sideX,this.y);
				}
			} else {
				image(this.body.body.front,this.x-sideX,this.y);
			}
// 		}
		fill(this.body.col);
		noStroke();
		text(this.name,this.x-sideX,this.y-this.bodyH/2-20);
		
		if (control !== this.name && mouseX>this.x-sideX-this.bodyW/2 && mouseX<this.x-sideX+this.bodyW/2 && mouseY>this.y-this.bodyH/2 && mouseY<this.y+this.bodyH/2){
			cursorType = 'pointer';
			if (mouseIsPressed){
				control = this.name;
				this.vy = -2*this.maxvx;
			}
		}
	}	
	
	move(){
		if ((this.vx>0 && this.y+this.bodyH/2<=earthFloor(this.x+this.vx+this.bodyW/2-squareSize/2) && this.x+this.bodyW/2<groundWidth) || (this.vx<0 && this.y+this.bodyH/2<=earthFloor(this.x+this.vx-this.bodyW/2+squareSize/2) && this.x-this.bodyW/2>0)){
			this.x += this.vx;
			if (control === this.name && this.vx>0 && this.x-sideX>W-startScrollDist && this.x<groundWidth-(W-(this.x-sideX))){
				sideX += this.vx;
			}
			if (control === this.name && this.vx<0 && this.x-sideX<startScrollDist && this.x>startScrollDist){
				sideX += this.vx;
			}
		}
		this.y += this.vy;
		
// 		if (control === this.name){
		if (keyIsDown(39) && control === this.name){
			if (this.vx<this.maxvx){
				this.vx+=1;
			}
		} else {
			if (this.vx>0){
				if (this.footy()>=earthFloor(this.x)){
					this.vx-=1;
				}
			}
		}
		if (keyIsDown(37) && control === this.name){
			if (this.vx>-this.maxvx){
				this.vx-=1;
			}
		} else {
			if (this.vx<0){
				if (this.footy()>=earthFloor(this.x)){
					this.vx+=1;
				}
			}
		}
		
		if (keyIsDown(38) && control === this.name){
			if (this.footy()>=earthFloor(this.x)){
				this.vy = -2*this.maxvx;
			} else {
				this.vy += 1;
			}
		} else {
			if (this.footy()<earthFloor(this.x)){
				this.vy += 1;
			} else {
				this.y = this.heady(earthFloor(this.x));
				this.vy = 0;
			}
		}
	}
}