
const CONFIG = {
  brand: "ChildGuard",
  supportEmail: "parentguard.support@gmail.com",
  wizardUrl: "https://github.com/RuhanShaikh123/child-controller/releases/download/v1.0.0.0/ParentGuard-Wizard.apk",
  parentPlayUrl: "YOUR_PARENTGUARD_PLAY_STORE_URL_HERE",
  childApkUrl: "YOUR_CHILD_APK_URL_HERE",
  deletionUrl: "/account-deletion.html"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll("[data-support-email]").forEach(el => {
    el.textContent = CONFIG.supportEmail;
    el.href = "mailto:" + CONFIG.supportEmail;
  });
  document.querySelectorAll("[data-wizard-url]").forEach(el => {
    el.href = CONFIG.wizardUrl;
    if (CONFIG.wizardUrl.startsWith("YOUR_")) el.addEventListener("click", e => {
      e.preventDefault(); alert("Add your real Wizard URL in assets/js/config.js.");
    });
  });
  document.querySelectorAll("[data-parent-url]").forEach(el => {
    el.href = CONFIG.parentPlayUrl;
    if (CONFIG.parentPlayUrl.startsWith("YOUR_")) el.addEventListener("click", e => {
      e.preventDefault(); alert("Add your real Google Play URL in assets/js/config.js.");
    });
  });
  document.querySelectorAll("[data-child-url]").forEach(el => {
    el.href = CONFIG.childApkUrl;
    if (CONFIG.childApkUrl.startsWith("YOUR_")) el.addEventListener("click", e => {
      e.preventDefault(); alert("Add your real ChildGuard APK URL in assets/js/config.js.");
    });
  });

  const menu = document.querySelector(".nav-links");
  const menuBtn = document.querySelector(".menu-btn");
  if(menu && menuBtn){
    menuBtn.addEventListener("click",()=>menu.classList.toggle("open"));
    menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("show"); });
  }, {threshold:.08});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
});
