import PrototypeButton from './prototype_button';

class ImageButton extends PrototypeButton {
    constructor() {
        super("image", "image", "/image.svg", () => {
            console.log("image button clicked");
        })
    }
}

export default new ImageButton();