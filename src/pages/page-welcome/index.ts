export function initPageWelcome(params) {
  const DIV = document.createElement("div");
  DIV.innerHTML = `
    <header-el></header-el>
    <h1>Que pasaaa</h1>
  `;
  DIV.addEventListener("click", () => {
    params.goTo("/step-1");
  });
  return DIV;
}
