/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DropdownPanelService } from './dropdown-panel.service';
export class PanelOptionContainerComponent {
    /**
     * @param {?} dropPanelService
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(dropPanelService, cdr, ngZone) {
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
    clickOption(option) {
        this.dropPanelService.clickOption(option);
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
        this.dropPanelService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const ul = this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    this.lastScrollTop = ul.scrollTop;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.scrollToBottom.emit();
                    }));
                }
            }));
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
PanelOptionContainerComponent.ctorParameters = () => [
    { type: DropdownPanelService },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
PanelOptionContainerComponent.propDecorators = {
    dropdownUl: [{ type: ViewChild, args: ['dropdownUl', { static: true },] }],
    notFoundContent: [{ type: Input }],
    menuItemSelectedIcon: [{ type: Input }],
    scrollToBottom: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2Ryb3Bkb3duLXBhbmVsLyIsInNvdXJjZXMiOlsicC1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBMEJoRSxNQUFNLE9BQU8sNkJBQTZCOzs7Ozs7SUFtQnhDLFlBQW1CLGdCQUFzQyxFQUFVLEdBQXNCLEVBQVUsTUFBYztRQUE5RixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXNCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbEJ6RyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUlQLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWF1RCxDQUFDOzs7OztJQVpySCxXQUFXLENBQUMsTUFBZTtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUNELFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBZTtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7OztJQUdELFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBZTtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFOztrQkFDM0IsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN4QyxTQUFTLENBQWEsRUFBRSxFQUFFLFFBQVEsQ0FBQztpQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDYixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRTtvQkFDcEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7OztvQkFBQyxHQUFHLEVBQUU7d0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdCLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiw2Z0NBQWtEO2dCQUNsRCxJQUFJLEVBQUU7b0JBQ0oscUJBQXFCLEVBQUUsZ0JBQWdCO29CQUN2QyxxQkFBcUIsRUFBRSxRQUFRO29CQUMvQixpQkFBaUIsRUFBRSxRQUFRO29CQUMzQixhQUFhLEVBQUUseUJBQXlCO2lCQUN6Qzt5QkFFQzs7Ozs7O0tBTUM7YUFFSjs7OztZQXpCUSxvQkFBb0I7WUFmM0IsaUJBQWlCO1lBS2pCLE1BQU07Ozt5QkF1Q0wsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OEJBQ3hDLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxNQUFNOzs7Ozs7O0lBTFAsaURBQWlDOzs7OztJQUNqQyxzREFBMEI7O0lBQzFCLG1EQUFvRjs7SUFDcEYsd0RBQWlDOztJQUNqQyw2REFBaUQ7O0lBQ2pELHVEQUE2RDs7SUFhakQseURBQTZDOzs7OztJQUFFLDRDQUE4Qjs7Ozs7SUFBRSwrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERyb3Bkb3duUGFuZWxTZXJ2aWNlIH0gZnJvbSAnLi9kcm9wZG93bi1wYW5lbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBPcHRpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1twLXBhbmVsLW9wdGlvbi1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdwUGFuZWxPcHRpb25Db250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9wLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnVuc2VsZWN0YWJsZV0nOiAnXCJ1bnNlbGVjdGFibGVcIicsXG4gICAgJ1tzdHlsZS51c2VyLXNlbGVjdF0nOiAnXCJub25lXCInLFxuICAgICdbc3R5bGUucGFkZGluZ10nOiAnXCIxMHB4XCInLFxuICAgICcobW91c2Vkb3duKSc6ICckZXZlbnQucHJldmVudERlZmF1bHQoKScsXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wID0gMDtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25VbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRyb3Bkb3duVWw6IEVsZW1lbnRSZWY8SFRNTFVMaXN0RWxlbWVudD47XG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBtZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBzY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBQT3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wUGFuZWxTZXJ2aWNlLmNsaWNrT3B0aW9uKG9wdGlvbik7XG4gIH1cbiAgdHJhY2tMYWJlbChfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBQT3B0aW9uKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogUE9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkcm9wUGFuZWxTZXJ2aWNlOiBEcm9wZG93blBhbmVsU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcFBhbmVsU2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCB1bCA9IHRoaXMuZHJvcGRvd25VbC5uYXRpdmVFbGVtZW50O1xuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHVsLCAnc2Nyb2xsJylcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGlmICh1bCAmJiB1bC5zY3JvbGxUb3AgPiB0aGlzLmxhc3RTY3JvbGxUb3AgJiYgdWwuc2Nyb2xsSGVpZ2h0IDwgdWwuY2xpZW50SGVpZ2h0ICsgdWwuc2Nyb2xsVG9wICsgMTApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19