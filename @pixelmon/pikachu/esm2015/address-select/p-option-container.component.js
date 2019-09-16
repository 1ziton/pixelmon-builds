/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddressSelectService } from './address-select.service';
import { AddrLevelFilterPipe } from './p-option.pipe';
export class AddrOptionContainerComponent {
    /**
     * @param {?} addrSrv
     * @param {?} cdr
     */
    constructor(addrSrv, cdr) {
        this.addrSrv = addrSrv;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.scrollToBottom = new EventEmitter();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set level(v) {
        this.addrSrv.levelLabels = new AddrLevelFilterPipe().transform(v);
        this.addrSrv.maxLevel = v;
        this.addrSrv.currentLevel = 1;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clickOption(option) {
        this.addrSrv.clickOption(option);
    }
    /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    toggleTabs(tab, index) {
        if (tab.checked)
            return;
        this.addrSrv.toggleTab(index);
        this.addrSrv.updateListOfFilteredOption();
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackLabel(_index, option) {
        return option.label;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return option.value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addrSrv.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
AddrOptionContainerComponent.decorators = [
    { type: Component, args: [{
                selector: '[p-option-container]',
                exportAs: 'pOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: "<div class=\"p-address-select-container\">\n  <div class=\"ant-tabs ant-tabs-card\">\n    <div class=\"ant-tabs-bar ant-tabs-card-bar ant-tabs-top-bar ant-tabs-default-bar\">\n      <span\n        class=\"ant-tabs-tab\"\n        [class.ant-tabs-tab-active]=\"item.checked\"\n        *ngFor=\"let item of addrSrv.levelLabels; let i = index\"\n        (click)=\"toggleTabs(item, i)\"\n        >{{ item.label }}</span\n      >\n    </div>\n  </div>\n  <!-- province -->\n  <ul\n    #provinceUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"0\"\n    [hidden]=\"addrSrv.levelLabels[0] && !addrSrv.levelLabels[0]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSrv.isShowNotFound && addrSrv.currentLevel === 1\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"addrSrv.listOfActivatedOption | pAddrCheckedFitler: 1:option\"\n      *ngFor=\"\n        let option of addrSrv.listOfProvinceOptions | addrFilterOption: addrSrv.searchValue:addrSrv.filterOption:addrSrv.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i\n        nz-icon\n        nzType=\"check\"\n        class=\"ant-select-selected-icon\"\n        *ngIf=\"(addrSrv.listOfActivatedOption | pAddrCheckedFitler: 1:option) && !menuItemSelectedIcon\"\n      ></i>\n    </li>\n  </ul>\n  <!-- city -->\n  <ul\n    #cityUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"1\"\n    [hidden]=\"addrSrv.levelLabels[1] && !addrSrv.levelLabels[1]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSrv.isShowNotFound && addrSrv.currentLevel === 2\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      *ngFor=\"\n        let option of addrSrv.listOfCityOptions | addrFilterOption: addrSrv.searchValue:addrSrv.filterOption:addrSrv.serverSearch;\n        trackBy: trackValue\n      \"\n      [class.ant-select-dropdown-menu-item-selected]=\"addrSrv.listOfActivatedOption | pAddrCheckedFitler: 2:option\"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i\n        nz-icon\n        nzType=\"check\"\n        class=\"ant-select-selected-icon\"\n        *ngIf=\"(addrSrv.listOfActivatedOption | pAddrCheckedFitler: 2:option) && !menuItemSelectedIcon\"\n      ></i>\n    </li>\n  </ul>\n  <!-- distinct -->\n  <ul\n    #distinctUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"2\"\n    [hidden]=\"addrSrv.levelLabels[2] && !addrSrv.levelLabels[2]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSrv.isShowNotFound && addrSrv.currentLevel === 3\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"addrSrv.listOfActivatedOption | pAddrCheckedFitler: 3:option\"\n      *ngFor=\"\n        let option of addrSrv.listOfDistinctOptions | addrFilterOption: addrSrv.searchValue:addrSrv.filterOption:addrSrv.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i\n        nz-icon\n        nzType=\"check\"\n        class=\"ant-select-selected-icon\"\n        *ngIf=\"(addrSrv.listOfActivatedOption | pAddrCheckedFitler: 3:option) && !menuItemSelectedIcon\"\n      ></i>\n    </li>\n  </ul>\n  <!-- street -->\n  <ul\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"3\"\n    [hidden]=\"addrSrv.levelLabels[3] && !addrSrv.levelLabels[3]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSrv.isShowNotFound && addrSrv.currentLevel === 4\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"addrSrv.listOfActivatedOption | pAddrCheckedFitler: 4:option\"\n      *ngFor=\"\n        let option of addrSrv.listOfStreetOptions | addrFilterOption: addrSrv.searchValue:addrSrv.filterOption:addrSrv.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i\n        nz-icon\n        nzType=\"check\"\n        class=\"ant-select-selected-icon\"\n        *ngIf=\"(addrSrv.listOfActivatedOption | pAddrCheckedFitler: 4:option) && !menuItemSelectedIcon\"\n      ></i>\n    </li>\n  </ul>\n</div>\n",
                host: {
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(mousedown)': '$event.preventDefault()',
                },
                styles: [".p-address-select-container .ant-tabs-bar{margin-bottom:10px;padding-left:10px;background:#e8e8e8;border-bottom:none!important}.p-address-select-container .ant-tabs-tab{display:inline-block;height:100%;background:0 0!important;cursor:pointer}.p-address-select-container .ant-tabs-tab-active{background:#fff!important}.p-address-select-container .ant-select-dropdown-menu-root{padding:0 10px 5px}.p-address-select-container .item{display:inline-block;width:120px;padding:5px 10px}"]
            }] }
];
/** @nocollapse */
AddrOptionContainerComponent.ctorParameters = () => [
    { type: AddressSelectService },
    { type: ChangeDetectorRef }
];
AddrOptionContainerComponent.propDecorators = {
    notFoundContent: [{ type: Input }],
    menuItemSelectedIcon: [{ type: Input }],
    scrollToBottom: [{ type: Output }],
    level: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddrOptionContainerComponent.prototype.destroy$;
    /** @type {?} */
    AddrOptionContainerComponent.prototype.notFoundContent;
    /** @type {?} */
    AddrOptionContainerComponent.prototype.menuItemSelectedIcon;
    /** @type {?} */
    AddrOptionContainerComponent.prototype.scrollToBottom;
    /** @type {?} */
    AddrOptionContainerComponent.prototype.addrSrv;
    /**
     * @type {?}
     * @private
     */
    AddrOptionContainerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFnQnRELE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBZ0N2QyxZQUFtQixPQUE2QixFQUFVLEdBQXNCO1FBQTdELFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEvQnhFLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2QsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBNEJzQixDQUFDOzs7OztJQTFCcEYsSUFDSSxLQUFLLENBQUMsQ0FBUztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBa0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFhO1FBQzNCLElBQUksR0FBRyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBYyxFQUFFLE1BQWtCO1FBQzNDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7Ozs7O0lBR0QsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFrQjtRQUMzQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGs2S0FBa0Q7Z0JBQ2xELElBQUksRUFBRTtvQkFDSixxQkFBcUIsRUFBRSxnQkFBZ0I7b0JBQ3ZDLHFCQUFxQixFQUFFLFFBQVE7b0JBQy9CLGFBQWEsRUFBRSx5QkFBeUI7aUJBQ3pDOzthQUVGOzs7O1lBakJRLG9CQUFvQjtZQVozQixpQkFBaUI7Ozs4QkFnQ2hCLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxNQUFNO29CQUVOLEtBQUs7Ozs7Ozs7SUFMTixnREFBaUM7O0lBQ2pDLHVEQUFpQzs7SUFDakMsNERBQWlEOztJQUNqRCxzREFBNkQ7O0lBNEJqRCwrQ0FBb0M7Ozs7O0lBQUUsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZGRyZXNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1zZWxlY3Quc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyT3B0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWRkckxldmVsRmlsdGVyUGlwZSB9IGZyb20gJy4vcC1vcHRpb24ucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1twLW9wdGlvbi1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdwT3B0aW9uQ29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vcC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJzogJ1widW5zZWxlY3RhYmxlXCInLFxuICAgICdbc3R5bGUudXNlci1zZWxlY3RdJzogJ1wibm9uZVwiJyxcbiAgICAnKG1vdXNlZG93biknOiAnJGV2ZW50LnByZXZlbnREZWZhdWx0KCknLFxuICB9LFxuICBzdHlsZVVybHM6IFsnLi9zdHlsZS9pbmRleC5sZXNzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGxldmVsKHY6IG51bWJlcikge1xuICAgIHRoaXMuYWRkclNydi5sZXZlbExhYmVscyA9IG5ldyBBZGRyTGV2ZWxGaWx0ZXJQaXBlKCkudHJhbnNmb3JtKHYpO1xuICAgIHRoaXMuYWRkclNydi5tYXhMZXZlbCA9IHY7XG4gICAgdGhpcy5hZGRyU3J2LmN1cnJlbnRMZXZlbCA9IDE7XG4gIH1cblxuICBjbGlja09wdGlvbihvcHRpb246IEFkZHJPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJTcnYuY2xpY2tPcHRpb24ob3B0aW9uKTtcbiAgfVxuXG4gIHRvZ2dsZVRhYnModGFiLCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRhYi5jaGVja2VkKSByZXR1cm47XG4gICAgdGhpcy5hZGRyU3J2LnRvZ2dsZVRhYihpbmRleCk7XG4gICAgdGhpcy5hZGRyU3J2LnVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk7XG4gIH1cblxuICB0cmFja0xhYmVsKF9pbmRleDogbnVtYmVyLCBvcHRpb246IEFkZHJPcHRpb24pOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBBZGRyT3B0aW9uKTogYW55IHtcbiAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFkZHJTcnY6IEFkZHJlc3NTZWxlY3RTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyU3J2LmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=