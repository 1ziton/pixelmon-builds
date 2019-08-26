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
import { AdvancedUploadModule } from './advanced-upload/advanced-upload.module';
import { UploadServiceToken } from './advanced-upload/advanced-upload.component';
import { UploadService } from './advanced-upload/upload.service';
/** @type {?} */
const MODULES = [
    AdvancedTableModule,
    QueryTabsModule,
    SmartTextModule,
    LodopModule,
    ReuseTabModule,
    NoticeIconModule,
    SidebarNavModule,
    SVModule,
    PageHeaderModule,
    AdvancedUploadModule,
];
export class PikachuModule {
}
PikachuModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES, providers: [{ provide: UploadServiceToken, useExisting: UploadService }] },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlrYWNodS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbInBpa2FjaHUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7TUFFM0QsT0FBTyxHQUFHO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3JCO0FBR0QsTUFBTSxPQUFPLGFBQWE7OztZQUR6QixRQUFRLFNBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZG9wTW9kdWxlIH0gZnJvbSAnQHBpeGVsbW9uL3Bpa2FjaHUvbG9kb3AnO1xuaW1wb3J0IHsgTm90aWNlSWNvbk1vZHVsZSB9IGZyb20gJy4vbm90aWNlLWljb24nO1xuaW1wb3J0IHsgUGFnZUhlYWRlck1vZHVsZSB9IGZyb20gJy4vcGFnZS1oZWFkZXInO1xuaW1wb3J0IHsgUmV1c2VUYWJNb2R1bGUgfSBmcm9tICcuL3JldXNlLXRhYic7XG5pbXBvcnQgeyBTaWRlYmFyTmF2TW9kdWxlIH0gZnJvbSAnLi9zaWRlYmFyLW5hdic7XG5pbXBvcnQgeyBTVk1vZHVsZSB9IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBRdWVyeVRhYnNNb2R1bGUgfSBmcm9tICcuL3F1ZXJ5LXRhYnMnO1xuaW1wb3J0IHsgQWR2YW5jZWRUYWJsZU1vZHVsZSB9IGZyb20gJy4vYWR2YW5jZWQtdGFibGUnO1xuaW1wb3J0IHsgU21hcnRUZXh0TW9kdWxlIH0gZnJvbSAnLi9zbWFydC10ZXh0JztcbmltcG9ydCB7IEFkdmFuY2VkVXBsb2FkTW9kdWxlIH0gZnJvbSAnLi9hZHZhbmNlZC11cGxvYWQvYWR2YW5jZWQtdXBsb2FkLm1vZHVsZSc7XG5pbXBvcnQgeyBVcGxvYWRTZXJ2aWNlVG9rZW4gfSBmcm9tICcuL2FkdmFuY2VkLXVwbG9hZC9hZHZhbmNlZC11cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFVwbG9hZFNlcnZpY2UgfSBmcm9tICcuL2FkdmFuY2VkLXVwbG9hZC91cGxvYWQuc2VydmljZSc7XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEFkdmFuY2VkVGFibGVNb2R1bGUsXG4gIFF1ZXJ5VGFic01vZHVsZSxcbiAgU21hcnRUZXh0TW9kdWxlLFxuICBMb2RvcE1vZHVsZSxcbiAgUmV1c2VUYWJNb2R1bGUsXG4gIE5vdGljZUljb25Nb2R1bGUsXG4gIFNpZGViYXJOYXZNb2R1bGUsXG4gIFNWTW9kdWxlLFxuICBQYWdlSGVhZGVyTW9kdWxlLFxuICBBZHZhbmNlZFVwbG9hZE1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMsIHByb3ZpZGVyczogW3sgcHJvdmlkZTogVXBsb2FkU2VydmljZVRva2VuLCB1c2VFeGlzdGluZzogVXBsb2FkU2VydmljZSB9XSB9KVxuZXhwb3J0IGNsYXNzIFBpa2FjaHVNb2R1bGUge31cbiJdfQ==