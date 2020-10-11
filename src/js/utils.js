export const navigate = (href) => {
  window.history.pushState({}, href, href);
  dispatchEvent(new PopStateEvent("popstate", {}));
};
