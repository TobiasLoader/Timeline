
var clouds;
let sky;
let earth;
var people;
let ground;
let features;
let boats;
let treetops;
let notices;
let flags;
let writings;

let startAnim;
let control;

let cursorType;

let squareSize;

let sideX;
let startScrollDist;
let groundWidth;
let toby;
let tobySwap;

let loaded;
let loadtime;
let graphicsCreated;

function setup() {
  	W = window.innerWidth;
  	H = window.innerHeight;
  	canvas = createCanvas(W, H);
  	startAnim = true;
  	angleMode(DEGREES);
  	textAlign(CENTER,CENTER);
  	textFont('Inconsolata',20);
  	cursorType = 'default';
  	loaded = false;
  	loadtime = 2;
  	graphicsCreated = false;
  	setupScene();
  	
}

function loading(){
	background(250, 249, 240);
  	rectMode(CENTER);
  	fill(9, 168, 176);
  	noStroke();
  	push();
  	translate(W/2,H/2);
  	rotate(2*360*millis()/(loadtime*1000));
  	rect(0,0,squareSize,squareSize,2);
  	pop();
}
 
function buildGraphics(){
	
  	setupPeople();
  	setupClouds();
  	setupEarth();
  	setupSky();
  	setupAccessories();
//   	graphicsCreated = true;
}

function getRndBias(min, max, bias, influence) {
    var rnd = random(min, max),
        mix = random(0,1) * influence;
    return rnd * (1 - mix) + bias * mix;
}


function draw() {
	
	if (millis()>loadtime*1000 && !loaded ){
		buildGraphics();
		loaded = true;
	}/*
 else if (millis()>1000){
		if (!graphicsCreated){
			print(true)
			buildGraphics();
		}
	}
*/
	if (loaded){
		
// 		print(people)
		cursor(cursorType);
		cursorType = 'default';
		movePeople();
		drawSky();
		drawClouds();
		drawEarth();
		drawPeople();
		drawFeatures();
		drawAccessories();
		progressBar();
	} else {
		loading();
	}
}


window.onresize = function() {
	resizeCanvas(windowWidth, windowHeight);
	W = windowWidth;
	H = windowHeight
};