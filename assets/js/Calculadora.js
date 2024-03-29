/**
 * Clase calculadora: Es el core del modulo calculadora. Utliza la clase Display para manejar
 * la información de salida
 *
 * @param state Objeto que controla el estado actual de la calculadora
 *      data: Array donde almaceno los valores para la operación y el display:
 *          POS1(PrimerOperando), POS2(Signo), POS3(SegundoOperando)
 *      pos: Puntero para determinar en qué posicion se insertó la ultima vez
 *      powered: Controla si la calculadora está encendida o no
 *      err: Controla si ha surgido algun error en la operación
 * @param display Objeto del tipo Display utilizado para mostrar la información de saluida
 *
 */
class Calculadora {
    constructor() {
        //Inicializacion de la calculadora apagada
        this.state = {
            data: ["", "", ""],
            pos: 0,
            powered: false,
            err: false,
        };
        this.display = new Display();
    }
    power() {
        if (this.state.powered) {
            this.turnOff();
        }
        else {
            this.turnOn();
        }
    }
    reset(val) {
        if (!this.state.powered) {
            return;
        }
        this.state.err = false;
        this.state.data = [val, "", ""];
        this.state.pos = 0;
        this.display.updateDisplay(this.state.data[0]);
    }
    /**
     * Funcion para controlar qué ocurre cuando se pulsa cualquier tecla,
     * (excepto reset() y power() que tienen funcionamientos propios) de forma
     * que se controla si se ha pulsado un número o un signo, el punto..etc.
     *
     * @param value Valor de la tecla pulsada
     * @param type Tipo de tecla pulsada
     */
    onKeyPress(value, type) {
        /*Si la calculadora está apagada o se produjo error en la operación,
        no se hace nada.*/
        if (!this.state.powered || this.state.err) {
            return;
        }
        switch (type) {
            /*Cuando se hace click en un numero, se tiene en cuenta si
            es parte del primer operando o el segundo*/
            case "number":
                if (this.state.pos === -1) {
                    this.state.data[0] = "";
                    this.state.pos++;
                }
                if (this.state.pos === 1) {
                    this.state.pos++;
                }
                if (this.state.data[this.state.pos] === "0") {
                    if (value === "0") {
                        return;
                    }
                    this.state.data[this.state.pos] = "";
                }
                this.state.data[this.state.pos] += value;
                this.display.updateDisplay(this.state.data[this.state.pos].toString());
                break;
            case "sign":
                if (this.state.pos === -1) {
                    this.state.pos = 0;
                }
                if (this.state.pos === 0 && this.state.data[0] != "") {
                    this.state.pos++;
                    this.state.data[this.state.pos] = value;
                }
                else if (this.state.pos === 1) {
                    this.state.data[this.state.pos] = value;
                }
                else if (this.state.pos === 2) {
                    this.calcular(value);
                    this.state.pos = 1;
                }
                break;
            case "dot":
                if (this.state.pos === -1) {
                    this.state.pos = 0;
                }
                if (!this.state.data[this.state.pos].match(/\./) && !this.state.data[this.state.pos].match(/Infinity|NaN/)) {
                    this.state.data[this.state.pos] += value;
                    this.display.updateDisplay(this.state.data[this.state.pos]);
                }
                break;
            case "result":
                if (this.state.pos != 2) {
                    this.state.data[1] = "";
                    return;
                }
                this.calcular();
                this.state.pos = -1;
        }
    }
    calcular(value = "") {
        this.state.data.forEach(e => {
            if (e === "Infinity" || e === "NaN") {
                this.display.updateDisplay("error");
                this.state.err = true;
            }
        });
        if (this.state.err) {
            return;
        }
        let operation = this.state.data[1];
        switch (operation) {
            case "pow":
                this.state.data = [eval(`Math.pow(${this.state.data[0]},${this.state.data[2]})`).toString(), value, ""];
                break;
            default:
                this.state.data = [eval(this.state.data.join("")).toString(), value, ""];
                break;
        }
        this.display.updateDisplay(this.state.data[0]);
    }
    turnOn() {
        this.state.powered = true;
        this.state.err = false;
        this.state.data = ["0", "", ""];
        this.display.updateDisplay(this.state.data[0]);
        this.display.lightOn();
    }
    turnOff() {
        this.reset("");
        this.state.powered = false;
        this.display.lightOff();
    }
}
//# sourceMappingURL=Calculadora.js.map