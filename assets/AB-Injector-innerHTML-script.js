function loadGame() {
    if (document.getElementById("games").value != "") {
        document.getElementById("gameFrame").innerHTML = "";
        document.getElementById("gameFrame").src = document.getElementById("games").value;
        document.getElementById("openInNewTab").href = document.getElementById("games").value;
    }
}

function loadCustomGame() {
    document.getElementById("gameFrame").innerHTML = "";
    document.getElementById("gameFrame").src = document.getElementById("customGame").value;
    document.getElementById("openInNewTab").href = document.getElementById("customGame").value;
}

function loadVideo() {
    var media = URL.createObjectURL(this.files[0]);
    var vid = document.getElementById("videoPlayer");
    vid.src = media;
    vid.play();
}

document.getElementById("loadCustomGame").addEventListener("onclick", loadCustomGame)
document.getElementById("games").addEventListener("change", loadGame)
document.getElementById("video").addEventListener("change", loadVideo)

function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
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

try {
    document.getElementById("ytVideos").innerHTML = localStorage.ytVideolist;
    console.log(document.getElementById("ytVideos").innerHTML);
    if (document.getElementById("ytVideos").innerHTML == "undefined") {
        document.getElementById("ytVideos").innerHTML = "";
    }
} catch {
    console.log("No localstorage found");
}