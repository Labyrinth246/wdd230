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

  while (imagesContainer.firstChild) {
    imagesContainer.firstChild.remove();
  }

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');

  const image = document.createElement('img');
  image.dataset.src = thumbnails[index].src; // Store the image source in a data attribute
  image.alt = thumbnails[index].alt;
  image.classList.add('active');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const title = document.createElement('h3');
  title.textContent = getImageTitle(index);
  title.classList.add('imageTitle');

  const description = document.createElement('p');
  description.textContent = getImageDescription(index);
  description.classList.add('imageDescription');

  overlay.appendChild(title);
  overlay.appendChild(description);

  imageContainer.appendChild(image);
  imageContainer.appendChild(overlay);
  imagesContainer.appendChild(imageContainer);

  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle('active', i === currentIndex);
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('loading');
        observer.unobserve(img);
      }
    });
  });

  observer.observe(image);
}


function getImageTitle(index) {
  const titles = [
    'Legoland',
    'La Jolla',
    'San Diego Botanical Gardens',
    'Carlsbad Flower Fields',
    'University of California, Irvine'
  ];

  return titles[index];
}

function getImageDescription(index) {
  const descriptions = [
    'A fun-filled day at Legoland ',
    'Enjoying the beauty of La Jolla',
    'Exploring the San Diego Botanical Gardens',
    'Walking through the colorful Carlsbad Flower Fields',
    'University of California, Irvine campus'
  ];

  return descriptions[index];
}

showImage(0);


const drinkCount = localStorage.getItem('drinkCount') || '0';

const drinkCountElement = document.getElementById('drinkCount');
drinkCountElement.textContent = drinkCount;

document.getElementById("lastEdit").innerHTML = new Date(document.lastModified).toLocaleString();

document.getElementById("date").innerHTML = new Date().getFullYear();