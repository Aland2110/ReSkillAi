// A refresh starts at the beginning; normal in-page links keep their behavior.
const isPageReload = performance.getEntriesByType('navigation')[0]?.type === 'reload';
if (isPageReload) {
  history.scrollRestoration = 'manual';
  // A retained fragment would otherwise jump back to a section on refresh.
  if (location.hash) {
    history.replaceState(history.state, '', location.pathname + location.search);
  }
  window.addEventListener('pageshow', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, { once: true });
}
