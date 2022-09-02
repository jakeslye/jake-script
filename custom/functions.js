//varibles
// var varibles = new Map();
// function define(peramiters){
//     varibles.set(peramiters[0], peramiters[1]);
// }
// function get(peramiters){
//     registers[6] = varibles.get(peramiters[0]);
// }
// registerFunction("def", define);
// registerFunction("get", get);

function dbg(peramiters){
    $("#console").append(peramiters[0] + "<br>");
}

function alr(peramiters){
    alert(peramiters[0]);
}

function input(peramiters){
    var text = prompt(peramiters[0]);
    setReg(5, text);
}

registerFunction("inp", input);
registerFunction("alert", alr);
registerFunction("dbg", dbg);
