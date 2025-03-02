
var modal = document.getElementById("imageModal");

var modalImg = document.getElementById("modalImage");

var images = document.querySelectorAll(".gallery-image");

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
window.onclick = function(event) {
    var navLinks = document.getElementById("navLinks");
    var hamburger = document.querySelector(".hamburger");

    if (event.target !== hamburger && !navLinks.contains(event.target)) {
        navLinks.classList.remove("active");
    }
}
