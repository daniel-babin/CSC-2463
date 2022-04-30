let serialPDM;
let portName = "COM3";

//Arduino variables
let sensors;
let joyX = 0;
let joyY = 0;
let pJoyX = -1;
let pJoyY = -1;

//let joyButton;

//Universal Variables
let currentColor, red, orange, yellow, green, lightblue, blue, magenta, brown, white, black;

//Melody for Background Music
let pattern = new Tone.Pattern(function(time, note){
  synth.triggerAttackRelease(note, 0.25, time);
}, ["C4", "E4", "G4", "B4"]);

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
  createCanvas(800, 600);
  background(255);
  Tone.start();
  pattern.start(0);
  Tone.Transport.start();

  currentColor = 0;

  synth.release = 2;
  synth.resonance = 0.98;

  serialPDM = new PDMSerial(portName);
  sensors = serialPDM.sensorData;
  joyX = serialPDM.scaledJoyX
  joyY = serialPDM.scaledJoyY
  joyButton = serialPDM.switchState

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
    serialPDM.transmit("led", 1);
    //console.log("led");
    if(mouseX > 26){
      drawing();
      
      synth.volume = -10;
      synth.triggerAttackRelease("D5", 0.1);

      console.log(sensors.scaledJoyX);
      console.log(sensors.scaledJoyY);
    }
    else {
      serialPDM.transmit("led", 0);
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
          synth.triggerAttackRelease("C9", 0.01);
        } else if(mouseY > 25 && mouseY < 50){
         currentColor = [255, 182, 0];
         synth.triggerAttackRelease("C8", 0.01);
        } else if(mouseY > 50 && mouseY < 75){
          currentColor = [255, 255, 0];
          synth.triggerAttackRelease("C7", 0.01);
        }else if(mouseY > 75 && mouseY < 100){
          currentColor = [0, 255, 0];
          synth.triggerAttackRelease("C6", 0.01);
        }else if(mouseY > 100 && mouseY < 125){
          currentColor = [0, 255, 255];
          synth.triggerAttackRelease("C5", 0.01);
        }else if(mouseY > 125 && mouseY < 150){
          currentColor = [0, 0, 255];
          synth.triggerAttackRelease("C4", 0.01);
        }else if(mouseY > 150 && mouseY < 175){
          currentColor = [127, 0, 255]
          synth.triggerAttackRelease("C3", 0.01);
        }else if(mouseY > 175 && mouseY < 200){
          currentColor = "brown";
          synth.triggerAttackRelease("C2", 0.01);
        }else if(mouseY > 200 && mouseY < 225){
          currentColor = "white";
          synth.triggerAttackRelease("C1", 0.01);
        }else if(mouseY > 225 && mouseY < 250){
          currentColor = "black";
          synth.triggerAttackRelease("D1", 0.01);
        }
      }  
    }
  }
}

function drawing() {
  push();
  let reverseJoyY = map(sensors.scaledJoyY, 0, 600, 600, 0);
  if(pJoyX == -1){
    pJoyX = sensors.scaledJoyX;
    pJoyY = reverseJoyY; 
  }
  stroke(currentColor);
  strokeWeight(10);
  line(pJoyX, pJoyY, sensors.scaledJoyX, reverseJoyY);
  pJoyX = sensors.scaledJoyX;
  pJoyY = reverseJoyY;
  pop();
}  
