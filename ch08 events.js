// Events

let a = 1;
let btn1 = document.querySelector("#btn1");             //button1 was targeted by using id
btn1.onclick = function(evt){                           //event for click was deployed in targeted button and function was created, (evt argument inside function gives properties such as x and y cordinates, event-type,etc)
    console.log(evt);                                   //can use evt properties for getting x and y cordinates of click, type of event, etc
    console.log("single click");
    console.log(a);
    a++;
};

let b = 1;
let btn2 = document.querySelector("#btn2");             //button2 was targeted by using id
btn2.ondblclick = () =>{                                //event for doubleclick was deployed in targeted button and function(just other way to write function =>) was created
    console.log("double click");
    console.log(b);
    b++;
};

let c = 1;
let eventbox = document.querySelector("#eventbox");     //box was targeted by using id
eventbox.onmouseover = function(evt){                   //event for mousehover was deployed on targeted box and function was created
    console.log("mouse hover");
    console.log(c);
    console.log(evt);
    c++;
};


// event listeners                                      //node.addEventListner("eventname", callback_function())

btn1.addEventListener("click", function(){              //event_listeners are another way to trigger event(advantage = can trigger multiple functions on same trigger event)            
    console.log("hello from button1");
});