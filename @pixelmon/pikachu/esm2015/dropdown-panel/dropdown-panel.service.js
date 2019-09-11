/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from 'ng-zorro-antd/core';
import { defaultFilterOption, PanelFilterOptionPipe } from './p-option.pipe';
export class DropdownPanelService {
    constructor() {
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
        data => data.value)));
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
            /** @type {?} */
            let modelValue = null;
            if (this.isSingleMode) {
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
        value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0]);
            }
            this.updateListOfFilteredOption();
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
        data => {
            this.listOfSelectedValue = data[0];
            this.listOfPOption = data[1].listOfPOption;
            // console.log(JSON.stringify(this.listOfPOption));
            this.updateListOfFilteredOption();
            this.resetActivatedOptionIfNeeded();
            this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clickOption(option) {
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ */
        if (!option.disabled) {
            this.updateActivatedOption(option);
            this.listOfPOption.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                item.checked = false;
            }));
            option.checked = true;
            /** @type {?} */
            let listOfSelectedValue = [...this.listOfSelectedValue];
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
    }
    /**
     * @return {?}
     */
    updateListOfCachedOption() {
        /** @type {?} */
        const selectedOption = this.listOfPOption.find((/**
         * @param {?} o
         * @return {?}
         */
        o => this.compareWith(o.value, this.listOfSelectedValue[0])));
        if (!isNil(selectedOption)) {
            this.listOfCachedSelectedOption = [selectedOption];
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilteredOption() {
        /** @type {?} */
        const listOfFilteredOption = new PanelFilterOptionPipe().transform(this.listOfPOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = [...listOfFilteredOption];
        this.isShowNotFound = !this.listOfFilteredOption.length;
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.clearInput$.next();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
    }
    /**
     * @param {?} option
     * @return {?}
     */
    updateActivatedOption(option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
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
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    splitBySeparators(str, separators) {
        /** @type {?} */
        const reg = new RegExp(`[${separators.join()}]`);
        /** @type {?} */
        const array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        token => token));
        return Array.from(new Set(array));
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
            const activatedOption = this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.value, this.listOfSelectedValue[0])));
            this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.value, (/** @type {?} */ (this.activatedOption)).value))) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.compareWith(item, (/** @type {?} */ (this.activatedOption)).value)))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    /**
     * @param {?} listOfPOption
     * @return {?}
     */
    updateTemplateOption(listOfPOption) {
        this.mapOfTemplateOption$.next({ listOfPOption });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    updateSelectedValueByLabelList(listOfLabel) {
        /** @type {?} */
        const listOfSelectedValue = [...this.listOfSelectedValue];
        /** @type {?} */
        const listOfMatchOptionValue = this.listOfFilteredOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => listOfLabel.indexOf(item.label) !== -1))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.value))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !isNotNil(this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        v => this.compareWith(v, item))))));
        /** @type {?} */
        const listOfUnMatchOptionValue = listOfLabel.filter((/**
         * @param {?} label
         * @return {?}
         */
        label => this.listOfFilteredOption.map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.label)).indexOf(label) === -1));
        this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue, ...listOfUnMatchOptionValue], true);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.disabled));
        /** @type {?} */
        const activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item === this.activatedOption));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                const nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
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
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    removeValueFormSelected(option) {
        if (this.disabled || option.disabled) {
            return;
        }
        /** @type {?} */
        const listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !this.compareWith(item, option.value)));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        this.openRaw$.next(value);
        this.open = value;
    }
    /**
     * @return {?}
     */
    check() {
        this.checkRaw$.next();
    }
    /**
     * @return {?}
     */
    get isSingleMode() {
        return this.mode === 'default';
    }
}
DropdownPanelService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tcGFuZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2Ryb3Bkb3duLXBhbmVsLyIsInNvdXJjZXMiOlsiZHJvcGRvd24tcGFuZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHN0UsTUFBTSxPQUFPLG9CQUFvQjtJQURqQzs7UUFHRSx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBUSxtQkFBbUIsQ0FBQztRQUN4QyxTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7UUFJVCxpQ0FBNEIsR0FBRyxJQUFJLGVBQWUsQ0FBa0M7WUFDMUYsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQzs7UUFFSyx5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FFL0M7WUFDRCxhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDLENBQUM7O1FBRUssb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUNsRCx5QkFBb0IsR0FBYyxFQUFFLENBQUM7UUFDckMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsbUJBQWMsR0FBRyxLQUFLLENBQUM7O1FBRXZCLFVBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFFbkQscUJBQWdCLEdBQUcsSUFBSSxhQUFhLENBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3hELHlCQUFvQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDdkYsaUJBQVksR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUNuRCxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQ3pCLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTs7a0JBQ0gsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLOztnQkFDM0IsVUFBVSxHQUFpQixJQUFJO1lBQ25DLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO29CQUN2QixVQUFVLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM5QjthQUNGO2lCQUFNO2dCQUNMLFVBQVUsR0FBRyxZQUFZLENBQUM7YUFDM0I7WUFDRCxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0YsaUJBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDdEMsb0JBQW9CLEVBQUUsRUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEtBQUssRUFBRSxFQUNQLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxRDtZQUNELElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUNILENBQUM7O1FBRUYsd0JBQW1CLEdBQVUsRUFBRSxDQUFDOztRQUVoQyxrQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUM5QiwrQkFBMEIsR0FBYyxFQUFFLENBQUM7O1FBRTNDLG1CQUFjLEdBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN6RixHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUMzQyxtREFBbUQ7WUFDbkQsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbEMsQ0FBQyxFQUFDLEVBQ0YsS0FBSyxFQUFFLENBQ1IsQ0FBQztRQUNGLFdBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDL0gsS0FBSyxFQUFFLENBQ1IsQ0FBQzs7UUFFRixnQkFBVzs7Ozs7UUFBRyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUM7SUE4S2hELENBQUM7Ozs7O0lBNUtDLFdBQVcsQ0FBQyxNQUFlO1FBQ3pCLDZGQUE2RjtRQUM3RixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O2dCQUNsQixtQkFBbUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0QsbUJBQW1CLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsd0JBQXdCOztjQUNoQixjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7Ozs7SUFFRCwwQkFBMEI7O2NBQ2xCLG9CQUFvQixHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxTQUFTLENBQ2hFLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxZQUFZLENBQ2xCO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lBR0QseUJBQXlCLENBQUMsS0FBWSxFQUFFLElBQWE7UUFDbkQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsTUFBc0I7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFzQixFQUFFLFVBQW9CO1FBQzdELHlDQUF5QztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMxQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLEdBQXNCLEVBQUUsVUFBb0I7O2NBQ3RELEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDOztjQUMxQyxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxHQUFHLEVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUM7UUFDL0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELDRCQUE0Qjs7Y0FDcEIsb0JBQW9COzs7UUFBRyxHQUFHLEVBQUU7O2tCQUMxQixlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUk7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztZQUN6SCxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQTtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUNFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUk7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxtQkFBQSxJQUFJLENBQUMsZUFBZSxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUM7Z0JBQ2xHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUk7Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxtQkFBQSxJQUFJLENBQUMsZUFBZSxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsRUFDM0Y7Z0JBQ0Esb0JBQW9CLEVBQUUsQ0FBQzthQUN4QjtTQUNGO2FBQU07WUFDTCxvQkFBb0IsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxhQUF3QjtRQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCw4QkFBOEIsQ0FBQyxXQUFxQjs7Y0FDNUMsbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzs7Y0FDbkQsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjthQUNyRCxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQzthQUN0RCxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2FBQ3ZCLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUM7O2NBRXJGLHdCQUF3QixHQUFHLFdBQVcsQ0FBQyxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQztRQUNySSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLEdBQUcsc0JBQXNCLEVBQUUsR0FBRyx3QkFBd0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLENBQWdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7O2NBQ0ssT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPOztjQUNuQixtQ0FBbUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDOztjQUM5RixjQUFjLEdBQUcsbUNBQW1DLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUM7UUFDM0csUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFFBQVE7Z0JBQ1gsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOztzQkFDYixRQUFRLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsbUNBQW1DLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3pHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQ0FBbUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7c0JBQ2IsU0FBUyxHQUFHLGNBQWMsR0FBRyxtQ0FBbUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRyxJQUFJLENBQUMscUJBQXFCLENBQUMsbUNBQW1DLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO3dCQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekI7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUNwQjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07U0FDVDtJQUNILENBQUM7Ozs7OztJQUdELHVCQUF1QixDQUFDLE1BQWU7UUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDcEMsT0FBTztTQUNSOztjQUNLLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQztRQUMxRyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2pDLENBQUM7OztZQWpRRixVQUFVOzs7O0lBR1Qsb0RBQTRCOztJQUM1Qiw0Q0FBcUI7O0lBQ3JCLDRDQUF3Qzs7SUFDeEMsb0NBQWlCOztJQUNqQixnREFBNEI7O0lBQzVCLHdDQUFpQjs7Ozs7SUFJakIsNERBR0c7Ozs7O0lBRUgsb0RBSUc7Ozs7O0lBRUgsK0NBQTBEOzs7OztJQUMxRCxvREFBNkM7Ozs7O0lBQzdDLHdDQUEwQzs7Ozs7SUFDMUMseUNBQWtDOzs7OztJQUNsQyxvQ0FBcUI7O0lBQ3JCLDJDQUFxQzs7SUFDckMsMkNBQWlCOztJQUNqQiw4Q0FBdUI7O0lBRXZCLHFDQUFtRDs7SUFDbkQsK0NBQWdDOztJQUNoQyxnREFBd0Q7O0lBQ3hELG9EQUF1Rjs7SUFDdkYsNENBY0U7O0lBQ0YsNENBV0U7O0lBRUYsbURBQWdDOztJQUVoQyw2Q0FBOEI7O0lBQzlCLDBEQUEyQzs7SUFFM0MsOENBVUU7O0lBQ0Ysc0NBRUU7O0lBRUYsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFDS1NQQUNFLCBET1dOX0FSUk9XLCBFTlRFUiwgU1BBQ0UsIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIEJlaGF2aW9yU3ViamVjdCwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzaGFyZSwgc2tpcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc05pbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgUE9wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIFBhbmVsRmlsdGVyT3B0aW9uUGlwZSB9IGZyb20gJy4vcC1vcHRpb24ucGlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blBhbmVsU2VydmljZSB7XG4gIC8vIElucHV0IHBhcmFtc1xuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA9IHRydWU7XG4gIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xuICBmaWx0ZXJPcHRpb246IGFueSA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIG1vZGUgPSAnZGVmYXVsdCc7XG4gIG1heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvLyBzZWxlY3RlZFZhbHVlQ2hhbmdlZCBzaG91bGQgZW1pdCBuZ01vZGVsQ2hhbmdlIG9yIG5vdFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyB2YWx1ZTogYW55W107IGVtaXQ6IGJvb2xlYW4gfT4oe1xuICAgIHZhbHVlOiBbXSxcbiAgICBlbWl0OiBmYWxzZSxcbiAgfSk7XG4gIC8vIERhdGEgQ2hhbmdlXG4gIHByaXZhdGUgbWFwT2ZUZW1wbGF0ZU9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHtcbiAgICBsaXN0T2ZQT3B0aW9uOiBQT3B0aW9uW107XG4gIH0+KHtcbiAgICBsaXN0T2ZQT3B0aW9uOiBbXSxcbiAgfSk7XG4gIC8vIHNlYXJjaFZhbHVlIENoYW5nZVxuICBwcml2YXRlIHNlYXJjaFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIHByaXZhdGUgbGlzdE9mRmlsdGVyZWRPcHRpb246IFBPcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIG9wZW5SYXckID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBjaGVja1JhdyQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIG9wZW4gPSBmYWxzZTtcbiAgY2xlYXJJbnB1dCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBzZWFyY2hWYWx1ZSA9ICcnO1xuICBpc1Nob3dOb3RGb3VuZCA9IGZhbHNlO1xuICAvLyBvcGVuXG4gIG9wZW4kID0gdGhpcy5vcGVuUmF3JC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICBhY3RpdmF0ZWRPcHRpb246IFBPcHRpb24gfCBudWxsO1xuICBhY3RpdmF0ZWRPcHRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8UE9wdGlvbiB8IG51bGw+KDEpO1xuICBsaXN0T2ZTZWxlY3RlZFZhbHVlJCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5waXBlKG1hcChkYXRhID0+IGRhdGEudmFsdWUpKTtcbiAgbW9kZWxDaGFuZ2UkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUoXG4gICAgZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbWl0KSxcbiAgICBtYXAoZGF0YSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkYXRhLnZhbHVlO1xuICAgICAgbGV0IG1vZGVsVmFsdWU6IGFueVtdIHwgbnVsbCA9IG51bGw7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0WzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gICAgfSksXG4gICk7XG4gIHNlYXJjaFZhbHVlJCA9IHRoaXMuc2VhcmNoVmFsdWVSYXckLnBpcGUoXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICBza2lwKDEpLFxuICAgIHNoYXJlKCksXG4gICAgdGFwKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbih0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uWzBdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcbiAgICB9KSxcbiAgKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXSA9IFtdO1xuICAvLyBkYXRhXG4gIGxpc3RPZlBPcHRpb246IFBPcHRpb25bXSA9IFtdO1xuICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogUE9wdGlvbltdID0gW107XG4gIC8vIHNlbGVjdGVkIHZhbHVlIG9yIERhdGEgY2hhbmdlXG4gIHZhbHVlT3JPcHRpb24kID0gY29tYmluZUxhdGVzdChbdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlJCwgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJF0pLnBpcGUoXG4gICAgdGFwKGRhdGEgPT4ge1xuICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gZGF0YVswXTtcbiAgICAgIHRoaXMubGlzdE9mUE9wdGlvbiA9IGRhdGFbMV0ubGlzdE9mUE9wdGlvbjtcbiAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdE9mUE9wdGlvbikpO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpO1xuICAgIH0pLFxuICAgIHNoYXJlKCksXG4gICk7XG4gIGNoZWNrJCA9IG1lcmdlKHRoaXMuY2hlY2tSYXckLCB0aGlzLnZhbHVlT3JPcHRpb24kLCB0aGlzLnNlYXJjaFZhbHVlJCwgdGhpcy5hY3RpdmF0ZWRPcHRpb24kLCB0aGlzLm9wZW4kLCB0aGlzLm1vZGVsQ2hhbmdlJCkucGlwZShcbiAgICBzaGFyZSgpLFxuICApO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBjbGlja09wdGlvbihvcHRpb246IFBPcHRpb24pOiB2b2lkIHtcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IG5leHQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgKi9cbiAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcbiAgICAgIHRoaXMubGlzdE9mUE9wdGlvbi5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBvcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICBsZXQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVdO1xuICAgICAgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbMF0sIG9wdGlvbi52YWx1ZSkpIHtcbiAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtvcHRpb24udmFsdWVdO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dG9DbGVhclNlYXJjaFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMubGlzdE9mUE9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLnZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pKTtcbiAgICBpZiAoIWlzTmlsKHNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IFtzZWxlY3RlZE9wdGlvbl07XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb24gPSBuZXcgUGFuZWxGaWx0ZXJPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxuICAgICAgdGhpcy5saXN0T2ZQT3B0aW9uLFxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSxcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxuICAgICAgdGhpcy5zZXJ2ZXJTZWFyY2gsXG4gICAgKTtcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gWy4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXTtcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24ubGVuZ3RoO1xuICB9XG5cbiAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFySW5wdXQkLm5leHQoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10sIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQubmV4dCh7IHZhbHVlLCBlbWl0IH0pO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZhdGVkT3B0aW9uKG9wdGlvbjogUE9wdGlvbiB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiQubmV4dChvcHRpb24pO1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uID0gb3B0aW9uO1xuICB9XG5cbiAgaW5jbHVkZXNTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcGFyYXRvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChzdHIubGFzdEluZGV4T2Yoc2VwYXJhdG9yc1tpXSkgPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzcGxpdEJ5U2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGBbJHtzZXBhcmF0b3JzLmpvaW4oKX1dYCk7XG4gICAgY29uc3QgYXJyYXkgPSAoc3RyIGFzIHN0cmluZykuc3BsaXQocmVnKS5maWx0ZXIodG9rZW4gPT4gdG9rZW4pO1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGVkT3B0aW9uSWZOZWVkZWQoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzZXRBY3RpdmF0ZWRPcHRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmF0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0udmFsdWUsIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSkpO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24oYWN0aXZhdGVkT3B0aW9uIHx8IG51bGwpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0udmFsdWUsIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS52YWx1ZSkpIHx8XG4gICAgICAgICF0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLnZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRlbXBsYXRlT3B0aW9uKGxpc3RPZlBPcHRpb246IFBPcHRpb25bXSk6IHZvaWQge1xuICAgIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiQubmV4dCh7IGxpc3RPZlBPcHRpb24gfSk7XG4gIH1cblxuICB1cGRhdGVTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZVJhdyQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZFZhbHVlQnlMYWJlbExpc3QobGlzdE9mTGFiZWw6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVdO1xuICAgIGNvbnN0IGxpc3RPZk1hdGNoT3B0aW9uVmFsdWUgPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gbGlzdE9mTGFiZWwuaW5kZXhPZihpdGVtLmxhYmVsKSAhPT0gLTEpXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXNOb3ROaWwodGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0pKSkpO1xuXG4gICAgY29uc3QgbGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlID0gbGlzdE9mTGFiZWwuZmlsdGVyKGxhYmVsID0+IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24ubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCkuaW5kZXhPZihsYWJlbCkgPT09IC0xKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoWy4uLmxpc3RPZlNlbGVjdGVkVmFsdWUsIC4uLmxpc3RPZk1hdGNoT3B0aW9uVmFsdWUsIC4uLmxpc3RPZlVuTWF0Y2hPcHRpb25WYWx1ZV0sIHRydWUpO1xuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kaXNhYmxlZCk7XG4gICAgY29uc3QgYWN0aXZhdGVkSW5kZXggPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByZUluZGV4ID0gYWN0aXZhdGVkSW5kZXggPiAwID8gYWN0aXZhdGVkSW5kZXggLSAxIDogbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRbcHJlSW5kZXhdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZhdGVkSW5kZXggPCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZC5sZW5ndGggLSAxID8gYWN0aXZhdGVkSW5kZXggKyAxIDogMDtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRbbmV4dEluZGV4XSk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24gJiYgIXRoaXMuYWN0aXZhdGVkT3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMub3Blbikge1xuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uOiBQT3B0aW9uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKGl0ZW0gPT4gIXRoaXMuY29tcGFyZVdpdGgoaXRlbSwgb3B0aW9uLnZhbHVlKSk7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICB9XG5cbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuUmF3JC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLm9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tSYXckLm5leHQoKTtcbiAgfVxuXG4gIGdldCBpc1NpbmdsZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RlZmF1bHQnO1xuICB9XG59XG4iXX0=