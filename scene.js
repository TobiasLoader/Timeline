
function setupScene(){
	squareSize = 24;
  	ground = round(7*H/10);
  	startScrollDist = 2*W/5;
  	sideX = 0;
  	groundWidth = 400*squareSize;
  	control = 'Toby1';
  	toby = {x:0, y:0, vx:0, vy:0};
  	tobySwap  = [25*squareSize,60*squareSize,140*squareSize,185*squareSize,250*squareSize,325*squareSize];
}

function setupPeople(){
	people = {
	  	'Toby1': new Person(
	  		'Toby1',
	  		new Human(30,60,color(9, 168, 176)),
	  		8*squareSize,
	  		ground-30,
	  		7),
	  	'Toby2': new Person(
	  		'Toby2',
	  		new Human(40,80,color(9, 168, 176)),
	  		50*squareSize,
	  		ground-40,
	  		8),
	  	'Toby3': new Person(
	  		'Toby3',
	  		new Human(60,120,color(9, 168, 176)),
	  		100*squareSize,
	  		ground-60,
	  		9),
	  	'Toby4': new Person(
	  		'Toby4',
	  		new Human(70,140,color(9, 168, 176)),
	  		150*squareSize,
	  		ground-70,
	  		10),
	  	'Toby5': new Person(
	  		'Toby5',
	  		new Human(75,150,color(9, 168, 176)),
	  		200*squareSize,
	  		ground-75,
	  		11),
	  	'Toby6': new Person(
	  		'Toby6',
	  		new Human(75,150,color(9, 168, 176)),
	  		250*squareSize,
	  		ground-75,
	  		11),
	  	'Mother': new Person(
	  		'Mother',
	  		new Human(80,130,color(179, 112, 111)),
	  		4*squareSize,
	  		ground-65,
	  		7),
	  	'Brother': new Person(
	  		'Brother',
	  		new Human(80,150,color(111, 179, 111)),
	  		80*squareSize,
	  		ground-75,
	  		9),
	  	'Dog': new Person(
	  		'Dog',
	  		new Dog(140,60,color(158, 122, 74)), //199, 177, 135
	  		150*squareSize,
	  		ground-30,
	  		7),
	  	'Father': new Person(
	  		'Father',
	  		new Human(100,160,color(151, 179, 111)),
	  		200*squareSize,
	  		ground-80,
	  		7),
	  	
  	}
}

function characterSwap(){
	for (var i=0; i<tobySwap.length; i+=1){
		if (toby.x<tobySwap[i]){
			control = 'Toby'+str(i+1);
			break;
		}
	}
}

function movePeople(){
	people[control].move();
	
	toby.x = people[control].x;
	toby.y = people[control].y;
	toby.vx = people[control].vx;
	toby.vy = people[control].vy;
	
	for (var name in people){
		if (name.slice(0,4)!=='Toby'){
			people[name].move();
		}
	}
}

function drawPeople(){
	
	characterSwap();
	
	for (var name in people){
		if (name.slice(0,4)==='Toby'){
			people[name].x = toby.x;
			people[name].y = toby.y;
			people[name].vx = toby.vx;
			people[name].vy = toby.vy;
		} else {
			people[name].draw();
		}
	}
	
	people[control].draw();
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
	earth = createGraphics(groundWidth+squareSize, H+squareSize/2);
	earth.noStroke();
	features = createGraphics(groundWidth, H+squareSize/2);
	features.noStroke();
	
	for (var x=0; x<groundWidth+squareSize; x+=squareSize){
		for (var y=earthFloor(x); y<H+squareSize; y+=squareSize){
			if (locationFeatures(x,y)==='GROUND'){
				colDiff = random(-10,10);
				if (random(0,1)<0.2*(1 - 2*abs(y-(H+earthFloor(x))/2)/(H-earthFloor(x)))){
					earth.fill(158+colDiff, 145+colDiff, 109+colDiff);
				} else if (random(0,1)<1*sq(sq((y-earthFloor(x))/(H-earthFloor(x))))){
					earth.fill(146+colDiff, 161+colDiff, 150+colDiff);
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

function locationFeatures(X,Y){
	if (X>32*squareSize && X<52*squareSize && Y>=ground && Y<H){
		return 'WATER';
	}
	
	// ENGLISH FLAG
	
	if (X>=28*squareSize && X<29*squareSize && Y>=ground+2*squareSize  && Y<ground+3*squareSize){
		return 'WHITE';
	}
	if (X>=30*squareSize && X<31*squareSize && Y>=ground+2*squareSize  && Y<ground+3*squareSize){
		return 'WHITE';
	}
	if (X>=28*squareSize && X<29*squareSize && Y>=ground+4*squareSize  && Y<ground+5*squareSize){
		return 'WHITE';
	}
	if (X>=30*squareSize && X<31*squareSize && Y>=ground+4*squareSize  && Y<ground+5*squareSize){
		return 'WHITE';
	}
	if (X>=29*squareSize && X<30*squareSize && Y>=ground+2*squareSize  && Y<ground+5*squareSize){
		return 'RED';
	}
	if (X>=28*squareSize && X<31*squareSize && Y>=ground+3*squareSize  && Y<ground+4*squareSize){
		return 'RED';
	}
	
	// FRENCH FLAG
	
	if (X>=54*squareSize && X<55*squareSize && Y>=ground+2*squareSize  && Y<ground+5*squareSize){
		return 'BLUE';
	}
	if (X>=55*squareSize && X<56*squareSize && Y>=ground+2*squareSize  && Y<ground+5*squareSize){
		return 'WHITE';
	}
	if (X>=56*squareSize && X<57*squareSize && Y>=ground+2*squareSize  && Y<ground+5*squareSize){
		return 'RED';
	}
	
	if (X>150*squareSize && X<170*squareSize && Y>=ground && Y<ground+80){
		return 'WATER';
	}
	
	// TREES
	
	if (X>=90*squareSize && X<93*squareSize && Y>=ground-5*squareSize && Y<ground){
		return 'WOOD';
	}
	if (X>=90*squareSize && X<93*squareSize && Y>=ground-11*squareSize && Y<ground-5*squareSize){
		return 'DARK WOOD';
	}
	if (X>=90*squareSize && X<93*squareSize && Y>=ground-14*squareSize && Y<ground-11*squareSize){
		return 'WOOD';
	}
	
	if (X>=105*squareSize && X<108*squareSize && Y>=ground-5*squareSize && Y<ground){
		return 'WOOD';
	}
	if (X>=105*squareSize && X<108*squareSize && Y>=ground-11*squareSize && Y<ground-5*squareSize){
		return 'DARK WOOD';
	}
	if (X>=105*squareSize && X<108*squareSize && Y>=ground-14*squareSize && Y<ground-11*squareSize){
		return 'WOOD';
	}
	
	if (X>=93*squareSize && X<98*squareSize && Y>=ground-5*squareSize && Y<ground-4*squareSize){
		return 'WOOD';
	}
	if (X>=97*squareSize && X<100*squareSize && Y>=ground-6*squareSize && Y<ground-5*squareSize){
		return 'WOOD';
	}
	if (X>=93*squareSize && X<97*squareSize && Y>=ground-5*squareSize && Y<ground){
		return 'NONE';
	}
	if (X>=97*squareSize && X<100*squareSize && Y>=ground-6*squareSize && Y<ground){
		return 'NONE';
	}
	
	if (X>=100*squareSize && X<102*squareSize && Y>=ground-4*squareSize && Y<ground-3*squareSize){
		return 'WOOD';
	}
	if (X>=101*squareSize && X<105*squareSize && Y>=ground-3*squareSize && Y<ground-2*squareSize){
		return 'WOOD';
	}
	if (X>=100*squareSize && X<102*squareSize && Y>=ground-4*squareSize && Y<ground){
		return 'NONE';
	}
	if (X>=101*squareSize && X<105*squareSize && Y>=ground-3*squareSize && Y<ground){
		return 'NONE';
	}
	
	if (X>=87*squareSize && X<90*squareSize && Y>=ground-10*squareSize && Y<ground-9*squareSize){
		return 'DARK WOOD';
	}
	if (X>=85*squareSize && X<88*squareSize && Y>=ground-11*squareSize && Y<ground-10*squareSize){
		return 'DARK WOOD';
	}
	if (X>=103*squareSize && X<105*squareSize && Y>=ground-9*squareSize && Y<ground-8*squareSize){
		return 'DARK WOOD';
	}
	if (X>=102*squareSize && X<104*squareSize && Y>=ground-10*squareSize && Y<ground-9*squareSize){
		return 'DARK WOOD';
	}
	if (X>=108*squareSize && X<111*squareSize && Y>=ground-11*squareSize && Y<ground-10*squareSize){
		return 'DARK WOOD';
	}
	if (X>=110*squareSize && X<113*squareSize && Y>=ground-12*squareSize && Y<ground-11*squareSize){
		return 'DARK WOOD';
	}
	
	
	
	// BUILDING
	
	if (X>265*squareSize && X<287*squareSize && Y>=ground-100 && Y<ground){
		return 'BRICK';
	}
	if (X>265*squareSize && X<287*squareSize && Y>=ground-250 && Y<ground-100){
		return 'DARK BRICK';
	}
	if (X>265*squareSize && X<287*squareSize && Y>=ground-300 && Y<ground-250){
		return 'BRICK';
	}
	if (X>262*squareSize && X<290*squareSize && Y>=ground-400 && Y<ground-300 && (Y-(ground-300))>-2*((100)/(38*squareSize))*(X-262*squareSize) && (Y-(ground-300))>2*((100)/(38*squareSize))*(X-290*squareSize)){
		return 'TILE';
	}
	for (var i=0; i<tobySwap.length; i+=1){
		if (X>=tobySwap[i]-squareSize && X<tobySwap[i]+squareSize && Y>=ground-2*squareSize && Y<ground+squareSize){
			return 'MILESTONE';
		}
	}
	return 'GROUND';
}

function buildFeatures(X,Y){
	colDiff = random(-10,10);
	let featureType = locationFeatures(X,Y);
	if (featureType === 'WATER'){
		features.fill(71+colDiff, 116+colDiff, 168+colDiff,150);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'BRICK'){
		features.fill(222+colDiff, 208+colDiff, 153+colDiff);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'DARK BRICK'){
		features.fill(217+colDiff, 175+colDiff, 117+colDiff,150);
		features.rect(X,Y+squareSize/2,squareSize,squareSize);
	} else if (featureType === 'TILE'){
		features.fill(222+colDiff, 156+colDiff, 64+colDiff);
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
	}


}

function drawEarth(){
	image(earth,groundWidth/2-sideX+squareSize/2,H/2-squareSize/4);
}

function drawFeatures(){
	image(features,groundWidth/2-sideX,H/2-squareSize/4);
}


function earthFloor(X){
	if (X>=88*squareSize && X<90*squareSize){
		return ground-2*squareSize;
	}
	if (X>=90*squareSize && X<93*squareSize){
		return ground-5*squareSize;
	}
	if (X>=105*squareSize && X<108*squareSize){
		return ground-5*squareSize;
	}
	if (X>=108*squareSize && X<110*squareSize){
		return ground-2*squareSize;
	}
	if (X>=93*squareSize && X<97*squareSize){
		return ground-5*squareSize;
	}
	if (X>=97*squareSize && X<100*squareSize){
		return ground-6*squareSize;
	}
	if (X>=100*squareSize && X<102*squareSize){
		return ground-4*squareSize;
	}
	if (X>=102*squareSize && X<105*squareSize){
		return ground-3*squareSize;
	}
	return ground;
}

function setupAccessories(){
	boats = {'ef': new Boat(32*squareSize,ground,60,30,32*squareSize,52*squareSize)};
	treetops = {
		'big1': new Treetop(91*squareSize,ground-17*squareSize,14*squareSize,10*squareSize),
		'big2': new Treetop(106*squareSize,ground-17*squareSize,14*squareSize,10*squareSize),
		'small1': new Treetop(85*squareSize,ground-11*squareSize,5*squareSize,5*squareSize),
		'small2': new Treetop(113*squareSize,ground-11*squareSize,5*squareSize,3*squareSize)
	};
}

function drawAccessories(){
	for (var i in boats){
		boats[i].update();
		boats[i].draw();
	}
	for (var i in treetops){
		treetops[i].draw();
	}
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
		
/*
		if (control !== this.name && mouseX>this.x-sideX-this.bodyW/2 && mouseX<this.x-sideX+this.bodyW/2 && mouseY>this.y-this.bodyH/2 && mouseY<this.y+this.bodyH/2){
			cursorType = 'pointer';
			if (mouseIsPressed){
				control = this.name;
				this.vy = -2*this.maxvx;
			}
		}
*/
	}	
	
	move(){
		if (keyIsDown(32) && this.name===control){
			this.vx = 2*this.maxvx;
		}
		if ((this.vx>0 && this.y+this.bodyH/2<=earthFloor(this.x+this.vx+this.bodyW/2) && this.x+this.bodyW/2<groundWidth) || (this.vx<0 && this.y+this.bodyH/2<=earthFloor(this.x+this.vx-this.bodyW/2) && this.x-this.bodyW/2>0)){
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
				this.vy = -1.5*this.maxvx;
			} else {
				this.vy += 1;
			}
		} else {
			
			if (this.footy()<Math.min(earthFloor(this.x-this.bodyW/2),earthFloor(this.x),earthFloor(this.x+this.bodyW/2))){
				this.vy += 1;
			} else {
				this.y = this.heady(Math.min(earthFloor(this.x-this.bodyW/2),earthFloor(this.x),earthFloor(this.x+this.bodyW/2)));
				this.vy = 0;
			}
		}
	}
}