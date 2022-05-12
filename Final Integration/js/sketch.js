/*
  Daniel Babin
  CSC 2463
  Dr. Allison

  The graphic and Tone.js part of my final integration project. This code contains the sounds and images used
  in the graphic, along with the data received from the Arduino to change the graphics and trigger the sound.

  YouTube: https://youtu.be/tcvwg0Qo1eE
*/

///Graphic Variables
let img;
let img2;
let img3;

//Audio Variables
const sounds = new Tone.Players({
  stomp: "media/stomp.mp3",
  clap: "media/clap.mp3",
}).toDestination();
let stomp;
let clap;

///Arduino variables
let serialPDM;
let portName = "COM3";
let sensor;
let button;
let potentiometerValue;


function preload() {
  img = loadImage("media/stomp.png");
  img2 = loadImage("media/clap.png");
  img3 = loadImage("media/freddie.jpg")
}

function setup() {
  serialPDM = new PDMSerial(portName);
  sensor = serialPDM.sensorData
  button = sensor.button;
  potentiometerValue = sensor.potentiometer;

  //stomp = createAudio("media/stomp.mp3");
  //clap = createAudio("media/clap.mp3");

  createCanvas(800, 600);
  console.log("potentiometer value: ", sensor.potentiometer);
  console.log("button state: ", sensor.button);
}

function draw() {
  //Text
  background(235);
  tint(255, 250);
  image(img3, 0, 0, 800, 600);
  textSize(50);
  textFont('Comic Sans MS');
  textAlign(CENTER);
  fill(249, 142, 29);
  text('We Will, We Will Rock You', 400, 100);

  //Stomp
  tint(255, 127);
  image(img, 100, 250, 200, 200);
  if (sensor.potentiometer <= 400 && sensor.button == 1) {
    image(img, 100, 250, 200, 200);
  }

  //Clap
  image(img2, 500, 250, 200, 200);
  if (sensor.potentiometer >= 401 && sensor.button == 1) {
    image(img2, 500, 250, 200, 200);
  }

  checkSound();
}

function checkSound() {
  if(sensor.button == 1 && sensor.potentiometer <= 400) {
    sounds.player("stomp").start();
    serialPDM.transmit('LED', 1);
    console.log("play stomp");
  }
  if(sensor.button == 1 && sensor.potentiometer >= 401) {
    sounds.player("clap").start(); 
    serialPDM.transmit('LED', 1); 
    console.log("play clap");
  }
}

