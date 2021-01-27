
function setupScene(){
	squareSize = 24;
  	ground = H-9*squareSize;
  	startScrollDist = 2*W/5;
  
  	groundWidth = 725*squareSize;
  	control = 'Toby1';
  	toby = {x:0, y:0, vx:0, vy:0};
  	sideX = 0;//216*squareSize
  	milestone  = [
	  	2*squareSize,   // 0
  		42*squareSize,  // 1
  		82*squareSize,  // 2
  		120*squareSize, // 3
  		200*squareSize, // 4
  		236*squareSize, // 5
  		350*squareSize, // 6
  		430*squareSize, // 7
  		480*squareSize, // 8
  		550*squareSize, // 9
  		660*squareSize, // 10
  		710*squareSize  // 11
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
	  	"19",
	  	"now"
  	]
  	if (ground-14*squareSize>6*squareSize){
  		noticeHeight = ground-14*squareSize;
  	} else {
	  	noticeHeight = 6*squareSize;
  	}
}



function locationFeatures(X,Y){
	
	/// MILESTONE 0
	
	if (X>=milestone[0]+4*squareSize && X<milestone[0]+14*squareSize && Y>=ground+3*squareSize && Y<ground+6*squareSize){return 'PAPER';}
	if (X>=milestone[0]+22*squareSize && X<milestone[0]+32*squareSize && Y>=ground+3*squareSize && Y<ground+6*squareSize){return 'PAPER';}
	
	/// MILESTONE 1
	
	if (X>milestone[1]+7*squareSize && X<milestone[1]+27*squareSize && Y>=ground && Y<H){return 'WATER';}
	
	/// MILESTONE 2
	
// 	if (X>=milestone[2]+10*squareSize && X<milestone[2]+28*squareSize && Y>=ground-1*squareSize && Y<ground+3*squareSize){ return 'PAPER';}

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
	
	if (X>=milestone[3]+67*squareSize && X<milestone[3]+71*squareSize && Y>=ground && Y<ground+4*squareSize){return 'MUD';}
	
	/// MILESTONE 4
	
	if (X>milestone[4]+5*squareSize && X<milestone[4]+30*squareSize && Y>=ground){return 'WATER';}
	
	/// MILESTONE 5
	
	if (X>=milestone[5]+23*squareSize && X<milestone[5]+28*squareSize && Y>=ground+1*squareSize && Y<ground+4*squareSize){return 'MUD';}
	if (X>=milestone[5]+39*squareSize && X<milestone[5]+49*squareSize && Y>=ground-3*squareSize && Y<ground){return 'WATER';}
	if (X>=milestone[5]+39*squareSize && X<milestone[5]+49*squareSize && Y>=ground && Y<ground+1*squareSize){return 'ROCK';}
	if (X>=milestone[5]+52*squareSize && X<milestone[5]+74*squareSize && Y>=ground+6*squareSize && Y<ground+7*squareSize){return 'ROCK';}
	if (X>=milestone[5]+51*squareSize && X<milestone[5]+52*squareSize && Y>=ground && Y<ground+6*squareSize){return 'ROCK';}
	if (X>=milestone[5]+52*squareSize && X<milestone[5]+74*squareSize && Y>=ground && Y<ground+6*squareSize){return 'DARK ROCK';}
	if (X>=milestone[5]+53*squareSize && X<milestone[5]+70*squareSize && Y>=ground-1*squareSize && Y<ground){return 'DARK ROCK';}
	if (X>=milestone[5]+54*squareSize && X<milestone[5]+67*squareSize && Y>=ground-2*squareSize && Y<ground-1*squareSize){return 'DARK ROCK';}
	if (X>=milestone[5]+56*squareSize && X<milestone[5]+62*squareSize && Y>=ground-3*squareSize && Y<ground-2*squareSize){return 'DARK ROCK';}
	if (X>=milestone[5]+74*squareSize && X<milestone[5]+77*squareSize && Y>=ground+3*squareSize && Y<ground+6*squareSize){return 'DARK ROCK';}
	if (X>=milestone[5]+74*squareSize && X<milestone[5]+79*squareSize && Y>=ground && Y<ground+1*squareSize){return 'DARK GRASS';}
	if (X>=milestone[5]+74*squareSize && X<milestone[5]+79*squareSize && Y>=ground+1*squareSize && Y<ground+3*squareSize){return 'DARK ROCK';}


	
	/// MILESTONE 6
	
	if (X>=milestone[6]+13*squareSize && X<milestone[6]+26*squareSize && Y>=ground-2*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	if (X>=milestone[6]+33*squareSize && X<milestone[6]+46*squareSize && Y>=ground-3*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	if (X>=milestone[6]+53*squareSize && X<milestone[6]+66*squareSize && Y>=ground-4*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	
	/// MILESTONE 7
	
	if (X>milestone[7]+15*squareSize && X<milestone[7]+37*squareSize && Y>=ground-2*squareSize && Y<ground){return 'BRICK';}
	if (X>milestone[7]+15*squareSize && X<milestone[7]+37*squareSize && Y>=ground-7*squareSize && Y<ground-2*squareSize){return 'DARK BRICK';}
	if (X>milestone[7]+18*squareSize && X<milestone[7]+34*squareSize && Y>=ground-10*squareSize && Y<ground-8*squareSize){return 'WHITE';}
	if (X>milestone[7]+15*squareSize && X<milestone[7]+37*squareSize && Y>=ground-11*squareSize && Y<ground-7*squareSize){return 'BRICK';}
	if (X>milestone[7]+14*squareSize && X<milestone[7]+38*squareSize && Y>=ground-17*squareSize && Y<ground-11*squareSize && (Y-(ground-12*squareSize))>-2*((5*squareSize)/(38*squareSize))*(X-(milestone[7]+12*squareSize)) && (Y-(ground-12*squareSize))>2*((5*squareSize)/(38*squareSize))*(X-(milestone[7]+40*squareSize))){return 'TILE';}
	
	/// MILESTONE 8
	
	if (X>=milestone[8]+32*squareSize && X<milestone[8]+48*squareSize && Y>=ground-2*squareSize && Y<ground+2*squareSize){return 'PAPER';}
	
	/// MILESTONE 9
	
	if (X>=milestone[9]+45*squareSize && X<milestone[9]+55*squareSize && Y>=ground && Y<ground+1*squareSize){return 'CORONA RED';}
	if (X>=milestone[9]+72*squareSize && X<milestone[9]+88*squareSize && Y>=ground-2*squareSize && Y<ground+5*squareSize){return 'PAPER';}
	
	/// MILESTONE 10
	
	if (X>=milestone[10]+17*squareSize && X<milestone[10]+33*squareSize && Y>=ground-2*squareSize && Y<ground+2*squareSize){return 'PAPER';}
	
	/// MILESTONE 11
	
	
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


function earthFloor(X,Y){
	
	/// MILESTONE 0
	
	if (X>=milestone[0]+24*squareSize && X<milestone[0]+30*squareSize){ return ground-2*squareSize;}
	if (X>=milestone[0]+21*squareSize && X<milestone[0]+33*squareSize){ return ground-1*squareSize;}
	
	/// MILESTONE 1
	
	/// MILESTONE 2
	
// 	if (X>=milestone[2]+9*squareSize && X<milestone[2]+29*squareSize){ return ground-2*squareSize;}
	
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
	if (X>=milestone[5]+49*squareSize && X<milestone[5]+74*squareSize){
		if (X<milestone[5]+52*squareSize || Y<ground){
			return ground-round(6*sin(180*(X-(milestone[5]+44*squareSize))/(30*squareSize)))*squareSize;
		} else {
			return ground+6*squareSize;
		}
	}
	if (X>=milestone[5]+74*squareSize && X<milestone[5]+77*squareSize){return ground+6*squareSize;}
	if (X>=milestone[5]+77*squareSize && X<milestone[5]+79*squareSize){return ground+3*squareSize;}
	
	/// MILESTONE 6
	
	if (X>=milestone[6]+12*squareSize && X<milestone[6]+27*squareSize){return ground-3*squareSize;}
	if (X>=milestone[6]+32*squareSize && X<milestone[6]+47*squareSize){return ground-4*squareSize;}
	if (X>=milestone[6]+52*squareSize && X<milestone[6]+67*squareSize){return ground-5*squareSize;}
	
	/// MILESTONE 7
	
	/// MILESTONE 8
	
	if (X>=milestone[8]+31*squareSize && X<milestone[8]+49*squareSize){return ground-3*squareSize;}
	
	/// MILESTONE 9
	
	if (X>=milestone[9]+71*squareSize && X<milestone[9]+89*squareSize){return ground-3*squareSize;}		

	/// MILESTONE 10
	
	if (X>=milestone[10]+16*squareSize && X<milestone[10]+34*squareSize){return ground-3*squareSize;}	

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
		'1': new Writing(milestone[0]+4*squareSize,ground+3*squareSize,10*squareSize,6*squareSize,'Arrow Keys to Move',[]),
		'2': new Writing(milestone[0]+22*squareSize,ground+3*squareSize,10*squareSize,6*squareSize,'SPACEBAR to Jump',[]),
		'3': new Writing(milestone[6]+13*squareSize,ground-1.5*squareSize,13*squareSize,6*squareSize,'2016 - First GCSE',['GCSE Maths - A* - 97.5%']),
		'4': new Writing(milestone[6]+33*squareSize,ground-3*squareSize,13*squareSize,6*squareSize,'2017 - Most GCSEs',['FSMQ Maths - A - 90%','GCSE Physics - A*','GCSE Chemistry - A*','GCSE Biology - A*','GCSE English - A']),
		'5': new Writing(milestone[6]+53*squareSize,ground-3.5*squareSize,13*squareSize,6*squareSize,'2018 - First A-Level',['A-Level French - A - 86%','GCSE CS - A* - 96PUM']),
		'6': new Writing(milestone[7]+16*squareSize,ground-10.5*squareSize,21*squareSize,6*squareSize,'QUEEN ELIZABETH GRAMMAR SCHOOL',[],color(48, 111, 206)),
		'7': new Writing(milestone[8]+32*squareSize,ground-1.5*squareSize,16*squareSize,4*squareSize,'Achieved AS:',["AS Computer Science - A - 92PUM"]),
		'8': new Writing(milestone[9]+72*squareSize,ground-2*squareSize,16*squareSize,6*squareSize,'School A-Levels:',["A-Level Mathematics - A*","A-Level Further Mathematics - A*","A-Level Physics - A*"]),
		'9': new Writing(milestone[10]+17*squareSize,ground-1.5*squareSize,16*squareSize,4*squareSize,'5th A-Level:',["Computer Science - A* - 95PUM"]),

	};
	typings = {
		'1': new Typing(milestone[2]+10.5*squareSize,ground-12.5*squareSize,18*squareSize,10*squareSize,'print("Hello World!");',19,color(200)),
	};
	notices = {
		'0': new Notice(milestone[0]+8.8*squareSize,noticeHeight,8*squareSize,4*squareSize,'2002',"Firstly I was born..."),
		'5': new Notice(milestone[1],noticeHeight,8*squareSize,4*squareSize,"Moved to France"),
		'8': new Notice(milestone[2],noticeHeight,9*squareSize,4*squareSize,"Started coding","(Codecademy & Khan Academy)"),
		'9': new Notice(milestone[3],noticeHeight,8*squareSize,4*squareSize,"Climbed trees\nwith my brother"),
		'9a': new Notice(milestone[3]+55*squareSize,noticeHeight,8*squareSize,4*squareSize,"Daisy joined\nthe family"),
		'12': new Notice(milestone[4],noticeHeight,8*squareSize,4*squareSize,"Moved back\nto the UK"),
		'13': new Notice(milestone[5],noticeHeight,8*squareSize,4*squareSize,"Settled in\nCumbria"),
		'13a': new Notice(milestone[5]+91*squareSize,noticeHeight,8*squareSize,4*squareSize,"Began\nHome-Education"),
		'14': new Notice(milestone[6],noticeHeight,8*squareSize,4*squareSize,"Sat GCSEs and\nA-Level French"),
		'16': new Notice(milestone[7],noticeHeight,8*squareSize,4*squareSize,"Started at\nSixth-Form"),
		'17': new Notice(milestone[8],noticeHeight,8*squareSize,4*squareSize,"Landed work\nexperience"),
		'17a': new Notice(milestone[8]+40*squareSize,noticeHeight,8*squareSize,4*squareSize,"End of Y12"),
		'18': new Notice(milestone[9],noticeHeight,8*squareSize,4*squareSize,"Y13","Final school year"),
// 		'18a': new Notice(milestone[9]+30*squareSize,noticeHeight,8*squareSize,4*squareSize,"Oxford Offer!","(MMathCompSci)"),
		'18a': new Notice(milestone[9]+50*squareSize,noticeHeight,9*squareSize,4*squareSize,"A-Levels cancelled","(COVID-19)"),
		'18b': new Notice(milestone[9]+80*squareSize,noticeHeight,9*squareSize,4*squareSize,"A-Levels Results!"),
		'19a': new Notice(milestone[10],noticeHeight,9*squareSize,4*squareSize,"First Year\nM+CS @ Oxford"),
		'19b': new Notice(milestone[11],noticeHeight,8*squareSize,4*squareSize,'RIGHT NOW!', "You're all up to date!"),
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
		'1' : new SpecialCloud(milestone[8]+17*squareSize,8*squareSize,9*squareSize,"Work Experience: Masters level\nproject involving Cloud Computing\nand Cryptocurrency through the\ndepartement of Computer Science.",14,color(245,245,245),color(185, 41, 59))
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
	bones = {
		'1' : new Bone(milestone[3]+69*squareSize,ground+1.5*squareSize),
		'2' : new Bone(milestone[3]+69*squareSize,ground+2.5*squareSize),
		'3' : new Bone(milestone[5]+25*squareSize,ground+2*squareSize),
		'4' : new Bone(milestone[5]+24*squareSize,ground+3*squareSize),
		'5' : new Bone(milestone[5]+26*squareSize,ground+3*squareSize),
		'6' : new Bone(milestone[5]+27*squareSize,ground+2*squareSize),
	};
	
	birds = {
		'1' : new Bird(W/2,5*squareSize,'R',4*squareSize,10),
		'2' : new Bird(W/4,3*squareSize,'R',3*squareSize,15),
	};
	
	books = {
		'1' : new Book(),
	};
	
	coronaviruses = {};
	for (var i=0; i<15; i+=1){
		coronaviruses[str(i)] = new Coronavirus(milestone[9]+random(-5*squareSize,5*squareSize)+50*squareSize,random(0,ground),random(0.7*squareSize,2*squareSize));
	}
	
	monitors = {
		'1' : new Monitor(milestone[2]+19.5*squareSize,ground-6*squareSize),
	}

	keyboardCases = {
		'1' : new KeyboardCase(milestone[2]+19.5*squareSize,ground+0.5*squareSize),
	}
	
	keyboardKeys = {
		'Q' : new KeyboardKey(milestone[2]+14*squareSize,ground-0.2*squareSize,'Q'),
		'W' : new KeyboardKey(milestone[2]+16.2*squareSize,ground-0.2*squareSize,'W'),
		'E' : new KeyboardKey(milestone[2]+18.4*squareSize,ground-0.2*squareSize,'E'),
		'R' : new KeyboardKey(milestone[2]+20.6*squareSize,ground-0.2*squareSize,'R'),
		'T' : new KeyboardKey(milestone[2]+22.8*squareSize,ground-0.2*squareSize,'T'),
		'Y' : new KeyboardKey(milestone[2]+25*squareSize,ground-0.2*squareSize,'Y')
	};
	
	letters = {
		'0': new Letter(milestone[9]+25*squareSize,noticeHeight,ground+3*squareSize,8*squareSize,5*squareSize,"Oxford Offer!","MMathCompSci     "),
	}
}