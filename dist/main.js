import { englishEncoder, morseCodeDecoder } from "./pureFunctions.js";

//Elements for English content
let input = document.querySelector("#englishInput");
let morseOutput = document.getElementById("morseOutput");
const btnConvert = document.querySelector(".englishToMorse");
//Elements for Morse Code
let input2 = document.querySelector("#morseInput");
let englishOutput = document.getElementById("englishOutput");
const btnConvert2 = document.querySelector(".morseToEnglish");

//English to Morse function
const englishToMorse = (e) => {
  e.preventDefault();

  let text = input.value;
  let arr1 = text.toUpperCase().split("");
  let codeInMorse = englishEncoder(arr1);
  morseOutput.value = codeInMorse;

  //Remove text and be Ready for the next input
  input.value = " ";
};

//Morse to English function
const morseToEnglish = (e) => {
  e.preventDefault();

  let text = input2.value;
  let codeInEnglish = morseCodeDecoder(text);
  englishOutput.value = codeInEnglish;

  //Remove text and be Ready for the next input2
  input2.value = " ";
};

// Event Listeners

// Event for English to Morse
btnConvert.addEventListener("click", englishToMorse);
console.log(btnConvert);
// Event for Morse to English
btnConvert2.addEventListener("click", morseToEnglish);
