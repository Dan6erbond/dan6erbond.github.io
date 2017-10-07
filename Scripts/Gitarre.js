function ChangeVideo(videoURL) {
    document.getElementById("GuitarVideo").src = videoURL;
    if (videoURL == "https://www.youtube.com/embed/RM5STH_n-I4")
        document.getElementById("VideoDescription").innerHTML = "Gitarre";
    if (videoURL == "https://www.youtube.com/embed/V6dDt7PiYfU")
        document.getElementById("VideoDescription").innerHTML = "Galway Girl";
    if (videoURL == "https://www.youtube.com/embed/ViCWZ8csLRE")
        document.getElementById("VideoDescription").innerHTML = "Heathens";
}