function startFizzBuzz() {
    const n = document.getElementById("inputN").value;
    const fizz = document.getElementById("inputFizz").value;
    const buzz = document.getElementById("inputBuzz").value;
    window.location.href = "res.html?n=" + n + "&fizz=" + fizz + "&buzz=" + buzz;
}
