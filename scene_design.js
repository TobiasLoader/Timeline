
function setupScene(){
	squareSize = 24;
  	ground = H-9*squareSize;
  	startScrollDist = 2*W/5;
  	sideX = 0;
  	groundWidth = 580*squareSize;
  	control = 'Toby1';
  	toby = {x:0, y:0, vx:0, vy:0};
  	milestone  = [
	  	2*squareSize,   // 0
  		22*squareSize,  // 1
  		64*squareSize,  // 2
  		100*squareSize, // 3
  		180*squareSize, // 4
  		216*squareSize, // 5
  		330*squareSize, // 6
  		410*squareSize, // 7
  		460*squareSize, // 8
  		510*squareSize, // 9
  		550*squareSize  // 10
  	];
  	milestoneAge = [
	  	"0",
	  	"5",
	  	"8",
	  	"9",
	  	"12",
	  	"13",
	  	"14-16",
	  	"16",
	  	"17",
	  	"18",
	  	"present"
  	]
  	if (ground-12*squareSize>6*squareSize){
  		noticeHeight = ground-12*squareSize;
  	} else {
	  	noticeHeight = 6*squareSize;
  	}
}



function locationFeatures(X,Y){
	
	/// MILESTONE 0
	
	if (X>=milestone[0]+5*squareSize && X<milestone[0]+13*squareSize && Y>=ground+3*squareSize && Y<ground+6*squareSize){return 'PAPER';}
	
	/// MILESTONE 1
	
	if (X>milestone[1]+7*squareSize && X<milestone[1]+27*squareSize && Y>=ground && Y<H){return 'WATER';}
	
	/// MILESTONE 2
	
	if (X>=milestone[2]+13*squareSize && X<milestone[2]+28*squareSize && Y>=ground-1*squareSize && Y<ground+3*squareSize){ return 'PAPER';}

	/// MILESTONE 3
	
	if (X>=milestone[3]+15*squareSize && X<milestone[3]+18*squareSize && Y>=ground-5*squareSize && Y<ground){ return 'WOOD';}
	if (X>=milestone[3]+15*squareSize && X<milestone[3]+18*squareSize && Y>=ground-11*squareSize && Y<ground-5*squareSize){ return 'DARK WOOD';}
	if (X>=milestone[3]+15*squareSize && X<milestone[3]+18*squareSize && Y>=ground-14*squareSize && Y<ground-11*squareSize){return 'WOOD';}
	if (X>=milestone[3]+30*squareSize && X<milestone[3]+33*squareSize && Y>=ground-5*squareSize && Y<ground){return 'WOOD';}
	if (X>=milestone[3]+30*squareSize && X<milestone[3]+33*squareSize && Y>=ground-11*squareSize && Y<ground-5*squareSize){return 'DARK WOOD';}
	if (X>=milestone[3]+30*squareSize && X<milestone[3]+33*squareSize && Y>=ground-14*squareSize && Y<ground-11*squareSize){return 'WOOD';}
	if (X>=milestone[3]+18*squareSize && X<milestone[3]+23*squareSize && Y>=ground-5*squareSize && Y<ground-4*squareSize){return 'WOOD';}
	if (X>=milestone[3]+22*squareSize && X<milestone[3]+25*squareSize && Y>=ground-6*squareSize && Y<ground-5*squareSize){return 'WOOD';}
	if (X>=milestone[3]+18*squareSize && X<milestone[3]+22*squareSize && Y>=ground-5*squareSize && Y<ground){return 'NONE';}
	if (X>=milestone[3]+22*squareSize && X<milestone[3]+25*squareSize && Y>=ground-6*squareSize && Y<ground){return 'NONE';}
	if (X>=milestone[3]+25*squareSize && X<milestone[3]+27*squareSize && Y>=ground-4*squareSize && Y<ground-3*squareSize){return 'WOOD';}
	if (X>=milestone[3]+26*squareSize && X<milestone[3]+30*squareSize && Y>=ground-3*squareSize && Y<ground-2*squareSize){return 'WOOD';}
	if (X>=milestone[3]+25*squareSize && X<milestone[3]+27*squareSize && Y>=ground-4*squareSize && Y<ground){return 'NONE';}
	if (X>=milestone[3]+26*squareSize && X<milestone[3]+30*squareSize && Y>=ground-3*squareSize && Y<ground){return 'NONE';}
	if (X>=milestone[3]+12*squareSize && X<milestone[3]+15*squareSize && Y>=ground-10*squareSize && Y<ground-9*squareSize){return 'DARK WOOD';}
	if (X>=milestone[3]+10*squareSize && X<milestone[3]+13*squareSize && Y>=ground-11*squareSize && Y<ground-10*squareSize){return 'DARK WOOD';}
	if (X>=milestone[3]+28*squareSize && X<milestone[3]+30*squareSize && Y>=ground-9*squareSize && Y<ground-8*squareSize){return 'DARK WOOD';}
	if (X>=milestone[3]+27*squareSize && X<milestone[3]+29*squareSize && Y>=ground-10*squareSize && Y<ground-9*squareSize){return 'DARK WOOD';}
	if (X>=milestone[3]+33*squareSize && X<milestone[3]+36*squareSize && Y>=ground-11*squareSize && Y<ground-10*squareSize){return 'DARK WOOD';}
	if (X>=milestone[3]+35*squareSize && X<milestone[3]+38*squareSize && Y>=ground-12*squareSize && Y<ground-11*squareSize){return 'DARK WOOD';}
	
	/// MILESTONE 4
	
	if (X>milestone[4]+5*squareSize && X<milestone[4]+30*squareSize && Y>=ground){
		return 'WATER';
	}
	
	/// MILESTONE 5
	
	if (X>=milestone[5]+39*squareSize && X<milestone[5]+49*squareSize && Y>=ground-3*squareSize && Y<ground){return 'WATER';}
	if (X>=milestone[5]+39*squareSize && X<milestone[5]+49*squareSize && Y>=ground && Y<ground+1*squareSize){return 'ROCK';}
	
	/// MILESTONE 6
	
	if (X>=milestone[6]+13*squareSize && X<milestone[6]+26*squareSize && Y>=ground-2*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	if (X>=milestone[6]+33*squareSize && X<milestone[6]+46*squareSize && Y>=ground-3*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	if (X>=milestone[6]+53*squareSize && X<milestone[6]+66*squareSize && Y>=ground-4*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	
	/// MILESTONE 7
	
	if (X>milestone[7]+15*squareSize && X<milestone[7]+37*squareSize && Y>=ground-2*squareSize && Y<ground){return 'BRICK';}
	if (X>milestone[7]+15*squareSize && X<milestone[7]+37*squareSize && Y>=ground-7*squareSize && Y<ground-2*squareSize){return 'DARK BRICK';}
	if (X>milestone[7]+15*squareSize && X<milestone[7]+37*squareSize && Y>=ground-11*squareSize && Y<ground-7*squareSize){return 'BRICK';}
	if (X>milestone[7]+14*squareSize && X<milestone[7]+38*squareSize && Y>=ground-17*squareSize && Y<ground-11*squareSize && (Y-(ground-12*squareSize))>-2*((5*squareSize)/(38*squareSize))*(X-(milestone[7]+12*squareSize)) && (Y-(ground-12*squareSize))>2*((5*squareSize)/(38*squareSize))*(X-(milestone[7]+40*squareSize))){return 'TILE';}
	
	/// MILESTONE 8
	
	/// MILESTONE 9
	
	/// MILESTONE 10
	
	
	
	
	// MILESTONES
	
/*
	for (var i=1; i<milestone.length; i+=1){
		if (X>=milestone[i]-squareSize && X<milestone[i]+squareSize && Y>=ground-2*squareSize && Y<ground+squareSize){
			return 'MILESTONE';
		}
	}
*/
	return 'GROUND';
}


function earthFloor(X){
	
	/// MILESTONE 0
	
	/// MILESTONE 1
	
	/// MILESTONE 2
	
	if (X>=milestone[2]+12*squareSize && X<milestone[2]+29*squareSize){ return ground-2*squareSize;}
	
	/// MILESTONE 3
	
	if (X>=milestone[3]+13*squareSize && X<milestone[3]+15*squareSize){return ground-2*squareSize;}
	if (X>=milestone[3]+15*squareSize && X<milestone[3]+18*squareSize){return ground-5*squareSize;}
	if (X>=milestone[3]+30*squareSize && X<milestone[3]+33*squareSize){return ground-5*squareSize;}
	if (X>=milestone[3]+33*squareSize && X<milestone[3]+35*squareSize){return ground-2*squareSize;}
	if (X>=milestone[3]+18*squareSize && X<milestone[3]+22*squareSize){return ground-5*squareSize;}
	if (X>=milestone[3]+22*squareSize && X<milestone[3]+25*squareSize){return ground-6*squareSize;}
	if (X>=milestone[3]+25*squareSize && X<milestone[3]+27*squareSize){return ground-4*squareSize;}
	if (X>=milestone[3]+27*squareSize && X<milestone[3]+30*squareSize){return ground-3*squareSize;}
	
	/// MILESTONE 4
	
	/// MILESTONE 5
	
	if (X>=milestone[5]+4*squareSize && X<milestone[5]+39*squareSize){return ground-round(8*sin(180*(X-(milestone[5]+4*squareSize))/(40*squareSize)))*squareSize;}
	if (X>=milestone[5]+49*squareSize && X<milestone[5]+74*squareSize){return ground-round(6*sin(180*(X-(milestone[5]+44*squareSize))/(30*squareSize)))*squareSize;}
	
	/// MILESTONE 6
	
	if (X>=milestone[6]+12*squareSize && X<milestone[6]+27*squareSize){return ground-3*squareSize;}
	if (X>=milestone[6]+32*squareSize && X<milestone[6]+47*squareSize){return ground-4*squareSize;}
	if (X>=milestone[6]+52*squareSize && X<milestone[6]+67*squareSize){return ground-5*squareSize;}
	
	/// MILESTONE 7
	
	/// MILESTONE 8
	
	/// MILESTONE 9
	
	/// MILESTONE 10

	return ground;
}

function setupAccessories(){
	boats = {
		'ef': new Boat(milestone[1]+7*squareSize,ground,65,30,milestone[1]+7*squareSize,milestone[1]+27*squareSize),
		'fe': new Boat(milestone[4]+5*squareSize,ground,95,30,milestone[4]+5*squareSize,milestone[4]+30*squareSize)
	};
	treetops = {
		'big1': new Treetop(milestone[3]+16*squareSize,ground-17*squareSize,14*squareSize,10*squareSize),
		'big2': new Treetop(milestone[3]+31*squareSize,ground-17*squareSize,14*squareSize,10*squareSize),
		'small1': new Treetop(milestone[3]+10*squareSize,ground-11*squareSize,5*squareSize,5*squareSize),
		'small2': new Treetop(milestone[3]+38*squareSize,ground-11*squareSize,5*squareSize,3*squareSize)
	};
	flags = {
		'e1': new Flag(milestone[1]+6*squareSize,ground+3*squareSize,'e'),
		'f1': new Flag(milestone[1]+32*squareSize,ground+3*squareSize,'f'),
		'f2': new Flag(milestone[4]+4*squareSize,ground+3*squareSize,'f'),
		'e2': new Flag(milestone[4]+35*squareSize,ground+3*squareSize,'e'),
	};
	writings = {
		'1': new Writing(milestone[0]+4*squareSize,ground+3*squareSize,10*squareSize,6*squareSize,'Arrow Keys',[]),
		'2': new Writing(milestone[6]+13*squareSize,ground-2*squareSize,13*squareSize,6*squareSize,'2016',['GCSE Maths - A* - 97.5%']),
		'3': new Writing(milestone[6]+33*squareSize,ground-3*squareSize,13*squareSize,6*squareSize,'2017',['FSMQ Maths - A - 90%','GCSE Physics - A*','GCSE Chemistry - A*','GCSE Biology - A*','GCSE English - A']),
		'4': new Writing(milestone[6]+53*squareSize,ground-4*squareSize,13*squareSize,6*squareSize,'2018',['A-Level French - A - 86%','GCSE Computer Science\nA* - 96PUM']),

	};
	typings = {
		'1': new Typing(milestone[2],ground-4*squareSize,40*squareSize,10*squareSize,'print("Hello World!")',26,color(9, 168, 176)),
	};
	notices = {
		'0': new Notice(milestone[0]+9*squareSize,noticeHeight,8*squareSize,4*squareSize,'2002',"Firstly I was born..."),
		'5': new Notice(milestone[1],noticeHeight,8*squareSize,4*squareSize,"Moved to France"),
		'8': new Notice(milestone[2],noticeHeight,8*squareSize,4*squareSize,"Started coding"),
		'9': new Notice(milestone[3],noticeHeight,8*squareSize,4*squareSize,"Climbed trees\nwith my brother"),
		'9a': new Notice(milestone[3]+55*squareSize,noticeHeight,8*squareSize,4*squareSize,"Daisy joined\nthe family"),
		'12': new Notice(milestone[4],noticeHeight,8*squareSize,4*squareSize,"Moved back\nto the UK"),
		'13': new Notice(milestone[5],noticeHeight,8*squareSize,4*squareSize,"Settled in\nCumbria"),
		'13a': new Notice(milestone[5]+91*squareSize,noticeHeight,8*squareSize,4*squareSize,"Began\nHome-Education"),
		'14': new Notice(milestone[6],noticeHeight,8*squareSize,4*squareSize,"Sat GCSEs and\nA-Level French"),
		'16': new Notice(milestone[7],noticeHeight,8*squareSize,4*squareSize,"Went to\nSixth-Form"),
		'17': new Notice(milestone[8],noticeHeight,8*squareSize,4*squareSize,"Landed work\nexperience"),
		'17a': new Notice(milestone[8]+35*squareSize,noticeHeight,8*squareSize,4*squareSize,"Sat AS\nComputer Science"),
		'18': new Notice(milestone[9],noticeHeight,8*squareSize,4*squareSize,"A-Levels got\ncancelled"),
		'18a': new Notice(milestone[9]+20*squareSize,noticeHeight,8*squareSize,4*squareSize,"Got an offer\n@ Oxford Uni!"),
		'18b': new Notice(milestone[10],noticeHeight,8*squareSize,4*squareSize,'RIGHT NOW!', "You're all up to date!"),
	};
	milestones = {};
	for (var i=0; i<milestone.length;i+=1){
		if(i<milestone.length-1 && i!==6){
			milestones[str(i)] = new Milestone(milestone[i],ground-1.25*squareSize,milestoneAge[i],20,color(240, 245, 225),color(77, 69, 65));
		} else {
			milestones[str(i)] = new Milestone(milestone[i],ground-1.25*squareSize,milestoneAge[i],18,color(240, 245, 225),color(77, 69, 65));
		}
	}
	specialClouds = {
		'1' : new SpecialCloud(milestone[8]+17*squareSize,8*squareSize,9*squareSize,"Worked on a Masters level project on\nCloud Computing and Cryptocurrency,\nfor which I was awarded a Distinction.",14,color(245,245,245),color(185, 41, 59))
	};
	waterDroplets = {
		'1' : new WaterDroplet(milestone[5]+39*squareSize,ground-3*squareSize,10*squareSize,3*squareSize),
		'2' : new WaterDroplet(milestone[5]+39*squareSize,ground-3*squareSize,10*squareSize,3*squareSize),
		'3' : new WaterDroplet(milestone[5]+39*squareSize,ground-3*squareSize,10*squareSize,3*squareSize)
	};
	fish = {
		'1' : new Fish(milestone[1]+7*squareSize,ground,20*squareSize,9*squareSize,color(232, 140, 74)),
		'2' : new Fish(milestone[1]+7*squareSize,ground,20*squareSize,9*squareSize,color(232, 119, 7)),
		'3' : new Fish(milestone[1]+7*squareSize,ground,20*squareSize,9*squareSize,color(232, 174, 74)),
		'4' : new Fish(milestone[4]+5*squareSize,ground,25*squareSize,9*squareSize,color(232, 140, 74)),
		'5' : new Fish(milestone[4]+5*squareSize,ground,25*squareSize,9*squareSize,color(232, 119, 7)),
		'6' : new Fish(milestone[4]+5*squareSize,ground,25*squareSize,9*squareSize,color(232, 174, 74)),
	};
}