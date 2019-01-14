class Display {
    constructor() {
        let display = document.querySelector("#display");
        this.element = {
            self: display,
            value: display.querySelector("#operator"),
            operator: display.querySelector("#value")
        };
        this.value = "";
        this.element.self.style.background = "#e0e0e0";
    }
    getValue() {
        return this.value;
    }
    lightOn() {
        this.element.self.style.background = "#f8f8f8";
    }
    lightOff() {
        this.element.self.style.background = "#e0e0e0";
    }
    clearDisplay() {
        this.value = "";
    }
    updateDisplay(value) {
        this.value = value;
        this.element.value.innerHTML = value;
    }
}
//# sourceMappingURL=Display.js.map