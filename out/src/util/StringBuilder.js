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
  values[current] += values[other];
}

function size(current) {
  return values[current].length;
}
