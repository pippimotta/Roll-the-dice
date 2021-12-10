var randomNumber1 = Math.floor(Math.random()* 6) + 1;

var randomImageSource1 = 'images/dice' + randomNumber1 + '.png';

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomImageSource1)

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', randomImageSource2)

var monJi = document.querySelector('h1')

if (randomNumber1 > randomNumber2) {
    monJi.innerHTML = 'Player1 wins 🚩';}

  else if (randomNumber1 < randomNumber2) {
    monJi.innerHTML = 'Player2 wins 🚩';
  }
  else {
    monJi.innerHTML = "It's a draw!";
  }
