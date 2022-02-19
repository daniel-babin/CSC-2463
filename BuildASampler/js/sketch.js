// Set up Tone
const sounds = new Tone.Players({
  amongUs: "media/sounds/among-us.mp3",
  bonk: "media/sounds/bonk.mp3",
  hehe: "media/sounds/hehe.mp3",
  vine: "media/sounds/vine-boom.mp3",
  dog: "media/sounds/what-the-dog-doin.mp3",
  
})

sounds.toDestination();

// UI elements
let button1, button2, button3, button4, button5;

let slider1;

function preload() {
  // could load audio and setup buttons here as well...
}

function setup() {
  createCanvas(400, 400);

  button1 = createButton("Among Us", 'amongUs');
  button1.position(50, 175);
  button1.mousePressed(buttonSound);
  
  button2 = createButton("bonk");
  button2.position(150, 175);
  button2.mousePressed( () => buttonSound('bonk') );

  button3 = createButton('hehe');
  button3.position(225, 175);
  button3.mousePressed( () => buttonSound('hehe') );

  button4 = createButton('vine');
  button4.position(125, 200);
  button4.mousePressed( () => buttonSound('vine') );

  button5 = createButton('dog');
  button5.position(175, 200);
  button5.mousePressed( () => buttonSound('dog') );
  
  slider1 = createSlider(0,1,0,0.1);
}

function draw() {
  background(220);
}

function keyPressed(){
  if(key==="1"){
    sounds.player("amongUs").start();
  } else if (key === "2"){
    sounds.player("bonk").start();
  } else if (key === "3") {
    sounds.player("hehe").start();
  }
}

function buttonSound(sound='amongUs') {
  sounds.player(sound).start();
}