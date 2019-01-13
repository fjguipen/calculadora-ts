class Display {
    private value: string;
    private element: HTMLElement;

    constructor(displayId: string){
        this.element = document.querySelector(displayId)
        this.value = "0";
    }

    getValue(): string{
        return this.value;
    }

    updateDisplay(value: string): void{
        this.value = value
        this.element.innerHTML = value;
    }
}
