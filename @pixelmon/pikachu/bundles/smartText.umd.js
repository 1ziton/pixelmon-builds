/**
 * @Based on pixelmon(cipchk@qq.com) v0.1.7
 * (c) 2019 developer(developer@1ziton.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@pixelmon/theme'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/smart-text', ['exports', '@angular/common', '@angular/core', '@pixelmon/theme', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu['smart-text'] = {}), global.ng.common, global.ng.core, global.pixelmon.theme, global['ng-zorro-antd/tooltip']));
}(this, function (exports, common, core, theme, tooltip) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SmartTextComponent = /** @class */ (function () {
        function SmartTextComponent() {
            this._text = '';
            this.maxLength = 20;
            this.tail = '...';
        }
        Object.defineProperty(SmartTextComponent.prototype, "text", {
            get: /**
             * @return {?}
             */
            function () {
                return this._text;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value === undefined || value === null) {
                    this._text = '';
                }
                else {
                    this._text = String(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        SmartTextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'smart-text',
                        exportAs: 'pSmartText',
                        template: "<!-- \u76F4\u63A5\u663E\u793A -->\n<ng-container *ngIf=\"text.length <= maxLength; else tooltipTemplate\">\n  <span>{{ text }}</span>\n</ng-container>\n\n<!-- \u63D0\u793A\u6846\u663E\u793A -->\n<ng-template #tooltipTemplate>\n  <span nz-tooltip [nzTooltipTitle]=\"text\">{{ text | shortcut: maxLength:tail }}</span>\n</ng-template>\n"
                    }] }
        ];
        SmartTextComponent.propDecorators = {
            maxLength: [{ type: core.Input }],
            tail: [{ type: core.Input }],
            text: [{ type: core.Input }]
        };
        return SmartTextComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        SmartTextComponent.prototype._text;
        /** @type {?} */
        SmartTextComponent.prototype.maxLength;
        /** @type {?} */
        SmartTextComponent.prototype.tail;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SmartTextModule = /** @class */ (function () {
        function SmartTextModule() {
        }
        SmartTextModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, theme.ShortcutPipeModule, tooltip.NzToolTipModule],
                        declarations: [SmartTextComponent],
                        exports: [common.CommonModule, SmartTextComponent],
                    },] }
        ];
        return SmartTextModule;
    }());

    exports.SmartTextComponent = SmartTextComponent;
    exports.SmartTextModule = SmartTextModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=smartText.umd.js.map
