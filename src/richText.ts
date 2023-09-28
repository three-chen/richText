import Toolbar from "./toolbar";
import Editor from "./editor";

class RichText {
    private _text: string;
    private _el: HTMLElement;

    private _toolbar: Toolbar;
    private _editor: Editor;

    constructor() {
    }

    public mount(el: HTMLElement) {
        // TODO
        this._el = el;
        this._editor = new Editor(this._el);
        this._toolbar = new Toolbar(this._el);
    }
}

export default RichText