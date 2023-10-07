interface ButtonActivateState {
    isBold: Boolean;
    isUl: Boolean;
    isImage: Boolean;
}
declare let richTextState: string;
declare const buttonActivateState: ButtonActivateState;
interface SelectionState {
    startEl: Node | null;
    startElIndex: number | null;
    endEl: Node | null;
    endElIndex: number | null;
    type: string;
}
declare const selectionState: SelectionState;
declare function setSelectionState(selection: Selection): void;
export { buttonActivateState, selectionState, richTextState, setSelectionState };
