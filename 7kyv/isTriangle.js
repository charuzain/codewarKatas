// Is Triangle
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


const isTriangle = (a,b,c)=>a + b > c && a + c > b && b + c > a ? true : false;

// the sum of any 2 sides of a triangle must be greater than the measure of the third side.This rule must be satisfied for all 3 conditions of the sides.

console.log(isTriangle(4,2,3));