# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: stack overflow due to uncontrolled recursion.  The `bug.js` file contains a recursive function that lacks a proper base case for large inputs, causing the program to crash.

The solution, in `bugSolution.js`, addresses the issue by adding a check to prevent excessive recursion.