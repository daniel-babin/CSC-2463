//Universal variables
//let
let bugImage = [];
let imageURL = "https://github.com/daniel-babin/CSC-2463/tree/main/BigSquish/BigSquichImages/"
let walls = [];
let directions = [0, 90, 180, 270];
let bugSpeed = 1.5;

//Preload images for game
function preload(){
  loadImage("background.png");
}

//Create game canvas
function setup() {
  createCanvas(800, 800);
}

//Physical game mechanics
function draw() {
  background("background.png");
}
