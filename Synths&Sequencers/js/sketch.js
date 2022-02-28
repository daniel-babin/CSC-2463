//Declare var here
let slider, v;

//Instuments
const synth = new Tone.Synth({
    "oscillator": {
      "type": "sine"
    },
    "envelope": {
      "attack": 0.001,
      "decay": 0.1,
      "sustain": 0.1,
      "release": 1.2
    }
});

//Effects
const pingPong = new Tone.PingPongDelay().toDestination({
    "delayTime": "4n",
    "feedback": 0.2,
  "wet": 0.5
});

synth.connect(pingPong);

//Notes played on keys
let notes = {
  'a': 'C5',
  's': 'D5',
  'd': 'E5',
  'f': 'F5',
  'g': 'G5',
  'h': 'A5',
  'j': 'B5',
  'k': 'C6'
}

//Functions
function setup() {
  createCanvas(400, 400);

  synth.release = 2;
  synth.resonance = 0.98;

  //Hellp World to play when started
  synth.triggerAttackRelease("C4", "8n");

  slider = new Nexus.Slider('#slider');
  slider.on('change', (v)=>{
    pingPong.delayTime = v;
  })
  
}

function draw() {
  background(220);
  textSize(20);
  text("Daniel's Synth", 120, 150);

  textSize(18);
  text("Use keys A, S, D, F, G, H, J, K to play", 50, 200);

  textSize(18);
  text("Slide to change Ping Pong Delay", 0 ,20);
}

function keyPressed() {
  let toPlay = notes[key];
  //console.log(toPlay);
  synth.triggerAttackRelease(toPlay, 0.4);
}