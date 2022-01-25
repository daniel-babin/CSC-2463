function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(0);

  //Colors
  let c1 = color(255, 204, 0);
  let c2 = color(250, 0, 0);
  let c3 = color(255);
  let c4 = color(0, 0, 250);

  //Pac-Man
  fill(c1);
  noStroke();
  arc(80, 100, 150, 150, PI + QUARTER_PI, PI - QUARTER_PI);
  
  //Blinky
  fill(c2);
  noStroke();
  rect(210, 100, 150, 75);
  arc(285, 100, 150, 150, PI, 0);

  fill(c3);
  noStroke();
  circle(250, 100, 50);
  circle(320, 100, 50);

  fill(c4);
  noStroke();
  circle(250, 100, 25);
  circle(320, 100, 25);

}
