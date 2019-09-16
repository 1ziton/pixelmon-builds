import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { ShortcutPipeModule } from '@pixelmon/theme';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmartTextComponent {
    constructor() {
        this._text = '';
        this.maxLength = 20;
        this.tail = '...';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set text(value) {
        if (value === undefined || value === null) {
            this._text = '';
        }
        else {
            this._text = String(value);
        }
    }
    /**
     * @return {?}
     */
    get text() {
        return this._text;
    }
}
SmartTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'smart-text',
                exportAs: 'pSmartText',
                template: "<!-- \u76F4\u63A5\u663E\u793A -->\n<ng-container *ngIf=\"text.length <= maxLength; else tooltipTemplate\">\n  <span>{{ text }}</span>\n</ng-container>\n\n<!-- \u63D0\u793A\u6846\u663E\u793A -->\n<ng-template #tooltipTemplate>\n  <span nz-tooltip [nzTooltipTitle]=\"text\">{{ text | shortcut: maxLength:tail }}</span>\n</ng-template>\n"
            }] }
];
SmartTextComponent.propDecorators = {
    maxLength: [{ type: Input }],
    tail: [{ type: Input }],
    text: [{ type: Input }]
};
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
class SmartTextModule {
}
SmartTextModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ShortcutPipeModule, NzToolTipModule],
                declarations: [SmartTextComponent],
                exports: [CommonModule, SmartTextComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SmartTextComponent, SmartTextModule };
//# sourceMappingURL=smartText.js.map
