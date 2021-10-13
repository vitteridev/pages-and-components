export function initHeader() {
  class HeaderEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const STYLE = document.createElement("style");
      STYLE.innerHTML = `
        .root{
          background-color: #ff8282;
          width: 100%;
          padding: 17px 0;
          text-align: center;
        }
      `;

      const SHADOW = this.attachShadow({ mode: "open" });
      SHADOW.appendChild(STYLE);

      const HEADER = document.createElement("header");
      HEADER.textContent = "Header";
      HEADER.classList.add("root");

      SHADOW.appendChild(HEADER);
    }
  }
  customElements.define("header-el", HeaderEl);
}
