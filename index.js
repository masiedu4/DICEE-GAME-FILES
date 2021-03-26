var randomNumber= Math.random();
randomNumber=Math.floor(randomNumber*6);
randomNumber=randomNumber+1;

var randomImage="images/dice"+randomNumber+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber1=Math.random();
randomNumber1= Math.floor(randomNumber1*6);
randomNumber1=randomNumber1+1;

var randomImage1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage1);


if (randomNumber>randomNumber1) {
  document.querySelector("h1").innerHTML="Player 1 wins!";
} else if(randomNumber1>randomNumber){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}else{
  document.querySelector("h1").innerHTML="Draw!"
}
