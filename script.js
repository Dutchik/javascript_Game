/*===============htmlのcanvasを取得===============*/


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



/*===============Ballに関する記述===============*/
var x = 0;
var y = 0;
var dx = 1;
var dy = 1;


function drawBall(){
    ctx.beginPath();
    ctx.arc( x,y,10,0,Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
/*===============Paddleに関する記述===============*/

var P_x = canvas.width /2;
var P_y = canvas.height -10;
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(P_x,P_y,50,10);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

/*===============Key操作===============＝*/

//ボタンが押される前の初期値
var rightPressed = false;
var leftPressed = false;

var UPPressed = false;
var DownPressed = false;





//キーボードのいずれかのキーに対してkeydownイベントkeyHandlerが発生し
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "d" || e.key == "ArrowRight") {
        rightPressed = true;
    }else if(e.key == "a" || e.key == "ArrowLeft") {
        leftPressed = true;
    }else if(e.key == "w" || e.key == "ArrowUp"){
        UPPressed = true;
    }else if(e.key == "s" || e.key == "ArrowDown"){
        DownPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "d" || e.key == "ArrowRight") {
        rightPressed = false;
    }else if(e.key == "a" || e.key == "ArrowLeft") {
        leftPressed = false;
    }else if(e.key == "w" || e.key == "ArrowUp"){
        UPPressed = false;
    }else if(e.key == "s" || e.key == "ArrowDown"){
        DownPressed = false;
    }
}


/*===============canvas内の全体にかかる===============*/
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;
    if(y > canvas.height || y < 0) {
        dy = -dy;
    }
    if(x > canvas.width ||  x < 0){
        dx = -dx
    }
    if( x > P_x   &&  x < P_x+50   &&  y > P_y  &&  y < P_y +10 ){
        dy = -dy;

    }

    if(y < canvas.height){
        //GAMEプレイ中
    }else{
        //GAME終了ｄ
        alert("GAME OVER");
        document.location.reload();
    }






    if(rightPressed &&　P_x < canvas.width-50){P_x += 1;}
    else if(leftPressed && P_x > 0){P_x -= 1;}
    else if(UPPressed && P_y > 0){P_y -= 1;}
    else if(DownPressed && P_y < canvas.height -10){P_y +=1;}


}
setInterval(draw,1);
