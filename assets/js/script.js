// for double the barnd nummbers in the services section
const copy2x = document.querySelector(".brands-slide").cloneNode(true);
document.querySelector(".brands-container").appendChild(copy2x);

// for interactive navbar section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".normal-nav .nav-item a");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let windowTop = window.scrollY;
    let offset = section.offsetTop - 120;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (windowTop >= offset && windowTop < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".normal-nav .nav-item a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});

// for back to top button
const topIcon = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    topIcon.classList.add("active");
  } else {
    topIcon.classList.remove("active");
  }
});
