// Genero e stampo 5 numeri random
for (var i = 0; i < 5; i++) {
  var number = randomNumber(1,100);
  console.log(number);
  var computerNumbers = $('#numbers').text();
  computerNumbers += number;
  $('#numbers').text(computerNumbers + " ");
}

// Inizia il timer di 30sec, alla fine faccio scomparire i numeri
var sec = 30;
var timer = setInterval(function () {
  if (sec == 0) {
    clearInterval(timer);
    $('#numbers').hide();
    $('.timer').hide();
  } else {
    $('.timer').text(sec);
  }

  sec--;
}, 1000);

// Dopo altri 30sec chiedo all'utente di inserire 5 numeri(uno alla volta)

// Controllo quanti e quali numeri sono stati indovinati



// FUNZIONI
function randomNumber(min,max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Not a number");
  } else {
    var genNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return genNumber;
  }
}
