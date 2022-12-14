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
    // remove nothing if table is empty
    if(numRows === 0 || numCols === 0)
        return;
    // remove last row
    document.getElementById('grid').deleteRow(--numRows);
    // if there are 0 rows, set col to 0 as well
    if(numRows === 0)
        numCols = 0;
}

// Remove a column
function removeC() {
    // declaration for rows
    let allRows = document.querySelectorAll("tr");

    // remove nothing if table is empty (will unevenly add boxes if not implemented)
    if(numCols > 0){ 

        if(numCols === 1){
            for(let i = numRows-1; i >= 0; i--){
                grid.removeChild(allRows[i]);
            }

        // sets Columns & Rows to 0 if removing the only/last column so the grid would be empty (same logic for the above if/for loop)
        numCols = 0;
        numRows = 0;
        }

        else{
            for(let i = numRows-1; i >= 0; i--){
                // originally attempted with .childnodes but would leave uneven rows/columns
                allRows[i].removeChild(allRows[i].lastElementChild);
            }
        // if there are multiple columns then it will simply subtract 1 from the total number of columns
        numCols--;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    // get list of all cells
    const allBoxes = document.querySelectorAll("tr td"); 
    for (let i =0 ; i < allBoxes.length; i++){
        console.log(allBoxes[i].style.backgroundColor)
        // set cell with backgroundColor of '' to selected color
        if(allBoxes[i].style.backgroundColor == "") allBoxes[i].style.backgroundColor = colorSelected;
    }
}

// Fill all cells
function fillAll(){
    // get list of all cells
    const allBoxes = document.querySelectorAll("tr td");
    for (let i =0 ; i < allBoxes.length; i++){
        // set cell to selected color
        allBoxes[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    // get list of all cells
    const allBoxes = document.querySelectorAll("tr td"); 
    for (let i =0 ; i < allBoxes.length; i++){
        // set cell background color to ''
        allBoxes[i].style.backgroundColor = '';
    }
}