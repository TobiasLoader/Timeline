
var clouds;
let sky;
let earth;
var people;
let ground;
let features;

let control;

let cursorType;

let squareSize;

let sideX;
let startScrollDist;
let groundWidth;

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
  	setupLandMarks();
 }

function getRndBias(min, max, bias, influence) {
    var rnd = random(min, max),
        mix = random(0,1) * influence;
    return rnd * (1 - mix) + bias * mix;
}


function draw() {
	cursor(cursorType);
	cursorType = 'default';
	drawSky();
	drawEarth();
	drawPeople();
	drawFeatures();
	drawClouds();
}


window.onresize = function() {
	resizeCanvas(windowWidth, windowHeight);
	W = windowWidth;
	H = windowHeight
};