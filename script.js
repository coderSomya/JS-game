var ball = document.getElementsByClassName("ball")[0];
var left=  document.getElementsByClassName("left")[0];
var right=  document.getElementsByClassName("right")[0]
function startGame(){
    window.addEventListener("keydown", (e)=>{
      
       console.log(e.key);
    })  
}



startGame();