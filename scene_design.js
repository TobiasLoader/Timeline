
function setupScene(){
	squareSize = 24;
  	ground = H-9*squareSize;
  	startScrollDist = 2*W/5;
  	sideX = 0;
  	groundWidth = 580*squareSize;
  	control = 'Toby1';
  	toby = {x:0, y:0, vx:0, vy:0};
  	milestones  = [
	  	0*squareSize,   // 0
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
  	if (ground-12*squareSize>6*squareSize){
  		noticeHeight = ground-12*squareSize;
  	} else {
	  	noticeHeight = 6*squareSize;
  	}
}



function locationFeatures(X,Y){
	
	/// MILESTONE 0
	
	if (X>=milestones[0]+3*squareSize && X<milestones[0]+11*squareSize && Y>=ground+3*squareSize && Y<ground+6*squareSize){return 'PAPER';}
	
	/// MILESTONE 1
	
	if (X>milestones[1]+7*squareSize && X<milestones[1]+27*squareSize && Y>=ground && Y<H){return 'WATER';}
	
	/// MILESTONE 2
	
	if (X>=milestones[2]+13*squareSize && X<milestones[2]+28*squareSize && Y>=ground-1*squareSize && Y<ground+3*squareSize){ return 'PAPER';}

	/// MILESTONE 3
	
	if (X>=milestones[3]+15*squareSize && X<milestones[3]+18*squareSize && Y>=ground-5*squareSize && Y<ground){ return 'WOOD';}
	if (X>=milestones[3]+15*squareSize && X<milestones[3]+18*squareSize && Y>=ground-11*squareSize && Y<ground-5*squareSize){ return 'DARK WOOD';}
	if (X>=milestones[3]+15*squareSize && X<milestones[3]+18*squareSize && Y>=ground-14*squareSize && Y<ground-11*squareSize){return 'WOOD';}
	if (X>=milestones[3]+30*squareSize && X<milestones[3]+33*squareSize && Y>=ground-5*squareSize && Y<ground){return 'WOOD';}
	if (X>=milestones[3]+30*squareSize && X<milestones[3]+33*squareSize && Y>=ground-11*squareSize && Y<ground-5*squareSize){return 'DARK WOOD';}
	if (X>=milestones[3]+30*squareSize && X<milestones[3]+33*squareSize && Y>=ground-14*squareSize && Y<ground-11*squareSize){return 'WOOD';}
	if (X>=milestones[3]+18*squareSize && X<milestones[3]+23*squareSize && Y>=ground-5*squareSize && Y<ground-4*squareSize){return 'WOOD';}
	if (X>=milestones[3]+22*squareSize && X<milestones[3]+25*squareSize && Y>=ground-6*squareSize && Y<ground-5*squareSize){return 'WOOD';}
	if (X>=milestones[3]+18*squareSize && X<milestones[3]+22*squareSize && Y>=ground-5*squareSize && Y<ground){return 'NONE';}
	if (X>=milestones[3]+22*squareSize && X<milestones[3]+25*squareSize && Y>=ground-6*squareSize && Y<ground){return 'NONE';}
	if (X>=milestones[3]+25*squareSize && X<milestones[3]+27*squareSize && Y>=ground-4*squareSize && Y<ground-3*squareSize){return 'WOOD';}
	if (X>=milestones[3]+26*squareSize && X<milestones[3]+30*squareSize && Y>=ground-3*squareSize && Y<ground-2*squareSize){return 'WOOD';}
	if (X>=milestones[3]+25*squareSize && X<milestones[3]+27*squareSize && Y>=ground-4*squareSize && Y<ground){return 'NONE';}
	if (X>=milestones[3]+26*squareSize && X<milestones[3]+30*squareSize && Y>=ground-3*squareSize && Y<ground){return 'NONE';}
	if (X>=milestones[3]+12*squareSize && X<milestones[3]+15*squareSize && Y>=ground-10*squareSize && Y<ground-9*squareSize){return 'DARK WOOD';}
	if (X>=milestones[3]+10*squareSize && X<milestones[3]+13*squareSize && Y>=ground-11*squareSize && Y<ground-10*squareSize){return 'DARK WOOD';}
	if (X>=milestones[3]+28*squareSize && X<milestones[3]+30*squareSize && Y>=ground-9*squareSize && Y<ground-8*squareSize){return 'DARK WOOD';}
	if (X>=milestones[3]+27*squareSize && X<milestones[3]+29*squareSize && Y>=ground-10*squareSize && Y<ground-9*squareSize){return 'DARK WOOD';}
	if (X>=milestones[3]+33*squareSize && X<milestones[3]+36*squareSize && Y>=ground-11*squareSize && Y<ground-10*squareSize){return 'DARK WOOD';}
	if (X>=milestones[3]+35*squareSize && X<milestones[3]+38*squareSize && Y>=ground-12*squareSize && Y<ground-11*squareSize){return 'DARK WOOD';}
	
	/// MILESTONE 4
	
	if (X>milestones[4]+5*squareSize && X<milestones[4]+30*squareSize && Y>=ground){
		return 'WATER';
	}
	
	/// MILESTONE 5
	
	if (X>=milestones[5]+39*squareSize && X<milestones[5]+49*squareSize && Y>=ground-3*squareSize && Y<ground){return 'WATER';}
	
	/// MILESTONE 6
	
	if (X>=milestones[6]+13*squareSize && X<milestones[6]+26*squareSize && Y>=ground-2*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	if (X>=milestones[6]+33*squareSize && X<milestones[6]+46*squareSize && Y>=ground-3*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	if (X>=milestones[6]+53*squareSize && X<milestones[6]+66*squareSize && Y>=ground-4*squareSize && Y<ground+4*squareSize){return 'PAPER';}
	
	/// MILESTONE 7
	
	if (X>milestones[7]+15*squareSize && X<milestones[7]+37*squareSize && Y>=ground-2*squareSize && Y<ground){return 'BRICK';}
	if (X>milestones[7]+15*squareSize && X<milestones[7]+37*squareSize && Y>=ground-7*squareSize && Y<ground-2*squareSize){return 'DARK BRICK';}
	if (X>milestones[7]+15*squareSize && X<milestones[7]+37*squareSize && Y>=ground-11*squareSize && Y<ground-7*squareSize){return 'BRICK';}
	if (X>milestones[7]+14*squareSize && X<milestones[7]+38*squareSize && Y>=ground-17*squareSize && Y<ground-11*squareSize && (Y-(ground-12*squareSize))>-2*((5*squareSize)/(38*squareSize))*(X-(milestones[7]+12*squareSize)) && (Y-(ground-12*squareSize))>2*((5*squareSize)/(38*squareSize))*(X-(milestones[7]+40*squareSize))){return 'TILE';}
	
	/// MILESTONE 8
	
	/// MILESTONE 9
	
	/// MILESTONE 10
	
	
	
	
	// MILESTONES
	
	for (var i=1; i<milestones.length; i+=1){
		if (X>=milestones[i]-squareSize && X<milestones[i]+squareSize && Y>=ground-2*squareSize && Y<ground+squareSize){
			return 'MILESTONE';
		}
	}
	return 'GROUND';
}


function earthFloor(X){
	
	/// MILESTONE 0
	
	/// MILESTONE 1
	
	/// MILESTONE 2
	
	if (X>=milestones[2]+12*squareSize && X<milestones[2]+29*squareSize){ return ground-2*squareSize;}
	
	/// MILESTONE 3
	
	if (X>=milestones[3]+13*squareSize && X<milestones[3]+15*squareSize){return ground-2*squareSize;}
	if (X>=milestones[3]+15*squareSize && X<milestones[3]+18*squareSize){return ground-5*squareSize;}
	if (X>=milestones[3]+30*squareSize && X<milestones[3]+33*squareSize){return ground-5*squareSize;}
	if (X>=milestones[3]+33*squareSize && X<milestones[3]+35*squareSize){return ground-2*squareSize;}
	if (X>=milestones[3]+18*squareSize && X<milestones[3]+22*squareSize){return ground-5*squareSize;}
	if (X>=milestones[3]+22*squareSize && X<milestones[3]+25*squareSize){return ground-6*squareSize;}
	if (X>=milestones[3]+25*squareSize && X<milestones[3]+27*squareSize){return ground-4*squareSize;}
	if (X>=milestones[3]+27*squareSize && X<milestones[3]+30*squareSize){return ground-3*squareSize;}
	
	/// MILESTONE 4
	
	/// MILESTONE 5
	
	if (X>=milestones[5]+4*squareSize && X<milestones[5]+39*squareSize){return ground-round(8*sin(180*(X-(milestones[5]+4*squareSize))/(40*squareSize)))*squareSize;}
	if (X>=milestones[5]+49*squareSize && X<milestones[5]+74*squareSize){return ground-round(6*sin(180*(X-(milestones[5]+44*squareSize))/(30*squareSize)))*squareSize;}
	
	/// MILESTONE 6
	
	if (X>=milestones[6]+12*squareSize && X<milestones[6]+27*squareSize){return ground-3*squareSize;}
	if (X>=milestones[6]+32*squareSize && X<milestones[6]+47*squareSize){return ground-4*squareSize;}
	if (X>=milestones[6]+52*squareSize && X<milestones[6]+67*squareSize){return ground-5*squareSize;}
	
	/// MILESTONE 7
	
	/// MILESTONE 8
	
	/// MILESTONE 9
	
	/// MILESTONE 10

	return ground;
}

function setupAccessories(){
	boats = {
		'ef': new Boat(milestones[1]+7*squareSize,ground,65,30,milestones[1]+7*squareSize,milestones[1]+27*squareSize),
		'fe': new Boat(milestones[4]+5*squareSize,ground,95,30,milestones[4]+5*squareSize,milestones[4]+30*squareSize)
	};
	treetops = {
		'big1': new Treetop(milestones[3]+16*squareSize,ground-17*squareSize,14*squareSize,10*squareSize),
		'big2': new Treetop(milestones[3]+31*squareSize,ground-17*squareSize,14*squareSize,10*squareSize),
		'small1': new Treetop(milestones[3]+10*squareSize,ground-11*squareSize,5*squareSize,5*squareSize),
		'small2': new Treetop(milestones[3]+38*squareSize,ground-11*squareSize,5*squareSize,3*squareSize)
	};
	flags = {
		'e1': new Flag(milestones[1]+6*squareSize,ground+3*squareSize,'e'),
		'f1': new Flag(milestones[1]+32*squareSize,ground+3*squareSize,'f'),
		'f2': new Flag(milestones[4]+4*squareSize,ground+3*squareSize,'f'),
		'e2': new Flag(milestones[4]+35*squareSize,ground+3*squareSize,'e'),
	};
	writings = {
		'1': new Writing(milestones[0]+2*squareSize,ground+3*squareSize,10*squareSize,6*squareSize,'Arrow Keys',[]),
		'2': new Writing(milestones[6]+13*squareSize,ground-2*squareSize,13*squareSize,6*squareSize,'2016',['GCSE Maths - A* - 97.5%']),
		'3': new Writing(milestones[6]+33*squareSize,ground-3*squareSize,13*squareSize,6*squareSize,'2017',['FSMQ Maths - A - 90%','GCSE Physics - A*','GCSE Chemistry - A*','GCSE Biology - A*','GCSE English - A']),
		'4': new Writing(milestones[6]+53*squareSize,ground-4*squareSize,13*squareSize,6*squareSize,'2018',['A-Level French - A - 86%','GCSE Computer Science\nA* - 96PUM']),

	};
	typings = {
		'1': new Typing(milestones[2],ground-4*squareSize,40*squareSize,10*squareSize,'print("Hello World!")',26,color(9, 168, 176)),
	};
	notices = {
		'0': new Notice(milestones[0]+7*squareSize,noticeHeight,8*squareSize,4*squareSize,'2002',"Firstly I was born..."),
		'5': new Notice(milestones[1],noticeHeight,8*squareSize,4*squareSize,'5 YRS OLD', "Moved to France"),
		'8': new Notice(milestones[2],noticeHeight,8*squareSize,4*squareSize,'8 YRS', "I started to","learn to code"),
		'9': new Notice(milestones[3],noticeHeight,8*squareSize,4*squareSize,'9 YRS', "I like to climb trees","with my brother"),
		'9a': new Notice(milestones[3]+55*squareSize,noticeHeight,8*squareSize,4*squareSize,'Daisy', "I have a doggit"),
		'12': new Notice(milestones[4],noticeHeight,8*squareSize,4*squareSize,'12 YRS', "I moved back to England"),
		'13': new Notice(milestones[5],noticeHeight,8*squareSize,4*squareSize,'13 YRS', "We settled in Cumbria"),
		'13a': new Notice(milestones[5]+91*squareSize,noticeHeight,8*squareSize,4*squareSize,'Homeschool', "I began home education"),
		'14': new Notice(milestones[6],noticeHeight,8*squareSize,4*squareSize,'14-16 YRS', "I sat GCSEs","and A-Level French"),
		'16': new Notice(milestones[7],noticeHeight,8*squareSize,4*squareSize,'16 YRS', "I went to Sixth-Form"),
		'17': new Notice(milestones[8],noticeHeight,8*squareSize,4*squareSize,'17 YRS', "I got awesome","work experience"),
		'17a': new Notice(milestones[8]+25*squareSize,noticeHeight,8*squareSize,4*squareSize,'CompSci AS', "I sat AS Computer Science"),
		'18': new Notice(milestones[9],noticeHeight,8*squareSize,4*squareSize,'18 YRS', "Covid-19 disrupted","my A-Level exams"),
		'18a': new Notice(milestones[9]+20*squareSize,noticeHeight,8*squareSize,4*squareSize,'Oxford', "I got an offer","at Oxford Uni!"),
		'18b': new Notice(milestones[10],noticeHeight,8*squareSize,4*squareSize,'NOW', "You are all up to date!"),
	};
	
}