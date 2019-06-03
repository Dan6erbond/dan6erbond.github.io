// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollUp").style.display = "block";
  } else {
    document.getElementById("scrollUp").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function copyToClipboard(str){
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  div = document.createElement("div");
  div.innerHTML = "Link copied to clipboard!";
  document.getElementsByTagName("body")[0].appendChild(div);
  div.className = "copyText";

  setTimeout(function(){
    div.classList.add("active");
    setTimeout(function(){
      div.classList.remove("active");
    }, 1000);
  }, 5);
}

function openMenu(){
  var ul = document.getElementsByTagName("ul")[0];
  var btn = document.getElementsByClassName("mobile-open")[0].childNodes[1].childNodes[1];

  if (!ul.classList.contains("open")){
    ul.classList.add("open");
    btn.classList.remove("close");
    btn.classList.add("open");
  } else {
    ul.classList.remove("open");
    btn.classList.remove("open");
    btn.classList.add("close");
  }
}

function includeCode(){
  var elmnts, elmnt, file;

  elmnts = document.getElementsByTagName("pre");
  for (i in elmnts){
    elmnt = elmnts[i];
    try {
      file = elmnt.getAttribute("src");
    } catch {
      continue;
    }
    if (file != null){
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            elmnt.innerHTML = this.responseText;
            elmnt.removeAttribute("src");
            includeCode();
          }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
