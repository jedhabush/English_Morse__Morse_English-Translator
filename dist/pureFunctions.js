import { englishMapping, morseCodeMapping } from "./englishMorseList.js";
export { englishEncoder, morseCodeDecoder, morseCodeSoundGenerator };

//function to encode English text to morse code
const englishEncoder = (str) => {
  if (/[.-]/gi.test(str)) return "Not Valid Input";
  let array = str.toUpperCase().split("");
  let string = array
    .map((x) => {
      if (englishMapping[x]) {
        console.log(englishMapping[x]);
        return englishMapping[x];
      } else {
        return x;
      }
    })
    .join(" ");

  return string;
};

//function to decode morse code to English
const morseCodeDecoder = (str) => {
  if (/[a-z]/gi.test(str)) return "Not Valid Input";
  let arr1 = str.split("   ");

  let arr2 = arr1
    .map((a) =>
      a
        .split(" ")
        .map((b) => morseCodeMapping[b])
        .join("")
    )
    .join(" ");
  return arr2;
};

// Function to produce Morse Code sound on the page
const AudioContext = window.AudioContext;
const sound = new AudioContext();
let dot = 1.2 / 15;

const morseCodeSoundGenerator = function (e) {
  e.preventDefault();
  let time = sound.currentTime;

  const oscillator = sound.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = 600;

  const gainNode = sound.createGain();
  gainNode.gain.setValueAtTime(0, time);

  this.morseOutput.value.split("").forEach(function (letter) {
    switch (letter) {
      case ".":
        gainNode.gain.setValueAtTime(1, time);
        time += dot;
        gainNode.gain.setValueAtTime(0, time);
        time += dot;
        break;
      case "-":
        gainNode.gain.setValueAtTime(1, time);
        time += 3 * dot;
        gainNode.gain.setValueAtTime(0, time);
        time += dot;
        break;
      case " ":
        time += 7 * dot;
        break;
    }
  });

  oscillator.connect(gainNode);
  gainNode.connect(sound.destination);

  oscillator.start();

  return false;
};
