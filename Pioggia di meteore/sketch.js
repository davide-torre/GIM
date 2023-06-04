let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    objects.push(new Star());
  }
}
//DAVIDE TORRE CV1
function draw() {
  background(0);
  for (let i = objects.length - 1; i >= 0; i--) {
    let obj = objects[i];
    obj.update();
    obj.show();
    if (obj instanceof Star && obj.r >= 16) {
      objects.splice(i, 1);
      objects.push(new ExplodingStar(obj.sx, obj.sy));
      if (objects.length > 200) {
        objects.splice(0, 1);
      }
    }
    if (obj instanceof ExplodingStar && obj.particles.length == 0) {
      objects.splice(i, 1);
    }
  }
}
//DAVIDE TORRE CV1
class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z = this.z - 10;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.r = map(this.z, 0, width, 16, 0);
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.sx, this.sy, this.r, this.r);

    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, this.sx, this.sy);
  }
}

class ExplodingStar {
  constructor(x, y) {
    this.particles = [];
    for (let i = 0; i < 100; i++) {
      let p = createVector(x, y);
      let v = p5.Vector.random2D().mult(random(2, 5));
      let c = color(random(100, 255), random(100, 255), random(100, 255));
      this.particles.push({p: p, v: v, life: 255, c: c});
    }
  }
//DAVIDE TORRE CV1
  update() {
    for (let particle of this.particles) {
      particle.p.add(particle.v);
      particle.v.mult(0.95); // Slow down particles over time
      particle.life -= 2; // Particle life decreases more slowly
    }
    this.particles = this.particles.filter(p => p.life > 0);
  }

  show() {
    for (let particle of this.particles) {
      stroke(particle.c, particle.life);
      point(particle.p.x, particle.p.y);
    }
  }
}
