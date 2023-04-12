// Add imports above this line
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import '../css/common.css';
import '../css/01-gallery.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGallery = array => {
  const items = array
    .map(
      n => `<li>
  <a class="gallery__link" href="${n.original}">
    <img
      class="gallery__image"
      src="${n.preview}"
      alt="${n.description}"
    />
  </a>
</li>`
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', items);
};

createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
