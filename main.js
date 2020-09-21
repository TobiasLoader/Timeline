
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
let typings;
let milestones;
let specialClouds;
let waterDroplets;
let fish;
let bones;
let birds;
let noticeHeight;

let startAnim;
let control;

let cursorType;

let squareSize;

let sideX;
let startScrollDist;
let groundWidth;
let toby;
let milestone;
let milestoneAge;

let lastloadMillis;
let loaded;
let loadtime;
let graphicsCreated;

let browserMessage;

function setup() {
  	W = window.innerWidth;
  	H = window.innerHeight;
  	canvas = createCanvas(W, H);
  	browserMessage = false;
  	startAnim = true;
  	angleMode(DEGREES);
  	textAlign(CENTER,CENTER);
  	textFont('Inconsolata',20);
  	cursorType = 'default';
  	loaded = false;
  	loadtime = 3;
  	lastloadMillis = 0;
  	graphicsCreated = false;
  	setupScene();
  	setupPeople();
}

function loading(){
	background(250, 249, 240);
  	rectMode(CENTER);
  	fill(9, 168, 176);
  	noStroke();
  	push();
  	translate(W/2,H/2);
  	rotate(0.75*360*millis()/(1000));
  	rect(0,0,1.5*squareSize,1.5*squareSize,4);
  	pop();
}
 
function buildGraphics(){
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
	
	if (!loaded && millis()-lastloadMillis>loadtime*1000){
		buildGraphics();
		loaded = true;
	}
	if (loaded){
		print('hello');
		if (!browserMessage){
			background(250, 249, 240);
			fill(9, 168, 176);
			textFont('Inconsolata',20);
			text('Browser Compatibility:\n\nSafari not Compatible\nChrome is Compatible',W/2,3*H/7);
			text('CLICK',W/2,6*H/7);
		} else {
			cursor(cursorType);
			cursorType = 'default';
			movePeople();
			drawSky();
			drawAccessoriesBeforeEarth();
			drawEarth();
			drawClouds();
			drawAccessoriesBeforePeople();
			drawPeople();
			drawFeatures();
			drawAccessoriesAfterPeople();
			progressBar();
		}
	} else {
		loading();
	}
}


window.onresize = function() {
	resizeCanvas(windowWidth, windowHeight);
	W = windowWidth;
	H = windowHeight;
// 	setupScene();
	lastloadMillis = millis();
	loaded = false;
	ground = H-9*squareSize;
  	startScrollDist = 2*W/5;
  	
  	if (toby.x-W/2>0 && sideX<groundWidth-W) {
	  	sideX = toby.x-W/2;
  	} else if (toby.x-W/2<0) {
	  	sideX = 0;
  	} else if (sideX>groundWidth-W) {
	  	sideX = groundWidth-W;
  	}
  	
// 	buildGraphics();
};

function mouseClicked() {
	if (loaded){
		browserMessage = true;
	}
}