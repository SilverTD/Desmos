var Vector = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};

// return the angle of the vector in radians
Vector.prototype.getDirection = function() {
	return Math.atan2(this.y, this.x);
};

// set the direction of the vector in radians
Vector.prototype.setDirection = function(direction) {
	var magnitude = this.getMagnitude();
  this.x = Math.cos(direction) * magnitude;
  this.y = Math.sin(direction) * magnitude;
};

// get the magnitude of the vector
Vector.prototype.getMagnitude = function() {
	// use pythagoras theorem to work out the magnitude of the vector
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

// get distance from two vectors
Vector.prototype.getDistance = function(v2) {
	// use pythagoras theorem to work out the magnitude of the vector
	return Math.sqrt(
                Math.pow(this.x - v2.x, 2) + Math.pow(this.y - v2.x, 2)
        );
};

// set the magnitude of the vector
Vector.prototype.setMagnitude = function(magnitude) {
	var direction = this.getDirection();
	this.x = Math.cos(direction) * magnitude;
	this.y = Math.sin(direction) * magnitude;
};

// get the angle between this vector and another
Vector.prototype.angleBetween = function(v2){
  return Math.atan2(this.y, this.x) - Math.atan2(v2.y,  v2.x);
}

// add two vectors together and return a new one
Vector.prototype.add = function(v2) {
	return new Vector(this.x + v2.x, this.y + v2.y);
};

// add a vector to this one
Vector.prototype.addTo = function(v2) {
	this.x += v2.x;
        this.y += v2.y;
};

// subtract two vectors and reutn a new one
Vector.prototype.subtract = function(v2) {
	return new Vector(this.x - v2.x, this.y - v2.y);
};

// subtract a vector from this one
Vector.prototype.subtractFrom = function(v2) {
	this.x -= v2.x;
        this.y -= v2.y;
};

// multiply this vector by a scalar and return a new one
Vector.prototype.multiply = function(scalar) {
  return new Vector(this.x * scalar, this.y * scalar);
};

// multiply this vector by the scalar
Vector.prototype.multiplyBy = function(scalar) {
  this.x *= scalar;
  this.y *= scalar;
};

// scale this vector by scalar and return a new vector
Vector.prototype.divide = function(scalar) {
  return new Vector(this.x / scalar, this.y / scalar);
};

// scale this vector by scalar
Vector.prototype.divideBy = function(scalar) {
  this.x /= scalar;
  this.y /= scalar;
};

//get the dot product of this vector and another
Vector.prototype.dot = function(v2){
    return this.x * v2.x + this.y * v2.y;
}

//Normalize this vector
Vector.prototype.normalize = function(){
    var d = Math.sqrt(this.x*this.x + this.y*this.y)
    this.x = this.x/d
    this.y = this.y/d
}

//Return normalized vector
Vector.prototype.normalized = function(){
    var d = Math.sqrt(this.x*this.x + this.y*this.y)

    return(new Vector(this.x/d, this.y/d))
}

Vector.prototype.reflectThrough = function(axisVector){

  var dotProduct = this.dot(axisVector)
  var insideMultiplied = axisVector.multiply(2 * dotProduct)
  var resultingAngle = this.subtract(insideMultiplied)

  this.x = resultingAngle.x * 1
  this.y = resultingAngle.y * 1
}

// Aliases
Vector.prototype.getLength = Vector.prototype.getMagnitude;
Vector.prototype.setLength = Vector.prototype.setMagnitude;

Vector.prototype.getAngle = Vector.prototype.getDirection;
Vector.prototype.setAngle = Vector.prototype.setDirection;

// Utilities
Vector.prototype.copy = function() {
  return new Vector(this.x, this.y);
};

Vector.prototype.compare = function(v) {
  return (this.x === v.x && this.y === v.y);
};

Vector.prototype.toString = function() {
  return 'x: ' + this.x + ', y: ' + this.y;
};

Vector.prototype.toArray = function() {
  return [this.x, this.y];
};

Vector.prototype.toObject = function() {
  return {x: this.x, y: this.y};
};
