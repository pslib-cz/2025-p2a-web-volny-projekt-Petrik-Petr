document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery-container");

    lightGallery(gallery, {
        selector: "a:not(.ordinaryText)",
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
    });
});
