// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

    // 1. Learn More Button Click
    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        alert("Thank you for visiting My Website!");
    });

    // 2. Smooth Scroll Effect for Navigation Links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            alert("This section is coming soon!");
        });
    });

    // 3. Change Header Color on Scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");

        if (window.scrollY > 50) {
            header.style.background = "#111827";
        } else {
            header.style.background = "#1e3a8a";
        }
    });

});