function dbg(peramiters){
    $("#console").append(peramiters[0] + "<br>");
}

function alr(peramiters){
    alert(peramiters[0]);
}

registerFunction("alert", alr);
registerFunction("dbg", dbg);
