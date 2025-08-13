export default function initNavbar() {
    const mobileMenu   = document.getElementById('mobileMenu');
    const overlay      = document.getElementById('menuOverlay');
    const toggleButton = document.querySelector('[data-toggle]');
    const closeBtn     = document.getElementById('closeMenuBtn');

    if (!mobileMenu || !overlay || !toggleButton) return;

    const openMenu = () => {
      mobileMenu.dataset.state = 'open';
      overlay.dataset.state = 'open';
      document.body.style.overflow = 'hidden';
      toggleButton.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
      mobileMenu.dataset.state = 'closed';
      overlay.dataset.state = 'closed';
      document.body.style.overflow = 'auto';
      toggleButton.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () =>
      mobileMenu.dataset.state === 'open' ? closeMenu() : openMenu();

    // Eventos
    toggleButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    closeBtn && closeBtn.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.dataset.state === 'open') closeMenu();
    });
}
