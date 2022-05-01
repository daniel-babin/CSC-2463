///Graphic Variables
let img;
let img2;

//Audio Variables
const sounds = new Tone.Players({
  stomp: "media/stomp.mp3",
  clap: "media/clap.mp3",
})

///Arduino variables
//let serialPDM;
//let portName = "COM3";
//let sensor;
//let button;


function preload() {
  img = loadImage("media/stomp.png");
  img2 = loadImage("media/clap.png");
}

function setup() {
  //serialPDM = new PDMSerial(portName);
  //sensor = serialPDM.sensorData

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
  image(img, 100, 250, 200, 200);

  //Clap
  image(img2, 450, 250, 200, 200);
}