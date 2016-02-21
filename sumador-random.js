function adder (optag, restag) {
      var operation = document.getElementById(optag);
      var operands = operation.innerHTML.split ("+");
      var result = document.getElementById(restag);
      var resultData = parseInt(operands[0]) + parseInt(operands[1]);
      result.innerHTML = "= " + resultData;
}
function randomAdd (optag) {
      var operation = document.getElementById(optag);
      operation.innerHTML = Math.round(Math.random()*1000) + "+" +
                             Math.round(Math.random()*1000)
}