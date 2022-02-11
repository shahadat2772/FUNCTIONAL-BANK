function dubbleLait(num) {
  num = num * 2;
  return num;
}

function getInputValue() {
  var inputForDeposit = document.getElementById("depositInput").value;
  var inputForDepositInNumber = parseFloat(inputForDeposit);

  // CLEAR THE INPUT FIELD
  document.getElementById("depositInput").value = "";
  return inputForDepositInNumber;
}

// EVENT LISTENER FOR DEPOSIT BUTTON
document.getElementById("depositButton").addEventListener("click", function () {
  // GETTING THE INPUT FOR DEPO
  // var inputForDeposit = document.getElementById("depositInput").value;
  // var inputForDepositInNumber = parseFloat(inputForDeposit);
  var inputForDepositInNumber = getInputValue();
  // GETTING THE LAST DEPO VALUE
  var lastDipoTotal = document.getElementById("depositTotal").innerText;
  var lastDipoTotalInNumber = parseFloat(lastDipoTotal);
  // SETTING THE NEW TOTAL DEPO VALUE
  document.getElementById("depositTotal").innerText =
    inputForDepositInNumber + lastDipoTotalInNumber;
  // GETTING THE LAST TOTAL BALANCE VALUE
  var totalBalance = document.getElementById("totalBalance").innerText;
  var totalBalanceInNumber = parseFloat(totalBalance);
  // SETTING THE NEW TOTAL VALUE
  document.getElementById("totalBalance").innerText =
    totalBalanceInNumber + inputForDepositInNumber;

  //     // CLEAR THE INPUT FIELD
  //   document.getElementById("depositInput").value = "";
});

// EVENT LISTENER FOR Withdraw BUTTON
document.getElementById("widrawButton").addEventListener("click", function () {
  // GETTING THE INPUT FOR WID
  var inputForWidraw = document.getElementById("widrawInput").value;
  var inputForWidrawInNumber = parseFloat(inputForWidraw);
  // GETTING THE LAST WID VALUE
  var lastWidTotal = document.getElementById("totalWidraw").innerText;
  var lastWidTotalInNumber = parseFloat(lastWidTotal);
  // SETTING THE NEW TOTAL WID VALUE
  document.getElementById("totalWidraw").innerText =
    inputForWidrawInNumber + lastWidTotalInNumber;
  // GETTING THE LAST TOTAL BALANCE VALUE
  var totalBalance = document.getElementById("totalBalance").innerText;
  var totalBalanceInNumber = parseFloat(totalBalance);
  // SETTING THE NEW TOTAL VALUE
  document.getElementById("totalBalance").innerText =
    totalBalanceInNumber - inputForWidrawInNumber;

  document.getElementById("widrawInput").value = "";
});
