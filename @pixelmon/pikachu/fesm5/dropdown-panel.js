import { __spread, __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Pipe, Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Host, Optional, ViewChild, Input, EventEmitter, forwardRef, Renderer2, ElementRef, Output, NgZone, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { isNil, isNotNil, zoomMotion, NzNoAnimationDirective, toBoolean, slideMotion, InputBoolean, NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { BehaviorSubject, Subject, ReplaySubject, combineLatest, merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, map, filter, skip, share, tap, takeUntil } from 'rxjs/operators';
import { UP_ARROW, DOWN_ARROW, ENTER, BACKSPACE, SPACE, TAB } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PanelFilterOptionPipe = /** @class */ (function () {
    function PanelFilterOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    PanelFilterOptionPipe.prototype.transform = /**
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
    PanelFilterOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'pFilterOption' },] }
    ];
    return PanelFilterOptionPipe;
}());
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
function defaultFilterOption(searchValue, option) {
    if (option && option.label) {
        return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownPanelService = /** @class */ (function () {
    function DropdownPanelService() {
        var _this = this;
        // Input params
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // selectedValueChanged should emit ngModelChange or not
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false,
        });
        // Data Change
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfPOption: [],
        });
        // searchValue Change
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        // open
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.value; })));
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
            /** @type {?} */
            var modelValue = null;
            if (_this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
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
                _this.updateActivatedOption(_this.listOfFilteredOption[0]);
            }
            _this.updateListOfFilteredOption();
        })));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        // data
        this.listOfPOption = [];
        this.listOfCachedSelectedOption = [];
        // selected value or Data change
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.listOfSelectedValue = data[0];
            _this.listOfPOption = data[1].listOfPOption;
            // console.log(JSON.stringify(this.listOfPOption));
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
    }
    /**
     * @param {?} option
     * @return {?}
     */
    DropdownPanelService.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ */
        if (!option.disabled) {
            this.updateActivatedOption(option);
            this.listOfPOption.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.checked = false;
            }));
            option.checked = true;
            /** @type {?} */
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            if (!this.compareWith(listOfSelectedValue[0], option.value)) {
                listOfSelectedValue = [option.value];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    };
    /**
     * @return {?}
     */
    DropdownPanelService.prototype.updateListOfCachedOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOption = this.listOfPOption.find((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.compareWith(o.value, _this.listOfSelectedValue[0]); }));
        if (!isNil(selectedOption)) {
            this.listOfCachedSelectedOption = [selectedOption];
        }
    };
    /**
     * @return {?}
     */
    DropdownPanelService.prototype.updateListOfFilteredOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listOfFilteredOption = new PanelFilterOptionPipe().transform(this.listOfPOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = __spread(listOfFilteredOption);
        this.isShowNotFound = !this.listOfFilteredOption.length;
    };
    /**
     * @return {?}
     */
    DropdownPanelService.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.clearInput$.next();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    DropdownPanelService.prototype.updateListOfSelectedValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
    };
    /**
     * @param {?} option
     * @return {?}
     */
    DropdownPanelService.prototype.updateActivatedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    DropdownPanelService.prototype.includesSeparators = /**
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
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    DropdownPanelService.prototype.splitBySeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        /** @type {?} */
        var reg = new RegExp("[" + separators.join() + "]");
        /** @type {?} */
        var array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return token; }));
        return Array.from(new Set(array));
    };
    /**
     * @return {?}
     */
    DropdownPanelService.prototype.resetActivatedOptionIfNeeded = /**
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
            var activatedOption = _this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.value, _this.listOfSelectedValue[0]); }));
            _this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.value, (/** @type {?} */ (_this.activatedOption)).value); })) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.activatedOption)).value); }))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    /**
     * @param {?} listOfPOption
     * @return {?}
     */
    DropdownPanelService.prototype.updateTemplateOption = /**
     * @param {?} listOfPOption
     * @return {?}
     */
    function (listOfPOption) {
        this.mapOfTemplateOption$.next({ listOfPOption: listOfPOption });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DropdownPanelService.prototype.updateSearchValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchValueRaw$.next(value);
    };
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    DropdownPanelService.prototype.updateSelectedValueByLabelList = /**
     * @param {?} listOfLabel
     * @return {?}
     */
    function (listOfLabel) {
        var _this = this;
        /** @type {?} */
        var listOfSelectedValue = __spread(this.listOfSelectedValue);
        /** @type {?} */
        var listOfMatchOptionValue = this.listOfFilteredOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return listOfLabel.indexOf(item.label) !== -1; }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.value; }))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !isNotNil(_this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.compareWith(v, item); }))); }));
        /** @type {?} */
        var listOfUnMatchOptionValue = listOfLabel.filter((/**
         * @param {?} label
         * @return {?}
         */
        function (label) { return _this.listOfFilteredOption.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.label; })).indexOf(label) === -1; }));
        this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DropdownPanelService.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.disabled; }));
        /** @type {?} */
        var activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item === _this.activatedOption; }));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.disabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    DropdownPanelService.prototype.removeValueFormSelected = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.disabled || option.disabled) {
            return;
        }
        /** @type {?} */
        var listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !_this.compareWith(item, option.value); }));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DropdownPanelService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.openRaw$.next(value);
        this.open = value;
    };
    /**
     * @return {?}
     */
    DropdownPanelService.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checkRaw$.next();
    };
    Object.defineProperty(DropdownPanelService.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    DropdownPanelService.decorators = [
        { type: Injectable }
    ];
    return DropdownPanelService;
}());
if (false) {
    /** @type {?} */
    DropdownPanelService.prototype.autoClearSearchValue;
    /** @type {?} */
    DropdownPanelService.prototype.serverSearch;
    /** @type {?} */
    DropdownPanelService.prototype.filterOption;
    /** @type {?} */
    DropdownPanelService.prototype.mode;
    /** @type {?} */
    DropdownPanelService.prototype.maxMultipleCount;
    /** @type {?} */
    DropdownPanelService.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelService.prototype.listOfSelectedValueWithEmit$;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelService.prototype.mapOfTemplateOption$;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelService.prototype.searchValueRaw$;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelService.prototype.listOfFilteredOption;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelService.prototype.openRaw$;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelService.prototype.checkRaw$;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelService.prototype.open;
    /** @type {?} */
    DropdownPanelService.prototype.clearInput$;
    /** @type {?} */
    DropdownPanelService.prototype.searchValue;
    /** @type {?} */
    DropdownPanelService.prototype.isShowNotFound;
    /** @type {?} */
    DropdownPanelService.prototype.open$;
    /** @type {?} */
    DropdownPanelService.prototype.activatedOption;
    /** @type {?} */
    DropdownPanelService.prototype.activatedOption$;
    /** @type {?} */
    DropdownPanelService.prototype.listOfSelectedValue$;
    /** @type {?} */
    DropdownPanelService.prototype.modelChange$;
    /** @type {?} */
    DropdownPanelService.prototype.searchValue$;
    /** @type {?} */
    DropdownPanelService.prototype.listOfSelectedValue;
    /** @type {?} */
    DropdownPanelService.prototype.listOfPOption;
    /** @type {?} */
    DropdownPanelService.prototype.listOfCachedSelectedOption;
    /** @type {?} */
    DropdownPanelService.prototype.valueOrOption$;
    /** @type {?} */
    DropdownPanelService.prototype.check$;
    /** @type {?} */
    DropdownPanelService.prototype.compareWith;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PanelSelectTopControlComponent = /** @class */ (function () {
    function PanelSelectTopControlComponent(dropPanelService, cdr, noAnimation) {
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
    PanelSelectTopControlComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.dropPanelService.updateListOfSelectedValue([], true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PanelSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 */
        if (this.inputElement && !value) {
            this.inputElement.nativeElement.value = value;
        }
        this.inputValue = value;
        this.dropPanelService.updateSearchValue(value);
    };
    Object.defineProperty(PanelSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.dropPanelService.listOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelSelectTopControlComponent.prototype, "selectedValueStyle", {
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
    PanelSelectTopControlComponent.prototype.trackValue = 
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
    PanelSelectTopControlComponent.prototype.removeSelectedValue = /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    function (option, e) {
        this.dropPanelService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    /**
     * @return {?}
     */
    PanelSelectTopControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dropPanelService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
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
        this.dropPanelService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.setInputValue('');
        }));
        this.dropPanelService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    PanelSelectTopControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    PanelSelectTopControlComponent.ctorParameters = function () { return [
        { type: DropdownPanelService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return PanelSelectTopControlComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownPanelComponent = /** @class */ (function () {
    function DropdownPanelComponent(renderer, dropPanelService, cdr, focusMonitor, platform, elementRef, noAnimation) {
        this.renderer = renderer;
        this.dropPanelService = dropPanelService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this._open = false;
        this.dropDownPosition = 'bottom';
        this._data = [];
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
    Object.defineProperty(DropdownPanelComponent.prototype, "data", {
        set: /**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            var _this = this;
            this._data = d;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dropPanelService.updateTemplateOption(_this._data);
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownPanelComponent.prototype, "autoClearSearchValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropPanelService.autoClearSearchValue = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownPanelComponent.prototype, "maxMultipleCount", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropPanelService.maxMultipleCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownPanelComponent.prototype, "serverSearch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropPanelService.serverSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownPanelComponent.prototype, "mode", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropPanelService.mode = value;
            this.dropPanelService.check();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownPanelComponent.prototype, "filterOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropPanelService.filterOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownPanelComponent.prototype, "compareWith", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropPanelService.compareWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownPanelComponent.prototype, "autoFocus", {
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
    Object.defineProperty(DropdownPanelComponent.prototype, "open", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = value;
            this.dropPanelService.setOpenState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownPanelComponent.prototype, "disabled", {
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
            this.dropPanelService.disabled = this._disabled;
            this.dropPanelService.check();
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
    DropdownPanelComponent.prototype.updateAutoFocus = /**
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
    DropdownPanelComponent.prototype.focus = /**
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
    DropdownPanelComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.panelTopControlComponent.inputElement) {
            this.panelTopControlComponent.inputElement.nativeElement.blur();
            this.pBlur.emit();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropdownPanelComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dropPanelService.onKeyDown(event);
    };
    /**
     * @return {?}
     */
    DropdownPanelComponent.prototype.toggleDropDown = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.dropPanelService.setOpenState(!this.open);
        }
    };
    /**
     * @return {?}
     */
    DropdownPanelComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.dropPanelService.setOpenState(false);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    DropdownPanelComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    DropdownPanelComponent.prototype.updateCdkConnectedOverlayStatus = /**
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
    DropdownPanelComponent.prototype.updateCdkConnectedOverlayPositions = /**
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
    /** update ngModel -> update listOfSelectedValue */
    // tslint:disable-next-line:no-any
    /**
     * update ngModel -> update listOfSelectedValue
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    DropdownPanelComponent.prototype.writeValue = /**
     * update ngModel -> update listOfSelectedValue
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
        this.dropPanelService.updateListOfSelectedValue(listValue, false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DropdownPanelComponent.prototype.registerOnChange = /**
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
    DropdownPanelComponent.prototype.registerOnTouched = /**
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
    DropdownPanelComponent.prototype.setDisabledState = /**
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
    DropdownPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dropPanelService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.onSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        }));
        this.dropPanelService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
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
        this.dropPanelService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
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
            _this.dropPanelService.clearInput();
        }));
        this.dropPanelService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    DropdownPanelComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateCdkConnectedOverlayStatus();
        this.isInit = true;
    };
    /**
     * @return {?}
     */
    DropdownPanelComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    DropdownPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    DropdownPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-dropdown-panel',
                    exportAs: 'pDropdownPanel',
                    preserveWhitespaces: false,
                    providers: [
                        DropdownPanelService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return DropdownPanelComponent; })),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [slideMotion],
                    template: "<div\n  cdkOverlayOrigin\n  p-panel-top-control\n  tabindex=\"0\"\n  class=\"ant-select-selection\"\n  [open]=\"_open\"\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n  [placeHolder]=\"placeHolder\"\n  [allowClear]=\"allowClear\"\n  [showArrow]=\"showArrow\"\n  [loading]=\"loading\"\n  [suffixIcon]=\"suffixIcon\"\n  [clearIcon]=\"clearIcon\"\n  [removeIcon]=\"removeIcon\"\n  [showSearch]=\"showSearch\"\n  [class.ant-select-selection--single]=\"dropPanelService.isSingleMode\"\n  (keydown)=\"onKeyDown($event)\"\n></div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"_open\"\n>\n  <div\n    class=\"ant-select-dropdown\"\n    [class.ant-select-dropdown--single]=\"dropPanelService.isSingleMode\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [nzClassListAdd]=\"[dropdownClassName]\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngStyle]=\"dropdownStyle\"\n  >\n    <div\n      p-panel-option-container\n      style=\"overflow: auto;transform: translateZ(0px);\"\n      (keydown)=\"onKeyDown($event)\"\n      [menuItemSelectedIcon]=\"menuItemSelectedIcon\"\n      [notFoundContent]=\"notFoundContent\"\n      (scrollToBottom)=\"scrollToBottom.emit()\"\n    ></div>\n  </div>\n\n  <!-- <div\n    p-panel-option-container\n    class=\"ant-select-dropdown\"\n    [ngStyle]=\"dropdownStyle\"\n    [@slideMotion]=\"dropDownPosition\"\n    [nzClassListAdd]=\"[dropdownClassName]\"\n    [class.ant-select-dropdown--single]=\"dropPanelService.isSingleMode\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    style=\"overflow: auto;transform: translateZ(0px);\"\n    (keydown)=\"onKeyDown($event)\"\n    [menuItemSelectedIcon]=\"menuItemSelectedIcon\"\n    [notFoundContent]=\"notFoundContent\"\n    (scrollToBottom)=\"scrollToBottom.emit()\"\n  ></div> -->\n</ng-template>\n",
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
    DropdownPanelComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: DropdownPanelService },
        { type: ChangeDetectorRef },
        { type: FocusMonitor },
        { type: Platform },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    DropdownPanelComponent.propDecorators = {
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: false },] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
        panelTopControlComponent: [{ type: ViewChild, args: [PanelSelectTopControlComponent, { static: true },] }],
        onSearch: [{ type: Output }],
        scrollToBottom: [{ type: Output }],
        openChange: [{ type: Output }],
        pBlur: [{ type: Output }],
        pFocus: [{ type: Output }],
        size: [{ type: Input }],
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
        data: [{ type: Input }],
        autoClearSearchValue: [{ type: Input }],
        maxMultipleCount: [{ type: Input }],
        serverSearch: [{ type: Input }],
        mode: [{ type: Input }],
        filterOption: [{ type: Input }],
        compareWith: [{ type: Input }],
        autoFocus: [{ type: Input }],
        open: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], DropdownPanelComponent.prototype, "allowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], DropdownPanelComponent.prototype, "showSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], DropdownPanelComponent.prototype, "loading", void 0);
    return DropdownPanelComponent;
}());
if (false) {
    /** @type {?} */
    DropdownPanelComponent.prototype._open;
    /** @type {?} */
    DropdownPanelComponent.prototype.value;
    /** @type {?} */
    DropdownPanelComponent.prototype.dropDownPosition;
    /** @type {?} */
    DropdownPanelComponent.prototype.triggerWidth;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype._autoFocus;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype.isInit;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype.destroy$;
    /** @type {?} */
    DropdownPanelComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    DropdownPanelComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    DropdownPanelComponent.prototype.panelTopControlComponent;
    /**
     * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
     * @type {?}
     */
    DropdownPanelComponent.prototype.onSearch;
    /** @type {?} */
    DropdownPanelComponent.prototype.scrollToBottom;
    /** @type {?} */
    DropdownPanelComponent.prototype.openChange;
    /** @type {?} */
    DropdownPanelComponent.prototype.pBlur;
    /** @type {?} */
    DropdownPanelComponent.prototype.pFocus;
    /** @type {?} */
    DropdownPanelComponent.prototype.size;
    /** @type {?} */
    DropdownPanelComponent.prototype.dropdownClassName;
    /** @type {?} */
    DropdownPanelComponent.prototype.dropdownMatchSelectWidth;
    /** @type {?} */
    DropdownPanelComponent.prototype.dropdownStyle;
    /** @type {?} */
    DropdownPanelComponent.prototype.notFoundContent;
    /** @type {?} */
    DropdownPanelComponent.prototype.allowClear;
    /** @type {?} */
    DropdownPanelComponent.prototype.showSearch;
    /** @type {?} */
    DropdownPanelComponent.prototype.loading;
    /** @type {?} */
    DropdownPanelComponent.prototype.placeHolder;
    /** @type {?} */
    DropdownPanelComponent.prototype.maxTagCount;
    /** @type {?} */
    DropdownPanelComponent.prototype.suffixIcon;
    /** @type {?} */
    DropdownPanelComponent.prototype.clearIcon;
    /** @type {?} */
    DropdownPanelComponent.prototype.removeIcon;
    /** @type {?} */
    DropdownPanelComponent.prototype.menuItemSelectedIcon;
    /** @type {?} */
    DropdownPanelComponent.prototype.showArrow;
    /** @type {?} */
    DropdownPanelComponent.prototype.onChange;
    /** @type {?} */
    DropdownPanelComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype.renderer;
    /** @type {?} */
    DropdownPanelComponent.prototype.dropPanelService;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    DropdownPanelComponent.prototype.platform;
    /** @type {?} */
    DropdownPanelComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownPanelModule = /** @class */ (function () {
    function DropdownPanelModule() {
    }
    DropdownPanelModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DropdownPanelComponent, PanelSelectTopControlComponent, PanelFilterOptionPipe, PanelOptionContainerComponent],
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
                    exports: [DropdownPanelComponent, PanelSelectTopControlComponent, PanelFilterOptionPipe, PanelOptionContainerComponent],
                },] }
    ];
    return DropdownPanelModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function POption() { }
if (false) {
    /** @type {?} */
    POption.prototype.label;
    /** @type {?} */
    POption.prototype.value;
    /** @type {?|undefined} */
    POption.prototype.disabled;
    /** @type {?|undefined} */
    POption.prototype.checked;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DropdownPanelComponent, DropdownPanelModule, DropdownPanelService, PanelFilterOptionPipe, PanelOptionContainerComponent, PanelSelectTopControlComponent };
//# sourceMappingURL=dropdown-panel.js.map
