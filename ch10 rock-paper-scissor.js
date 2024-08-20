let userscore = 0;
let compscore = 0;

comps = document.querySelector("#comp_s");
users = document.querySelector("#user_s");

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");

gencompchoice = () =>{
    let options = ["rock","paper","scissor"];
    let randomindex = Math.floor(Math.random()*3);
    return options[randomindex];
};

playgame = (choiceid)=>{
    console.log("game user choice",choiceid);
    let compchoice = gencompchoice();
    console.log("game comp choice",compchoice);

    if(choiceid == compchoice){
        console.log("game draw");
        message.innerText = "Game Draw";
        message.style.backgroundColor = "yellow";
    }else{
        let userwin =true;
        if(choiceid == "rock"){
            if(compchoice == "paper"){
                userwin = false;
            }
        }else if(choiceid == "paper"){
            if(compchoice == "scissor"){
                userwin = false;
            }
        }else if(choiceid == "scissor"){
            if(compchoice == "rock"){
                userwin = false;
            }
        }
        if(userwin){
            console.log("you win");
            message.innerText = `You Win [you:-${choiceid}, computer:-${compchoice}]`;
            message.style.backgroundColor = "green";
            userscore++;
        }else{
            console.log("you lose");
            message.innerText = `You Lose [you:-${choiceid}, computer:-${compchoice}]`;
            message.style.backgroundColor = "red";
            compscore++;
        }
        comps.innerText = compscore;
        users.innerText = userscore;
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let choiceid = choice.getAttribute("id");
        playgame(choiceid);
    });
});