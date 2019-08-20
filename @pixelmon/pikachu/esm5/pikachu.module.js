/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LodopModule } from '@pixelmon/pikachu/lodop';
import { NoticeIconModule } from './notice-icon';
import { PageHeaderModule } from './page-header';
import { ReuseTabModule } from './reuse-tab';
import { SidebarNavModule } from './sidebar-nav';
import { SVModule } from './view';
import { QueryTabsModule } from './query-tabs';
import { AdvancedTableModule } from './advanced-table';
import { SmartTextModule } from './smart-text';
/** @type {?} */
var MODULES = [
    AdvancedTableModule,
    QueryTabsModule,
    SmartTextModule,
    LodopModule,
    ReuseTabModule,
    NoticeIconModule,
    SidebarNavModule,
    SVModule,
    PageHeaderModule,
];
var PikachuModule = /** @class */ (function () {
    function PikachuModule() {
    }
    PikachuModule.decorators = [
        { type: NgModule, args: [{ exports: MODULES },] }
    ];
    return PikachuModule;
}());
export { PikachuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlrYWNodS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbInBpa2FjaHUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOztJQUV6QyxPQUFPLEdBQUc7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGdCQUFnQjtDQUNqQjtBQUVEO0lBQUE7SUFDNEIsQ0FBQzs7Z0JBRDVCLFFBQVEsU0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0lBQ0Ysb0JBQUM7Q0FBQSxBQUQ3QixJQUM2QjtTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZG9wTW9kdWxlIH0gZnJvbSAnQHBpeGVsbW9uL3Bpa2FjaHUvbG9kb3AnO1xuaW1wb3J0IHsgTm90aWNlSWNvbk1vZHVsZSB9IGZyb20gJy4vbm90aWNlLWljb24nO1xuaW1wb3J0IHsgUGFnZUhlYWRlck1vZHVsZSB9IGZyb20gJy4vcGFnZS1oZWFkZXInO1xuaW1wb3J0IHsgUmV1c2VUYWJNb2R1bGUgfSBmcm9tICcuL3JldXNlLXRhYic7XG5pbXBvcnQgeyBTaWRlYmFyTmF2TW9kdWxlIH0gZnJvbSAnLi9zaWRlYmFyLW5hdic7XG5pbXBvcnQgeyBTVk1vZHVsZSB9IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBRdWVyeVRhYnNNb2R1bGUgfSBmcm9tICcuL3F1ZXJ5LXRhYnMnO1xuaW1wb3J0IHsgQWR2YW5jZWRUYWJsZU1vZHVsZSB9IGZyb20gJy4vYWR2YW5jZWQtdGFibGUnO1xuaW1wb3J0IHsgU21hcnRUZXh0TW9kdWxlIH0gZnJvbSAnLi9zbWFydC10ZXh0JztcblxuY29uc3QgTU9EVUxFUyA9IFtcbiAgQWR2YW5jZWRUYWJsZU1vZHVsZSxcbiAgUXVlcnlUYWJzTW9kdWxlLFxuICBTbWFydFRleHRNb2R1bGUsXG4gIExvZG9wTW9kdWxlLFxuICBSZXVzZVRhYk1vZHVsZSxcbiAgTm90aWNlSWNvbk1vZHVsZSxcbiAgU2lkZWJhck5hdk1vZHVsZSxcbiAgU1ZNb2R1bGUsXG4gIFBhZ2VIZWFkZXJNb2R1bGUsXG5dO1xuXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgUGlrYWNodU1vZHVsZSB7fVxuIl19