function SetActive() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var fileName = location.href.split("/").slice(-1);
        var link = links[i].href;
        if (~link.indexOf(fileName)) {
            links[i].classList.add("active");
            var parentClass = links[i].parentNode.className;
            if (parentClass == "dropdown-content") {
                links[i].parentNode.classList.add("active");
                links[i].classList.add("dropdownActive");
            }
        }
    }
}
