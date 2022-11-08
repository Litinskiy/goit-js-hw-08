

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function markupMarker(galleryItems) {
     return `${galleryItems
    .map(({ preview = '', original = '', description = '' } = {}) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('')}`;
}
galleryRef.innerHTML = markupMarker(galleryItems);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: 250,
});


console.log(galleryItems);
