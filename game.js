var randomnumber1=Math.floor(Math.random()*6)+1;
var randomDiceImg= "dice"+randomnumber1+".png";
var ranimgsrc="images/"+randomDiceImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",ranimgsrc);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg2= "dice"+randomnumber2+".png";
var ranimgsrc2= "images/"+randomDiceImg2;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",ranimgsrc2);

if(randomnumber1 > randomnumber2)
{
  document.querySelector("h1").innerHTML="Player1 Won👏";
}
else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML="Player2 Won👏";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
