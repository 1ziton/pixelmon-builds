/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipeModule, TranslatePipeModule } from '@pixelmon/theme';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { QueryTabsComponent } from './query-tabs.component';
var QueryTabsModule = /** @class */ (function () {
    function QueryTabsModule() {
    }
    QueryTabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QueryTabsComponent],
                    imports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule],
                    exports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule, QueryTabsComponent],
                },] }
    ];
    return QueryTabsModule;
}());
export { QueryTabsModule };
/**
 * @record
 */
export function QueryTab() { }
if (false) {
    /** @type {?} */
    QueryTab.prototype.title;
    /** @type {?} */
    QueryTab.prototype.field;
    /** @type {?|undefined} */
    QueryTab.prototype.showFilter;
    /** @type {?|undefined} */
    QueryTab.prototype.searchValue;
    /** @type {?|undefined} */
    QueryTab.prototype.defaultValue;
    /** @type {?|undefined} */
    QueryTab.prototype.displayValue;
    /** @type {?|undefined} */
    QueryTab.prototype.lexicon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbInF1ZXJ5LXRhYnMvcXVlcnktdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RDtJQUFBO0lBSzhCLENBQUM7O2dCQUw5QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztvQkFDakYsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO2lCQUN0Rzs7SUFDNkIsc0JBQUM7Q0FBQSxBQUwvQixJQUsrQjtTQUFsQixlQUFlOzs7O0FBRTVCLDhCQVFDOzs7SUFQQyx5QkFBYzs7SUFDZCx5QkFBYzs7SUFDZCw4QkFBcUI7O0lBQ3JCLCtCQUFrQjs7SUFDbEIsZ0NBQW1COztJQUNuQixnQ0FBbUI7O0lBQ25CLDJCQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyUGlwZU1vZHVsZSwgVHJhbnNsYXRlUGlwZU1vZHVsZSB9IGZyb20gJ0BwaXhlbG1vbi90aGVtZSc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgUXVlcnlUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi9xdWVyeS10YWJzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1F1ZXJ5VGFic0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRyYW5zbGF0ZVBpcGVNb2R1bGUsIEZpbHRlclBpcGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZXhwb3J0czogW0NvbW1vbk1vZHVsZSwgVHJhbnNsYXRlUGlwZU1vZHVsZSwgRmlsdGVyUGlwZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGUsIFF1ZXJ5VGFic0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1ZXJ5VGFic01vZHVsZSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5VGFiIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZmllbGQ6IHN0cmluZztcbiAgc2hvd0ZpbHRlcj86IGJvb2xlYW47XG4gIHNlYXJjaFZhbHVlPzogYW55OyAvLyDmkJzntKLlgLxcbiAgZGVmYXVsdFZhbHVlPzogYW55OyAvLyDpu5jorqTlgLxcbiAgZGlzcGxheVZhbHVlPzogYW55OyAvLyDlsZXnpLrlgLxcbiAgbGV4aWNvbj86IHsgdmFsdWU6IGFueTsgbGFiZWw6IHN0cmluZyB9W107IC8vIOivjeWFuFxufVxuIl19