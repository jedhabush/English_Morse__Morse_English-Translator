import { englishMapping, morseCodeMapping } from "./englishMorseList.js";
export { englishEncoder, morseCodeDecoder };

//function to encode text to morse code
const englishEncoder = (arr) => {
  let arr2 = arr
    .map((x) => {
      if (englishMapping[x]) {
        console.log(englishMapping[x]);
        return englishMapping[x];
      } else {
        return x;
      }
    })
    .join(" ");

  return arr2;
};

//function to decode morse code to english
const morseCodeDecoder = (arr) => {
  let arr1 = arr.split("   ");

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
