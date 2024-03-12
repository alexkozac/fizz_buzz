function fizzBuzz(n, fizz, buzz) {
    let output = '';
    const totalNumbers = n;
    const numCols = Math.ceil(Math.sqrt(totalNumbers));
    const squareSize = 100 / numCols;
    for (let i = 1; i <= n; i++) {
        if (i % fizz === 0 && i % buzz === 0) {
            output += "<div class='square fizzbuzz' style='width: " + squareSize + "%'><p>FizzBuzz</p></div>";
        } else if (i % fizz === 0) {
            output += "<div class='square fizz' style='width: " + squareSize + "%'><p>Fizz</p></div>";
        } else if (i % buzz === 0) {
            output += "<div class='square buzz' style='width: " + squareSize + "%'><p>Buzz</p></div>";
        } else {
            output += "<div class='square' style='width: " + squareSize + "%'><p>" + i + "</p></div>";
        }
    }
    document.getElementById("output").style.gridTemplateColumns = "repeat(" + numCols + ", 1fr)";
    document.getElementById("output").innerHTML = output;
}

function getParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const n = parseInt(urlParams.get('n'));
    const fizz = parseInt(urlParams.get('fizz'));
    const buzz = parseInt(urlParams.get('buzz'));
    fizzBuzz(n, fizz, buzz);
}

getParams();
