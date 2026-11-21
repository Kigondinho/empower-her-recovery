// Empower Her Recovery Centre: small progressive enhancements
(function () {
  document.documentElement.classList.remove("no-js");

  // Sticky header shadow
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile navigation
  var menu = document.querySelector(".nav-menu");
  var backdrop = document.querySelector(".nav-backdrop");
  var openBtn = document.querySelector(".nav-toggle");
  var closeBtn = document.querySelector(".nav-close");
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("open", open);
    if (backdrop) backdrop.classList.toggle("open", open);
    if (openBtn) openBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open && closeBtn) closeBtn.focus();
  }
  if (openBtn) openBtn.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); openBtn && openBtn.focus(); });
  if (backdrop) backdrop.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu && menu.classList.contains("open")) { setMenu(false); openBtn && openBtn.focus(); }
  });

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Forms: no backend yet, so compose an email to the centre in the visitor's mail app.
  document.querySelectorAll("form[data-mailto]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var data = new FormData(form);
      var subject = form.getAttribute("data-subject") || "Website enquiry";
      var topic = data.get("topic");
      if (topic) subject += " - " + topic;
      var lines = [];
      data.forEach(function (value, key) {
        if (String(value).trim()) lines.push(key.charAt(0).toUpperCase() + key.slice(1) + ": " + value);
      });
      var href = "mailto:" + form.getAttribute("data-mailto") +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      window.location.href = href;
      var status = form.querySelector(".form-status");
      if (status) status.classList.add("show");
    });
  });

  // Google Maps only loads after the visitor asks for it (privacy)
  document.querySelectorAll(".map-consent").forEach(function (box) {
    var btn = box.querySelector(".map-load");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var src = box.getAttribute("data-map-src") || "";
      if (src.indexOf("https://maps.google.com/") !== 0) return;
      var frame = document.createElement("iframe");
      frame.src = src;
      frame.title = "Map showing Kiambu, Kenya";
      frame.loading = "lazy";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      box.replaceWith(frame);
    });
  });

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
