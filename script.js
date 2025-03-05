// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const galleryImages = document.querySelectorAll(".gallery-image");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = image.src;
    });
});

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
