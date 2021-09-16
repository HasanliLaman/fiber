"use strict";

const listItems = document.querySelectorAll(".text-decoration-none");
listItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    item.classList.remove("text-muted");
  });

  item.addEventListener("mouseout", function () {
    item.classList.add("text-muted");
  });
});

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
