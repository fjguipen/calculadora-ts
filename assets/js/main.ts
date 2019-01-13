let calculadora: Calculadora;

window.onload = (): void =>{
    calculadora = new Calculadora("#display");
}

const mousePressHandle = (element): void => {
    let value = element.dataset.key
    let type = element.dataset.type
    calculadora.onKeyPress(value, type)
}

const reset = (): void => {
    calculadora.reset()
}
const power = (): void => {
    calculadora.power()
}