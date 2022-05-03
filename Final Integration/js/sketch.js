///Graphic Variables
let img;
let img2;

//Audio Variables
//const sounds = new Tone.Players({
//  stomp: "media/stomp.mp3",
//  clap: "media/clap.mp3",
//})
let stomp;
let clap;

///Arduino variables
let serialPDM;
let portName = "COM3";
let sensor;
let button;


function preload() {
  img = loadImage("media/stomp.png");
  img2 = loadImage("media/clap.png");
}

function setup() {
  serialPDM = new PDMSerial(portName);
  sensor = serialPDM.sensorData

  stomp = createAudio("media/stomp.mp3");
  clap = createAudio("media/clap.mp3");

  createCanvas(800, 600);
}

function draw() {
  //Text
  background(235);
  textSize(50);
  textFont('Comic Sans MS');
  textAlign(CENTER);
  text('We Will Rock You Simulator', 375, 100);

  //Stomp
  tint(255, sensor.potentiometer);
  image(img, 100, 250, 200, 200);

  //Clap
  image(img2, 450, 250, 200, 200);
}

function playSound() {
  if(sensor.button == 1 && sensor.potentiometer <= 127) {
    stomp.autoplay(true);
  }
  if(sensor.button == 1 && sensor.potentiometer >= 128) {
    clap.autoplay(true);
  }
  serialPDM.transmit('LED', sensor.potentiometer);
}

