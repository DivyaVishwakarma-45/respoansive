let boxes= document.querySelectorAll(".box");
let resentBtn=document.querySelector("#reset-btn");
let magContainer=document.querySelector(".mag-container");
let newBtn=document.querySelector("#new-btn");
let mag=document.querySelector("#mag");
let turn0=true //playerX and player0
//3D array
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    magContainer.classList.add("hide");
}
// eventlisner on each boxes
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     if(turn0===true)   {
        box.innerText="O";//player0
        turn0=false;
     }
     else{
        box.innerText="X"//playerX
        turn0=true;
     }
     box.disabled=true;

     chackWinner();
    })
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }}
const showWinner=(winner)=>{
    mag.innerText=`congaraluation you are winner ${winner}`
    magContainer.classList.remove("hide");
    disableBoxes();
}
const chackWinner=()=>{
    for(let pattern of winpatterns ){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
     
    if(pos1val!="" &&pos2val!="" &&pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
         console.log("winner",pos1val);
         showWinner(pos1val);
        }
      }

    }
    
};
resentBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);