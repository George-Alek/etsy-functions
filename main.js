function answer1() {
  var averagePrice = 0;
  var total = 0;

  for (i=0; i<items.length; i++) {
    total += items[i].price;
    // console.log(total);
  }

  averagePrice = total / items.length;
  document.getElementById('answer1').innerHTML=`The average price is $${averagePrice.toFixed(2)}`;
}
answer1()

function answer2() {
  for (i=0; i<items.length; i++){
    if (items[i].price > 14 && items[i].price < 18) {
      document.getElementById("answer2").innerHTML += `<div> ${items[i].title} </div>`
    }
  }
}
answer2()

function answer3() {
  for (i=0; i<items.length; i++) {
    if (items[i].currency_code === "GBP"){
        console.log(items[i].currency_code)
        document.getElementById("answer3").innerHTML += `<div> ${items[i].title} costs $${items[i].price} </div>`
    }
  }
}
answer3()

function answer4() {
  for (i=0; i<items.length; i++) {
    for (k=0; k<items[i].materials.length; k++) {
      if (items[i].materials[k] === "wood") {
        document.getElementById("answer4").innerHTML += `<div> ${items[i].title} is made of wood </div>`
      }
    }
  }
}
answer4()

function answer5() {
  for (i=0; i<items.length; i++) {
    if (items[i].materials.length >= 8) {
      document.getElementById("answer5").innerHTML += `<div> ${items[i].title} has ${items[i].materials.length} </div> <ul>`
      for (l=0; l<items[i].materials.length; l++) {
        document.getElementById("answer5").innerHTML += `<li>${items[i].materials[l]}</li>`
      }
      document.getElementById("answer5").innerHTML += `</ul>`
    }
  }
}
answer5()
