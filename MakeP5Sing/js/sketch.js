
//Universal Variables for Draw
let currentColor, red, orange, yellow, green, lightblue, blue, magenta, brown, white, black;

//Instrument and Effect
const synth = new Tone.Synth({
  "oscillator": {
    "type": "sine"
  },
  "envelope": {
    "attack": 0.001,
    "decay": 0.1,
    "sustain": 0.1,
    "release": 0.5
  }
});

const pingPong = new Tone.PingPongDelay().toDestination({
  "delayTime": "4n",
  "feedback": 0.2,
"wet": 0.5
});

synth.connect(pingPong);

///Canvas
function setup() {
  createCanvas(1920, 969);
  background(255);
  currentColor = 0;

  synth.release = 2;
  synth.resonance = 0.98;

  //Makes color selection boxes
  red = new colorBox(0, [255, 0, 0]);
  orange = new colorBox(25, [255, 182, 0]);
  yellow = new colorBox(50, [255, 255, 0]);
  green = new colorBox(75, [0, 255, 0]);
  lightblue = new colorBox(100, [0, 255, 255]);
  blue = new colorBox(125, [0, 0, 255]);
  violet = new colorBox(150, [127, 0, 255]);
  brown = new colorBox(175, "brown");
  white = new colorBox(200, ["white"]);
  black = new colorBox(225, "black");
}

function draw(){
  if(mouseIsPressed){
    if(mouseX > 26){
      drawing();
      Tone.start();
      synth.triggerAttackRelease("D5", 0.1);
    }
  }

  //Generates color selection boxes to canvas
  red.appear();
  red.onMousePressed();
  orange.appear();
  yellow.appear();
  green.appear();
  lightblue.appear();
  blue.appear();
  violet.appear();
  brown.appear();
  white.appear();
  black.appear();

}

//Color selection tool
class colorBox{
  constructor(y, color){
    this.x = 0;
    this.y = y;
    this.w = 25;
    this.h = 25;
    this.color = color;
  }
  appear(){
    push();
    fill(this.color);
    stroke("white");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  onMousePressed(){
    if(mouseIsPressed){
      if(mouseX < 25){
        if(mouseY > 0 && mouseY < 25){
          currentColor = [255, 0, 0];
        } else if(mouseY > 25 && mouseY < 50){
         currentColor = [255, 182, 0];
        } else if(mouseY > 50 && mouseY < 75){
          currentColor = [255, 255, 0];
        }else if(mouseY > 75 && mouseY < 100){
          currentColor = [0, 255, 0];
        }else if(mouseY > 100 && mouseY < 125){
          currentColor = [0, 255, 255];
        }else if(mouseY > 125 && mouseY < 150){
          currentColor = [0, 0, 255];
        }else if(mouseY > 150 && mouseY < 175){
          currentColor = [127, 0, 255]
        }else if(mouseY > 175 && mouseY < 200){
          currentColor = "brown";
        }else if(mouseY > 200 && mouseY < 225){
          currentColor = "white";
        }else if(mouseY > 225 && mouseY < 250){
          currentColor = "black";
        }
      }  
    }
  }
}

function drawing() {
  push();
  stroke(currentColor);
  strokeWeight(10);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();
}  
