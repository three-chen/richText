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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    function PrototypeButton(config, icon, onClick) {
        var that = this;
        that._el = document.createElement('button');
        that._id = config.id;
        that._label = config.label;
        that._icon = icon;
        that.isActivate = false;
        that._protobtnClick = onClick;
        that._protobtnMouseEnter = function () {
            // toolbar-button
            that._el.classList.add('richText-toolbar-button-hover');
            // tooltip
            that._el.children[0].classList.remove('richText-toolbar-button-tooltip-inactive');
            that._el.children[0].classList.add('richText-toolbar-button-tooltip-active');
        };
        that._protobtnMouseLeave = function () {
            // toolbar-button
            that._el.classList.remove('richText-toolbar-button-hover');
            // tooltip
            that._el.children[0].classList.remove('richText-toolbar-button-tooltip-active');
            that._el.children[0].classList.add('richText-toolbar-button-tooltip-inactive');
        };
        that.init(that._el, config.type);
    }
    PrototypeButton.prototype.init = function (el, type) {
        var that = this;
        // button
        el.classList.add('richText-toolbar-button');
        el.id = that._id;
        // el.addEventListener('click', () => {
        //   that.isActivate = !that.isActivate
        //   if (that.isActivate) {
        //     el.classList.add('richText-toolbar-button-active')
        //   } else {
        //     el.classList.remove('richText-toolbar-button-active')
        //   }
        // })
        // tooltip
        var tootip = document.createElement('div');
        tootip.innerText = that._label;
        tootip.classList.add('richText-toolbar-button-tooltip');
        tootip.classList.add('richText-toolbar-button-tooltip-inactive');
        el.appendChild(tootip);
        // tooltip event
        el.addEventListener('mouseenter', that._protobtnMouseEnter);
        el.addEventListener('mouseleave', that._protobtnMouseLeave);
        // icon
        var icon = document.createElement('div');
        icon.classList.add('richText-toolbar-button-icon');
        icon.innerHTML = that._icon;
        el.appendChild(icon);
        // input 
        switch (type) {
            case 'button':
                el.addEventListener('click', that._protobtnClick);
                break;
            case 'input':
                var input = document.createElement('input');
                input.classList.add('richText-toolbar-button-input');
                input.type = 'file';
                input.accept = 'image/*'; // 限制只能选择图片文件
                el.appendChild(input);
                el.addEventListener('click', that._protobtnClick);
                break;
        }
    };
    return PrototypeButton;
}());

// import { buttonActivateState, richTextState } from '@/store/richTextStore'
var boldSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path fill=\"currentColor\" d=\"M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z\"></path></svg>";
var BoldButton = /** @class */ (function (_super) {
    __extends(BoldButton, _super);
    function BoldButton() {
        return _super.call(this, { id: 'bold', label: 'bold', type: "button" }, boldSVG, function () {
            // buttonActivateState.isBold = !buttonActivateState.isBold
            document.execCommand('bold', false, null);
        }) || this;
    }
    return BoldButton;
}(PrototypeButton));
var BoldButton$1 = new BoldButton();

// import { buttonActivateState, richTextState } from '@/store/richTextStore'
var ulSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path fill=\"currentColor\" d=\"M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z\"></path></svg>";
var UlButton = /** @class */ (function (_super) {
    __extends(UlButton, _super);
    function UlButton() {
        return _super.call(this, { id: 'ul', label: 'ul', type: "button" }, ulSVG, function () {
            // buttonActivateState.isUl = !buttonActivateState.isUl
            document.execCommand('insertUnorderedList', false, null);
        }) || this;
    }
    return UlButton;
}(PrototypeButton));
var UlButton$1 = new UlButton();

// import { buttonActivateState, richTextState } from '@/store/richTextStore'
var imgaeSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><line x1=\"15\" y1=\"8\" x2=\"15.01\" y2=\"8\"></line><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"3\"></rect><path d=\"M4 15l4 -4a3 5 0 0 1 3 0l5 5\"></path><path d=\"M14 14l1 -1a3 5 0 0 1 3 0l2 2\"></path></svg>";
var ImageButton = /** @class */ (function (_super) {
    __extends(ImageButton, _super);
    function ImageButton() {
        var _this = _super.call(this, { id: 'image', label: 'image', type: "input" }, imgaeSVG, function () { return __awaiter(_this, void 0, void 0, function () {
            var inputEl;
            var _this = this;
            return __generator(this, function (_a) {
                inputEl = this._el.lastChild;
                inputEl.addEventListener('change', function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var selectedFile;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                selectedFile = event.target.files[0];
                                return [4 /*yield*/, this.getLocalImage(selectedFile)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                inputEl.click();
                return [2 /*return*/];
            });
        }); }) || this;
        return _this;
    }
    // 打开文件读取器，拿到用户选中的文件
    ImageButton.prototype.getLocalImage = function (selectedFile) {
        return __awaiter(this, void 0, void 0, function () {
            var that, reader;
            return __generator(this, function (_a) {
                that = this;
                reader = new FileReader();
                reader.onload = function (e) {
                    var imageSrc = e.target.result;
                    console.log(imageSrc);
                    that.showImage(imageSrc);
                };
                reader.readAsDataURL(selectedFile);
                return [2 /*return*/];
            });
        });
    };
    ImageButton.prototype.showImage = function (imageSrc) {
        var imageEl = this._el.lastChild;
        imageEl.src = imageSrc;
        imageEl.style.display = "block";
        imageEl.style.width = "100%";
    };
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

// import { richTextState, selectionState, setSelectionState } from '@/store/richTextStore'
var Editor = /** @class */ (function () {
    function Editor(container) {
        this._editor = null;
        this._editor = document.createElement('div');
        this.init(this._editor);
        container.appendChild(this._editor);
    }
    Editor.prototype.init = function (editor) {
        var that = this;
        editor.classList.add('richText-editor');
        editor.contentEditable = "true";
        that.toggle('bold');
        editor.addEventListener('input', that.onInput.bind(that));
        editor.addEventListener('mouseup', that.onMouseUp.bind(that));
    };
    Editor.prototype.setInnerHTML = function (html) {
        this._editor.innerHTML = html;
    };
    Editor.prototype.onInput = function () {
        console.log('input', this._editor.innerHTML);
        // setSelectionState(document.getSelection());
    };
    Editor.prototype.toggle = function (string) {
        // const selection = window.getSelection();
        // if (selection) {
        //     const range = selection.getRangeAt(0);
        //     const span = document.createElement('span');
        //     span.style.fontWeight = 'bold';
        //     range.surroundContents(span);
        // }
    };
    Editor.prototype.onMouseUp = function () {
        // const selection = window.getSelection();
        // if (selection) {
        //     const range = selection.getRangeAt(0);
        //     console.log(range);
        //     const span = document.createElement('span');
        //     span.style.fontWeight = 'bold';
        //     range.surroundContents(span);
        // }
        // setSelectionState(document.getSelection());
        // console.log('onMouseUp', selectionState);
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
