function createDOMNode() {
    "use strict";
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


function calculateStar(DOMObject) {
    "use strict";
    let parent = DOMObject.parentElement;
    let height = parent.clientHeight;
    let width = parent.clientWidth;

    // draw star
    let r = Math.min(width-10, height-10)/2;
    let cx = width / 2;
    let cy = height / 2;
    let outer_points = [];
    let inner_points = [];
    for(let i=0; i<360; i+=72) {
        let j = i * Math.PI / 180;
        let x = cx + r * Math.cos(j-Math.PI/2);
        let y = cy + r * Math.sin(j-Math.PI/2);
        outer_points.push({x: x, y: y});
        
        // creating mid points
        let shift = 36 * Math.PI / 180;
        x = cx + (r / 3) * Math.cos(j - Math.PI / 2 + shift);
        y = cy + (r / 3) * Math.sin(j - Math.PI / 2 + shift);
        inner_points.push({x: x, y: y });
    }
    let d = "M" + outer_points[0].x + "," + outer_points[0].y + " ";
    let turn = 1;
    for(let i = 0; i< 2*outer_points.length-1; i++) {
        let j = Math.trunc(i/2);
        if(turn === 1) {
            d += "L" + inner_points[j].x + "," + inner_points[j].y + " ";
            turn = 0;
        }
        else {
            d += "L" + outer_points[j+1].x + "," + outer_points[j+1].y + " ";
            turn = 1;
        }
    }
    d += "Z";
    DOMObject.setAttribute("d", d);
}


let args = {
    "width": "200px",
    "height": "200px",
}
let container = document.getElementById("container");
let svg = createDOMNode("svg", args);
args = {
    "fill": "rgb(255,0,255)",
}
let path = createDOMNode("path", args);
svg.appendChild(path);
container.appendChild(svg);

calculateStar(path);

