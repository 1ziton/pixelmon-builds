/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddressSelectService } from './address-select.service';
import { AddrLevelFilterPipe } from './p-option.pipe';
var AddrOptionContainerComponent = /** @class */ (function () {
    function AddrOptionContainerComponent(addrSrv, cdr) {
        this.addrSrv = addrSrv;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.scrollToBottom = new EventEmitter();
    }
    Object.defineProperty(AddrOptionContainerComponent.prototype, "level", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.addrSrv.levelLabels = new AddrLevelFilterPipe().transform(v);
            this.addrSrv.maxLevel = v;
            this.addrSrv.currentLevel = 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @return {?}
     */
    AddrOptionContainerComponent.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.addrSrv.clickOption(option);
    };
    /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    AddrOptionContainerComponent.prototype.toggleTabs = /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    function (tab, index) {
        if (tab.checked)
            return;
        this.addrSrv.toggleTab(index);
        this.addrSrv.updateListOfFilteredOption();
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    AddrOptionContainerComponent.prototype.trackLabel = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.label;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    AddrOptionContainerComponent.prototype.trackValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.value;
    };
    /**
     * @return {?}
     */
    AddrOptionContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.addrSrv.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    AddrOptionContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    AddrOptionContainerComponent.ctorParameters = function () { return [
        { type: AddressSelectService },
        { type: ChangeDetectorRef }
    ]; };
    AddrOptionContainerComponent.propDecorators = {
        notFoundContent: [{ type: Input }],
        menuItemSelectedIcon: [{ type: Input }],
        scrollToBottom: [{ type: Output }],
        level: [{ type: Input }]
    };
    return AddrOptionContainerComponent;
}());
export { AddrOptionContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQ7SUE4Q0Usc0NBQW1CLE9BQTZCLEVBQVUsR0FBc0I7UUFBN0QsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQS9CeEUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHZCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUE0QnNCLENBQUM7SUExQnBGLHNCQUNJLCtDQUFLOzs7OztRQURULFVBQ1UsQ0FBUztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsa0RBQVc7Ozs7SUFBWCxVQUFZLE1BQWtCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVELGlEQUFVOzs7OztJQUFWLFVBQVcsR0FBRyxFQUFFLEtBQWE7UUFDM0IsSUFBSSxHQUFHLENBQUMsT0FBTztZQUFFLE9BQU87UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELGlEQUFVOzs7OztJQUFWLFVBQVcsTUFBYyxFQUFFLE1BQWtCO1FBQzNDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsa0NBQWtDOzs7Ozs7O0lBQ2xDLGlEQUFVOzs7Ozs7O0lBQVYsVUFBVyxNQUFjLEVBQUUsTUFBa0I7UUFDM0MsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCwrQ0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDM0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGs2S0FBa0Q7b0JBQ2xELElBQUksRUFBRTt3QkFDSixxQkFBcUIsRUFBRSxnQkFBZ0I7d0JBQ3ZDLHFCQUFxQixFQUFFLFFBQVE7d0JBQy9CLGFBQWEsRUFBRSx5QkFBeUI7cUJBQ3pDOztpQkFFRjs7OztnQkFqQlEsb0JBQW9CO2dCQVozQixpQkFBaUI7OztrQ0FnQ2hCLEtBQUs7dUNBQ0wsS0FBSztpQ0FDTCxNQUFNO3dCQUVOLEtBQUs7O0lBc0NSLG1DQUFDO0NBQUEsQUExREQsSUEwREM7U0E1Q1ksNEJBQTRCOzs7Ozs7SUFDdkMsZ0RBQWlDOztJQUNqQyx1REFBaUM7O0lBQ2pDLDREQUFpRDs7SUFDakQsc0RBQTZEOztJQTRCakQsK0NBQW9DOzs7OztJQUFFLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWRkcmVzc1NlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2FkZHJlc3Mtc2VsZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkck9wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEFkZHJMZXZlbEZpbHRlclBpcGUgfSBmcm9tICcuL3Atb3B0aW9uLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbcC1vcHRpb24tY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAncE9wdGlvbkNvbnRhaW5lcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Atb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudW5zZWxlY3RhYmxlXSc6ICdcInVuc2VsZWN0YWJsZVwiJyxcbiAgICAnW3N0eWxlLnVzZXItc2VsZWN0XSc6ICdcIm5vbmVcIicsXG4gICAgJyhtb3VzZWRvd24pJzogJyRldmVudC5wcmV2ZW50RGVmYXVsdCgpJyxcbiAgfSxcbiAgc3R5bGVVcmxzOiBbJy4vc3R5bGUvaW5kZXgubGVzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsZXZlbCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLmFkZHJTcnYubGV2ZWxMYWJlbHMgPSBuZXcgQWRkckxldmVsRmlsdGVyUGlwZSgpLnRyYW5zZm9ybSh2KTtcbiAgICB0aGlzLmFkZHJTcnYubWF4TGV2ZWwgPSB2O1xuICAgIHRoaXMuYWRkclNydi5jdXJyZW50TGV2ZWwgPSAxO1xuICB9XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBBZGRyT3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyU3J2LmNsaWNrT3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICB0b2dnbGVUYWJzKHRhYiwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0YWIuY2hlY2tlZCkgcmV0dXJuO1xuICAgIHRoaXMuYWRkclNydi50b2dnbGVUYWIoaW5kZXgpO1xuICAgIHRoaXMuYWRkclNydi51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xuICB9XG5cbiAgdHJhY2tMYWJlbChfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBBZGRyT3B0aW9uKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQWRkck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhZGRyU3J2OiBBZGRyZXNzU2VsZWN0U2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkclNydi5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19