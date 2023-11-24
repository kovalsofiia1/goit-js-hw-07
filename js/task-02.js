const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery')

let toAdd = images.map((img) => {
  const myLi = document.createElement('li')
  myLi.classList.add('gallery-item')
  const image = document.createElement('img')
  image.src = img.url;
  image.alt = img.alt;
  image.classList.add('gallery-img')
  myLi.append(image)
  return myLi;
})

gallery.append(...toAdd);

const styleElement = document.createElement('style');

const cssRules = `.gallery {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  gap: 8px;
  justify-content: center;
}

.gallery-img {
  width: 350px;
  height: 300px;
  object-fit: cover;
}`;

  styleElement.textContent = cssRules;
  document.body.appendChild(styleElement);




