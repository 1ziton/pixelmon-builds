/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { AddressQueryService } from './interface';
import { AddrFilterOptionPipe, defaultAddrFilterOption } from './p-option.pipe';
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
                _this.listOfProvinceOptions = tslib_1.__spread(json);
            }
            else if (level === 1) {
                _this.listOfCityOptions = tslib_1.__spread(json);
            }
            else if (level === 2) {
                _this.listOfDistinctOptions = tslib_1.__spread(json);
            }
            else if (level === 3) {
                _this.listOfStreetOptions = tslib_1.__spread(json);
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
        this.listOfFilteredOption = tslib_1.__spread(listOfFilteredOption);
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
                this.updateListOfSelectedValue(tslib_1.__spread(this.listOfActivatedOption), true);
                return;
            }
        }
        this.listOfActivatedOption[level] = option;
        if (this.isMaxLevel()) {
            this.updateListOfSelectedValue(tslib_1.__spread(this.listOfActivatedOption), true);
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
export { AddressSelectService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1zZWxlY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsiYWRkcmVzcy1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBNEIsTUFBTSxhQUFhLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEY7SUFpRUUsOEJBQW9CLFlBQWlDO1FBQXJELGlCQUF5RDtRQUFyQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7O1FBOURyRCx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBUSx1QkFBdUIsQ0FBQztRQUM1QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQVcsQ0FBQyxDQUFDOzs7UUFJYixpQ0FBNEIsR0FBRyxJQUFJLGVBQWUsQ0FBa0M7WUFDMUYsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQzs7UUFHSyxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELHlCQUFvQixHQUFpQixFQUFFLENB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SDs7SUFDNUgsMkNBQThDOzs7OztJQUVsQyw0Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIG1lcmdlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNoYXJlLCBza2lwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZGRyZXNzUXVlcnlTZXJ2aWNlLCBBZGRyT3B0aW9uLCBSZXN1bHRPcHRpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBZGRyRmlsdGVyT3B0aW9uUGlwZSwgZGVmYXVsdEFkZHJGaWx0ZXJPcHRpb24gfSBmcm9tICcuL3Atb3B0aW9uLnBpcGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc1NlbGVjdFNlcnZpY2Uge1xuICAvLyBJbnB1dCBwYXJhbXNcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xuICBzZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcbiAgZmlsdGVyT3B0aW9uOiBhbnkgPSBkZWZhdWx0QWRkckZpbHRlck9wdGlvbjtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBsZXZlbExhYmVsczogQWRkck9wdGlvbltdID0gW107XG4gIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMTtcbiAgbWF4TGV2ZWw6IG51bWJlciA9IDE7XG4gIHNlcGFyYXRvcjogc3RyaW5nO1xuICAvLyBzZWxlY3RlZFZhbHVlQ2hhbmdlZCBzaG91bGQgZW1pdCBuZ01vZGVsQ2hhbmdlIG9yIG5vdFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyB2YWx1ZTogYW55W107IGVtaXQ6IGJvb2xlYW4gfT4oe1xuICAgIHZhbHVlOiBbXSxcbiAgICBlbWl0OiBmYWxzZSxcbiAgfSk7XG5cbiAgLy8gc2VhcmNoVmFsdWUgQ2hhbmdlXG4gIHByaXZhdGUgc2VhcmNoVmFsdWVSYXckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgcHJpdmF0ZSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogQWRkck9wdGlvbltdID0gW107XG4gIHByaXZhdGUgb3BlblJhdyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIGNoZWNrUmF3JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGNsZWFySW5wdXQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgc2VhcmNoVmFsdWUgPSAnJztcbiAgaXNTaG93Tm90Rm91bmQgPSBmYWxzZTtcbiAgLy8gb3BlblxuICBvcGVuJCA9IHRoaXMub3BlblJhdyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgbGlzdE9mQWN0aXZhdGVkT3B0aW9uOiBhbnlbXSA9IFtdO1xuICBsaXN0T2ZBY3RpdmF0ZWRPcHRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8QWRkck9wdGlvbiB8IG51bGw+KDEpO1xuICBzZWxlY3RlZE9wdGlvbjogUmVzdWx0T3B0aW9uO1xuICBtb2RlbENoYW5nZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShcbiAgICBmaWx0ZXIoaXRlbSA9PiBpdGVtLmVtaXQpLFxuICAgIG1hcChkYXRhID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGRhdGEudmFsdWU7XG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gc2VsZWN0ZWRMaXN0O1xuICAgICAgbGV0IG1vZGVsVmFsdWU6IGFueVtdIHwgbnVsbCA9IG51bGw7XG4gICAgICBpZiAobGVuZ3RoID4gMSkge1xuICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0W2xlbmd0aCAtIDFdLnZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gICAgfSksXG4gICk7XG4gIHNlYXJjaFZhbHVlJCA9IHRoaXMuc2VhcmNoVmFsdWVSYXckLnBpcGUoXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICBza2lwKDEpLFxuICAgIHNoYXJlKCksXG4gICAgdGFwKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbih0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uWzBdLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk7XG4gICAgfSksXG4gICk7XG4gIC8vIGFkZHJlc3MgZGF0YVxuICBsaXN0T2ZQcm92aW5jZU9wdGlvbnM6IEFkZHJPcHRpb25bXSA9IFtdO1xuICBsaXN0T2ZDaXR5T3B0aW9uczogQWRkck9wdGlvbltdID0gW107XG4gIGxpc3RPZkRpc3RpbmN0T3B0aW9uczogQWRkck9wdGlvbltdID0gW107XG4gIGxpc3RPZlN0cmVldE9wdGlvbnM6IEFkZHJPcHRpb25bXSA9IFtdO1xuXG4gIGNoZWNrJCA9IG1lcmdlKHRoaXMuY2hlY2tSYXckLCB0aGlzLnNlYXJjaFZhbHVlJCwgdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb24kLCB0aGlzLm9wZW4kLCB0aGlzLm1vZGVsQ2hhbmdlJCkucGlwZShzaGFyZSgpKTtcbiAgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRkclF1ZXJ5U3J2OiBBZGRyZXNzUXVlcnlTZXJ2aWNlKSB7fVxuXG4gIGdldEFyZWFzQnlDb2RlKGNvZGU/OiBzdHJpbmcsIGxldmVsID0gMCkge1xuICAgIHRoaXMuYWRkclF1ZXJ5U3J2LmdldEFyZWFzQnlDb2RlKGNvZGUpLnN1YnNjcmliZShqc29uID0+IHtcbiAgICAgIGlmIChsZXZlbCA9PT0gMCkge1xuICAgICAgICB0aGlzLmxpc3RPZlByb3ZpbmNlT3B0aW9ucyA9IFsuLi5qc29uXTtcbiAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT09IDEpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZDaXR5T3B0aW9ucyA9IFsuLi5qc29uXTtcbiAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT09IDIpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZEaXN0aW5jdE9wdGlvbnMgPSBbLi4uanNvbl07XG4gICAgICB9IGVsc2UgaWYgKGxldmVsID09PSAzKSB7XG4gICAgICAgIHRoaXMubGlzdE9mU3RyZWV0T3B0aW9ucyA9IFsuLi5qc29uXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRhYihpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBpbmRleCArIDE7XG4gICAgdGhpcy5sZXZlbExhYmVscy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNNYXhMZXZlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXhMZXZlbCA9PT0gdGhpcy5jdXJyZW50TGV2ZWw7XG4gIH1cblxuICBjbGlja09wdGlvbihvcHRpb246IEFkZHJPcHRpb24pOiB2b2lkIHtcbiAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxldmVsID0gKG9wdGlvbi5sZXZlbCBhcyBudW1iZXIpICsgMTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24sIGxldmVsKTtcbiAgICAvLyDorr7nva7lgLxcbiAgICBpZiAodGhpcy5pc01heExldmVsKCkpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DbGVhclNlYXJjaFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0QXJlYXNCeUNvZGUob3B0aW9uLnZhbHVlLCBsZXZlbCk7XG4gICAgdGhpcy50b2dnbGVUYWIobGV2ZWwpO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb24oY2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChjbGVhbikge1xuICAgICAgdGhpcy50b2dnbGVUYWIoMCk7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0ge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgbWVyZ2VOYW1lOiAnJyxcbiAgICAgIH07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uOiBBZGRyT3B0aW9uW10gPSB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbi5maWx0ZXIobyA9PiBvICYmIG8udmFsdWUpO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzZWxlY3RlZE9wdGlvbjtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlcGFyYXRvcilcbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBsYWJlbCwgdmFsdWUsIGxldmVsIH0gPSBzZWxlY3RlZE9wdGlvbltsZW5ndGggLSAxXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIG1lcmdlTmFtZTogc2VsZWN0ZWRPcHRpb24ubWFwKG8gPT4gby5sYWJlbCkuam9pbih0aGlzLnNlcGFyYXRvciksXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uID0gbmV3IEFkZHJGaWx0ZXJPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxuICAgICAgdGhpcy5saXN0T2ZQcm92aW5jZU9wdGlvbnMsXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlLFxuICAgICAgdGhpcy5maWx0ZXJPcHRpb24sXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaCxcbiAgICApO1xuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBbLi4ubGlzdE9mRmlsdGVyZWRPcHRpb25dO1xuICAgIHRoaXMuaXNTaG93Tm90Rm91bmQgPSAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XG4gIH1cblxuICBjbGVhcklucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJJbnB1dCQubmV4dCgpO1xuICB9XG5cbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10sIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQubmV4dCh7IHZhbHVlLCBlbWl0IH0pO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRPcHRpb24oIXZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBBZGRyT3B0aW9uIHwgbnVsbCwgbGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XG5cbiAgICBpZiAodGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25bbGV2ZWxdKSB7XG4gICAgICBpZiAodGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25bbGV2ZWxdLnZhbHVlICE9PSAob3B0aW9uICYmIG9wdGlvbi52YWx1ZSkgJiYgdGhpcy5pc01heExldmVsKCkpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25bbGV2ZWxdID0gb3B0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoWy4uLnRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uXSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25bbGV2ZWxdID0gb3B0aW9uO1xuICAgIGlmICh0aGlzLmlzTWF4TGV2ZWwoKSkge1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFsuLi50aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbl0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpOiB2b2lkIHtcbiAgICBjb25zdCByZXNldEFjdGl2YXRlZE9wdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RPZkFjdGl2YXRlZE9wdGlvbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS52YWx1ZSwgdGhpcy5zZWxlY3RlZE9wdGlvblswXSkpO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mQWN0aXZhdGVkT3B0aW9uIHx8IG51bGwsIHRoaXMuY3VycmVudExldmVsKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbikge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLnZhbHVlLCB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvblt0aGlzLmN1cnJlbnRMZXZlbF0hLnZhbHVlKSkgfHxcbiAgICAgICAgIXRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uW3RoaXMuY3VycmVudExldmVsXSEudmFsdWUpKVxuICAgICAgKSB7XG4gICAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoVmFsdWVSYXckLm5leHQodmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb25CeUNvZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyUXVlcnlTcnYuZ2V0QXJlYUxhYmVsQnlDb2RlKGNvZGUpLnN1YnNjcmliZShqc29uID0+IHtcbiAgICAgIGlmIChqc29uLmNvZGUgPT09IGNvZGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHtcbiAgICAgICAgICBsYWJlbDoganNvbi5uYW1lLFxuICAgICAgICAgIHZhbHVlOiBqc29uLmNvZGUsXG4gICAgICAgICAgbGV2ZWw6IGpzb24ubGV2ZWwsXG4gICAgICAgICAgbWVyZ2VOYW1lOiBqc29uLm1lcmdlck5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbjogQWRkck9wdGlvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uLmZpbHRlcihpdGVtID0+ICF0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIG9wdGlvbi52YWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShzZWxlY3RlZE9wdGlvbiwgdHJ1ZSk7XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gIH1cblxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5SYXckLm5leHQodmFsdWUpO1xuICAgIC8vIHRoaXMub3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgY2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja1JhdyQubmV4dCgpO1xuICB9XG59XG4iXX0=