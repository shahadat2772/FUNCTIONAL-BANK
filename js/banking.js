// GETTING THE INPUT VALUE USING FUNC
function getInputValue(inputId) {
  var inputField = document.getElementById(inputId).value;
  var amountValue = parseFloat(inputField);

  // CLEAR THE INPUT FIELD
  document.getElementById(inputId).value = "";
  return amountValue;
}

// FUNCTION UPDATE TOTAL FIELD

function updateTotalField(inputForTransInNumber, fieldId) {
  var lastTotalTrans = document.getElementById(fieldId).innerText;
  var lastTotalTransInNumber = parseFloat(lastTotalTrans);

  // SETTING THE NEW TOTAL FIELD VALUE
  document.getElementById(fieldId).innerText =
    lastTotalTransInNumber + inputForTransInNumber;
}

// FUNCTION TO UPDATE THE MAIN BALANCE

function updateTheMainBalance(inputForDepositInNumber, isadd) {
  var totalBalance = document.getElementById("totalBalance").innerText;
  var totalBalanceInNumber = parseFloat(totalBalance);
  // UPDATING THE NEW TOTAL VALUE
  if (isadd == "add") {
    document.getElementById("totalBalance").innerText =
      totalBalanceInNumber + inputForDepositInNumber;
  } else {
    document.getElementById("totalBalance").innerText =
      totalBalanceInNumber - inputForDepositInNumber;
  }
}

// EVENT LISTENER FOR DEPOSIT BUTTON
document.getElementById("depositButton").addEventListener("click", function () {
  // GETTING THE INPUT FOR DEPO
  // var inputForDeposit = document.getElementById("depositInput").value;

  // GETTING THE LAST DEPO VALUE AND UPDATE IT
  //   var lastDipoTotal = document.getElementById("depositTotal").innerText;
  //   var lastDipoTotalInNumber = parseFloat(lastDipoTotal);

  //   // SETTING THE NEW TOTAL DEPO VALUE
  //   document.getElementById("depositTotal").innerText =
  //     inputForDepositInNumber + lastDipoTotalInNumber;

  // GETTING THE LAST TOTAL BALANCE VALUE
  //   var totalBalance = document.getElementById("totalBalance").innerText;
  //   var totalBalanceInNumber = parseFloat(totalBalance);
  //   // UPDATING THE NEW TOTAL VALUE
  //   document.getElementById("totalBalance").innerText =
  //     totalBalanceInNumber + inputForDepositInNumber;
  // var inputForDepositInNumber = parseFloat(inputForDeposit);
  var inputForDepositInNumber = getInputValue("depositInput");
  if (
    typeof inputForDepositInNumber == "number" &&
    inputForDepositInNumber > 0
  ) {
    updateTotalField(inputForDepositInNumber, "depositTotal");
    updateTheMainBalance(inputForDepositInNumber, "add");
  }

  //     // CLEAR THE INPUT FIELD
  //   document.getElementById("depositInput").value = "";
});

// EVENT LISTENER FOR Withdraw BUTTON
document.getElementById("widrawButton").addEventListener("click", function () {
  // GETTING THE INPUT FOR WID
  //   var inputForWidraw = document.getElementById("widrawInput").value;
  //   var inputForWidrawInNumber = parseFloat(inputForWidraw);

  // GETTING THE LAST WID VALUE AND UPDATE IT
  //   var lastWidTotal = document.getElementById("totalWidraw").innerText;
  //   var lastWidTotalInNumber = parseFloat(lastWidTotal);

  //   // SETTING THE NEW TOTAL WID VALUE
  //   document.getElementById("totalWidraw").innerText =
  //     inputForWidrawInNumber + lastWidTotalInNumber;

  // GETTING THE LAST TOTAL BALANCE VALUE
  // var totalBalance = document.getElementById("totalBalance").innerText;
  // var totalBalanceInNumber = parseFloat(totalBalance);

  // // SETTING THE NEW TOTAL VALUE
  // document.getElementById("totalBalance").innerText =
  //   totalBalanceInNumber - inputForWidrawInNumber;
  var inputForWidrawInNumber = getInputValue("widrawInput");
  if (typeof inputForWidrawInNumber == "number" && inputForWidrawInNumber > 0)
    updateTotalField(inputForWidrawInNumber, "totalWidraw");
  updateTheMainBalance(inputForWidrawInNumber, "minus");
});
