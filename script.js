const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("sound-toggle");

let isMuted = true;

toggleBtn.addEventListener("click", () => {
  isMuted = !isMuted;

  toggleBtn.style.opacity = 0;

  setTimeout(() => {
    if (isMuted) {
      music.pause();
      toggleBtn.src = "images/mute.png";
    } else {
      music.play();
      toggleBtn.src = "images/sound.png";
    }
    toggleBtn.style.opacity = 1;
  }, 200);
});

// Lancer la musique au 1er clic n’importe où
document.body.addEventListener("click", () => {
  if (isMuted) return;
  music.play();
}, { once: true });

// Générer des particules
const container = document.getElementById("particles-container");
for (let i = 0; i < 20; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${Math.random() * 100}%`;
  p.style.animationDelay = `${Math.random() * 5}s`;
  container.appendChild(p);
}
