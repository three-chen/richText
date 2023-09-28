import './editor.scss'

export default class Editor {
    private _editor: HTMLDivElement | null = null;

    constructor(container: HTMLElement) {
        this._editor = document.createElement('div');
        this.init(this._editor)
        container.appendChild(this._editor);
    }

    public init(editor: HTMLElement) {
        editor.classList.add('richText-editor');
        editor.ariaPlaceholder = 'Enter your text here';
        editor.contentEditable = "true";
    }
}