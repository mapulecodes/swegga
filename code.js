function calculateTotal() {
  var femalePrice = 150.95;
  var femaleQuantity = parseInt(
    document.forms["orders"]["femaleQuantity"].value
  );
  var femaleTotal = femalePrice * femaleQuantity;

  var malePrice = 180.95;
  var maleQuantity = parseInt(document.forms["orders"]["maleQuantity"].value);
  var maleTotal = malePrice * maleQuantity;

  alert(
    "Total price for Female Jackets: " +
      femaleTotal.toFixed(2) +
      " Rand\nTotal price for Male Jackets: " +
      maleTotal.toFixed(2) +
      " Rand"
  );

  var totalPrice = femaleTotal + maleTotal;
  alert("Total price for the order: " + totalPrice.toFixed(2) + " Rand");
}
