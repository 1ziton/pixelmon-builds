/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewerDirectiveModule } from '@pixelmon/pikachu/viewer';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AdvancedCellComponent } from './advanced-cell.component';
import { AdvancedFilterComponent } from './advanced-filter.component';
import { AdvancedTableComponent } from './advanced-table.component';
import { QueryDisplayModule } from './query-display/query-display.module';
import { SmartTextModule } from './smart-text/smart-text.module';
/** @type {?} */
var COMPONENT = [AdvancedTableComponent, AdvancedCellComponent, AdvancedFilterComponent];
/** @type {?} */
var MODULE = [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    QueryDisplayModule,
    SmartTextModule,
    ViewerDirectiveModule,
    QueryDisplayModule,
];
var AdvancedTableModule = /** @class */ (function () {
    function AdvancedTableModule() {
    }
    AdvancedTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: tslib_1.__spread(COMPONENT),
                    imports: tslib_1.__spread(MODULE),
                    exports: tslib_1.__spread(MODULE, COMPONENT),
                },] }
    ];
    return AdvancedTableModule;
}());
export { AdvancedTableModule };
/**
 * @record
 */
export function Column() { }
if (false) {
    /** @type {?} */
    Column.prototype.title;
    /** @type {?} */
    Column.prototype.field;
    /** @type {?|undefined} */
    Column.prototype.width;
    /** @type {?|undefined} */
    Column.prototype.left;
    /** @type {?|undefined} */
    Column.prototype.right;
    /** @type {?|undefined} */
    Column.prototype.type;
    /** @type {?|undefined} */
    Column.prototype.customCell;
    /** @type {?|undefined} */
    Column.prototype.showSort;
    /** @type {?|undefined} */
    Column.prototype.sortValue;
    /** @type {?|undefined} */
    Column.prototype.customSort;
    /** @type {?|undefined} */
    Column.prototype.showFilter;
    /** @type {?|undefined} */
    Column.prototype.filterType;
    /** @type {?|undefined} */
    Column.prototype.filterOptions;
    /** @type {?|undefined} */
    Column.prototype.filterWidth;
    /** @type {?|undefined} */
    Column.prototype.filterMultiple;
    /** @type {?|undefined} */
    Column.prototype.customFilter;
    /** @type {?|undefined} */
    Column.prototype.searchValue;
    /** @type {?|undefined} */
    Column.prototype.defaultValue;
    /** @type {?|undefined} */
    Column.prototype.displayValue;
    /** @type {?|undefined} */
    Column.prototype.lexicon;
}
/**
 * @record
 */
export function PageParams() { }
if (false) {
    /** @type {?} */
    PageParams.prototype.page;
    /** @type {?} */
    PageParams.prototype.size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvIiwic291cmNlcyI6WyJhZHZhbmNlZC10YWJsZS9hZHZhbmNlZC10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFFM0QsU0FBUyxHQUFHLENBQUMsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLENBQUM7O0lBRXBGLE1BQU0sR0FBRztJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtDQUNuQjtBQUVEO0lBQUE7SUFLa0MsQ0FBQzs7Z0JBTGxDLFFBQVEsU0FBQztvQkFDUixZQUFZLG1CQUFNLFNBQVMsQ0FBQztvQkFDNUIsT0FBTyxtQkFBTSxNQUFNLENBQUM7b0JBQ3BCLE9BQU8sbUJBQU0sTUFBTSxFQUFLLFNBQVMsQ0FBQztpQkFDbkM7O0lBQ2lDLDBCQUFDO0NBQUEsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1COzs7O0FBR2hDLDRCQXVCQzs7O0lBdEJDLHVCQUFjOztJQUNkLHVCQUFjOztJQUNkLHVCQUFlOztJQUNmLHNCQUFjOztJQUNkLHVCQUFlOztJQUNmLHNCQUE0Qjs7SUFDNUIsNEJBQThCOztJQUU5QiwwQkFBbUI7O0lBQ25CLDJCQUF3Qzs7SUFDeEMsNEJBQXFCOztJQUVyQiw0QkFBcUI7O0lBQ3JCLDRCQUFvQjs7SUFDcEIsK0JBQWdEOztJQUNoRCw2QkFBcUI7O0lBQ3JCLGdDQUF5Qjs7SUFDekIsOEJBQWdDOztJQUNoQyw2QkFBa0I7O0lBQ2xCLDhCQUFtQjs7SUFDbkIsOEJBQW1COztJQUNuQix5QkFBb0M7Ozs7O0FBSXRDLGdDQUdDOzs7SUFGQywwQkFBYTs7SUFDYiwwQkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmlld2VyRGlyZWN0aXZlTW9kdWxlIH0gZnJvbSAnQHBpeGVsbW9uL3Bpa2FjaHUvdmlld2VyJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBBZHZhbmNlZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEFkdmFuY2VkRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkdmFuY2VkVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBRdWVyeURpc3BsYXlNb2R1bGUgfSBmcm9tICcuL3F1ZXJ5LWRpc3BsYXkvcXVlcnktZGlzcGxheS5tb2R1bGUnO1xuaW1wb3J0IHsgU21hcnRUZXh0TW9kdWxlIH0gZnJvbSAnLi9zbWFydC10ZXh0L3NtYXJ0LXRleHQubW9kdWxlJztcblxuY29uc3QgQ09NUE9ORU5UID0gW0FkdmFuY2VkVGFibGVDb21wb25lbnQsIEFkdmFuY2VkQ2VsbENvbXBvbmVudCwgQWR2YW5jZWRGaWx0ZXJDb21wb25lbnRdO1xuXG5jb25zdCBNT0RVTEUgPSBbXG4gIENvbW1vbk1vZHVsZSxcbiAgRm9ybXNNb2R1bGUsXG4gIE5nWm9ycm9BbnRkTW9kdWxlLFxuICBRdWVyeURpc3BsYXlNb2R1bGUsXG4gIFNtYXJ0VGV4dE1vZHVsZSxcbiAgVmlld2VyRGlyZWN0aXZlTW9kdWxlLFxuICBRdWVyeURpc3BsYXlNb2R1bGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRdLFxuICBpbXBvcnRzOiBbLi4uTU9EVUxFXSxcbiAgZXhwb3J0czogWy4uLk1PRFVMRSwgLi4uQ09NUE9ORU5UXSxcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRUYWJsZU1vZHVsZSB7fVxuXG4vLyDliJfmlbDmja7mjqXlj6NcbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZmllbGQ6IHN0cmluZztcbiAgd2lkdGg/OiBzdHJpbmc7XG4gIGxlZnQ/OiBzdHJpbmc7XG4gIHJpZ2h0Pzogc3RyaW5nO1xuICB0eXBlPzogJ2xpbmsnIHwgJ3RodW1ibmFpbCc7XG4gIGN1c3RvbUNlbGw/OiBUZW1wbGF0ZVJlZjxhbnk+OyAvLyDoh6rlrprkuYnljZXlhYPmoLxcbiAgLy8g5o6S5bqP55u45YWzXG4gIHNob3dTb3J0PzogYm9vbGVhbjsgLy8g5piv5ZCm5pi+56S65o6S5bqPXG4gIHNvcnRWYWx1ZT86ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbDsgLy8g5b2T5YmN5o6S5bqP54q25oCBXG4gIGN1c3RvbVNvcnQ/OiBib29sZWFuOyAvLyDmmK/lkKboh6rlrprkuYnmjpLluo9cbiAgLy8g5pCc57Si55u45YWzXG4gIHNob3dGaWx0ZXI/OiBib29sZWFuOyAvLyDmmK/lkKbmmL7npLrmkJzntKJcbiAgZmlsdGVyVHlwZT86IHN0cmluZzsgLy8g5pCc57Si57uE5Lu257G75Z6LXG4gIGZpbHRlck9wdGlvbnM/OiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnkgfVtdOyAvLyDkuIvmi4nmkJzntKLnu4Tku7bpgInpoblcbiAgZmlsdGVyV2lkdGg/OiBzdHJpbmc7IC8vIOS4i+aLieaQnOe0oue7hOS7tuWuveW6plxuICBmaWx0ZXJNdWx0aXBsZT86IGJvb2xlYW47IC8vIOaYr+WQpuWkmumAiVxuICBjdXN0b21GaWx0ZXI/OiBUZW1wbGF0ZVJlZjxhbnk+OyAvLyDoh6rlrprkuYnmkJzntKLnu4Tku7ZcbiAgc2VhcmNoVmFsdWU/OiBhbnk7IC8vIOaQnOe0ouWAvFxuICBkZWZhdWx0VmFsdWU/OiBhbnk7IC8vIOm7mOiupOWAvFxuICBkaXNwbGF5VmFsdWU/OiBhbnk7IC8vIOWxleekuuWAvFxuICBsZXhpY29uPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgLy8g6K+N5YW4XG59XG5cbi8vIOWIhumhteWPguaVsOaOpeWPo1xuZXhwb3J0IGludGVyZmFjZSBQYWdlUGFyYW1zIHtcbiAgcGFnZTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG59XG4iXX0=