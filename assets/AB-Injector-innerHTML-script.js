function loadGame() {
    if (document.getElementById("games").value !== "") {
        document.getElementById("gameFrame").src = document.getElementById("games").value;
        document.getElementById("openInNewTab").href = document.getElementById("games").value;
    }
}

function loadFlashGame() {
    if (document.getElementById("flashGames").value !== "") {
        document.getElementById("flashGameFrame").src = "assets/flash/" + document.getElementById("flashGames").value;
    }
}

//alert("test");

function loadCustomGame() {
    document.getElementById("gameFrame").src = document.getElementById("customGame").value;
    document.getElementById("openInNewTab").href = document.getElementById("customGame").value;
}

function loadCustomFlashGame() {
    document.getElementById("flashGameFrame").src = document.getElementById("customFlashGame").value;
}

//alert("test");

function loadVideo() {
    var media = URL.createObjectURL(this.files[0]);
    var vid = document.getElementById("videoPlayer");
    vid.src = media;
    vid.play();
}

//alert("test");

function loadYTVideo() {
    var url = document.getElementById("ytvideo").value;
    var tempId = url.split("?v=")[1];
    var id = tempId.split("&")[0];

    document.getElementById("ytVideoPlayer").src = "https://www.youtube.com/embed/" + id;

    var list = document.getElementById("ytVideos").innerHTML;
    document.getElementById("ytVideos").innerHTML = list + "<li>" + document.getElementById("ytvideo").value + "</li>";
    localStorage.ytVideolist = document.getElementById("ytVideos").innerHTML;
}

//alert("test");
document.getElementById("loadCustomGame").addEventListener("onclick", loadCustomGame);
document.getElementById("loadCustomFlashGame").addEventListener("onclick", loadCustomFlashGame);
document.getElementById("games").addEventListener("change", loadGame);
document.getElementById("flashGames").addEventListener("change", loadFlashGame);
document.getElementById("video").addEventListener("change", loadVideo);
document.getElementById("ytVideos").innerHTML = localStorage.ytVideolist;
console.log(document.getElementById("ytVideos").innerHTML);
if (document.getElementById("ytVideos").innerHTML == "undefined") {
    document.getElementById("ytVideos").innerHTML = "";
}
document.getElementById("defaultOpen"); //.click();
//alert("test");
