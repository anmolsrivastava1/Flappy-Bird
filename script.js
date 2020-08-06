const cvs = document.getElementById('can');
const ctx = cvs.getContext('2d');

function mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

function random(){
    return Math.floor(Math.random() * 400)+1;
}

bird = new Image();
bg = new Image();
pipe = new Image();

const cross = new Audio();
cross.src="cross.mp3";
const gameOver = new Audio();
gameOver.src="gameOver.mp3";

start=false
birdCoor={
    x:170,
    y:220
}
block = [
    {x:450},
    {x:650},
    {x:850},
 
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
 document.addEventListener("keydown",(ev)=>{
    
     if(ev.keyCode==32 && start){
        console.log('space');
        //let i=0;  
        //while(i<=60){  
        //    i+=1;
        //    birdCoor.y-=1;
//
        //}
        async function jump(){
            let i=0;  
            while(i<=60){  
                if(i%6==0)
                await sleep(5);
                i+=1;
                birdCoor.y-=1;

            }
        } 
        jump();
        
        
    }
    else if(ev.keyCode==13){
        start=true;
    }
    
})


let score=0;
let hscore=0;
const r=[random(),random(),random(),random()]

let x=0;
function base(){
    
    
    //pipe.src = "pipe.png"
    bird.src= "bird.png";
    bg.src= "bg1.png";
    ctx.beginPath()
    ctx.fillStyle = "rgb(92, 179, 255)";
    ctx.fill();
    
    if(x>=450){
        x=0;
    }
    
    ctx.drawImage(bg,x,0,450,500);
    ctx.drawImage(bg,x-440,0,450,500);
    
    //ctx.fillRect(0,0,544,544);
    
  
    
    
    

    ctx.fillStyle = "rgb(61, 212, 38)";
   
    
    ctx.fillRect(block[0].x, 0, 50, r[0]);
    ctx.fillRect(block[0].x, 500, 50, -(400-r[0]));
    ctx.fillRect(block[1].x, 0, 50, r[1]);
    ctx.fillRect(block[1].x, 500, 50, -(400-r[1]));
    ctx.fillRect(block[2].x, 0, 50, r[2]);
    ctx.fillRect(block[2].x, 500, 50, -(400-r[2]));

    ctx.strokeStyle = 'black';
    ctx.strokeRect(block[0].x, 0, 50, r[0]);
    ctx.strokeRect(block[0].x, 500, 50, -(400-r[0]));
    ctx.strokeRect(block[1].x, 0, 50, r[1]);
    ctx.strokeRect(block[1].x, 500, 50, -(400-r[1]));
    ctx.strokeRect(block[2].x, 0, 50, r[2]);
    ctx.strokeRect(block[2].x, 500, 50, -(400-r[2]));

    //ctx.drawImage(pipe,block[0].x-10, 500,80, -(400-r[0]));


    //score
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.font = "40px Consolas";
    ctx.fillText(score,40,50);
    if(block[0].x+50==birdCoor.x || block[1].x+50==birdCoor.x || block[2].x+50==birdCoor.x  ){
        cross.play();
        score+=1;
    }
    
    //highscore
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.font = "35px Consolas";
    ctx.fillText("High Score:"+hscore,200,48);



    ctx.drawImage(bird, 170, birdCoor.y,30,20);
    
    if(block[0].x+50<0){
        console.log("aaaaaa");
        block[0].x=550;
        r[0]=random();
    }
    else if(block[1].x+50<0){
        console.log("aaaaaa");
        block[1].x=550;
        r[1]=random();
    }
    else if(block[2].x+50<0){
        console.log("aaaaaa");
        block[2].x=550;
        r[2]=random();
    }


    
    ctx.stroke();
  
    chk();

    if (start){
        x+=0.2;
        birdCoor.y+=3;
        block[0].x-=1;
        block[1].x-=1;
        block[2].x-=1;
    }
    else if(!mobileCheck()){
        ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.font = "20px Consolas";
    ctx.fillText("'Enter' to Start",130,100);
    ctx.fillText("'Space' to Jump",130,130);

    ctx.stroke();
    }
    //lower and upper walls collision
    if(birdCoor.y+20>500 || birdCoor.y<0){
        reset();
    
    }

    
}

setInterval(base,20);

function reset(){
    gameOver.play();
    x=0;
    if(hscore<score)
    hscore=score;
    score=0;
    start=false;
        block = [
            {x:450},
            {x:650},
            {x:850},
         
        ]
        r[0]=random();
        r[1]=random();
        r[2]=random();
        birdCoor.y=220;
       
}

function chk(){
    for(let i=block[0].x;i<=block[0].x+50;i++){
        for (let j=birdCoor.x;j<=birdCoor.x+30;j++ ){
            if(i==j){
                if(birdCoor.y<r[0] || birdCoor.y+20>r[0]+100 ){
                    reset();
                }
            }
        }

    }
    for(let i=block[1].x;i<=block[1].x+50;i++){
        for (let j=birdCoor.x;j<=birdCoor.x+30;j++ ){
            if(i==j){
                if(birdCoor.y<r[1] || birdCoor.y+20>r[1]+100 ){
                    reset();
                }
            }
        }

    }
    for(let i=block[2].x;i<=block[2].x+50;i++){
        for (let j=birdCoor.x;j<=birdCoor.x+30;j++ ){
            if(i==j){
                if(birdCoor.y<r[2] || birdCoor.y+20>r[2]+100 ){
                    reset();
                }
            }
        }

    }

}


window.addEventListener('touchstart', function(e){
    start=true;
    let i=0;    
        while(i<=60){
            i+=1;
            birdCoor.y-=1;
        }
    
}, false)
window.addEventListener('touchend', function(e){
    
    e.preventDefault();
}, false)
