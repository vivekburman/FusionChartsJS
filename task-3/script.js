"use strict";
function createDOMNode() {
    const xlmns_svg = 'http://www.w3.org/2000/svg';
    let nodeName = arguments[0];
    let attrbutes = arguments[1];
    if(typeof nodeName !== "string") {
        throw new TypeError("nodeName should be a string Object");
    }
    nodeName = nodeName.toLowerCase();
    let node = document.createElementNS(xlmns_svg, nodeName);
    for(let property in attrbutes) {
        node.setAttribute(property, attrbutes[property]);
    }
    return node;
}

function calculateStar(DOMObject, numberOfBlades=5) {
    let parent = DOMObject.parentElement;
    let height = parent.clientHeight;
    let width = parent.clientWidth;

    // draw star
    let r = Math.min(width, height)/2;
    let cx = width / 2;
    let cy = height / 2;
    let separation = 360 / (2 * numberOfBlades);
    let d = null;
    for(let i=0, m=0; i<360; i+=separation, m++) {
        let j = i * Math.PI / 180 - Math.PI / 2;
        let x = 0;
        let y = 0; 
        let x_displaced = r * Math.cos(j);
        let y_displaced = r * Math.sin(j);
        if(m===4 || m===6)  {
            x = cx + x_displaced;
            y = cy + r * Math.sin(j) * 1.1151;
        }
        else if(m%2 == 0) {
            x = cx + x_displaced;
            y = cy + y_displaced;
        }
        else{
            x = cx + x_displaced / 3;
            y = cy + y_displaced / 3;
        }
        if(m==0) {
            d = "M";
        }
        else {
            d += "L";
        } 
        d += x + "," + y + " ";   
    }
    d += "Z";
    DOMObject.setAttribute("d", d);
}


let args = {
    "width": "222px",
    "height": "333px",
}
console.log(args);
let container = document.getElementById("container");
let svg = createDOMNode("svg", args);
args = {
    "fill": "rgb(255,0,255)",
    "stroke-width": "2",
    "stroke": "black"
}
console.log(args);
let path = createDOMNode("path", args);
container.appendChild(svg);
svg.appendChild(path);
calculateStar(path,5);

