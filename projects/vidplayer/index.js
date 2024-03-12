var vid = document.getElementById("videoPlayer");

video.addEventListener("change", function() {
  var media = window.URL.createObjectURL(this.files[0]);
  vid.src = media;
});
