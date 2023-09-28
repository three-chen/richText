import PrototypeButton from './prototype_button';

class UlButton extends PrototypeButton {
    constructor() {
        super("ul", "ul", "/ul.svg", () => {
            console.log("ul button clicked");
        })
    }
}

export default new UlButton();