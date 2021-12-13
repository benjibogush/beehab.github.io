


// reset the text area if the language is changed
const dropdown = document.getElementById("languageOption");
dropdown.onchange = function() {
    let codeInput = document.getElementById("codeInput");
    codeInput.value = "";

}


// when button is clicked, gets the text from the text area:
const getBigOBtn = document.getElementById("getBigOBtn");
getBigOBtn.onclick = function() {
    const codeInput = document.getElementById("codeInput");
    const code = codeInput.value.trim();

    // now parse the text
    const result = parseInput(code);

    // set the result
    const resultShow = document.getElementById("resultShow");
    resultShow.innerHTML = result;
}


// this function should parse the input of the code and determine the big O notation
// params:
//  code: The code input
function parseInput(code) {
    // get the for statement
    let newlineSplit = code.split("\n")
    let forStatements = getForStatements(newlineSplit);
    let result = getBigONotation(forStatements);
    return result;
}


