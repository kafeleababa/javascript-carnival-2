  // -    -   -   -   -  //
  // JAVASCRIPT CARNIVAL //
  // -    -   -   -   -  //

  console.log("Inflate The Unicorn!")

  document.getElementById("uni0").onclick = click
  document.getElementById("uni1").onclick = click
  document.getElementById("uni2").onclick = click

  var inflation = [0, 0, 0]


  function click(event) {
      var unicorn = event.target;
      var id = unicorn.id[3]
      inflation[id]++
          if (inflation[id] == 4)
              inflation[id] == 0;
      unicorn.src = "./images/unicorn-" + inflation[id] + ".png"
  }