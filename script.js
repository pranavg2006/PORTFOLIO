document.addEventListener(“DOMContentLoaded”, function () {
const yearElement = document.getElementById(“current-year”);

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") {
            return;
        }
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
const profileImage = document.querySelector(".image-frame img");
if (profileImage) {
    profileImage.addEventListener("error", function () {
        profileImage.alt = "Profile photo not found. Add your image as profile.jpg.";
        const imageFrame = profileImage.parentElement;
        profileImage.remove();
        if (imageFrame && !imageFrame.querySelector(".photo-placeholder")) {
            const placeholder = document.createElement("div");
            placeholder.className = "photo-placeholder";
            placeholder.textContent = "Add your photo as profile.jpg";
            imageFrame.appendChild(placeholder);
        }
    });
}

});