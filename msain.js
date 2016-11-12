function random () {
return String(Math.floor(Math.random() * 100))+'%';

}

function Dancer (top, left) {
  var dancer = {};
  dancer.top = top;
  dancer.left = left

  return dancer;
}
dancer = Dancer(random(), random());
console.log(dancer);
