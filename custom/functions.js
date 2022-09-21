var utils = new Map();
//Print function. Prints peramtiers to console.
function dbg(peramiters){
    var message = "";
    for(var i=0; i<peramiters.length; i++){
        message += peramiters[i] + " ";
    }
    $("#console").append(message + "<br>");
}
utils.set("dbg", dbg);

//Send an alert
function alr(peramiters){
    var text = "";
    for(var i=0; i<peramiters.length; i++){
        text += peramiters[i] + " ";
    }
    alert(text);
}
utils.set("alert", alr);

//Open a inputbox
function input(peramiters){
    var text = "";
    for(var i=0; i<peramiters.length; i++){
        text += peramiters[i] + " ";
    }
    var message = prompt(text);
    setReg(5, message);
}
utils.set("inp", input);

registerLibrary("utils", utils);

//registerFunction("dbg", dbg);
