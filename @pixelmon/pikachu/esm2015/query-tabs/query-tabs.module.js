/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipeModule, TranslatePipeModule } from '@pixelmon/theme';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { QueryTabsComponent } from './query-tabs.component';
export class QueryTabsModule {
}
QueryTabsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [QueryTabsComponent],
                imports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule],
                exports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule, QueryTabsComponent],
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbInF1ZXJ5LXRhYnMvcXVlcnktdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sZUFBZTs7O1lBTDNCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO2dCQUNqRixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7YUFDdEc7Ozs7O0FBR0QsOEJBUUM7OztJQVBDLHlCQUFjOztJQUNkLHlCQUFjOztJQUNkLDhCQUFxQjs7SUFDckIsK0JBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGdDQUFtQjs7SUFDbkIsMkJBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJQaXBlTW9kdWxlLCBUcmFuc2xhdGVQaXBlTW9kdWxlIH0gZnJvbSAnQHBpeGVsbW9uL3RoZW1lJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBRdWVyeVRhYnNDb21wb25lbnQgfSBmcm9tICcuL3F1ZXJ5LXRhYnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUXVlcnlUYWJzQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVHJhbnNsYXRlUGlwZU1vZHVsZSwgRmlsdGVyUGlwZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBleHBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUcmFuc2xhdGVQaXBlTW9kdWxlLCBGaWx0ZXJQaXBlTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZSwgUXVlcnlUYWJzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUXVlcnlUYWJzTW9kdWxlIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlUYWIge1xuICB0aXRsZTogc3RyaW5nO1xuICBmaWVsZDogc3RyaW5nO1xuICBzaG93RmlsdGVyPzogYm9vbGVhbjtcbiAgc2VhcmNoVmFsdWU/OiBhbnk7IC8vIOaQnOe0ouWAvFxuICBkZWZhdWx0VmFsdWU/OiBhbnk7IC8vIOm7mOiupOWAvFxuICBkaXNwbGF5VmFsdWU/OiBhbnk7IC8vIOWxleekuuWAvFxuICBsZXhpY29uPzogeyB2YWx1ZTogYW55OyBsYWJlbDogc3RyaW5nIH1bXTsgLy8g6K+N5YW4XG59XG4iXX0=