let calculadora;
/**
 * Una vez está todo cargado, inicio el modulo calculadora creando
 * una nueva instancia de esta
 *
 *
 */
window.onload = () => {
    calculadora = new Calculadora();
};
/**
 * Función que gestiona los clicks en los elementos html y lanza la funcion propia de la clase
 * calculadora con los calores:
 *  type: Tipo de boton
 *  value: Valor de la tecla
 *
 * @param element Elmento del dom que ha sido clicado
 *
 */
const mousePressHandle = (element) => {
    let value = element.dataset.key;
    let type = element.dataset.type;
    calculadora.onKeyPress(value, type);
};
/**
 * Funciones de lanzamiento para las teclas reseteo y encendido/apagado
 *
 */
const reset = () => {
    calculadora.reset("0");
};
const power = () => {
    calculadora.power();
};
//# sourceMappingURL=main.js.map