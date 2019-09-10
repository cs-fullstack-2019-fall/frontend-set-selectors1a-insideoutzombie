let eL = document.getElementById('special');
console.log(eL);
eL.innerText = "Boy Howdy!";

eL.style.color = "blue";
eL.style.border = "2px red solid";

console.log(eL.innerText);
console.log(eL.innerHTML);

eL.innerHTML = "<h2>Robot Stuff</h2>";

let tag = document.getElementsByTagName('body');
console.log(tag);

/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give the <body> element a background of #bdc3c7*/
// one way to do it
// let body_eL = document.getElementsByTagName('body')[0].style.backgroundColor = "#bdc3c7"
// another way to do the exact same thing as above
document.getElementsByTagName('body')[0].style.backgroundColor = "#bdc3c7"

/* Make the <h1> element #9b59b6*/
document.getElementsByTagName('h1')[0].style.color = "#9b59b6"

/* Make all <h2> elements orange */
// For loop call to pick every H2 element in the html page layout
// let h2els = document.getElementsByTagName('h2')[0].style.color = "orange"
let h2els = document.getElementsByTagName('h2');
for (let i=0; i < h2els.length; i++) {
  h2els[i].style.color = "orange"
}

/* Make all <li> elements blue(pick your own hexadecimal blue)*/
let liStuff = document.getElementsByTagName('li');
for (let x=0; x < liStuff.length; x++) {
  liStuff[x].style.color = "blue"
}

/*Change the background on every paragraph to be yellow*/
let para = document.getElementsByTagName('p');
for (let y=0; y < para.length; y++) {
  para[y].style.backgroundColor = "yellow"
}

/*Make all inputs have a 3px red border*/
let inputStuff = document.getElementsByTagName('input');
for (let z=0; z < inputStuff.length; z++) {
  inputStuff[z].style.border = "3px red solid"
}


/* Give everything with the class 'hello' a white background*/
let classStuff = document.getElementsByClassName('hello');
for (let n=0; n < classStuff.length; n++) {
  classStuff[n].style.backgroundColor = "white"
}

/* Give the element with id 'special' a 2px solid blue border(pick your own rgb blue)*/
document.getElementById("special").style.border = "blue 2px dotted";

/*Make all the <p>'s that are nested inside of divs 25px font(font-size: 25px)*/
let qsa = document.querySelctorAll("div p");
for (let t = 0; t < qsa.length;t++) {
  qsa[t].style.fontSize = "25px";
}

// Targetting classes and attributes and imgs etc to make changes

let hel = document.getElementsByTagName("html");
console.log(hel[0].getAttribute('lang'));

document.getElementById("myimg").removeAttribute("src");

document.getElementById("classtest").classlist.add("blue_class");
