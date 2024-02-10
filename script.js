// Initialize locomotive scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
});

// Neon lighting effect
document.addEventListener("DOMContentLoaded", function () {
    const neonElements = document.querySelectorAll(".neon");

    neonElements.forEach((element) => {
        element.innerHTML = element.textContent.replace(/\S/g, "<span class='neon-letter'>$&</span>");
    });
});

// Locomotive scroll update
locoScroll.on("scroll", (args) => {
    // You can add custom scroll-related actions here
});
