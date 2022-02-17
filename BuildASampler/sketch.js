const { Tone } = require("./Tone");

//In class Feb 15
let sound1 = new Tone.Player('media/Extra%20Life%20Sound%20Effect%20(%20FREE%20DOWNLOAD%20).wav');
let sounds = new Tone.Players({
  'shot': 'media/02-shot.mp3',
  'through': 'media/03-through.mp3',
  'theHeart': 'media/04-theHeart.mp3'
})

let button

function setup() {
  createCanvas(400, 400);
  sound1.toDestination();
  sounds.toDestination();
}

function draw() {
  background(220);
}

function keyPressed() {
  console.log("key is: ", key);
  if(key === "1"){
    sounds.player('shot').start();
    // sound1.start();
  } 
  
  // sound1.playbackRate = (mouseY /200)+0.01;
  // sound1.start();
}

function playSound(whichSound) {
  if (whichSound === 'through'){
    sounds.player('through').start();
  } else if (whichSound === 'theHeart') {
    sounds.player('theHeart').start();
  }
}