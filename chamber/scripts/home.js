const url = 'data/data.json';

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data);
}

getProphetData(url);

function displayProphets(data) {
  const spotlightContainer = document.getElementById('spotlightContainer');
  spotlightContainer.innerHTML = '';

  const filteredCompanies = data.filter(company => company.membership === 'Silver' || company.membership === 'Gold');

  const randomCompanies = getRandomSelection(filteredCompanies, 3);

  randomCompanies.forEach(company => {
    const card = document.createElement('div');
    card.classList.add('comp');
    card.innerHTML = `
      <h3>${company.name}</h3>
      <a class="spotImg" href="${company.website}">
        <img class="spotlightImg" src="images/directory/${company.image}" alt="${company.name} - ${getOrdinalNumber(company.order)} Latter-day President">
      </a>
      <p>${company.phone}</p>
    `;
    spotlightContainer.appendChild(card);
  });
}

// Helper function to get a random selection from an array
function getRandomSelection(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper function to get the ordinal number suffix
function getOrdinalNumber(number) {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = number % 100;
  const suffix = suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
  return number + suffix;
}

