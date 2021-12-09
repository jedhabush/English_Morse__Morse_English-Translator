export { morseCodeSoundGenerator };

// Function to produce Morse Code sound on the page
const AudioContext = window.AudioContext;
const sound = new AudioContext();
let dot = 1.2 / 15;

const morseCodeSoundGenerator = function (e) {
  e.preventDefault();

  const target = e.target;
  if (!target.matches("button")) {
    return;
  }

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
};
