  // -    -   -   -   -  //
  // JAVASCRIPT CARNIVAL //
  // -    -   -   -   -  //

  console.log("Dress The Clown!")
  document.onkeydown = checkKey;


  var headIndex = 0
  var bodyIndex = 0
  var shoesIndex = 0

  var clownIndex = 0

  var head = document.getElementById("head")
  var body = document.getElementById("body")
  var shoes = document.getElementById("shoes")

  function checkKey(e) {

      e = e || window.event;

      if (e.keyCode == '38') {
          changeVertical(-1)
      } else if (e.keyCode == '40') {
          changeVertical(1)
      } else if (e.keyCode == '37') {
          changeHorizontal(-1)
      } else if (e.keyCode == '39') {
          changeHorizontal(1)
      }
  }


  function changeHorizontal(shift) {
      if (clownIndex == 1) {

          bodyIndex += shift;

          if (bodyIndex < 0)
              bodyIndex = 5;

          if (bodyIndex > 5)
              bodyIndex = 0;

          body.src = "./images/body" + bodyIndex + ".png"
      }
      if (clownIndex == 2) {

          shoesIndex += shift;

          if (shoesIndex < 0)
              shoesIndex = 5;

          if (shoesIndex > 5)
              shoesIndex = 0;

          shoes.src = "./images/shoes" + shoesIndex + ".png"
      }
      if (clownIndex == 0) {

          headIndex += shift;

          if (headIndex < 0)
              headIndex = 5;

          if (headIndex > 5)
              headIndex = 0;

          head.src = "./images/head" + headIndex + ".png"
      }
  }

  function changeVertical(shift) {
      clownIndex += shift;

      if (clownIndex < 0)
          clownIndex = 2;

      if (clownIndex > 2)
          clownIndex = 0;
  }