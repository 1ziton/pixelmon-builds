/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Host, Input, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, isNotNil, NzNoAnimationDirective, slideMotion, toBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddressSelectService } from './address-select.service';
import { AddrSelectTopControlComponent } from './p-select-top-control.component';
var AddressSelectComponent = /** @class */ (function () {
    function AddressSelectComponent(renderer, addrSelectService, cdr, focusMonitor, platform, elementRef, noAnimation) {
        this.renderer = renderer;
        this.addrSelectService = addrSelectService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this._open = false;
        this.dropDownPosition = 'bottom';
        this._disabled = false;
        this._autoFocus = false;
        this.isInit = false;
        this.destroy$ = new Subject();
        // tslint:disable-next-line: jsdoc-format
        /**
         * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
         */
        // tslint:disable-next-line: no-output-on-prefix
        this.onSearch = new EventEmitter();
        this.scrollToBottom = new EventEmitter();
        this.openChange = new EventEmitter();
        this.pBlur = new EventEmitter();
        this.pFocus = new EventEmitter();
        this.size = 'default';
        this.level = 3;
        this.dropdownMatchSelectWidth = false;
        this.allowClear = true;
        this.showSearch = false;
        this.loading = false;
        this.showArrow = true;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        renderer.addClass(elementRef.nativeElement, 'ant-select');
    }
    Object.defineProperty(AddressSelectComponent.prototype, "autoClearSearchValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.addrSelectService.autoClearSearchValue = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressSelectComponent.prototype, "serverSearch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.addrSelectService.serverSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressSelectComponent.prototype, "filterOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.addrSelectService.filterOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressSelectComponent.prototype, "separator", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.addrSelectService.separator = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressSelectComponent.prototype, "compareWith", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.addrSelectService.compareWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressSelectComponent.prototype, "autoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressSelectComponent.prototype, "open", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = value;
            this.addrSelectService.setOpenState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressSelectComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            this.addrSelectService.disabled = this._disabled;
            this.addrSelectService.check();
            if (this.disabled && this.isInit) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.panelTopControlComponent.inputElement) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.panelTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.panelTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.panelTopControlComponent.inputElement) {
            this.focusMonitor.focusVia(this.panelTopControlComponent.inputElement, 'keyboard');
            this.pFocus.emit();
        }
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.panelTopControlComponent.inputElement) {
            this.panelTopControlComponent.inputElement.nativeElement.blur();
            this.pBlur.emit();
        }
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.toggleDropDown = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.addrSelectService.setOpenState(!this.open);
        }
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.addrSelectService.setOpenState(false);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    AddressSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            /** @type {?} */
            var triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
            this.triggerWidth = this.dropdownMatchSelectWidth ? triggerWidth : triggerWidth + 75;
        }
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    };
    /** update ngModel -> update selectedOption */
    /**
     * update ngModel -> update selectedOption
     * @param {?} value
     * @return {?}
     */
    AddressSelectComponent.prototype.writeValue = /**
     * update ngModel -> update selectedOption
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        /** @type {?} */
        var listValue = [];
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
        this.addrSelectService.updateListOfSelectedValue(listValue, false);
        if (value) {
            this.addrSelectService.updateSelectedOptionByCode(value);
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AddressSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AddressSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    AddressSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 获取一级地址数据
        this.addrSelectService.getListByCode('', 0);
        this.addrSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.onSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        }));
        this.addrSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} modelValue
         * @return {?}
         */
        function (modelValue) {
            if (_this.value !== modelValue) {
                _this.value = modelValue;
                _this.onChange(_this.value);
                _this.updateCdkConnectedOverlayPositions();
                // this.cdr.detectChanges();
            }
        }));
        this.addrSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.open !== value) {
                _this.openChange.emit(value);
            }
            if (value) {
                _this.focus();
                _this.updateCdkConnectedOverlayStatus();
            }
            else {
                _this.blur();
                _this.onTouched();
            }
            _this.open = value;
            _this.addrSelectService.clearInput();
        }));
        this.addrSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateCdkConnectedOverlayStatus();
        this.isInit = true;
    };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    AddressSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    AddressSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-address-select',
                    exportAs: 'pAddressSelect',
                    preserveWhitespaces: false,
                    providers: [
                        AddressSelectService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return AddressSelectComponent; })),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [slideMotion],
                    template: "<div\n  p-select-top-control\n  cdkOverlayOrigin\n  tabindex=\"0\"\n  class=\"ant-select-selection ant-select-selection--single\"\n  [open]=\"_open\"\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n  [placeHolder]=\"placeHolder\"\n  [allowClear]=\"allowClear\"\n  [showArrow]=\"showArrow\"\n  [loading]=\"loading\"\n  [suffixIcon]=\"suffixIcon\"\n  [clearIcon]=\"clearIcon\"\n  [removeIcon]=\"removeIcon\"\n  [showSearch]=\"showSearch\"\n></div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"_open\"\n>\n  <div\n    class=\"ant-select-dropdown ant-select-dropdown--single\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [nzClassListAdd]=\"[dropdownClassName]\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngStyle]=\"dropdownStyle\"\n  >\n    <div\n      p-option-container\n      style=\"overflow: auto;transform: translateZ(0px);\"\n      [level]=\"level\"\n      [menuItemSelectedIcon]=\"menuItemSelectedIcon\"\n      [notFoundContent]=\"notFoundContent\"\n      (scrollToBottom)=\"scrollToBottom.emit()\"\n    ></div>\n  </div>\n</ng-template>\n",
                    host: {
                        '[class.ant-select-lg]': 'size==="large"',
                        '[class.ant-select-sm]': 'size==="small"',
                        '[class.ant-select-enabled]': '!disabled',
                        '[class.ant-select-no-arrow]': '!showArrow',
                        '[class.ant-select-disabled]': 'disabled',
                        '[class.ant-select-allow-clear]': 'allowClear',
                        '[class.ant-select-open]': 'open',
                        '(click)': 'toggleDropDown()',
                    },
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    AddressSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: AddressSelectService },
        { type: ChangeDetectorRef },
        { type: FocusMonitor },
        { type: Platform },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    AddressSelectComponent.propDecorators = {
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: false },] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
        panelTopControlComponent: [{ type: ViewChild, args: [AddrSelectTopControlComponent, { static: true },] }],
        onSearch: [{ type: Output }],
        scrollToBottom: [{ type: Output }],
        openChange: [{ type: Output }],
        pBlur: [{ type: Output }],
        pFocus: [{ type: Output }],
        size: [{ type: Input }],
        level: [{ type: Input }],
        dropdownClassName: [{ type: Input }],
        dropdownMatchSelectWidth: [{ type: Input }],
        dropdownStyle: [{ type: Input }],
        notFoundContent: [{ type: Input }],
        allowClear: [{ type: Input }],
        showSearch: [{ type: Input }],
        loading: [{ type: Input }],
        placeHolder: [{ type: Input }],
        suffixIcon: [{ type: Input }],
        clearIcon: [{ type: Input }],
        removeIcon: [{ type: Input }],
        menuItemSelectedIcon: [{ type: Input }],
        showArrow: [{ type: Input }],
        autoClearSearchValue: [{ type: Input }],
        serverSearch: [{ type: Input }],
        filterOption: [{ type: Input }],
        separator: [{ type: Input }],
        compareWith: [{ type: Input }],
        autoFocus: [{ type: Input }],
        open: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], AddressSelectComponent.prototype, "allowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], AddressSelectComponent.prototype, "showSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], AddressSelectComponent.prototype, "loading", void 0);
    return AddressSelectComponent;
}());
export { AddressSelectComponent };
if (false) {
    /** @type {?} */
    AddressSelectComponent.prototype._open;
    /** @type {?} */
    AddressSelectComponent.prototype.value;
    /** @type {?} */
    AddressSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    AddressSelectComponent.prototype.triggerWidth;
    /**
     * @type {?}
     * @private
     */
    AddressSelectComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    AddressSelectComponent.prototype._autoFocus;
    /**
     * @type {?}
     * @private
     */
    AddressSelectComponent.prototype.isInit;
    /**
     * @type {?}
     * @private
     */
    AddressSelectComponent.prototype.destroy$;
    /** @type {?} */
    AddressSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    AddressSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    AddressSelectComponent.prototype.panelTopControlComponent;
    /**
     * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
     * @type {?}
     */
    AddressSelectComponent.prototype.onSearch;
    /** @type {?} */
    AddressSelectComponent.prototype.scrollToBottom;
    /** @type {?} */
    AddressSelectComponent.prototype.openChange;
    /** @type {?} */
    AddressSelectComponent.prototype.pBlur;
    /** @type {?} */
    AddressSelectComponent.prototype.pFocus;
    /** @type {?} */
    AddressSelectComponent.prototype.size;
    /** @type {?} */
    AddressSelectComponent.prototype.level;
    /** @type {?} */
    AddressSelectComponent.prototype.dropdownClassName;
    /** @type {?} */
    AddressSelectComponent.prototype.dropdownMatchSelectWidth;
    /** @type {?} */
    AddressSelectComponent.prototype.dropdownStyle;
    /** @type {?} */
    AddressSelectComponent.prototype.notFoundContent;
    /** @type {?} */
    AddressSelectComponent.prototype.allowClear;
    /** @type {?} */
    AddressSelectComponent.prototype.showSearch;
    /** @type {?} */
    AddressSelectComponent.prototype.loading;
    /** @type {?} */
    AddressSelectComponent.prototype.placeHolder;
    /** @type {?} */
    AddressSelectComponent.prototype.suffixIcon;
    /** @type {?} */
    AddressSelectComponent.prototype.clearIcon;
    /** @type {?} */
    AddressSelectComponent.prototype.removeIcon;
    /** @type {?} */
    AddressSelectComponent.prototype.menuItemSelectedIcon;
    /** @type {?} */
    AddressSelectComponent.prototype.showArrow;
    /** @type {?} */
    AddressSelectComponent.prototype.onChange;
    /** @type {?} */
    AddressSelectComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    AddressSelectComponent.prototype.renderer;
    /** @type {?} */
    AddressSelectComponent.prototype.addrSelectService;
    /**
     * @type {?}
     * @private
     */
    AddressSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    AddressSelectComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    AddressSelectComponent.prototype.platform;
    /** @type {?} */
    AddressSelectComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvYWRkcmVzcy1zZWxlY3QvIiwic291cmNlcyI6WyJhZGRyZXNzLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQWlCLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRjtJQThMRSxnQ0FDVSxRQUFtQixFQUNwQixpQkFBdUMsRUFDdEMsR0FBc0IsRUFDdEIsWUFBMEIsRUFDMUIsUUFBa0IsRUFDMUIsVUFBc0IsRUFDSyxXQUFvQztR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QkFBc0I7OztJQUNqQyx1Q0FBYzs7SUFFZCx1Q0FBbUI7O0lBQ25CLGtEQUF5RDs7SUFDekQsOENBQXFCOzs7OztJQUNyQiwyQ0FBMEI7Ozs7O0lBQzFCLDRDQUEyQjs7Ozs7SUFDM0Isd0NBQXVCOzs7OztJQUN2QiwwQ0FBaUM7O0lBQ2pDLGtEQUFtRjs7SUFDbkYscURBQTRGOztJQUM1RiwwREFBb0g7Ozs7O0lBSXBILDBDQUF5RDs7SUFDekQsZ0RBQTZEOztJQUM3RCw0Q0FBNEQ7O0lBQzVELHVDQUFvRDs7SUFDcEQsd0NBQXFEOztJQUVyRCxzQ0FBeUM7O0lBQ3pDLHVDQUEyQjs7SUFFM0IsbURBQW1DOztJQUNuQywwREFBMEM7O0lBQzFDLCtDQUFrRDs7SUFDbEQsaURBQWlDOztJQUNqQyw0Q0FBMkM7O0lBQzNDLDRDQUE0Qzs7SUFDNUMseUNBQXlDOztJQUN6Qyw2Q0FBNkI7O0lBQzdCLDRDQUF1Qzs7SUFDdkMsMkNBQXNDOztJQUN0Qyw0Q0FBdUM7O0lBQ3ZDLHNEQUFpRDs7SUFDakQsMkNBQTBCOztJQTBEMUIsMENBQTBEOztJQUMxRCwyQ0FBbUM7Ozs7O0lBd0RqQywwQ0FBMkI7O0lBQzNCLG1EQUE4Qzs7Ozs7SUFDOUMscUNBQThCOzs7OztJQUM5Qiw4Q0FBa0M7Ozs7O0lBQ2xDLDBDQUEwQjs7SUFFMUIsNkNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNOb3ROaWwsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56U2l6ZUxEU1R5cGUsIHNsaWRlTW90aW9uLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWRkcmVzc1NlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2FkZHJlc3Mtc2VsZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkclNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3Atc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtYWRkcmVzcy1zZWxlY3QnLFxuICBleHBvcnRBczogJ3BBZGRyZXNzU2VsZWN0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW1xuICAgIEFkZHJlc3NTZWxlY3RTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWRkcmVzc1NlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3Mtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnc2l6ZT09PVwibGFyZ2VcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICdzaXplPT09XCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nOiAnIWRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtbm8tYXJyb3ddJzogJyFzaG93QXJyb3cnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnYWxsb3dDbGVhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ29wZW4nLFxuICAgICcoY2xpY2spJzogJ3RvZ2dsZURyb3BEb3duKCknLFxuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIF9vcGVuID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdmFsdWU6IGFueSB8IGFueVtdO1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xuICBwcml2YXRlIGlzSW5pdCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcbiAgQFZpZXdDaGlsZChBZGRyU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgcGFuZWxUb3BDb250cm9sQ29tcG9uZW50OiBBZGRyU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBqc2RvYy1mb3JtYXRcbiAgLyoqIHNob3VsZCBtb3ZlIHRvIG56LW9wdGlvbi1jb250YWluZXIgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDgxMCByZXNvbHZlZCAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSByZWFkb25seSBvblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcEJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBwRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbGV2ZWw6IG51bWJlciA9IDM7XG5cbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRyb3Bkb3duU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1ZmZpeEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSByZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBzaG93QXJyb3cgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UuYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlcnZlclNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmaWx0ZXJPcHRpb24odmFsdWU6IGFueSkge1xuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uID0gdmFsdWU7XG4gIH1cbiAgXG4gIEBJbnB1dCgpXG4gIHNldCBzZXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2Uuc2VwYXJhdG9yID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBjb21wYXJlV2l0aCh2YWx1ZTogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFkZHJTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xuICB9XG5cbiAgZ2V0IGF1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG9wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vcGVuID0gdmFsdWU7XG4gICAgdGhpcy5hZGRyU2VsZWN0U2VydmljZS5zZXRPcGVuU3RhdGUodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UuZGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcbiAgICB0aGlzLmFkZHJTZWxlY3RTZXJ2aWNlLmNoZWNrKCk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgJiYgdGhpcy5pc0luaXQpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhbmVsVG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLnBhbmVsVG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMucGFuZWxUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFuZWxUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5wYW5lbFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcbiAgICAgIHRoaXMucEZvY3VzLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhbmVsVG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucGFuZWxUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMucEJsdXIuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyb3BEb3duKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRyU2VsZWN0U2VydmljZS5zZXRPcGVuU3RhdGUoIXRoaXMub3Blbik7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJTZWxlY3RTZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xuICB9XG5cbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gdHJpZ2dlcldpZHRoIDogdHJpZ2dlcldpZHRoICsgNzU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgYWRkclNlbGVjdFNlcnZpY2U6IEFkZHJlc3NTZWxlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0Jyk7XG4gIH1cblxuICAvKiogdXBkYXRlIG5nTW9kZWwgLT4gdXBkYXRlIHNlbGVjdGVkT3B0aW9uICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGxldCBsaXN0VmFsdWU6IGFueVtdID0gW107IFxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsaXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RWYWx1ZSA9IFt2YWx1ZV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0VmFsdWUsIGZhbHNlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UudXBkYXRlU2VsZWN0ZWRPcHRpb25CeUNvZGUodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIOiOt+WPluS4gOe6p+WcsOWdgOaVsOaNrlxuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UuZ2V0TGlzdEJ5Q29kZSgnJywgMCk7XG4gICAgdGhpcy5hZGRyU2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMub25TZWFyY2guZW1pdChkYXRhKTtcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkclNlbGVjdFNlcnZpY2UubW9kZWxDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobW9kZWxWYWx1ZSA9PiB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gbW9kZWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbW9kZWxWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XG4gICAgICAgIC8vIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFkZHJTZWxlY3RTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHRoaXMub3BlbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbiA9IHZhbHVlO1xuICAgICAgdGhpcy5hZGRyU2VsZWN0U2VydmljZS5jbGVhcklucHV0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGRyU2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19