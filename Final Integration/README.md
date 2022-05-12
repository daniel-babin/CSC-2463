# CSC-2463 Final Integration Project: We Will Rock You Simulator

## About the Project
Do you love the popular Queen song "We Will Rock You" but you don't feel like making the famous sounds yourself? Well the We Will Rock You Simulator is the solution for you! Use the Arduino hardware to control the simluator to stomp and clap for you.

YouTube Link: https://youtu.be/tcvwg0Qo1eE

### Project Components
Graphics: The P5 site consists of an image of a leg and a pair of clapping hands, representing which sound from the song it makes. The images are at 50% alpha until triggered, then the images switch to full alpha.

Audio: Using the Tone.js player, two sound bits from the song play when triggered. One sound is the stomp sound and the other is the clap.

Arduino: The breadboard has two inputs (a potentiometer and a button) and two outputs (two LEDs). The first input is a potentiometer that does two things, it is used to choose between the stomp and the clap, as well as adjusting the brightness of the left LED on the breadboard. The other input, the button, is used to finalize the selection between stomp and clap, triggering the graphics change and the audio.

## Future Development
Why just play the stomp and clap in any way you want when you can play along with the song. In future versions, the play along with the vocals of the song, and when you successfully play the stomps and claps along with the song, you win.
