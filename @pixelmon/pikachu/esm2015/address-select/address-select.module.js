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
import { AddrFilterOptionPipe, AddrLevelFilterPipe } from './p-option.pipe';
import { AddrSelectTopControlComponent } from './p-select-top-control.component';
import { AddrOptionContainerComponent } from './p-option-container.component';
export class AddressSelectModule {
}
AddressSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AddressSelectComponent,
                    AddrSelectTopControlComponent,
                    AddrFilterOptionPipe,
                    AddrLevelFilterPipe,
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
                    AddrOptionContainerComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1zZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvYWRkcmVzcy1zZWxlY3QvIiwic291cmNlcyI6WyJhZGRyZXNzLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQTZCOUUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBM0IvQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIsNkJBQTZCO29CQUM3QixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsNEJBQTRCO2lCQUM3QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixhQUFhO29CQUNiLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLDZCQUE2QjtvQkFDN0Isb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLDRCQUE0QjtpQkFDN0I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZW1wdHknO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkckZpbHRlck9wdGlvblBpcGUsIEFkZHJMZXZlbEZpbHRlclBpcGUgfSBmcm9tICcuL3Atb3B0aW9uLnBpcGUnO1xuaW1wb3J0IHsgQWRkclNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3Atc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRyT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWRkcmVzc1NlbGVjdENvbXBvbmVudCxcbiAgICBBZGRyU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCxcbiAgICBBZGRyRmlsdGVyT3B0aW9uUGlwZSxcbiAgICBBZGRyTGV2ZWxGaWx0ZXJQaXBlLFxuICAgIEFkZHJPcHRpb25Db250YWluZXJDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIFBsYXRmb3JtTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOekVtcHR5TW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOekFkZE9uTW9kdWxlLFxuICAgIE56Tm9BbmltYXRpb25Nb2R1bGUsXG4gICAgTnpPdmVybGF5TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWRkcmVzc1NlbGVjdENvbXBvbmVudCxcbiAgICBBZGRyU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCxcbiAgICBBZGRyRmlsdGVyT3B0aW9uUGlwZSxcbiAgICBBZGRyTGV2ZWxGaWx0ZXJQaXBlLFxuICAgIEFkZHJPcHRpb25Db250YWluZXJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NTZWxlY3RNb2R1bGUge31cbiJdfQ==