var c;
var ctx;

var render = new Map();

function setup(peramiters){
    $("#console").append(`<div aria-disabled="true" style="text-align: center;">
                            <canvas id="canvas" width="200" height="100" style="border:1px solid #000000;"></canvas>
                         </div>`);
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
}
render.set("render.setup", setup);

function draw(peramiters){
    ctx.beginPath();
    ctx.fillStyle = peramiters[4];
    ctx.rect(peramiters[0], peramiters[1], peramiters[2], peramiters[3]);
    ctx.fill();
}
render.set("render.draw", draw);

registerLibrary("render", render);
