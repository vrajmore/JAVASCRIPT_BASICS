// window is a object created by your browser with is already know by the javascript
// console.log(), alert(), prompt() are also a part of window object
// console.log() --> prints
// console.dir() --> prints methods and properties of documents
// window.document --> document consist of whole html file
// document.body --> document consist of body which has code written in body tag (html)
// document.head --> document consist of head which has code written in head tag (html)

console.log("getelementbyid");
let head = document.getElementById("heading");              //used to target html tag using its id(value of heading is stored in head variable)
console.log(head);
console.dir(head);

console.log("getelementbyclassname");
let para = document.getElementsByClassName("para");         //used to target html tag using its class(value of paragraph is stored in para variable)
console.log(para);
console.dir(para);

console.log("getelementbytagname");
let paragraph = document.getElementsByTagName("p");         //used to get all elements with the defined tag(in this case p) and stored it in variable paragraph
console.log(paragraph);
console.dir(paragraph);


// query selectors

console.log("query selector");
let elementtag = document.querySelector("p");               //queryselector will give you the first element of the tag you have given(in this case p)
console.dir(elementtag);

console.log("queryselectorall");
let element1tag = document.querySelectorAll("p");           //queryselectorall will give you all the elements of the tag you have given(in this case p)
console.dir(element1tag);


console.log("query selector using class");
let elementclass = document.querySelector(".para");         //queryselector will give you the first element of the class using .(dot) you have given(in this case class para)
console.dir(elementclass);


console.log("query selector using id");
let elementid = document.querySelector("#button");          //queryselector will give you the first element of the id using #(hashtag) you have given(in this case id button)
console.dir(elementid);


// properties[tagName, innerText, innerHtml, textContent]


let div = document.querySelector("div");                    //stored div tag of html document in side div-variable
console.dir(div);

// innertext property
console.log(div.innerText);                                 //innerText property is used to show text content of the element(does not consist html tags)

// innerHtml property
console.log(div.innerHTML);                                 //innerHtml property is used to show html code of the element(contains all html tags along with strings)

// TextContent property
console.log(div.textContent);                               //textContent works similar as innerText but can also show text of hidden(visiblity="hidden") elements