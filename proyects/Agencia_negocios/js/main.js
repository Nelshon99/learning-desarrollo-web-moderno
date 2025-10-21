// Beging navbar

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

// End navbar

// Baging Video
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons button i");
const bar = document.querySelector(".video-bar");

const PlayPause = () => {
  if (video.paused) {
    video.play();
    btn.className = "far fa-pause-circle";
    video.style.opacity = "0.7";
  } else {
    video.pause();
    btn.className = "far fa-play-circle";
    video.style.opacity = "0.3";
  }
};

btn.addEventListener("click", () => {
  PlayPause();
});

video.addEventListener("timeupdate", () => {
  console.log(video.currentTime, video.duration);
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;

  //Final del video
  if (video.ended) {
    btn.className = "far fa-play-circle";
    video.style.opacity = "0.3";
  }
});

// End video
