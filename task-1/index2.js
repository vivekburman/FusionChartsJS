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
function checkStatus(div) {
    return Object.keys(css.cssRules).find((key) => {
        return css.cssRules[key].selectorText == div;
    });
}

function addColor(div, color) {
    return function () {
        if(checkStatus(div)===undefined){
            css.insertRule(div+"{background-color:"+ color +"}");
        }
    }
}

function removeColor(div) {
    return function () {
        let index = checkStatus(div);
        if(index) {
            css.deleteRule(index);
        }
    };
}

btnDiv1Set.addEventListener("click", addColor("#div-1", "red"));
btnDiv2Set.addEventListener("click", addColor("#div-2", "green"));
btnDiv1UnSet.addEventListener("click", removeColor("#div-1"));
btnDiv2UnSet.addEventListener("click", removeColor("#div-2"));