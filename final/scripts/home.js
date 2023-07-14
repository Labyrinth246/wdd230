const imagesContainer = document.querySelector('.images');
const thumbnails = document.querySelectorAll('.thumbnails img');
let currentIndex = 0;

document.querySelector('.arrowLeft').addEventListener('click', showPreviousImage);
document.querySelector('.arrowRight').addEventListener('click', showNextImage);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => showImage(index));
});

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  showImage(currentIndex);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  showImage(currentIndex);
}

function showImage(index) {
  currentIndex = index;
  
  // Remove all existing image containers
  while (imagesContainer.firstChild) {
    imagesContainer.firstChild.remove();
  }
  
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');
  
  const image = document.createElement('img');
  image.src = thumbnails[index].src;
  image.alt = thumbnails[index].alt;
  image.classList.add('active');
  
  imageContainer.appendChild(image);
  imagesContainer.appendChild(imageContainer);
  
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle('active', i === currentIndex);
  });
}

// Show the first image initially
showImage(0);




document.getElementById("lastEdit").innerHTML = new Date(document.lastModified).toLocaleString();

document.getElementById("date").innerHTML = new Date().getFullYear();