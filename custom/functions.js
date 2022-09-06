function dbg(peramiters){
    var message = "";
    for(var i=0; i<peramiters.length; i++){
        message += peramiters[i] + " ";
    }
    $("#console").append(message + "<br>");
}

function opentab(peramiters){
    window.open(peramiters[0], "_blank");
}

function alr(peramiters){
    alert(peramiters[0]);
}

function input(peramiters){
    var text = prompt(peramiters[0]);
    setReg(5, text);
}

registerFunction("opentab", opentab);
registerFunction("inp", input);
registerFunction("alert", alr);
registerFunction("dbg", dbg);
