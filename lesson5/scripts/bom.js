

const input = document.getElementById("favchap");
const list = document.getElementById("list");
const button = document.getElementById("but");

button.addEventListener('click', function() {
    if (input.value != null) {
       const li = document.createElement('li');
       li.textContent = input.value;

       const delButton = document.createElement('button');
       delButton.textContent = '❌';

        li.appendChild(delButton);
        list.appendChild(li);

        delButton.addEventListener('click', function () {
            list.removeChild(li);
        });
        
        input.focus();
        input.value = '';

    } else {
        return;
    }
});