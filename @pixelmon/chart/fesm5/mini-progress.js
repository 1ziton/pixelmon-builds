import { __decorate, __metadata, __spread } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { PixelmonLocaleService, PixelmonLocaleModule } from '@pixelmon/theme';
import { toNumber, InputNumber, PixelmonUtilModule } from '@pixelmon/util';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var G2MiniProgressComponent = /** @class */ (function () {
    function G2MiniProgressComponent(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.color = '#1890FF';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    G2MiniProgressComponent.prototype.fixNum = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Math.min(Math.max(toNumber(value), 0), 100);
    };
    /**
     * @return {?}
     */
    G2MiniProgressComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.target = this.fixNum(this.target);
        this.percent = this.fixNum(this.percent);
        this.cdr.detectChanges();
    };
    G2MiniProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-progress',
                    exportAs: 'g2MiniProgress',
                    template: "<div nz-tooltip [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\" class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
                    host: { '[class.g2-mini-progress]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2MiniProgressComponent.ctorParameters = function () { return [
        { type: PixelmonLocaleService },
        { type: ChangeDetectorRef }
    ]; };
    G2MiniProgressComponent.propDecorators = {
        color: [{ type: Input }],
        target: [{ type: Input }],
        percent: [{ type: Input }],
        strokeWidth: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2MiniProgressComponent.prototype, "target", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2MiniProgressComponent.prototype, "percent", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2MiniProgressComponent.prototype, "strokeWidth", void 0);
    return G2MiniProgressComponent;
}());
if (false) {
    /** @type {?} */
    G2MiniProgressComponent.prototype.color;
    /** @type {?} */
    G2MiniProgressComponent.prototype.target;
    /** @type {?} */
    G2MiniProgressComponent.prototype.percent;
    /** @type {?} */
    G2MiniProgressComponent.prototype.strokeWidth;
    /** @type {?} */
    G2MiniProgressComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    G2MiniProgressComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2MiniProgressComponent];
var G2MiniProgressModule = /** @class */ (function () {
    function G2MiniProgressModule() {
    }
    G2MiniProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, PixelmonUtilModule, PixelmonLocaleModule, NzToolTipModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2MiniProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { G2MiniProgressComponent, G2MiniProgressModule };
//# sourceMappingURL=mini-progress.js.map
