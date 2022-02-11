// GETTING THE INPUT VALUE USING FUNC
function getInputValue(inputId) {
  var inputField = document.getElementById(inputId).value;
  var amountValue = parseFloat(inputField);

  // CLEAR THE INPUT FIELD
  document.getElementById(inputId).value = "";
  return amountValue;
}

// FUCTION TO GET THE TOTAL DEPOSIT
function getTolatTransAmount(id) {
  var totalDipo = document.getElementById(id).innerText;
  var totalDipolInNumber = parseFloat(totalDipo);
  return totalDipolInNumber;
}

// FUNCTION TO GET THE LAST TOTAL BALANCE
function getThelastTotalBalanceAmount(id) {
  var totalBalance = document.getElementById(id).innerText;
  var totalBalanceInNumber = parseFloat(totalBalance);
  return totalBalanceInNumber;
}

// EVENT LISTENER FOR DEPOSIT BUTTON
document.getElementById("depositButton").addEventListener("click", function () {
  // GETTING THE INPUT FOR DEPO
  // var inputForDeposit = document.getElementById("depositInput").value;
  // var inputForDepositInNumber = parseFloat(inputForDeposit);
  var inputForDepositInNumber = getInputValue("depositInput");
  // GETTING THE LAST DEPO VALUE
  //   var lastDipoTotal = document.getElementById("depositTotal").innerText;
  //   var lastDipoTotalInNumber = parseFloat(lastDipoTotal);
  var lastDipoTotalInNumber = getTolatTransAmount("depositTotal");

  // SETTING THE NEW TOTAL DEPO VALUE
  document.getElementById("depositTotal").innerText =
    inputForDepositInNumber + lastDipoTotalInNumber;
  // GETTING THE LAST TOTAL BALANCE VALUE
  //   var totalBalance = document.getElementById("totalBalance").innerText;
  //   var totalBalanceInNumber = parseFloat(totalBalance);
  var totalBalanceInNumber = getThelastTotalBalanceAmount("totalBalance");
  // SETTING THE NEW TOTAL VALUE
  document.getElementById("totalBalance").innerText =
    totalBalanceInNumber + inputForDepositInNumber;

  //     // CLEAR THE INPUT FIELD
  //   document.getElementById("depositInput").value = "";
});

// EVENT LISTENER FOR Withdraw BUTTON
document.getElementById("widrawButton").addEventListener("click", function () {
  // GETTING THE INPUT FOR WID
  //   var inputForWidraw = document.getElementById("widrawInput").value;
  //   var inputForWidrawInNumber = parseFloat(inputForWidraw);
  var inputForWidrawInNumber = getInputValue("widrawInput");
  // GETTING THE LAST WID VALUE
  //   var lastWidTotal = document.getElementById("totalWidraw").innerText;
  //   var lastWidTotalInNumber = parseFloat(lastWidTotal);
  var lastWidTotalInNumber = getTolatTransAmount("totalWidraw");
  // SETTING THE NEW TOTAL WID VALUE
  document.getElementById("totalWidraw").innerText =
    inputForWidrawInNumber + lastWidTotalInNumber;

  // GETTING THE LAST TOTAL BALANCE VALUE
  //   var totalBalance = document.getElementById("totalBalance").innerText;
  //   var totalBalanceInNumber = parseFloat(totalBalance);
  var totalBalanceInNumber = getThelastTotalBalanceAmount("totalBalance");
  // SETTING THE NEW TOTAL VALUE
  document.getElementById("totalBalance").innerText =
    totalBalanceInNumber - inputForWidrawInNumber;

  document.getElementById("widrawInput").value = "";
});
