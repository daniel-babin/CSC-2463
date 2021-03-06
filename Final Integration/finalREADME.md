# CSC-2463 Final Integration Project: We Will Rock You Simulator

## About the Project
Do you love the popular Queen song "We Will Rock You" but you don't feel like making the famous sounds yourself? Well the We Will Rock You Simulator is the solution for you! Use the Arduino hardware to control the simluator to stomp and clap for you.

YouTube Link: https://youtu.be/tcvwg0Qo1eE

### Project Components
Graphics: The P5 site consists of an image of a leg and a pair of clapping hands, representing which sound from the song it makes. The images are at 50% alpha until triggered, then the images switch to full alpha.

![graphics _example](https://user-images.githubusercontent.com/97774747/168176135-5f2123f3-ba5b-4794-9b94-aee3069f1cf3.png)


Audio: Using the Tone.js player, two sound bits from the song play when triggered. One sound is the stomp sound and the other is the clap.

Arduino: The breadboard has two inputs (a potentiometer and a button) and two outputs (two LEDs). The first input is a potentiometer that does two things, it is used to choose between the stomp (turn anywhere between the left and the middle) and the clap (turn anywhere between the middle and the right), as well as adjusting the brightness of the left LED on the breadboard. The other input, the button, is used to finalize the selection between stomp and clap, triggering the graphics change, triggering the audio, and turning on the right LED for the duration it is held down.

![arduino_example_new](https://user-images.githubusercontent.com/97774747/168176488-8e036b14-c148-4383-afc0-71a2f3345181.jpeg)


### Original Concept and Evolution
My original concept for the project was very similar, with the inputs from the Arduino controlling the different sounds of a drum set. The parts of the set would have also been set to 50% alpha, then full alpha when triggered. I found with so many different choices with the potentiometer, it would be very difficult to choose which drum part the user wanted to play. Knowing this I knew I had to lower the amount of inputs, and I figured since the stomps and claps from "We Will Rock You" are so iconic and simple, it would be perfect.

## Future Development
Why just play the stomp and clap in any way you want when you can play along with the song. In future versions, the play along with the vocals of the song, and when you successfully play the stomps and claps along with the song, you win.
