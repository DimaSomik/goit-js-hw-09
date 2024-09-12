import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./01-images";
import { createListItem } from "./01-createGallery";   

const gallery = document.querySelector('.gallery');
createListItem(images, gallery);

const lightBox = new SimpleLightbox("ul.gallery a", {
    captionType: "attr",
    captionsData: "alt",
    sourceAttr: "href",
    overlay: true,
    overlayOpacity: 1,
});