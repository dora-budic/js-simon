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
    // Dopo altri 30sec chiedo all'utente di inserire 5 numeri(uno alla volta)
    // Controllo quanti e quali numeri sono stati indovinati
    setTimeout (function () {
      var userNumbers = [];
      var guessedNumbers = score(computerNumbers, userNumbers, 100);
      if (userNumbers.length == 0) {
        $('#result').text("You didn't guess any number.");
      } else if (userNumbers.length == 1) {
        $('#result').text("You guessed " + userNumbers.length + " number and that is number " + guessedNumbers);
      }
      else {
        $('#result').text("You guessed " + userNumbers.length + " numbers and those are: " + guessedNumbers);
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

function score(generatedNumbers, insertedNumbers, max) {
  while (insertedNumbers.length < 5) {
    var number = parseInt(prompt("Write one number that you saw before on screen: "));
    if (number >= 1 && number <= max && !isNaN(number)) {
      if (generatedNumbers.includes(number)) {
        insertedNumbers.push(number);
      } else {
        return insertedNumbers;
      }
    }
  }
  return insertedNumbers;
}
