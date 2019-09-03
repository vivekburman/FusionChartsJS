"use strict";
function createDOMNode() {
    const xlmns_svg = 'http://www.w3.org/2000/svg';
    let nodeName = arguments[0];
    let attrbutes = arguments[1];
    let node = document.createElementNS(xlmns_svg, nodeName);
    for(let property in attrbutes) {
        node.setAttribute(property, attrbutes[property]);
    }
    return node;
}

function calculateStar(domObject, offsetWidth, offsetHeight, width, height, strokeWidth) {

    let r = Math.min(height, width) - strokeWidth;
    if(strokeWidth > r/10) {
        domObject.setAttribute("stroke-width",2);
        console.warn("StrokeWidth crossed max, setting to default");
    }
    let cx = r / 2 + offsetWidth;
    let cy = r / 2 + offsetHeight;
    let offsetX = r / 3;
    let offsetY = r / 3;
    let d = "M" + cx + "," + offsetHeight + " "
        + "L" + (cx + offsetX) + "," + (offsetHeight + offsetY) + " " //1
        + "H" + (r + offsetWidth) + " " //2
        + "L" + (cx + offsetX) + "," + (cy + offsetY / 2) + " " //3
        + "L" + (r + offsetWidth) + "," + (r + offsetHeight) + " " //4
        + "L" + cx + "," + (cy + offsetY)+ " " //5
        + "L" + offsetWidth + "," + (r + offsetHeight) + " " //6
        + "L" + (cx - offsetX) + "," + (cy + offsetY / 2) + " " //7
        + "L" + offsetWidth + "," + (offsetY + offsetHeight) + " " //8
        + "H" + (cx - offsetX) + " "//9
        + "Z";

    domObject.setAttribute("d", d);
}
function createStar(args) {
    
    let container = args["container"];
    let height= args["height"];
    let width = args["width"];
    let stroke = args["stroke"];
    let strokeWidth = args["stroke-width"];
    let fill = args["fill"];
    let direction = args["direction"];

    if(container === undefined){
        throw new Error("Number of args is not correct");
    }
    if( height <0  || height === undefined) {
        throw new Error("Height is undefined or is a negative value");
    }
    if( width <0  || width === undefined) {
        throw new Error("Width is undefined or is a negative value");
    }
    if( strokeWidth <0  || strokeWidth === undefined) {
        throw new Error("StrokeWidth is undefined or is a negative value");
    }
    if(fill === undefined) {
        throw new Error("fill is undefined or has wrong value");
    }
    if(stroke === undefined){
        throw new Error("stroke is undefined or has wrong value");
    }
    if(direction === undefined){
        direction = 1;
    }
    
    let attr_svg = {
        "width": width,
        "height": height,
    };
    let attr_path = {
        "fill": fill,
        "stroke-width": strokeWidth,
        "stroke": stroke
    };
    let svg = createDOMNode("svg", attr_svg);
    container.appendChild(svg);
    width = svg.clientWidth;
    height = svg.clientHeight;
    
    let path;
    // path = createDOMNode("path", attr_path);
    // calculateStar(path, 40, 0, width/5, height, 5);
    // svg.appendChild(path);
    for(let i=0;i<5;i++){
        path = createDOMNode("path", attr_path);
        let offset;
        if(direction === 1) {
            offset = width/5 * i + strokeWidth;
            calculateStar(path, offset, (height-width/5)/2, (width-strokeWidth*4)/5, height, strokeWidth);
        }
        else {
            offset = height/5 * i + strokeWidth;
            calculateStar(path, (width-height/5)/2, offset, width, (height -strokeWidth*4)/5, strokeWidth);
       }
       svg.appendChild(path);
    }
}

// user
let args = {
    "container": document.getElementById("container"),
    "height": "333px",
    "width": "333px",
    "fill": "red",
    "stroke": "blue",
    "direction": 1,
    "stroke-width": 10
};
createStar(args);

