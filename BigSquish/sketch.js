let bgImage, score, walking, squished, time, gameState, startTime, timerIsDone,BugGroup;
let bugImages = [];
let walls = [];
let imageURL = "https://mbardin.hithub.io/PDM-resources/media/sprite_images/bug_squish/";
let dir = [0, 90, 180, 270];
let speed = 2;

function preload(){
  bgImage = loadImage(imageURL + "background.jpg");

  for (let i = 0; i < 4; i++){
    bugImages[i] = loadImage(imageURL + "bugsprite_" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  score = 0;
  startTime = 30;
  timerIsDone = false;
  gameState = "start";
  BugGroup = new BugGroup();
  walls = new BugGroup();
  rectMode(CENTER);
  textAlign(CENTER);
  borders();
}

function draw()
