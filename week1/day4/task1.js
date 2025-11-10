function Rectangle(length,width){
  let area = length * width;
    return area;

}
//calling the function and displaying result
let length = 10;
let width = 5;
let result = Rectangle(length, width);
console.log("The area of the rectangle is: " + result);
