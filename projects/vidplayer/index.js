var juice = document.querySelector('.playback-juice');
var btn = document.getElementById('playPause');
var playImage = document.getElementById('playPauseImage');
var vid = document.getElementById("videoPlayer");

video.addEventListener("change", function() {
  var media = window.URL.createObjectURL(this.files[0]);
  vid.src = media;
});

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
