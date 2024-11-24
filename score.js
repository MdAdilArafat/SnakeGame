let score = document.getElementById("score")
let final = document.getElementById("final")

let points =1;

function pointIncease(){
    score.innerHTML = points
    if(points == 5){
       final.innerHTML = " YOU WIN"
       background(255,0,0);
       noLoop();
      

    }
    
}
function failed(){
    final.innerHTML = " YOU FAILED"

}
 