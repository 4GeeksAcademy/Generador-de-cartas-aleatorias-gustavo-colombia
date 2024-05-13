/* eslint-disable */

window.onload = function() {
  const suits = ["♥", "♣", "♦", "♠"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const upCard = document.getElementById("card-icon-top");
  const centerCard = document.getElementById("card-number");
  const downCard = document.getElementById("card-icon-bottom");

  function randomIcon(icons) {
    return icons[Math.floor(Math.random() * icons.length)];
  }

  function randomNumber(numbers) {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  const icon = randomIcon(suits);
  const cartaNum = randomNumber(numbers);

  upCard.innerHTML = icon;
  downCard.innerHTML = icon;
  centerCard.innerHTML = cartaNum;
};
