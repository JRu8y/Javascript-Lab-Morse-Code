var display = document.getElementById('result');
var finalMessage = "";

var userInput = prompt("Please type your message:");
console.log(userInput);

userInput = userInput.toLowerCase();
console.log(userInput);

function characterTranslator(character){

  var morseCode = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
      0: "-----",
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      '\'': ".----.",
      "-": "-....-",
      "\"": ".-..-.",
      " ": "|"
    };

  for (var letter in morseCode){
    if(character == letter){
      if(morseCode[letter]=="|"){
        console.log(morseCode[letter]);
        return morseCode[letter]
      }
      else {
        console.log(morseCode[letter]);
        return morseCode[letter]+" ";
      }
    }
  }
}

function translateMessage(message){
  for(i=0;i<message.length;i++){
    var character = message.charAt(i);
    finalMessage+=characterTranslator(character);
  }
}

translateMessage(userInput);

display.innerHTML = finalMessage;
