function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(0);
  ellipse(s2.x, s2.y, (m2/3)**0.5, (m2/3)**0.5);
  ellipse(s1.x, s1.y, (m1/3)**0.5, (m1/3)**0.5);

}

let Gk = 6.62

let s1 = new p5.Vector(500,600);
let v1 = new p5.Vector(-6,0);
let a1 = new p5.Vector(0,0);
let m1 = 300

let s2 = new p5.Vector(500,500);
let v2 = new p5.Vector(0,0);
let a2 = new p5.Vector(0,0);
let m2 = 500


var loo = setInterval(loo, 50);



function loo(){
  a1.x = m2*Gk*(s2.x - s1.x)/Math.abs(((s1.dist(s2))**3))
  a1.y = m2*Gk*(s2.y - s1.y)/Math.abs(((s1.dist(s2))**3))
  console.log(v1);
  v1 = v1.add(a1);
  s1 = s1.add(v1);

  //a2 = 0;
  //console.log(a2);
  v2 = v2.add(a2);
  s2 = s2.add(v2);
}
