import './index.scss'

export default class PrototypeButton {
    public _el: HTMLElement;
    protected _id: string;
    protected _label: string;
    protected _icon: string;
    protected _protobtnClick: () => void;
    protected _protobtnMouseEnter: () => void;
    protected _protobtnMouseLeave: () => void;

    constructor(id: string, label: string, icon: string, onClick: () => void) {
        this._el = document.createElement("div");
        this._id = id;
        this._label = label;
        this._icon = icon;
        this._protobtnClick = onClick;

        // tooltip
        this._protobtnMouseEnter = () => {
            this._el.children[0].classList.remove("toolbar-button-tooltip-inactive");
            this._el.children[0].classList.add("toolbar-button-tooltip-active");
        }
        this._protobtnMouseLeave = () => {
            this._el.children[0].classList.remove("toolbar-button-tooltip-active");
            this._el.children[0].classList.add("toolbar-button-tooltip-inactive");
        }
        this.init(this._el)
    }

    public init(el: HTMLElement) {
        el.classList.add("toolbar-button");
        el.id = this._id;

        // tooltip
        const tootip = document.createElement("div");
        tootip.innerText = this._label;
        tootip.classList.add("toolbar-button-tooltip");
        tootip.classList.add("toolbar-button-tooltip-inactive");
        el.appendChild(tootip);

        // tooltip event
        el.addEventListener("mouseenter", this._protobtnMouseEnter);
        el.addEventListener("mouseleave", this._protobtnMouseLeave);
        el.addEventListener("click", this._protobtnClick);

        const icon = document.createElement("img");
        icon.classList.add("toolbar-button-icon");
        icon.src = this._icon;
        el.appendChild(icon);
    }
}