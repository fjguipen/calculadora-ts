class Display {
    private value: string;
    private element: HTMLElement;

    constructor(displayId: string){
        this.element = document.querySelector(displayId)
        this.value = "0";
        this.element.style.background = "#e0e0e0";
    }

    getValue(): string{
        return this.value;
    }

    lightOn(): void {
        this.element.style.background = "#f8f8f8";
    }
    lightOff(): void {
        this.element.style.background = "#e0e0e0";
    }

    clearDisplay(){
        this.value = "";
    }

    updateDisplay(value: string): void{
        this.value = value
        this.element.innerHTML = value;
    }
}
