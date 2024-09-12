const createElement = (tag, properties) => Object.assign(document.createElement(tag), properties);

const createGalleryImage = ({preview, original, description}) => {
   const newHyperLink = createElement("a", {className: "gallery-link",
                                            href: original});

   const newImage = createElement("img", {className: "gallery-image",
                                          src: preview,
                                          alt: description,
                                          width: "360",
                                          height: "200"});

   newHyperLink.append(newImage);
   return newHyperLink;
}

export const createListItem = (images, gallery) => {
   const list = images.map(createGalleryImage)
                      .map(image => {
                               const li = createElement("li");
                               li.append(image);
                               return li;
                      });
   
   const fragment = document.createDocumentFragment();
   fragment.append(...list);

   gallery.appendChild(fragment);
}