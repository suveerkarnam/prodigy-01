window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#555"; // Change background color when scrolled
    } else {
      navbar.style.backgroundColor = "#333"; // Original background color
    }
  });