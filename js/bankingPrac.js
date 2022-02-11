// FUNCTION TO GET THE INPUT AMOUNT IN NUMBER
function getValueOfInputFields(id) {
  var inputFieldAmountInText = document.getElementById(id).value;
  var inputAmountInNumber = parseFloat(inputFieldAmountInText);
  document.getElementById(id).value = "";
  return inputAmountInNumber;
}

// FUCTION TO UPDATE TOTAL DEPO AND WIRAW
function getTotalTransAndUpdate(id) {
  var totalAmountInText = document.getElementById(id).innerText;
  var totalAmountInNumber = parseFloat(totalAmountInText);
  return totalAmountInNumber;
}

// GET THE LAST TOTAL BALANCE
function getTheLastTotalBalance() {
  var lastTotalBalance = document.getElementById("totalBalance").innerText;
  var lastTotalBalanceInNumber = parseFloat(lastTotalBalance);
  return lastTotalBalanceInNumber;
}

// GET AND SET THE TOTAL BALANCE
function getAndSetTotalBalance(transactionAmount, to) {
  //   var lastTotalBalance = document.getElementById("totalBalance").innerText;
  //   var lastTotalBalanceInNumber = parseFloat(lastTotalBalance);

  var lastTotalBalanceInNumber = getTheLastTotalBalance();
  if (to == "add") {
    document.getElementById("totalBalance").innerText =
      lastTotalBalanceInNumber + transactionAmount;
  } else {
    document.getElementById("totalBalance").innerText =
      lastTotalBalanceInNumber - transactionAmount;
  }
}

// DEPOSIT BUTTON
document.getElementById("depositButton").addEventListener("click", function () {
  var newDepositAmount = getValueOfInputFields("depositField");
  var lastTotalDepositAmount = getTotalTransAndUpdate("totalDeposit");

  if (newDepositAmount > 0 && typeof getTheLastTotalBalance() == "number") {
    getAndSetTotalBalance(newDepositAmount, "add");
    document.getElementById("totalDeposit").innerText =
      lastTotalDepositAmount + newDepositAmount;
  }
});

// WIDRAW BUTTON
document.getElementById("widrawButton").addEventListener("click", function () {
  var newWidrawAmount = getValueOfInputFields("widrawField");
  var lastTotalWidrawAmount = getTotalTransAndUpdate("totalWidraw");
  if (
    getTheLastTotalBalance() > newWidrawAmount &&
    newWidrawAmount > 0 &&
    typeof newWidrawAmount == "number"
  ) {
    getAndSetTotalBalance(newWidrawAmount, "minus");
    document.getElementById("totalWidraw").innerText =
      lastTotalWidrawAmount + newWidrawAmount;
  }
});
