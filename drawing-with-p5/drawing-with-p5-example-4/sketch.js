function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 200);

  //Colors
  let c1 = color(0, 175, 0);
  let c2 = color(250, 0, 0);

  //Green Circle
  fill(c1);
  strokeWeight(4);
  stroke(255);
  circle(200, 200, 200);

  //Star Outline
  fill(c2);
  strokeWeight(4);
  stroke(255);
  beginShape();
  vertex(200, 100);
  vertex(175, 170);
  vertex(105, 170);
  vertex(160, 210);
  vertex(145, 275);
  vertex(200, 240);
  vertex(255, 275);
  vertex(240, 210);
  vertex(295, 170);
  vertex(225, 170);
  vertex(200, 100);
  endShape();
}