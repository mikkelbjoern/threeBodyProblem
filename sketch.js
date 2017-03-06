function setup() {
  var canvas = createCanvas(2000,1000);
  canvas.parent('canvasDiv');
}

function draw() {
  background(0);

  fill(color('white'));
  ellipse(bB.s.x, bB.s.y, (bB.m/3.14)**0.5, (bB.m/3)**0.5);
  ellipse(bA.s.x, b1.s.y, (bA.m/3.14)**0.5, (bA.m/3)**0.5);
  ellipse(bC.s.x, b3.s.y, (bC.m/3.14)**0.5, (bC.m/3)**0.5);

  fill(color('red'));
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

let b1 = new Body(new p5.Vector(1000,500), new p5.Vector(0,0), new p5.Vector(0,0), 40000)
let b2 = new Body(new p5.Vector(1000,700), new p5.Vector(40,0), new p5.Vector(0,0), 300+0)
let b3 = new Body(new p5.Vector(1000,300), new p5.Vector(-40,0), new p5.Vector(0,0), 300+0)

let bA = new Body(new p5.Vector(1000,500+0.0000001), new p5.Vector(0,0), new p5.Vector(0,0), 40000)
let bB = new Body(new p5.Vector(1000,700), new p5.Vector(40,0), new p5.Vector(0,0), 300+0)
let bC = new Body(new p5.Vector(1000,300), new p5.Vector(-40,0), new p5.Vector(0,0), 300+0)

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

  bA.nullForce();
  bB.nullForce();
  bC.nullForce();

  bA.addForce(bB);
  bA.addForce(bC);
  bB.addForce(bA);
  bB.addForce(bC);
  bC.addForce(bA);
  bC.addForce(bB);

  bA.move();
  bB.move();
  bC.move();


}
