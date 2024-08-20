let div = document.querySelector("div");                        //calling div tag and stored it in div-variable
console.log(div);

// Attributes

// get attribute
let id = div.getAttribute("id");                                //it will call the id attribute and store the value of id in id-variable
console.log(id);

let name = div.getAttribute("name");                            //it will call the name attribute("name" is a custom attribute) and store it in name-variable
console.log(name);

// set attribute
div.setAttribute("name", "JSdivchanged");                       //can change the value of the attribute(in this case value of "name" is changed to "JSdivchanged")

name = div.getAttribute("name");                                //will rechange the value as it is updated
console.log(name);


// Style attribute
console.log(div.style);
div.style.backgroundColor = "pink";                             //style attribute is used to change backgroundColor of css style of div to pink

div.style.fontSize = "20px";                                    //style attribute is used to change fontSize of css style of div to 20px


// Insert element
let newbtn = document.createElement("button");                  //new button create using javascript and stored it as "newbtn" variable
newbtn.innerText = "clickme";                                   //text is added to "newbtn"

div.append(newbtn);                                             //used to add element(newbtn) inside div at the last
div.prepend(newbtn);                                            //used to add element(newbtn) inside div at the starting
div.before(newbtn);                                             //used to add element(newbtn) before div starts
div.after(newbtn);                                              //used to add element(newbtn) after div ends

// remove/delete element
newbtn.remove();                                                //used to remove element