+ Question_1/
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer: B


 Write your explanation here:You declared a variable called greeting, but then you attempted to assign an empty object to a variable called greetign. Because of this typo, the correct variable (greeting) remains undefined.

+ Question B/
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer: C


Write your explanation here:therefor you use the + operator with a string and a number, JavaScript will ensure to convert the number to a string and perform string Confluence rather than mathematical addition. In this case, it will treat 1 as a string and Compilation it with "2", resulting in the string "12".

+ Question 3/
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A: ['🍕', '🍫', '🥑', '🍔']


Write your explanation here:this reassignment only affects the info object and not the original food array. Arrays and objects are different data types in JavaScript, and changing the value of a property in an object does not affect the contents of an array.

So, the food array remains unchanged, and when you log it, you will get

+ Question 4/
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B: Hi there, undefined


Write your explanation here:he sayHi function expects a name parameter, which is used to create a greeting message. However, when you call the function sayHi() without providing an argument, you are essentially passing undefined as the value for the name parameter.

So, the function will execute, but since name is undefined,

+ Question 5/
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer: C:3


Write your explanation here:
Here's what happens in the forEach loop:

a-When num is 0, it is falsy, so count remains 0.
b-When num is 1, it is truthy, so count is incremented by 1 to become 1.
c-When num is 2, it is truthy, so count is incremented by 1 again to become 2.
d-When num is 3, it is truthy, so count is incremented by 1 again to become 3.
After the loop, the value of count is 3.