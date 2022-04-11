/*
  3.3 Serial Communication  
    Daniel Babin
    CSC 2463
    Dr. Allison

    Draws the webpage, the shade of green of the background changes with the input from the potentiometer.
    Also transmits the mouseX coordinate as input to turn the LED on/off.
  YouTube link:
*/

let serialPDM;
let portName = "COM3";

let sensor;

function setup() {
  serialPDM = new PDMSerial(portName);
  sensor = serialPDM.sensorData
  
  createCanvas(800, 600);
}

function draw() {
  background(0, sensor.a0, 0)
  stroke(255);
  line(402, 0, 400, 600);

  textSize(50);
  text('Turn LED OFF', 40, 300);
  text('Turn LED ON', 440, 300);

  //console.log(sensor.a0);
}

function mousePressed() {
  serialPDM.transmit('mouse', mouseX);
  console.log(mouseX);
}