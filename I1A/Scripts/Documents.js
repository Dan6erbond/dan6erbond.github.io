function StartGenerating() {
  var divs = document.getElementsByTagName('div');
  for (i = 0; i < divs.length; i++) {
    var div = divs[i];
    var documentType = div.getAttribute('data-documentType');
    var documentName = div.getAttribute('data-documentName');
    var documentPath = div.getAttribute('data-documentPath');

    console.log(documentType);
    console.log(documentName);
    console.log(documentPath);

    if (documentType) {
      if (documentType == 'img') {
        GenerateImage(div, documentName, documentPath);
        console.log('Generating Image...');
      } else {
        GenerateDocument(div, documentName, documentType, documentPath);
        console.log('Generating Document...');
      }
    }
  }
}

function GenerateDocument(element, documentName, documentType, documentPath) {
  var thumbnail = document.createElement('img');
  if (documentType == 'pdf')
    thumbnail.src = 'Documents/Images/PDF Thumbnail.png';
  if (documentType == 'doc')
    thumbnail.src = 'Documents/Images/Word Thumbnail.png';
  if (documentType == 'docx')
    thumbnail.src = 'Documents/Images/Word Thumbnail.png';
  if (documentType == 'xlsx')
    thumbnail.src = 'Documents/Images/Excel Thumbnail.png';
  if (documentType == 'zip')
    thumbnail.src = 'Documents/Images/ZIP Thumbnail.png';
  if (documentType == 'zusammenfassung')
    thumbnail.src = 'Documents/Images/Zusammenfassung Thumbnail.png';
  thumbnail.alt = documentName;
  thumbnail.classList.add('documentThumbnail');

  var title = document.createElement('p');
  var titleText = document.createTextNode(documentName);
  title.appendChild(titleText);
  title.classList.add('documentTitle');

  var download = document.createElement('a');
  var downloadText = document.createTextNode('DOWNLOAD');
  download.appendChild(downloadText);
  download.href = documentPath;
  download.classList.add('documentDownload');

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
  img.classList.add('imageDocument');

  element.appendChild(title);
  element.appendChild(img);
}
