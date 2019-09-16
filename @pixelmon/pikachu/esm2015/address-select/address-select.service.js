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
            // if (value) {
            //   this.updateActivatedOption(this.listOfFilteredOption[0], this.currentLevel);
            // }
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
    getListByCode(code, level = 0) {
        this.addrQuerySrv.getListByCode(code).subscribe((/**
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
            this.setOpenState(false);
            return;
        }
        if (this.autoClearSearchValue) {
            this.clearInput();
        }
        this.getListByCode(option.value, level);
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
            this.listOfActivatedOption = [];
            return;
        }
        /** @type {?} */
        const selectedOption = this.listOfActivatedOption.filter((/**
         * @param {?} o
         * @return {?}
         */
        o => o && o.value));
        const { length } = selectedOption;
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
        let filterOptionList = [];
        if (this.currentLevel === 1)
            filterOptionList = [...this.listOfProvinceOptions];
        if (this.currentLevel === 2)
            filterOptionList = [...this.listOfCityOptions];
        if (this.currentLevel === 3)
            filterOptionList = [...this.listOfDistinctOptions];
        if (this.currentLevel === 4)
            filterOptionList = [...this.listOfStreetOptions];
        /** @type {?} */
        const listOfFilteredOption = new AddrFilterOptionPipe().transform(filterOptionList, this.searchValue, this.filterOption, this.serverSearch);
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
        this.check();
    }
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    updateActivatedOption(option, level) {
        this.listOfActivatedOption$.next(option);
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
        this.addrQuerySrv.getOptionByCode(code).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1zZWxlY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsiYWRkcmVzcy1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUE0QixNQUFNLGFBQWEsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdoRixNQUFNLE9BQU8sb0JBQW9COzs7O0lBK0QvQixZQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7O1FBN0RyRCx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBUSx1QkFBdUIsQ0FBQztRQUM1QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxHQUFHLENBQUM7O1FBRVIsaUNBQTRCLEdBQUcsSUFBSSxlQUFlLENBQWtDO1lBQzFGLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7O1FBR0ssb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMs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QyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ3ZHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIscUJBQXFCO0lBQ3ZCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUE1T0YsVUFBVTs7OztZQUhGLG1CQUFtQjs7OztJQU0xQixvREFBNEI7O0lBQzVCLDRDQUFxQjs7SUFDckIsNENBQTRDOztJQUM1Qyx3Q0FBaUI7O0lBRWpCLDJDQUErQjs7SUFDL0IsNENBQXlCOztJQUN6Qix3Q0FBcUI7O0lBQ3JCLHlDQUFnQjs7Ozs7SUFFaEIsNERBR0c7Ozs7O0lBR0gsK0NBQTBEOzs7OztJQUMxRCxvREFBZ0Q7Ozs7O0lBQ2hELHdDQUEwQzs7Ozs7SUFDMUMseUNBQWtDOztJQUNsQywyQ0FBcUM7O0lBQ3JDLDJDQUFpQjs7SUFDakIsOENBQXVCOztJQUV2QixxQ0FBbUQ7O0lBQ25ELHFEQUFrQzs7SUFDbEMsc0RBQWlFOztJQUNqRSw4Q0FBNkI7O0lBQzdCLDRDQVdFOztJQUNGLDRDQVdFOztJQUVGLHFEQUF5Qzs7SUFDekMsaURBQXFDOztJQUNyQyxxREFBeUM7O0lBQ3pDLG1EQUF1Qzs7SUFFdkMsc0NBQTRIOztJQUM1SCwyQ0FBOEM7Ozs7O0lBRWxDLDRDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc2hhcmUsIHNraXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFkZHJlc3NRdWVyeVNlcnZpY2UsIEFkZHJPcHRpb24sIFJlc3VsdE9wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEFkZHJGaWx0ZXJPcHRpb25QaXBlLCBkZWZhdWx0QWRkckZpbHRlck9wdGlvbiB9IGZyb20gJy4vcC1vcHRpb24ucGlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRyZXNzU2VsZWN0U2VydmljZSB7XG4gIC8vIElucHV0IHBhcmFtc1xuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA9IHRydWU7XG4gIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xuICBmaWx0ZXJPcHRpb246IGFueSA9IGRlZmF1bHRBZGRyRmlsdGVyT3B0aW9uO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGxldmVsTGFiZWxzOiBBZGRyT3B0aW9uW10gPSBbXTtcbiAgY3VycmVudExldmVsOiBudW1iZXIgPSAxO1xuICBtYXhMZXZlbDogbnVtYmVyID0gMTtcbiAgc2VwYXJhdG9yID0gJy8nO1xuICAvLyBzZWxlY3RlZFZhbHVlQ2hhbmdlZCBzaG91bGQgZW1pdCBuZ01vZGVsQ2hhbmdlIG9yIG5vdFxuICBwcml2YXRlIGxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgdmFsdWU6IGFueVtdOyBlbWl0OiBib29sZWFuIH0+KHtcbiAgICB2YWx1ZTogW10sXG4gICAgZW1pdDogZmFsc2UsXG4gIH0pO1xuXG4gIC8vIHNlYXJjaFZhbHVlIENoYW5nZVxuICBwcml2YXRlIHNlYXJjaFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIHByaXZhdGUgbGlzdE9mRmlsdGVyZWRPcHRpb246IEFkZHJPcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIG9wZW5SYXckID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBjaGVja1JhdyQgPSBuZXcgU3ViamVjdCgpO1xuICBjbGVhcklucHV0JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHNlYXJjaFZhbHVlID0gJyc7XG4gIGlzU2hvd05vdEZvdW5kID0gZmFsc2U7XG4gIC8vIG9wZW5cbiAgb3BlbiQgPSB0aGlzLm9wZW5SYXckLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gIGxpc3RPZkFjdGl2YXRlZE9wdGlvbjogYW55W10gPSBbXTtcbiAgbGlzdE9mQWN0aXZhdGVkT3B0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PEFkZHJPcHRpb24gfCBudWxsPigxKTtcbiAgc2VsZWN0ZWRPcHRpb246IFJlc3VsdE9wdGlvbjtcbiAgbW9kZWxDaGFuZ2UkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUoXG4gICAgZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbWl0KSxcbiAgICBtYXAoZGF0YSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkYXRhLnZhbHVlO1xuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHNlbGVjdGVkTGlzdDtcbiAgICAgIGxldCBtb2RlbFZhbHVlOiBhbnlbXSB8IG51bGwgPSBudWxsO1xuICAgICAgaWYgKGxlbmd0aCA+IDEpIHtcbiAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdFtsZW5ndGggLSAxXS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICAgIH0pLFxuICApO1xuICBzZWFyY2hWYWx1ZSQgPSB0aGlzLnNlYXJjaFZhbHVlUmF3JC5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgc2tpcCgxKSxcbiAgICBzaGFyZSgpLFxuICAgIHRhcCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBpZiAodmFsdWUpIHtcbiAgICAgIC8vICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvblswXSwgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgICAgLy8gfVxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xuICAgIH0pLFxuICApO1xuICAvLyBhZGRyZXNzIGRhdGFcbiAgbGlzdE9mUHJvdmluY2VPcHRpb25zOiBBZGRyT3B0aW9uW10gPSBbXTtcbiAgbGlzdE9mQ2l0eU9wdGlvbnM6IEFkZHJPcHRpb25bXSA9IFtdO1xuICBsaXN0T2ZEaXN0aW5jdE9wdGlvbnM6IEFkZHJPcHRpb25bXSA9IFtdO1xuICBsaXN0T2ZTdHJlZXRPcHRpb25zOiBBZGRyT3B0aW9uW10gPSBbXTtcblxuICBjaGVjayQgPSBtZXJnZSh0aGlzLmNoZWNrUmF3JCwgdGhpcy5zZWFyY2hWYWx1ZSQsIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uJCwgdGhpcy5vcGVuJCwgdGhpcy5tb2RlbENoYW5nZSQpLnBpcGUoc2hhcmUoKSk7XG4gIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkZHJRdWVyeVNydjogQWRkcmVzc1F1ZXJ5U2VydmljZSkge31cblxuICBnZXRMaXN0QnlDb2RlKGNvZGU/OiBzdHJpbmcsIGxldmVsID0gMCkge1xuICAgIHRoaXMuYWRkclF1ZXJ5U3J2LmdldExpc3RCeUNvZGUoY29kZSkuc3Vic2NyaWJlKGpzb24gPT4ge1xuICAgICAgaWYgKGxldmVsID09PSAwKSB7XG4gICAgICAgIHRoaXMubGlzdE9mUHJvdmluY2VPcHRpb25zID0gWy4uLmpzb25dO1xuICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PT0gMSkge1xuICAgICAgICB0aGlzLmxpc3RPZkNpdHlPcHRpb25zID0gWy4uLmpzb25dO1xuICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PT0gMikge1xuICAgICAgICB0aGlzLmxpc3RPZkRpc3RpbmN0T3B0aW9ucyA9IFsuLi5qc29uXTtcbiAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPT09IDMpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZTdHJlZXRPcHRpb25zID0gWy4uLmpzb25dO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlVGFiKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGluZGV4ICsgMTtcbiAgICB0aGlzLmxldmVsTGFiZWxzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc01heExldmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1heExldmVsID09PSB0aGlzLmN1cnJlbnRMZXZlbDtcbiAgfVxuXG4gIGNsaWNrT3B0aW9uKG9wdGlvbjogQWRkck9wdGlvbik6IHZvaWQge1xuICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGV2ZWwgPSAob3B0aW9uLmxldmVsIGFzIG51bWJlcikgKyAxO1xuICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKG9wdGlvbiwgbGV2ZWwpO1xuICAgIC8vIOiuvue9ruWAvFxuICAgIGlmICh0aGlzLmlzTWF4TGV2ZWwoKSkge1xuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSkge1xuICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgfVxuICAgIHRoaXMuZ2V0TGlzdEJ5Q29kZShvcHRpb24udmFsdWUsIGxldmVsKTtcbiAgICB0aGlzLnRvZ2dsZVRhYihsZXZlbCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZE9wdGlvbihjbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGNsZWFuKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRhYigwKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBtZXJnZU5hbWU6ICcnLFxuICAgICAgfTtcbiAgICAgIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uOiBBZGRyT3B0aW9uW10gPSB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbi5maWx0ZXIobyA9PiBvICYmIG8udmFsdWUpO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzZWxlY3RlZE9wdGlvbjtcbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBsYWJlbCwgdmFsdWUsIGxldmVsIH0gPSBzZWxlY3RlZE9wdGlvbltsZW5ndGggLSAxXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIG1lcmdlTmFtZTogc2VsZWN0ZWRPcHRpb24ubWFwKG8gPT4gby5sYWJlbCkuam9pbih0aGlzLnNlcGFyYXRvciksXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk6IHZvaWQge1xuICAgIGxldCBmaWx0ZXJPcHRpb25MaXN0OiBBZGRyT3B0aW9uW10gPSBbXTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gMSkgZmlsdGVyT3B0aW9uTGlzdCA9IFsuLi50aGlzLmxpc3RPZlByb3ZpbmNlT3B0aW9uc107XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsID09PSAyKSBmaWx0ZXJPcHRpb25MaXN0ID0gWy4uLnRoaXMubGlzdE9mQ2l0eU9wdGlvbnNdO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gMykgZmlsdGVyT3B0aW9uTGlzdCA9IFsuLi50aGlzLmxpc3RPZkRpc3RpbmN0T3B0aW9uc107XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsID09PSA0KSBmaWx0ZXJPcHRpb25MaXN0ID0gWy4uLnRoaXMubGlzdE9mU3RyZWV0T3B0aW9uc107XG5cbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBBZGRyRmlsdGVyT3B0aW9uUGlwZSgpLnRyYW5zZm9ybShcbiAgICAgIGZpbHRlck9wdGlvbkxpc3QsXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlLFxuICAgICAgdGhpcy5maWx0ZXJPcHRpb24sXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaCxcbiAgICApO1xuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBbLi4ubGlzdE9mRmlsdGVyZWRPcHRpb25dO1xuICAgIHRoaXMuaXNTaG93Tm90Rm91bmQgPSAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XG4gIH1cblxuICBjbGVhcklucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJJbnB1dCQubmV4dCgpO1xuICB9XG5cbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10sIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQubmV4dCh7IHZhbHVlLCBlbWl0IH0pO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRPcHRpb24oIXZhbHVlLmxlbmd0aCk7XG4gICAgdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZhdGVkT3B0aW9uKG9wdGlvbjogQWRkck9wdGlvbiB8IG51bGwsIGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbiQubmV4dChvcHRpb24pO1xuXG4gICAgdGhpcy5saXN0T2ZBY3RpdmF0ZWRPcHRpb25bbGV2ZWxdID0gb3B0aW9uO1xuICAgIGlmICh0aGlzLmlzTWF4TGV2ZWwoKSkge1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFsuLi50aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbl0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpOiB2b2lkIHtcbiAgICBjb25zdCByZXNldEFjdGl2YXRlZE9wdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RPZkFjdGl2YXRlZE9wdGlvbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS52YWx1ZSwgdGhpcy5zZWxlY3RlZE9wdGlvblswXSkpO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mQWN0aXZhdGVkT3B0aW9uIHx8IG51bGwsIHRoaXMuY3VycmVudExldmVsKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvbikge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLnZhbHVlLCB0aGlzLmxpc3RPZkFjdGl2YXRlZE9wdGlvblt0aGlzLmN1cnJlbnRMZXZlbF0hLnZhbHVlKSkgfHxcbiAgICAgICAgIXRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uW3RoaXMuY3VycmVudExldmVsXSEudmFsdWUpKVxuICAgICAgKSB7XG4gICAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoVmFsdWVSYXckLm5leHQodmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb25CeUNvZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyUXVlcnlTcnYuZ2V0T3B0aW9uQnlDb2RlKGNvZGUpLnN1YnNjcmliZShqc29uID0+IHtcbiAgICAgIGlmIChqc29uLmNvZGUgPT09IGNvZGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHtcbiAgICAgICAgICBsYWJlbDoganNvbi5uYW1lLFxuICAgICAgICAgIHZhbHVlOiBqc29uLmNvZGUsXG4gICAgICAgICAgbGV2ZWw6IGpzb24ubGV2ZWwsXG4gICAgICAgICAgbWVyZ2VOYW1lOiBqc29uLm1lcmdlck5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbjogQWRkck9wdGlvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMubGlzdE9mQWN0aXZhdGVkT3B0aW9uLmZpbHRlcihpdGVtID0+ICF0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIG9wdGlvbi52YWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShzZWxlY3RlZE9wdGlvbiwgdHJ1ZSk7XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gIH1cblxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5SYXckLm5leHQodmFsdWUpO1xuICAgIC8vIHRoaXMub3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgY2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja1JhdyQubmV4dCgpO1xuICB9XG59XG4iXX0=