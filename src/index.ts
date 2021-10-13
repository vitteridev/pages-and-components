import { initRouter } from "./router";
import { initHeader } from "./components/header/index";

(function () {
  //Components
  initHeader();

  const $ROOT = document.querySelector(".root");
  initRouter($ROOT);
})();
