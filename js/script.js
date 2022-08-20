// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<12 || num>2000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 12 and 2000.`;
    } else {
        // Remove Leading Zeros
        num = parseInt(num);
        txt += `You have entered the number ${num}. <p>`;
        txt += `Perimeter is ${intRightTriangles(num)} for the maximum number of solutions.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Calculate the Number of Solutions for Perimeter p
function numSolutions(p) {
    let counter = 0;
    for (let side1=Math.floor(p/4); side1<p/2;side1++) {
        let side2 = p * (p-2*side1)/(2*p-2*side1);
        if (side1 > side2 && Number.isInteger(side2)) counter ++;
    }
    return counter;
}

/*
    Function to Return Perimeter with the Maximum Number of Solutions
    intRightTriangles(500)  returns 420
    intRightTriangels(800)  returns 720
    intRightTriangles(900)  returns 840
    intRightTriangles(1000) returns 840
*/
function intRightTriangles(n) {
    let bestP = 0, mostSolutions = 0;
    for (let p=12;p<n;p++) {
        if (p%3===1) continue;
        const numSolutionsP = numSolutions(p);
        if (numSolutionsP > mostSolutions) {
            bestP = p;
            mostSolutions = numSolutionsP;
        }
    }
    return bestP;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}