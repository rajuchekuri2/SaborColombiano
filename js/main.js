document.addEventListener("DOMContentLoaded", function () {
  updateAllTranslations();
  updateLanguageButtons();
  highlightCurrentNav();

  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", function () {
      const isHidden = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      menuIcon.classList.toggle("hidden", !isHidden);
      closeIcon.classList.toggle("hidden", isHidden);
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(btn => {
    btn.addEventListener("click", toggleLanguage);
  });

  initAnimations();
  highlightToday();
});

function highlightCurrentNav() {
  const path = window.location.pathname.replace(/\/$/, "").split("/").pop() || "index";
  const pageName = path.replace(".html", "");
  document.querySelectorAll("[data-nav-page]").forEach(link => {
    const navPage = link.dataset.navPage;
    if (navPage === pageName) {
      link.classList.remove("text-gray-600");
      link.classList.add("text-amber-700");
    }
  });
}

function initMenuAccordions() {
  document.querySelectorAll("[data-accordion-toggle]").forEach(btn => {
    btn.addEventListener("click", function () {
      const target = document.getElementById(btn.dataset.accordionToggle);
      const chevron = btn.querySelector("[data-chevron]");
      if (target) {
        const isOpen = !target.classList.contains("hidden");
        target.classList.toggle("hidden");
        if (chevron) {
          chevron.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
        }
      }
    });
  });
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
  });
}

function highlightToday() {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const today = days[new Date().getDay()];
  document.querySelectorAll("[data-day]").forEach(el => {
    if (el.dataset.day === today) {
      el.classList.add("bg-amber-100", "text-amber-900", "font-semibold");
      el.classList.remove("text-amber-700");
    }
  });
}
