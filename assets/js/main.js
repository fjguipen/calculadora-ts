let calculadora;
window.onload = () => {
    calculadora = new Calculadora("#display");
};
const mousePressHandle = (element) => {
    let value = element.dataset.key;
    let type = element.dataset.type;
    calculadora.onKeyPress(value, type);
};
const reset = () => {
    calculadora.reset();
};
const power = () => {
    calculadora.power();
};
//# sourceMappingURL=main.js.map