export function initPageThankYou(params) {
  const x = document.createElement("div");
  x.innerHTML = `
    <header-el></header-el>
  `;
  x.textContent = "thankyou";
  x.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return x;
}
