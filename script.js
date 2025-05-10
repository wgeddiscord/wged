const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("sound-toggle");

let isMuted = false;

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

