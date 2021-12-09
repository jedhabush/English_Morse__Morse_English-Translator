import { englishEncoder, morseCodeDecoder } from "./pureFunctions.js";
import { morseCodeSoundGenerator } from "./morseCodePlayer.js";

//Elements for English content
let input = document.querySelector("#englishInput");
let morseOutput = document.querySelector("#morseOutput");
const btnConvert = document.querySelector(".englishToMorse");

//Elements for Morse Code content
let input2 = document.querySelector("#morseInput");
let englishOutput = document.querySelector("#englishOutput");
const btnConvert2 = document.querySelector(".morseToEnglish");

//Element for Morse Code sound player
let playMorseCodeSound = document.querySelector("#morseCodePlayer");

// Functions Section

//English to Morse function
const englishToMorse = (e) => {
  e.preventDefault();

  let text = input.value;
  let string = englishEncoder(text);
  let codeInMorse = string;
  morseOutput.value = codeInMorse;

  //Remove text and be Ready for the next input
  input.value = "";
};

//Morse to English function
const morseToEnglish = (e) => {
  e.preventDefault();

  let text = input2.value;
  let codeInEnglish = morseCodeDecoder(text);
  englishOutput.value = codeInEnglish;
  //console.log(codeInEnglish);
  //Remove text and be Ready for the next input2
  input2.value = "";
};

// Event Listeners Section

// Event for English to Morse
btnConvert.addEventListener("click", englishToMorse);

// Event for Morse to English
btnConvert2.addEventListener("click", morseToEnglish);

// Event to play Morse Code sound
playMorseCodeSound.addEventListener("click", morseCodeSoundGenerator);
