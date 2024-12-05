import { uploadFile } from './file.service';

const uploadButton = document.getElementById('upload-button');
const artworkInput = document.getElementById('artFiles');
const artworkDisplay = document.getElementById('artwork-display');

uploadButton.addEventListener('click', (e) => {
  e.preventDefault();
  const file = artworkInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  uploadFile(formData)
    .then((response) => {
      const fileUrl = response.url;
      const artworkImage = document.createElement('img');
      artworkImage.src = fileUrl;
      artworkDisplay.appendChild(artworkImage);
    })
    .catch((error) => console.error(error));
});