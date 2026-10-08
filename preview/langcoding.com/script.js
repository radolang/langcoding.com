// Lang Coding preview site
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Nav scroll state
  var nav = document.getElementById("nav");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  function closeMenu() {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    var open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeMenu();
  });
  // Tap outside the open menu closes it; Escape does too.
  document.addEventListener("click", function (e) {
    if (links.classList.contains("open") && !links.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // "Talk to our front desk" buttons: open the TNR chat widget when live,
  // otherwise fall back to the contact section.
  function openChat() {
    if (window.NightReceptionWidget && typeof window.NightReceptionWidget.open === "function") {
      window.NightReceptionWidget.open();
    } else {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
  }
  document.querySelectorAll("[data-open-chat]").forEach(function (btn) {
    btn.addEventListener("click", openChat);
  });
})();
