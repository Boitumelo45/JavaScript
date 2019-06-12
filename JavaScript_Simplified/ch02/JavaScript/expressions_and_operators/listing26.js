var point = {
      x: 1,
      y: 2
}

//define setters
Object.defineProperty(point, "add", {
      get : function () {
            return (this.x + this.y)
      }
})

console.log(point.add);
