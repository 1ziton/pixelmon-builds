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
        this.separator = '/';
        // selectedValueChanged should emit ngModelChange or not
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
            // if (value) {
            //   this.updateActivatedOption(this.listOfFilteredOption[0], this.currentLevel);
            // }
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
    AddressSelectService.prototype.getListByCode = /**
     * @param {?=} code
     * @param {?=} level
     * @return {?}
     */
    function (code, level) {
        var _this = this;
        if (level === void 0) { level = 0; }
        this.addrQuerySrv.getListByCode(code).subscribe((/**
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
            this.setOpenState(false);
            return;
        }
        if (this.autoClearSearchValue) {
            this.clearInput();
        }
        this.getListByCode(option.value, level);
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
            this.listOfActivatedOption = [];
            return;
        }
        /** @type {?} */
        var selectedOption = this.listOfActivatedOption.filter((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return o && o.value; }));
        var length = selectedOption.length;
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
        var filterOptionList = [];
        if (this.currentLevel === 1)
            filterOptionList = tslib_1.__spread(this.listOfProvinceOptions);
        if (this.currentLevel === 2)
            filterOptionList = tslib_1.__spread(this.listOfCityOptions);
        if (this.currentLevel === 3)
            filterOptionList = tslib_1.__spread(this.listOfDistinctOptions);
        if (this.currentLevel === 4)
            filterOptionList = tslib_1.__spread(this.listOfStreetOptions);
        /** @type {?} */
        var listOfFilteredOption = new AddrFilterOptionPipe().transform(filterOptionList, this.searchValue, this.filterOption, this.serverSearch);
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
        this.check();
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
        this.addrQuerySrv.getOptionByCode(code).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1zZWxlY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsiYWRkcmVzcy1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBNEIsTUFBTSxhQUFhLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEY7SUFnRUUsOEJBQW9CLFlBQWlDO1FBQXJELGlCQUF5RDtRQUFyQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7O1FBN0RyRCx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBUSx1QkFBdUIsQ0FBQztRQUM1QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxHQUFHLENBQUM7O1FBRVIsaUNBQTRCLEdBQUcsSUFBSSxlQUFlLENBQWtDO1lBQzFGLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7O1FBR0ssb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztR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OztJQUVsQyw0Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIG1lcmdlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNoYXJlLCBza2lwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZGRyZXNzUXVlcnlTZXJ2aWNlLCBBZGRyT3B0aW9uLCBSZXN1bHRPcHRpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBZGRyRmlsdGVyT3B0aW9uUGlwZSwgZGVmYXVsdEFkZHJGaWx0ZXJPcHRpb24gfSBmcm9tICcuL3Atb3B0aW9uLnBpcGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc1NlbGVjdFNlcnZpY2Uge1xuICAvLyBJbnB1dCBwYXJhbXNcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xuICBzZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcbiAgZmlsdGVyT3B0aW9uOiBhbnkgPSBkZWZhdWx0QWRkckZpbHRlck9wdGlvbjtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBsZXZlbExhYmVsczogQWRkck9wdGlvbltdID0gW107XG4gIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMTtcbiAgbWF4TGV2ZWw6IG51bWJlciA9IDE7XG4gIHNlcGFyYXRvciA9ICcvJztcbiAgLy8gc2VsZWN0ZWRWYWx1ZUNoYW5nZWQgc2hvdWxkIGVtaXQgbmdNb2RlbENoYW5nZSBvciBub3RcbiAgcHJpdmF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IHZhbHVlOiBhbnlbXTsgZW1pdDogYm9vbGVhbiB9Pih7XG4gICAgdmFsdWU6IFtdLFxuICAgIGVtaXQ6IGZhbHNlLFxuICB9KTtcblxuICAvLyBzZWFyY2hWYWx1ZSBDaGFuZ2VcbiAgcHJpdmF0ZSBzZWFyY2hWYWx1ZVJhdyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICBwcml2YXRlIGxpc3RPZkZpbHRlcmVkT3B0aW9uOiBBZGRyT3B0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBvcGVuUmF3JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgY2hlY2tSYXckID0gbmV3IFN1YmplY3QoKTtcbiAgY2xlYXJJbnB1dCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBzZWFyY2hWYWx1ZSA9ICcnO1xuICBpc1Nob3dOb3RGb3VuZCA9IGZhbHNlO1xuICAvLyBvcGVuXG4gIG9wZW4kID0gdGhpcy5vcGVuUmF3JC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICBsaXN0T2ZBY3RpdmF0ZWRPcHRpb246IGFueVtdID0gW107XG4gIGxpc3RPZkFjdGl2YXRlZE9wdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxBZGRyT3B0aW9uIHwgbnVsbD4oMSk7XG4gIHNlbGVjdGVkT3B0aW9uOiBSZXN1bHRPcHRpb247XG4gIG1vZGVsQ2hhbmdlJCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5waXBlKFxuICAgIGZpbHRlcihpdGVtID0+IGl0ZW0uZW1pdCksXG4gICAgbWFwKGRhdGEgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZGF0YS52YWx1ZTtcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzZWxlY3RlZExpc3Q7XG4gICAgICBsZXQgbW9kZWxWYWx1ZTogYW55W10gfCBudWxsID0gbnVsbDtcbiAgICAgIGlmIChsZW5ndGggPiAxKSB7XG4gICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3RbbGVuZ3RoIC0gMV0udmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgICB9KSxcbiAgKTtcbiAgc2VhcmNoVmFsdWUkID0gdGhpcy5zZWFyY2hWYWx1ZVJhdyQucGlwZShcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHNraXAoMSksXG4gICAgc2hhcmUoKSxcbiAgICB0YXAodmFsdWUgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gaWYgKHZhbHVlKSB7XG4gICAgICAvLyAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25bMF0sIHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcbiAgICB9KSxcbiAgKTtcbiAgLy8gYWRkcmVzcyBkYXRhXG4gIGxpc3RPZlByb3ZpbmNlT3B0aW9uczogQWRkck9wdGlvbltdID0gW107XG4gIGxpc3RPZkNpdHlPcHRpb25zOiBBZGRyT3B0aW9uW10gPSBbXTtcbiAgbGlzdE9mRGlzdGluY3RPcHRpb25zOiBBZGRyT3B0aW9uW10gPSBbXTtcbiAgbGlzdE9mU3RyZWV0T3B0aW9uczogQWRkck9wdGlvbltdID0gW107XG5cbiAgY2hlY2skID0gbWVyZ2UodGhpcy5jaGVja1JhdyQsIHRoaXMuc2VhcmNoVmFsdWUkLCB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbiQsIHRoaXMub3BlbiQsIHRoaXMubW9kZWxDaGFuZ2UkKS5waXBlKHNoYXJlKCkpO1xuICBjb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZGRyUXVlcnlTcnY6IEFkZHJlc3NRdWVyeVNlcnZpY2UpIHt9XG5cbiAgZ2V0TGlzdEJ5Q29kZShjb2RlPzogc3RyaW5nLCBsZXZlbCA9IDApIHtcbiAgICB0aGlzLmFkZHJRdWVyeVNydi5nZXRMaXN0QnlDb2RlKGNvZGUpLnN1YnNjcmliZShqc29uID0+IHtcbiAgICAgIGlmIChsZXZlbCA9PT0gMCkge1xuICAgICAgICB0aGlzLmxpc3RPZlByb3ZpbmNlT3B0aW9ucyA9IFsuLi5qc29uXTtcbiAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT09IDEpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZDaXR5T3B0aW9ucyA9IFsuLi5qc29uXTtcbiAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT09IDIpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZEaXN0aW5jdE9wdGlvbnMgPSBbLi4uanNvbl07XG4gICAgICB9IGVsc2UgaWYgKGxldmVsID09PSAzKSB7XG4gICAgICAgIHRoaXMubGlzdE9mU3RyZWV0T3B0aW9ucyA9IFsuLi5qc29uXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRhYihpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBpbmRleCArIDE7XG4gICAgdGhpcy5sZXZlbExhYmVscy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNNYXhMZXZlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXhMZXZlbCA9PT0gdGhpcy5jdXJyZW50TGV2ZWw7XG4gIH1cblxuICBjbGlja09wdGlvbihvcHRpb246IEFkZHJPcHRpb24pOiB2b2lkIHtcbiAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxldmVsID0gKG9wdGlvbi5sZXZlbCBhcyBudW1iZXIpICsgMTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24sIGxldmVsKTtcbiAgICAvLyDorr7nva7lgLxcbiAgICBpZiAodGhpcy5pc01heExldmVsKCkpIHtcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgIH1cbiAgICB0aGlzLmdldExpc3RCeUNvZGUob3B0aW9uLnZhbHVlLCBsZXZlbCk7XG4gICAgdGhpcy50b2dnbGVUYWIobGV2ZWwpO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb24oY2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChjbGVhbikge1xuICAgICAgdGhpcy50b2dnbGVUYWIoMCk7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0ge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgbWVyZ2VOYW1lOiAnJyxcbiAgICAgIH07XG4gICAgICB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbiA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbjogQWRkck9wdGlvbltdID0gdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb24uZmlsdGVyKG8gPT4gbyAmJiBvLnZhbHVlKTtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gc2VsZWN0ZWRPcHRpb247XG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlLCBsZXZlbCB9ID0gc2VsZWN0ZWRPcHRpb25bbGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0ge1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBtZXJnZU5hbWU6IHNlbGVjdGVkT3B0aW9uLm1hcChvID0+IG8ubGFiZWwpLmpvaW4odGhpcy5zZXBhcmF0b3IpLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcbiAgICBsZXQgZmlsdGVyT3B0aW9uTGlzdDogQWRkck9wdGlvbltdID0gW107XG5cbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09IDEpIGZpbHRlck9wdGlvbkxpc3QgPSBbLi4udGhpcy5saXN0T2ZQcm92aW5jZU9wdGlvbnNdO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gMikgZmlsdGVyT3B0aW9uTGlzdCA9IFsuLi50aGlzLmxpc3RPZkNpdHlPcHRpb25zXTtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09IDMpIGZpbHRlck9wdGlvbkxpc3QgPSBbLi4udGhpcy5saXN0T2ZEaXN0aW5jdE9wdGlvbnNdO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gNCkgZmlsdGVyT3B0aW9uTGlzdCA9IFsuLi50aGlzLmxpc3RPZlN0cmVldE9wdGlvbnNdO1xuXG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb24gPSBuZXcgQWRkckZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXG4gICAgICBmaWx0ZXJPcHRpb25MaXN0LFxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSxcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxuICAgICAgdGhpcy5zZXJ2ZXJTZWFyY2gsXG4gICAgKTtcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gWy4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXTtcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24ubGVuZ3RoO1xuICB9XG5cbiAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFySW5wdXQkLm5leHQoKTtcbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLm5leHQoeyB2YWx1ZSwgZW1pdCB9KTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKCF2YWx1ZS5sZW5ndGgpO1xuICAgIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb246IEFkZHJPcHRpb24gfCBudWxsLCBsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb24kLm5leHQob3B0aW9uKTtcblxuICAgIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uW2xldmVsXSA9IG9wdGlvbjtcbiAgICBpZiAodGhpcy5pc01heExldmVsKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbLi4udGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25dLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBpbmNsdWRlc1NlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGVkT3B0aW9uSWZOZWVkZWQoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzZXRBY3RpdmF0ZWRPcHRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0T2ZBY3RpdmF0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0udmFsdWUsIHRoaXMuc2VsZWN0ZWRPcHRpb25bMF0pKTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGxpc3RPZkFjdGl2YXRlZE9wdGlvbiB8fCBudWxsLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgfTtcbiAgICBpZiAodGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb24pIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS52YWx1ZSwgdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25bdGhpcy5jdXJyZW50TGV2ZWxdIS52YWx1ZSkpIHx8XG4gICAgICAgICF0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLCB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvblt0aGlzLmN1cnJlbnRMZXZlbF0hLnZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkT3B0aW9uQnlDb2RlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWRkclF1ZXJ5U3J2LmdldE9wdGlvbkJ5Q29kZShjb2RlKS5zdWJzY3JpYmUoanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5jb2RlID09PSBjb2RlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB7XG4gICAgICAgICAgbGFiZWw6IGpzb24ubmFtZSxcbiAgICAgICAgICB2YWx1ZToganNvbi5jb2RlLFxuICAgICAgICAgIGxldmVsOiBqc29uLmxldmVsLFxuICAgICAgICAgIG1lcmdlTmFtZToganNvbi5tZXJnZXJOYW1lLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IEFkZHJPcHRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbi5maWx0ZXIoaXRlbSA9PiAhdGhpcy5jb21wYXJlV2l0aChpdGVtLCBvcHRpb24udmFsdWUpKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoc2VsZWN0ZWRPcHRpb24sIHRydWUpO1xuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICB9XG5cbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuUmF3JC5uZXh0KHZhbHVlKTtcbiAgICAvLyB0aGlzLm9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tSYXckLm5leHQoKTtcbiAgfVxufVxuIl19