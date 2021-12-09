import { englishEncoder, morseCodeDecoder } from "./pureFunctions.js";
/* This file is to test the validality of the pure functions used in this software*/
// Tests for English Encoder Function
describe("Testing englishEncoder()", () => {
  it("Should Encode to Morse Code with different letter cases", () => {
    expect(englishEncoder("I love PotaTo")).toEqual(
      "..   .-.. --- ...- .   .--. --- - .- - ---"
    );
    expect(englishEncoder("My naMe iS CarlOS")).toEqual(
      "-- -.--   -. .- -- .   .. ...   -.-. .- .-. .-.. --- ..."
    );
    expect(englishEncoder("we loVE CODING A LOT")).toEqual(
      ".-- .   .-.. --- ...- .   -.-. --- -.. .. -. --.   .-   .-.. --- -"
    );
  });
  it("Should Encode Numbers Correctly with or without spaces", () => {
    expect(englishEncoder("0455635661")).toEqual(
      "----- ....- ..... ..... -.... ...-- ..... -.... -.... .----"
    );
    expect(englishEncoder("12 005 458 154")).toEqual(
      ".---- ..---   ----- ----- .....   ....- ..... ---..   .---- ..... ....-"
    );
    expect(englishEncoder("5 0 5 10")).toEqual(
      ".....   -----   .....   .---- -----"
    );
  });
  it("Should Encode Numbers and Letter Correctly with or without spaces", () => {
    expect(englishEncoder("my55 nameis 2012")).toEqual(
      "-- -.-- ..... .....   -. .- -- . .. ...   ..--- ----- .---- ..---"
    );
    expect(englishEncoder("jack got 6 apples in 2000")).toEqual(
      ".--- .- -.-. -.-   --. --- -   -....   .- .--. .--. .-.. . ...   .. -.   ..--- ----- ----- -----"
    );
    expect(englishEncoder("2 plus 2 is 4")).toEqual(
      "..---   .--. .-.. ..- ...   ..---   .. ...   ....-"
    );
  });
  it("Should NOT convert any non Morse Symbols", () => {
    expect(englishEncoder("++*")).toEqual("Not Valid Input");
    expect(englishEncoder("////////")).toEqual("/ / / / / / / /");
    expect(englishEncoder("2 + 2 = 4")).toEqual("Not Valid Input");
  });

  it("Should be invalid input, if input is non English character", () => {
    expect(englishEncoder("....-")).toEqual("Not Valid Input");
    expect(englishEncoder(".-")).toEqual("Not Valid Input");
    expect(englishEncoder("..---")).toEqual("Not Valid Input");
    expect(englishEncoder(".-.-")).toEqual("Not Valid Input");
  });
});

// Tests for Morse Code Decoder Function
describe("Testing morseCodeDecoder()", () => {
  it("Should Decode to English Text with or with out spaces", () => {
    expect(
      morseCodeDecoder(
        "- .... .   .-- --- .-. .-.. -..   .. ...   .... .- .--. .--. -.--"
      )
    ).toEqual("the world is happy");
    expect(
      morseCodeDecoder(
        "..   -.-. .- -.   ... .-- .. --   .. -.   - .... .   .-. .. ...- . .-."
      )
    ).toEqual("i can swim in the river");
  });

  it("Should Decode Numbers Correctly", () => {
    expect(
      morseCodeDecoder(
        "....- ..... ..--- ..--- ..--- .---- ....- ..... ..... ---.."
      )
    ).toEqual("4522214558");
    expect(
      morseCodeDecoder(
        "----. -----   ----. -----   .---- ..---   ..--- ..--- -----   .---- ....- ---..   ----- ----- ----- ----- ----- -----"
      )
    ).toEqual("90 90 12 220 148 000000");
  });

  it("Should Encode Numbers and Letter Correctly with or without spaces", () => {
    expect(
      morseCodeDecoder(
        ".-- .... .- - .....   -.. -----   -.-- ----- ..-   .-- .---- -. -   -- ---.."
      )
    ).toEqual("what5 d0 y0u w1nt m8");
    expect(
      morseCodeDecoder(
        "..   ... .-.. ...-- ...-- .--.   .- -. -..   -.. .-. .---- -. -.-   .-- .- - . ..--- .-."
      )
    ).toEqual("i sl33p and dr1nk wate2r");
  });

  it("Should NOT convert any non Morse Symbols", () => {
    expect(morseCodeDecoder("++*")).toEqual("Not Valid Input");
    expect(morseCodeDecoder("2 + 2 = 4")).toEqual("Not Valid Input");
  });
  it("Should convert any slashes in Morse Symbols correctly", () => {
    expect(
      morseCodeDecoder(".. / . -. .--- --- -.-- / ... .-.. . . .--. .. -. --.")
    ).toEqual("i enjoy sleeping");
    expect(morseCodeDecoder("/////")).toEqual(" ");
    expect(
      morseCodeDecoder(
        ".-. . - ..- .-. -. / .- / ..-. ..- -. -.-. - .. --- -. / .-- .. - .... / -. ..- .-.. .-.. / .--. .-.. . .- ... ."
      )
    ).toEqual("return a function with null please");
  });

  it("Should be invalid input, if input is non Morse Code character", () => {
    expect(morseCodeDecoder("Ab Scd*")).toEqual("Not Valid Input");
    expect(morseCodeDecoder("jack love apples")).toEqual("Not Valid Input");
    expect(morseCodeDecoder("this is english")).toEqual("Not Valid Input");
  });
});
