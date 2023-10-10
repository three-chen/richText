declare class RichText {
    private _el;
    private _toolbar;
    private _editor;
    constructor();
    mount(el: HTMLElement): void;
    getHTML(): string;
    getElement(): HTMLElement;
    clear(): void;
}
export default RichText;
