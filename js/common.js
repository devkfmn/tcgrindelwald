(() => {
  const burger = document.querySelector('.burger');
  const mainNav = document.querySelector('.main-nav');

  if (burger && mainNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
  }

  function updateMenu(menu = []) {
    const menuItems = document.querySelectorAll('.main-nav ul li a');
    menuItems.forEach((item, index) => {
      if (menu[index]) {
        item.textContent = menu[index];
      }
    });
  }

  function createLanguageSwitcher(translations = {}, applyContent = () => {}) {
    function switchLanguage(lang, event) {
      if (event) event.preventDefault();

      const content = translations[lang];
      if (!content) return;

      localStorage.setItem('language', lang);
      if (content.menu) {
        updateMenu(content.menu);
      }
      applyContent(content);
    }

    window.switchLanguage = switchLanguage;

    document.addEventListener('DOMContentLoaded', () => {
      const savedLanguage = localStorage.getItem('language');
      const defaultLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : Object.keys(translations)[0];
      if (defaultLanguage) {
        switchLanguage(defaultLanguage);
      }
    });
  }

  window.createLanguageSwitcher = createLanguageSwitcher;
})();

