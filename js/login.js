document.getElementById("submitButton").addEventListener("click", function () {
  var userEmail = document.getElementById("userEmailField").value;
  var userPass = document.getElementById("userPassField").value;

  if (userEmail == "sontan@baap.com" && userPass == "secret") {
    window.location.href = "banking.html";
  }
});
