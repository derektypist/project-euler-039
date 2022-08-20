# Project Euler 039 - Integer Right Triangles

If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p <= n, is the number of solutions maximised?

The aim is to investigate using HTML Forms and JavaScript.

Information at [Project Euler 039](https://projecteuler.net/problem=39)

## UX

**Getting Started**

Enter a whole number between 12 and 2000 (e.g. 500) and click on the Submit Button.  You will see the perimeter for the maximum number of solutions, unless you have made an invalid input.  For example, if you entered 500, you would expect the perimeter to be 420.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 12 or greater than 2000
- Entering a number that is not an integer

As a user, I expect the function `intRightTriangles(500)` to return a number.

As a user, I expect the function `intRightTriangles(500)` to return 420.

As a user, I expect the function `intRightTriangles(800)` to return 720.

As a user, I expect the function `intRightTriangles(900)` to return 840.

As a user, I expect the function `intRightTriangles(1000)` to return 840.

User Stories on function `intRightTriangles(n)` is taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 039](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-39-integer-right-triangles)

**Information Architecture**

The function `intRightTriangles(n)` returns a number, where `n` is a number.

## Features

Allows the user to enter a number as well as getting the perimeter less than or equal to the number entered.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-039) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)