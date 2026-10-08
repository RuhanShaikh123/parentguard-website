
const CONFIG = {
  brand: "ParentGuard",
  supportEmail: "parentguard.support@gmail.com",
  wizardUrl: "https://github.com/RuhanShaikh123/child-controller/releases/download/v1.0.0.0/ParentGuard-Wizard.apk",
  parentPlayUrl: "YOUR_PARENTGUARD_PLAY_STORE_URL_HERE",
  childApkUrl: "https://github.com/RuhanShaikh123/child-controller/releases/download/v1.0.3/ChildController-v1.0.3.apk",
  deletionUrl: "/account-deletion.html"
};

document.addEventListener("DOMContentLoaded", () => {

  /* ── Dynamic content ── */
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-support-email]").forEach(el => {
    el.textContent = CONFIG.supportEmail;
    el.href = "mailto:" + CONFIG.supportEmail;
  });

  document.querySelectorAll("[data-wizard-url]").forEach(el => {
    el.href = CONFIG.wizardUrl;
    if (CONFIG.wizardUrl.startsWith("YOUR_")) {
      el.addEventListener("click", e => {
        e.preventDefault();
        alert("Download link coming soon. Please contact support at " + CONFIG.supportEmail);
      });
    }
  });

  document.querySelectorAll("[data-parent-url]").forEach(el => {
    el.href = CONFIG.parentPlayUrl;
    if (CONFIG.parentPlayUrl.startsWith("YOUR_")) {
      el.addEventListener("click", e => {
        e.preventDefault();
        alert("Google Play listing coming soon. Please contact support at " + CONFIG.supportEmail);
      });
    }
  });

  document.querySelectorAll("[data-child-url]").forEach(el => {
    el.href = CONFIG.childApkUrl;
    if (CONFIG.childApkUrl.startsWith("YOUR_")) {
      el.addEventListener("click", e => {
        e.preventDefault();
        alert("Download link coming soon. Please contact support at " + CONFIG.supportEmail);
      });
    }
  });

  /* ── Mobile navigation ── */
  const menu = document.querySelector(".nav-links");
  const menuBtn = document.querySelector(".menu-btn");

  if (menu && menuBtn) {
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-controls", "nav-links");
    menu.id = "nav-links";

    function openMenu() {
      menu.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.textContent = "✕";
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      menu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
      document.body.style.overflow = "";
    }

    menuBtn.addEventListener("click", () => {
      if (menu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on link click
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", closeMenu);
    });

    // Close on Escape
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && menu.classList.contains("open")) closeMenu();
    });

    // Close on outside click
    document.addEventListener("click", e => {
      if (menu.classList.contains("open") && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on resize back to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  /* ── Reveal on scroll ── */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("show"));
  }

  /* ── Active nav link ── */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href && !href.includes("#") && href === currentPath) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });

  /* ── Lazy load images ── */
  if ("loading" in HTMLImageElement.prototype) {
    document.querySelectorAll("img[data-src]").forEach(img => {
      img.src = img.dataset.src;
    });
  }

});
