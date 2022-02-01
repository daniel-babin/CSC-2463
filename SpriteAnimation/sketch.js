let img;

function preload(){
  img = loadImage("turtle.png");
}

function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(200);
  image(img, 10, 10, 100, 100);

}