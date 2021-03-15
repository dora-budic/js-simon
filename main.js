// Genero e stampo 5 numeri random
var computerNumbers = [];
for (var i = 0; i < 5; i++) {
  var number = randomNumber(1,100);
  computerNumbers.push(number);
  $('#numbers').text(computerNumbers);
}

// Inizia il timer di 30sec, alla fine faccio scomparire i numeri
var sec = 30;
var timer = setInterval(function () {
  if (sec == 0) {
    clearInterval(timer);
    $('#numbers').hide();
    $('.timer').hide();
    // Dopo altri 30sec chiedo all'utente di inserire 5 numeri e stampo quanti e quali numeri ha indovinato
    setTimeout (function () {
      var userNumbers = [];
      var correctNumbers = [];
      var result = matchingNumbers(computerNumbers, userNumbers, correctNumbers, 100);
      if (correctNumbers.length == 0) {
        $('#result').text("You didn't guess any number.");
      } else if (correctNumbers.length == 1) {
        $('#result').text("You guessed " + correctNumbers.length + " number and that is number " + result);
      }
      else {
        $('#result').text("You guessed " + correctNumbers.length + " numbers and those are: " + result);
      }
    }, 30000);
  } else {
    $('.timer').text(sec);
  }

  sec--;
}, 1000);



// FUNZIONI
function randomNumber(min,max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Not a number");
  } else {
    var genNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return genNumber;
  }
}

function matchingNumbers(generatedNumbers, insertedNumbers, correctNumbers, max) {
  // Chiedo all'utente di inserire 5 numeri(uno alla volta)
  while (insertedNumbers.length < 5) {
    var number = parseInt(prompt("Write one number that you saw before on screen: "));
    if (number >= 1 && number <= max && !isNaN(number)) {
      insertedNumbers.push(number);
    }
  }

  // Controllo quali numeri sono stati indovinati e li salvo nel array
  for (var i = 0; i < generatedNumbers.length; i++) {
    if (generatedNumbers.includes(insertedNumbers[i])) {
      correctNumbers.push(insertedNumbers[i]);
    }
  }
  return correctNumbers;
}
