function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const create_btn = document.querySelector('button[data-create]');
const destroy_btn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

create_btn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);

})

destroy_btn.addEventListener('click', () => {
  destroyBoxes()

})

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    destroyBoxes()
    let divs = [];
    let size = 10;

    for (let i = 0; i < amount; i++){
      const div = document.createElement('div')
      div.style.width = size + 'px';
      div.style.height = size + 'px';
      div.style.backgroundColor = getRandomHexColor();
      divs.push(div);
      size += 10;
    }
    boxes.append(...divs);
    input.value=''
  }
  
}
function destroyBoxes() {
  boxes.innerHTML=''
}