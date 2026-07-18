// ============================
// Back To Top
// ============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ============================
// Lightbox
// ============================

const images = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

let currentIndex = 0;


// เปิดรูป

images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});


// แสดงรูป

function showImage() {

    lightboxImg.src = images[currentIndex].src;

}


// ปิด

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// คลิกพื้นหลังปิด

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// รูปก่อนหน้า

prevBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage();

});


// รูปถัดไป

nextBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage();

});


// Keyboard

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

        if (e.key === "ArrowRight") {

            currentIndex++;

            if (currentIndex >= images.length) {

                currentIndex = 0;

            }

            showImage();

        }

        if (e.key === "ArrowLeft") {

            currentIndex--;

            if (currentIndex < 0) {

                currentIndex = images.length - 1;

            }

            showImage();

        }

    }

});
