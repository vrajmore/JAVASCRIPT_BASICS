let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#rst");
let msgbox = document.querySelector(".msgcontainer");

let turnO = true;
let winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        msgbox.classList.add("hide");
        msgbox.innerText = "";
    }
})

function checkwinner() {
    for (let i = 0; i < winning.length; i++) {
        let pos1 = boxes[winning[i][0]].innerText;
        let pos2 = boxes[winning[i][1]].innerText;
        let pos3 = boxes[winning[i][2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                msgbox.innerText = "winner is "+pos1;
                msgbox.classList.remove("hide");
                for(let box of boxes){
                    box.disabled = true;
                }
            }
        }
    }
}