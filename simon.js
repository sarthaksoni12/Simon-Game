// This is a JS file for the Simon Game
let gameseq=[];
let userseq=[];

let started = false;
let level = 0;

let color =["yellow","blue", "red", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is activated ");
        started = true;

        levelup();
    }
});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};


function levelup(){
    level++;
    h2.innerText = `Level ${level}`;


    let randidx = Math.floor(Math.random() * 3);
    let randcolor = color[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randbtn);
    // console.log(randidx);
    // console.log(randcolor);

    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
};


function checkans(idx){
if(userseq[idx] === gameseq[idx]){
    if(gameseq.length === userseq.length){
       setTimeout(levelup, 1000);
    }
}else{
    h2.innerText = `game is over press any key to start `;
}
} 


function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress)
};