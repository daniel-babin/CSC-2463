/*
  3.3 Serial Communication  
    Daniel Babin
    CSC 2463
    Dr. Allison
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

  //console.log(sensor.a0);
}

function mousePressed() {
  serialPDM.transmit('mouse', mouseX);
  console.log(mouseX);
}