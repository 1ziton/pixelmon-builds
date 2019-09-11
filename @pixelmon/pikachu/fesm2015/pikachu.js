import { LodopModule } from '@pixelmon/pikachu/lodop';
export { LodopConfig, LodopModule, LodopService } from '@pixelmon/pikachu/lodop';
import { NoticeIconModule } from '@pixelmon/pikachu/notice-icon';
export { NoticeIconComponent, NoticeIconModule, NoticeIconTabComponent } from '@pixelmon/pikachu/notice-icon';
import { PageHeaderModule } from '@pixelmon/pikachu/page-header';
export { PageHeaderComponent, PageHeaderConfig, PageHeaderModule } from '@pixelmon/pikachu/page-header';
import { PaginationModule } from '@pixelmon/pikachu/pagination';
export { PaginationComponent, PaginationModule } from '@pixelmon/pikachu/pagination';
import { ReuseTabModule } from '@pixelmon/pikachu/reuse-tab';
export { ReuseTabComponent, ReuseTabContextComponent, ReuseTabContextDirective, ReuseTabContextMenuComponent, ReuseTabContextService, ReuseTabMatchMode, ReuseTabModule, ReuseTabService, ReuseTabStrategy } from '@pixelmon/pikachu/reuse-tab';
import { SidebarNavModule } from '@pixelmon/pikachu/sidebar-nav';
export { SidebarNavComponent, SidebarNavModule } from '@pixelmon/pikachu/sidebar-nav';
import { SVModule } from '@pixelmon/pikachu/view';
export { SVComponent, SVConfig, SVContainerComponent, SVModule, SVTitleComponent } from '@pixelmon/pikachu/view';
export { ViewerDirective, ViewerDirectiveModule, ViewerImgDirective } from '@pixelmon/pikachu/viewer';
import { FooterToolbarModule } from '@pixelmon/pikachu/footer-toolbar';
export { FooterToolbarComponent, FooterToolbarModule } from '@pixelmon/pikachu/footer-toolbar';
import { TableModule } from '@pixelmon/pikachu/table';
export { TableCellComponent, TableComponent, TableFilterComponent, TableModule } from '@pixelmon/pikachu/table';
import { UploadModule } from '@pixelmon/pikachu/upload';
export { UploadModule, UploadServiceToken, ɵa } from '@pixelmon/pikachu/upload';
import { StepsModule } from '@pixelmon/pikachu/steps';
export { StepsComponent, StepsModule } from '@pixelmon/pikachu/steps';
import { AddressSelectModule } from '@pixelmon/pikachu/address-select';
export { AddrFilterOptionPipe, AddrLevelFilterPipe, AddrOptionContainerComponent, AddrSelectTopControlComponent, AddressQueryService, AddressSelectComponent, AddressSelectModule, AddressSelectService } from '@pixelmon/pikachu/address-select';
import { DropdownPanelModule } from '@pixelmon/pikachu/dropdown-panel';
export { DropdownPanelComponent, DropdownPanelModule, DropdownPanelService, PanelFilterOptionPipe, PanelOptionContainerComponent, PanelSelectTopControlComponent } from '@pixelmon/pikachu/dropdown-panel';
import { NgModule } from '@angular/core';
import { QueryTabsModule } from '@pixelmon/pikachu/query-tabs';
import { SmartTextModule } from '@pixelmon/pikachu/smart-text';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MODULES = [
    QueryTabsModule,
    SmartTextModule,
    LodopModule,
    ReuseTabModule,
    NoticeIconModule,
    SidebarNavModule,
    SVModule,
    PageHeaderModule,
    TableModule,
    UploadModule,
    PaginationModule,
    FooterToolbarModule,
    StepsModule,
    AddressSelectModule,
    DropdownPanelModule,
];
class PikachuModule {
}
PikachuModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PikachuModule };
//# sourceMappingURL=pikachu.js.map
