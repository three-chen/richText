import './editor.scss';
export default class Editor {
    private _editor;
    constructor(container: HTMLElement);
    init(editor: HTMLElement): void;
    getInnerHTML(): string;
    setInnerHTML(html: string): void;
    getInnerElement(): HTMLElement | null;
    clear(): void;
}
