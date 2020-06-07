
var clouds;
let sky;
let earth;
var people;
let ground;
let features;
let boats;
let treetops;

let control;

let cursorType;

let squareSize;

let sideX;
let startScrollDist;
let groundWidth;
let toby;
let tobySwap;

function setup() {
  	W = window.innerWidth;
  	H = window.innerHeight;
  	canvas = createCanvas(W, H);
  	angleMode(DEGREES);
  	textAlign(CENTER,CENTER);
  	textFont('Avenir Next',20)
  	cursorType = 'default';
  	setupScene();
  	setupPeople();
  	setupClouds();
  	setupEarth();
  	setupSky();
  	setupAccessories();
 }

function getRndBias(min, max, bias, influence) {
    var rnd = random(min, max),
        mix = random(0,1) * influence;
    return rnd * (1 - mix) + bias * mix;
}


function draw() {
	cursor(cursorType);
	cursorType = 'default';
	movePeople();
	drawSky();
	drawClouds();
	drawEarth();
	drawPeople();
	drawFeatures();
	drawAccessories();
	
	
}


window.onresize = function() {
	resizeCanvas(windowWidth, windowHeight);
	W = windowWidth;
	H = windowHeight
};