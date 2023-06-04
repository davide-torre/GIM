let angles = [0, 0, 0, 0, 0, 0];
let rotationSpeeds = [4.15, 1.62, 1, 0.53, 0.084, 0.034];
let canvas2D;
let firstDraw = true;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  canvas2D = createGraphics(windowWidth, windowHeight);
  canvas2D.textSize(20);
  textSize(20);
}

function draw() {
  background(0);

  if (firstDraw) {
    canvas2D.clear();
    canvas2D.fill(255);
    canvas2D.textAlign(CENTER, CENTER);
    canvas2D.text('Clicca con il mouse per moverti nel piano', windowWidth/2, windowHeight/2);
    image(canvas2D, -windowWidth/2, -windowHeight/2);
    return;
  }

  push();
  rotateX(-PI / 6); // Initial slight tilt view from above

  if (mouseIsPressed) {
    rotateX(map(mouseY, 0, height, -PI, PI));
    rotateY(map(mouseX, 0, width, -PI, PI));
  }

  ambientLight(100);
  directionalLight(255, 255, 255, 0, -1, -1);

  push();
  fill(255, 204, 0);
  sphere(70);
  pop();

  let distances = [100, 140, 200, 350, 450, 550];
  let sizes = [15, 20, 30, 45, 50, 35];
  let colors = [
    [200, 200, 200],
    [255, 165, 0],
    [0, 0, 255],
    [255, 0, 0],
    [255, 255, 0],
    [192, 192, 192]
  ];

  for (let i = 0; i < distances.length; i++) {
    push();
    rotateY(angles[i]);
    translate(distances[i], 0, 0);
    fill(...colors[i]);
    sphere(sizes[i]);
    pop();
    
    push();
    noFill();
    stroke(255);
    rotateX(PI / 2);
    ellipse(0, 0, distances[i] * 2);
    pop();
    
    angles[i] += rotationSpeeds[i] * 0.01;
  }
  pop();

  // Draw 2D overlay
  canvas2D.clear();
  canvas2D.textSize(20);
  let names = ["Mercurio", "Venere", "Terra", "Marte", "Giove", "Saturno"];
  for (let i = 0; i < names.length; i++) {
    canvas2D.fill(colors[i]);
    canvas2D.text(names[i], 50, i * 30 + 50);
  }

  let d = new Date();
  let options = { timeZone: "Europe/Zurich", weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let clock = new Intl.DateTimeFormat('it-IT', options).format(d);
  
  let clockWidth = canvas2D.textWidth(clock);
  
  canvas2D.fill(255);
  canvas2D.textAlign(CENTER, BOTTOM);
  canvas2D.text(clock, windowWidth/2, windowHeight - 10);

  image(canvas2D, -windowWidth/2, -windowHeight/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas2D.resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  firstDraw = false;
}
