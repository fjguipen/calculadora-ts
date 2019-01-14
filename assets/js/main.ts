let calculadora: Calculadora;

window.onload = (): void =>{
    calculadora = new Calculadora();
}

const mousePressHandle = (element): void => {
    let value = element.dataset.key
    let type = element.dataset.type
    calculadora.onKeyPress(value, type)
}

const reset = (): void => {
    calculadora.reset("0")
}
const power = (): void => {
    calculadora.power()
}