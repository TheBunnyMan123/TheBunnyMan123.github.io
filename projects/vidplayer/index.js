var vid = document.getElementById("videoPlayer");
var video = document.getElemendById("videoFile");

console.log(video);

document.getElementById("videoFile").addEventListener("change", function() {
  var media = window.URL.createObjectURL(this.files[0]);
  console.log(media);
  vid.src = "/videoplayer?inputlink=" + window.encodeURIComponent(media);
});
