document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.page');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-page');

      // Elrejti az összes oldalt
      pages.forEach(page => page.classList.remove('active'));

      // Megjeleníti a kiválasztott oldalt
      document.getElementById(targetId).classList.add('active');

      // Visszagörget az oldal tetejére
      window.scrollTo(0, 0); // vagy: window.scrollTo(0, 0);

      // Menüpont aktív állapot frissítése
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});


document.addEventListener("scroll", () => {
  const overlay = document.querySelector("header");

  // Mennyit görgettünk (pl. 0 - 300px között)
  const scrollY = window.scrollY;

  // Max görgetés, ahol eléri a végső sötétséget
  const maxScroll = 300;

  // Átlátszóság kiszámítása (0.0 - 0.8 között)
  const opacity = Math.min(scrollY / maxScroll, 1) * 0.9;

  // Beállítjuk az új háttérszínt
  overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});

document.addEventListener("DOMContentLoaded", () => {
  const langToggleBtn = document.getElementById("lang-toggle");
  const flagiImg = document.getElementById("flag-img")
  let currentLang = "hu"; // Alapértelmezett nyelv

  langToggleBtn.addEventListener("click", () => {
    // Váltás másik nyelvre
    currentLang = currentLang === "hu" ? "en" : "hu";

    // Minden szöveg frissítése
    document.querySelectorAll("[data-en]").forEach(el => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    flagiImg.src = currentLang === "hu" ? "uk.png" : "hu.png";
    });
});

