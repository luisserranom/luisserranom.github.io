let phrases = [
    "#FanaticoDelDiseñoUX/UI",
    "#FanaticoDeAprender",
    "#sinJuniorNoHaySenior",
    "#DeJuniorASenior",
    "#AprenderParaCrecer",
    "#CuriosidadSinLímites",
    "#AprenderEsAvanzar",
    "#CrecimientoContinuo"
  ];

  function getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }

  function displayRandomPhrase() {
  let phraseElement = document.getElementById("random-phrase");
  let phrase = getRandomPhrase();
  let index = 0;
  let intervalId = setInterval(function() {
    if (index <= phrase.length) {
      phraseElement.textContent = phrase.substring(0, index) + "|";
      index++;
    } else {
      phraseElement.textContent = phrase.substring(0, index) ;
      clearInterval(intervalId);
      setTimeout(displayRandomPhrase, 2000); // Mostrar otra frase después de 2 segundos
    }
  }, 100); // Velocidad de escritura: 100 milisegundos por caracter
}
window.onload = displayRandomPhrase;


//para llamar esta funcion <p id="random-phrase"></p>