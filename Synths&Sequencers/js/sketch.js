const duoSynth = new Tone.DuoSynth().toDestination();
const reverb = new Tone.JCReverb(0.2).toDestination();
duoSynth.connect(reverb);


let notes = {
  'a': 'C5',
  's': 'D5',
  'd': 'E5',
  'f': 'F5',
  'j': 'G5',
  'k': 'A5',
  'l': 'B5',
  ';': 'C6'
}

function setup() {
  createCanvas(400, 400);
  duoSynth.release = 2;
  duoSynth.resonance = 0.98;

  //Hellp World to play when started
duoSynth.triggerAttackRelease("C4", "8n");

}

function draw() {
  background(220);
}

function keyPressed() {
  let toPlay = notes[key];
  //console.log(toPlay);
  duoSynth.triggerAttackRelease(toPlay, 0.1);
  
  //duoSynth.triggerAttackRelease("C2", "8n", '+1');
}