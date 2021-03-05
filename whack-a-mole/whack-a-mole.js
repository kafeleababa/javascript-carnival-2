  // -    -   -   -   -  //
  // JAVASCRIPT CARNIVAL //
  // -    -   -   -   -  //

  var cells = document.getElementsByTagName("TD")

  var randomIndex = Math.floor(Math.random() * cells.length)

  var randomCell = cells[randomIndex]

  var mole = document.createElement('img');

  mole.src = "./mole.PNG";

  mole.id = "mole"

  randomCell.appendChild(mole);

  mole.onclick = whackMole;

  function whackMole() {;
      randomIndex = Math.floor(Math.random() * cells.length)
      randomCell = cells[randomIndex]
      randomCell.appendChild(mole);

      var audio = new Audio();
      audio.src = "whack-audio.wav";
      audio.play();
  }