/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const itemsList = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        // отправка

        const inputText = sendInput.value;

        const newLiElement = document.createElement('li');
        newLiElement.textContent = inputText;
        newLiElement.addEventListener('click', clickList);

        if (inputText != '') {
            itemsList.append(newLiElement);
        }
        sendInput.value = '';
    }
});

function clickList() {
    this.classList.toggle('done');
};