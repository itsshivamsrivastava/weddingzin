
document.querySelector("button").addEventListener("click",function handleClick(){
    alert("I got clicked!!!");
    var audio=new Audio('Sweet.mp3');
    audio.play()});
document.getElementsByClassName("button1").click();
   var loveScore=Math.random()*100;
   loveScore=Math.floor(loveScore)+1;
   alert("Your loveScore is " + loveScore);