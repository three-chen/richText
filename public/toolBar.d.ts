import PrototypeButton from "./toolbar_button/prototype_button";
import "./toolbar.scss";
export default class Toolbar {
    private _toolbar;
    constructor(container: HTMLElement);
    init(toolbar: HTMLElement): void;
    addButton(button: PrototypeButton): void;
}
