/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isInteger, toNumber, InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
export class PaginationComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.firstIndex = 1;
        this.pages = [];
        this.$destroy = new Subject();
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzInTable = false;
        this.nzSize = 'default';
        this.nzPageSizeOptions = [10, 20, 30, 40];
        this.nzDisabled = false;
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzTotal = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    validatePageIndex(value) {
        if (value > this.lastIndex) {
            return this.lastIndex;
        }
        else if (value < this.firstIndex) {
            return this.firstIndex;
        }
        else {
            return value;
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    updatePageIndexValue(page) {
        this.nzPageIndex = page;
        this.nzPageIndexChange.emit(this.nzPageIndex);
        this.buildIndexes();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isPageIndexValid(value) {
        return this.validatePageIndex(value) === value;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    jumpPage(index) {
        if (index !== this.nzPageIndex && !this.nzDisabled) {
            /** @type {?} */
            const pageIndex = this.validatePageIndex(index);
            if (pageIndex !== this.nzPageIndex) {
                this.updatePageIndexValue(pageIndex);
            }
        }
    }
    /**
     * @param {?} diff
     * @return {?}
     */
    jumpDiff(diff) {
        this.jumpPage(this.nzPageIndex + diff);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPageSizeChange($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
        this.buildIndexes();
        if (this.nzPageIndex > this.lastIndex) {
            this.updatePageIndexValue(this.lastIndex);
        }
    }
    /**
     * @param {?} _
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    handleKeyDown(_, input, clearInputValue) {
        /** @type {?} */
        const target = input;
        /** @type {?} */
        const page = toNumber(target.value, this.nzPageIndex);
        if (isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
            this.updatePageIndexValue(page);
        }
        if (clearInputValue) {
            target.value = '';
        }
        else {
            target.value = `${this.nzPageIndex}`;
        }
    }
    /**
     * generate indexes list
     * @return {?}
     */
    buildIndexes() {
        /** @type {?} */
        const pages = [];
        if (this.lastIndex <= 9) {
            for (let i = 2; i <= this.lastIndex - 1; i++) {
                pages.push(i);
            }
        }
        else {
            /** @type {?} */
            const current = +this.nzPageIndex;
            /** @type {?} */
            let left = Math.max(2, current - 2);
            /** @type {?} */
            let right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (let i = left; i <= right; i++) {
                pages.push(i);
            }
        }
        this.pages = pages;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    get lastIndex() {
        return Math.ceil(this.nzTotal / this.nzPageSize);
    }
    /**
     * @return {?}
     */
    get isLastIndex() {
        return this.nzPageIndex === this.lastIndex;
    }
    /**
     * @return {?}
     */
    get isFirstIndex() {
        return this.nzPageIndex === this.firstIndex;
    }
    /**
     * @return {?}
     */
    get ranges() {
        return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
    }
    /**
     * @return {?}
     */
    get showAddOption() {
        return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Pagination');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
            this.buildIndexes();
        }
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'p-pagination',
                exportAs: 'pPagination',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type === 'pre'\">\n    <i nz-icon nzType=\"left\"></i>\n  </a>\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type === 'next'\">\n    <i nz-icon nzType=\"right\"></i>\n  </a>\n  <a *ngIf=\"type == 'page'\">{{ page }}</a>\n</ng-template>\n<ng-container *ngIf=\"(nzHideOnSinglePage && nzTotal > nzPageSize) || !nzHideOnSinglePage\">\n  <ul\n    class=\"ant-pagination\"\n    [class.ant-table-pagination]=\"nzInTable\"\n    [class.ant-pagination-simple]=\"nzSimple\"\n    [class.ant-pagination-disabled]=\"nzDisabled\"\n    [class.mini]=\"nzSize === 'small' && !nzSimple\"\n  >\n    <ng-container *ngIf=\"nzSimple; else normalTemplate\">\n      <li class=\"ant-pagination-prev\" [attr.title]=\"locale.prev_page\" [class.ant-pagination-disabled]=\"isFirstIndex\" (click)=\"jumpDiff(-1)\">\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre' }\"></ng-template>\n      </li>\n      <li [attr.title]=\"nzPageIndex + '/' + lastIndex\" class=\"ant-pagination-simple-pager\">\n        <input\n          #simplePagerInput\n          [disabled]=\"nzDisabled\"\n          [value]=\"nzPageIndex\"\n          (keydown.enter)=\"handleKeyDown($event, simplePagerInput, false)\"\n          size=\"3\"\n        />\n        <span class=\"ant-pagination-slash\">\uFF0F</span>\n        {{ lastIndex }}\n      </li>\n      <li class=\"ant-pagination-next\" [attr.title]=\"locale.next_page\" [class.ant-pagination-disabled]=\"isLastIndex\" (click)=\"jumpDiff(1)\">\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next' }\"></ng-template>\n      </li>\n    </ng-container>\n    <ng-template #normalTemplate>\n      <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\n        <ng-template [ngTemplateOutlet]=\"nzShowTotal\" [ngTemplateOutletContext]=\"{ $implicit: nzTotal, range: ranges }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-prev\" [attr.title]=\"locale.prev_page\" [class.ant-pagination-disabled]=\"isFirstIndex\" (click)=\"jumpDiff(-1)\">\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre' }\"></ng-template>\n      </li>\n      <li\n        class=\"ant-pagination-item\"\n        [attr.title]=\"firstIndex\"\n        [class.ant-pagination-item-active]=\"isFirstIndex\"\n        (click)=\"jumpPage(firstIndex)\"\n      >\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page', page: firstIndex }\"></ng-template>\n      </li>\n      <li\n        class=\"ant-pagination-jump-prev\"\n        *ngIf=\"lastIndex > 9 && nzPageIndex - 3 > firstIndex\"\n        [attr.title]=\"locale.prev_5\"\n        (click)=\"jumpDiff(-5)\"\n      >\n        <a class=\"ant-pagination-item-link\">\n          <div class=\"ant-pagination-item-container\">\n            <i nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n          </div>\n        </a>\n      </li>\n      <li\n        class=\"ant-pagination-item\"\n        *ngFor=\"let page of pages\"\n        [attr.title]=\"page\"\n        [class.ant-pagination-item-active]=\"nzPageIndex === page\"\n        (click)=\"jumpPage(page)\"\n      >\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page', page: page }\"></ng-template>\n      </li>\n      <li\n        class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\n        [attr.title]=\"locale.next_5\"\n        (click)=\"jumpDiff(5)\"\n        *ngIf=\"lastIndex > 9 && nzPageIndex + 3 < lastIndex\"\n      >\n        <a class=\"ant-pagination-item-link\">\n          <div class=\"ant-pagination-item-container\">\n            <i nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n          </div>\n        </a>\n      </li>\n      <li\n        class=\"ant-pagination-item\"\n        [attr.title]=\"lastIndex\"\n        (click)=\"jumpPage(lastIndex)\"\n        *ngIf=\"lastIndex > 0 && lastIndex !== firstIndex\"\n        [class.ant-pagination-item-active]=\"isLastIndex\"\n      >\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page', page: lastIndex }\"></ng-template>\n      </li>\n      <li class=\"ant-pagination-next\" [title]=\"locale.next_page\" [class.ant-pagination-disabled]=\"isLastIndex\" (click)=\"jumpDiff(1)\">\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next' }\"></ng-template>\n      </li>\n      <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper || nzShowSizeChanger\">\n        <nz-select\n          class=\"ant-pagination-options-size-changer\"\n          *ngIf=\"nzShowSizeChanger\"\n          [nzDisabled]=\"nzDisabled\"\n          [nzSize]=\"nzSize\"\n          [ngModel]=\"nzPageSize\"\n          (ngModelChange)=\"onPageSizeChange($event)\"\n        >\n          <nz-option *ngFor=\"let option of nzPageSizeOptions\" [nzLabel]=\"option + locale.items_per_page\" [nzValue]=\"option\"> </nz-option>\n          <nz-option *ngIf=\"showAddOption\" [nzLabel]=\"nzPageSize + locale.items_per_page\" [nzValue]=\"nzPageSize\"> </nz-option>\n        </nz-select>\n        <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"nzShowQuickJumper\">\n          {{ locale.jump_to }}\n          <input #quickJumperInput [disabled]=\"nzDisabled\" (keydown.enter)=\"handleKeyDown($event, quickJumperInput, true)\" />\n          {{ locale.page }}\n        </div>\n      </div>\n    </ng-template>\n  </ul>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
PaginationComponent.propDecorators = {
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzShowTotal: [{ type: Input }],
    nzInTable: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzItemRender: [{ type: Input }, { type: ViewChild, args: ['renderItemTemplate', { static: true },] }],
    nzDisabled: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "nzShowSizeChanger", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "nzHideOnSinglePage", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "nzShowQuickJumper", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "nzSimple", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "nzTotal", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "nzPageIndex", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "nzPageSize", void 0);
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.locale;
    /** @type {?} */
    PaginationComponent.prototype.firstIndex;
    /** @type {?} */
    PaginationComponent.prototype.pages;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.$destroy;
    /** @type {?} */
    PaginationComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    PaginationComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    PaginationComponent.prototype.nzShowTotal;
    /** @type {?} */
    PaginationComponent.prototype.nzInTable;
    /** @type {?} */
    PaginationComponent.prototype.nzSize;
    /** @type {?} */
    PaginationComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    PaginationComponent.prototype.nzItemRender;
    /** @type {?} */
    PaginationComponent.prototype.nzDisabled;
    /** @type {?} */
    PaginationComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    PaginationComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    PaginationComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    PaginationComponent.prototype.nzSimple;
    /** @type {?} */
    PaginationComponent.prototype.nzTotal;
    /** @type {?} */
    PaginationComponent.prototype.nzPageIndex;
    /** @type {?} */
    PaginationComponent.prototype.nzPageSize;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS9wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibnotcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFVbkQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUE2SDlCLFlBQW9CLElBQW1CLEVBQVUsR0FBc0I7UUFBbkQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQTNIdkUsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNiLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3BCLHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFF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SUFDbkQsaURBQW9EOztJQUNwRCxnREFBbUQ7O0lBQ25ELHVDQUEwQzs7SUFDMUMsc0NBQW9DOztJQUNwQywwQ0FBd0M7O0lBQ3hDLHlDQUF3Qzs7Ozs7SUFzRzVCLG1DQUEyQjs7Ozs7SUFBRSxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0ludGVnZXIsIHRvTnVtYmVyLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLXBhZ2luYXRpb24nLFxuICBleHBvcnRBczogJ3BQYWdpbmF0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBmaXJzdEluZGV4ID0gMTtcbiAgcGFnZXM6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcbiAgQElucHV0KCkgbnpJblRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpQYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDBdO1xuICBASW5wdXQoKSBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHtcbiAgICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcbiAgICBwYWdlOiBudW1iZXI7XG4gIH0+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VG90YWwgPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelBhZ2VJbmRleCA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGFnZVNpemUgPSAxMDtcblxuICB2YWxpZGF0ZVBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodmFsdWUgPiB0aGlzLmxhc3RJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPCB0aGlzLmZpcnN0SW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpcnN0SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlSW5kZXhWYWx1ZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm56UGFnZUluZGV4ID0gcGFnZTtcbiAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgfVxuXG4gIGlzUGFnZUluZGV4VmFsaWQodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUGFnZUluZGV4KHZhbHVlKSA9PT0gdmFsdWU7XG4gIH1cblxuICBqdW1wUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ICE9PSB0aGlzLm56UGFnZUluZGV4ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHBhZ2VJbmRleCA9IHRoaXMudmFsaWRhdGVQYWdlSW5kZXgoaW5kZXgpO1xuICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VJbmRleFZhbHVlKHBhZ2VJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAganVtcERpZmYoZGlmZjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLm56UGFnZUluZGV4ICsgZGlmZik7XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlKCRldmVudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelBhZ2VTaXplID0gJGV2ZW50O1xuICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5lbWl0KCRldmVudCk7XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgICBpZiAodGhpcy5uelBhZ2VJbmRleCA+IHRoaXMubGFzdEluZGV4KSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VJbmRleFZhbHVlKHRoaXMubGFzdEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKF86IEtleWJvYXJkRXZlbnQsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBjbGVhcklucHV0VmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBpbnB1dDtcbiAgICBjb25zdCBwYWdlID0gdG9OdW1iZXIodGFyZ2V0LnZhbHVlLCB0aGlzLm56UGFnZUluZGV4KTtcbiAgICBpZiAoaXNJbnRlZ2VyKHBhZ2UpICYmIHRoaXMuaXNQYWdlSW5kZXhWYWxpZChwYWdlKSAmJiBwYWdlICE9PSB0aGlzLm56UGFnZUluZGV4KSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VJbmRleFZhbHVlKHBhZ2UpO1xuICAgIH1cbiAgICBpZiAoY2xlYXJJbnB1dFZhbHVlKSB7XG4gICAgICB0YXJnZXQudmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnZhbHVlID0gYCR7dGhpcy5uelBhZ2VJbmRleH1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBnZW5lcmF0ZSBpbmRleGVzIGxpc3QgKi9cbiAgYnVpbGRJbmRleGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xuICAgIGlmICh0aGlzLmxhc3RJbmRleCA8PSA5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSB0aGlzLmxhc3RJbmRleCAtIDE7IGkrKykge1xuICAgICAgICBwYWdlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gK3RoaXMubnpQYWdlSW5kZXg7XG4gICAgICBsZXQgbGVmdCA9IE1hdGgubWF4KDIsIGN1cnJlbnQgLSAyKTtcbiAgICAgIGxldCByaWdodCA9IE1hdGgubWluKGN1cnJlbnQgKyAyLCB0aGlzLmxhc3RJbmRleCAtIDEpO1xuICAgICAgaWYgKGN1cnJlbnQgLSAxIDw9IDIpIHtcbiAgICAgICAgcmlnaHQgPSA1O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGFzdEluZGV4IC0gY3VycmVudCA8PSAyKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmxhc3RJbmRleCAtIDQ7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucGFnZXMgPSBwYWdlcztcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBsYXN0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMubnpUb3RhbCAvIHRoaXMubnpQYWdlU2l6ZSk7XG4gIH1cblxuICBnZXQgaXNMYXN0SW5kZXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPT09IHRoaXMubGFzdEluZGV4O1xuICB9XG5cbiAgZ2V0IGlzRmlyc3RJbmRleCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VJbmRleCA9PT0gdGhpcy5maXJzdEluZGV4O1xuICB9XG5cbiAgZ2V0IHJhbmdlcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFsodGhpcy5uelBhZ2VJbmRleCAtIDEpICogdGhpcy5uelBhZ2VTaXplICsgMSwgTWF0aC5taW4odGhpcy5uelBhZ2VJbmRleCAqIHRoaXMubnpQYWdlU2l6ZSwgdGhpcy5uelRvdGFsKV07XG4gIH1cblxuICBnZXQgc2hvd0FkZE9wdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VTaXplT3B0aW9ucy5pbmRleE9mKHRoaXMubnpQYWdlU2l6ZSkgPT09IC0xO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1BhZ2luYXRpb24nKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VG90YWwgfHwgY2hhbmdlcy5uelBhZ2VTaXplIHx8IGNoYW5nZXMubnpQYWdlSW5kZXgpIHtcbiAgICAgIHRoaXMuYnVpbGRJbmRleGVzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=