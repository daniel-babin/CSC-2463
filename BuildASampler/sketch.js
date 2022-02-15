//In class Feb 15
let sound1 = new tone.Player('media/Extra%20Life%20Sound%20Effect%20(%20FREE%20DOWNLOAD%20).wav');

function setup() {
  createCanvas(400, 400);
  sound1.toDestination();
}

function draw() {
  background(220);
}

function keyPressed() {
  if(key === "1") {
    sound1.playbackRate = 1;
    sound1.start();
  }
  
  sound1.playbackRate = (mouseY / 200) + 0.01;
  sound1.start
}