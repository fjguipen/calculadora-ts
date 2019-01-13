class Calculadora {
    state: {
        data: Array<string>,
        pos: number,
        powered: boolean,
    }
    display: Display;

    constructor(displayID) {
        this.state = {
            data: ["", "", ""],
            pos: 0,
            powered: false,
        }
        this.display = new Display(displayID);
    }
    power(): void {
        if (this.state.powered) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    }

    reset(): void {
        this.state.data = ["", "", ""];
        this.state.pos = 0;
        this.display.updateDisplay("");
    }

    onKeyPress(value, type): void {
        if (!this.state.powered) { return }
        console.log(this.state.data)
        switch (type) {
            case "number":    
                if (this.state.pos === 1){
                    this.state.pos++
                }
                    this.state.data[this.state.pos] += value;
                    this.display.updateDisplay(this.state.data[this.state.pos].toString())
                break;
            case "sign":
                if (this.state.pos === 0 && this.state.data[0] != "") {
                    this.state.pos++;
                    this.state.data[this.state.pos]= value;
                } else if (this.state.pos === 2){
                    this.state.data = [eval(this.state.data.join("")), "", ""]
                    this.display.updateDisplay(this.state.data[0])
                    this.state.pos=0;
                }
                break;
        }
    }

    private turnOn(): void {
        this.state.powered = true;
        this.display.lightOn();
    }

    private turnOff(): void {
        this.reset();
        this.state.powered = false;
        this.display.lightOff();
    }



}