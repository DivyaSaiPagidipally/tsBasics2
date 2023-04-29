# tsBasics2

**Write a function that takes an arbitrary number of objects as arguments and returns a new object that merges all the properties of the input objects.
The function should work as follows:**

*● If multiple input objects have a property with the same name, the value from the last object should be used.*
*● The output object should not have any properties with undefined or null values.*
*● The output object should have the same type as the first input object.*
*For example,*

const obj1 = { a: 1, b: "hello" }; const obj2 = { b: "world", c: true }; const obj3 = { c: false, d: [1, 2, 3] };
If we call function(obj1, obj2, obj3), the function should return:
{ a: 1, b: "world", c: false, d: [1, 2, 3] }
