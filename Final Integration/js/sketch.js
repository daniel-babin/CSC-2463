///Graphic Variables
let img;
let img2;

///Arduino variables
//let serialPDM;
//let portName = "COM3";
//let sensor;
//let button;


function preload() {
  img = loadImage("media/rebekah.jpeg");
  img2 = loadImage("media/rebekah2.jpeg");
}

function setup() {
  //serialPDM = new PDMSerial(portName);
  //sensor = serialPDM.sensorData

  createCanvas(800, 600);
}

function draw() {
  //Text
  background(230);
  textSize(50);
  textFont('Comic Sans MS');
  textAlign(CENTER);
  text('We Will Rock You Simulator', 375, 100);

  //Stomp
  image(img, 200, 200, 100, 100);

  //Clap
  image(img2, 600, 200, 100, 100);
}