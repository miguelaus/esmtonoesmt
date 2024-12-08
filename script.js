const images = [
    { url: "musicotherapist1.jpg", isTherapist: true },
    { url: "person1.jpg", isTherapist: false },
    { url: "musicotherapist2.jpg", isTherapist: true },
    { url: "person2.jpg", isTherapist: false },
    { url: "musicotherapist3.jpg", isTherapist: true },
    { url: "person3.jpg", isTherapist: false },
    { url: "musicotherapist4.jpg", isTherapist: true },
    { url: "person4.jpg", isTherapist: false },
    { url: "musicotherapist5.jpg", isTherapist: true },
    { url: "person5.jpg", isTherapist: false }
  ];
  
  let currentIndex = 0;
  let score = 0;
  
  function shuffleTiles() {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = "";
  
    const image = images[currentIndex].url;
  
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const tile = document.createElement("div");
        tile.className = "tile hidden";
  
        const img = document.createElement("img");
        img.src = image;
        img.style.transform = `translate(-${col * 25}%, -${row * 25}%)`;
  
        tile.appendChild(img);
        gameContainer.appendChild(tile);
      }
    }
  
    // Reveal one random tile
    const tiles = document.querySelectorAll(".tile");
    const randomTile = Math.floor(Math.random() * tiles.length);
    tiles[randomTile].classList.remove("hidden");
  }
  
  function checkAnswer(isTherapist) {
    const correct = images[currentIndex].isTherapist === isTherapist;
  
    if (correct) {
      score++;
      document.getElementById("score").innerText = `Puntuación: ${score}`;
    } else {
      const modal = document.getElementById("modal");
      modal.classList.add("show");
      setTimeout(() => modal.classList.remove("show"), 3000);
    }
  
    currentIndex++;
  
    if (currentIndex < images.length) {
      shuffleTiles();
    } else {
      alert(`¡Juego terminado! Puntuación final: ${score}`);
      currentIndex = 0;
      score = 0;
      document.getElementById("score").innerText = `Puntuación: ${score}`;
      shuffleTiles();
    }
  }
  
  document.addEventListener("DOMContentLoaded", shuffleTiles);
  