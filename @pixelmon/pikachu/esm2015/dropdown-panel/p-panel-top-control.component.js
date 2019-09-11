/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NzNoAnimationDirective, zoomMotion } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DropdownPanelService } from './dropdown-panel.service';
export class PanelSelectTopControlComponent {
    /**
     * @param {?} dropPanelService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(dropPanelService, cdr, noAnimation) {
        this.dropPanelService = dropPanelService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.showSearch = false;
        this.open = false;
        this.allowClear = false;
        this.showArrow = true;
        this.loading = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClearSelection(e) {
        e.stopPropagation();
        this.dropPanelService.updateListOfSelectedValue([], true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 */
        if (this.inputElement && !value) {
            this.inputElement.nativeElement.value = value;
        }
        this.inputValue = value;
        this.dropPanelService.updateSearchValue(value);
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.dropPanelService.listOfSelectedValue.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get selectedValueStyle() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
        if (!this.showSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.open) {
                showSelectedValue = !(this.inputValue || this.isComposing);
                if (showSelectedValue) {
                    opacity = 0.4;
                }
            }
            else {
                showSelectedValue = true;
            }
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            opacity: `${opacity}`,
        };
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
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    removeSelectedValue(option, e) {
        this.dropPanelService.removeValueFormSelected(option);
        e.stopPropagation();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dropPanelService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        open => {
            if (this.inputElement && open) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.inputElement.nativeElement.focus()));
            }
        }));
        this.dropPanelService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.setInputValue('');
        }));
        this.dropPanelService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
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
PanelSelectTopControlComponent.decorators = [
    { type: Component, args: [{
                selector: '[p-panel-top-control]',
                template: "\n<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"dropPanelService.disabled\"\n  />\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"placeHolder\" nz-select-unselectable [style.display]=\"placeHolderDisplay\" class=\"ant-select-selection__placeholder\">\n    {{ placeHolder }}\n  </div>\n\n  <!--single mode-->\n  <ng-container *ngIf=\"dropPanelService.isSingleMode\">\n    <!--selected label-->\n    <div\n      *ngIf=\"dropPanelService.listOfCachedSelectedOption.length && dropPanelService.listOfSelectedValue.length\"\n      class=\"ant-select-selection-selected-value\"\n      [attr.title]=\"dropPanelService.listOfCachedSelectedOption[0]?.label\"\n      [ngStyle]=\"selectedValueStyle\"\n    >\n      <ng-container>{{ dropPanelService.listOfCachedSelectedOption[0]?.label }}</ng-container>\n    </div>\n    <!--show search-->\n    <div *ngIf=\"showSearch\" class=\"ant-select-search ant-select-search--inline\" [style.display]=\"open ? 'block' : 'none'\">\n      <div class=\"ant-select-search__field__wrap\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n        <span class=\"ant-select-search__field__mirror\">{{ inputValue }}&nbsp;</span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<span\n  *ngIf=\"allowClear && dropPanelService.listOfSelectedValue.length\"\n  class=\"ant-select-selection__clear\"\n  nz-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\"\n>\n  <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!clearIcon; else clearIcon\" class=\"ant-select-close-icon\"></i>\n</span>\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"showArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"loading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!suffixIcon; else suffixIcon\"></i>\n  </ng-template>\n</span>\n",
                exportAs: 'pPanelTopControl',
                preserveWhitespaces: false,
                animations: [zoomMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
PanelSelectTopControlComponent.ctorParameters = () => [
    { type: DropdownPanelService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
PanelSelectTopControlComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
    showSearch: [{ type: Input }],
    placeHolder: [{ type: Input }],
    open: [{ type: Input }],
    allowClear: [{ type: Input }],
    showArrow: [{ type: Input }],
    loading: [{ type: Input }],
    suffixIcon: [{ type: Input }],
    clearIcon: [{ type: Input }],
    removeIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.isComposing;
    /**
     * @type {?}
     * @private
     */
    PanelSelectTopControlComponent.prototype.destroy$;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.showSearch;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.placeHolder;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.open;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.allowClear;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.showArrow;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.loading;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.suffixIcon;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.clearIcon;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.removeIcon;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.dropPanelService;
    /**
     * @type {?}
     * @private
     */
    PanelSelectTopControlComponent.prototype.cdr;
    /** @type {?} */
    PanelSelectTopControlComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1wYW5lbC10b3AtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS9kcm9wZG93bi1wYW5lbC8iLCJzb3VyY2VzIjpbInAtcGFuZWwtdG9wLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVdoRSxNQUFNLE9BQU8sOEJBQThCOzs7Ozs7SUFnRXpDLFlBQ1MsZ0JBQXNDLEVBQ3JDLEdBQXNCLEVBQ0gsV0FBb0M7UUFGeEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtRQUNyQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNILGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQWpFakUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDWixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV4QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQTBEdEIsQ0FBQzs7Ozs7SUFyREosZ0JBQWdCLENBQUMsQ0FBYTtRQUM1QixD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QUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQWhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsNHJFQUFtRDtnQkFDbkQsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFWUSxvQkFBb0I7WUFmM0IsaUJBQWlCO1lBWVYsc0JBQXNCLHVCQWlGMUIsSUFBSSxZQUFJLFFBQVE7OzsyQkEvRGxCLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQUMzQyxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQVpOLG9EQUFtQjs7SUFDbkIscURBQW9COzs7OztJQUNwQixrREFBaUM7O0lBQ2pDLHNEQUF1RTs7SUFDdkUsb0RBQTRCOztJQUM1QixxREFBNkI7O0lBQzdCLDhDQUFzQjs7SUFDdEIsb0RBQTRCOztJQUM1QixtREFBMEI7O0lBQzFCLGlEQUF5Qjs7SUFDekIsb0RBQXVDOztJQUN2QyxtREFBc0M7O0lBQ3RDLG9EQUF1Qzs7SUFvRHJDLDBEQUE2Qzs7Ozs7SUFDN0MsNkNBQThCOztJQUM5QixxREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgem9vbU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEcm9wZG93blBhbmVsU2VydmljZSB9IGZyb20gJy4vZHJvcGRvd24tcGFuZWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1twLXBhbmVsLXRvcC1jb250cm9sXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wLXBhbmVsLXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgZXhwb3J0QXM6ICdwUGFuZWxUb3BDb250cm9sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFt6b29tTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBvcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFsbG93Q2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd0Fycm93ID0gdHJ1ZTtcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBzdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY2xlYXJJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgcmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgb25DbGVhclNlbGVjdGlvbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRyb3BQYW5lbFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvKiogZml4IGNsZWFyIHZhbHVlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zODI1ICovXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmICF2YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmRyb3BQYW5lbFNlcnZpY2UudXBkYXRlU2VhcmNoVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLmRyb3BQYW5lbFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkVmFsdWVTdHlsZSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgaWYgKCF0aGlzLnNob3dTZWFyY2gpIHtcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWAsXG4gICAgfTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbjogYW55LCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5kcm9wUGFuZWxTZXJ2aWNlLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbik7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkcm9wUGFuZWxTZXJ2aWNlOiBEcm9wZG93blBhbmVsU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wUGFuZWxTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3BlbiA9PiB7XG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgb3Blbikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kcm9wUGFuZWxTZXJ2aWNlLmNsZWFySW5wdXQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcbiAgICB9KTtcbiAgICB0aGlzLmRyb3BQYW5lbFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==