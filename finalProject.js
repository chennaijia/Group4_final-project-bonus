function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
    var button = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
        button.classList.add("fade-in");
        button.classList.remove("fade-out");
    } else {
        button.classList.add("fade-out");
        button.classList.remove("fade-in");
    }
}