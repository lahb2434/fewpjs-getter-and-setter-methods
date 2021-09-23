// Add your Circle class here
class Circle {
constructor(radius) {
  this.radius = radius
}

get diameter() {
  return this.radius * 2
}

set diameter(num) {
   this.radius = num / 2
}

get circumference() {
  return this.diameter * Math.PI
}

set circumference(num) {
  this.diameter = num / Math.PI 
}

get area() {
  return (this.radius**2) * Math.PI
}

set area(num) {
   this.radius =  Math.sqrt(num/Math.PI)
}

}