var juice = document.getElementById('playback-juice');
var btn = document.getElementById('playPause');
var playImage = document.getElementById('playPauseImage');
var vid = document.getElementById("videoPlayer");
var volume = document.getElementById("volumeSlider");
var progress = document.getElementById("playback-bar")
var fullscreenBtn = document.getElementById("fullscreenButton");

function updateButtonLayout() {
  fullscreenBtn.style.marginLeft = (window.innerWidth/1 - 75) + "px";
}

window.onresize = updateButtonLayout;
updateButtonLayout();

fullscreenBtn.onclick = function() {
  if (vid.requestFullscreen) {
    vid.requestFullscreen();
  } else if (vid.webkitRequestFullscreen) { /* Safari */
    vid.webkitRequestFullscreen();
  } else if (vid.msRequestFullscreen) { /* IE11 */
    vid.msRequestFullscreen();
  }
}

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
    (e.pageX - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  vid.currentTime = pos * vid.duration;
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

var url = window.location;
var strurl = url.toString();
var split = strurl.split("?inputlink=");
console.log(strurl);

if (split[1]) {
  var src = decodeURIComponent(split[1]);
  console.log("Setting video source to: " + src);
  vid.src = src

  document.getElementById("generate").remove();
}
