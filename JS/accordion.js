const accordionBuy = document.querySelector(".text-compra");
const accordionQuarentine = document.querySelector(".text-quarentena");
const accordionAclimatation = document.querySelector(".text-aclimatacao");

// Elementos
// const accordionBtn0 = document.querySelector("#accordionBtn0");
// const accordionBtn1 = document.querySelector("#accordionBtn1");
// const accordionBtn2 = document.querySelector("#accordionBtn2");

// accordionBtn0.addEventListener("click", () => handleAccordion(accordionBuy));
// accordionBtn1.addEventListener("click", () =>
//   handleAccordion(accordionQuarentine)
// );
// accordionBtn2.addEventListener("click", () =>
//   handleAccordion(accordionAclimatation)
// );

const accordions = [accordionBuy, accordionQuarentine, accordionAclimatation];

function buildAccordionReferences() {
  accordions.forEach((referencia, index) =>
    document
      .querySelector(`#accordionBtn${index}`)
      .addEventListener("click", () => handleAccordion(referencia))
  );
}

buildAccordionReferences();

function closeAccordions() {
  accordionQuarentine.classList.add("closed");
  accordionBuy.classList.add("closed");
  accordionAclimatation.classList.add("closed");
}

function handleAccordion(referenceBtn) {
  if (!referenceBtn.classList.contains("closed")) {
    // fecha todo mundo
    closeAccordions();
    return;
  }

  // fecha todo mundo
  closeAccordions();

  // abre
  referenceBtn.classList.remove("closed");
}
