class Display {
    constructor(displayId) {
        this.element = document.querySelector(displayId);
        this.value = "0";
    }
    getValue() {
        return this.value;
    }
    updateDisplay(value) {
        this.value = value;
        this.element.innerHTML = value;
    }
}
//# sourceMappingURL=Display.js.map