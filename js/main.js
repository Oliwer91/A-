function Tile(id,xPos,yPos,xSize,ySize,ctx) {
    this.id=id;
    this.xPos= xPos;
    this.yPos =yPos;
    this.ctx = ctx;
    this.xSize = xSize;
    this.ySize= ySize;
    this.setGoal = goal;
    this.setWall = wall;
    this.setStart = start;

    this.getFx = fx;
    this.getFy = fy;

    ctx.fillStyle="#015245";
    ctx.fillRect(xPos,yPos,xSize,ySize);

    ctx.strokeStyle="black";
    ctx.strokeRect(xPos,yPos,xSize,ySize);

    this.setLeft=left;
    this.setRight=right;
    this.setUp=up;
    this.setDown=down;
    this.getNachbarn=nachbarn;

    function fx(){
        var a = this.xPos / this.xSize;
        return Math.floor(a);
    }
    function fy() {
        var a = this.yPos / this.ySize;
        return Math.floor(a);
    }

}



function setXPos(x){
    this.xPos= xPos;
}
function setYPos(x) {
    this.yPos= x;
}
function getXPos(x) {
    return this.xPos;
}

function wall(x,ctx) {
    this.wall = x;
    ctx.clearRect(this.xPos,this.yPos,xSize,ySize);

    ctx.fillStyle="#FF0000";
    ctx.fillRect(this.xPos,this.yPos,xSize,ySize);

}

function start(x,ctx){
    this.start = x;
    ctx.clearRect(this.xPos,this.yPos,xSize,ySize);

    ctx.fillStyle="#3498DB";
    ctx.fillRect(this.xPos,this.yPos,xSize,ySize);
}

function goal(x,ctx) {
    this.goal = x;
    this.wall = false;

    ctx.clearRect(this.xPos,this.yPos,xSize,ySize);

    ctx.fillStyle="#00FF00";
    ctx.fillRect(this.xPos,this.yPos,xSize,ySize);

}

function nachbarn() {
    a = [];
    if(typeof this.left==='undefined')this.left=0;
    if(typeof this.right==='undefined')this.right=0;
    if(typeof this.down==='undefined')this.down=0;
    if(typeof this.up==='undefined')this.up=0;


    if(this.left!==0){
        a.push(this.left);
    }
    if(this.right!==0){
        a.push(this.right);
    }
    if(this.up!==0){
        a.push(this.up);
    }
    if(this.down!==0){
        a.push(this.down);
    }


    return a;
}

function left(l) {
    this.left=l;
}
function right(r){
    this.right=r;
}
function up(u){
    this.up = u;
}
function down(d) {
    this.down=d;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


