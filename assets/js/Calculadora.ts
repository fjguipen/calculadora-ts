class Calculadora {
    operation: string;
    powered: boolean = false;
    next: number = 0;
    display: Display;

    constructor(displayID) {
        this.display = new Display(displayID);
        this.operation = "0";
    }

    power = () => {
        if (this.powered) {
            this.turnOff()
        } else {
            this.turnOn()
        }
        this.powered = !this.powered;
    }
    private turnOn() {
        this.display.updateDisplay("0")
    }
    private turnOff() {
        this.display.updateDisplay("");
    }

    onKeyPress(value, type) {
        if (!this.powered) { return }
        switch (type) {
            case "number":
                this.operation += value
                this.display.updateDisplay(this.display.getValue() + value)
                break;

            default:
                break;
        }
    }

    calcular(): void{
        this.display.updateDisplay(eval(this.operation));
        this.next = 0
        this.operation = "";
    }

    reset(): void {
        this.display.updateDisplay("0");
        this.operation = "0";
    }
}
