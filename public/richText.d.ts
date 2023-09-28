declare class RichText {
    private _text;
    private _el;
    private _toolbar;
    private _editor;
    constructor();
    mount(el: HTMLElement): void;
}
export default RichText;
