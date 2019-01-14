class Calculadora {
    state: {
        data: Array<string>,
        pos: number,
        powered: boolean,
        err: boolean,
    }
    display: Display;

    constructor() {
        this.state = {
            data: ["", "", ""],
            pos: 0,
            powered: false,
            err: false,
        }
        this.display = new Display();
    }
    power(): void {
        if (this.state.powered) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    }

    reset(val: string): void {

        if (!this.state.powered) { return }
        this.state.err = false;
        this.state.data = [val, "", ""];
        this.state.pos = 0;
        this.display.updateDisplay(this.state.data[0]);
    }

    onKeyPress(value, type): void {
        if (!this.state.powered || this.state.err) { return }
        switch (type) {
            case "number":
                if (this.state.pos === -1) {
                    this.state.data[0] = "";
                    this.state.pos++
                }
                if (this.state.pos === 1) {
                    this.state.pos++
                }
                if (this.state.data[this.state.pos] === "0") {
                    if (value === "0") {
                        return
                    }
                    this.state.data[this.state.pos] = "";
                }
                this.state.data[this.state.pos] += value;
                this.display.updateDisplay(this.state.data[this.state.pos].toString())

                break;
            case "sign":
                if (this.state.pos === -1) {
                    this.state.pos = 0;
                }
                if (this.state.pos === 0 && this.state.data[0] != "") {
                    this.state.pos++;
                    this.state.data[this.state.pos] = value;
                } else if (this.state.pos === 1) {
                    this.state.data[this.state.pos] = value;
                } else if (this.state.pos === 2) {
                    this.calcular(value);
                    this.state.pos = 1;
                }
                break;
            case "dot":
                if(this.state.pos === -1){
                    this.state.pos = 0
                }
                if(!this.state.data[this.state.pos].match(/\./)){
                    this.state.data[this.state.pos] += value
                    this.display.updateDisplay(this.state.data[this.state.pos])
                }
                break
            case "result":
                if (this.state.pos != 2) {
                    this.state.data[1] = ""
                    return
                }
                this.calcular();
                this.state.pos = -1;
        }
    }
    private calcular(value: string="") {
        this.state.data.forEach(e=>{
            if(e === "Infinity" || e === "NaN"){
                console.log("Entra1")
                this.display.updateDisplay("error")
                this.state.err = true;
            }
        })
        
        if (this.state.err){return}
        
        let operation: string = this.state.data[1];
        
        switch (operation) {
            case "pow":
                this.state.data = [eval(`Math.pow(${this.state.data[0]},${this.state.data[2]})`).toString(), value, ""]
                break
            default:
                this.state.data = [eval(this.state.data.join("")).toString(), value, ""]
                break
        }
        this.display.updateDisplay(this.state.data[0])
    }
    private turnOn(): void {
        this.state.powered = true;
        this.state.err = false;
        this.state.data = ["0", "", ""]
        this.display.updateDisplay(this.state.data[0]);
        this.display.lightOn();
    }

    private turnOff(): void {
        this.reset("");
        this.state.powered = false;
        this.display.lightOff();
    }



}