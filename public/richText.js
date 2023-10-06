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
    /**
     *
     * @param id 该buttond 的id
     * @param label tooltip中的信息
     * @param icon 图像资源，我这里是svg
     * @param onClick 点击事件
     */
    function PrototypeButton(id, label, icon, onClick) {
        var that = this;
        that._el = document.createElement('div');
        that._id = id;
        that._label = label;
        that._icon = icon;
        that.isActivate = false;
        that._protobtnClick = onClick;
        that._protobtnMouseEnter = function () {
            // tooltip
            that._el.children[0].classList.remove('richText-toolbar-button-tooltip-inactive');
            that._el.children[0].classList.add('richText-toolbar-button-tooltip-active');
        };
        that._protobtnMouseLeave = function () {
            that._el.children[0].classList.remove('richText-toolbar-button-tooltip-active');
            that._el.children[0].classList.add('richText-toolbar-button-tooltip-inactive');
        };
        that.init(that._el);
    }
    PrototypeButton.prototype.init = function (el) {
        var that = this;
        // button
        el.classList.add('richText-toolbar-button');
        el.id = that._id;
        el.addEventListener('click', function () {
            that.isActivate = !that.isActivate;
            if (that.isActivate) {
                el.classList.add('richText-toolbar-button-active');
            }
            else {
                el.classList.remove('richText-toolbar-button-active');
            }
        });
        // tooltip
        var tootip = document.createElement('div');
        tootip.innerText = that._label;
        tootip.classList.add('richText-toolbar-button-tooltip');
        tootip.classList.add('richText-toolbar-button-tooltip-inactive');
        el.appendChild(tootip);
        // tooltip event
        el.addEventListener('mouseenter', that._protobtnMouseEnter);
        el.addEventListener('mouseleave', that._protobtnMouseLeave);
        el.addEventListener('click', that._protobtnClick);
        // icon
        var icon = document.createElement('div');
        icon.classList.add('richText-toolbar-button-icon');
        icon.innerHTML = that._icon;
        el.appendChild(icon);
    };
    return PrototypeButton;
}());

var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
    }
    /**
     * 监听事件
     * @param event 事件名
     * @param listener 监听函数
     */
    EventEmitter.on = function (event, listener) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(listener);
    };
    /**
     * 触发事件
     * @param event 事件名
     * @param args 参数
     */
    EventEmitter.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.listeners.has(event)) {
            var events = this.listeners.get(event);
            events.forEach(function (listener) { return listener.apply(void 0, args); });
        }
    };
    EventEmitter.listeners = new Map();
    return EventEmitter;
}());

console.log(EventEmitter.listeners);
var boldSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path fill=\"currentColor\" d=\"M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z\"></path></svg>";
var BoldButton = /** @class */ (function (_super) {
    __extends(BoldButton, _super);
    function BoldButton() {
        return _super.call(this, 'bold', 'bold', boldSVG, function () {
            console.log('bold button clicked');
        }) || this;
    }
    return BoldButton;
}(PrototypeButton));
var BoldButton$1 = new BoldButton();

var ulSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path fill=\"currentColor\" d=\"M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z\"></path></svg>";
var UlButton = /** @class */ (function (_super) {
    __extends(UlButton, _super);
    function UlButton() {
        return _super.call(this, 'ul', 'ul', ulSVG, function () {
            console.log('ul button clicked');
        }) || this;
    }
    return UlButton;
}(PrototypeButton));
var UlButton$1 = new UlButton();

var imgaeSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><line x1=\"15\" y1=\"8\" x2=\"15.01\" y2=\"8\"></line><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"3\"></rect><path d=\"M4 15l4 -4a3 5 0 0 1 3 0l5 5\"></path><path d=\"M14 14l1 -1a3 5 0 0 1 3 0l2 2\"></path></svg>";
var ImageButton = /** @class */ (function (_super) {
    __extends(ImageButton, _super);
    function ImageButton() {
        return _super.call(this, 'image', 'image', imgaeSVG, function () {
            console.log('image button clicked');
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
