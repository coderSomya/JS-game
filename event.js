//update loop

import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

const ball = new Ball(document.getElementById("ball"));
const player = new Paddle(document.getElementById("right"));
const computer = new Paddle(document.getElementById("left"));


//we grab the differences in the time lapses and try to update position of ball accordingly

let lastTime
function update(time){
    if(lastTime!=null){
        const delta= time- lastTime
        ball.update(delta)

        computer.update(delta, ball.y)

    if(isLose()==true) handleLose();
    if(isWin()==true) handleWin();
    }
    lastTime=time;

    
    window.requestAnimationFrame(update);
}

function isLose(){
    // const rect= ball.rect();
    
    // console.log(ball.getBoundingClientRect())
 
    if(ball.x<0 &&  Math.abs(ball.y - computer.position)>30)
    return true;
    else return false;
}

function isWin(){
    if(ball.x>0.8*window.innerWidth &&  Math.abs(ball.y - player.position)>10)
    return true;
    else return false;
}

function handleLose(){
    document.getElementById("state").innerText="WON"
     ball.reset();
    console.log("lost")

     computer.reset();
     setTimeout(()=>
{
    document.getElementById("state").innerText=""
},2000
     )
 
}

function handleWin(){
    document.getElementById("state").innerText="LOST"
     ball.reset();
    console.log("won")

     computer.reset();
     setTimeout(()=>
{
    document.getElementById("state").innerText=""
},2000
     )
 
}


document.addEventListener("mousemove", e=>{
    player.position= (e.y/window.innerHeight)*100
})

window.requestAnimationFrame(update)