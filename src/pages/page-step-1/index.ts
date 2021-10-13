export function initPageStepOne(params) {
  const x = document.createElement("div");
  x.textContent = "step 1";
  x.addEventListener("click", () => {
    params.goTo("/thankyou");
  });
  return x;
}
