var counter = 0;
var values = [];

function construct(value){
  values[counter] = value;
  return counter++;
}

function construct(){
  construct("");
}

function +(current, other){
  var otherValue = values[other];
  values[current] += otherValue;
}

function size(current) {
  return values[current].length;
}
