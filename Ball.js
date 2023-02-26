const INITIAL_VELOCITY = 0.025
const ACCELERATION = 1.005
const MAX_VELOCITY= 0.2

export default class Ball{
    constructor(ball){
        this.ball = ball;
        this.reset();
    }

    get x(){
        return parseFloat(getComputedStyle(this.ball).getPropertyValue("--x"))
    }

    get y(){
        return parseFloat(getComputedStyle(this.ball).getPropertyValue("--y"))
    }

    set x(value){
        this.ball.style.setProperty("--x", value)
    }

    set y(value){
        this.ball.style.setProperty("--y", value)
    }

    rect(){
        return this.ball.getBoundingClientRect();
    }

    reset(){
        this.x=50; this.y=50;

        this.direction={
            x: 0
        }

        while(Math.abs(this.direction.x)<=0.2 || Math.abs(this.direction.x)>=0.9){
            const heading= randomNumberBetween(0, 2*Math.PI)

            this.direction={
                x: Math.cos(heading), y: Math.sin(heading)
            }
        }
        console.log(this.direction)

        this.velocity = INITIAL_VELOCITY
    }

    update(delta){
      this.x+= this.direction.x*this.velocity *delta;
      this.y+= this.direction.y*this.velocity*delta;


    this.velocity= Math.min(this.velocity*ACCELERATION, MAX_VELOCITY)

      const rect= this.rect();
    //   console.log(rect.bottom);
      if(rect.bottom > 0.975*window.innerHeight || rect.top< 0.025) this.direction.y*= -1;

      if(rect.right > 0.975*window.innerWidth || rect.left < 0.025 ){
        this.direction.x*= -1;
      }


    }

}

function randomNumberBetween(a,b){
    return a + Math.random()*(b-a);
}