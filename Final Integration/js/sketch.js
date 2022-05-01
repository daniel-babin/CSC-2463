///Graphic Variables
let img;
let img2;

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
  background(255);
  textSize(50);
  textFont('Comic Sans MS');
  textAlign(CENTER);
  text('We Will Rock You Simulator', 375, 100);

  //Stomp
  image(img, 150, 250, 200, 200);

  //Clap
  image(img2, 600, 200, 100, 100);
}