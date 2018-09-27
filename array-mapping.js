var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
];

var result = input.map(function(value) {
    var zSquared = (value.x * value.x) + (value.y * value.y);
    return Math.sqrt(zSquared); 
});
  
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// KEEPING FOR LATER

// var input = {
//     x: 3, y: 4
// };

// var newFunction = function(values) {
//     //result = values.x + values.y;
//     return result;
// }

// console.log(newFunction(input));