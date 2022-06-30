// Area and perimeter of different shapes

const area_square = (side) => {
  return side * side;
};

const area_perimeter = (side) => {
  return 4 * side;
};

const circle_area = (rad) => {
  return Math.PI * rad * rad;
};

const circle_perimeter = (rad) => {
  return 2 * Math.PI * rad;
};

const circle_diameter = (rad) => {
  return 2 * rad;
};

const cube_area = (side) => {
  return side * side * side;
};

const cube_surface_area = (side) => {
  return 6 * side * side;
};

const calculate_square = (arr, logic) => {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    out.push(logic(arr[i]));
  }
  return out;
};

const calculate_circles = (arr, logic) => {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    out.push(logic(arr[i]));
  }
  return out;
};

const calculate_cube = (arr, logic) => {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    out.push(logic(arr[i]));
  }
  return out;
};

Array.prototype.calculation_square = function (logic) {
  let out = [];
  for (let i = 0; i < this.length; i++) {
    out.push(logic(this[i]));
  }
  return out;
};

module.exports = {
  area_square,
  area_perimeter,
  circle_area,
  circle_diameter,
  circle_perimeter,
  calculate_circles,
  calculate_square,
  calculate_cube,
  cube_surface_area,
  cube_area,
};
