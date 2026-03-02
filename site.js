(function () {
  function loadInclude(id, file, onLoad) {
    fetch(file)
      .then(function (r) {
        return r.text();
      })
      .then(function (html) {
        document.getElementById(id).outerHTML = html;
        if (onLoad) onLoad();
      });
  }

  loadInclude("site-header", "header.html", function () {
    // Active nav state
    var page = location.pathname.split("/").pop() || "index";
    if (page.includes(".")) page = page.split(".")[0]; // strip .html if present

    document.querySelectorAll("nav a").forEach(function (a) {
      var href = a.getAttribute("href").replace(/^\//, "").replace(".html", "");
      if (page === href) a.classList.add("active");
    });

    // Hamburger toggle
    var btn = document.querySelector(".nav-toggle");
    var nav = document.querySelector("header nav");
    if (btn && nav) {
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("nav-open");
        btn.classList.toggle("nav-toggle--open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("nav-open");
          btn.classList.remove("nav-toggle--open");
          btn.setAttribute("aria-expanded", "false");
        });
      });
    }
  });

  loadInclude("site-footer", "footer.html");
})();
