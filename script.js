// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    
// td is used for columns while tr is used for rows
let column = document.createElement("td");
let row = document.createElement("tr");
let totalGrid = document.getElementById("grid"); // getting data from our table id grid in index.html

    // If there are no rows it will add one
    if(numCols === 0){
        row.appendChild(document.createElement("td"));
        totalGrid.appendChild(row);

            if(numRows === 0){
                numCols++;
            }
        }
    // If there are already existing rows and columns then add to the existing
    else{
        for(let i = 0; i < numCols; i++){
            row.appendChild(document.createElement("td"));
        }
        totalGrid.appendChild(row);
    }

// add to the count of rows
numRows++;
// allows clicked boxes to change to specified color (tried at top but will always be one row/col off unless declared later on)
let colorClick = document.querySelectorAll("tr td");

for(let i = 0; i < colorClick.length; i++){
    colorClick[i].onclick = function(){
    this.style.backgroundColor = colorSelected;
    }
}

}

// Add a column
function addC() {
   
// td is used for columns while tr is used for rows
let column = document.createElement("td");
let row = document.createElement("tr");
let totalGrid = document.getElementById("grid"); // getting data from our table id grid in index.html
let prevRows = document.querySelectorAll("tr"); //checking if there are already rows to add alongside them

if(numRows === 0){
    row.appendChild(document.createElement("td"));
    totalGrid.appendChild(row);
    
        if(numCols === 0){
            numRows++;
        }
    }
    else{
        for(let i = 0; i < numRows; i++){
            prevRows[i].appendChild(document.createElement("td"));
        }
    }
    // add to the count of columns
    numCols++;

    // allows clicked boxes to change to specificied color
    let colorClick = document.querySelectorAll("tr td"); 

    for(let i = 0; i < colorClick.length; i++){
        colorClick[i].onclick = function(){
        this.style.backgroundColor = colorSelected;
    }
}
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    const allBoxes = document.querySelectorAll("tr td"); 
    for (let i =0 ; i < allBoxes.length; i++){
        allBoxes[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    const allBoxes = document.querySelectorAll("tr td"); 
    for (let i =0 ; i < allBoxes.length; i++){
        allBoxes[i].style.backgroundColor = 'white';
    }
}