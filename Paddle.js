const SPEED = 0.05

export default class Paddle{

    constructor(paddle){
      this.paddle= paddle; 
      this.reset();
    }

    get position(){
     return parseFloat(getComputedStyle(this.paddle).getPropertyValue("--position"))
    }

    set position(value){
      this.paddle.style.setProperty("--position", value)
    }

    update(delta, ball_y){
       this.position =SPEED*delta*(ball_y - this.position)

    }

    reset(){
      this.position= 50;
    }

}