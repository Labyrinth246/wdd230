document.getElementById("lastEdit").innerHTML = new Date(document.lastModified).toLocaleString();

document.getElementById("date").innerHTML = new Date().getFullYear();

function fetchFruitData() {
    return fetch('data/fruits.json')
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error fetching fruit data:', error);
        return [];
      });
  }
  
  function populateFruitOptions() {
    const selectElements = document.querySelectorAll('select[name^="fruit"]');
    fetchFruitData()
      .then(fruits => {
        selectElements.forEach(select => {
          fruits.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit.name;
            option.textContent = fruit.name;
            select.appendChild(option);
          });
        });
      });
  }
  
  function validateFruitSelection() {
    const selectElements = document.querySelectorAll('select[name^="fruit"]');
    selectElements.forEach(select => {
      select.addEventListener('change', () => {
        if (select.value === '') {
          select.setCustomValidity('Please select a fruit from the list.');
        } else {
          select.setCustomValidity('');
        }
      });
    });
  }


  //-------------------------------------------------------------------------------------
  //Nutritional Information
  function formatNutritionalInfo(fruits) {
    const fruit1 = document.querySelector('#fruit1');
    const fruit2 = document.querySelector('#fruit2');
    const fruit3 = document.querySelector('#fruit3');
  
    const selectedFruits = [fruit1.value, fruit2.value, fruit3.value];
    const nutritionalInfo = fruits
      .filter(fruit => selectedFruits.includes(fruit.name))
      .reduce(
        (total, fruit) => {
          total.carbohydrates += fruit.nutritions.carbohydrates;
          total.protein += fruit.nutritions.protein;
          total.fat += fruit.nutritions.fat;
          total.sugar += fruit.nutritions.sugar;
          total.calories += fruit.nutritions.calories;
          return total;
        },
        {
          carbohydrates: 0,
          protein: 0,
          fat: 0,
          sugar: 0,
          calories: 0
        }
      );
  
    return nutritionalInfo;
  }
  //-------------------------------------------------------------------------------------



  //-------------------------------------------------------------------------------------
// Form Submission
function handleFormSubmission(event) {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstName').value;
    const email = document.querySelector('#email').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;
    const fruit1 = document.querySelector('#fruit1').value;
    const fruit2 = document.querySelector('#fruit2').value;
    const fruit3 = document.querySelector('#fruit3').value;
    const specialInstructions = document.querySelector('#specialInstructions').value;
  
    const orderInfoOutput = document.querySelector('#orderInfo');
    const orderDateOutput = document.querySelector('#orderDate');
    const nutritionalInfoOutput = document.querySelector('#nutritionalInfo');
  
    const orderDetails = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Fruit 1:</strong> ${fruit1}</p>
      <p><strong>Fruit 2:</strong> ${fruit2}</p>
      <p><strong>Fruit 3:</strong> ${fruit3}</p>
      <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
    `;
  
    const currentDate = new Date().toLocaleString();
    const orderDate = `<p><strong>Order Date:</strong> ${currentDate}</p>`;

    const drinkCount = localStorage.getItem('drinkCount');
    const updatedDrinkCount = parseInt(drinkCount) + 1 || 1;
    localStorage.setItem('drinkCount', updatedDrinkCount.toString());
  
    fetchFruitData().then(fruits => {
      const nutritionalInfo = formatNutritionalInfo(fruits);
      const nutritionalInfoHTML = `
        <p><strong>Total Carbohydrates:</strong> ${nutritionalInfo.carbohydrates}g</p>
        <p><strong>Total Protein:</strong> ${nutritionalInfo.protein}g</p>
        <p><strong>Total Fat:</strong> ${nutritionalInfo.fat}g</p>
        <p><strong>Total Sugar:</strong> ${nutritionalInfo.sugar}g</p>
        <p><strong>Total Calories:</strong> ${nutritionalInfo.calories}</p>
      `;
      nutritionalInfoOutput.innerHTML = nutritionalInfoHTML;
    });
  
    orderInfoOutput.innerHTML = orderDetails;
    orderDateOutput.innerHTML = orderDate;
    document.querySelector('#orderOutput').style.display = 'block';
  }
  
  const freshForm = document.querySelector('#freshForm');
  freshForm.addEventListener('submit', handleFormSubmission);
  

  populateFruitOptions();
  validateFruitSelection();
  
  
  
  