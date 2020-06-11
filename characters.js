
function setupPeople(){
	people = {
	  	'Toby1': new Person(
	  		'Toby1',
	  		new Human(35,70,color(9, 168, 176)),
	  		-2*squareSize,
	  		ground-35,
	  		7),
	  	'Toby2': new Person(
	  		'Toby2',
	  		new Human(38,76,color(9, 168, 176)),
	  		0,
	  		ground-38,
	  		8),
	  	'Toby3': new Person(
	  		'Toby3',
	  		new Human(40,80,color(9, 168, 176)),
	  		0,
	  		ground-40,
	  		8),
	  	'Toby4': new Person(
	  		'Toby4',
	  		new Human(50,100,color(9, 168, 176)),
	  		0,
	  		ground-50,
	  		9),
	  	'Toby5': new Person(
	  		'Toby5',
	  		new Human(60,120,color(9, 168, 176)),
	  		0,
	  		ground-60,
	  		10),
	  	'Toby6': new Person(
	  		'Toby6',
	  		new Human(70,140,color(9, 168, 176)),
	  		0,
	  		ground-70,
	  		11),
	  	'Toby7': new Person(
	  		'Toby7',
	  		new Human(80,150,color(9, 168, 176)),
	  		0,
	  		ground-75,
	  		11),
	  	'Toby8': new Person(
	  		'Toby8',
	  		new Human(85,156,color(9, 168, 176)),
	  		0,
	  		ground-78,
	  		11),
	  	'Toby9': new Person(
	  		'Toby9',
	  		new Human(90,160,color(9, 168, 176)),
	  		0,
	  		ground-80,
	  		11),
	  	'Toby10': new Person(
	  		'Toby10',
	  		new Human(92,166,color(9, 168, 176)),
	  		0,
	  		ground-83,
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
	  		milestones[3]+20*squareSize,
	  		ground-75,
	  		9),
	  	'Dog': new Person(
	  		'Dog',
	  		new Dog(140,60,color(158, 122, 74)), //199, 177, 135
	  		milestones[3]+45*squareSize,
	  		ground-30,
	  		7),
	  	'Sheep1': new Person(
	  		'Sheep1',
	  		new Sheep(100,60,color(84, 84, 80),color(227, 226, 218)), //199, 177, 135
	  		milestones[5]+24*squareSize, // 200
	  		0,
	  		7),
	  	'Sheep2': new Person(
	  		'Sheep2',
	  		new Sheep(100,60,color(84, 84, 80),color(227, 226, 218)), //199, 177, 135
	  		milestones[5]+60*squareSize, // 200
	  		0,
	  		7),
	  	'Father': new Person(
	  		'Father',
	  		new Human(100,160,color(151, 179, 111)),
	  		milestones[5]+91*squareSize,
	  		ground-80,
	  		7),
  	}
}

function characterSwap(){
	for (var i=1; i<milestones.length; i+=1){
		if (toby.x<milestones[i]){
			control = 'Toby'+str(i);
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
		if (this.name==='Dog' && toby.x>milestones[3]+50*squareSize && toby.x<milestones[3]+75*squareSize && (this.x>=milestones[3]+45*squareSize||toby.vx>0) && (this.x<=milestones[3]+72*squareSize||toby.vx<0)){
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