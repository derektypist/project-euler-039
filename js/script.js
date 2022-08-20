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
        txt += `Perimeter is ${intRightTriangles(num)} for maximum number of solutions.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}