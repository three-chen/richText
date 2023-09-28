import PrototypeButton from './prototype_button';

class BoldButton extends PrototypeButton {
    constructor() {
        super("bold", "bold", "/bold.svg", () => {
            console.log("bold button clicked");
        })
    }
}

export default new BoldButton();