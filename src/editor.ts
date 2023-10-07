import './editor.scss'

// import { richTextState, selectionState, setSelectionState } from '@/store/richTextStore'

export default class Editor {
    private _editor: HTMLDivElement | null = null;

    constructor(container: HTMLElement) {
        this._editor = document.createElement('div');
        this.init(this._editor)
        container.appendChild(this._editor);
    }

    public init(editor: HTMLElement) {
        const that = this;
        editor.classList.add('richText-editor');
        editor.contentEditable = "true";

        that.toggle('bold')

        editor.addEventListener('input', that.onInput.bind(that));
        editor.addEventListener('mouseup', that.onMouseUp.bind(that));
    }

    public setInnerHTML(html: string) {
        this._editor!.innerHTML = html;
    }

    public onInput() {
        console.log('input', this._editor!.innerHTML);

        // setSelectionState(document.getSelection());
    }

    public toggle(string: string) {
        // const selection = window.getSelection();
        // if (selection) {
        //     const range = selection.getRangeAt(0);
        //     const span = document.createElement('span');
        //     span.style.fontWeight = 'bold';
        //     range.surroundContents(span);
        // }
    }

    public onMouseUp() {
        // const selection = window.getSelection();
        // if (selection) {
        //     const range = selection.getRangeAt(0);
        //     console.log(range);

        //     const span = document.createElement('span');
        //     span.style.fontWeight = 'bold';
        //     range.surroundContents(span);
        // }

        // setSelectionState(document.getSelection());
        // console.log('onMouseUp', selectionState);
    }

}