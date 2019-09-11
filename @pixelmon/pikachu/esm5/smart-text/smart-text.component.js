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
    return SmartTextComponent;
}());
export { SmartTextComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS9zbWFydC10ZXh0LyIsInNvdXJjZXMiOlsic21hcnQtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFBQTtRQU1ZLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEtBQUssQ0FBQztJQVl4QixDQUFDO0lBWEMsc0JBQWEsb0NBQUk7Ozs7UUFRakI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFWRCxVQUFrQixLQUFLO1lBQ3JCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsMFdBQTBDO2lCQUMzQzs7OzRCQUlFLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQVdSLHlCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksa0JBQWtCOzs7Ozs7SUFDN0IsbUNBQXFCOztJQUVyQix1Q0FBd0I7O0lBQ3hCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDmmbrog73mmL7npLrmlofmnKzvvIzotoXov4fmnIDlpKflrZfmlbDoh6rliqhzaG9ydGN1dOW5tnRvb2x0aXBcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDctMDggMTA6MDQ6MTNcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NtYXJ0LXRleHQnLFxuICBleHBvcnRBczogJ3BTbWFydFRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtdGV4dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0VGV4dENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBfdGV4dCA9ICcnO1xuXG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDIwO1xuICBASW5wdXQoKSB0YWlsID0gJy4uLic7XG4gIEBJbnB1dCgpIHNldCB0ZXh0KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGV4dCA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbn1cbiJdfQ==