var juice = document.getElementById('playback-juice');
var btn = document.getElementById('playPause');
var playImage = document.getElementById('playPauseImage');
var vid = document.getElementById("videoPlayer");
var volume = document.getElementById("volumeSlider");
var progress = document.getElementById("playback-bar")

document.getElementById("fullscreenButton").onclick = function() {
  if (vid.requestFullscreen) {
    vid.requestFullscreen();
  } else if (vid.webkitRequestFullscreen) { /* Safari */
    vid.webkitRequestFullscreen();
  } else if (vid.msRequestFullscreen) { /* IE11 */
    vid.msRequestFullscreen();
  }
}

video.addEventListener("change", function() {
  var media = window.URL.createObjectURL(this.files[0]);
  vid.src = media;
});

volume.oninput = function() {
  vid.volume = (this.value / 100);
}

vid.volume = volume.value / 100;

function playPause() {
  if (vid.paused) {
    btn.className = 'pause';
    playImage.src='/assets/images/pause.svg';

    vid.play();
  }else {
    btn.className = 'play';
    playImage.src='/assets/images/play.svg';

    vid.pause(); 
  }
}

progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetParent.offsetParent.offsetLeft) /
    progress.offsetWidth;
  console.log(e.pageX);
  console.log(progress.offsetLeft);
  console.log(progress.offsetParent.offsetParent.offsetLeft);
  vid.currentTime = pos * vid.duration;
  console.log("test");
});


btn.onclick = function() {
  playPause();
};

vid.addEventListener('timeupdate', function() {
  var juicePos = vid.currentTime / vid.duration;
  
  juice.style.width = (juicePos * 100) + "%";

  if (vid.ended) {
    btn.className = 'play';
    playImage.src = '/assets/images/play.svg';
  }
})
