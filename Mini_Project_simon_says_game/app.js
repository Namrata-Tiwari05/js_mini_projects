let gameSeq=[];
let userSeq=[];

let btns=["yellow","green","red","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started=false){
       console.log("game is started") ;
       started=true;
       levelUp();
    }

});
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    btnFlash(randbtn);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
}
let allBtns=document.querySelector(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress());
}