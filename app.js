    let h3 = document.querySelector('h3');
    let h4 = document.querySelector('h4');
    
    let h5 = document.createElement("h5");
    h3.insertAdjacentElement("beforebegin",h5);

    let btns = ["one","two","three","four"];

    let gameSeq = [];
    let userSeq = [];

    let highestScore = 0;
  
    let started = false;
    let level = 0;

    document.addEventListener("keypress", ()=>{
    if(started == false){
        h3.innerText = "Game started";
        started = true;
        levelUp();
    }
    })

    function btnFlash(btn){ //btn flash by com
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
    }

    function userFlash(btn){ //btn flash by user
    if(started==true){
         btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },150)
    }  
    }
 

   function levelUp(){
    userSeq = []; //all things will be added from the beginning, here user seq is reset to 0 or empty array
    level++;
    h4.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 4);
    let ranCol = btns[ranIdx];
    let ranbtn = document.querySelector(`#${ranCol}`);

    gameSeq.push(ranCol);
    console.log(gameSeq);

    btnFlash(ranbtn);
}

    //matching seq check
    function checkAns(idx){
            
        if(userSeq[idx] === gameSeq[idx]){
            if(userSeq.length===gameSeq.length){
               setTimeout(levelUp, 1000); 
            }
        }
        else{
            if(level>highestScore){
            highestScore = level-1;
            h5.innerHTML = `Highest Score <b>${highestScore}</b>.`

            }

            h3.style.display = "none"
            h4.innerHTML = `Oops! Game over. Your score was <b>${level-1}.</b> <br>Press any key to start again`;


             
            reset();
        }
    }

    function btnPress(button){ //btn press by user
      if(!started) return;

        if(userSeq.length >= gameSeq.length){
        return;
}


    let btn = this; 
    userFlash(btn);
    console.log(this)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".divBtn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


//reset game
function reset(){
    started=false
    userSeq = [];
    gameSeq = [];
    level = 0;
}



