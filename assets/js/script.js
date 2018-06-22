function displayResult() {
  // Déclaration des variables
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var regex = /[\d]+[.][\d]+/;
  // Vérifie que les valeurs des inputs sont bien des nombres
  if(regex.test(firstNumber) == true && regex.test(secondNumber) == true)
  {
      // Multiplication des variables firstNumber et secondNumber
      var result = Math.trunc(firstNumber) * secondNumber;
      // Affichage du résultat de la multiplication
      alert(result);
  }
  else {
    // Affiche un message si les inputs ne sont pas des nombres
    alert('Please enter a number')
  }
}
