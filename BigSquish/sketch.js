//Universal variables
let bgImage;
let bugImage = [];
let imageURL = "https://github.com/daniel-babin/CSC-2463/tree/main/BigSquich/BigSquichImages/"
let walls = [];
let directions = [0, 90, 180, 270];
let bugSpeed = 1.5;

//Preload images for game
function preload(){
  bgImage = loadImage(imageURL + "background.png");
}

//Create game canvas
function setup() {
  createCanvas(800, 800);
}

//Physical game mechanics
function draw() {
  background(bgImage);
}
