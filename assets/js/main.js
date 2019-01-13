let calculadora

window.onload = () =>{
    calculadora = new Calculadora("#display");
}

mousePressHandle = (element) => {
    let value = element.dataset.value
    let type = element.dataset.type
    calculadora.onKeyPress(value, type)
}

reset = () => {
    calculadora.reset()
}
power = () => {
    calculadora.power()
}