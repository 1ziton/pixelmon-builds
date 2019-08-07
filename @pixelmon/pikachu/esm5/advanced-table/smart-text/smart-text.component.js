/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 智能显示文本，超过最大字数自动shortcut并tooltip
 * @Author: zomixi
 * @Date: 2019-07-08 10:04:13
 */
import { Component, Input } from '@angular/core';
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
export { SmartTextComponent };
if (false) {
    /** @type {?} */
    SmartTextComponent.prototype.text;
    /** @type {?} */
    SmartTextComponent.prototype.maxLength;
    /** @type {?} */
    SmartTextComponent.prototype.tail;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbImFkdmFuY2VkLXRhYmxlL3NtYXJ0LXRleHQvc21hcnQtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFBQTtRQUtXLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLDBXQUEwQztpQkFDM0M7Ozt1QkFFRSxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUFDUix5QkFBQztDQUFBLEFBUkQsSUFRQztTQUpZLGtCQUFrQjs7O0lBQzdCLGtDQUFtQjs7SUFDbkIsdUNBQXdCOztJQUN4QixrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5pm66IO95pi+56S65paH5pys77yM6LaF6L+H5pyA5aSn5a2X5pWw6Ieq5Yqoc2hvcnRjdXTlubZ0b29sdGlwXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA4IDEwOjA0OjEzXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbWFydC10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXRleHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTbWFydFRleHRDb21wb25lbnQge1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDIwO1xuICBASW5wdXQoKSB0YWlsID0gJy4uLic7XG59XG4iXX0=