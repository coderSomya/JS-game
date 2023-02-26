var ball = document.getElementsByClassName("ball")[0];
var left=  document.getElementsByClassName("left")[0];
var right=  document.getElementsByClassName("right")[0];

function startGame(){
    window.addEventListener("keydown", (e)=>{
        console.log(e.key);
        // var offsets= right.getBoundingClientRect();
        // console.log(offsets);
        switch(e.key){
            case "1":
                left.style.top="40%";
                break;
            case "2":
                left.style.top="20%";
                break;
            case "3":3
                right.style.top= "40%";
                break;
            case "4":
                right.style.top= "20%";
                break;
            default:
                alert("wrong key");
                break;
        }    
    })  
}



startGame();