const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
  const cardsContainer = document.querySelector('.cards');
  prophets.forEach((prophet, index) => {
    const card = document.createElement('section');
    const h2 = document.createElement('h2');
    const portrait = document.createElement('img');
    const birthDate = document.createElement('p');
    const birthPlace = document.createElement('p');
    const prophetNumber = index + 1;

    h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophetNumber}${getOrdinalSuffix(prophetNumber)} Latter-day President`;

    portrait.src = prophet.imageurl;
    portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname} - ${prophetNumber}${getOrdinalSuffix(prophetNumber)} Latter-day President`;
    portrait.loading = 'lazy';
    portrait.width = '340';
    portrait.height = '440';

    birthDate.textContent = `Birthdate: ${prophet.birthdate}`;
    birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);

    cardsContainer.appendChild(card);
  });
};




const getOrdinalSuffix = (number) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = number % 100;
  if (remainder >= 11 && remainder <= 13) {
    return 'th';
  }
  const suffix = suffixes[(remainder % 10)] || 'th';

  return suffix;
};



