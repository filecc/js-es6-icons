/* Fixing the height of the application window on iPhone */
const setAppHeight = () => {
  document.documentElement.style.setProperty(
    '--app-height',
    `${window.innerHeight}px`,
  );
};
window.addEventListener('resize', setAppHeight);
setAppHeight();
