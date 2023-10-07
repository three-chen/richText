import './index.scss';
interface Config {
    id: string;
    label: string;
    type: string;
}
export default class PrototypeButton {
    _el: HTMLButtonElement | HTMLInputElement;
    protected _id: string;
    protected _label: string;
    protected _icon: string;
    protected isActivate: boolean;
    protected _protobtnClick: () => void;
    protected _protobtnMouseEnter: () => void;
    protected _protobtnMouseLeave: () => void;
    /**
     *
     * @param id 该buttond 的id
     * @param label tooltip中的信息
     * @param icon 图像资源，我这里是svg
     * @param onClick 点击事件
     */
    constructor(config: Config, icon: string, onClick: () => void);
    init(el: HTMLButtonElement, type: string): void;
}
export {};
