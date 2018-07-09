/*!
 *   Cordelia color picker
 *   version: 1.0.0
 *    author: Cevad Tokatli <cevadtokatli@hotmail.com>
 *   website: http://cevadtokatli.com
 *    github: https://github.com/cevadtokatli/cordelia-angular
 *   license: MIT
 *
*/
import { Component, ViewEncapsulation, ViewChild, Input, Output, EventEmitter, NgModule } from '@angular/core';
import Cordelia from 'cordelia';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CordeliaComponent = /** @class */ (function () {
    function CordeliaComponent() {
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onSave = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CordeliaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cordelia = new Cordelia({
            elm: this.el.nativeElement,
            color: this.color,
            colorFormat: this.colorFormat,
            pickerStyle: this.pickerStyle,
            embed: this.embed,
            size: this.size,
            allowOpacity: this.allowOpacity,
            allowClearColor: this.allowClearColor,
            showColorValue: this.showColorValue,
            showButtons: this.showButtons,
            showPalette: this.showPalette,
            paletteColors: this.paletteColors,
            allowPaletteAddColor: this.allowPaletteAddColor
        });
        this.cordelia.el.addEventListener('open', function () {
            _this.onOpen.emit();
        });
        this.cordelia.el.addEventListener('close', function () {
            _this.onClose.emit();
        });
        this.cordelia.el.addEventListener('save', function () {
            _this.onSave.emit();
        });
        this.cordelia.el.addEventListener('cancel', function () {
            _this.onCancel.emit();
        });
        this.cordelia.el.addEventListener('changed', function () {
            _this.onChanged.emit();
        });
    };
    CordeliaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cordelia',
                    template: '<div #picker></div>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".cdp-dragging-active {\r\n\t-webkit-user-select:none;\r\n\t-moz-user-select:none;\r\n\t-o-user-select:none;\r\n\t-ms-user-select:none;\r\n\tuser-select:none;\r\n}\r\n.cdp-wrapper {\r\n\twidth:20px;\r\n\theight:20px;\r\n\tborder:solid 2px;\r\n\tborder-radius:4px;\r\n\tcursor:pointer;\r\n}\r\n.cdp-wrapper,\r\n.cdp-wrapper-overlay {\r\n\tposition:relative;\r\n\tdisplay:block;\r\n}\r\n.cdp-wrapper-overlay {\r\n\twidth:100%;\r\n\theight:100%;\t\r\n}\r\n.cdp-container {\r\n\tposition:relative;\r\n\tdisplay:block;\r\n\tpadding-bottom:10px;\r\n\tbackground:#F4F4F4;\r\n\tbox-shadow:0 0 8px rgba(0,0,0,.3);\r\n}\r\n.cdp-wrapper .cdp-container {\r\n\tposition:absolute;\r\n\tz-index:10;\r\n\tleft:0;\r\n\ttop:30px;\r\n\tcursor:default;\r\n}\r\n.cdp-wrapper .cdp-right {\r\n\tleft:auto;\r\n\tright:0;\r\n}\r\n.cdp-wrapper .cdp-bottom {\r\n\ttop:auto;\r\n\tbottom:30px;\r\n}\r\n\r\n.cdp-container,\r\n.cdp-major-picker,\r\n.cdp-major-picker-gradient,\r\n.cdp-minor-picker,\r\n.cdp-minor-picker-gradient,\r\n.cdp-opacity-picker,\r\n.cdp-opacity-picker-gradient {\r\n\tborder-radius:8px;\r\n}\r\n\r\n.cdp-picker-container {\r\n\tposition:relative;\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tjustify-content:space-between;\r\n\t-webkit-justify-content:space-between;\r\n\tbox-sizing:border-box;\r\n\tpadding:10px;\r\n}\r\n.cdp-major-picker,\r\n.cdp-minor-picker,\r\n.cdp-opacity-picker {\r\n\tposition:relative;\r\n\toverflow:hidden;\r\n\tcursor:pointer;\r\n}\r\n.cdp-major-picker-gradient,\r\n.cdp-minor-picker-gradient,\r\n.cdp-opacity-picker-gradient {\r\n\tposition:relative;\r\n\twidth:100%;\r\n\theight:100%;\r\n}\r\n.cdp-major-dragger {\r\n\twidth:18px;\r\n\theight:18px;\r\n}\r\n.cdp-major-dragger,\r\n.cdp-minor-dragger,\r\n.cdp-opacity-dragger {\r\n\tposition:absolute;\r\n\tbox-sizing:border-box;\r\n\tborder:solid 2px #F4F4F4;\r\n\tborder-radius:100%;\r\n\tbox-shadow:0 0 5px rgba(0,0,0,.5);\t\r\n}\r\n.cdp-major-dragger.cdp-dark,\r\n.cdp-major-dragger.cdp-dark:after,\r\n.cdp-minor-dragger.cdp-dark,\r\n.cdp-opacity-dragger.cdp-dark {\r\n\tborder-color:#1D1D1D;\r\n}\r\n.cdp-major-dragger:after {\r\n\tposition:absolute;\r\n\tleft:calc(50% - 4px);\r\n\ttop:calc(50% - 4px);\r\n\tborder:solid 4px #F4F4F4;\r\n\tborder-radius:100%;\r\n\tcontent:'';\r\n}\r\n.cdp-minor-dragger,\r\n.cdp-opacity-dragger {\r\n\twidth:14px;\r\n\theight:14px;\r\n}\r\n\r\n.cdp-last-gradient-child {\r\n\tbox-shadow:0 0 3px rgba(0,0,0,.3) inset;\r\n}\r\n.cdp-background-type-current-color {\r\n\tborder-top-left-radius:11px;\r\n}\r\n.cdp-background-type-opacity {\r\n\tbackground-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==');\r\n}\r\n.cdp-gradient-type-bt-black {\r\n\tbackground:linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));\r\n}\r\n.cdp-gradient-type-lr-white {\r\n\tbackground:linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));\r\n}\r\n.cdp-gradient-type-lr-colorful {\r\n\tbackground:linear-gradient(to right, rgb(255,0,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,255), rgb(0,0,255), rgb(255,0,255), rgb(255,0,0));\r\n}\r\n.cdp-gradient-type-bt-gray {\r\n\tbackground:linear-gradient(to top, rgba(90,90,90,.9), rgba(164,164,164,0));\t\r\n}\r\n.cdp-gradient-type-tb-colorful {\r\n\tbackground:linear-gradient(to bottom, rgb(255,0,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,255), rgb(0,0,255), rgb(255,0,255), rgb(255,0,0));\r\n}\r\n\r\n.cdp-icons {\r\n\tdisplay:block;\r\n\twidth:18px;\r\n\theight:16px;\r\n\tbackground-image:url('data:image/png;base64,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');\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:auto;\r\n}\r\n\r\n.cdp-console-container {\r\n\tposition:relative;\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tflex-wrap:wrap;\r\n\t-webkit-flex-wrap:wrap;\r\n\tbox-sizing:border-box;\r\n\tpadding:10px;\r\n}\r\n.cdp-color-console-container {\r\n\tposition:relative;\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\twidth:100%;\r\n}\r\n\r\n.cdp-console-container.cdp-current-color-non-showing .cdp-color-console-container,\r\n.cdp-console-container.cdp-current-color-non-showing .cdp-current-color-console,\r\n.cdp-initial-color,\r\n.cdp-clear-color {\r\n\twidth:30px;\r\n}\r\n.cdp-color-console-container,\r\n.cdp-button-container {\r\n\theight:35px;\r\n}\r\n.cdp-color-console-container,\r\n.cdp-console-container.cdp-current-color-non-showing .cdp-current-color-console,\r\n.cdp-button {\r\n\tborder-radius:4px;\t\r\n}\r\n\r\n.cdp-initial-color {\r\n\tborder-top-left-radius:4px;\r\n\tborder-bottom-left-radius:4px;\r\n}\r\n.cdp-initial-color,\r\n.cdp-clear-color {\r\n\tposition:relative;\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tjustify-content:center;\r\n\t-webkit-justify-content:center;\r\n\talign-items:center;\r\n\t-webkit-align-items:center;\r\n\tcursor:pointer;\r\n}\r\n.cdp-initial-color.cdp-dark > i {\r\n\tbackground-position:0 -26px;\r\n}\r\n.cdp-clear-color > i {\r\n\tbackground-position:0 -52px;\r\n}\r\n.cdp-clear-color.cdp-dark > i {\r\n\tbackground-position:0 -78px;\r\n}\r\n\r\n.cdp-current-color-console {\r\n\tposition:relative;\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tborder-top-right-radius:4px;\r\n\tborder-bottom-right-radius:4px;\t\r\n}\r\n.cdp-current-color-console,\r\n.cdp-current-color {\r\n\twidth:calc(100% - 30px);\r\n}\r\n.cdp-current-color {\r\n\tbox-sizing:border-box;\r\n\tpadding-left:5px;\r\n\tborder:none;\r\n\tbackground:none;\r\n}\r\n.cdp-clear-color-non-showing .cdp-current-color {\r\n\twidth:100%;\r\n\tpadding-right:10px;\r\n}\r\n\r\n.cdp-current-color,\r\n.cdp-button {\r\n\tfont-family:Helvatica, \"Open Sans\", Source Sans, sans-serif;\r\n\tfont-size:12px;\r\n\tcolor:#F4F4F4;\t\r\n}\r\n.cdp-current-color.cdp-dark {\r\n\tfont-weight:bold;\r\n\tcolor:#1D1D1D;\t\r\n}\r\n.cdp-current-color:active,\r\n.cdp-current-color:focus,\r\n.cdp-button:active,\r\n.cdp-button:focus {\r\n\toutline:none;\r\n}\r\n\r\n.cdp-button-container {\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tjustify-content:flex-end;\r\n\t-webkit-justify-content:flex-end;\r\n\tflex:1 1 10px;\r\n\t-webkit-flex:1 1 10px;\r\n\tmargin:10px 0 0 0;\r\n}\r\n.cdp-console-container.cdp-current-color-non-showing .cdp-button-container {\r\n\tmargin:0 0 0 10px;\r\n}\r\n.cdp-console-container.cdp-color-console-non-showing .cdp-button-container {\r\n\tmargin:0;\r\n}\r\n.cdp-button {\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tjustify-content:center;\r\n\t-webkit-justify-content:center;\r\n\talign-items:center;\r\n\t-webkit-align-items:center;\r\n\tflex:1 1 10px;\r\n\t-webkit-flex:1 1 10px;\r\n\tmargin:0 5px;\r\n\tbackground:#4BCB7C;\r\n\tcursor:pointer;\r\n}\r\n.cdp-button:first-child {\r\n\tmargin-left:0;\r\n}\r\n.cdp-button:last-child {\r\n\tmargin-right:0;\r\n}\r\n.cdp-button > i {\r\n\tmargin:-2px 7.5px 0 0;\r\n}\r\n.cdp-button[cdp-function=\"save\"] > i {\r\n\tbackground-position:0 -104.50px;\r\n}\r\n.cdp-button[cdp-function=\"cancel\"] > i {\r\n\tbackground-position:0 -130.50px;\r\n}\r\n\r\n.cdp-arrow-div {\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tjustify-content:center;\r\n\t-webkit-justify-content:center;\r\n\tbox-sizing:border-box;\r\n\tpadding:5px 0;\r\n}\r\n.cdp-arrow-div > i {\r\n\tbackground-position:0 -156px;\r\n\tcursor:pointer;\r\n}\r\n\r\n.cdp-palette-line,\r\n.cdp-palette-add-element {\r\n\tborder:solid 1px #D7DEF0;\r\n}\r\n.cdp-palette {\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tflex-wrap:wrap;\r\n\t-webkit-flex-wrap:wrap;\r\n\twidth:100%;\r\n\tbox-sizing:border-box;\r\n\tpadding:0 5px;\r\n}\r\n.cdp-palette-element,\r\n.cdp-palette-add-element {\r\n\tmargin:5px;\r\n\tborder-radius:4px;\r\n\tcursor:pointer;\r\n}\r\n.cdp-palette-element > div {\r\n\twidth:100%;\r\n\theight:100%;\r\n\tborder-radius:4px;\r\n}\r\n.cdp-palette-add-element {\r\n\tdisplay:flex;\r\n\tdisplay:-webkit-flex;\r\n\tjustify-content:center;\r\n\t-webkit-justify-content:center;\r\n\talign-items:center;\r\n\t-webkit-align-items:center;\r\n\tbox-sizing:border-box;\r\n}\r\n.cdp-palette-add-element > i {\r\n\tbackground-position:0 -182.50px;\r\n}\r\n\r\n/** sizes **/\r\n.cdp-container[cdp-size=\"large\"],\r\n.cdp-container[cdp-size=\"large\"] > div {\r\n\twidth:350px;\r\n}\r\n.cdp-container[cdp-size=\"large\"] .cdp-major-picker {\r\n\twidth:250px;\r\n}\r\n.cdp-container[cdp-size=\"large\"] .cdp-major-picker,\r\n.cdp-container[cdp-size=\"large\"] .cdp-minor-picker,\r\n.cdp-container[cdp-size=\"large\"] .cdp-opacity-picker {\r\n\theight:250px;\r\n}\r\n.cdp-container[cdp-size=\"large\"] .cdp-minor-picker,\r\n.cdp-container[cdp-size=\"large\"] .cdp-opacity-picker {\r\n\twidth:30px;\r\n}\r\n.cdp-container[cdp-size=\"large\"] .cdp-palette-element,\r\n.cdp-container[cdp-size=\"large\"] .cdp-palette-add-element {\r\n\twidth:32px;\r\n\theight:32px;\r\n}\r\n\r\n.cdp-container[cdp-size=\"medium\"],\r\n.cdp-container[cdp-size=\"medium\"] > div {\r\n\twidth:275px;\r\n}\r\n.cdp-container[cdp-size=\"medium\"] .cdp-major-picker {\r\n\twidth:175px;\r\n}\r\n.cdp-container[cdp-size=\"medium\"] .cdp-major-picker,\r\n.cdp-container[cdp-size=\"medium\"] .cdp-minor-picker,\r\n.cdp-container[cdp-size=\"medium\"] .cdp-opacity-picker {\r\n\theight:175px;\r\n}\r\n.cdp-container[cdp-size=\"medium\"] .cdp-minor-picker,\r\n.cdp-container[cdp-size=\"medium\"] .cdp-opacity-picker {\r\n\twidth:30px;\r\n}\r\n.cdp-container[cdp-size=\"medium\"] .cdp-palette-element,\r\n.cdp-container[cdp-size=\"medium\"] .cdp-palette-add-element {\r\n\twidth:27px;\r\n\theight:27px;\r\n}\r\n\r\n.cdp-container[cdp-size=\"small\"],\r\n.cdp-container[cdp-size=\"small\"] > div {\r\n\twidth:200px;\r\n}\r\n.cdp-container[cdp-size=\"small\"] .cdp-major-picker {\r\n\twidth:125px;\r\n}\r\n.cdp-container[cdp-size=\"small\"] .cdp-major-picker,\r\n.cdp-container[cdp-size=\"small\"] .cdp-minor-picker,\r\n.cdp-container[cdp-size=\"small\"] .cdp-opacity-picker {\r\n\theight:125px;\r\n}\r\n.cdp-container[cdp-size=\"small\"] .cdp-minor-picker,\r\n.cdp-container[cdp-size=\"small\"] .cdp-opacity-picker {\r\n\twidth:20px;\r\n}\r\n.cdp-container[cdp-size=\"small\"] .cdp-palette-element,\r\n.cdp-container[cdp-size=\"small\"] .cdp-palette-add-element {\r\n\twidth:28px;\r\n\theight:28px;\r\n}\r\n.cdp-container[cdp-size=\"small\"] .cdp-console-container.cdp-current-color-non-showing .cdp-button {\r\n\tfont-size:11px;\r\n}\r\n.cdp-container[cdp-size=\"small\"] .cdp-console-container.cdp-current-color-non-showing .cdp-button:first-child > i {\r\n\tmargin-right:5px;\r\n}\r\n.cdp-container[cdp-size=\"small\"] .cdp-console-container.cdp-current-color-non-showing .cdp-button:last-child > i {\r\n\tmargin-right:2.5px;\r\n}\r\n\r\n.cdp-hidden {\r\n\tdisplay:none !important;\r\n}\r\n.cdp-visibility-hidden {\r\n\tdisplay:block !important;\r\n\tvisibility:hidden;\r\n}"]
                }] }
    ];
    CordeliaComponent.propDecorators = {
        el: [{ type: ViewChild, args: ['picker',] }],
        color: [{ type: Input }],
        colorFormat: [{ type: Input }],
        pickerStyle: [{ type: Input }],
        embed: [{ type: Input }],
        size: [{ type: Input }],
        allowOpacity: [{ type: Input }],
        allowClearColor: [{ type: Input }],
        showColorValue: [{ type: Input }],
        showButtons: [{ type: Input }],
        showPalette: [{ type: Input }],
        paletteColors: [{ type: Input }],
        allowPaletteAddColor: [{ type: Input }],
        onOpen: [{ type: Output }],
        onClose: [{ type: Output }],
        onSave: [{ type: Output }],
        onCancel: [{ type: Output }],
        onChanged: [{ type: Output }]
    };
    return CordeliaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CordeliaModule = /** @class */ (function () {
    function CordeliaModule() {
    }
    CordeliaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        CordeliaComponent
                    ],
                    exports: [
                        CordeliaComponent
                    ]
                },] }
    ];
    return CordeliaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CordeliaComponent, CordeliaModule };
