function setup() {
  createCanvas(2000,1000);
}

function draw() {
  background(0);
  ellipse(b2.s.x, b2.s.y, (b2.m/3.14)**0.5, (b2.m/3)**0.5);
  ellipse(b1.s.x, b1.s.y, (b1.m/3.14)**0.5, (b1.m/3)**0.5);
  ellipse(b3.s.x, b3.s.y, (b3.m/3.14)**0.5, (b3.m/3)**0.5);

}

function Body(s,v,a,m) {
  this.s = s
  this.v = v
  this.a = a
  this.m = m

  this.nullForce = function(){
    this.a = new p5.Vector(0,0);
  }
  this.addForce = function(body) {
    this.a.x += body.m*Gk*(body.s.x - this.s.x)/Math.abs(((this.s.dist(body.s)+0.1)**3));
    this.a.y += body.m*Gk*(body.s.y - this.s.y)/Math.abs(((this.s.dist(body.s)+0.1)**3));
  }

  this.move = function() {
    this.v.add(this.a)
    this.s.add(this.v)
  }
}

let Gk = 6.62

let s1 = new p5.Vector(1000,950);
let v1 = new p5.Vector(50,0);
let a1 = new p5.Vector(0,0);
let m1 = 500

let s2 = new p5.Vector(1000,500);
let v2 = new p5.Vector(0,0);
let a2 = new p5.Vector(0,0);
let m2 = 200000

let s3 = new p5.Vector(1000,50);
let v3 = new p5.Vector(-50,0);
let a3 = new p5.Vector(0,0);
let m3 = 500

let b1 = new Body(s1, v1, a1, m1)
let b2 = new Body(s2, v2, a2, m2)
let b3 = new Body(s3, v3, a3, m3)


var loo = setInterval(loo, 50);



function loo(){
  b1.nullForce();
  b2.nullForce();
  b3.nullForce();

  b1.addForce(b2);
  b1.addForce(b3);
  b2.addForce(b1);
  b2.addForce(b3);
  b3.addForce(b1);
  b3.addForce(b2);

  b1.move();
  b2.move();
  b3.move();


}
