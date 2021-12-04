import { englishMapping, morseCodeMapping } from "./englishMorseList.js";
export { englishEncoder, morseCodeDecoder };

//function to encode text to morse code
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

//function to decode morse code to english
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
