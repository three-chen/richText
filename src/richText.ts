import Toolbar from "./toolbar";
import Editor from "./editor";

// import 

class RichText {
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

    public getHTML() {
        return this._editor.getInnerHTML();
    }

    public getElement() {
        return this._editor.getInnerElement();
    }

    public clear() {
        this._editor.clear();
    }

    /**
     * 上传 this._editor 中的所有图片
     */
    public uploadImages() {

    }
}

export default RichText