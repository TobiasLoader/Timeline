
function setupScene(){
	squareSize = 24;
  	ground = H-9*squareSize;
  	startScrollDist = 2*W/5;
  	sideX = 0;
  	groundWidth = 580*squareSize;
  	control = 'Toby1';
  	toby = {x:0, y:0, vx:0, vy:0};
  	tobySwap  = [25*squareSize,60*squareSize,140*squareSize,176*squareSize,290*squareSize,370*squareSize,420*squareSize,470*squareSize,550*squareSize];
}

function setupPeople(){
	people = {
	  	'Toby1': new Person(
	  		'Toby1',
	  		new Human(35,70,color(9, 168, 176)),
	  		-2*squareSize,
	  		ground-30,
	  		7),
	  	'Toby2': new Person(
	  		'Toby2',
	  		new Human(40,80,color(9, 168, 176)),
	  		0,
	  		ground-40,
	  		8),
	  	'Toby3': new Person(
	  		'Toby3',
	  		new Human(50,100,color(9, 168, 176)),
	  		0,
	  		ground-60,
	  		9),
	  	'Toby4': new Person(
	  		'Toby4',
	  		new Human(60,120,color(9, 168, 176)),
	  		0,
	  		ground-70,
	  		10),
	  	'Toby5': new Person(
	  		'Toby5',
	  		new Human(70,140,color(9, 168, 176)),
	  		0,
	  		ground-75,
	  		11),
	  	'Toby6': new Person(
	  		'Toby6',
	  		new Human(80,150,color(9, 168, 176)),
	  		0,
	  		ground-75,
	  		11),
	  	'Toby7': new Person(
	  		'Toby7',
	  		new Human(85,155,color(9, 168, 176)),
	  		0,
	  		ground-75,
	  		11),
	  	'Toby8': new Person(
	  		'Toby8',
	  		new Human(90,160,color(9, 168, 176)),
	  		0,
	  		ground-75,
	  		11),
	  	'Toby9': new Person(
	  		'Toby9',
	  		new Human(92,165,color(9, 168, 176)),
	  		0,
	  		ground-75,
	  		11),
	  	'Mother': new Person(
	  		'Mother',
	  		new Human(85,145,color(179, 112, 111)),
	  		-6*squareSize,
	  		ground-65,
	  		7),
	  	'Brother': new Person(
	  		'Brother',
	  		new Human(60,120,color(111, 179, 111)),
	  		80*squareSize,
	  		ground-75,
	  		9),
	  	'Dog': new Person(
	  		'Dog',
	  		new Dog(140,60,color(158, 122, 74)), //199, 177, 135
	  		105*squareSize,
	  		ground-30,
	  		7),
	  	'Sheep1': new Person(
	  		'Sheep1',
	  		new Sheep(100,60,color(84, 84, 80),color(227, 226, 218)), //199, 177, 135
	  		200*squareSize, // 200
	  		0,
	  		7),
	  	'Sheep2': new Person(
	  		'Sheep2',
	  		new Sheep(100,60,color(84, 84, 80),color(227, 226, 218)), //199, 177, 135
	  		236*squareSize, // 200
	  		0,
	  		7),
	  	'Father': new Person(
	  		'Father',
	  		new Human(100,160,color(151, 179, 111)),
	  		267*squareSize,
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
	if (X>=3*squareSize && X<11*squareSize && Y>=ground+3*squareSize && Y<ground+6*squareSize){
		return 'PAPER';
	}
	
	if (X>32*squareSize && X<52*squareSize && Y>=ground && Y<H){
		return 'WATER';
	}
	
	// ENGLISH FLAG
	
/*
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
*/
	
	// FRENCH FLAG
	
/*
	if (X>=54*squareSize && X<55*squareSize && Y>=ground+2*squareSize  && Y<ground+5*squareSize){
		return 'BLUE';
	}
	if (X>=55*squareSize && X<56*squareSize && Y>=ground+2*squareSize  && Y<ground+5*squareSize){
		return 'WHITE';
	}
	if (X>=56*squareSize && X<57*squareSize && Y>=ground+2*squareSize  && Y<ground+5*squareSize){
		return 'RED';
	}
	
*/
	if (X>145*squareSize && X<170*squareSize && Y>=ground){
		return 'WATER';
	}
	
	// TREES
	
	if (X>=75*squareSize && X<78*squareSize && Y>=ground-5*squareSize && Y<ground){
		return 'WOOD';
	}
	if (X>=75*squareSize && X<78*squareSize && Y>=ground-11*squareSize && Y<ground-5*squareSize){
		return 'DARK WOOD';
	}
	if (X>=75*squareSize && X<78*squareSize && Y>=ground-14*squareSize && Y<ground-11*squareSize){
		return 'WOOD';
	}
	
	if (X>=90*squareSize && X<93*squareSize && Y>=ground-5*squareSize && Y<ground){
		return 'WOOD';
	}
	if (X>=90*squareSize && X<93*squareSize && Y>=ground-11*squareSize && Y<ground-5*squareSize){
		return 'DARK WOOD';
	}
	if (X>=90*squareSize && X<93*squareSize && Y>=ground-14*squareSize && Y<ground-11*squareSize){
		return 'WOOD';
	}
	
	if (X>=78*squareSize && X<83*squareSize && Y>=ground-5*squareSize && Y<ground-4*squareSize){
		return 'WOOD';
	}
	if (X>=82*squareSize && X<85*squareSize && Y>=ground-6*squareSize && Y<ground-5*squareSize){
		return 'WOOD';
	}
	if (X>=78*squareSize && X<82*squareSize && Y>=ground-5*squareSize && Y<ground){
		return 'NONE';
	}
	if (X>=82*squareSize && X<85*squareSize && Y>=ground-6*squareSize && Y<ground){
		return 'NONE';
	}
	
	if (X>=85*squareSize && X<87*squareSize && Y>=ground-4*squareSize && Y<ground-3*squareSize){
		return 'WOOD';
	}
	if (X>=86*squareSize && X<90*squareSize && Y>=ground-3*squareSize && Y<ground-2*squareSize){
		return 'WOOD';
	}
	if (X>=85*squareSize && X<87*squareSize && Y>=ground-4*squareSize && Y<ground){
		return 'NONE';
	}
	if (X>=86*squareSize && X<90*squareSize && Y>=ground-3*squareSize && Y<ground){
		return 'NONE';
	}
	
	if (X>=72*squareSize && X<75*squareSize && Y>=ground-10*squareSize && Y<ground-9*squareSize){
		return 'DARK WOOD';
	}
	if (X>=70*squareSize && X<73*squareSize && Y>=ground-11*squareSize && Y<ground-10*squareSize){
		return 'DARK WOOD';
	}
	if (X>=88*squareSize && X<90*squareSize && Y>=ground-9*squareSize && Y<ground-8*squareSize){
		return 'DARK WOOD';
	}
	if (X>=87*squareSize && X<89*squareSize && Y>=ground-10*squareSize && Y<ground-9*squareSize){
		return 'DARK WOOD';
	}
	if (X>=93*squareSize && X<96*squareSize && Y>=ground-11*squareSize && Y<ground-10*squareSize){
		return 'DARK WOOD';
	}
	if (X>=95*squareSize && X<98*squareSize && Y>=ground-12*squareSize && Y<ground-11*squareSize){
		return 'DARK WOOD';
	}
	
	if (X>=215*squareSize && X<225*squareSize && Y>=ground-3*squareSize && Y<ground){
		return 'WATER';
	}
	
	if (X>=303*squareSize && X<316*squareSize && Y>=ground-2*squareSize && Y<ground+4*squareSize){
		return 'PAPER';
	}
	if (X>=323*squareSize && X<336*squareSize && Y>=ground-3*squareSize && Y<ground+4*squareSize){
		return 'PAPER';
	}
	if (X>=343*squareSize && X<356*squareSize && Y>=ground-4*squareSize && Y<ground+4*squareSize){
		return 'PAPER';
	}
	
	// BUILDING
	
	if (X>385*squareSize && X<407*squareSize && Y>=ground-2*squareSize && Y<ground){
		return 'BRICK';
	}
	if (X>385*squareSize && X<407*squareSize && Y>=ground-7*squareSize && Y<ground-2*squareSize){
		return 'DARK BRICK';
	}
	if (X>385*squareSize && X<407*squareSize && Y>=ground-11*squareSize && Y<ground-7*squareSize){
		return 'BRICK';
	}
	if (X>384*squareSize && X<408*squareSize && Y>=ground-17*squareSize && Y<ground-11*squareSize && (Y-(ground-12*squareSize))>-2*((5*squareSize)/(38*squareSize))*(X-382*squareSize) && (Y-(ground-12*squareSize))>2*((5*squareSize)/(38*squareSize))*(X-410*squareSize)){
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
	}


}

function drawEarth(){
	image(earth,groundWidth/2-sideX+squareSize/2,H/2-squareSize/4);
}

function drawFeatures(){
	image(features,groundWidth/2-sideX,H/2-squareSize/4);
}

function progressBar(){
	rectMode(LEFT);
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

function earthFloor(X){
	if (X>=73*squareSize && X<75*squareSize){
		return ground-2*squareSize;
	}
	if (X>=75*squareSize && X<78*squareSize){
		return ground-5*squareSize;
	}
	if (X>=90*squareSize && X<93*squareSize){
		return ground-5*squareSize;
	}
	if (X>=93*squareSize && X<95*squareSize){
		return ground-2*squareSize;
	}
	if (X>=78*squareSize && X<82*squareSize){
		return ground-5*squareSize;
	}
	if (X>=82*squareSize && X<85*squareSize){
		return ground-6*squareSize;
	}
	if (X>=85*squareSize && X<87*squareSize){
		return ground-4*squareSize;
	}
	if (X>=87*squareSize && X<90*squareSize){
		return ground-3*squareSize;
	}
	if (X>=180*squareSize && X<215*squareSize){
		return ground-round(8*sin(180*(X-180*squareSize)/(40*squareSize)))*squareSize;
	}
	if (X>=225*squareSize && X<250*squareSize){
		return ground-round(6*sin(180*(X-220*squareSize)/(30*squareSize)))*squareSize;
	}
	if (X>=302*squareSize && X<317*squareSize){
		return ground-3*squareSize;
	}
	if (X>=322*squareSize && X<337*squareSize){
		return ground-4*squareSize;
	}
	if (X>=342*squareSize && X<357*squareSize){
		return ground-5*squareSize;
	}
/*
	for (var i=0; i<tobySwap.length; i+=1){
		if (X>=tobySwap[i]-squareSize && X<tobySwap[i]+squareSize){
			return ground-2*squareSize;
		}
	}
*/
	return ground;
}

function setupAccessories(){
	boats = {
		'ef': new Boat(32*squareSize,ground,65,30,32*squareSize,52*squareSize),
		'fe': new Boat(145*squareSize,ground,95,30,145*squareSize,170*squareSize)
	};
	treetops = {
		'big1': new Treetop(76*squareSize,ground-17*squareSize,14*squareSize,10*squareSize),
		'big2': new Treetop(91*squareSize,ground-17*squareSize,14*squareSize,10*squareSize),
		'small1': new Treetop(70*squareSize,ground-11*squareSize,5*squareSize,5*squareSize),
		'small2': new Treetop(98*squareSize,ground-11*squareSize,5*squareSize,3*squareSize)
	};
	notices = {
		'0': new Notice(7*squareSize,4*squareSize,8*squareSize,8*squareSize,'0 YRS',"Firstly I was born..."),
		'5': new Notice(tobySwap[0],4*squareSize,8*squareSize,8*squareSize,'5 YRS', "I moved to France"),
		'9': new Notice(tobySwap[1],4*squareSize,8*squareSize,8*squareSize,'9 YRS', "I like to climb trees","with my brother"),
		'9a': new Notice(115*squareSize,4*squareSize,8*squareSize,8*squareSize,'Daisy', "I have a doggit"),
		'12': new Notice(tobySwap[2],4*squareSize,8*squareSize,8*squareSize,'12 YRS', "I moved back to England"),
		'13': new Notice(tobySwap[3],4*squareSize,8*squareSize,8*squareSize,'13 YRS', "We settled in Cumbria"),
		'13a': new Notice(267*squareSize,4*squareSize,8*squareSize,8*squareSize,'Homeschool', "I began home education"),
		'14': new Notice(tobySwap[4],4*squareSize,8*squareSize,8*squareSize,'14-16 YRS', "I sat GCSEs","and A-Level French"),
		'16': new Notice(tobySwap[5],4*squareSize,8*squareSize,8*squareSize,'16 YRS', "I went to Sixth-Form"),
		'17': new Notice(tobySwap[6],4*squareSize,8*squareSize,8*squareSize,'17 YRS', "I got awesome","work experience"),
		'17a': new Notice(445*squareSize,4*squareSize,8*squareSize,8*squareSize,'CompSci AS', "I sat AS Computer Science"),
		'18': new Notice(tobySwap[7],4*squareSize,8*squareSize,8*squareSize,'18 YRS', "Covid-19 disrupted","my A-Level exams"),
		'18a': new Notice(500*squareSize,4*squareSize,8*squareSize,8*squareSize,'Oxford', "I got an offer","at Oxford Uni!"),
		'18b': new Notice(tobySwap[8],4*squareSize,8*squareSize,8*squareSize,'NOW', "You are all up to date!"),

	};
	
	flags = {
		'e1': new Flag(31*squareSize,ground+3*squareSize,'e'),
		'f1': new Flag(57*squareSize,ground+3*squareSize,'f'),
		'f2': new Flag(144*squareSize,ground+3*squareSize,'f'),
		'e2': new Flag(175*squareSize,ground+3*squareSize,'e'),
	};
	writings = {
		'1': new Writing(2*squareSize,ground+3*squareSize,10*squareSize,6*squareSize,'Arrow Keys',[]),
		'2': new Writing(303*squareSize,ground-2*squareSize,13*squareSize,6*squareSize,'2016',['GCSE Maths - A* - 97.5%']),
		'3': new Writing(323*squareSize,ground-3*squareSize,13*squareSize,6*squareSize,'2017',['FSMQ Maths - A - 90%','GCSE Physics - A*','GCSE Chemistry - A*','GCSE Biology - A*','GCSE English - A']),
		'4': new Writing(343*squareSize,ground-4*squareSize,13*squareSize,6*squareSize,'2018',['A-Level French - A - 86%','GCSE Computer Science\nA* - 96PUM']),

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
		if (this.body.type==='Sheep'){
			if (toby.x<this.x){
				image(this.body.body.right1,this.x-sideX,this.y);
			} else {
				image(this.body.body.left1,this.x-sideX,this.y);
			}
		} else {
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
		}
		if (this.name.slice(0,4)!=='Toby'){
			fill(this.body.col);
			noStroke();
			text(this.name,this.x-sideX,this.y-this.bodyH/2-20);
		}
		
		if (control !== this.name && mouseX>this.x-sideX-this.bodyW/2 && mouseX<this.x-sideX+this.bodyW/2 && mouseY>this.y-this.bodyH/2 && mouseY<this.y+this.bodyH/2){
			cursorType = 'pointer';
			if (mouseIsPressed){
				control = this.name;
				this.vy = -2*this.maxvx;
			}
		}
	}	
	
	move(){
		if (keyIsDown(32) && this.name===control && !startAnim){
			if (this.vx>=0){
				this.vx = 2*this.maxvx;
			} else {
				this.vx = -2*this.maxvx;
			}
		}
		if ((this.vx>0 && this.y+this.bodyH/2<=earthFloor(this.x+this.vx+this.bodyW/4) && this.x+this.bodyW/2<groundWidth) || (this.vx<0 && this.y+this.bodyH/2<=earthFloor(this.x+this.vx-this.bodyW/4) && this.x-this.bodyW/2>0)){
			this.x += this.vx;
			if (control === this.name && !startAnim && this.vx>0 && this.x-sideX>W-startScrollDist && this.x<groundWidth-(W-(this.x-sideX))){
				sideX += this.vx;
			}
			if (control === this.name && !startAnim && this.vx<0 && this.x-sideX<startScrollDist && this.x>startScrollDist){
				sideX += this.vx;
			}
		}
		this.y += this.vy;
		
// 		if (control === this.name){
		if (keyIsDown(39) && control === this.name && !startAnim){
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
		if (keyIsDown(37) && control === this.name && !startAnim){
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
		
		if (keyIsDown(38) && control === this.name && !startAnim){
			if (this.footy()>=earthFloor(this.x)){
				this.vy = -1.5*this.maxvx;
			} else {
				this.vy += 1;
			}
		} else {
			
			if (this.footy()<Math.min(earthFloor(this.x-this.bodyW/4),earthFloor(this.x),earthFloor(this.x+this.bodyW/4))){
				this.vy += 1;
			} else {
				this.y = this.heady(Math.min(earthFloor(this.x-this.bodyW/4),earthFloor(this.x),earthFloor(this.x+this.bodyW/4)));
				this.vy = 0;
			}
		}
		
		
/*
		if (this.name==='Brother' && toby.x>70*squareSize){
			if (this.x<89*squareSize){
				this.vx = 5;
				this.x += this.vx;
			} else if (this.x<94*squareSize){
				if (this.vy>=0 && this.x<87*squareSize){
					this.vy = -15;
				} else {
					this.vy += 1;
				}
				this.y += this.vy;
			}
		}
*/
		if (this.name==='Dog' && toby.x>110*squareSize && toby.x<135*squareSize && (this.x>=105*squareSize||toby.vx>0) && (this.x<=132*squareSize||toby.vx<0)){
			this.vx = toby.vx;
		}
		
		if (startAnim && this.name==='Toby1'){
			if (this.x<10*squareSize){
				this.vx = 3;
			} else {
				startAnim = false;
			}
		}
		
		if (startAnim && this.name==='Mother'){
			if (this.x<6*squareSize){
				this.vx = 3;
			} else {
				startAnim = false;
			}
		}
	}
}