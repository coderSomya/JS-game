const U = 0.025

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

        this.velocity = U 
    }

    update(delta){
      this.x+= this.direction.x*this.velocity *delta;
      this.y+= this.direction.y*this.velocity*delta;
    }


}

function randomNumberBetween(a,b){
    return a + Math.random()*(b-a);
}