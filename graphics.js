

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
		this.body.left1.rect(0.30*this.w,0.40*this.h,0.38*this.w,0.25*this.h,2);
		this.body.left1.rect(0.30*this.w,0.29*this.h,0.32*this.w,0.25*this.h,4);
		this.body.left1.push();
		this.body.left1.translate(0.15*this.w,0.40*this.h);
	  	this.body.left1.rotate(5);
	  	this.body.left1.rect(0,0,0.12*this.w,0.10*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.push();
		this.body.left1.translate(0.10*this.w,0.33*this.h);
	  	this.body.left1.rotate(25);
	  	this.body.left1.rect(0,0,0.08*this.w,0.10*this.h,2);
	  	this.body.left1.pop();
		this.body.left1.push();
		this.body.left1.translate(0.30*this.w,0.70*this.h);
	  	this.body.left1.rotate(30);
	  	this.body.left1.rect(0,0,0.06*this.w,0.29*this.h,2);
	  	this.body.left1.pop();
	  	this.body.left1.push();
		this.body.left1.translate(0.37*this.w,0.74*this.h);
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
		this.body.left2.rect(0.30*this.w,0.40*this.h,0.38*this.w,0.25*this.h,2);
		this.body.left2.rect(0.30*this.w,0.29*this.h,0.32*this.w,0.25*this.h,4);
		this.body.left2.push();
		this.body.left2.translate(0.15*this.w,0.40*this.h);
	  	this.body.left2.rotate(10);
	  	this.body.left2.rect(0,0,0.12*this.w,0.10*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.push();
		this.body.left2.translate(0.12*this.w,0.31*this.h);
	  	this.body.left2.rotate(45);
	  	this.body.left2.rect(0,0,0.08*this.w,0.10*this.h,2);
	  	this.body.left2.pop();
		this.body.left2.push();
		this.body.left2.translate(0.30*this.w,0.70*this.h);
	  	this.body.left2.rotate(5);
	  	this.body.left2.rect(0,0,0.06*this.w,0.29*this.h,2);
	  	this.body.left2.pop();
	  	this.body.left2.push();
		this.body.left2.translate(0.37*this.w,0.74*this.h);
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
		this.body.left3.rect(0.30*this.w,0.40*this.h,0.38*this.w,0.25*this.h,2);
		this.body.left3.rect(0.30*this.w,0.29*this.h,0.32*this.w,0.25*this.h,4);
		this.body.left3.push();
		this.body.left3.translate(0.15*this.w,0.40*this.h);
	  	this.body.left3.rotate(2);
	  	this.body.left3.rect(0,0,0.12*this.w,0.10*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.push();
		this.body.left3.translate(0.09*this.w,0.34*this.h);
	  	this.body.left3.rotate(20);
	  	this.body.left3.rect(0,0,0.08*this.w,0.10*this.h,2);
	  	this.body.left3.pop();
		this.body.left3.push();
		this.body.left3.translate(0.30*this.w,0.70*this.h);
	  	this.body.left3.rotate(20);
	  	this.body.left3.rect(0,0,0.05*this.w,0.27*this.h,2);
	  	this.body.left3.pop();
	  	this.body.left3.push();
		this.body.left3.translate(0.37*this.w,0.74*this.h);
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

class Sheep {
	constructor (w, h, colour1, colour2){
		this.w = w;
		this.h = h;
		this.col = colour1;
		this.col2 = colour2;
		this.type = 'Sheep';
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
		
		
		this.body.left1.fill(this.col2);
		this.body.left1.stroke(this.col);
		this.body.left1.rect(0.30*this.w,0.70*this.h,0.05*this.w,0.30*this.h,2);
		this.body.left1.rect(0.34*this.w,0.70*this.h,0.05*this.w,0.30*this.h,2);
		this.body.left1.rect(0.60*this.w,0.70*this.h,0.05*this.w,0.30*this.h,2);
		this.body.left1.rect(0.64*this.w,0.70*this.h,0.05*this.w,0.30*this.h,2);
		this.body.left1.noStroke();
		this.body.left1.fill(this.col);
		this.body.left1.rect(0.20*this.w,0.20*this.h,0.60*this.w,0.60*this.h,5);
		this.body.left1.rect(0.13*this.w,0.30*this.h,0.10*this.w,0.12*this.h,5);
		this.body.left1.rect(0.13*this.w,0.30*this.h,0.05*this.w,0.32*this.h,5);
		this.body.left1.fill(this.col2);
		this.body.left1.rect(0.66*this.w,0.10*this.h,0.25*this.w,0.40*this.h,2);
		this.body.left1.stroke(this.col);
		this.body.left1.rect(0.68*this.w,0.14*this.h,0.06*this.w,0.12*this.h,2);
	  	this.body.left1.stroke(this.col);
	  	this.body.left1.strokeWeight(4);
	  	this.body.left1.point(0.85*this.w,0.27*this.h);
	  	
	  	this.body.front = this.body.left1;
	  	this.body.left2 = this.body.left1;
	  	this.body.left3 = this.body.left1;
	  	this.body.leftJ = this.body.left1;
	  	
	  	this.body.right1.push();
	  	this.body.right1.translate(this.w/2,0);
	  	this.body.right1.scale(-1,1);
	  	this.body.right1.translate(-this.w/2,0);
	  	this.body.right1.copy(this.body.left1,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.body.right1.pop();
	  	
	  	this.body.right2 = this.body.right1;
	  	this.body.right3 = this.body.right1;
	  	this.body.rightJ = this.body.right1;
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
/*
		if (toby.vx<0){
			this.x -= this.vx;
		} else {
			this.x += this.vx;
		}
*/
		this.x += this.vx;
		this.y += this.vy;
				
		if (this.x - this.w - 1.1/2*this.w>W){
			this.vy = -this.vy;
			this.x = -this.w- 1.1/2*this.w;
		}
		if (this.x + this.w + 1.1/2*this.w<0){
			this.vy = -this.vy;
			this.x = W+this.w+1.1/2*this.w;
		}
	}
}

class Flag {
	constructor (x,y,country){
		this.x = x;
		this.y = y;
		
		this.graphic = createGraphics(3*squareSize,3*squareSize);
		this.graphic.noStroke();
		if (country==='e'){
			this.graphic.fill(242, 242, 242);
			this.graphic.rect(0,0,squareSize,squareSize);
			this.graphic.rect(2*squareSize,0,squareSize,squareSize);
			this.graphic.rect(0,2*squareSize,squareSize,squareSize);
			this.graphic.rect(2*squareSize,2*squareSize,squareSize,squareSize);
			this.graphic.fill(219, 113, 92);
			this.graphic.rect(squareSize,0,squareSize,3*squareSize);
			this.graphic.rect(0,squareSize,3*squareSize,squareSize);
		} else if (country==='f'){
			this.graphic.fill(79, 147, 219);
			this.graphic.rect(0,0,squareSize,3*squareSize);
			this.graphic.fill(242, 242, 242);
			this.graphic.rect(squareSize,0,squareSize,3*squareSize);
			this.graphic.fill(219, 113, 92);
			this.graphic.rect(2*squareSize,0,squareSize,3*squareSize);
		}
	}
	
	draw(){
		imageMode(CENTER);
		image(this.graphic,this.x-sideX-3*squareSize/2,this.y+3*squareSize/2);
	}
}


class Boat {
	constructor (x,y,w,h,start,stop){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.start = start;
		this.stop = stop;
		
		this.graphicBoat = createGraphics(this.w,this.h);
		
		this.graphicBoat.noStroke();
		this.graphicBoat.fill(110, 81, 47);
		this.graphicBoat.rect(0,this.h/2,this.w,this.h/2,2);
		this.graphicBoat.rect(0,0,this.w/5,this.h,2);
		this.graphicBoat.rect(4*this.w/5,0,this.w/5,this.h,2);
	}
	
	draw(){
		imageMode(CENTER);
		image(this.graphicBoat,this.x-sideX+this.w/2,this.y);
		stroke(0,0,0);
		line(this.x+this.w-sideX,this.y-this.h/4,this.stop-sideX,this.y-this.h/4);
		noStroke();
		fill(110, 81, 47);
		rect(this.stop-sideX,this.y-this.h,10,this.h);
	}
	
	update(){
		if (toby.x>this.start+this.w/2 && toby.x<this.stop-this.w/2){
			this.x = toby.x-this.w/2;
		}
	}
}

class Treetop {
	constructor (x,y,w,h,start,stop){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		
		this.graphic = createGraphics(this.w,this.h);
		this.graphic.noStroke();
		this.graphic.rectMode(CENTER);
		this.graphic.fill(94, 133, 104,220);
		this.graphic.rect(this.w/2,this.h/2,this.w/2,this.h/2,5);
		for (var i=0; i<10; i+=1){
			this.graphic.rect(random(this.w/4,3*this.w/4),random(this.h/4,3*this.h/4),random(2*this.w/5,this.w/2),random(2*this.h/5,this.h/2),5);
		}
	}
	
	draw(){
		imageMode(CENTER);
		image(this.graphic,this.x-sideX,this.y);
	}
}

class Notice {
	constructor (x,y,w,h,title,content1,content2){
		this.x = x;
		this.finalY = y;
		this.w = w;
		this.h = h;
		this.y = -h;
		
		this.graphic = createGraphics(this.w,this.h);
		this.graphic.stroke(163, 147, 139);
// 		this.graphic.line(this.w/4,0,this.w/4,this.h/2);
// 		this.graphic.line(3*this.w/4,0,3*this.w/4,this.h/2);
		this.graphic.rectMode(CORNER);
		this.graphic.fill(250, 249, 240);
		this.graphic.rect(1,1,this.w-2,this.h-2,2);
		this.graphic.fill(77, 69, 65);
		this.graphic.noStroke();
		this.graphic.textAlign(CENTER,CENTER);
		this.graphic.textFont('Inconsolata', 18);
		if (content2){
			this.graphic.text(title,this.w/2,9*this.h/32);
			this.graphic.textSize(13);
			this.graphic.text(content1,this.w/2,18*this.h/32);
			this.graphic.text(content2,this.w/2,23*this.h/32);
		} else if (content1){
			this.graphic.text(title,this.w/2,11*this.h/32);
			this.graphic.textSize(13);
			this.graphic.text(content1,this.w/2,21*this.h/32);
		} else {
			this.graphic.text(title,this.w/2,this.h/2);
		}
	}
	
	draw(){
		imageMode(CENTER);
		image(this.graphic,this.x-sideX,this.y);
		stroke(163, 147, 139);
		line(this.x-sideX-this.w/4,0,this.x-sideX-this.w/4,this.y-this.h/2);
		line(this.x-sideX+this.w/4,0,this.x-sideX+this.w/4,this.y-this.h/2);
	}
	
	move(){
		if (toby.x>this.x-4*squareSize && this.y<this.finalY){
			this.y+=squareSize/2;
		}
	}
}

class Letter {
	constructor (x,y,ey,w,h,title,content1,content2){
		this.x = x;
		this.finalY = y;
		this.ey = ey;
		this.w = w;
		this.h = h;
		this.y = ey;
		this.t = 0;
		
		this.letter = createGraphics(this.w,this.h);
		this.letter.stroke(163, 147, 139);
// 		this.letter.line(this.w/4,0,this.w/4,this.h/2);
// 		this.letter.line(3*this.w/4,0,3*this.w/4,this.h/2);
		this.letter.rectMode(CORNER);
		this.letter.fill(250, 249, 240);
		this.letter.rect(1,1,this.w-2,this.h-2,2);
		this.letter.stroke(252, 186, 3);
		this.letter.fill(252, 186, 3, 150);
		this.letter.beginShape();
		for (var i=0; i<10; i+=1){
			this.letter.vertex(0.4*(2-(i%2))*squareSize*cos(i/10 * 360) + this.w * 33/40, 0.4*(2-(i%2))*squareSize*sin(i/10 * 360) + this.h * 29/40);
		}
		this.letter.endShape();
		this.letter.fill(77, 69, 65);
		this.letter.textAlign(CENTER,CENTER);
		this.letter.textFont('Inconsolata', 18);
		if (content2){
			this.letter.text(title,this.w/2,9*this.h/32);
			this.letter.textSize(13);
			this.letter.noStroke();
			this.letter.text(content1,this.w/2,18*this.h/32);
			this.letter.text(content2,this.w/2,23*this.h/32);
		} else if (content1){
			this.letter.text(title,this.w/2,11*this.h/32);
			this.letter.textSize(13);
			this.letter.noStroke();
			this.letter.text(content1,this.w/2,21*this.h/32);
		} else {
			this.letter.text(title,this.w/2,this.h/2);
		}
		
		this.behind = createGraphics(1.2*this.w,1.2*this.h);
		this.behind.fill(240);
		this.behind.stroke(150);
		this.behind.rect(0,0,1.2*this.w-1,1.2*this.h-1);
		
		let Aflap = atan((0.7*this.h)/(0.5*this.w));
		this.flapHeight = 2*(0.7*this.h+0.2*this.w/cos(90-Aflap));
		this.flapO = createGraphics(1.2*this.w,this.flapHeight);
		this.flapO.angleMode(DEGREES);
		this.flapO.fill(250);
		this.flapO.stroke(150);
		this.flapO.beginShape();
		this.flapO.vertex(0,(0.7*this.h+0.2*this.w/cos(90-Aflap)));
		this.flapO.vertex(0.5*this.w,0.7*this.h + this.flapHeight/2);
		this.flapO.vertex(0.7*this.w,0.7*this.h + this.flapHeight/2);
		this.flapO.vertex(1.2*this.w,0*this.h + this.flapHeight/2);
		this.flapO.endShape();
		this.flapO.arc(0.6*this.w,0.7*this.h-0.1*this.w*tan(90-Aflap) + this.flapHeight/2,0.2*this.w/cos(90-Aflap),0.2*this.w/cos(90-Aflap),90-Aflap,90+Aflap);
		
		this.flapU = createGraphics(1.2*this.w,this.flapHeight);
		this.flapU.angleMode(DEGREES);
		this.flapU.fill(240);
		this.flapU.stroke(150);
		this.flapU.beginShape();
		this.flapU.vertex(0,(0.7*this.h+0.2*this.w/cos(90-Aflap)));
		this.flapU.vertex(0.5*this.w,0.7*this.h + this.flapHeight/2);
		this.flapU.vertex(0.7*this.w,0.7*this.h + this.flapHeight/2);
		this.flapU.vertex(1.2*this.w,0*this.h + this.flapHeight/2);
		this.flapU.endShape();
		this.flapU.arc(0.6*this.w,0.7*this.h-0.1*this.w*tan(90-Aflap) + this.flapHeight/2,0.2*this.w/cos(90-Aflap),0.2*this.w/cos(90-Aflap),90-Aflap,90+Aflap);

		this.front = createGraphics(1.2*this.w,1.2*this.h);
		this.front.angleMode(DEGREES);
		this.front.fill(250);
		this.front.stroke(150);
		this.front.triangle(0,0,0,1.2*this.h,1.2*this.w/2,1.2*this.h/2);
		this.front.triangle(1.2*this.w,0,1.2*this.w,1.2*this.h,1.2*this.w/2,1.2*this.h/2);
		this.front.beginShape();
		this.front.vertex(0,1.2*this.h);
		this.front.vertex(0.5*this.w,0.5*this.h);
		this.front.vertex(0.7*this.w,0.5*this.h);
		this.front.vertex(1.2*this.w,1.2*this.h);
		this.front.endShape();
		let Afront = atan((0.7*this.h)/(0.5*this.w));
		this.front.arc(0.6*this.w,0.5*this.h+0.1*this.w*tan(90-Afront),0.2*this.w/cos(90-Afront),0.2*this.w/cos(90-Afront),270-Afront,270+Afront);

	}
	
	draw(){
		imageMode(CENTER);
		image(this.behind,this.x-sideX,this.ey);
		if (this.t >= 0.5){
			push();
			translate(this.x-sideX,this.ey-this.flapHeight/4);
			scale(1,-1);
			image(this.flapU,0,0);
			pop();
		}
		push();
		translate(this.x-sideX,this.y);
		if (this.t >= 0.5){
			rotate(-3+360*(this.t-0.5)*2);
		} else {
			rotate(-3);
		}
		image(this.letter,0,0);
		pop();
		image(this.front,this.x-sideX,this.ey);
		if (this.t<0.5){
			push();
			translate(this.x-sideX,this.ey-this.flapHeight/4);
			scale(1,cos(2*180*this.t));
			if (this.t<0.25){
				image(this.flapO,0,0);
			} else {
				image(this.flapU,0,0);
			}
			pop();
		}
	}
	
	move(){
		if (toby.x>this.x-4*squareSize && this.t<1){
			this.t += 0.02;
			if (this.t>0.5){
				this.y = this.ey - sin(90*2*(this.t-0.5)) * (this.ey-this.finalY);
			}
		}
	}
}

class Writing {
	constructor (x,y,w,h,title,items,col){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		if (col){
			this.col = col;
		} else {
			this.col = color(77, 69, 65);
		}
		
		this.graphic = createGraphics(this.w,this.h);
		this.graphic.fill(this.col);
		this.graphic.noStroke();
		this.graphic.textAlign(CENTER,CENTER);
		this.graphic.textFont('Inconsolata', 20);

		this.graphic.text(title,this.w/2,this.h/4);
		this.graphic.textSize(14);
		this.graphic.textAlign(LEFT);
		for (var i=0; i<items.length; i+=1){
			this.graphic.text(items[i],this.w/4,this.h/2+(this.h/2 + 5)*i/items.length);
		}
	}
	
	draw(){
		imageMode(CORNER);
		image(this.graphic,this.x-sideX,this.y);
		imageMode(CENTER);
	}
}

class Typing {
	constructor (x,y,w,h,words,fontSize,col){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.col = col;
		this.words = words;
		this.orginalWord = createGraphics(this.w,this.h);
		if (fontSize){
			this.orginalWord.textFont('Inconsolata', fontSize);
		} else {
			this.orginalWord.textFont('Inconsolata', 20);
		}
		this.leftStart = this.w/2-this.orginalWord.textWidth(words)/2;
		this.wordsLength = words.length;
		this.graphic = [];
		
		for (var i=0; i<this.wordsLength; i+=1){
			this.graphic.push(createGraphics(this.w,this.h));
			this.graphic[i].fill(this.col);
			this.graphic[i].noStroke();
			this.graphic[i].textAlign(LEFT,CENTER);
			if (fontSize){
				this.graphic[i].textFont('Inconsolata', fontSize);
			} else {
				this.graphic[i].textFont('Inconsolata', 20);
			}
			this.graphic[i].text(words.slice(0,i+1),this.leftStart,this.h/2);
			this.graphic[i].rightEnd = this.x+this.leftStart+this.graphic[i].textWidth(words.slice(0,i+1));
		}
		
	}
	
	draw(){
		imageMode(CORNER);
		rectMode(CENTER);
		for (var j=this.wordsLength-1; j>0; j-=1){
			if (toby.x-squareSize/2>this.graphic[j].rightEnd){
				image(this.graphic[j],this.x-sideX,this.y);
				if (round(2*millis()/1000)%2){
					noStroke();
					fill(this.col);
					rect(this.graphic[j].rightEnd+20-sideX,this.y+this.h/2,10,30);
				}
				break;
			}
		}
		imageMode(CENTER);
	}
}

class Milestone {
	constructor (x,y,words,fontSize,col1,col2){
		this.x = x;
		this.y = y;
		this.w = 2*squareSize;
		this.h = 3*squareSize;
		this.graphic = createGraphics(this.w,this.h);
		this.graphic.angleMode(DEGREES);
		this.graphic.noStroke();
		this.graphic.fill(col1);
		this.graphic.rect(0,this.h/2,this.w,this.h/2);
		this.graphic.arc(this.w/2,this.h/2,this.w,this.h,180,360);
		this.graphic.textAlign(CENTER,CENTER);
		this.graphic.fill(col2);
		this.graphic.textFont('Inconsolata', fontSize);
		this.graphic.text(words,this.w/2,4*this.h/10);
		this.graphic.textSize(round(3*fontSize/4))
		this.graphic.text("yrs",this.w/2,29*this.h/40);
		this.graphic.fill(120, 176, 121,100);
		this.graphic.rect(0,ground-this.y+this.h/2,this.w,this.h/2-ground+this.y);
	}
	
	draw(){
		image(this.graphic,this.x-sideX,this.y);
	}
}


class SpecialCloud {
	constructor (x,y,h,words,fontSize,col1,col2){
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = h*(5+4*sqrt(2))/6;
		this.graphic = createGraphics(this.w,this.h);
		this.graphic.angleMode(DEGREES);
		this.graphic.noStroke();
		this.graphic.fill(col1);
		this.graphic.stroke(col2);
		this.graphic.arc(2/6*this.h+1,4/6*this.h,4*this.h/6,4*this.h/6,90,270);
		this.graphic.arc((2+2*sqrt(2))/6*this.h,3/6*this.h+1,this.h,this.h,187,360);
		this.graphic.noStroke();
		this.graphic.rect(2/6*this.h,4*this.h/6,(2+4*sqrt(2))/6*this.h,2*this.h/6);
		this.graphic.rect(2/6*this.h,2/6*this.h,(4*sqrt(2))/6*this.h,2*this.h/6);
		this.graphic.stroke(col2);
		this.graphic.arc((4+4*sqrt(2))/6*this.h-1,5/6*this.h,2*this.h/6,2*this.h/6,-90,90);
		this.graphic.arc((2+4*sqrt(2))/6*this.h,4/6*this.h,4*this.h/6,4*this.h/6,270,370);
		this.graphic.line(2/6*this.h,this.h-2,(4+4*sqrt(2))/6*this.h,this.h-2);
		this.graphic.noFill();
		this.graphic.arc((2+2*sqrt(2))/6*this.h,3/6*this.h+1,this.h+20,this.h+20,207,218);
		this.graphic.arc((2+2*sqrt(2))/6*this.h,3/6*this.h+1,this.h+33,this.h+33,206,219);
		this.graphic.arc((2+2*sqrt(2))/6*this.h,3/6*this.h+1,this.h+46,this.h+46,205,220);
		this.graphic.arc((2+4*sqrt(2))/6*this.h,4/6*this.h,4*this.h/6+20,4*this.h/6+20,305,320);
		this.graphic.arc((2+4*sqrt(2))/6*this.h,4/6*this.h,4*this.h/6+33,4*this.h/6+33,304,321);
		this.graphic.arc((2+4*sqrt(2))/6*this.h,4/6*this.h,4*this.h/6+46,4*this.h/6+46,303,322);
		this.graphic.arc(2/6*this.h+1,4/6*this.h,4*this.h/6+20,4*this.h/6+20,130,145);
		this.graphic.arc(2/6*this.h+1,4/6*this.h,4*this.h/6+33,4*this.h/6+33,129,146);
		this.graphic.arc(2/6*this.h+1,4/6*this.h,4*this.h/6+46,4*this.h/6+46,128,147);
		
		
		
		this.graphic.textAlign(CENTER,CENTER);
		this.graphic.fill(col2);
		this.graphic.noStroke();
		this.graphic.textFont('Inconsolata',17);
		this.graphic.text("University\nof Bristol",73*this.w/160,13*this.h/40);
		this.graphic.textSize(fontSize);
		this.graphic.text(words,75*this.w/160,57*this.h/80);
		
		
/*
		this.graphic.stroke(col2);
		this.graphic.line(0,0,this.w-1,0);
		this.graphic.line(0,this.h-1,this.w-1,this.h-1);
		this.graphic.line(this.w-1,0,this.w-1,this.h-1);
		this.graphic.line(0,0,0,this.h-1);
*/
/*
		this.graphic = createGraphics(this.w+1.1*this.w,this.h+0.6*this.w);
		this.graphic.stroke(col2);
		this.graphic.line(0,0,2*this.w+1.1*this.w-1,0);
		this.graphic.line(0,this.h+0.6*this.w-1,this.w+1.1*this.w-1,this.h+0.6*this.w-1);
		this.graphic.line(this.w+1.1*this.w-1,0,this.w+1.1*this.w-1,this.h+0.6*this.w-1);
		this.graphic.line(0,0,0,this.h+0.6*this.w-1);
		let fluffX;
		let fluffY;
		this.graphic.noStroke();
		this.graphic.rectMode(CENTER);
		for (var i=0; i<10; i+=1){
			fluffX = random(-this.w/2,this.w/2);
			fluffY = random(-this.h/2,this.h/2);
			while ((fluffX*fluffX)/(this.w*this.w)+(fluffY*fluffY)/(this.h*this.h)>1){
				fluffX = random(-this.w,this.w);
				fluffY = random(-this.h,this.h);
			}
			this.graphic.fill(240,240,240,200);
// 			this.graphic.stroke(0,0,0,150);
			this.graphic.rect(fluffX+this.w/2+1.1/2*this.w,fluffY+this.h/2+0.6/2*this.w,random(0.6*this.w,1.1*this.w),random(0.6*this.h,1.1*this.h),10);
		}
*/
	}
	
	draw(){
		image(this.graphic,this.x-sideX+10*cos(millis()/4),this.y+10*sin(millis()/3));
	}
}

class WaterDroplet {
	constructor (x,y,w,h){
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
		this.splash = false;
		this.vx = 0;
		this.vy = 0;
		this.particleY=0;
		this.particleX=0;
		this.graphic = createGraphics(squareSize/2,squareSize/2);
		this.graphic.angleMode(DEGREES);
		this.graphic.stroke(255,255,255,100);
		this.graphic.fill(71, 116, 168,200);
		this.graphic.rect(0,0,squareSize/2-1,squareSize/2-1,2);
	}
	
	draw(){
		if (toby.x>=this.x && toby.x<this.x+this.w && toby.y>=this.y && toby.y<this.y+this.h){
			if (!this.splash){
				this.vy = -random(13,20);
				this.particleY = -1;
				this.vx = random(-5,5);
				this.splash = true;
			}
		} else {
			this.splash = false;
/*
			this.particleY=0;
			this.vy = 0;
			this.particleX = toby.x;
			this.vx = 0;
*/
		}
		if (this.vy<0 || this.particleY<0){
			this.particleY += this.vy;
			this.particleX += this.vx;
			image(this.graphic,this.particleX-sideX,this.particleY+toby.y);
			this.vy += 1;
		}
		if (this.particleY>=0){
			this.particleY=0;
			this.vy = 0;
			this.particleX = toby.x;
			this.vx = 0;
		}
	}
}

class Fish {
	constructor (x,y,w,h,col){
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
		this.splash = false;
		this.vx = random(-1,1);
		while (abs(this.vx)<0.5){
			this.vx = random(-1,1);
		}
		this.vy = random(-0.3,0.3);
		this.fishX=random(3*squareSize,this.w-4*squareSize);
		this.fishY=random(3*squareSize,this.h-3*squareSize);
		
		this.fishL = createGraphics(2*squareSize,squareSize);
		this.fishR = createGraphics(2*squareSize,squareSize);
		
		this.fishL.stroke(255,255,255,100);
		this.fishL.fill(col);
		this.fishL.bezier(
			0, squareSize*88/110,
			squareSize*289/110, -squareSize*119/110,
			squareSize*289/110, squareSize*218/110,
			0, squareSize*29/110);
		this.fishL.stroke(255,255,255);
		this.fishL.fill(50,50,50);
		this.fishL.ellipse(1.65*squareSize,0.4*squareSize,0.2*squareSize,0.2*squareSize);
		
		this.fishR.push();
	  	this.fishR.translate(squareSize,0);
	  	this.fishR.scale(-1,1);
	  	this.fishR.translate(-squareSize,0);
	  	this.fishR.copy(this.fishL,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.fishR.pop();
	}
	
	draw(){
		if (this.vx>0){
			image(this.fishL,this.x+this.fishX-sideX,this.y+this.fishY);
		} else {
			image(this.fishR,this.x+this.fishX-sideX,this.y+this.fishY);
		}
	}
	
	update(){
		this.fishX += this.vx;
		if (this.fishX-3*squareSize<0){
			this.vx += 0.02;
		} else if (this.fishX+2*squareSize>this.w) {
			this.vx -= 0.02;
		}
		this.fishY += this.vy;
		if (this.fishY-1*squareSize<0){
			this.vy += 0.02;
		} else if (this.fishY+1*squareSize>this.h) {
			this.vy -= 0.02;
		}	
	}
}

class Bone {
	constructor (x,y){
		this.x = x;
		this.y = y;

		this.graphic = createGraphics(2*squareSize,2*squareSize);

// 		this.graphic.stroke(0,0,0);
		this.graphic.noStroke();
		this.graphic.fill(250,250,250);
		this.graphic.angleMode(DEGREES);
		this.graphic.translate(squareSize,squareSize);
		this.graphic.rotate(random(-30,30));
		this.graphic.rect(-0.5*squareSize,-0.15*squareSize,squareSize,0.3*squareSize,2);
		this.graphic.rect(-0.6*squareSize,-0.3*squareSize,0.25*squareSize,0.25*squareSize,2);
		this.graphic.rect(-0.6*squareSize,0.05*squareSize,0.25*squareSize,0.25*squareSize,2);
		this.graphic.rect(0.35*squareSize,-0.3*squareSize,0.25*squareSize,0.25*squareSize,2);
		this.graphic.rect(0.35*squareSize,0.05*squareSize,0.25*squareSize,0.25*squareSize,2);
	}
	draw(){
		image(this.graphic,this.x-sideX,this.y);
	}
}

class Bird {
	constructor (x,y,direction,size,timeDelay){
		this.x = x;
		this.y = y;
		this.direction = direction;
		
		this.timeDelay = timeDelay;
		this.startTime = 0;
		this.onScreen = true;
		
		this.w = size;
		this.h = size;
		
		if (this.direction==='R'){
			this.vx = 5/8 * size/squareSize;
		} else if (this.direction==='L'){
			this.vx = -5/8 * size/squareSize;
		}
		
		this.graphicL1 = createGraphics(this.w,this.h);
		this.graphicL2 = createGraphics(this.w,this.h);
		this.graphicL3 = createGraphics(this.w,this.h);
		this.graphicL4 = createGraphics(this.w,this.h);
		this.graphicR1 = createGraphics(this.w,this.h);
		this.graphicR2 = createGraphics(this.w,this.h);
		this.graphicR3 = createGraphics(this.w,this.h);
		this.graphicR4 = createGraphics(this.w,this.h);
	  	
		this.graphicL1.fill(80,200);
		this.graphicL1.noStroke();
		this.graphicL1.beginShape();
		this.graphicL1.curveVertex(this.w*0.63, this.h*0.44);
		this.graphicL1.curveVertex(this.w*0.57, this.h*0.42);
		this.graphicL1.curveVertex(this.w*0.58, this.h*0.49);
		this.graphicL1.curveVertex(this.w*0.61, this.h*0.53);
		this.graphicL1.curveVertex(this.w*0.6, this.h*0.55);
		this.graphicL1.curveVertex(this.w*0.63, this.h*0.59);
		this.graphicL1.curveVertex(this.w*0.62, this.h*0.62);
		this.graphicL1.curveVertex(this.w*0.63, this.h*0.66);
		this.graphicL1.curveVertex(this.w*0.64, this.h*0.7);
		this.graphicL1.curveVertex(this.w*0.61, this.h*0.7);
		this.graphicL1.curveVertex(this.w*0.6, this.h*0.74);
		this.graphicL1.curveVertex(this.w*0.53, this.h*0.68);
		this.graphicL1.curveVertex(this.w*0.48, this.h*0.61);
		this.graphicL1.curveVertex(this.w*0.49, this.h*0.67);
		this.graphicL1.curveVertex(this.w*0.49, this.h*0.73);
		this.graphicL1.curveVertex(this.w*0.47, this.h*0.77);
		this.graphicL1.curveVertex(this.w*0.4, this.h*0.64);
		this.graphicL1.curveVertex(this.w*0.35, this.h*0.54);
		this.graphicL1.curveVertex(this.w*0.33, this.h*0.46);
		this.graphicL1.curveVertex(this.w*0.32, this.h*0.44);
		this.graphicL1.curveVertex(this.w*0.31, this.h*0.42);
		this.graphicL1.curveVertex(this.w*0.28, this.h*0.4);
		this.graphicL1.curveVertex(this.w*0.24, this.h*0.39);
		this.graphicL1.curveVertex(this.w*0.25, this.h*0.37);
		this.graphicL1.curveVertex(this.w*0.25, this.h*0.34);
		this.graphicL1.curveVertex(this.w*0.27, this.h*0.32);
		this.graphicL1.curveVertex(this.w*0.33, this.h*0.32);
		this.graphicL1.curveVertex(this.w*0.38, this.h*0.31);
		this.graphicL1.curveVertex(this.w*0.41, this.h*0.32);
		this.graphicL1.curveVertex(this.w*0.45, this.h*0.32);
		this.graphicL1.curveVertex(this.w*0.49, this.h*0.32);
		this.graphicL1.curveVertex(this.w*0.54, this.h*0.33);
		this.graphicL1.curveVertex(this.w*0.58, this.h*0.35);
		this.graphicL1.curveVertex(this.w*0.62, this.h*0.35);
		this.graphicL1.curveVertex(this.w*0.67, this.h*0.35);
		this.graphicL1.curveVertex(this.w*0.71, this.h*0.34);
		this.graphicL1.curveVertex(this.w*0.76, this.h*0.35);
		this.graphicL1.curveVertex(this.w*0.76, this.h*0.39);
		this.graphicL1.curveVertex(this.w*0.73, this.h*0.42);
		this.graphicL1.curveVertex(this.w*0.69, this.h*0.45);
		this.graphicL1.curveVertex(this.w*0.63, this.h*0.44);
		this.graphicL1.curveVertex(this.w*0.57, this.h*0.42);
		this.graphicL1.curveVertex(this.w*0.58, this.h*0.49);
		this.graphicL1.endShape();
		this.graphicL1.stroke(255, 185, 33);
		this.graphicL1.strokeWeight(2);
		this.graphicL1.point(this.w*0.30,this.h*0.35);
		
		this.graphicL2.fill(80,200);
		this.graphicL2.noStroke();
		this.graphicL2.beginShape();
		this.graphicL2.curveVertex(this.w*0.59, this.h*0.47);
		this.graphicL2.curveVertex(this.w*0.56, this.h*0.48);
		this.graphicL2.curveVertex(this.w*0.61, this.h*0.53);
		this.graphicL2.curveVertex(this.w*0.63, this.h*0.56);
		this.graphicL2.curveVertex(this.w*0.65, this.h*0.6);
		this.graphicL2.curveVertex(this.w*0.68, this.h*0.63);
		this.graphicL2.curveVertex(this.w*0.67, this.h*0.66);
		this.graphicL2.curveVertex(this.w*0.69, this.h*0.68);
		this.graphicL2.curveVertex(this.w*0.65, this.h*0.69);
		this.graphicL2.curveVertex(this.w*0.62, this.h*0.68);
		this.graphicL2.curveVertex(this.w*0.6, this.h*0.69);
		this.graphicL2.curveVertex(this.w*0.57, this.h*0.68);
		this.graphicL2.curveVertex(this.w*0.52, this.h*0.63);
		this.graphicL2.curveVertex(this.w*0.43, this.h*0.54);
		this.graphicL2.curveVertex(this.w*0.44, this.h*0.57);
		this.graphicL2.curveVertex(this.w*0.44, this.h*0.63);
		this.graphicL2.curveVertex(this.w*0.4, this.h*0.6);
		this.graphicL2.curveVertex(this.w*0.37, this.h*0.55);
		this.graphicL2.curveVertex(this.w*0.33, this.h*0.49);
		this.graphicL2.curveVertex(this.w*0.29, this.h*0.47);
		this.graphicL2.curveVertex(this.w*0.25, this.h*0.43);
		this.graphicL2.curveVertex(this.w*0.22, this.h*0.44);
		this.graphicL2.curveVertex(this.w*0.23, this.h*0.42);
		this.graphicL2.curveVertex(this.w*0.24, this.h*0.4);
		this.graphicL2.curveVertex(this.w*0.25, this.h*0.37);
		this.graphicL2.curveVertex(this.w*0.27, this.h*0.36);
		this.graphicL2.curveVertex(this.w*0.33, this.h*0.36);
		this.graphicL2.curveVertex(this.w*0.36, this.h*0.35);
		this.graphicL2.curveVertex(this.w*0.39, this.h*0.35);
		this.graphicL2.curveVertex(this.w*0.44, this.h*0.36);
		this.graphicL2.curveVertex(this.w*0.49, this.h*0.37);
		this.graphicL2.curveVertex(this.w*0.53, this.h*0.38);
		this.graphicL2.curveVertex(this.w*0.55, this.h*0.39);
		this.graphicL2.curveVertex(this.w*0.57, this.h*0.39);
		this.graphicL2.curveVertex(this.w*0.6, this.h*0.39);
		this.graphicL2.curveVertex(this.w*0.67, this.h*0.4);
		this.graphicL2.curveVertex(this.w*0.75, this.h*0.38);
		this.graphicL2.curveVertex(this.w*0.73, this.h*0.44);
		this.graphicL2.curveVertex(this.w*0.7, this.h*0.49);
		this.graphicL2.curveVertex(this.w*0.65, this.h*0.49);
		this.graphicL2.curveVertex(this.w*0.59, this.h*0.47);
		this.graphicL2.curveVertex(this.w*0.56, this.h*0.48);
		this.graphicL2.curveVertex(this.w*0.61, this.h*0.53);
		this.graphicL2.endShape();
		this.graphicL2.stroke(255, 185, 33);
		this.graphicL2.strokeWeight(2);
		this.graphicL2.point(this.w*0.30,this.h*0.41);
		
		this.graphicL3.fill(80,200);
		this.graphicL3.noStroke();
		this.graphicL3.beginShape();
		this.graphicL3.curveVertex(this.w*0.71, this.h*0.38);
		this.graphicL3.curveVertex(this.w*0.66, this.h*0.42);
		this.graphicL3.curveVertex(this.w*0.65, this.h*0.47);
		this.graphicL3.curveVertex(this.w*0.62, this.h*0.51);
		this.graphicL3.curveVertex(this.w*0.63, this.h*0.53);
		this.graphicL3.curveVertex(this.w*0.62, this.h*0.56);
		this.graphicL3.curveVertex(this.w*0.74, this.h*0.54);
		this.graphicL3.curveVertex(this.w*0.75, this.h*0.61);
		this.graphicL3.curveVertex(this.w*0.69, this.h*0.65);
		this.graphicL3.curveVertex(this.w*0.58, this.h*0.63);
		this.graphicL3.curveVertex(this.w*0.54, this.h*0.64);
		this.graphicL3.curveVertex(this.w*0.53, this.h*0.68);
		this.graphicL3.curveVertex(this.w*0.5, this.h*0.67);
		this.graphicL3.curveVertex(this.w*0.46, this.h*0.68);
		this.graphicL3.curveVertex(this.w*0.45, this.h*0.66);
		this.graphicL3.curveVertex(this.w*0.38, this.h*0.66);
		this.graphicL3.curveVertex(this.w*0.3, this.h*0.62);
		this.graphicL3.curveVertex(this.w*0.26, this.h*0.59);
		this.graphicL3.curveVertex(this.w*0.24, this.h*0.6);
		this.graphicL3.curveVertex(this.w*0.24, this.h*0.58);
		this.graphicL3.curveVertex(this.w*0.25, this.h*0.56);
		this.graphicL3.curveVertex(this.w*0.25, this.h*0.53);
		this.graphicL3.curveVertex(this.w*0.29, this.h*0.52);
		this.graphicL3.curveVertex(this.w*0.33, this.h*0.52);
		this.graphicL3.curveVertex(this.w*0.36, this.h*0.51);
		this.graphicL3.curveVertex(this.w*0.39, this.h*0.48);
		this.graphicL3.curveVertex(this.w*0.41, this.h*0.45);
		this.graphicL3.curveVertex(this.w*0.43, this.h*0.42);
		this.graphicL3.curveVertex(this.w*0.44, this.h*0.4);
		this.graphicL3.curveVertex(this.w*0.46, this.h*0.37);
		this.graphicL3.curveVertex(this.w*0.48, this.h*0.36);
		this.graphicL3.curveVertex(this.w*0.5, this.h*0.38);
		this.graphicL3.curveVertex(this.w*0.51, this.h*0.41);
		this.graphicL3.curveVertex(this.w*0.48, this.h*0.47);
		this.graphicL3.curveVertex(this.w*0.55, this.h*0.39);
		this.graphicL3.curveVertex(this.w*0.64, this.h*0.31);
		this.graphicL3.curveVertex(this.w*0.66, this.h*0.32);
		this.graphicL3.curveVertex(this.w*0.68, this.h*0.3);
		this.graphicL3.curveVertex(this.w*0.73, this.h*0.3);
		this.graphicL3.curveVertex(this.w*0.72, this.h*0.35);
		this.graphicL3.curveVertex(this.w*0.71, this.h*0.38);
		this.graphicL3.curveVertex(this.w*0.66, this.h*0.42);
		this.graphicL3.curveVertex(this.w*0.65, this.h*0.47);
		this.graphicL3.endShape();
		this.graphicL3.stroke(255, 185, 33);
		this.graphicL3.strokeWeight(2);
		this.graphicL3.point(this.w*0.30,this.h*0.55);
		
		this.graphicL4.fill(80,200);
		this.graphicL4.noStroke();
		this.graphicL4.beginShape();
		this.graphicL4.curveVertex(this.w*0.64, this.h*0.23);
		this.graphicL4.curveVertex(this.w*0.66, this.h*0.23);
		this.graphicL4.curveVertex(this.w*0.66, this.h*0.32);
		this.graphicL4.curveVertex(this.w*0.62, this.h*0.36);
		this.graphicL4.curveVertex(this.w*0.63, this.h*0.41);
		this.graphicL4.curveVertex(this.w*0.6, this.h*0.45);
		this.graphicL4.curveVertex(this.w*0.6, this.h*0.5);
		this.graphicL4.curveVertex(this.w*0.57, this.h*0.52);
		this.graphicL4.curveVertex(this.w*0.58, this.h*0.55);
		this.graphicL4.curveVertex(this.w*0.59, this.h*0.62);
		this.graphicL4.curveVertex(this.w*0.56, this.h*0.64);
		this.graphicL4.curveVertex(this.w*0.53, this.h*0.66);
		this.graphicL4.curveVertex(this.w*0.6, this.h*0.69);
		this.graphicL4.curveVertex(this.w*0.75, this.h*0.67);
		this.graphicL4.curveVertex(this.w*0.69, this.h*0.78);
		this.graphicL4.curveVertex(this.w*0.6, this.h*0.76);
		this.graphicL4.curveVertex(this.w*0.54, this.h*0.77);
		this.graphicL4.curveVertex(this.w*0.51, this.h*0.81);
		this.graphicL4.curveVertex(this.w*0.45, this.h*0.79);
		this.graphicL4.curveVertex(this.w*0.35, this.h*0.78);
		this.graphicL4.curveVertex(this.w*0.27, this.h*0.72);
		this.graphicL4.curveVertex(this.w*0.24, this.h*0.72);
		this.graphicL4.curveVertex(this.w*0.25, this.h*0.69);
		this.graphicL4.curveVertex(this.w*0.26, this.h*0.67);
		this.graphicL4.curveVertex(this.w*0.28, this.h*0.65);
		this.graphicL4.curveVertex(this.w*0.32, this.h*0.63);
		this.graphicL4.curveVertex(this.w*0.3, this.h*0.51);
		this.graphicL4.curveVertex(this.w*0.41, this.h*0.23);
		this.graphicL4.curveVertex(this.w*0.46, this.h*0.14);
		this.graphicL4.curveVertex(this.w*0.48, this.h*0.18);
		this.graphicL4.curveVertex(this.w*0.48, this.h*0.21);
		this.graphicL4.curveVertex(this.w*0.49, this.h*0.19);
		this.graphicL4.curveVertex(this.w*0.5, this.h*0.24);
		this.graphicL4.curveVertex(this.w*0.48, this.h*0.28);
		this.graphicL4.curveVertex(this.w*0.49, this.h*0.29);
		this.graphicL4.curveVertex(this.w*0.46, this.h*0.37);
		this.graphicL4.curveVertex(this.w*0.55, this.h*0.23);
		this.graphicL4.curveVertex(this.w*0.61, this.h*0.18);
		this.graphicL4.curveVertex(this.w*0.61, this.h*0.21);
		this.graphicL4.curveVertex(this.w*0.64, this.h*0.2);
		this.graphicL4.curveVertex(this.w*0.64, this.h*0.23);
		this.graphicL4.curveVertex(this.w*0.66, this.h*0.23);
		this.graphicL4.curveVertex(this.w*0.66, this.h*0.32);
		this.graphicL4.endShape();
		this.graphicL4.stroke(255, 185, 33);
		this.graphicL4.strokeWeight(2);
		this.graphicL4.point(this.w*0.30,this.h*0.69);
		
		this.graphicR1.push();
	  	this.graphicR1.translate(this.w/2,0);
	  	this.graphicR1.scale(-1,1);
	  	this.graphicR1.translate(-this.w/2,0);
	  	this.graphicR1.copy(this.graphicL1,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.graphicR1.pop();
	  	
	  	this.graphicR2.push();
	  	this.graphicR2.translate(this.w/2,0);
	  	this.graphicR2.scale(-1,1);
	  	this.graphicR2.translate(-this.w/2,0);
	  	this.graphicR2.copy(this.graphicL2,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.graphicR2.pop();
	  	
	  	this.graphicR3.push();
	  	this.graphicR3.translate(this.w/2,0);
	  	this.graphicR3.scale(-1,1);
	  	this.graphicR3.translate(-this.w/2,0);
	  	this.graphicR3.copy(this.graphicL3,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.graphicR3.pop();
	  	
	  	this.graphicR4.push();
	  	this.graphicR4.translate(this.w/2,0);
	  	this.graphicR4.scale(-1,1);
	  	this.graphicR4.translate(-this.w/2,0);
	  	this.graphicR4.copy(this.graphicL4,0,0,this.w,this.h,0,0,this.w,this.h);
	  	this.graphicR4.pop();
	}
	draw(){
		
		if (this.direction==='R'){
			if (round(millis()/100)%6===0){
				image(this.graphicR1,this.x,this.y+0.1*this.h);
			} else if (round(millis()/100)%6===1) {
				image(this.graphicR2,this.x,this.y+0.05*this.h);
			} else if (round(millis()/100)%6===2) {
				image(this.graphicR3,this.x,this.y-0.08*this.h);
			} else if (round(millis()/100)%6===3) {
				image(this.graphicR4,this.x,this.y-0.20*this.h);
			} else if (round(millis()/100)%6===4) {
				image(this.graphicR3,this.x,this.y-0.08*this.h);
			} else if (round(millis()/100)%6===5) {
				image(this.graphicR2,this.x,this.y+0.05*this.h);
			}
			
/*
image(this.graphicR1,this.x,this.y+0.1*this.h);
image(this.graphicR2,this.x,this.y+0.05*this.h);
image(this.graphicR3,this.x,this.y-0.08*this.h);
image(this.graphicR4,this.x,this.y-0.20*this.h);
*/
		} else if (this.direction==='L'){
			if (round(millis()/100)%6===0){
				image(this.graphicL1,this.x,this.y+0.1*this.h);
			} else if (round(millis()/100)%6===1) {
				image(this.graphicL2,this.x,this.y+0.05*this.h);
			} else if (round(millis()/100)%6===2) {
				image(this.graphicL3,this.x,this.y-0.05*this.h);
			} else if (round(millis()/100)%6===3) {
				image(this.graphicL4,this.x,this.y-0.15*this.h);
			} else if (round(millis()/100)%6===4) {
				image(this.graphicL3,this.x,this.y-0.05*this.h);
			} else if (round(millis()/100)%6===5) {
				image(this.graphicL2,this.x,this.y+0.05*this.h);
			}
		}
	}
	
	update(){
		this.x += this.vx;
		if (this.x-this.w>W){
			if (this.onScreen){
				this.startTime = millis();
				this.onScreen = false;
			}
			if ((millis()-this.startTime)/1000>this.timeDelay){
				this.x = -this.w;
				this.onScreen = true;
			}
			
		}
		if (this.x+this.w<0){
			if (this.onScreen){
				this.startTime = millis();
				this.onScreen = false;
			}
			if ((millis()-this.startTime)/1000>this.timeDelay){
				this.x = W+this.w;
				this.onScreen = true;
			}
		}
	}
}



class Book {
	constructor (){
		this.wC = 28;
		this.hC = 40;
		this.bookClosed = createGraphics(this.wC,this.hC);
		this.bookClosed.fill(82, 65, 44);
		this.bookClosed.strokeWeight(1);
		this.bookClosed.stroke(232, 200, 160);
		this.bookClosed.rect(0,0,this.wC,this.hC,1);
		this.bookClosed.line(7/20 * this.wC,5/14 * this.hC,13/20 * this.wC,5/14 * this.hC);
		this.bookClosed.line(8/20 * this.wC,13/28 * this.hC,12/20 * this.wC,13/28 * this.hC);
		this.bookClosed.fill(255,0,0);
		this.bookClosed.noStroke();
		this.bookClosed.rect(14/20 * this.wC,0,3/20 * this.wC,8/28 * this.hC);
		
		this.wO = 28;
		this.hO = 50;
		this.bookOpen = createGraphics(this.wO,this.hO);
		this.bookOpen.strokeWeight(1);
		this.bookOpen.fill(232, 200, 160);
		this.bookOpen.stroke(82, 65, 44);
		this.bookOpen.beginShape();
		this.bookOpen.vertex(0,1/12 * this.hO);
		this.bookOpen.vertex(this.wO,1/24 * this.hO);
		this.bookOpen.vertex(this.wO,9/12 * this.hO);
		this.bookOpen.vertex(0,10/12 * this.hO);
		this.bookOpen.endShape();
		this.bookOpen.fill(255,0,0);
		this.bookOpen.noStroke();
		this.bookOpen.rect(13/20 * this.wO,2/28 * this.hO,2/20 * this.wO,2/28 * this.hO);
		this.bookOpen.stroke(232, 200, 160);
		this.bookOpen.fill(82, 65, 44);
		this.bookOpen.beginShape();
		this.bookOpen.vertex(0,1/12 * this.hO);
		this.bookOpen.vertex(21/24 * this.wO,2/12 * this.hO);
		this.bookOpen.vertex(21/24 * this.wO,this.hO);
		this.bookOpen.vertex(0,10/12 * this.hO);
		this.bookOpen.endShape();
		this.bookOpen.fill(255,0,0);
		this.bookOpen.noStroke();
		this.bookOpen.rect(12/20 * this.wO,5/28 * this.hO,3/20 * this.wO,5/28 * this.hO);
		this.bookOpen.strokeWeight(1);
		this.bookOpen.stroke(232, 200, 160);
		this.bookOpen.line(4/20 * this.wO,11/28 * this.hO,11/20 * this.wO,12/28 * this.hO);
		this.bookOpen.line(4/20 * this.wO,15/28 * this.hO,10/20 * this.wO,16/28 * this.hO);

		this.bookOpenReverse = createGraphics(this.wO,this.hO);
		this.bookOpenReverse.push();
	  	this.bookOpenReverse.translate(this.wO/2,0);
	  	this.bookOpenReverse.scale(-1,1);
	  	this.bookOpenReverse.translate(-this.wO/2,0);
	  	this.bookOpenReverse.copy(this.bookOpen,0,0,this.wO,this.hO,0,0,this.wO,this.hO);
	  	this.bookOpenReverse.pop();
	  	
		

/*
		this.bookOpen.line(7,10,13,10);
		this.bookOpen.line(8,13,12,13);
		this.bookOpen.fill(255,0,0);
		this.bookOpen.noStroke();
		this.bookOpen.rect(14,0,3,8);
*/
	}
	
	draw(){
		this.updatePos();
		if (toby.vx===0 || this.x === people['Father'].x+25){
			image(this.bookClosed,this.x-sideX,this.y);
		} else {
			if (toby.vx>0){
				image(this.bookOpen,this.x-sideX,this.y);
			} else {
				image(this.bookOpenReverse,this.x-sideX,this.y);
			}
		}
	}
	
	updatePos(){
		if (toby.x > people['Father'].x && toby.x<milestone[8]){//(control === 'Toby6' || control === 'Toby7') && toby.x > people['Father'].x
			if (toby.vx >= 0){
				this.x = toby.x+25;
			} else {
				this.x = toby.x-25;
			}
			this.y = people[control].y+10;
		} else {
			this.x = people['Father'].x+25;
			this.y = people['Father'].y+10;
		}
	}
}


class Coronavirus {
	constructor (x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
		this.vy = random(2,2.5);
		
		this.graphic = createGraphics(this.r+4,this.r+4);

		this.graphic.noStroke();
		this.graphic.fill(80,80,80);
		this.graphic.stroke(227, 125, 102);
		this.graphic.strokeWeight(2);
		this.graphic.ellipse((this.r+4)/2,(this.r+4)/2,9*this.r/10,9*this.r/10);
		this.graphic.strokeWeight(5);
		this.graphic.stroke(255,255,255,50);
		for (var i=0; i<100; i+=1){
			let randomRadius = pow(random(0,this.r/2),1/4)*pow(this.r/2,3/4);
			let randomAngle = random(0,360);
			this.graphic.point((this.r+4)/2 + randomRadius*cos(randomAngle), (this.r+4)/2 + randomRadius*sin(randomAngle));
		}
		this.graphic.stroke(227, 125, 102);

		for (var i=0; i<10; i+=1){
			let randomRadius = pow(random(0,this.r/2),1/3)*pow(this.r/2,2/3);
			let randomAngle = random(0,360);
			this.graphic.point((this.r+4)/2 + randomRadius*cos(randomAngle), (this.r+4)/2 + randomRadius*sin(randomAngle));
		}
		this.graphic.noStroke();
		this.graphic.fill(191,18,36);
		this.graphic.strokeWeight(1);
		this.graphic.stroke(227, 125, 102);
		for (var i=0; i<8; i+=1){
			let randomRadius = pow(random(0,this.r/2),1/2)*pow(this.r/2,1/2);
			let randomAngle = i*(360/8);
			let randomOrientation = random(0,60);
			this.graphic.beginShape();
			this.graphic.vertex((this.r+4)/2 + randomRadius*cos(randomAngle) + this.r/10 * cos(randomOrientation),(this.r+4)/2 + randomRadius*sin(randomAngle) + this.r/10 * sin(randomOrientation));
			this.graphic.vertex((this.r+4)/2 + randomRadius*cos(randomAngle) + this.r/10 * cos(randomOrientation+120),(this.r+4)/2 + randomRadius*sin(randomAngle) + this.r/10 * sin(randomOrientation+120));
			this.graphic.vertex((this.r+4)/2 + randomRadius*cos(randomAngle) + this.r/10 * cos(randomOrientation+240),(this.r+4)/2 + randomRadius*sin(randomAngle) + this.r/10 * sin(randomOrientation+240));
			this.graphic.endShape();
		}
	}
	draw(){
		push();
		translate(this.x-sideX,this.y);
		rotate(this.y);
		image(this.graphic,0,0);
		pop();
	}
	update(){
		this.y += this.vy;
		if (this.y > H+this.r){
			this.y = -this.r;
		}
	}
}

class Monitor {
	constructor(x,y,letter){
		this.x = x;
		this.y = y;
			
		this.graphic = createGraphics(14*squareSize,12*squareSize);
		this.graphic.fill(215);
		this.graphic.stroke(120);
		this.graphic.beginShape();
		this.graphic.vertex(5*squareSize,12*squareSize);
		this.graphic.vertex(9*squareSize,12*squareSize);
		this.graphic.vertex(7*squareSize,2*squareSize);
		this.graphic.vertex(5*squareSize,12*squareSize);
		this.graphic.endShape();
		this.graphic.rect(0,0,14*squareSize-1,9*squareSize,5);
		this.graphic.fill(50);
		this.graphic.rect(squareSize,squareSize,12*squareSize,7*squareSize,4)
		this.graphic.rect(1.2*squareSize,1.2*squareSize,11.6*squareSize,6.6*squareSize)
		this.graphic.strokeWeight(3);
		this.graphic.stroke(50);
		this.graphic.point(7*squareSize,0.5*squareSize);
	}
	
	draw(){
		image(this.graphic,this.x-sideX,this.y);
	}
}


class KeyboardCase {
	constructor(x,y,letter){
		this.x = x;
		this.y = y;
		
		this.graphic = createGraphics(14*squareSize,1*squareSize);
		this.graphic.fill(215);
		this.graphic.noStroke();
		this.graphic.rect(0,0,14*squareSize,1*squareSize,3);
	}
	
	draw(){
		image(this.graphic,this.x-sideX,this.y);
	}
}

class KeyboardKey {
	constructor(x,y,letter){
		this.x = x;
		this.y = y;
		this.letter = letter;
		
		this.graphic = createGraphics(2*squareSize,2*squareSize);
		this.graphic.fill(90);
		this.graphic.stroke(90);
		this.graphic.rect(0,squareSize,2*squareSize,4*squareSize/5);
		this.graphic.rect(2*squareSize/5,4*squareSize/5,6*squareSize/5,squareSize/5);
		this.graphic.arc(2*squareSize/5+1,squareSize+1,4*squareSize/5,2*squareSize/5,PI,3*PI/2);
		this.graphic.arc(8*squareSize/5-1,squareSize+1,4*squareSize/5,2*squareSize/5,3*PI/2,2*PI);
		this.graphic.fill(250);
		this.graphic.noStroke();
		this.graphic.textFont('Inconsolata', 18);
		this.graphic.textAlign(CENTER,CENTER);
		this.graphic.text(this.letter,squareSize,13*squareSize/10);
	}
	
	draw(){
		push();
		scale(1,3/4);
		image(this.graphic,this.x-sideX,4/3*this.y);
		pop();
	}
}

