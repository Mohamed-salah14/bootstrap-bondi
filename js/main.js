// Select Links
let links = document.querySelectorAll(".navbar-nav li a");

// Loop through the links
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// Select Lis

let lis = Array.from(document.querySelectorAll(".our-work ul li"));
let imgs = Array.from(document.querySelectorAll(".box img"));

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    imgs.forEach((img) => {
      img.style.display = "none";
      let dataset = document.querySelectorAll(e.currentTarget.dataset.mix);
      dataset.forEach((data) => {
        data.style.display = "block";
      });
    });
  });
});
