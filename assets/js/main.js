(function () {
  "use strict";

  // Collapsible info / bibtex boxes
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-toggle]");
    if (!btn) return;
    e.preventDefault();
    var box = document.getElementById(btn.getAttribute("data-toggle"));
    if (box) box.hidden = !box.hidden;
  });

  // Mobile nav
  var toggle = document.querySelector(".site-nav__toggle");
  var links = document.querySelector(".site-nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Highlight the nav link for the section in view
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".site-nav__links a")
  );
  var sections = navLinks
    .map(function (a) {
      var id = a.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      return el ? { link: a, el: el } : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("is-active"); });
            var match = sections.find(function (s) { return s.el === entry.target; });
            if (match) match.link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { observer.observe(s.el); });
  }
})();
