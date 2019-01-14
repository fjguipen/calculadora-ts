class Display {
    private value: string;
    private element: {
        self: HTMLElement,
        value: HTMLElement,
        operator: HTMLElement,
    }

    constructor(){
        let display: HTMLElement = document.querySelector("#display")
        this.element = {
            self: display,
            value: display.querySelector("#operator"),
            operator: display.querySelector("#value")
        }
        this.value = "";
        this.element.self.style.background = "#e0e0e0";
    }

    getValue(): string{
        return this.value;
    }

    lightOn(): void {
        this.element.self.style.background = "#f8f8f8";
    }
    lightOff(): void {
        this.element.self.style.background = "#e0e0e0";
    }

    clearDisplay(): void{
        this.value = "";
    }

    updateDisplay(value: string): void{
        this.value = value
        this.element.value.innerHTML = value;
    }
}
