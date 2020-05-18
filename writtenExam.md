## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples, explanations, and potential use cases. Write your answer below and use markdown to format your text.

`.forEach`:
This is a method that calls on each item inside an array. `.forEach`loop will run as many times as there are items inside the array (whereas `for`, you will need to specify howm many times you want it to run).
Example: `const animals = [‘cat’, ‘dog’, ‘sunny’];
const copy = [];
animals.forEach(animal => { copy.push(animal) });`

`.map` :
map is a collection of elements where each element is stored as a key, value pair. It "maps out" the results.

`.filter`: You can user this method when you want to filter certain element from the array in a clean way.

Let's say you want to search which cities has a population greater than 3million, you could `.filter` the array instead of a `for loop`, then you will do like this: 
Example: `let bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});`

`.find` :
This method is a convenient way to find and return the first occurence of an element in an array.Very similar to `.filter` except that it returns a single element. So if you need a single value use `.find` but for multiple values using `.filter` is best.

Example: `const trees = [ 
  "birch", 
  "maple", 
  "oak", 
  "poplar" 
];

const result = trees.find(tree => tree.startsWith("m"));

// "maple"`



