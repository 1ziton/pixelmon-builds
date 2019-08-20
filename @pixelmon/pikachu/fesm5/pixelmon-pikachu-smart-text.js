import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { ShortcutPipeModule } from '@pixelmon/theme';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmartTextComponent = /** @class */ (function () {
    function SmartTextComponent() {
        this.text = '';
        this.maxLength = 20;
        this.tail = '...';
    }
    SmartTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'smart-text',
                    template: "<!-- \u76F4\u63A5\u663E\u793A -->\n<ng-container *ngIf=\"text.length <= maxLength; else tooltipBlock\">\n  <span>{{ text }}</span>\n</ng-container>\n\n<!-- \u63D0\u793A\u6846\u663E\u793A -->\n<ng-template #tooltipBlock>\n  <span nz-tooltip [nzTitle]=\"text\">{{ text | shortcut: maxLength:tail }}</span>\n</ng-template>\n\n<ng-content></ng-content>\n"
                }] }
    ];
    SmartTextComponent.propDecorators = {
        text: [{ type: Input }],
        maxLength: [{ type: Input }],
        tail: [{ type: Input }]
    };
    return SmartTextComponent;
}());
if (false) {
    /** @type {?} */
    SmartTextComponent.prototype.text;
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
        { type: NgModule, args: [{
                    imports: [CommonModule, ShortcutPipeModule, NzToolTipModule],
                    declarations: [SmartTextComponent],
                    exports: [CommonModule, SmartTextComponent],
                },] }
    ];
    return SmartTextModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SmartTextModule, SmartTextComponent as ɵa };
//# sourceMappingURL=pixelmon-pikachu-smart-text.js.map
