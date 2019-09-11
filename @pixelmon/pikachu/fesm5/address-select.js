import { __spread, __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Pipe, Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Host, Optional, ViewChild, Input, EventEmitter, forwardRef, Renderer2, ElementRef, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { zoomMotion, NzNoAnimationDirective, toBoolean, isNotNil, slideMotion, InputBoolean, NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { BehaviorSubject, Subject, ReplaySubject, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, skip, share, tap, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AddrOption() { }
if (false) {
    /** @type {?} */
    AddrOption.prototype.label;
    /** @type {?} */
    AddrOption.prototype.value;
    /** @type {?|undefined} */
    AddrOption.prototype.disabled;
    /** @type {?|undefined} */
    AddrOption.prototype.checked;
    /** @type {?|undefined} */
    AddrOption.prototype.level;
}
/**
 * @record
 */
function ResultOption() { }
if (false) {
    /** @type {?} */
    ResultOption.prototype.label;
    /** @type {?} */
    ResultOption.prototype.value;
    /** @type {?|undefined} */
    ResultOption.prototype.mergeName;
    /** @type {?|undefined} */
    ResultOption.prototype.level;
}
/**
 * 必须集成
 * @abstract
 */
var  /**
 * 必须集成
 * @abstract
 */
AddressQueryService = /** @class */ (function () {
    function AddressQueryService() {
    }
    return AddressQueryService;
}());
if (false) {
    /**
     * @abstract
     * @param {?=} code
     * @return {?}
     */
    AddressQueryService.prototype.getAreasByCode = function (code) { };
    /**
     * @abstract
     * @param {?} code
     * @return {?}
     */
    AddressQueryService.prototype.getAreaLabelByCode = function (code) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultAddressLevelOptions = [
    {
        label: '省',
        value: 'province',
        checked: true,
    },
    {
        label: '市',
        value: 'city',
    },
    {
        label: '区',
        value: 'distrinct',
    },
    {
        label: '街道',
        value: 'street',
    },
];
var AddrFilterOptionPipe = /** @class */ (function () {
    function AddrFilterOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    AddrFilterOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return filterOption(searchValue, o); }));
        }
    };
    AddrFilterOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'addrFilterOption' },] }
    ];
    return AddrFilterOptionPipe;
}());
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
function defaultAddrFilterOption(searchValue, option) {
    if (option && option.label) {
        return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
/**
 * @param {?=} level
 * @return {?}
 */
function defaultLevelLabelsFilterOption(level) {
    if (level === void 0) { level = 1; }
    return defaultAddressLevelOptions.slice(0, level);
}
var AddrLevelFilterPipe = /** @class */ (function () {
    function AddrLevelFilterPipe() {
    }
    /**
     * @param {?} level
     * @return {?}
     */
    AddrLevelFilterPipe.prototype.transform = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        return defaultLevelLabelsFilterOption(level);
    };
    AddrLevelFilterPipe.decorators = [
        { type: Pipe, args: [{ name: 'pAddrLevelFitler' },] }
    ];
    return AddrLevelFilterPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddressSelectService = /** @class */ (function () {
    function AddressSelectService(addrQuerySrv) {
        var _this = this;
        this.addrQuerySrv = addrQuerySrv;
        // Input params
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultAddrFilterOption;
        this.disabled = false;
        this.levelLabels = [];
        this.currentLevel = 1;
        this.maxLevel = 1;
        // selectedValueChanged should emit ngModelChange or not
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false,
        });
        // searchValue Change
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        // open
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.listOfActivatedOption = [];
        this.listOfActivatedOption$ = new ReplaySubject(1);
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.emit; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var selectedList = data.value;
            var length = selectedList.length;
            /** @type {?} */
            var modelValue = null;
            if (length > 1) {
                modelValue = selectedList[length - 1].value;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.searchValue = value;
            if (value) {
                _this.updateActivatedOption(_this.listOfFilteredOption[0], _this.currentLevel);
            }
            _this.updateListOfFilteredOption();
        })));
        // address data
        this.listOfProvinceOptions = [];
        this.listOfCityOptions = [];
        this.listOfDistinctOptions = [];
        this.listOfStreetOptions = [];
        this.check$ = merge(this.checkRaw$, this.searchValue$, this.listOfActivatedOption$, this.open$, this.modelChange$).pipe(share());
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
    }
    /**
     * @param {?=} code
     * @param {?=} level
     * @return {?}
     */
    AddressSelectService.prototype.getAreasByCode = /**
     * @param {?=} code
     * @param {?=} level
     * @return {?}
     */
    function (code, level) {
        var _this = this;
        if (level === void 0) { level = 0; }
        this.addrQuerySrv.getAreasByCode(code).subscribe((/**
         * @param {?} json
         * @return {?}
         */
        function (json) {
            if (level === 0) {
                _this.listOfProvinceOptions = __spread(json);
            }
            else if (level === 1) {
                _this.listOfCityOptions = __spread(json);
            }
            else if (level === 2) {
                _this.listOfDistinctOptions = __spread(json);
            }
            else if (level === 3) {
                _this.listOfStreetOptions = __spread(json);
            }
            _this.check();
        }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AddressSelectService.prototype.toggleTab = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.currentLevel = index + 1;
        this.levelLabels.forEach((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        function (item, i) {
            if (i === index) {
                item.checked = true;
            }
            else {
                item.checked = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    AddressSelectService.prototype.isMaxLevel = /**
     * @return {?}
     */
    function () {
        return this.maxLevel === this.currentLevel;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    AddressSelectService.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.disabled) {
            return;
        }
        /** @type {?} */
        var level = ((/** @type {?} */ (option.level))) + 1;
        this.updateActivatedOption(option, level);
        // 设置值
        if (this.isMaxLevel()) {
            if (this.autoClearSearchValue) {
                this.clearInput();
            }
            this.setOpenState(false);
            return;
        }
        this.getAreasByCode(option.value, level);
        this.toggleTab(level);
    };
    /**
     * @param {?=} clean
     * @return {?}
     */
    AddressSelectService.prototype.updateSelectedOption = /**
     * @param {?=} clean
     * @return {?}
     */
    function (clean) {
        if (clean === void 0) { clean = false; }
        if (clean) {
            this.toggleTab(0);
            this.selectedOption = {
                label: '',
                value: '',
                mergeName: '',
            };
            return;
        }
        /** @type {?} */
        var selectedOption = this.listOfActivatedOption.filter((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return o && o.value; }));
        var length = selectedOption.length;
        console.log(this.separator);
        if (length > 0) {
            var _a = selectedOption[length - 1], label = _a.label, value = _a.value, level = _a.level;
            this.selectedOption = {
                label: label,
                value: value,
                level: level,
                mergeName: selectedOption.map((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return o.label; })).join(this.separator),
            };
        }
    };
    /**
     * @return {?}
     */
    AddressSelectService.prototype.updateListOfFilteredOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listOfFilteredOption = new AddrFilterOptionPipe().transform(this.listOfProvinceOptions, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = __spread(listOfFilteredOption);
        this.isShowNotFound = !this.listOfFilteredOption.length;
    };
    /**
     * @return {?}
     */
    AddressSelectService.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.clearInput$.next();
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    AddressSelectService.prototype.updateListOfSelectedValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
        this.updateSelectedOption(!value.length);
    };
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    AddressSelectService.prototype.updateActivatedOption = /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    function (option, level) {
        this.listOfActivatedOption$.next(option);
        if (this.listOfActivatedOption[level]) {
            if (this.listOfActivatedOption[level].value !== (option && option.value) && this.isMaxLevel()) {
                this.listOfActivatedOption[level] = option;
                this.updateListOfSelectedValue(__spread(this.listOfActivatedOption), true);
                return;
            }
        }
        this.listOfActivatedOption[level] = option;
        if (this.isMaxLevel()) {
            this.updateListOfSelectedValue(__spread(this.listOfActivatedOption), true);
        }
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    AddressSelectService.prototype.includesSeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    AddressSelectService.prototype.resetActivatedOptionIfNeeded = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var resetActivatedOption = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var listOfActivatedOption = _this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.value, _this.selectedOption[0]); }));
            _this.updateActivatedOption(listOfActivatedOption || null, _this.currentLevel);
        });
        if (this.listOfActivatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.value, (/** @type {?} */ (_this.listOfActivatedOption[_this.currentLevel])).value); })) ||
                !this.listOfActivatedOption.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.listOfActivatedOption[_this.currentLevel])).value); }))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AddressSelectService.prototype.updateSearchValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchValueRaw$.next(value);
    };
    /**
     * @param {?} code
     * @return {?}
     */
    AddressSelectService.prototype.updateSelectedOptionByCode = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        var _this = this;
        this.addrQuerySrv.getAreaLabelByCode(code).subscribe((/**
         * @param {?} json
         * @return {?}
         */
        function (json) {
            if (json.code === code) {
                _this.selectedOption = {
                    label: json.name,
                    value: json.code,
                    level: json.level,
                    mergeName: json.mergerName,
                };
                _this.check();
            }
        }));
    };
    /**
     * @param {?} option
     * @return {?}
     */
    AddressSelectService.prototype.removeValueFormSelected = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.disabled || option.disabled) {
            return;
        }
        /** @type {?} */
        var selectedOption = this.listOfActivatedOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !_this.compareWith(item, option.value); }));
        this.updateListOfSelectedValue(selectedOption, true);
        this.clearInput();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AddressSelectService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.openRaw$.next(value);
        // this.open = value;
    };
    /**
     * @return {?}
     */
    AddressSelectService.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checkRaw$.next();
    };
    AddressSelectService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressSelectService.ctorParameters = function () { return [
        { type: AddressQueryService }
    ]; };
    return AddressSelectService;
}());
if (false) {
    /** @type {?} */
    AddressSelectService.prototype.autoClearSearchValue;
    /** @type {?} */
    AddressSelectService.prototype.serverSearch;
    /** @type {?} */
    AddressSelectService.prototype.filterOption;
    /** @type {?} */
    AddressSelectService.prototype.disabled;
    /** @type {?} */
    AddressSelectService.prototype.levelLabels;
    /** @type {?} */
    AddressSelectService.prototype.currentLevel;
    /** @type {?} */
    AddressSelectService.prototype.maxLevel;
    /** @type {?} */
    AddressSelectService.prototype.separator;
    /**
     * @type {?}
     * @private
     */
    AddressSelectService.prototype.listOfSelectedValueWithEmit$;
    /**
     * @type {?}
     * @private
     */
    AddressSelectService.prototype.searchValueRaw$;
    /**
     * @type {?}
     * @private
     */
    AddressSelectService.prototype.listOfFilteredOption;
    /**
     * @type {?}
     * @private
     */
    AddressSelectService.prototype.openRaw$;
    /**
     * @type {?}
     * @private
     */
    AddressSelectService.prototype.checkRaw$;
    /** @type {?} */
    AddressSelectService.prototype.clearInput$;
    /** @type {?} */
    AddressSelectService.prototype.searchValue;
    /** @type {?} */
    AddressSelectService.prototype.isShowNotFound;
    /** @type {?} */
    AddressSelectService.prototype.open$;
    /** @type {?} */
    AddressSelectService.prototype.listOfActivatedOption;
    /** @type {?} */
    AddressSelectService.prototype.listOfActivatedOption$;
    /** @type {?} */
    AddressSelectService.prototype.selectedOption;
    /** @type {?} */
    AddressSelectService.prototype.modelChange$;
    /** @type {?} */
    AddressSelectService.prototype.searchValue$;
    /** @type {?} */
    AddressSelectService.prototype.listOfProvinceOptions;
    /** @type {?} */
    AddressSelectService.prototype.listOfCityOptions;
    /** @type {?} */
    AddressSelectService.prototype.listOfDistinctOptions;
    /** @type {?} */
    AddressSelectService.prototype.listOfStreetOptions;
    /** @type {?} */
    AddressSelectService.prototype.check$;
    /** @type {?} */
    AddressSelectService.prototype.compareWith;
    /**
     * @type {?}
     * @private
     */
    AddressSelectService.prototype.addrQuerySrv;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddrSelectTopControlComponent = /** @class */ (function () {
    function AddrSelectTopControlComponent(addrSelectService, cdr, noAnimation) {
        this.addrSelectService = addrSelectService;
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
    AddrSelectTopControlComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.addrSelectService.updateListOfSelectedValue([], true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AddrSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 */
        if (this.inputElement && !value) {
            this.inputElement.nativeElement.value = value;
        }
        this.inputValue = value;
        this.addrSelectService.updateSearchValue(value);
    };
    Object.defineProperty(AddrSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.addrSelectService.listOfActivatedOption.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddrSelectTopControlComponent.prototype, "selectedValueStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
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
                opacity: "" + opacity,
            };
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    AddrSelectTopControlComponent.prototype.trackValue = 
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
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    AddrSelectTopControlComponent.prototype.removeSelectedValue = /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    function (option, e) {
        this.addrSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    /**
     * @return {?}
     */
    AddrSelectTopControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.addrSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            if (_this.inputElement && open) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputElement.nativeElement.focus(); }));
            }
        }));
        this.addrSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.setInputValue('');
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
    AddrSelectTopControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    AddrSelectTopControlComponent.decorators = [
        { type: Component, args: [{
                    selector: '[p-select-top-control]',
                    template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"addrSelectService.disabled\"\n  />\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"placeHolder\" nz-select-unselectable [style.display]=\"placeHolderDisplay\" class=\"ant-select-selection__placeholder\">\n    {{ placeHolder }}\n  </div>\n  <!--selected label-->\n  <div\n    *ngIf=\"addrSelectService.selectedOption?.value\"\n    class=\"ant-select-selection-selected-value\"\n    [attr.title]=\"addrSelectService.selectedOption?.mergeName\"\n    [ngStyle]=\"selectedValueStyle\"\n  >\n    <ng-container>{{ addrSelectService.selectedOption?.mergeName }}</ng-container>\n  </div>\n  <!--show search-->\n  <div *ngIf=\"showSearch\" class=\"ant-select-search ant-select-search--inline\" [style.display]=\"open ? 'block' : 'none'\">\n    <div class=\"ant-select-search__field__wrap\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      <span class=\"ant-select-search__field__mirror\">{{ inputValue }}&nbsp;</span>\n    </div>\n  </div>\n</div>\n<span\n  *ngIf=\"allowClear && addrSelectService.selectedOption?.value\"\n  class=\"ant-select-selection__clear\"\n  nz-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\"\n>\n  <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!clearIcon; else clearIcon\" class=\"ant-select-close-icon\"></i>\n</span>\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"showArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"loading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!suffixIcon; else suffixIcon\"></i>\n  </ng-template>\n</span>\n",
                    exportAs: 'nzSelectTopControl',
                    preserveWhitespaces: false,
                    animations: [zoomMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    AddrSelectTopControlComponent.ctorParameters = function () { return [
        { type: AddressSelectService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    AddrSelectTopControlComponent.propDecorators = {
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
    return AddrSelectTopControlComponent;
}());
if (false) {
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.isComposing;
    /**
     * @type {?}
     * @private
     */
    AddrSelectTopControlComponent.prototype.destroy$;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.showSearch;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.placeHolder;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.open;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.allowClear;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.showArrow;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.loading;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.suffixIcon;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.clearIcon;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.removeIcon;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.addrSelectService;
    /**
     * @type {?}
     * @private
     */
    AddrSelectTopControlComponent.prototype.cdr;
    /** @type {?} */
    AddrSelectTopControlComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    // tslint:disable-next-line:no-any
    /**
     * update ngModel -> update selectedOption
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    AddressSelectComponent.prototype.writeValue = /**
     * update ngModel -> update selectedOption
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
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
        this.addrSelectService.getAreasByCode('', 0);
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
        maxTagCount: [{ type: Input }],
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
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], AddressSelectComponent.prototype, "allowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], AddressSelectComponent.prototype, "showSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], AddressSelectComponent.prototype, "loading", void 0);
    return AddressSelectComponent;
}());
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
    AddressSelectComponent.prototype.maxTagCount;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddrOptionContainerComponent = /** @class */ (function () {
    function AddrOptionContainerComponent(addrSelectService, cdr) {
        this.addrSelectService = addrSelectService;
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
            this.addrSelectService.levelLabels = new AddrLevelFilterPipe().transform(v);
            this.addrSelectService.maxLevel = v;
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
        this.addrSelectService.clickOption(option);
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
        this.addrSelectService.toggleTab(index);
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
                    template: "<div class=\"address-container\">\n  <div class=\"ant-tabs ant-tabs-card\">\n    <div class=\"ant-tabs-bar ant-tabs-card-bar ant-tabs-top-bar ant-tabs-default-bar\">\n      <span\n        class=\"ant-tabs-tab\"\n        [class.ant-tabs-tab-active]=\"item.checked\"\n        *ngFor=\"let item of addrSelectService.levelLabels;let i=index\"\n        (click)=\"toggleTabs(item,i)\"\n        >{{ item.label }}</span\n      >\n    </div>\n  </div>\n  <!-- province -->\n  <ul\n    #provinceUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"0\"\n    [hidden]=\"addrSelectService.levelLabels[0] && !addrSelectService.levelLabels[0]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSelectService.isShowNotFound\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"option.checked && !option.disabled\"\n      *ngFor=\"\n        let option of addrSelectService.listOfProvinceOptions\n          | addrFilterOption: addrSelectService.searchValue:addrSelectService.filterOption:addrSelectService.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"option.checked && !option.disabled && !menuItemSelectedIcon\"></i>\n    </li>\n  </ul>\n  <!-- city -->\n  <ul\n    #cityUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"1\"\n    [hidden]=\"addrSelectService.levelLabels[1] && !addrSelectService.levelLabels[1]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSelectService.isShowNotFound\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"option.checked && !option.disabled\"\n      *ngFor=\"\n        let option of addrSelectService.listOfCityOptions\n          | addrFilterOption: addrSelectService.searchValue:addrSelectService.filterOption:addrSelectService.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"option.checked && !option.disabled && !menuItemSelectedIcon\"></i>\n    </li>\n  </ul>\n  <!-- distinct -->\n  <ul\n    #distinctUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"2\"\n    [hidden]=\"addrSelectService.levelLabels[2] && !addrSelectService.levelLabels[2]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSelectService.isShowNotFound\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"option.checked && !option.disabled\"\n      *ngFor=\"\n        let option of addrSelectService.listOfDistinctOptions\n          | addrFilterOption: addrSelectService.searchValue:addrSelectService.filterOption:addrSelectService.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"option.checked && !option.disabled && !menuItemSelectedIcon\"></i>\n    </li>\n  </ul>\n</div>\n",
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
    AddrOptionContainerComponent.ctorParameters = function () { return [
        { type: AddressSelectService },
        { type: ChangeDetectorRef }
    ]; };
    AddrOptionContainerComponent.propDecorators = {
        dropdownUl: [{ type: ViewChild, args: ['dropdownUl', { static: true },] }],
        notFoundContent: [{ type: Input }],
        menuItemSelectedIcon: [{ type: Input }],
        scrollToBottom: [{ type: Output }],
        level: [{ type: Input }]
    };
    return AddrOptionContainerComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddressSelectModule = /** @class */ (function () {
    function AddressSelectModule() {
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
    return AddressSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AddrFilterOptionPipe, AddrLevelFilterPipe, AddrOptionContainerComponent, AddrSelectTopControlComponent, AddressQueryService, AddressSelectComponent, AddressSelectModule, AddressSelectService };
//# sourceMappingURL=address-select.js.map
