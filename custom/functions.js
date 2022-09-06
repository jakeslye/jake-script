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
    var text = "";
    for(var i=0; i<peramiters.length; i++){
        text += peramiters[i] + " ";
    }
    alert(text);
}

function input(peramiters){
    var text = "";
    for(var i=0; i<peramiters.length; i++){
        text += peramiters[i] + " ";
    }
    var message = prompt(text);
    setReg(5, message);
}

function rad(peramiters){
    run("dbg " + peramiters[0])
}

registerFunction("opentab", opentab);
registerFunction("inp", input);
registerFunction("alert", alr);
registerFunction("dbg", dbg);
registerFunction("rad", rad);
