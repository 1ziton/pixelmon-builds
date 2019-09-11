/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DropdownPanelService } from './dropdown-panel.service';
var PanelOptionContainerComponent = /** @class */ (function () {
    function PanelOptionContainerComponent(dropPanelService, cdr, ngZone) {
        this.dropPanelService = dropPanelService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.scrollToBottom = new EventEmitter();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    PanelOptionContainerComponent.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.dropPanelService.clickOption(option);
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    PanelOptionContainerComponent.prototype.trackLabel = /**
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
    PanelOptionContainerComponent.prototype.trackValue = 
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
    PanelOptionContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dropPanelService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ul = _this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    _this.lastScrollTop = ul.scrollTop;
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.scrollToBottom.emit();
                    }));
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    PanelOptionContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    PanelOptionContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[p-panel-option-container]',
                    exportAs: 'pPanelOptionContainer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    template: "<ul #dropdownUl class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\" role=\"menu\" tabindex=\"0\">\n  <li\n    *ngIf=\"dropPanelService.isShowNotFound\"\n    nz-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n  >\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n  </li>\n  <li\n    class=\"item ant-select-dropdown-menu-item\"\n    [class.ant-select-dropdown-menu-item-selected]=\"option.checked && !option.disabled\"\n    *ngFor=\"\n      let option of dropPanelService.listOfPOption\n        | pFilterOption: dropPanelService.searchValue:dropPanelService.filterOption:dropPanelService.serverSearch;\n      trackBy: trackValue\n    \"\n    (click)=\"clickOption(option)\"\n  >\n    {{ option.label }}\n    <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"option.checked && !option.disabled && !menuItemSelectedIcon\"></i>\n  </li>\n</ul>\n",
                    host: {
                        '[attr.unselectable]': '"unselectable"',
                        '[style.user-select]': '"none"',
                        '[style.padding]': '"10px"',
                        '(mousedown)': '$event.preventDefault()',
                    },
                    styles: ["\n      .item {\n        display: inline-block;\n        width: 120px;\n        padding: 5px 10px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    PanelOptionContainerComponent.ctorParameters = function () { return [
        { type: DropdownPanelService },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    PanelOptionContainerComponent.propDecorators = {
        dropdownUl: [{ type: ViewChild, args: ['dropdownUl', { static: true },] }],
        notFoundContent: [{ type: Input }],
        menuItemSelectedIcon: [{ type: Input }],
        scrollToBottom: [{ type: Output }]
    };
    return PanelOptionContainerComponent;
}());
export { PanelOptionContainerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PanelOptionContainerComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    PanelOptionContainerComponent.prototype.lastScrollTop;
    /** @type {?} */
    PanelOptionContainerComponent.prototype.dropdownUl;
    /** @type {?} */
    PanelOptionContainerComponent.prototype.notFoundContent;
    /** @type {?} */
    PanelOptionContainerComponent.prototype.menuItemSelectedIcon;
    /** @type {?} */
    PanelOptionContainerComponent.prototype.scrollToBottom;
    /** @type {?} */
    PanelOptionContainerComponent.prototype.dropPanelService;
    /**
     * @type {?}
     * @private
     */
    PanelOptionContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    PanelOptionContainerComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2Ryb3Bkb3duLXBhbmVsLyIsInNvdXJjZXMiOlsicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFO0lBMENFLHVDQUFtQixnQkFBc0MsRUFBVSxHQUFzQixFQUFVLE1BQWM7UUFBOUYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWxCekcsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFJUCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFhdUQsQ0FBQzs7Ozs7SUFackgsbURBQVc7Ozs7SUFBWCxVQUFZLE1BQWU7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFDRCxrREFBVTs7Ozs7SUFBVixVQUFXLE1BQWMsRUFBRSxNQUFlO1FBQ3hDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsa0NBQWtDOzs7Ozs7O0lBQ2xDLGtEQUFVOzs7Ozs7O0lBQVYsVUFBVyxNQUFjLEVBQUUsTUFBZTtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELGdEQUFROzs7SUFBUjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDcEUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQzs7Z0JBQ3RCLEVBQUUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDeEMsU0FBUyxDQUFhLEVBQUUsRUFBRSxRQUFRLENBQUM7aUJBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUNWLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxFQUFFO29CQUNwRyxLQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7O29CQUFDO3dCQUNkLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdCLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxtREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDZnQ0FBa0Q7b0JBQ2xELElBQUksRUFBRTt3QkFDSixxQkFBcUIsRUFBRSxnQkFBZ0I7d0JBQ3ZDLHFCQUFxQixFQUFFLFFBQVE7d0JBQy9CLGlCQUFpQixFQUFFLFFBQVE7d0JBQzNCLGFBQWEsRUFBRSx5QkFBeUI7cUJBQ3pDOzZCQUVDLG1IQU1DO2lCQUVKOzs7O2dCQXpCUSxvQkFBb0I7Z0JBZjNCLGlCQUFpQjtnQkFLakIsTUFBTTs7OzZCQXVDTCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtrQ0FDeEMsS0FBSzt1Q0FDTCxLQUFLO2lDQUNMLE1BQU07O0lBd0NULG9DQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0E5Q1ksNkJBQTZCOzs7Ozs7SUFDeEMsaURBQWlDOzs7OztJQUNqQyxzREFBMEI7O0lBQzFCLG1EQUFvRjs7SUFDcEYsd0RBQWlDOztJQUNqQyw2REFBaUQ7O0lBQ2pELHVEQUE2RDs7SUFhakQseURBQTZDOzs7OztJQUFFLDRDQUE4Qjs7Ozs7SUFBRSwrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERyb3Bkb3duUGFuZWxTZXJ2aWNlIH0gZnJvbSAnLi9kcm9wZG93bi1wYW5lbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBPcHRpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1twLXBhbmVsLW9wdGlvbi1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdwUGFuZWxPcHRpb25Db250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9wLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnVuc2VsZWN0YWJsZV0nOiAnXCJ1bnNlbGVjdGFibGVcIicsXG4gICAgJ1tzdHlsZS51c2VyLXNlbGVjdF0nOiAnXCJub25lXCInLFxuICAgICdbc3R5bGUucGFkZGluZ10nOiAnXCIxMHB4XCInLFxuICAgICcobW91c2Vkb3duKSc6ICckZXZlbnQucHJldmVudERlZmF1bHQoKScsXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wID0gMDtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25VbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRyb3Bkb3duVWw6IEVsZW1lbnRSZWY8SFRNTFVMaXN0RWxlbWVudD47XG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBtZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBzY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBQT3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wUGFuZWxTZXJ2aWNlLmNsaWNrT3B0aW9uKG9wdGlvbik7XG4gIH1cbiAgdHJhY2tMYWJlbChfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBQT3B0aW9uKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogUE9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkcm9wUGFuZWxTZXJ2aWNlOiBEcm9wZG93blBhbmVsU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcFBhbmVsU2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCB1bCA9IHRoaXMuZHJvcGRvd25VbC5uYXRpdmVFbGVtZW50O1xuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHVsLCAnc2Nyb2xsJylcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGlmICh1bCAmJiB1bC5zY3JvbGxUb3AgPiB0aGlzLmxhc3RTY3JvbGxUb3AgJiYgdWwuc2Nyb2xsSGVpZ2h0IDwgdWwuY2xpZW50SGVpZ2h0ICsgdWwuc2Nyb2xsVG9wICsgMTApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19