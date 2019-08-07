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
export class SmartTextComponent {
    constructor() {
        this.text = '';
        this.maxLength = 20;
        this.tail = '...';
    }
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
if (false) {
    /** @type {?} */
    SmartTextComponent.prototype.text;
    /** @type {?} */
    SmartTextComponent.prototype.maxLength;
    /** @type {?} */
    SmartTextComponent.prototype.tail;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbImFkdmFuY2VkLXRhYmxlL3NtYXJ0LXRleHQvc21hcnQtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsTUFBTSxPQUFPLGtCQUFrQjtJQUovQjtRQUtXLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDBXQUEwQzthQUMzQzs7O21CQUVFLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLOzs7O0lBRk4sa0NBQW1COztJQUNuQix1Q0FBd0I7O0lBQ3hCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDmmbrog73mmL7npLrmlofmnKzvvIzotoXov4fmnIDlpKflrZfmlbDoh6rliqhzaG9ydGN1dOW5tnRvb2x0aXBcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDctMDggMTA6MDQ6MTNcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NtYXJ0LXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtdGV4dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0VGV4dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjA7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcbn1cbiJdfQ==