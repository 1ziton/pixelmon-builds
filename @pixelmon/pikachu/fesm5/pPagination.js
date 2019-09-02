import { CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Output, Input, ViewChild, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { __decorate, __metadata } from 'tslib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toNumber, isInteger, InputBoolean, InputNumber } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(i18n, cdr) {
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
    PaginationComponent.prototype.validatePageIndex = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value > this.lastIndex) {
            return this.lastIndex;
        }
        else if (value < this.firstIndex) {
            return this.firstIndex;
        }
        else {
            return value;
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.updatePageIndexValue = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.nzPageIndex = page;
        this.nzPageIndexChange.emit(this.nzPageIndex);
        this.buildIndexes();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.isPageIndexValid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.validatePageIndex(value) === value;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PaginationComponent.prototype.jumpPage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index !== this.nzPageIndex && !this.nzDisabled) {
            /** @type {?} */
            var pageIndex = this.validatePageIndex(index);
            if (pageIndex !== this.nzPageIndex) {
                this.updatePageIndexValue(pageIndex);
            }
        }
    };
    /**
     * @param {?} diff
     * @return {?}
     */
    PaginationComponent.prototype.jumpDiff = /**
     * @param {?} diff
     * @return {?}
     */
    function (diff) {
        this.jumpPage(this.nzPageIndex + diff);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PaginationComponent.prototype.onPageSizeChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
        this.buildIndexes();
        if (this.nzPageIndex > this.lastIndex) {
            this.updatePageIndexValue(this.lastIndex);
        }
    };
    /**
     * @param {?} _
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    PaginationComponent.prototype.handleKeyDown = /**
     * @param {?} _
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    function (_, input, clearInputValue) {
        /** @type {?} */
        var target = input;
        /** @type {?} */
        var page = toNumber(target.value, this.nzPageIndex);
        if (isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
            this.updatePageIndexValue(page);
        }
        if (clearInputValue) {
            target.value = '';
        }
        else {
            target.value = "" + this.nzPageIndex;
        }
    };
    /** generate indexes list */
    /**
     * generate indexes list
     * @return {?}
     */
    PaginationComponent.prototype.buildIndexes = /**
     * generate indexes list
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pages = [];
        if (this.lastIndex <= 9) {
            for (var i = 2; i <= this.lastIndex - 1; i++) {
                pages.push(i);
            }
        }
        else {
            /** @type {?} */
            var current = +this.nzPageIndex;
            /** @type {?} */
            var left = Math.max(2, current - 2);
            /** @type {?} */
            var right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (var i = left; i <= right; i++) {
                pages.push(i);
            }
        }
        this.pages = pages;
        this.cdr.markForCheck();
    };
    Object.defineProperty(PaginationComponent.prototype, "lastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.nzTotal / this.nzPageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "isLastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "isFirstIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.firstIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "ranges", {
        get: /**
         * @return {?}
         */
        function () {
            return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "showAddOption", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Pagination');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PaginationComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
            this.buildIndexes();
        }
    };
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
    PaginationComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef }
    ]; };
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
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "nzShowSizeChanger", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "nzHideOnSinglePage", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "nzShowQuickJumper", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "nzSimple", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "nzTotal", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "nzPageIndex", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "nzPageSize", void 0);
    return PaginationComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PaginationComponent],
                    exports: [PaginationComponent],
                    imports: [CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]
                },] }
    ];
    return PaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PaginationComponent, PaginationModule };
//# sourceMappingURL=pPagination.js.map
