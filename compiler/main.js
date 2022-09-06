var functions = new Map();
var LANG_INSTRUCTIONS = ["set", "com", "mov", "add", "sub", "jmp"]
var registers = [0, 0, 0, 0];
var offset = 0;
/*
  0 - add
  1 - subtraction
  2 - multiply
  3 - division
*/
var debugging = $("#debugging").is(":checked");
var logs = $("#logs").is(":checked");

function run(code){
  debugging = $("#debugging").is(":checked");
  logs = $("#logs").is(":checked");
  registers = [0, 0, 0, 0];
  var lines = code.split('\n');
  var instructionsRun = 0;
  //check code
  for(var i=0; i<lines.length; i++){
    if(lines[i].startsWith("//")){
      lines.splice(i, 1);
      i--;
    }
  }

  //run code
  for(var i = offset;i < lines.length;i++){
    instructionsRun++;
    if(debugging) debug(`<br> lines[${i}]: ${lines[i]}`);
    var line = splice(lines[i]);
    if(LANG_INSTRUCTIONS.includes(line.instruction)){
      if(line.instruction == "add"){
        registers[0] = Number(line.peramiters[0]) + Number(line.peramiters[1]);
      }
      if(line.instruction == "sub"){
        registers[1] = line.peramiters[0] - line.peramiters[1];
      }
      if(line.instruction == "mult"){
        registers[2] = line.peramiters[0] * line.peramiters[1];
      }
      if(line.instruction == "div"){
        registers[3] = line.peramiters[0] / line.peramiters[1];
      }
      if(line.instruction == "set"){
        //Set
        i = Number(line.peramiters[0])-2;
      }
      if(line.instruction == "jmp"){
        //Jump
        i += Number(line.peramiters[0])-1;
      }
      if(line.instruction == "com"){
        //Compare
        if(line.peramiters[0] != line.peramiters[1]){
          i += 1;
        }
      }
      if(line.instruction == "mov"){
        //Move
        if(line.peramiters[1] > 4){
          registers[line.peramiters[1]] = line.peramiters[0];
        }else{
          debug("<b>FAIL: </b> Attempted to move a value into a math register. Line: " + i);
          break;
        }
      }
      if(logs || debugging) debug(`(${instructionsRun}) <b>PASS:</b> ${line.instruction} | Line: ${i}`);
    }else{
      if(functions.has(line.instruction)){
        functions.get(line.instruction)(line.peramiters);    
        if(logs || debugging) debug(`(${instructionsRun}) <b>PASS:</b> ${line.instruction} | Line: ${i}`);
      }else{
        debug("<b>FAIL:</b> Undefined function: " + line.instruction + " | Line: " + i);
        break;
      }
    }
  }
}

function registerFunction(name, callback){
  functions.set(name, callback);
}

function setReg(reg, value){
  registers[reg] = value;
}

function getReg(reg){
  return registers[reg];
}

function debug(text){
  $("#debug").append(text + "<br>");
}

function splice(script){
  var instruction = "";
  var peramiters = [];
  for(var i = 0; i < script.length; i++) {
    if(script.charAt(i) != " "){
      instruction+= script.charAt(i);
    }else{
      var length = 0;
      peramiters[length] = "";
      for(var j = i; j < script.length; j++) {
        if(script.charAt(j) != " "){
          peramiters[length-1] += script.charAt(j);
        }else{
          length++;
          peramiters[length] = "";
        }
      }
      peramiters.pop();
      break;
    }
  }
  
  for(var i=0; i<peramiters.length; i++){
    if(peramiters[i].startsWith("r!")){
      peramiters[i] = registers[Number(peramiters[i].substring(2))]
    }
    if(debugging) debug(`peramiters ${i}: ${peramiters[i]}`);
  }
  return {instruction: instruction, peramiters: peramiters};
}
