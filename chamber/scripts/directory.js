fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    const directoryContainer = document.getElementById('directoryContainer');
    const listViewButton = document.getElementById('listViewButton');
    const cardViewButton = document.getElementById('cardViewButton');
    let isListView = false;

    updateView();

    listViewButton.addEventListener('click', () => {
      isListView = true;
      updateView();
    });

    cardViewButton.addEventListener('click', () => {
      isListView = false;
      updateView();
    });

    function updateView() {
      directoryContainer.innerHTML = '';

      if (isListView) {
        generateDirectoryList(data);
      } else {
        generateDirectoryCards(data);
      }
    }

    function generateDirectoryCards(data) {
      const gridContainer = document.createElement('div');
      gridContainer.classList.add('gridContainer');
      data.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="images/directory/${company.image}" alt="${company.name}">
          <h2>${company.name}</h2>
          <p>${company.address}</p>
          <p>${company.phone}</p>
          <p>${company.website}</p>
          <!-- Add more fields as needed -->
        `;

        gridContainer.appendChild(card);
      });

      directoryContainer.appendChild(gridContainer);
    }

    function generateDirectoryList(data) {
      const list = document.createElement('ul');
      list.classList.add('list');
      data.forEach(company => {
        const listItem = document.createElement('li');
        listItem.classList.add('listItem');
        listItem.innerHTML = `
          <h2>${company.name}</h2>
          <p>${company.address}</p>
          <p>${company.phone}</p>
          <a href="${company.website}">${company.name}</p>
          <!-- Show limited information in the list view -->
        `;

        list.appendChild(listItem);
      });

      directoryContainer.appendChild(list);
    }
  });


