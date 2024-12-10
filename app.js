let buttons=document.querySelectorAll(".buttons");
let btn=document.getElementById("newGame");
let msg=document.getElementById("msg");
btn.addEventListener("click",()=>{
    window.location.reload();
})
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let turnO=true;
let count=0;
buttons.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(turnO){
            val.innerHTML="o";
            turnO=false;
        }
        else{
            val.innerHTML="x";
            turnO=true;
        }
        val.disabled=true;
        checkWinner();
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            msg.innerHTML="GAME IS DRAW!";
        }
    });
   
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
     let pos1= buttons[pattern[0]].innerText;
     let pos2= buttons[pattern[1]].innerText;
     let pos3= buttons[pattern[2]].innerText;
     if(pos1 !=="" && pos2 !=="" && pos3!==""){
      if(pos1==pos2 && pos2==pos3){
        msg.innerHTML=`Winner is ${pos1}`;
      }
        }
}
}
