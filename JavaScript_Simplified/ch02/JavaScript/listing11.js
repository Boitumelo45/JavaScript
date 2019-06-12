/*
Class Distance
*/
function Distance(x1, y1, x2, y2){
  //parametirization initialization
  this.x1  = x1; this.y1 = y1; this.x2 = x2; this.y2 = y2;
};

/*
class method
*/
Distance.prototype.s = function(){
  return Math.sqrt(Math.pow(this.x1 - this.x2, 2) + Math.pow(this.y1 - this.y2, 2));
}

/*instantiation*/
var distance = new Distance(0,0,1,1);
console.log(distance.s());
