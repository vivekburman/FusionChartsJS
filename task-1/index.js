"use strict";
let btnDiv1Set = document.getElementById("btn-div-1-set");
let btnDiv1UnSet = document.getElementById("btn-div-1-unset");
let btnDiv2Set = document.getElementById("btn-div-2-set");
let btnDiv2UnSet = document.getElementById("btn-div-2-unset");

// get head from HTMLCollection Array
let head = document.getElementsByTagName("head")[0];


// Create a style element and append to head tag
let style = document.createElement("style");
head.appendChild(style);
style.type = "text/css";

// grad style sheet property
let css = style.sheet;

// add event listener for them
let btnflag1 = false;
let btnflag2 = false;


let btn1Index = -1;
let btn2Index = -1;

btnDiv1Set.addEventListener("click", function() {
    if(!btnflag1){
        css.insertRule("#div-1 { background-color: red }");
        btnflag1=true;
    }
});
btnDiv2Set.addEventListener("click", function() {
    if(!btnflag2){
        css.insertRule("#div-2 { background-color: green }");
        btnflag2=true;
    }
});
btnDiv1UnSet.addEventListener("click", function() {
    if(btnflag1){
        Object.keys(css.cssRules).forEach((key) => {
            if(css.cssRules[key].selectorText === "#div-1"){
                css.deleteRule(key);
                btnflag1 = false;
            } 
        });
    }
});



btnDiv2UnSet.addEventListener("click", function() {
    if(btnflag2) {
        Object.keys(css.cssRules).forEach((key) => {
            if(css.cssRules[key].selectorText === "#div-2"){
                console.log(key);
                css.deleteRule(key);
                btnflag2 = false;
            } 
        });
    }
});