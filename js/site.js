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

  loadInclude("site-header", "components/header.html?v=2.5", function () {
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

    // Announcement bar
    var bar = document.querySelector(".announce-bar");
    if (bar) {
      if (sessionStorage.getItem("bannerDismissed")) {
        bar.style.display = "none";
      } else {
        if (!sessionStorage.getItem("bannerSeen")) {
          bar.classList.add("announce-bar--animate");
          sessionStorage.setItem("bannerSeen", "1");
        }
        var closeBtn = bar.querySelector(".announce-close");
        if (closeBtn) {
          closeBtn.addEventListener("click", function () {
            bar.style.transition = "opacity 0.2s";
            bar.style.opacity = "0";
            setTimeout(function () {
              bar.style.display = "none";
              sessionStorage.setItem("bannerDismissed", "1");
            }, 200);
          });
        }
      }
    }
  });

  loadInclude("site-footer", "components/footer.html?v=2.5");
})();
