(() => {
  const links = [...document.querySelectorAll("[data-gallery-image]")];
  if (!links.length) return;

  const overlay = document.createElement("div");
  overlay.className = "gallery-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Image gallery");
  overlay.innerHTML = `
    <button class="gallery-lightbox-close" type="button" aria-label="Close">&times;</button>
    <button class="gallery-lightbox-prev" type="button" aria-label="Previous image">&#10094;</button>
    <img class="gallery-lightbox-image" alt="">
    <button class="gallery-lightbox-next" type="button" aria-label="Next image">&#10095;</button>
  `;
  document.body.appendChild(overlay);

  const image = overlay.querySelector(".gallery-lightbox-image");
  let currentIndex = 0;

  function show(index) {
    currentIndex = (index + links.length) % links.length;
    const link = links[currentIndex];
    image.src = link.dataset.galleryImage;
    image.alt = link.dataset.galleryTitle || "";
  }

  function close() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("gallery-lightbox-open");
  }

  links.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      show(index);
      overlay.classList.add("is-open");
      document.body.classList.add("gallery-lightbox-open");
    });
  });

  overlay.querySelector(".gallery-lightbox-close").addEventListener("click", close);
  overlay.querySelector(".gallery-lightbox-prev").addEventListener("click", () => show(currentIndex - 1));
  overlay.querySelector(".gallery-lightbox-next").addEventListener("click", () => show(currentIndex + 1));
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(currentIndex - 1);
    if (event.key === "ArrowRight") show(currentIndex + 1);
  });
})();
