import './index.scss';
export default class PrototypeButton {
    _el: HTMLElement;
    protected _id: string;
    protected _label: string;
    protected _icon: string;
    protected _protobtnClick: () => void;
    protected _protobtnMouseEnter: () => void;
    protected _protobtnMouseLeave: () => void;
    constructor(id: string, label: string, icon: string, onClick: () => void);
    init(el: HTMLElement): void;
}
