class Calculadora {
    state = {
        powered: false,
        operation: "",
        end: false,
    }
    display: Display;

    constructor(displayID) {
        this.display = new Display(displayID);
        this.state.operation = "";
    }

    power = () => {
        if (this.state.powered) {
            this.turnOff()
        } else {
            this.turnOn()
        }
        this.state.powered = !this.state.powered;
    }
    private turnOn() {
        this.display.updateDisplay("0");
        this.display.lightOn()
    }
    private turnOff() {
        this.display.updateDisplay("");
        this.state.operation = "";
        this.display.lightOff()
    }

    onKeyPress(value, type) {
        console.log(this.state.operation)
        if (!this.state.powered) { return }
        switch (type) {
            case "sign":
                if(this.state.end){this.state.end = false;}
                if (!this.state.operation || isNaN( Number(this.state.operation.slice(-1)) ) ) {
                        return
                    }
                this.calcular()    
                this.state.operation += value
                break;
            case "pow2":
                    if (this.state.operation){
                        this.state.operation = `Math.pow(${this.state.operation}, 2)`
                        this.calcular()
                    }
                
                break;
            case "result":
                this.calcular()
                this.state.end = true;
                break;

            default:
                if(this.state.operation === "0" || this.state.operation.match(/\D0/) ){
                    return
                }
                if(this.state.end){
                    this.state.operation = "";
                    this.display.clearDisplay()
                    this.state.end = false;
                }
                if(isNaN( Number(this.state.operation.slice(-1)) )){
                    this.display.clearDisplay()
                }
                this.state.operation += value
                this.display.updateDisplay(this.display.getValue() === "0" ? "" + value : this.display.getValue() + value)
                break;
        }
    }

    private calcular(): void{
        let resultado = eval(this.state.operation)
        this.display.updateDisplay(resultado);
        this.state.operation = resultado.toString();
    }

    reset(): void {
        if (!this.state.powered){return}
        this.display.updateDisplay("0");
        this.state.operation = "";
    }
}
