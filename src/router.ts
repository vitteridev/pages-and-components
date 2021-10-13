import { initPageStepOne } from "./pages/page-step-1";
import { initPageThankYou } from "./pages/page-thankyou";
import { initPageWelcome } from "./pages/page-welcome";

const ROUTES = [
  {
    path: /\/welcome/,
    component: initPageWelcome,
  },
  {
    path: /\/step-1/,
    component: initPageStepOne,
  },
  {
    path: /\/thankyou/,
    component: initPageThankYou,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    console.log("el handle route recibio una nueva ruta", route);

    for (const r of ROUTES) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  handleRoute(location.pathname);
}
