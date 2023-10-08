import './editor.scss';
export default class Editor {
    private _editor;
    constructor(container: HTMLElement);
    init(editor: HTMLElement): void;
    getInnerHTML(): string;
}
