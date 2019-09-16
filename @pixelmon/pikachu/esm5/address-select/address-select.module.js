/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { AddressSelectComponent } from './address-select.component';
import { AddrFilterOptionPipe, AddrLevelFilterPipe, AddrCheckedFilterPipe } from './p-option.pipe';
import { AddrSelectTopControlComponent } from './p-select-top-control.component';
import { AddrOptionContainerComponent } from './p-option-container.component';
var AddressSelectModule = /** @class */ (function () {
    function AddressSelectModule() {
    }
    AddressSelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AddressSelectComponent,
                        AddrSelectTopControlComponent,
                        AddrFilterOptionPipe,
                        AddrLevelFilterPipe,
                        AddrCheckedFilterPipe,
                        AddrOptionContainerComponent,
                    ],
                    imports: [
                        OverlayModule,
                        PlatformModule,
                        FormsModule,
                        CommonModule,
                        NzEmptyModule,
                        NzIconModule,
                        NzAddOnModule,
                        NzNoAnimationModule,
                        NzOverlayModule,
                    ],
                    exports: [
                        AddressSelectComponent,
                        AddrSelectTopControlComponent,
                        AddrFilterOptionPipe,
                        AddrLevelFilterPipe,
                        AddrCheckedFilterPipe,
                        AddrOptionContainerComponent,
                    ],
                },] }
    ];
    return AddressSelectModule;
}());
export { AddressSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1zZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvYWRkcmVzcy1zZWxlY3QvIiwic291cmNlcyI6WyJhZGRyZXNzLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RTtJQUFBO0lBNkJrQyxDQUFDOztnQkE3QmxDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0Qiw2QkFBNkI7d0JBQzdCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLDRCQUE0QjtxQkFDN0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3dCQUN0Qiw2QkFBNkI7d0JBQzdCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLDRCQUE0QjtxQkFDN0I7aUJBQ0Y7O0lBQ2lDLDBCQUFDO0NBQUEsQUE3Qm5DLElBNkJtQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzc1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZHJGaWx0ZXJPcHRpb25QaXBlLCBBZGRyTGV2ZWxGaWx0ZXJQaXBlLCBBZGRyQ2hlY2tlZEZpbHRlclBpcGUgfSBmcm9tICcuL3Atb3B0aW9uLnBpcGUnO1xuaW1wb3J0IHsgQWRkclNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3Atc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRyT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWRkcmVzc1NlbGVjdENvbXBvbmVudCxcbiAgICBBZGRyU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCxcbiAgICBBZGRyRmlsdGVyT3B0aW9uUGlwZSxcbiAgICBBZGRyTGV2ZWxGaWx0ZXJQaXBlLFxuICAgIEFkZHJDaGVja2VkRmlsdGVyUGlwZSxcbiAgICBBZGRyT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBQbGF0Zm9ybU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnpFbXB0eU1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpBZGRPbk1vZHVsZSxcbiAgICBOek5vQW5pbWF0aW9uTW9kdWxlLFxuICAgIE56T3ZlcmxheU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFkZHJlc3NTZWxlY3RDb21wb25lbnQsXG4gICAgQWRkclNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQsXG4gICAgQWRkckZpbHRlck9wdGlvblBpcGUsXG4gICAgQWRkckxldmVsRmlsdGVyUGlwZSxcbiAgICBBZGRyQ2hlY2tlZEZpbHRlclBpcGUsXG4gICAgQWRkck9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc1NlbGVjdE1vZHVsZSB7fVxuIl19