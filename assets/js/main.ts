let calculadora: Calculadora;

/**
 * Una vez está todo cargado, inicio el modulo calculadora creando
 * una nueva instancia de esta
 * 
 * 
 */
window.onload = (): void =>{
    calculadora = new Calculadora();
}

/** 
 * Función que gestiona los clicks en los elementos html y lanza la funcion propia de la clase
 * calculadora con los calores:
 *  type: Tipo de boton
 *  value: Valor de la tecla
 * 
 * @param element Elmento del dom que ha sido clicado
 * 
 */
const mousePressHandle = (element): void => {
    let value = element.dataset.key
    let type = element.dataset.type
    calculadora.onKeyPress(value, type)
}

/**
 * Funciones de lanzamiento para las teclas reseteo y encendido/apagado
 * 
 */
const reset = (): void => {
    calculadora.reset("0")
}
const power = (): void => {
    calculadora.power()
}

