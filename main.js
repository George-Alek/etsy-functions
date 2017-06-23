function answer1() {
  var averagePrice = 0;
  var total = 0;

  for (i=0; i<items.length; i++) {
    total += items[i].price;
    console.log(total);
  }

  averagePrice = total / items.length;
  document.getElementById('answer1').innerHTML=`The average price is $${averagePrice.toFixed(2)}`;
}
