var randomNumber = Math.floor((Math.random() * 6) + 1);  // random number between 1 and 6
var randomNumber2 = Math.floor((Math.random() * 6) + 1); // second random number between 1 and 6

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png"); // changing the image
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); //changing the image

// changing the h1
if(randomNumber === randomNumber2){
  document.querySelector("h1").textContent = "Draw!"; //if is a draw
}else if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"; //if player 1 wins
}else{
  document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩"; //if player 2 wins
}
