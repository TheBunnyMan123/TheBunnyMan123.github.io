function loadGame() {
    if (document.getElementById("games").value !== "") {
        document.getElementById("gameFrame").src = document.getElementById("games").value;
        document.getElementById("openInNewTab").href = document.getElementById("games").value;
    }
}

function loadCustomGame() {
    document.getElementById("gameFrame").src = document.getElementById("customGame").value;
    document.getElementById("openInNewTab").href = document.getElementById("customGame").value;
}

function loadVideo() {
    var media = URL.createObjectURL(this.files[0]);
    var vid = document.getElementById("videoPlayer");
    vid.src = media;
    vid.play();
}

function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = doc.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length;) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = doc.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length;) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

function loadYTVideo() {
    var url = document.getElementById("ytvideo").value;
    var tempId = url.split("?v=")[1];
    var id = tempId.split("&")[0];

    document.getElementById("ytVideoPlayer").src = "http://www.youtube.com/embed/" + id;

    var list = document.getElementById("ytVideos").innerHTML;
    document.getElementById("ytVideos").innerHTML = list + "<li>" + document.getElementById("ytvideo").value + "</li>";
    localStorage.ytVideolist = document.getElementById("ytVideos").innerHTML;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loadCustomGame").addEventListener("onclick", loadCustomGame);
    document.getElementById("games").addEventListener("change", loadGame);
    document.getElementById("video").addEventListener("change", loadVideo);
    document.getElementById("ytVideos").innerHTML = localStorage.ytVideolist;
    console.log(document.getElementById("ytVideos").innerHTML);
    if (document.getElementById("ytVideos").innerHTML == "undefined") {
        document.getElementById("ytVideos").innerHTML = "";
    }
    document.getElementById("defaultOpen"); //.click();
});
