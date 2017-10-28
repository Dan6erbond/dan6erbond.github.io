setTimeout(function() {
  StartGenerating();
}, 1);

function StartGenerating() {
  var divs = document.getElementsByTagName('div');
  for (i = 0; i < divs.length; i++) {
    var div = divs[i];
    var documentName = div.getAttribute('name');
    var documentPath = div.getAttribute('path');

    console.log(documentName);
    console.log(documentPath);

    if (documentPath) {
      if (documentPath.indexOf('png') >= 0 | documentPath.indexOf('jpg') >= 0) {
        GenerateImage(div, documentName, documentPath);
        console.log('Generating Image...');
      } else {
        GenerateDocument(div, documentName, documentPath);
        console.log('Generating Document...');
      }
    }
  }
}

function GenerateDocument(element, documentName, documentPath) {
  var thumbnail = document.createElement('img');
  if (documentPath.indexOf('pdf') >= 0)
    thumbnail.src = 'Documents/Images/PDF Thumbnail.png';
  if (documentPath.indexOf('doc') >= 0)
    thumbnail.src = 'Documents/Images/Word Thumbnail.png';
  if (documentPath.indexOf('docx') >= 0)
    thumbnail.src = 'Documents/Images/Word Thumbnail.png';
  if (documentPath.indexOf('xlsx') >= 0)
    thumbnail.src = 'Documents/Images/Excel Thumbnail.png';
  if (documentPath.indexOf('zip') >= 0)
    thumbnail.src = 'Documents/Images/ZIP Thumbnail.png';
  thumbnail.alt = documentName;
  thumbnail.classList.add('documentThumbnail');

  var title = document.createElement('p');
  var titleText = document.createTextNode(documentName);
  title.appendChild(titleText);
  title.classList.add('documentTitle');

  var download = document.createElement('a');
  download.innerHTML = '<i class="fa fa-download"></i> DOWNLOAD';
  download.href = documentPath;
  download.target = '_blank';
  download.classList.add('downloadButton');

  element.appendChild(thumbnail);
  element.appendChild(title);
  element.appendChild(download);
}

function GenerateImage(element, imageName, imagePath) {
  var title = document.createElement('p');
  var titleText = document.createTextNode(imageName);
  title.appendChild(titleText);
  title.classList.add('documentTitle');

  var img = document.createElement('img');
  img.src = imagePath;
  img.classList.add('image');

  var imgParent = document.createElement('a');
  imgParent.alt = imageName;
  imgParent.href = imagePath;
  imgParent.target = '_blank';
  imgParent.appendChild(img);

  element.appendChild(title);
  element.appendChild(imgParent);
}
