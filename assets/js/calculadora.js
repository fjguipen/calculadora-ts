class Calculadora {
    constructor(displayID) {
        this.powered = false;
        this.next = 0;
        this.power = () => {
            if (this.powered) {
                this.turnOff();
            }
            else {
                this.turnOn();
            }
            this.powered = !this.powered;
        };
        this.display = new Display(displayID);
        this.operation = "0";
    }
    turnOn() {
        this.display.updateDisplay("0");
    }
    turnOff() {
        this.display.updateDisplay("");
    }
    onKeyPress(value, type) {
        if (!this.powered) {
            return;
        }
        switch (type) {
            case "number":
                this.operation += value;
                this.display.updateDisplay(this.display.getValue() + value);
                break;
            default:
                break;
        }
    }
    calcular() {
        this.display.updateDisplay(eval(this.operation));
        this.next = 0;
        this.operation = "";
    }
    reset() {
        this.display.updateDisplay("0");
        this.operation = "0";
    }
}
//# sourceMappingURL=calculadora.js.map