import './editor.scss';
export default class Editor {
    private _editor;
    constructor(container: HTMLElement);
    init(editor: HTMLElement): void;
    setInnerHTML(html: string): void;
    onInput(): void;
    toggle(string: string): void;
    onMouseUp(): void;
}
