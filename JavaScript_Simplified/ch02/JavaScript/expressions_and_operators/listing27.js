var cartesian_plane = {
      point1: {
            x: 1,
            y: 6
      },
      point2:{
            x:10,
            y:2
      }
}

//define getters
//compute distance
Object.defineProperty(cartesian_plane, "distance", {
      get : function () {
            return Math.sqrt(Math.pow(this.point1.x - this.point2.x, 2) + Math.pow(this.point1.y - this.point2.y, 2))
      }
})
//reset point values
Object.defineProperty(cartesian_plane, "reset", { get: function(){
      this.point1.x = 0, this.point1.y = 0, this.point2.x = 0, this.point2.y = 0
}})

//display values
Object.defineProperty(cartesian_plane, "display", {
      get: function(){
            console.log("Points: ( " + this.point1.x + ", " + this.point1.y + " )" + "( " + this.point2.x + ", " + this.point2.y + " )");
      }
})

//define setters
Object.defineProperty(cartesian_plane, "points", {
      set : function(list){
            this.point1.x = list[0], this.point1.y = list[1],
            this.point2.x = list[2], this.point2.y = list[3]
      }
})
cartesian_plane.display
console.log(cartesian_plane.distance);
cartesian_plane.reset
cartesian_plane.points = [15, 2, 3, 4]
cartesian_plane.display
console.log(cartesian_plane.distance);
