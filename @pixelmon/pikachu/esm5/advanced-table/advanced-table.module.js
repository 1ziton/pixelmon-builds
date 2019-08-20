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
import { SmartTextModule } from '@pixelmon/pikachu/smart-text';
/** @type {?} */
var COMPONENT = [AdvancedTableComponent, AdvancedCellComponent, AdvancedFilterComponent];
/** @type {?} */
var MODULE = [CommonModule, FormsModule, NgZorroAntdModule, SmartTextModule, ViewerDirectiveModule];
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
export function AdvancedTableColumn() { }
if (false) {
    /** @type {?} */
    AdvancedTableColumn.prototype.title;
    /** @type {?} */
    AdvancedTableColumn.prototype.field;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.width;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.left;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.right;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.type;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.customCell;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.showSort;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.sortValue;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.customSort;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.showFilter;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.filterType;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.filterOptions;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.filterWidth;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.filterMultiple;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.customFilter;
}
/**
 * @record
 */
export function AdvancedTableRow() { }
if (false) {
    /** @type {?} */
    AdvancedTableRow.prototype.isChecked;
    /* Skipping unhandled member: [key: string]: any;*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvIiwic291cmNlcyI6WyJhZHZhbmNlZC10YWJsZS9hZHZhbmNlZC10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFHekQsU0FBUyxHQUFHLENBQUMsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLENBQUM7O0lBRXBGLE1BQU0sR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixDQUFDO0FBRXJHO0lBQUE7SUFLa0MsQ0FBQzs7Z0JBTGxDLFFBQVEsU0FBQztvQkFDUixZQUFZLG1CQUFNLFNBQVMsQ0FBQztvQkFDNUIsT0FBTyxtQkFBTSxNQUFNLENBQUM7b0JBQ3BCLE9BQU8sbUJBQU0sTUFBTSxFQUFLLFNBQVMsQ0FBQztpQkFDbkM7O0lBQ2lDLDBCQUFDO0NBQUEsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1COzs7O0FBR2hDLHlDQW1CQzs7O0lBbEJDLG9DQUFjOztJQUNkLG9DQUFjOztJQUNkLG9DQUFlOztJQUNmLG1DQUFjOztJQUNkLG9DQUFlOztJQUNmLG1DQUE0Qjs7SUFDNUIseUNBQThCOztJQUU5Qix1Q0FBbUI7O0lBQ25CLHdDQUF3Qzs7SUFDeEMseUNBQXFCOztJQUVyQix5Q0FBcUI7O0lBQ3JCLHlDQUFvQjs7SUFDcEIsNENBQWdEOztJQUNoRCwwQ0FBcUI7O0lBQ3JCLDZDQUF5Qjs7SUFDekIsMkNBQWdDOzs7OztBQUdsQyxzQ0FHQzs7O0lBRkMscUNBQW1COzs7Ozs7QUFLckIsZ0NBR0M7OztJQUZDLDBCQUFhOztJQUNiLDBCQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWaWV3ZXJEaXJlY3RpdmVNb2R1bGUgfSBmcm9tICdAcGl4ZWxtb24vcGlrYWNodS92aWV3ZXInO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IEFkdmFuY2VkQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWR2YW5jZWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWR2YW5jZWRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNtYXJ0VGV4dE1vZHVsZSB9IGZyb20gJ0BwaXhlbG1vbi9waWthY2h1L3NtYXJ0LXRleHQnO1xuaW1wb3J0IHsgUXVlcnlUYWIgfSBmcm9tICdAcGl4ZWxtb24vcGlrYWNodS9xdWVyeS10YWJzJztcblxuY29uc3QgQ09NUE9ORU5UID0gW0FkdmFuY2VkVGFibGVDb21wb25lbnQsIEFkdmFuY2VkQ2VsbENvbXBvbmVudCwgQWR2YW5jZWRGaWx0ZXJDb21wb25lbnRdO1xuXG5jb25zdCBNT0RVTEUgPSBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGUsIFNtYXJ0VGV4dE1vZHVsZSwgVmlld2VyRGlyZWN0aXZlTW9kdWxlXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UXSxcbiAgaW1wb3J0czogWy4uLk1PRFVMRV0sXG4gIGV4cG9ydHM6IFsuLi5NT0RVTEUsIC4uLkNPTVBPTkVOVF0sXG59KVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkVGFibGVNb2R1bGUge31cblxuLy8g5YiX5pWw5o2u5o6l5Y+jXG5leHBvcnQgaW50ZXJmYWNlIEFkdmFuY2VkVGFibGVDb2x1bW4gZXh0ZW5kcyBRdWVyeVRhYiB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGZpZWxkOiBzdHJpbmc7XG4gIHdpZHRoPzogc3RyaW5nO1xuICBsZWZ0Pzogc3RyaW5nO1xuICByaWdodD86IHN0cmluZztcbiAgdHlwZT86ICdsaW5rJyB8ICd0aHVtYm5haWwnO1xuICBjdXN0b21DZWxsPzogVGVtcGxhdGVSZWY8YW55PjsgLy8g6Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gIC8vIOaOkuW6j+ebuOWFs1xuICBzaG93U29ydD86IGJvb2xlYW47IC8vIOaYr+WQpuaYvuekuuaOkuW6j1xuICBzb3J0VmFsdWU/OiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGw7IC8vIOW9k+WJjeaOkuW6j+eKtuaAgVxuICBjdXN0b21Tb3J0PzogYm9vbGVhbjsgLy8g5piv5ZCm6Ieq5a6a5LmJ5o6S5bqPXG4gIC8vIOaQnOe0ouebuOWFs1xuICBzaG93RmlsdGVyPzogYm9vbGVhbjsgLy8g5piv5ZCm5pi+56S65pCc57SiXG4gIGZpbHRlclR5cGU/OiBzdHJpbmc7IC8vIOaQnOe0oue7hOS7tuexu+Wei1xuICBmaWx0ZXJPcHRpb25zPzogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1bXTsgLy8g5LiL5ouJ5pCc57Si57uE5Lu26YCJ6aG5XG4gIGZpbHRlcldpZHRoPzogc3RyaW5nOyAvLyDkuIvmi4nmkJzntKLnu4Tku7blrr3luqZcbiAgZmlsdGVyTXVsdGlwbGU/OiBib29sZWFuOyAvLyDmmK/lkKblpJrpgIlcbiAgY3VzdG9tRmlsdGVyPzogVGVtcGxhdGVSZWY8YW55PjsgLy8g6Ieq5a6a5LmJ5pCc57Si57uE5Lu2XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWR2YW5jZWRUYWJsZVJvdyB7XG4gIGlzQ2hlY2tlZDogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vLyDliIbpobXlj4LmlbDmjqXlj6NcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVBhcmFtcyB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xufVxuIl19