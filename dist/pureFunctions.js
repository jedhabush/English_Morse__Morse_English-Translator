import { englishMapping, morseCodeMapping } from "./englishMorseList.js";
export { englishEncoder, morseCodeDecoder };

//function to encode English text to morse code
const englishEncoder = (str) => {
  if (!/^[0-9a-zA-Z\ \!\.\,\\\/]+$/gi.test(str)) return "Not Valid Input";
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
  //Check str validality
  if (!/^[\ \!\.\\\/\-]+$/gi.test(str)) return "Not Valid Input";
  //check if str contains forward slash (/)
  let strChecked = str;
  if (/[/]/gi.test(str)) {
    strChecked = str.replace(/[/]/g, " ");
  }
  //str passed all checks proceed with translation
  let arr1 = strChecked.split("   ");

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
