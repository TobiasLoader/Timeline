

class Human {
	constructor (w, h, colour){
		this.w = w;
		this.h = h;
		this.col = colour;
		this.type = 'Human';
	}
	
	build(){
		this.body = {
			front:createGraphics(this.w,this.h),
			left1:createGraphics(this.w,this.h),
			left2:createGraphics(this.w,this.h),
			left3:createGraphics(this.w,this.h),
			leftJ:createGraphics(this.w,this.h),
			right1:createGraphics(this.w,this.h),
			right2:createGraphics(this.w,this.h),
			right3:createGraphics(this.w,this.h),
			rightJ:createGraphics(this.w,this.h)
		};
		
		this.body.front.fill(this.col);
		this.body.front.noStroke();
	  	this.body.front.rect(0.18*this.w,0,0.64*this.w,0.30*this.h,2);
	  	this.body.front.rect(0.26*this.w,0.33*this.h,0.48*this.w,0.34*this.h,2);
	  	this.body.front.rect(0.30*this.w,0.70*this.h,0.16*this.w,0.30*this.h,2);
	  	this.body.front.rect(0.54*this.w,0.70*this.h,0.16*this.w,0.30*this.h,2);
	  	this.body.front.rect(0.10*this.w,0.35*this.h,0.12*this.w,0.27*this.h,2);
	  	this.body.front.rect(0.78*this.w,0.35*this.h,0.12*this.w,0.27*this.h,2);
	  	this.body.front.stroke(255,255,255);
	  	this.body.front.strokeWeight(4);
	  	this.body.front.point(0.42*this.w,0.14*this.h);
	  	this.body.front.point(0.58*this.w,0.14*this.h);
	  	
	  	
	  	this.body.left1.angleMode(DEGREES);
	  	this.body.left1.fill(this.col);
		this.body.left1.noStroke();
		this.body.left1.push();
		this.body.left1.translate(0.50*this.w,0.50*this.h);
		this.body.left1.rotate(-3);
	  	this.body.left1.rect(-0.26*this.w,-0.49*this.h,0.60*this.w,0.29*this.h,2);
	  	this.body.left1.rect(-0.20*this.w,-0.17*this.h,0.38*this.w,0.34*this.h,2);
	  	this.body.left1.pop();
		this.body.left1.push();
		this.body.left1.translate(0.39*this.w,0.70*this.h);
	  	this.body.left1.rotate(30);
	  	this.body.left1.rect(0,0,0.16*this.w,0.29*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.push();
		this.body.left1.translate(0.57*this.w,0.73*this.h);
	  	this.body.left1.rotate(-30);
	  	this.body.left1.rect(0,0,0.16*this.w,0.29*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.push();
	  	this.body.left1.stroke(255,255,255);
	  	this.body.left1.strokeWeight(1);
	  	this.body.left1.translate(0.45*this.w,0.39*this.h);
	  	this.body.left1.rotate(-27);
	  	this.body.left1.rect(0,0,0.12*this.w,0.27*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.stroke(255,255,255);
	  	this.body.left1.strokeWeight(4);
	  	this.body.left1.point(0.64*this.w,0.12*this.h);
	  	
	  	
	  	this.body.left2.angleMode(DEGREES);
	  	this.body.left2.fill(this.col);
		this.body.left2.noStroke();
	  	this.body.left2.push();
		this.body.left2.translate(0.50*this.w,0.50*this.h);
		this.body.left2.rotate(3);
	  	this.body.left2.rect(-0.26*this.w,-0.49*this.h,0.60*this.w,0.29*this.h,2);
	  	this.body.left2.rect(-0.20*this.w,-0.17*this.h,0.38*this.w,0.34*this.h,2);
	  	this.body.left2.pop();
		this.body.left2.push();
		this.body.left2.translate(0.33*this.w,0.70*this.h);
	  	this.body.left2.rotate(3);
	  	this.body.left2.rect(0,0,0.16*this.w,0.29*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.push();
		this.body.left2.translate(0.52*this.w,0.70*this.h);
	  	this.body.left2.rotate(-3);
	  	this.body.left2.rect(0,0,0.16*this.w,0.29*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.push();
	  	this.body.left2.stroke(255,255,255);
	  	this.body.left2.strokeWeight(1);
	  	this.body.left2.translate(0.54*this.w,0.37*this.h);
	  	this.body.left2.rotate(-13);
	  	this.body.left2.rect(0,0,0.12*this.w,0.27*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.stroke(255,255,255);
	  	this.body.left2.strokeWeight(4);
	  	this.body.left2.point(0.74*this.w,0.14*this.h);
	  	
	  	
	  	this.body.left3.angleMode(DEGREES);
	  	this.body.left3.fill(this.col);
		this.body.left3.noStroke();
	  	this.body.left3.rect(0.24*this.w,0,0.60*this.w,0.30*this.h,2);
	  	this.body.left3.rect(0.30*this.w,0.33*this.h,0.38*this.w,0.34*this.h,2);
		this.body.left3.push();
		this.body.left3.translate(0.34*this.w,0.69*this.h);
	  	this.body.left3.rotate(20);
	  	this.body.left3.rect(0,0,0.16*this.w,0.29*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.push();
		this.body.left3.translate(0.52*this.w,0.74*this.h);
	  	this.body.left3.rotate(-35);
	  	this.body.left3.rect(0,0,0.16*this.w,0.18*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.rect(0.69*this.w,0.83*this.h,0.16*this.w,0.15*this.h,2);
	  	this.body.left3.push();
	  	this.body.left3.stroke(255,255,255);
	  	this.body.left3.strokeWeight(1);
	  	this.body.left3.translate(0.54*this.w,0.37*this.h);
	  	this.body.left3.rotate(-13);
	  	this.body.left3.rect(0,0,0.12*this.w,0.27*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.stroke(255,255,255);
	  	this.body.left3.strokeWeight(4);
	  	this.body.left3.point(0.72*this.w,0.13*this.h);
	  	
	  	
	  	this.body.leftJ.angleMode(DEGREES);
	  	this.body.leftJ.fill(this.col);
	  	this.body.leftJ.push();
	  	this.body.leftJ.stroke(255,255,255);
	  	this.body.leftJ.strokeWeight(1);
	  	this.body.leftJ.translate(0.54*this.w,0.47*this.h);
	  	this.body.leftJ.rotate(-100);
	  	this.body.leftJ.rect(0,0,0.12*this.w,0.25*this.h,2);
	  	this.body.leftJ.pop();
		this.body.leftJ.noStroke();
	  	this.body.leftJ.push();
		this.body.leftJ.translate(0.50*this.w,0.50*this.h);
		this.body.leftJ.rotate(10);
	  	this.body.leftJ.rect(-0.26*this.w,-0.49*this.h,0.60*this.w,0.29*this.h,2);
	  	this.body.leftJ.rect(-0.20*this.w,-0.17*this.h,0.38*this.w,0.34*this.h,2);
	  	this.body.leftJ.pop();
		this.body.leftJ.push();
		this.body.leftJ.translate(0.30*this.w,0.69*this.h);
	  	this.body.leftJ.rotate(10);
	  	this.body.leftJ.rect(0,0,0.16*this.w,0.20*this.h,2);
	  	this.body.leftJ.pop();
	  	this.body.leftJ.push();
		this.body.leftJ.translate(0.41*this.w,0.82*this.h);
	  	this.body.leftJ.rotate(100);
	  	this.body.leftJ.rect(0,0,0.16*this.w,0.15*this.h,2);
	  	this.body.leftJ.pop();
	  	this.body.leftJ.push();
		this.body.leftJ.translate(0.48*this.w,0.76*this.h);
	  	this.body.leftJ.rotate(-50);
	  	this.body.leftJ.rect(0,0,0.16*this.w,0.18*this.h,2);
	  	this.body.leftJ.pop();
	  	this.body.leftJ.push();
		this.body.leftJ.translate(0.73*this.w,0.76*this.h);
	  	this.body.leftJ.rotate(40);
	  	this.body.leftJ.rect(0,0,0.18*this.w,0.20*this.h,2);
	  	this.body.leftJ.pop();
	  	this.body.leftJ.push();
	  	this.body.leftJ.stroke(255,255,255);
	  	this.body.leftJ.strokeWeight(1);
	  	this.body.leftJ.translate(0.54*this.w,0.37*this.h);
	  	this.body.leftJ.rotate(100);
	  	this.body.leftJ.rect(0,0,0.12*this.w,0.27*this.h,2);
	  	this.body.leftJ.pop();
	  	this.body.leftJ.stroke(255,255,255);
	  	this.body.leftJ.strokeWeight(4);
	  	this.body.leftJ.point(0.78*this.w,0.16*this.h);
	  	
	  	
	  	this.body.right1.push();
	  	this.body.right1.translate(this.w/2,0);
	  	this.body.right1.scale(-1,1);
	  	this.body.right1.translate(-this.w/2,0);
	  	this.body.right1.copy(this.body.left1,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.right1.pop();
	  	
	  	this.body.right2.push();
	  	this.body.right2.translate(this.w/2,0);
	  	this.body.right2.scale(-1,1);
	  	this.body.right2.translate(-this.w/2,0);
	  	this.body.right2.copy(this.body.left2,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.right2.pop();
	  	
	  	this.body.right3.push();
	  	this.body.right3.translate(this.w/2,0);
	  	this.body.right3.scale(-1,1);
	  	this.body.right3.translate(-this.w/2,0);
	  	this.body.right3.copy(this.body.left3,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.right3.pop();
	  	
	  	this.body.rightJ.push();
	  	this.body.rightJ.translate(this.w/2,0);
	  	this.body.rightJ.scale(-1,1);
	  	this.body.rightJ.translate(-this.w/2,0);
	  	this.body.rightJ.copy(this.body.leftJ,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.rightJ.pop();
	}
}

class Dog {
	constructor (w, h, colour){
		this.w = w;
		this.h = h;
		this.col = colour;
		this.type = 'Dog';
	}
	
	build(){
		this.body = {
			front:createGraphics(this.w,this.h),
			left1:createGraphics(this.w,this.h),
			left2:createGraphics(this.w,this.h),
			left3:createGraphics(this.w,this.h),
			leftJ:createGraphics(this.w,this.h),
			right1:createGraphics(this.w,this.h),
			right2:createGraphics(this.w,this.h),
			right3:createGraphics(this.w,this.h),
			rightJ:createGraphics(this.w,this.h)
		};
		
		this.body.front.fill(this.col);
		this.body.front.noStroke();
		this.body.front.rect(0.35*this.w,0,0.30*this.w,0.60*this.h,2);
		this.body.front.rect(0.23*this.w,0.05*this.h,0.10*this.w,0.15*this.h,2);
		this.body.front.rect(0.23*this.w,0.05*this.h,0.05*this.w,0.30*this.h,2);
		this.body.front.rect(0.67*this.w,0.05*this.h,0.10*this.w,0.15*this.h,2);
		this.body.front.rect(0.72*this.w,0.05*this.h,0.05*this.w,0.30*this.h,2);
		this.body.front.rect(0.39*this.w,0.66*this.h,0.04*this.w,0.34*this.h,2);
		this.body.front.rect(0.44*this.w,0.72*this.h,0.03*this.w,0.33*this.h,2);
		this.body.front.rect(0.57*this.w,0.66*this.h,0.04*this.w,0.34*this.h,2);
		this.body.front.rect(0.53*this.w,0.72*this.h,0.03*this.w,0.33*this.h,2);
		this.body.front.rect(0.27*this.w,0.70*this.h,0.10*this.w,0.10*this.h,2);
		this.body.front.rect(0.27*this.w,0.60*this.h,0.04*this.w,0.13*this.h,2);
	  	this.body.front.stroke(255,255,255);
	  	this.body.front.rect(0.45*this.w,0.49*this.h,0.10*this.w,0.16*this.h,2);
	  	this.body.front.strokeWeight(4);
	  	this.body.front.point(0.45*this.w,0.30*this.h);
	  	this.body.front.point(0.55*this.w,0.30*this.h);
	  	
	  	
	  	this.body.left1.angleMode(DEGREES);
	  	
		this.body.left1.noStroke();
		this.body.left1.fill(this.col);
		this.body.left1.push();
		this.body.left1.translate(0.80*this.w,0.30*this.h);
		this.body.left1.rotate(6);
	  	this.body.left1.fill(this.col);
		this.body.left1.rect(-0.09*this.w,-0.30*this.h,0.22*this.w,0.50*this.h,2);
		this.body.left1.rect(0.10*this.w,-0.08*this.h,0.09*this.w,0.19*this.h,2);
		this.body.left1.fill(255,255,255);
	  	this.body.left1.rect(0.18*this.w,-0.06*this.h,0.01*this.w,0.02*this.h,1);
	  	this.body.left1.rect(0.13*this.w,0.06*this.h,0.06*this.w,0.02*this.h,1);
	  	this.body.left1.rect(0.13*this.w,0.09*this.h,0.06*this.w,0.02*this.h,1);
		this.body.left1.pop();
		this.body.left1.rect(0.25*this.w,0.40*this.h,0.43*this.w,0.25*this.h,2);
		this.body.left1.rect(0.25*this.w,0.29*this.h,0.37*this.w,0.15*this.h,2);
		this.body.left1.push();
		this.body.left1.translate(0.10*this.w,0.40*this.h);
	  	this.body.left1.rotate(5);
	  	this.body.left1.rect(0,0,0.12*this.w,0.10*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.push();
		this.body.left1.translate(0.05*this.w,0.33*this.h);
	  	this.body.left1.rotate(25);
	  	this.body.left1.rect(0,0,0.08*this.w,0.10*this.h,2);
	  	this.body.left1.pop();
		this.body.left1.push();
		this.body.left1.translate(0.25*this.w,0.70*this.h);
	  	this.body.left1.rotate(30);
	  	this.body.left1.rect(0,0,0.06*this.w,0.29*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.push();
		this.body.left1.translate(0.32*this.w,0.74*this.h);
	  	this.body.left1.rotate(-15);
	  	this.body.left1.rect(0,0,0.05*this.w,0.27*this.h,2);
	  	this.body.left1.pop();
		this.body.left1.push();
		this.body.left1.translate(0.58*this.w,0.70*this.h);
	  	this.body.left1.rotate(15);
	  	this.body.left1.rect(0,0,0.05*this.w,0.27*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.push();
		this.body.left1.translate(0.65*this.w,0.74*this.h);
	  	this.body.left1.rotate(-30);
	  	this.body.left1.rect(0,0,0.06*this.w,0.29*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.stroke(255,255,255);
	  	this.body.left1.rect(0.64*this.w,0.08*this.h,0.12*this.w,0.15*this.h,2);
	  	this.body.left1.noStroke();
	  	this.body.left1.rect(0.64*this.w,0.10*this.h,0.06*this.w,0.25*this.h,2);
	  	this.body.left1.stroke(255,255,255);
	  	this.body.left1.strokeWeight(4);
	  	this.body.left1.point(0.88*this.w,0.17*this.h);
	  	
	  	this.body.left2.angleMode(DEGREES);
	  	this.body.left2.fill(this.col);
		this.body.left2.noStroke();
		this.body.left2.push();
		this.body.left2.translate(0.80*this.w,0.30*this.h);
		this.body.left2.rotate(-3);
	  	this.body.left2.fill(this.col);
		this.body.left2.rect(-0.09*this.w,-0.30*this.h,0.22*this.w,0.50*this.h,2);
		this.body.left2.rect(0.10*this.w,-0.08*this.h,0.09*this.w,0.19*this.h,2);
		this.body.left2.fill(255,255,255);
	  	this.body.left2.rect(0.18*this.w,-0.06*this.h,0.01*this.w,0.02*this.h,1);
	  	this.body.left2.rect(0.13*this.w,0.06*this.h,0.06*this.w,0.02*this.h,1);
	  	this.body.left2.rect(0.13*this.w,0.09*this.h,0.06*this.w,0.02*this.h,1);
		this.body.left2.pop();
		this.body.left2.rect(0.25*this.w,0.40*this.h,0.43*this.w,0.25*this.h,2);
		this.body.left2.rect(0.25*this.w,0.29*this.h,0.37*this.w,0.15*this.h,2);
		this.body.left2.push();
		this.body.left2.translate(0.10*this.w,0.40*this.h);
	  	this.body.left2.rotate(10);
	  	this.body.left2.rect(0,0,0.12*this.w,0.10*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.push();
		this.body.left2.translate(0.07*this.w,0.31*this.h);
	  	this.body.left2.rotate(45);
	  	this.body.left2.rect(0,0,0.08*this.w,0.10*this.h,2);
	  	this.body.left2.pop();
		this.body.left2.push();
		this.body.left2.translate(0.25*this.w,0.70*this.h);
	  	this.body.left2.rotate(5);
	  	this.body.left2.rect(0,0,0.06*this.w,0.29*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.push();
		this.body.left2.translate(0.32*this.w,0.74*this.h);
	  	this.body.left2.rotate(-5);
	  	this.body.left2.rect(0,0,0.05*this.w,0.27*this.h,2);
	  	this.body.left2.pop();
		this.body.left2.push();
		this.body.left2.translate(0.58*this.w,0.70*this.h);
	  	this.body.left2.rotate(5);
	  	this.body.left2.rect(0,0,0.05*this.w,0.27*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.push();
		this.body.left2.translate(0.65*this.w,0.74*this.h);
	  	this.body.left2.rotate(-5);
	  	this.body.left2.rect(0,0,0.06*this.w,0.29*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.stroke(255,255,255);
	  	this.body.left2.rect(0.64*this.w,0.08*this.h,0.12*this.w,0.15*this.h,2);
	  	this.body.left2.noStroke();
	  	this.body.left2.rect(0.64*this.w,0.10*this.h,0.06*this.w,0.25*this.h,2);
	  	this.body.left2.stroke(255,255,255);
	  	this.body.left2.strokeWeight(4);
	  	this.body.left2.point(0.88*this.w,0.17*this.h);	
	  	
	  	this.body.left3.angleMode(DEGREES);
	  	this.body.left3.fill(this.col);
		this.body.left3.noStroke();
		this.body.left3.rect(0.71*this.w,0,0.22*this.w,0.50*this.h,2);
		this.body.left3.rect(0.90*this.w,0.22*this.h,0.09*this.w,0.19*this.h,2);
		this.body.left3.rect(0.25*this.w,0.40*this.h,0.43*this.w,0.25*this.h,2);
		this.body.left3.rect(0.25*this.w,0.29*this.h,0.37*this.w,0.15*this.h,2);
		this.body.left3.push();
		this.body.left3.translate(0.10*this.w,0.40*this.h);
	  	this.body.left3.rotate(2);
	  	this.body.left3.rect(0,0,0.12*this.w,0.10*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.push();
		this.body.left3.translate(0.04*this.w,0.34*this.h);
	  	this.body.left3.rotate(20);
	  	this.body.left3.rect(0,0,0.08*this.w,0.10*this.h,2);
	  	this.body.left3.pop();
		this.body.left3.push();
		this.body.left3.translate(0.25*this.w,0.70*this.h);
	  	this.body.left3.rotate(20);
	  	this.body.left3.rect(0,0,0.05*this.w,0.27*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.push();
		this.body.left3.translate(0.32*this.w,0.74*this.h);
	  	this.body.left3.rotate(-25);
	  	this.body.left3.rect(0,0,0.06*this.w,0.29*this.h,2);
	  	this.body.left3.pop();
		this.body.left3.push();
		this.body.left3.translate(0.58*this.w,0.70*this.h);
	  	this.body.left3.rotate(20);
	  	this.body.left3.rect(0,0,0.06*this.w,0.29*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.push();
		this.body.left3.translate(0.65*this.w,0.74*this.h);
	  	this.body.left3.rotate(-15);
	  	this.body.left3.rect(0,0,0.05*this.w,0.27*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.stroke(255,255,255);
	  	this.body.left3.rect(0.64*this.w,0.08*this.h,0.12*this.w,0.15*this.h,2);
	  	this.body.left3.noStroke();
	  	this.body.left3.rect(0.64*this.w,0.10*this.h,0.06*this.w,0.25*this.h,2);
	  	this.body.left3.stroke(255,255,255);
	  	this.body.left3.strokeWeight(4);
	  	this.body.left3.point(0.88*this.w,0.17*this.h);
	  	this.body.left3.noStroke();
	  	this.body.left3.fill(255,255,255);
	  	this.body.left3.rect(0.98*this.w,0.24*this.h,0.01*this.w,0.02*this.h,1);
	  	this.body.left3.fill(255,255,255);
	  	this.body.left3.rect(0.93*this.w,0.37*this.h,0.06*this.w,0.02*this.h,1);
	  	
	  	this.body.leftJ = this.body.left1;
	  	
	  	this.body.right1.push();
	  	this.body.right1.translate(this.w/2,0);
	  	this.body.right1.scale(-1,1);
	  	this.body.right1.translate(-this.w/2,0);
	  	this.body.right1.copy(this.body.left1,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.right1.pop();
	  	
	  	this.body.right2.push();
	  	this.body.right2.translate(this.w/2,0);
	  	this.body.right2.scale(-1,1);
	  	this.body.right2.translate(-this.w/2,0);
	  	this.body.right2.copy(this.body.left2,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.right2.pop();
	  	
	  	this.body.right3.push();
	  	this.body.right3.translate(this.w/2,0);
	  	this.body.right3.scale(-1,1);
	  	this.body.right3.translate(-this.w/2,0);
	  	this.body.right3.copy(this.body.left3,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.right3.pop();
	  	
	  	this.body.rightJ.push();
	  	this.body.rightJ.translate(this.w/2,0);
	  	this.body.rightJ.scale(-1,1);
	  	this.body.rightJ.translate(-this.w/2,0);
	  	this.body.rightJ.copy(this.body.leftJ,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.rightJ.pop();
	}
}


class Cloud {
	constructor (x,y,w,h,vx,vy,col,n){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.vx = vx;
		this.vy = vy;
		this.col = col;
		this.n = n;
		
		this.graphic = createGraphics(2*this.w+1.1*this.w,2*this.h+0.6*this.w);
		
		let fluffX;
		let fluffY;
		this.graphic.noStroke();
		this.graphic.rectMode(CENTER);
		for (var i=0; i<n; i+=1){
			fluffX = random(-this.w,this.w);
			fluffY = random(-this.h,this.h);
			while ((fluffX*fluffX)/(this.w*this.w)+(fluffY*fluffY)/(this.h*this.h)>1){
				fluffX = random(-this.w,this.w);
				fluffY = random(-this.h,this.h);
			}
			this.graphic.fill(this.col);
			this.graphic.rect(fluffX+this.w+1.1/2*this.w,fluffY+this.h+0.6/2*this.w,random(0.6*this.w,1.1*this.w),random(0.6*this.h,1.1*this.h),10);
		}
	}
	
	draw(){
		imageMode(CENTER);
		image(this.graphic,this.x,this.y);
	}
	
	update(){
		this.x += this.vx;
		this.y += this.vy;
				
		if (this.x - this.w - 1.1/2*this.w>W){
			this.vy = -this.vy;
			this.x = -this.w- 1.1/2*this.w;
		}
	}
}