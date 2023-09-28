import PrototypeButton from './prototype_button';

import EventEmitter from '@/eventEmitter';
console.log(EventEmitter.listeners);


class BoldButton extends PrototypeButton {
    constructor() {
        super("bold", "bold", "/bold.svg", () => {
            console.log("bold button clicked");
        })
    }
}

export default new BoldButton();