export function initNavigation() {
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}