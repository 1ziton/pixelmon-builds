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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbInNtYXJ0LXRleHQvc21hcnQtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsTUFBTSxPQUFPLGtCQUFrQjtJQUovQjtRQUtZLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEtBQUssQ0FBQztJQVl4QixDQUFDOzs7OztJQVhDLElBQWEsSUFBSSxDQUFDLEtBQUs7UUFDckIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwwV0FBMEM7YUFDM0M7Ozt3QkFJRSxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzs7Ozs7OztJQUpOLG1DQUFxQjs7SUFFckIsdUNBQXdCOztJQUN4QixrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5pm66IO95pi+56S65paH5pys77yM6LaF6L+H5pyA5aSn5a2X5pWw6Ieq5Yqoc2hvcnRjdXTlubZ0b29sdGlwXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA4IDEwOjA0OjEzXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbWFydC10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXRleHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTbWFydFRleHRDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgX3RleHQgPSAnJztcblxuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyMDtcbiAgQElucHV0KCkgdGFpbCA9ICcuLi4nO1xuICBASW5wdXQoKSBzZXQgdGV4dCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RleHQgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG59XG4iXX0=