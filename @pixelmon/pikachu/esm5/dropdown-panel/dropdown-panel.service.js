/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from 'ng-zorro-antd/core';
import { defaultFilterOption, PanelFilterOptionPipe } from './p-option.pipe';
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
            var listOfSelectedValue = tslib_1.__spread(this.listOfSelectedValue);
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
        this.listOfFilteredOption = tslib_1.__spread(listOfFilteredOption);
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
        var listOfSelectedValue = tslib_1.__spread(this.listOfSelectedValue);
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
        this.updateListOfSelectedValue(tslib_1.__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
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
export { DropdownPanelService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tcGFuZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2Ryb3Bkb3duLXBhbmVsLyIsInNvdXJjZXMiOlsiZHJvcGRvd24tcGFuZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRixPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdFO0lBQUE7UUFBQSxpQkFrUUM7O1FBL1BDLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixpQkFBWSxHQUFRLG1CQUFtQixDQUFDO1FBQ3hDLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxLQUFLLENBQUM7OztRQUlULGlDQUE0QixHQUFHLElBQUksZUFBZSxDQUFrQztZQUMxRixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUFDOztRQUVLLHlCQUFvQixHQUFHLElBQUksZUFBZSxDQUUv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MkJBQUM7Q0FBQSxBQWxRRCxJQWtRQztTQWpRWSxvQkFBb0I7OztJQUUvQixvREFBNEI7O0lBQzVCLDRDQUFxQjs7SUFDckIsNENBQXdDOztJQUN4QyxvQ0FBaUI7O0lBQ2pCLGdEQUE0Qjs7SUFDNUIsd0NBQWlCOzs7OztJQUlqQiw0REFHRzs7Ozs7SUFFSCxvREFJRzs7Ozs7SUFFSCwrQ0FBMEQ7Ozs7O0lBQzFELG9EQUE2Qzs7Ozs7SUFDN0Msd0NBQTBDOzs7OztJQUMxQyx5Q0FBa0M7Ozs7O0lBQ2xDLG9DQUFxQjs7SUFDckIsMkNBQXFDOztJQUNyQywyQ0FBaUI7O0lBQ2pCLDhDQUF1Qjs7SUFFdkIscUNBQW1EOztJQUNuRCwrQ0FBZ0M7O0lBQ2hDLGdEQUF3RDs7SUFDeEQsb0RBQXVGOztJQUN2Riw0Q0FjRTs7SUFDRiw0Q0FXRTs7SUFFRixtREFBZ0M7O0lBRWhDLDZDQUE4Qjs7SUFDOUIsMERBQTJDOztJQUUzQyw4Q0FVRTs7SUFDRixzQ0FFRTs7SUFFRiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBTUEFDRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgQmVoYXZpb3JTdWJqZWN0LCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNoYXJlLCBza2lwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzTmlsLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBQT3B0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgUGFuZWxGaWx0ZXJPcHRpb25QaXBlIH0gZnJvbSAnLi9wLW9wdGlvbi5waXBlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duUGFuZWxTZXJ2aWNlIHtcbiAgLy8gSW5wdXQgcGFyYW1zXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlID0gdHJ1ZTtcbiAgc2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIGZpbHRlck9wdGlvbjogYW55ID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcbiAgbW9kZSA9ICdkZWZhdWx0JztcbiAgbWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8vIHNlbGVjdGVkVmFsdWVDaGFuZ2VkIHNob3VsZCBlbWl0IG5nTW9kZWxDaGFuZ2Ugb3Igbm90XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IHZhbHVlOiBhbnlbXTsgZW1pdDogYm9vbGVhbiB9Pih7XG4gICAgdmFsdWU6IFtdLFxuICAgIGVtaXQ6IGZhbHNlLFxuICB9KTtcbiAgLy8gRGF0YSBDaGFuZ2VcbiAgcHJpdmF0ZSBtYXBPZlRlbXBsYXRlT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8e1xuICAgIGxpc3RPZlBPcHRpb246IFBPcHRpb25bXTtcbiAgfT4oe1xuICAgIGxpc3RPZlBPcHRpb246IFtdLFxuICB9KTtcbiAgLy8gc2VhcmNoVmFsdWUgQ2hhbmdlXG4gIHByaXZhdGUgc2VhcmNoVmFsdWVSYXckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgcHJpdmF0ZSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogUE9wdGlvbltdID0gW107XG4gIHByaXZhdGUgb3BlblJhdyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIGNoZWNrUmF3JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgb3BlbiA9IGZhbHNlO1xuICBjbGVhcklucHV0JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHNlYXJjaFZhbHVlID0gJyc7XG4gIGlzU2hvd05vdEZvdW5kID0gZmFsc2U7XG4gIC8vIG9wZW5cbiAgb3BlbiQgPSB0aGlzLm9wZW5SYXckLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gIGFjdGl2YXRlZE9wdGlvbjogUE9wdGlvbiB8IG51bGw7XG4gIGFjdGl2YXRlZE9wdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxQT3B0aW9uIHwgbnVsbD4oMSk7XG4gIGxpc3RPZlNlbGVjdGVkVmFsdWUkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS52YWx1ZSkpO1xuICBtb2RlbENoYW5nZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShcbiAgICBmaWx0ZXIoaXRlbSA9PiBpdGVtLmVtaXQpLFxuICAgIG1hcChkYXRhID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGRhdGEudmFsdWU7XG4gICAgICBsZXQgbW9kZWxWYWx1ZTogYW55W10gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3RbMF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgICB9KSxcbiAgKTtcbiAgc2VhcmNoVmFsdWUkID0gdGhpcy5zZWFyY2hWYWx1ZVJhdyQucGlwZShcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHNraXAoMSksXG4gICAgc2hhcmUoKSxcbiAgICB0YXAodmFsdWUgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25bMF0pO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xuICAgIH0pLFxuICApO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdID0gW107XG4gIC8vIGRhdGFcbiAgbGlzdE9mUE9wdGlvbjogUE9wdGlvbltdID0gW107XG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBQT3B0aW9uW10gPSBbXTtcbiAgLy8gc2VsZWN0ZWQgdmFsdWUgb3IgRGF0YSBjaGFuZ2VcbiAgdmFsdWVPck9wdGlvbiQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUkLCB0aGlzLm1hcE9mVGVtcGxhdGVPcHRpb24kXSkucGlwZShcbiAgICB0YXAoZGF0YSA9PiB7XG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBkYXRhWzBdO1xuICAgICAgdGhpcy5saXN0T2ZQT3B0aW9uID0gZGF0YVsxXS5saXN0T2ZQT3B0aW9uO1xuICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0T2ZQT3B0aW9uKSk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGVkT3B0aW9uSWZOZWVkZWQoKTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XG4gICAgfSksXG4gICAgc2hhcmUoKSxcbiAgKTtcbiAgY2hlY2skID0gbWVyZ2UodGhpcy5jaGVja1JhdyQsIHRoaXMudmFsdWVPck9wdGlvbiQsIHRoaXMuc2VhcmNoVmFsdWUkLCB0aGlzLmFjdGl2YXRlZE9wdGlvbiQsIHRoaXMub3BlbiQsIHRoaXMubW9kZWxDaGFuZ2UkKS5waXBlKFxuICAgIHNoYXJlKCksXG4gICk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuXG4gIGNsaWNrT3B0aW9uKG9wdGlvbjogUE9wdGlvbik6IHZvaWQge1xuICAgIC8qKiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gbmV4dCBsaXN0T2ZTZWxlY3RlZFZhbHVlJCAqL1xuICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xuICAgICAgdGhpcy5saXN0T2ZQT3B0aW9uLm1hcChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIG9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGxldCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XG4gICAgICBpZiAoIXRoaXMuY29tcGFyZVdpdGgobGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSwgb3B0aW9uLnZhbHVlKSkge1xuICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW29wdGlvbi52YWx1ZV07XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZQT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8udmFsdWUsIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSkpO1xuICAgIGlmICghaXNOaWwoc2VsZWN0ZWRPcHRpb24pKSB7XG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gW3NlbGVjdGVkT3B0aW9uXTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBQYW5lbEZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXG4gICAgICB0aGlzLmxpc3RPZlBPcHRpb24sXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlLFxuICAgICAgdGhpcy5maWx0ZXJPcHRpb24sXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaCxcbiAgICApO1xuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBbLi4ubGlzdE9mRmlsdGVyZWRPcHRpb25dO1xuICAgIHRoaXMuaXNTaG93Tm90Rm91bmQgPSAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XG4gIH1cblxuICBjbGVhcklucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJJbnB1dCQubmV4dCgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSwgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5uZXh0KHsgdmFsdWUsIGVtaXQgfSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBQT3B0aW9uIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24gPSBvcHRpb247XG4gIH1cblxuICBpbmNsdWRlc1NlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNwbGl0QnlTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYFske3NlcGFyYXRvcnMuam9pbigpfV1gKTtcbiAgICBjb25zdCBhcnJheSA9IChzdHIgYXMgc3RyaW5nKS5zcGxpdChyZWcpLmZpbHRlcih0b2tlbiA9PiB0b2tlbik7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpOiB2b2lkIHtcbiAgICBjb25zdCByZXNldEFjdGl2YXRlZE9wdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2YXRlZE9wdGlvbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS52YWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKSk7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihhY3RpdmF0ZWRPcHRpb24gfHwgbnVsbCk7XG4gICAgfTtcbiAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24pIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS52YWx1ZSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLnZhbHVlKSkgfHxcbiAgICAgICAgIXRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLCB0aGlzLmFjdGl2YXRlZE9wdGlvbiEudmFsdWUpKVxuICAgICAgKSB7XG4gICAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGVtcGxhdGVPcHRpb24obGlzdE9mUE9wdGlvbjogUE9wdGlvbltdKTogdm9pZCB7XG4gICAgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJC5uZXh0KHsgbGlzdE9mUE9wdGlvbiB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XG4gICAgY29uc3QgbGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25cbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBsaXN0T2ZMYWJlbC5pbmRleE9mKGl0ZW0ubGFiZWwpICE9PSAtMSlcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKVxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpc05vdE5pbCh0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgaXRlbSkpKSk7XG5cbiAgICBjb25zdCBsaXN0T2ZVbk1hdGNoT3B0aW9uVmFsdWUgPSBsaXN0T2ZMYWJlbC5maWx0ZXIobGFiZWwgPT4gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5tYXAoaXRlbSA9PiBpdGVtLmxhYmVsKS5pbmRleE9mKGxhYmVsKSA9PT0gLTEpO1xuICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlXSwgdHJ1ZSk7XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQgPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbHRlcihpdGVtID0+ICFpdGVtLmRpc2FibGVkKTtcbiAgICBjb25zdCBhY3RpdmF0ZWRJbmRleCA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZC5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZFtwcmVJbmRleF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmF0ZWRJbmRleCA8IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkLmxlbmd0aCAtIDEgPyBhY3RpdmF0ZWRJbmRleCArIDEgOiAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZFtuZXh0SW5kZXhdKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRlZE9wdGlvbiAmJiAhdGhpcy5hY3RpdmF0ZWRPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IFBPcHRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiAhdGhpcy5jb21wYXJlV2l0aChpdGVtLCBvcHRpb24udmFsdWUpKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gIH1cblxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5SYXckLm5leHQodmFsdWUpO1xuICAgIHRoaXMub3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgY2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja1JhdyQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGlzU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGVmYXVsdCc7XG4gIH1cbn1cbiJdfQ==