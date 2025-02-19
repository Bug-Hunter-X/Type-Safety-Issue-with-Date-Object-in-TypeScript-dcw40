# TypeScript Type Safety Issue with Date Object

This repository demonstrates a subtle bug related to type safety when using the `Date` object in TypeScript.  The bug doesn't always produce a compile-time error but might lead to runtime errors or unexpected behavior under specific conditions.

## The Bug

The `greet` function appears to be correctly typed. However, there's a potential problem if the function is used in a situation where a value that isn't a true Date object is passed as the `date` argument, this will lead to a runtime error if the toDateString method is called on a non-Date object.

## The Solution

The solution involves adding a more robust type check to ensure the argument passed to the `greet` function is indeed a `Date` object, using a type guard. Alternatively, using optional chaining will prevent runtime errors if the `date` argument is not a Date object, at the expense of not having the date logged to the console.

## How to Run

1. Clone the repository
2. Run `tsc bug.ts` and `tsc bugSolution.ts` to compile.
3. Run `node bug.js` and `node bugSolution.js` to see the code in action.

