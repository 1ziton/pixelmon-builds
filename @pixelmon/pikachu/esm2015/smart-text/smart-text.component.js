/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 智能显示文本，超过最大字数自动shortcut并tooltip
 * @Author: zomixi
 * @Date: 2019-07-08 10:04:13
 */
import { Component, Input } from '@angular/core';
export class SmartTextComponent {
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
                template: "<!-- \u76F4\u63A5\u663E\u793A -->\n<ng-container *ngIf=\"text.length <= maxLength; else tooltipBlock\">\n  <span>{{ text }}</span>\n</ng-container>\n\n<!-- \u63D0\u793A\u6846\u663E\u793A -->\n<ng-template #tooltipBlock>\n  <span nz-tooltip [nzTitle]=\"text\">{{ text | shortcut: maxLength:tail }}</span>\n</ng-template>\n\n<ng-content></ng-content>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS9zbWFydC10ZXh0LyIsInNvdXJjZXMiOlsic21hcnQtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU1ZLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEtBQUssQ0FBQztJQVl4QixDQUFDOzs7OztJQVhDLElBQWEsSUFBSSxDQUFDLEtBQUs7UUFDckIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMFdBQTBDO2FBQzNDOzs7d0JBSUUsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7Ozs7SUFKTixtQ0FBcUI7O0lBRXJCLHVDQUF3Qjs7SUFDeEIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBARGVzY3JpcHRpb246IOaZuuiDveaYvuekuuaWh+acrO+8jOi2hei/h+acgOWkp+Wtl+aVsOiHquWKqHNob3J0Y3V05bm2dG9vbHRpcFxuICogQEF1dGhvcjogem9taXhpXG4gKiBARGF0ZTogMjAxOS0wNy0wOCAxMDowNDoxM1xuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc21hcnQtdGV4dCcsXG4gIGV4cG9ydEFzOiAncFNtYXJ0VGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC10ZXh0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRUZXh0Q29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIF90ZXh0ID0gJyc7XG5cbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjA7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcbiAgQElucHV0KCkgc2V0IHRleHQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90ZXh0ID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxufVxuIl19