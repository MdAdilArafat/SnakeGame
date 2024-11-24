let snake1;
let rez = 20;
let food; 
let w;
let h;
function setup(){
   let cnv = createCanvas(400,400); 
//    cnv.position(80%,10%)
   w = floor(width/ rez);
   h = floor(height/ rez);
   frameRate(2);
   snake1 = new snake();
   foodLocation();
}

function foodLocation(){
   let x = floor(random(w))
   let y = floor(random(h))
   food = createVector(x,y)
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        snake1.setDir(-1,0);

    } else if (keyCode === RIGHT_ARROW) {
        snake1.setDir(1,0);

    }else if (keyCode === DOWN_ARROW) {
        snake1.setDir(0,1);


    }else if (keyCode === UP_ARROW) {
        snake1.setDir(0,-1);
    }
    else if (key === ' ') {
        snake1.grow();
    }
}


function draw(){

    scale(rez)
    background(220);
    if (snake1.eat(food)){
        foodLocation();
    }
    snake1.update();
    snake1.show();
    

    if (snake1.endGame()) {
        background(255,0,0);
        noLoop();
    }

    noStroke()
    fill(255,0,0);
    rect(food.x,food.y,1,1);
}