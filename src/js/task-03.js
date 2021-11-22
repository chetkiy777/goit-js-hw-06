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

const galleryContainer = document.querySelector('.gallery')


const makeGallery = (imagesArr) => {
    imagesArr.map(({ url, alt }) => {
      const liItem = document.createElement('li')
      liItem.classList.add('img-item')
      liItem.innerHTML = `<img src="${url}" alt="${alt}">`
      galleryContainer.insertAdjacentElement('afterbegin', liItem)
    })
  }
  // return galleryContainer.insertAdjacentHTML('afterbegin', itemList)


makeGallery(images);


// const makeListElem = ({ url, alt }) => {
//     const listItem = document.createElement('li')
//     listItem.innerHTML = `<img src="${url}" alt="${alt}">`
//     return listItem;
// }

// let elems = images.map(img => makeListElem(img))

// for (let elem of elems) {
//   galleryContainer.insertAdjacentElement('afterbegin', elem)
// }





