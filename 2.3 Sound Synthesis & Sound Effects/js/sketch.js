let pitch = 800;
let img;
var instrument;
var synthJSON;
var effect1, effect2, effect3;

function preload() {
  img = loadImage("media/jetsons.png");
}

function make_Instrument() {
  // create synth
  instrument = new Tone.DuoSynth();
  synthJSON = {
      "vibratoAmount"  : 0.5 ,
    "vibratoRate"  : 5 ,
    "harmonicity"  : 1.5 ,
    "voice0"  : {
      "volume"  : -20 ,
      "portamento"  : 0 ,
      "oscillator"  : {
          "type"  : "sine"
      }  ,
      "filterEnvelope"  : {
        "attack"  : 0.01 ,
        "decay"  : 0 ,
        "sustain"  : 1 ,
        "release"  : 0.5
      }  ,
      "envelope"  : {
        "attack"  : 0.01 ,
        "decay"  : 0 ,
        "sustain"  : 1 ,
        "release"  : 0.5
      }
    }  ,
    "voice1"  : {
      "volume"  : -20 ,
      "portamento"  : 0 ,
      "oscillator"  : {
          "type"  : "sine"
      }  ,
      "filterEnvelope"  : {
        "attack"  : 0.01 ,
        "decay"  : 0 ,
        "sustain"  : 1 ,
        "release"  : 0.5
      }  ,
      "envelope"  : {
        "attack"  : 0.01 ,
        "decay"  : 0 ,
        "sustain"  : 1 ,
        "release"  : 0.5
      }
      }
  };
  
  instrument.set(synthJSON);
  
  // create effects
  effect1 = new Tone.Phaser();
  effect1JSON = {
    "frequency": 12,
    "octaves": 3.3,
    "Q": 8,
    "baseFrequency": 250,
      "wet": 0.5
  };
  effect1.set(effect1JSON);
  
  effect2 = new Tone.Distortion();
  effect2JSON = {
    "distortion" : 0.08, 
    "wet" : 0.3
  };
  effect2.set(effect2JSON);
  
  effect3 = new Tone.Chorus();
  effect3JSON = {
    "frequency": 0.2,
    "delayTime": 20,
    "type": "sine",
    "depth": 1,
    "feedback": 0.45,
    "spread": 180,
      "wet": 0.5
  };
  effect3.set(effect3JSON);
  
  // make connections
  instrument.connect(effect1);
  effect1.connect(effect2);
  effect2.connect(effect3);
  effect3.connect(Tone.Master);
  
  // define deep dispose function
  function deep_dispose() {
      if(effect1 != undefined && effect1 != null) {
          effect1.dispose();
          effect1 = null;
      }
      if(effect2 != undefined && effect2 != null) {
          effect2.dispose();
          effect2 = null;
      }
      if(effect3 != undefined && effect3 != null) {
          effect3.dispose();
          effect3 = null;
      }
      if(instrument != undefined && instrument != null) {
          instrument.dispose();
          instrument = null;
      }
  }
  
  
  return {
      instrument: instrument,
      deep_dispose: deep_dispose
      };
  
  }

function setup() {
  createCanvas(400, 400);
}

function draw() {
  textSize(30);
  text("Press to Start", 130, 150);
}

function mousePressed() {
  Tone.start();
  console.log('pressed');
  image(img, 100, 170, 250, 250);
  
  instrument.triggerAttackRelease(5);
}