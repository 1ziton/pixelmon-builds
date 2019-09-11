/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddressSelectService } from './address-select.service';
import { AddrLevelFilterPipe } from './p-option.pipe';
export class AddrOptionContainerComponent {
    /**
     * @param {?} addrSelectService
     * @param {?} cdr
     */
    constructor(addrSelectService, cdr) {
        this.addrSelectService = addrSelectService;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.scrollToBottom = new EventEmitter();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set level(v) {
        this.addrSelectService.levelLabels = new AddrLevelFilterPipe().transform(v);
        this.addrSelectService.maxLevel = v;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clickOption(option) {
        this.addrSelectService.clickOption(option);
    }
    /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    toggleTabs(tab, index) {
        if (tab.checked)
            return;
        this.addrSelectService.toggleTab(index);
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
        this.addrSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
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
                template: "<div class=\"address-container\">\n  <div class=\"ant-tabs ant-tabs-card\">\n    <div class=\"ant-tabs-bar ant-tabs-card-bar ant-tabs-top-bar ant-tabs-default-bar\">\n      <span\n        class=\"ant-tabs-tab\"\n        [class.ant-tabs-tab-active]=\"item.checked\"\n        *ngFor=\"let item of addrSelectService.levelLabels;let i=index\"\n        (click)=\"toggleTabs(item,i)\"\n        >{{ item.label }}</span\n      >\n    </div>\n  </div>\n  <!-- province -->\n  <ul\n    #provinceUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"0\"\n    [hidden]=\"addrSelectService.levelLabels[0] && !addrSelectService.levelLabels[0]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSelectService.isShowNotFound\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"option.checked && !option.disabled\"\n      *ngFor=\"\n        let option of addrSelectService.listOfProvinceOptions\n          | addrFilterOption: addrSelectService.searchValue:addrSelectService.filterOption:addrSelectService.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"option.checked && !option.disabled && !menuItemSelectedIcon\"></i>\n    </li>\n  </ul>\n  <!-- city -->\n  <ul\n    #cityUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"1\"\n    [hidden]=\"addrSelectService.levelLabels[1] && !addrSelectService.levelLabels[1]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSelectService.isShowNotFound\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"option.checked && !option.disabled\"\n      *ngFor=\"\n        let option of addrSelectService.listOfCityOptions\n          | addrFilterOption: addrSelectService.searchValue:addrSelectService.filterOption:addrSelectService.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"option.checked && !option.disabled && !menuItemSelectedIcon\"></i>\n    </li>\n  </ul>\n  <!-- distinct -->\n  <ul\n    #distinctUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"2\"\n    [hidden]=\"addrSelectService.levelLabels[2] && !addrSelectService.levelLabels[2]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSelectService.isShowNotFound\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"option.checked && !option.disabled\"\n      *ngFor=\"\n        let option of addrSelectService.listOfDistinctOptions\n          | addrFilterOption: addrSelectService.searchValue:addrSelectService.filterOption:addrSelectService.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"option.checked && !option.disabled && !menuItemSelectedIcon\"></i>\n    </li>\n  </ul>\n</div>\n",
                host: {
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '[style.padding]': '"10px"',
                    '(mousedown)': '$event.preventDefault()',
                },
                styles: [`
      .item {
        display: inline-block;
        width: 120px;
        padding: 5px 10px;
      }
    `]
            }] }
];
/** @nocollapse */
AddrOptionContainerComponent.ctorParameters = () => [
    { type: AddressSelectService },
    { type: ChangeDetectorRef }
];
AddrOptionContainerComponent.propDecorators = {
    dropdownUl: [{ type: ViewChild, args: ['dropdownUl', { static: true },] }],
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
    AddrOptionContainerComponent.prototype.dropdownUl;
    /** @type {?} */
    AddrOptionContainerComponent.prototype.notFoundContent;
    /** @type {?} */
    AddrOptionContainerComponent.prototype.menuItemSelectedIcon;
    /** @type {?} */
    AddrOptionContainerComponent.prototype.scrollToBottom;
    /** @type {?} */
    AddrOptionContainerComponent.prototype.addrSelectService;
    /**
     * @type {?}
     * @private
     */
    AddrOptionContainerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQXlCdEQsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUErQnZDLFlBQW1CLGlCQUF1QyxFQUFVLEdBQXNCO1FBQXZFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBc0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTlCbEYsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFJZCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUEwQmdDLENBQUM7Ozs7O0lBeEI5RixJQUNJLEtBQUssQ0FBQyxDQUFTO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFrQjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBYTtRQUMzQixJQUFJLEdBQUcsQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBa0I7UUFDM0MsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7SUFHRCxVQUFVLENBQUMsTUFBYyxFQUFFLE1BQWtCO1FBQzNDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiwyaUlBQWtEO2dCQUNsRCxJQUFJLEVBQUU7b0JBQ0oscUJBQXFCLEVBQUUsZ0JBQWdCO29CQUN2QyxxQkFBcUIsRUFBRSxRQUFRO29CQUMvQixpQkFBaUIsRUFBRSxRQUFRO29CQUMzQixhQUFhLEVBQUUseUJBQXlCO2lCQUN6Qzt5QkFFQzs7Ozs7O0tBTUM7YUFFSjs7OztZQTFCUSxvQkFBb0I7WUFkM0IsaUJBQWlCOzs7eUJBMkNoQixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFDeEMsS0FBSzttQ0FDTCxLQUFLOzZCQUNMLE1BQU07b0JBRU4sS0FBSzs7Ozs7OztJQU5OLGdEQUFpQzs7SUFDakMsa0RBQW9GOztJQUNwRix1REFBaUM7O0lBQ2pDLDREQUFpRDs7SUFDakQsc0RBQTZEOztJQTBCakQseURBQThDOzs7OztJQUFFLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZGRyZXNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1zZWxlY3Quc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyT3B0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWRkckxldmVsRmlsdGVyUGlwZSB9IGZyb20gJy4vcC1vcHRpb24ucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1twLW9wdGlvbi1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdwT3B0aW9uQ29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vcC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJzogJ1widW5zZWxlY3RhYmxlXCInLFxuICAgICdbc3R5bGUudXNlci1zZWxlY3RdJzogJ1wibm9uZVwiJyxcbiAgICAnW3N0eWxlLnBhZGRpbmddJzogJ1wiMTBweFwiJyxcbiAgICAnKG1vdXNlZG93biknOiAnJGV2ZW50LnByZXZlbnREZWZhdWx0KCknLFxuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25VbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRyb3Bkb3duVWw6IEVsZW1lbnRSZWY8SFRNTFVMaXN0RWxlbWVudD47XG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBtZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBzY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgbGV2ZWwodjogbnVtYmVyKSB7XG4gICAgdGhpcy5hZGRyU2VsZWN0U2VydmljZS5sZXZlbExhYmVscyA9IG5ldyBBZGRyTGV2ZWxGaWx0ZXJQaXBlKCkudHJhbnNmb3JtKHYpO1xuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UubWF4TGV2ZWwgPSB2O1xuICB9XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBBZGRyT3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyU2VsZWN0U2VydmljZS5jbGlja09wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgdG9nZ2xlVGFicyh0YWIsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGFiLmNoZWNrZWQpIHJldHVybjtcbiAgICB0aGlzLmFkZHJTZWxlY3RTZXJ2aWNlLnRvZ2dsZVRhYihpbmRleCk7XG4gIH1cblxuICB0cmFja0xhYmVsKF9pbmRleDogbnVtYmVyLCBvcHRpb246IEFkZHJPcHRpb24pOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBBZGRyT3B0aW9uKTogYW55IHtcbiAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFkZHJTZWxlY3RTZXJ2aWNlOiBBZGRyZXNzU2VsZWN0U2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==