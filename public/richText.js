/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var PrototypeButton = /** @class */ (function () {
    function PrototypeButton(id, label, icon, onClick) {
        var _this = this;
        this._el = document.createElement("div");
        this._id = id;
        this._label = label;
        this._icon = icon;
        this._protobtnClick = onClick;
        // tooltip
        this._protobtnMouseEnter = function () {
            _this._el.children[0].classList.remove("toolbar-button-tooltip-inactive");
            _this._el.children[0].classList.add("toolbar-button-tooltip-active");
        };
        this._protobtnMouseLeave = function () {
            _this._el.children[0].classList.remove("toolbar-button-tooltip-active");
            _this._el.children[0].classList.add("toolbar-button-tooltip-inactive");
        };
        this.init(this._el);
    }
    PrototypeButton.prototype.init = function (el) {
        el.classList.add("toolbar-button");
        el.id = this._id;
        // tooltip
        var tootip = document.createElement("div");
        tootip.innerText = this._label;
        tootip.classList.add("toolbar-button-tooltip");
        tootip.classList.add("toolbar-button-tooltip-inactive");
        el.appendChild(tootip);
        // tooltip event
        el.addEventListener("mouseenter", this._protobtnMouseEnter);
        el.addEventListener("mouseleave", this._protobtnMouseLeave);
        el.addEventListener("click", this._protobtnClick);
        var icon = document.createElement("img");
        icon.classList.add("toolbar-button-icon");
        icon.src = this._icon;
        el.appendChild(icon);
    };
    return PrototypeButton;
}());

var BoldButton = /** @class */ (function (_super) {
    __extends(BoldButton, _super);
    function BoldButton() {
        return _super.call(this, "bold", "bold", "/bold.svg", function () {
            console.log("bold button clicked");
        }) || this;
    }
    return BoldButton;
}(PrototypeButton));
var BoldButton$1 = new BoldButton();

var UlButton = /** @class */ (function (_super) {
    __extends(UlButton, _super);
    function UlButton() {
        return _super.call(this, "ul", "ul", "/ul.svg", function () {
            console.log("ul button clicked");
        }) || this;
    }
    return UlButton;
}(PrototypeButton));
var UlButton$1 = new UlButton();

var ImageButton = /** @class */ (function (_super) {
    __extends(ImageButton, _super);
    function ImageButton() {
        return _super.call(this, "image", "image", "/image.svg", function () {
            console.log("image button clicked");
        }) || this;
    }
    return ImageButton;
}(PrototypeButton));
var ImageButton$1 = new ImageButton();

var Toolbar = /** @class */ (function () {
    function Toolbar(container) {
        this._toolbar = document.createElement('div');
        this.init(this._toolbar);
        container.appendChild(this._toolbar);
    }
    Toolbar.prototype.init = function (toolbar) {
        toolbar.classList.add('richText-toolbar');
        this.addButton(BoldButton$1);
        this.addButton(UlButton$1);
        this.addButton(ImageButton$1);
    };
    Toolbar.prototype.addButton = function (button) {
        this._toolbar.appendChild(button._el);
    };
    return Toolbar;
}());

var Editor = /** @class */ (function () {
    function Editor(container) {
        this._editor = null;
        this._editor = document.createElement('div');
        this.init(this._editor);
        container.appendChild(this._editor);
    }
    Editor.prototype.init = function (editor) {
        editor.classList.add('richText-editor');
        editor.ariaPlaceholder = 'Enter your text here';
        editor.contentEditable = "true";
    };
    return Editor;
}());

var RichText = /** @class */ (function () {
    function RichText() {
    }
    RichText.prototype.mount = function (el) {
        // TODO
        this._el = el;
        this._editor = new Editor(this._el);
        this._toolbar = new Toolbar(this._el);
    };
    return RichText;
}());

export { RichText as default };
//# sourceMappingURL=richText.js.map
