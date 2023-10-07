import PrototypeButton from './prototype_button';
declare class ImageButton extends PrototypeButton {
    constructor();
    getLocalImage(selectedFile: File): Promise<void>;
    showImage(imageSrc: string): void;
}
declare const _default: ImageButton;
export default _default;
