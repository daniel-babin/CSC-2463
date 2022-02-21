// Sounds for Sampler
const sounds = new Tone.Players({
  amongUs: "media/sounds/among-us.mp3",
  bonk: "media/sounds/bonk.mp3",
  hehe: "media/sounds/hehe.mp3",
  vine: "media/sounds/vine-boom.mp3",
  dog: "media/sounds/what-the-dog-doin.mp3",
  
})

const delay = new Tone.FeedbackDelay("8n", 0.5);

// UI elements
let button1, button2, button3, button4, button5;
let slider1;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  button1 = createButton("1: Among Us");
  button1.position(50, 175);
  button1.mousePressed( () => buttonSound('amongUs') );
  
  button2 = createButton("2: bonk");
  button2.position(150, 175);
  button2.mousePressed( () => buttonSound('bonk') );

  button3 = createButton('3: hehe');
  button3.position(225, 175);
  button3.mousePressed( () => buttonSound('hehe') );

  button4 = createButton('4: vine');
  button4.position(120, 200);
  button4.mousePressed( () => buttonSound('vine') );

  button5 = createButton('5: dog');
  button5.position(200, 200);
  button5.mousePressed( () => buttonSound('dog') );
  
  slider1 = createSlider(0, 1, 0.5, 0.1);
  slider1.mouseReleased( ()=>{
    delay.delayTime.value = slider1.value();
  });
}

//Draw Sampler Graphics
function draw() {
  background(220);
  textSize(25);
  text('Press buttons or click number keys', 5, 150);

  textSize(15);
  text('Slide to change delay', 5, 390);
}

// Number keys to play sounds
function keyPressed(){
  if(key==="1"){
    sounds.player("amongUs").start();
  } else if (key === "2"){
    sounds.player("bonk").start();
  } else if (key === "3") {
    sounds.player("hehe").start();
  } else if (key === "4"){
    sounds.player("vine").start();
  } else if (key === "5"){
    sounds.player("dog").start();
  }
}

function buttonSound(sound='amongUs') {
  sounds.player(sound).start();
}