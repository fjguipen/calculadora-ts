class Display {
    constructor(displayId) {
        this.element = document.querySelector(displayId);
        this.value = "";
        this.element.style.background = "#e0e0e0";
    }
    getValue() {
        return this.value;
    }
    lightOn() {
        this.element.style.background = "#f8f8f8";
    }
    lightOff() {
        this.element.style.background = "#e0e0e0";
    }
    clearDisplay() {
        this.value = "";
    }
    updateDisplay(value) {
        this.value = value;
        this.element.innerHTML = value;
    }
}
//# sourceMappingURL=Display.js.map