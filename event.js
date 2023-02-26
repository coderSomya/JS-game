//update loop

import Ball from "./Ball.js";

const ball = new Ball(document.getElementById("ball"));


//we grab the differences in the time lapses and try to update position of ball accordingly

let lastTime
function update(time){
    if(lastTime!=null){
        const delta= time- lastTime
        ball.update(delta)
    }
    lastTime=time;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update)