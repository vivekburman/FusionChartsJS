// bind function
Function.prototype.myOwnBind = function (obj) {
    var functionToBind = this;
    return function () {
        obj.func = functionToBind;
        obj.func();
    }
}



function testingFunction() {
    console.log(this.a);
}


var o = {
    a: 222
}; 


var oTest = testingFunction.myOwnBind(o);
oTest(); 