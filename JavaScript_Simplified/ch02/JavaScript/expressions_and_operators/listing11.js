

function Point(x,y){
  this.x = x
  this.y = y
  this.x1 = -2*x
  this.y1 = -2*y
}

Point.prototype.distance = function(){
    return Math.sqrt(Math.pow((this.x - this.x1), 2) + Math.pow((this.y - this.y1), 2))
}

Point.prototype.display = function () {
  console.log("x1 = " + this.x + ", y1 = " + this.y + ", x2 = " + this.x1 + ", y2 = " + this.y1);
  return [this.x, this.x1, this.y, this.y1]
}


//instantiation
var p = new Point(1.35,2)
console.log("Distance between: (" + p.display() + ") is " + p.distance().toFixed(3));
