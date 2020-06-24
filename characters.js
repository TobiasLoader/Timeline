
function setupPeople(){
	print(toby.x)
	people = {
	  	'Toby1': new Person(
	  		'Toby1',
	  		new Human(35,70,color(9, 168, 176)),
	  		-2*squareSize,
	  		ground-35,
	  		5,
	  		false),
	  	'Toby2': new Person(
	  		'Toby2',
	  		new Human(38,76,color(9, 168, 176)),
	  		toby.x,
	  		ground-38,
	  		6,
	  		false),
	  	'Toby3': new Person(
	  		'Toby3',
	  		new Human(45,90,color(9, 168, 176)),
	  		toby.x,
	  		ground-40,
	  		7,
	  		false),
	  	'Toby4': new Person(
	  		'Toby4',
	  		new Human(50,100,color(9, 168, 176)),
	  		toby.x,
	  		ground-50,
	  		8,
	  		false),
	  	'Toby5': new Person(
	  		'Toby5',
	  		new Human(60,120,color(9, 168, 176)),
	  		toby.x,
	  		ground-60,
	  		9,
	  		false),
	  	'Toby6': new Person(
	  		'Toby6',
	  		new Human(70,140,color(9, 168, 176)),
	  		toby.x,
	  		ground-70,
	  		10,
	  		false),
	  	'Toby7': new Person(
	  		'Toby7',
	  		new Human(80,150,color(9, 168, 176)),
	  		toby.x,
	  		ground-75,
	  		10,
	  		false),
	  	'Toby8': new Person(
	  		'Toby8',
	  		new Human(85,156,color(9, 168, 176)),
	  		toby.x,
	  		ground-78,
	  		10,
	  		false),
	  	'Toby9': new Person(
	  		'Toby9',
	  		new Human(90,160,color(9, 168, 176)),
	  		toby.x,
	  		ground-80,
	  		10,
	  		false),
	  	'Toby10': new Person(
	  		'Toby10',
	  		new Human(92,166,color(9, 168, 176)),
	  		toby.x,
	  		ground-83,
	  		10,
	  		false),
	  	'Mother': new Person(
	  		'Mother',
	  		new Human(85,145,color(179, 112, 111)),
	  		-6*squareSize,
	  		ground-65,
	  		7,
	  		true),
	  	'Tom': new Person(
	  		'Tom',
	  		new Human(60,120,color(111, 179, 111)),
	  		milestone[3]+20*squareSize,
	  		ground-75,
	  		9,
	  		true),
	  	'Daisy': new Person(
	  		'Daisy',
	  		new Dog(140,60,color(158, 122, 74)), //199, 177, 135
	  		milestone[3]+45*squareSize,
	  		ground-30,
	  		7,
	  		true),
	  	'Sheep1': new Person(
	  		'Sheep1',
	  		new Sheep(100,60,color(84, 84, 80),color(227, 226, 218)), //199, 177, 135
	  		milestone[5]+24*squareSize, // 200
	  		0,
	  		7,
	  		false),
	  	'Sheep2': new Person(
	  		'Sheep2',
	  		new Sheep(100,60,color(84, 84, 80),color(227, 226, 218)), //199, 177, 135
	  		milestone[5]+60*squareSize, // 200
	  		0,
	  		7,
	  		false),
	  	'Father': new Person(
	  		'Father',
	  		new Human(100,160,color(151, 179, 111)),
	  		milestone[5]+91*squareSize,
	  		ground-80,
	  		7,
	  		true),
  	}
}

function characterSwap(){
	for (var i=1; i<milestone.length; i+=1){
		if (toby.x<milestone[i]){
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
	constructor (name, body, x, y, maxVX, showName){
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
		this.showName = showName;
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
				if (this.footy()>=earthFloor(this.x,this.footy())){
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
				if (this.footy()>=earthFloor(this.x,this.footy())){
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
		if (this.showName){
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
		if (keyIsDown(16) && this.name===control && !startAnim){
			if (this.vx>=0){
				this.vx = 2*this.maxvx;
			} else {
				this.vx = -2*this.maxvx;
			}
		}
		if ((this.vx>0 && this.y+this.bodyH/2<=earthFloor(this.x+this.vx+this.bodyW/4,this.footy()) && this.x+this.bodyW/2<groundWidth) || (this.vx<0 && this.y+this.bodyH/2<=earthFloor(this.x+this.vx-this.bodyW/4,this.footy()) && this.x-this.bodyW/2>0)){
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
				if (this.footy()>=earthFloor(this.x,this.footy())){
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
				if (this.footy()>=earthFloor(this.x,this.footy())){
					this.vx+=1;
				}
			}
		}
		
		if ((keyIsDown(38)||keyIsDown(32)) && control === this.name && !startAnim){
			if (this.footy()>=earthFloor(this.x,this.footy())){
				this.vy = -(10 + (this.bodyH-70)/15);
			} else {
				this.vy += 1;
			}
		} else {
			
			if (this.footy()<Math.min(earthFloor(this.x-this.bodyW/4,this.footy()),earthFloor(this.x,this.footy()),earthFloor(this.x+this.bodyW/4,this.footy()))){
				this.vy += 1;
			} else {
				this.y = this.heady(Math.min(earthFloor(this.x-this.bodyW/4,this.footy()),earthFloor(this.x,this.footy()),earthFloor(this.x+this.bodyW/4,this.footy())));
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
		if (this.name==='Daisy'){
			if (toby.x>milestone[3]+50*squareSize && toby.x<milestone[3]+76*squareSize){
				this.x = toby.x - 7*squareSize;
				this.vx = toby.vx;
			} else {
				this.vx = 0;
			}
		}
		
		if (startAnim && this.name==='Toby1'){
			if (this.x<milestone[0]+11*squareSize){
				this.vx = 3;
			} else {
				startAnim = false;
			}
		}
		
		if (startAnim && this.name==='Mother'){
			if (this.x<milestone[0]+7*squareSize){
				this.vx = 3;
			} else {
				startAnim = false;
			}
		}
	}
}