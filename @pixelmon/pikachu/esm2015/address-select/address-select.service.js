/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { AddressQueryService } from './interface';
import { AddrFilterOptionPipe, defaultAddrFilterOption } from './p-option.pipe';
export class AddressSelectService {
    /**
     * @param {?} addrQuerySrv
     */
    constructor(addrQuerySrv) {
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
        item => item.emit)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const selectedList = data.value;
            const { length } = selectedList;
            /** @type {?} */
            let modelValue = null;
            if (length > 1) {
                modelValue = selectedList[length - 1].value;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0], this.currentLevel);
            }
            this.updateListOfFilteredOption();
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
        (o1, o2) => o1 === o2);
    }
    /**
     * @param {?=} code
     * @param {?=} level
     * @return {?}
     */
    getAreasByCode(code, level = 0) {
        this.addrQuerySrv.getAreasByCode(code).subscribe((/**
         * @param {?} json
         * @return {?}
         */
        json => {
            if (level === 0) {
                this.listOfProvinceOptions = [...json];
            }
            else if (level === 1) {
                this.listOfCityOptions = [...json];
            }
            else if (level === 2) {
                this.listOfDistinctOptions = [...json];
            }
            else if (level === 3) {
                this.listOfStreetOptions = [...json];
            }
            this.check();
        }));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    toggleTab(index) {
        this.currentLevel = index + 1;
        this.levelLabels.forEach((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        (item, i) => {
            if (i === index) {
                item.checked = true;
            }
            else {
                item.checked = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    isMaxLevel() {
        return this.maxLevel === this.currentLevel;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clickOption(option) {
        if (option.disabled) {
            return;
        }
        /** @type {?} */
        const level = ((/** @type {?} */ (option.level))) + 1;
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
    }
    /**
     * @param {?=} clean
     * @return {?}
     */
    updateSelectedOption(clean = false) {
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
        const selectedOption = this.listOfActivatedOption.filter((/**
         * @param {?} o
         * @return {?}
         */
        o => o && o.value));
        const { length } = selectedOption;
        console.log(this.separator);
        if (length > 0) {
            const { label, value, level } = selectedOption[length - 1];
            this.selectedOption = {
                label,
                value,
                level,
                mergeName: selectedOption.map((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.label)).join(this.separator),
            };
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilteredOption() {
        /** @type {?} */
        const listOfFilteredOption = new AddrFilterOptionPipe().transform(this.listOfProvinceOptions, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = [...listOfFilteredOption];
        this.isShowNotFound = !this.listOfFilteredOption.length;
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.clearInput$.next();
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
        this.updateSelectedOption(!value.length);
    }
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    updateActivatedOption(option, level) {
        this.listOfActivatedOption$.next(option);
        if (this.listOfActivatedOption[level]) {
            if (this.listOfActivatedOption[level].value !== (option && option.value) && this.isMaxLevel()) {
                this.listOfActivatedOption[level] = option;
                this.updateListOfSelectedValue([...this.listOfActivatedOption], true);
                return;
            }
        }
        this.listOfActivatedOption[level] = option;
        if (this.isMaxLevel()) {
            this.updateListOfSelectedValue([...this.listOfActivatedOption], true);
        }
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    resetActivatedOptionIfNeeded() {
        /** @type {?} */
        const resetActivatedOption = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const listOfActivatedOption = this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.value, this.selectedOption[0])));
            this.updateActivatedOption(listOfActivatedOption || null, this.currentLevel);
        });
        if (this.listOfActivatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.value, (/** @type {?} */ (this.listOfActivatedOption[this.currentLevel])).value))) ||
                !this.listOfActivatedOption.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.compareWith(item, (/** @type {?} */ (this.listOfActivatedOption[this.currentLevel])).value)))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    /**
     * @param {?} code
     * @return {?}
     */
    updateSelectedOptionByCode(code) {
        this.addrQuerySrv.getAreaLabelByCode(code).subscribe((/**
         * @param {?} json
         * @return {?}
         */
        json => {
            if (json.code === code) {
                this.selectedOption = {
                    label: json.name,
                    value: json.code,
                    level: json.level,
                    mergeName: json.mergerName,
                };
                this.check();
            }
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    removeValueFormSelected(option) {
        if (this.disabled || option.disabled) {
            return;
        }
        /** @type {?} */
        const selectedOption = this.listOfActivatedOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !this.compareWith(item, option.value)));
        this.updateListOfSelectedValue(selectedOption, true);
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        this.openRaw$.next(value);
        // this.open = value;
    }
    /**
     * @return {?}
     */
    check() {
        this.checkRaw$.next();
    }
}
AddressSelectService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressSelectService.ctorParameters = () => [
    { type: AddressQueryService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1zZWxlY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsiYWRkcmVzcy1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUE0QixNQUFNLGFBQWEsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdoRixNQUFNLE9BQU8sb0JBQW9COzs7O0lBZ0UvQixZQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7O1FBOURyRCx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBUSx1QkFBdUIsQ0FBQztRQUM1QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQVcsQ0FBQyxDQUFDOzs7UUFJYixpQ0FBNEIsR0FBRyxJQUFJLGVBQWUsQ0FBa0M7WUFDMUYsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQzs7UUFHSyxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELHlCQUFvQixHQUFpQixF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QUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDdkcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixxQkFBcUI7SUFDdkIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQTdPRixVQUFVOzs7O1lBSEYsbUJBQW1COzs7O0lBTTFCLG9EQUE0Qjs7SUFDNUIsNENBQXFCOztJQUNyQiw0Q0FBNEM7O0lBQzVDLHdDQUFpQjs7SUFFakIsMkNBQStCOztJQUMvQiw0Q0FBeUI7O0lBQ3pCLHdDQUFxQjs7SUFDckIseUNBQWtCOzs7OztJQUdsQiw0REFHRzs7Ozs7SUFHSCwrQ0FBMEQ7Ozs7O0lBQzFELG9EQUFnRDs7Ozs7SUFDaEQsd0NBQTBDOzs7OztJQUMxQyx5Q0FBa0M7O0lBQ2xDLDJDQUFxQzs7SUFDckMsMkNBQWlCOztJQUNqQiw4Q0FBdUI7O0lBRXZCLHFDQUFtRDs7SUFDbkQscURBQWtDOztJQUNsQyxzREFBaUU7O0lBQ2pFLDhDQUE2Qjs7SUFDN0IsNENBV0U7O0lBQ0YsNENBV0U7O0lBRUYscURBQXlDOztJQUN6QyxpREFBcUM7O0lBQ3JDLHFEQUF5Qzs7SUFDekMsbURBQXVDOztJQUV2QyxzQ0FBNEg7O0lBQzVILDJDQUE4Qzs7Ozs7SUFFbEMsNENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzaGFyZSwgc2tpcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWRkcmVzc1F1ZXJ5U2VydmljZSwgQWRkck9wdGlvbiwgUmVzdWx0T3B0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWRkckZpbHRlck9wdGlvblBpcGUsIGRlZmF1bHRBZGRyRmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9wLW9wdGlvbi5waXBlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NTZWxlY3RTZXJ2aWNlIHtcbiAgLy8gSW5wdXQgcGFyYW1zXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlID0gdHJ1ZTtcbiAgc2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIGZpbHRlck9wdGlvbjogYW55ID0gZGVmYXVsdEFkZHJGaWx0ZXJPcHRpb247XG4gIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgbGV2ZWxMYWJlbHM6IEFkZHJPcHRpb25bXSA9IFtdO1xuICBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XG4gIG1heExldmVsOiBudW1iZXIgPSAxO1xuICBzZXBhcmF0b3I6IHN0cmluZztcbiAgLy8gc2VsZWN0ZWRWYWx1ZUNoYW5nZWQgc2hvdWxkIGVtaXQgbmdNb2RlbENoYW5nZSBvciBub3RcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgdmFsdWU6IGFueVtdOyBlbWl0OiBib29sZWFuIH0+KHtcbiAgICB2YWx1ZTogW10sXG4gICAgZW1pdDogZmFsc2UsXG4gIH0pO1xuXG4gIC8vIHNlYXJjaFZhbHVlIENoYW5nZVxuICBwcml2YXRlIHNlYXJjaFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIHByaXZhdGUgbGlzdE9mRmlsdGVyZWRPcHRpb246IEFkZHJPcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIG9wZW5SYXckID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBjaGVja1JhdyQgPSBuZXcgU3ViamVjdCgpO1xuICBjbGVhcklucHV0JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHNlYXJjaFZhbHVlID0gJyc7XG4gIGlzU2hvd05vdEZvdW5kID0gZmFsc2U7XG4gIC8vIG9wZW5cbiAgb3BlbiQgPSB0aGlzLm9wZW5SYXckLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gIGxpc3RPZkFjdGl2YXRlZE9wdGlvbjogYW55W10gPSBbXTtcbiAgbGlzdE9mQWN0aXZhdGVkT3B0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PEFkZHJPcHRpb24gfCBudWxsPigxKTtcbiAgc2VsZWN0ZWRPcHRpb246IFJlc3VsdE9wdGlvbjtcbiAgbW9kZWxDaGFuZ2UkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUoXG4gICAgZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbWl0KSxcbiAgICBtYXAoZGF0YSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkYXRhLnZhbHVlO1xuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHNlbGVjdGVkTGlzdDtcbiAgICAgIGxldCBtb2RlbFZhbHVlOiBhbnlbXSB8IG51bGwgPSBudWxsO1xuICAgICAgaWYgKGxlbmd0aCA+IDEpIHtcbiAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdFtsZW5ndGggLSAxXS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICAgIH0pLFxuICApO1xuICBzZWFyY2hWYWx1ZSQgPSB0aGlzLnNlYXJjaFZhbHVlUmF3JC5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgc2tpcCgxKSxcbiAgICBzaGFyZSgpLFxuICAgIHRhcCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvblswXSwgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xuICAgIH0pLFxuICApO1xuICAvLyBhZGRyZXNzIGRhdGFcbiAgbGlzdE9mUHJvdmluY2VPcHRpb25zOiBBZGRyT3B0aW9uW10gPSBbXTtcbiAgbGlzdE9mQ2l0eU9wdGlvbnM6IEFkZHJPcHRpb25bXSA9IFtdO1xuICBsaXN0T2ZEaXN0aW5jdE9wdGlvbnM6IEFkZHJPcHRpb25bXSA9IFtdO1xuICBsaXN0T2ZTdHJlZXRPcHRpb25zOiBBZGRyT3B0aW9uW10gPSBbXTtcblxuICBjaGVjayQgPSBtZXJnZSh0aGlzLmNoZWNrUmF3JCwgdGhpcy5zZWFyY2hWYWx1ZSQsIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uJCwgdGhpcy5vcGVuJCwgdGhpcy5tb2RlbENoYW5nZSQpLnBpcGUoc2hhcmUoKSk7XG4gIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkZHJRdWVyeVNydjogQWRkcmVzc1F1ZXJ5U2VydmljZSkge31cblxuICBnZXRBcmVhc0J5Q29kZShjb2RlPzogc3RyaW5nLCBsZXZlbCA9IDApIHtcbiAgICB0aGlzLmFkZHJRdWVyeVNydi5nZXRBcmVhc0J5Q29kZShjb2RlKS5zdWJzY3JpYmUoanNvbiA9PiB7XG4gICAgICBpZiAobGV2ZWwgPT09IDApIHtcbiAgICAgICAgdGhpcy5saXN0T2ZQcm92aW5jZU9wdGlvbnMgPSBbLi4uanNvbl07XG4gICAgICB9IGVsc2UgaWYgKGxldmVsID09PSAxKSB7XG4gICAgICAgIHRoaXMubGlzdE9mQ2l0eU9wdGlvbnMgPSBbLi4uanNvbl07XG4gICAgICB9IGVsc2UgaWYgKGxldmVsID09PSAyKSB7XG4gICAgICAgIHRoaXMubGlzdE9mRGlzdGluY3RPcHRpb25zID0gWy4uLmpzb25dO1xuICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICB0aGlzLmxpc3RPZlN0cmVldE9wdGlvbnMgPSBbLi4uanNvbl07XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudExldmVsID0gaW5kZXggKyAxO1xuICAgIHRoaXMubGV2ZWxMYWJlbHMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzTWF4TGV2ZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWF4TGV2ZWwgPT09IHRoaXMuY3VycmVudExldmVsO1xuICB9XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBBZGRyT3B0aW9uKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsZXZlbCA9IChvcHRpb24ubGV2ZWwgYXMgbnVtYmVyKSArIDE7XG4gICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uLCBsZXZlbCk7XG4gICAgLy8g6K6+572u5YC8XG4gICAgaWYgKHRoaXMuaXNNYXhMZXZlbCgpKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSkge1xuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdldEFyZWFzQnlDb2RlKG9wdGlvbi52YWx1ZSwgbGV2ZWwpO1xuICAgIHRoaXMudG9nZ2xlVGFiKGxldmVsKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkT3B0aW9uKGNsZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoY2xlYW4pIHtcbiAgICAgIHRoaXMudG9nZ2xlVGFiKDApO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIG1lcmdlTmFtZTogJycsXG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbjogQWRkck9wdGlvbltdID0gdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb24uZmlsdGVyKG8gPT4gbyAmJiBvLnZhbHVlKTtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gc2VsZWN0ZWRPcHRpb247XG4gICAgY29uc29sZS5sb2codGhpcy5zZXBhcmF0b3IpXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlLCBsZXZlbCB9ID0gc2VsZWN0ZWRPcHRpb25bbGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0ge1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBtZXJnZU5hbWU6IHNlbGVjdGVkT3B0aW9uLm1hcChvID0+IG8ubGFiZWwpLmpvaW4odGhpcy5zZXBhcmF0b3IpLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBBZGRyRmlsdGVyT3B0aW9uUGlwZSgpLnRyYW5zZm9ybShcbiAgICAgIHRoaXMubGlzdE9mUHJvdmluY2VPcHRpb25zLFxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSxcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxuICAgICAgdGhpcy5zZXJ2ZXJTZWFyY2gsXG4gICAgKTtcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gWy4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXTtcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24ubGVuZ3RoO1xuICB9XG5cbiAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFySW5wdXQkLm5leHQoKTtcbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLm5leHQoeyB2YWx1ZSwgZW1pdCB9KTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKCF2YWx1ZS5sZW5ndGgpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZhdGVkT3B0aW9uKG9wdGlvbjogQWRkck9wdGlvbiB8IG51bGwsIGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbiQubmV4dChvcHRpb24pO1xuXG4gICAgaWYgKHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uW2xldmVsXSkge1xuICAgICAgaWYgKHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uW2xldmVsXS52YWx1ZSAhPT0gKG9wdGlvbiAmJiBvcHRpb24udmFsdWUpICYmIHRoaXMuaXNNYXhMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uW2xldmVsXSA9IG9wdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFsuLi50aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbl0sIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uW2xldmVsXSA9IG9wdGlvbjtcbiAgICBpZiAodGhpcy5pc01heExldmVsKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbLi4udGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25dLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBpbmNsdWRlc1NlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGVkT3B0aW9uSWZOZWVkZWQoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzZXRBY3RpdmF0ZWRPcHRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0T2ZBY3RpdmF0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0udmFsdWUsIHRoaXMuc2VsZWN0ZWRPcHRpb25bMF0pKTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGxpc3RPZkFjdGl2YXRlZE9wdGlvbiB8fCBudWxsLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgfTtcbiAgICBpZiAodGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb24pIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS52YWx1ZSwgdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25bdGhpcy5jdXJyZW50TGV2ZWxdIS52YWx1ZSkpIHx8XG4gICAgICAgICF0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLCB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvblt0aGlzLmN1cnJlbnRMZXZlbF0hLnZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkT3B0aW9uQnlDb2RlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWRkclF1ZXJ5U3J2LmdldEFyZWFMYWJlbEJ5Q29kZShjb2RlKS5zdWJzY3JpYmUoanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5jb2RlID09PSBjb2RlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB7XG4gICAgICAgICAgbGFiZWw6IGpzb24ubmFtZSxcbiAgICAgICAgICB2YWx1ZToganNvbi5jb2RlLFxuICAgICAgICAgIGxldmVsOiBqc29uLmxldmVsLFxuICAgICAgICAgIG1lcmdlTmFtZToganNvbi5tZXJnZXJOYW1lLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IEFkZHJPcHRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbi5maWx0ZXIoaXRlbSA9PiAhdGhpcy5jb21wYXJlV2l0aChpdGVtLCBvcHRpb24udmFsdWUpKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoc2VsZWN0ZWRPcHRpb24sIHRydWUpO1xuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICB9XG5cbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuUmF3JC5uZXh0KHZhbHVlKTtcbiAgICAvLyB0aGlzLm9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tSYXckLm5leHQoKTtcbiAgfVxufVxuIl19