/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from '@pixelmon/pikachu/pagination';
import { SmartTextModule } from '@pixelmon/pikachu/smart-text';
import { ViewerDirectiveModule } from '@pixelmon/pikachu/viewer';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableCellComponent } from './table-cell.component';
import { TableFilterComponent } from './table-filter.component';
import { TableComponent } from './table.component';
/** @type {?} */
var COMPONENT = [TableComponent, TableCellComponent, TableFilterComponent];
/** @type {?} */
var MODULE = [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzBadgeModule,
    NzSelectModule,
    NzDatePickerModule,
    NzSpinModule,
    SmartTextModule,
    ViewerDirectiveModule,
    PaginationModule,
];
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: tslib_1.__spread(COMPONENT),
                    imports: tslib_1.__spread(MODULE),
                    exports: tslib_1.__spread(COMPONENT),
                },] }
    ];
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQUU3QyxTQUFTLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7O0lBRXRFLE1BQU0sR0FBRztJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0NBQ2pCO0FBRUQ7SUFBQTtJQUswQixDQUFDOztnQkFMMUIsUUFBUSxTQUFDO29CQUNSLFlBQVksbUJBQU0sU0FBUyxDQUFDO29CQUM1QixPQUFPLG1CQUFNLE1BQU0sQ0FBQztvQkFDcEIsT0FBTyxtQkFBTSxTQUFTLENBQUM7aUJBQ3hCOztJQUN5QixrQkFBQztDQUFBLEFBTDNCLElBSzJCO1NBQWQsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnQHBpeGVsbW9uL3Bpa2FjaHUvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBTbWFydFRleHRNb2R1bGUgfSBmcm9tICdAcGl4ZWxtb24vcGlrYWNodS9zbWFydC10ZXh0JztcbmltcG9ydCB7IFZpZXdlckRpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJ0BwaXhlbG1vbi9waWthY2h1L3ZpZXdlcic7XG5pbXBvcnQgeyBOekJhZGdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpHcmlkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcbmltcG9ydCB7IE56U3Bpbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XG5pbXBvcnQgeyBOelRhYmxlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5pbXBvcnQgeyBUYWJsZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlQgPSBbVGFibGVDb21wb25lbnQsIFRhYmxlQ2VsbENvbXBvbmVudCwgVGFibGVGaWx0ZXJDb21wb25lbnRdO1xuXG5jb25zdCBNT0RVTEUgPSBbXG4gIENvbW1vbk1vZHVsZSxcbiAgRm9ybXNNb2R1bGUsXG4gIE56VGFibGVNb2R1bGUsXG4gIE56RHJvcERvd25Nb2R1bGUsXG4gIE56SWNvbk1vZHVsZSxcbiAgTnpCdXR0b25Nb2R1bGUsXG4gIE56SW5wdXRNb2R1bGUsXG4gIE56R3JpZE1vZHVsZSxcbiAgTnpCYWRnZU1vZHVsZSxcbiAgTnpTZWxlY3RNb2R1bGUsXG4gIE56RGF0ZVBpY2tlck1vZHVsZSxcbiAgTnpTcGluTW9kdWxlLFxuICBTbWFydFRleHRNb2R1bGUsXG4gIFZpZXdlckRpcmVjdGl2ZU1vZHVsZSxcbiAgUGFnaW5hdGlvbk1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVF0sXG4gIGltcG9ydHM6IFsuLi5NT0RVTEVdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUge31cbiJdfQ==