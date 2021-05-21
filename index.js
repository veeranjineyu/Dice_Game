
var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
var file_path1 = "dice";
file_path1 = file_path1+random1+".png";
var file_path2 = "dice";
file_path2 = file_path2+random2+".png";
document.querySelector(".img1").setAttribute("src",file_path1);
document.querySelector(".img2").setAttribute("src",file_path2);
if(random1==random2)
{
  document.querySelector("h1").innerHTML = "Draw!";
}
else if(random1>random2)
{
  document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else
{
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}
