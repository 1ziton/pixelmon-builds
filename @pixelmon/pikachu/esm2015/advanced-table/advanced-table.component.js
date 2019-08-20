/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 表格组件
 * @Author: zomixi
 * @Date: 2019-07-05 10:06:41
 */
import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AdvancedCellComponent } from './advanced-cell.component';
import { AdvancedFilterComponent } from './advanced-filter.component';
export class AdvancedTableComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer2
     */
    constructor(_elementRef, _renderer2) {
        this._elementRef = _elementRef;
        this._renderer2 = _renderer2;
        this.columns = []; // 列数据
        // 列数据
        this.data = { data: [], totalSize: 0 }; // 表格数据
        // 表格数据
        this.selections = []; // 已选项
        // 固定表头，滚动
        this.loading = false; // 表格loading
        // 表格loading
        this.pageSize = 10; // 显示条数
        // 显示条数
        this.frontPagination = false; // 是否前端分页
        // 是否前端分页
        this.showPagination = true; // 是否显示分页器
        // 是否显示分页器
        this.fixedPagination = false; // 是否固定分页器
        // 是否固定分页器
        this.showSizeChanger = true; // 是否显示条数切换器
        // 是否显示条数切换器
        this.size = 'middle'; // 表格size
        // 表格size
        this.pageSizeOptions = [10, 30, 50, 100]; // 页数选择器可选值
        // 页数选择器可选值
        this.showCheckbox = false; // 是否显示复选框
        // title模板
        this.columnsChange = new EventEmitter(); // 列数据改变事件 用于双向绑定
        // 列数据改变事件 用于双向绑定
        this.selectionsChange = new EventEmitter(); // 已选项改变事件 用于双向绑定
        // 已选项改变事件 用于双向绑定
        this.load = new EventEmitter(); // load事件
        // load事件
        this.sort = new EventEmitter(); // 排序事件
        // 排序事件
        this.linkClick = new EventEmitter(); // 链接点击事件
        // 自定义搜索组件
        this.load$ = new Subject(); // load流
        // load流
        this.displayData = []; // 当前显示数据
        // 当前显示数据
        this.pageIndex = 1; // 当前页码
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.data) {
            // 重走sort
            if (this.sortParams && this.sortParams.key && this.sortParams.value) {
                this.onSort(this.sortParams);
            }
        }
        if (changes.columns) {
            // 是下拉选择的自动添加词典
            changes.columns.currentValue.forEach((/**
             * @param {?} column
             * @return {?}
             */
            column => {
                if (column.showFilter && column.filterType === 'select' && Array.isArray(column.filterOptions)) {
                    column.lexicon = column.lexicon ? [...column.lexicon, ...column.filterOptions] : column.filterOptions;
                }
            }));
        }
        if (changes.selections) {
            this.updateCheckedBySelections();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /* tslint:disable */
        this.load$.pipe(debounceTime(20)).subscribe((/**
         * @return {?}
         */
        () => {
            // 清空selections
            this.selections = [];
            this.selectionsChange.emit(this.selections);
            // 发出load事件
            this.load.emit({ page: this.pageIndex, size: this.pageSize });
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // 页面初始化完成后自动load一次
        this.load$.next();
        if (this.fixedPagination) {
            this.toFixedPagination();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // 赋值自定义单元格
        this.customCells.forEach((/**
         * @param {?} customCell
         * @return {?}
         */
        customCell => {
            /** @type {?} */
            const findedColumn = this.columns.find((/**
             * @param {?} column
             * @return {?}
             */
            column => column.field === customCell.field));
            if (findedColumn)
                findedColumn.customCell = customCell.templateRef;
        }));
        // 赋值自定义搜索组件
        this.customFilters.forEach((/**
         * @param {?} customFilter
         * @return {?}
         */
        customFilter => {
            /** @type {?} */
            const findedColumn = this.columns.find((/**
             * @param {?} column
             * @return {?}
             */
            column => column.field === customFilter.field));
            if (findedColumn) {
                findedColumn.showFilter = true;
                findedColumn.customFilter = customFilter.templateRef;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // 不使用takeUntil是因为直接unsubscribe性能更好
        this.load$.unsubscribe();
    }
    /**
     * 表格当前显示数据改变回调
     * @param {?} currentData 当前页显示数据
     * @return {?}
     */
    currentPageDataChange(currentData) {
        this.displayData = currentData;
    }
    /**
     * 单选改变回调
     * @return {?}
     */
    singleCheckChange() {
        this.updateSelectionsByChecked();
    }
    /**
     * 全选复选框改变回调
     * @param {?} isChecked 是否全选
     * @return {?}
     */
    allCheckChange(isChecked) {
        this.displayData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => (row.isChecked = isChecked)));
        this.updateSelectionsByChecked();
    }
    /**
     * 根据checked更新selections
     * @return {?}
     */
    updateSelectionsByChecked() {
        this.selections = this.displayData.filter((/**
         * @param {?} row
         * @return {?}
         */
        row => row.isChecked));
        this.selectionsChange.emit(this.selections);
    }
    /**
     * 根据selections更新checked
     * @return {?}
     */
    updateCheckedBySelections() {
        this.displayData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => (row.isChecked = this.selections.includes(row))));
    }
    /**
     * 页码改变回调
     * @return {?}
     */
    pageIndexChange() {
        this.load$.next();
    }
    /**
     * 显示条数改变回调
     * @return {?}
     */
    pageSizeChange() {
        // 显示条数改变时回到首页
        this.pageIndex = 1;
        this.load$.next();
    }
    /**
     * 排序改变
     * @param {?} sortParams 排序参数
     * @return {?}
     */
    onSort(sortParams) {
        // 保存排序参数，用于下次数据进来再进行排序
        this.sortParams = sortParams;
        // 查找正在排序的列
        /** @type {?} */
        const sortColumn = this.columns.find((/**
         * @param {?} column
         * @return {?}
         */
        column => column.field === sortParams.key));
        // 如果没有自定义排序，自动前端排序
        if (sortColumn && !sortColumn.customSort) {
            this.data.data.sort((/**
             * @param {?} previous
             * @param {?} further
             * @return {?}
             */
            (previous, further) => sortParams.value === 'descend'
                ? further[sortParams.key] > previous[sortParams.key]
                    ? 1
                    : -1
                : previous[sortParams.key] > further[sortParams.key]
                    ? 1
                    : -1));
            this.data.data = [...this.data.data];
        }
        this.sort.emit(sortParams);
    }
    /**
     * 日期改变回调
     * @param {?} isOpen 是否打开
     * @param {?} column 当前列模型数据
     * @return {?}
     */
    onRangePickerOpenChange(isOpen, column) {
        if (isOpen === false) {
            /** @type {?} */
            const date = column.searchValue;
            if (date && Array.isArray(date) && date.length === 2) {
                column.searchValue = [formatDate(date[0], 'yyyy-MM-dd 00:00:00', 'zh_CN'), formatDate(date[1], 'yyyy-MM-dd 23:59:59', 'zh_CN')];
                column.displayValue = [formatDate(date[0], 'yyyy-MM-dd', 'zh_CN'), formatDate(date[1], 'yyyy-MM-dd', 'zh_CN')];
            }
        }
    }
    /**
     * 查询确认回调
     * @param {?} dropdown
     * @return {?}
     */
    onFilterConfim(dropdown) {
        dropdown.setVisibleStateWhen(false);
        this.columns = [...this.columns];
        this.columnsChange.emit(this.columns);
    }
    /**
     * 固定分页
     * @return {?}
     */
    toFixedPagination() {
        // 没有滚动条时和有滚动条时tableBody会不一样，故先给上滚动条
        this.scroll = { y: '0px' };
        // 等待滚动条更新
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const windowHeight = document.documentElement.clientHeight;
            /** @type {?} */
            const tableBody = this._elementRef.nativeElement.querySelector('.ant-table-body');
            /** @type {?} */
            const pagination = this._elementRef.nativeElement.querySelector('nz-pagination');
            /** @type {?} */
            const tableBodyTop = tableBody.getBoundingClientRect().top;
            /** @type {?} */
            const scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight - 8 + 'px';
            this.scroll = Object.assign({}, this.scroll, { y: scrollHeight });
            this._renderer2.setStyle(tableBody, 'height', scrollHeight);
        }));
    }
    /**
     * @param {?} field
     * @param {?} rowData
     * @return {?}
     */
    onlinkClick(field, rowData) {
        this.linkClick.emit({ field, rowData });
    }
}
AdvancedTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'p-advancedTable',
                template: "<nz-table\n  class=\"advanced-table\"\n  [nzData]=\"data?.data || []\"\n  [nzLoading]=\"loading\"\n  [nzTitle]=\"titleTemplate || null\"\n  [nzScroll]=\"scroll\"\n  [nzFrontPagination]=\"frontPagination\"\n  [nzSize]=\"size\"\n  [nzShowPagination]=\"showPagination\"\n  [(nzPageIndex)]=\"pageIndex\"\n  [(nzPageSize)]=\"pageSize\"\n  [nzShowSizeChanger]=\"showSizeChanger\"\n  [nzPageSizeOptions]=\"pageSizeOptions\"\n  [nzTotal]=\"data?.totalSize || 0\"\n  [nzShowTotal]=\"totalTemplate\"\n  (nzPageIndexChange)=\"pageIndexChange()\"\n  (nzPageSizeChange)=\"pageSizeChange()\"\n  (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n  [class.fixed-pagination]=\"fixedPagination\"\n>\n  <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n    <tr>\n      <th\n        *ngIf=\"showCheckbox\"\n        nzLeft=\"0px\"\n        nzWidth=\"40px\"\n        nzShowCheckbox\n        [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n        [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n        (nzCheckedChange)=\"allCheckChange($event)\"\n      ></th>\n      <th\n        *ngFor=\"let column of columns\"\n        [nzLeft]=\"column.left\"\n        [nzRight]=\"column.right\"\n        [nzWidth]=\"column.width || '120px'\"\n        [nzShowSort]=\"column.showSort\"\n        [nzSortKey]=\"column.field\"\n        [nzCustomFilter]=\"column.showFilter\"\n      >\n        {{ column.title }}\n        <nz-dropdown *ngIf=\"column.showFilter\" nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter #dropdown>\n          <i nz-icon nzType=\"search\" class=\"ant-table-filter-icon\" [class.ant-table-filter-open]=\"dropdown.nzVisible\" nz-dropdown></i>\n          <div class=\"advanced-table-filter-panel\">\n            <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n            <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n              <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n            </ng-template>\n            <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n            <ng-template #defaultFilterTemplate>\n              <ng-container [ngSwitch]=\"column.filterType\">\n                <!-- select -->\n                <ng-template ngSwitchCase=\"select\">\n                  <nz-select\n                    nzAllowClear\n                    nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n                    [(ngModel)]=\"column.searchValue\"\n                    [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n                    [style.width]=\"column.filterWidth || '180px'\"\n                  >\n                    <nz-option\n                      *ngFor=\"let option of column.filterOptions || []\"\n                      [nzValue]=\"option.value\"\n                      [nzLabel]=\"option.label\"\n                    ></nz-option>\n                  </nz-select>\n                </ng-template>\n                <!-- range-picker -->\n                <ng-template ngSwitchCase=\"rangePicker\">\n                  <nz-range-picker\n                    nzAllowClear\n                    [(ngModel)]=\"column.searchValue\"\n                    [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n                    (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n                  ></nz-range-picker>\n                </ng-template>\n                <!-- input -->\n                <ng-template ngSwitchDefault>\n                  <nz-input-group [nzSuffix]=\"suffixTemplate\">\n                    <input\n                      #input\n                      nz-input\n                      placeholder=\"\u8BF7\u8F93\u5165\"\n                      [(ngModel)]=\"column.searchValue\"\n                      [style.width]=\"column.filterWidth || '180px'\"\n                      (keydown.enter)=\"onFilterConfim(dropdown)\"\n                    />\n                  </nz-input-group>\n                  <ng-template #suffixTemplate>\n                    <i\n                      nz-icon\n                      nz-tooltip\n                      class=\"clear-icon\"\n                      nzTheme=\"fill\"\n                      nzType=\"close-circle\"\n                      *ngIf=\"column.searchValue\"\n                      (click)=\"column.searchValue = null; input.focus()\"\n                    ></i>\n                  </ng-template>\n                </ng-template>\n              </ng-container>\n            </ng-template>\n            <!-- \u6309\u94AE -->\n            <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"advanced-table-filter-button\">\n              <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                \u786E\u8BA4\n              </button>\n            </div>\n          </div>\n        </nz-dropdown>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let row of displayData\">\n      <tr>\n        <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n        <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n          <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n          <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n            <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n          </ng-template>\n          <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n          <ng-template #defaultCellTemplate>\n            <ng-container [ngSwitch]=\"column.type\">\n              <!-- link -->\n              <ng-template ngSwitchCase=\"link\">\n                <a (click)=\"onlinkClick(column['field'], row)\">\n                  <smart-text [text]=\"row[column['field']]\"></smart-text>\n                </a>\n              </ng-template>\n              <!-- thumbnail -->\n              <ng-template ngSwitchCase=\"thumbnail\">\n                <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n                <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n                  <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n                  <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n                    <nz-badge [nzCount]=\"row[column['field']]?.length\">\n                      <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n                    </nz-badge>\n                  </ng-template>\n                  <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n                  <ng-template #noBadgeTemplate>\n                    <img\n                      viewerImg\n                      height=\"24px\"\n                      width=\"24px\"\n                      *ngFor=\"let url of row[column['field']] || []\"\n                      [lazyLoadSrc]=\"url\"\n                      style=\"cursor: zoom-in\"\n                    />\n                  </ng-template>\n                </div>\n              </ng-template>\n              <!-- default -->\n              <ng-template ngSwitchDefault>\n                <smart-text [text]=\"row[column['field']]\"></smart-text>\n              </ng-template>\n            </ng-container>\n          </ng-template>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n\n  <!-- total\u6A21\u677F -->\n  <ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n</nz-table>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host ::ng-deep .ant-table-scroll{position:relative}:host ::ng-deep .fixed-pagination .ant-table-placeholder{position:absolute;bottom:0;width:100%}td{word-break:break-all}.clear-icon{color:rgba(0,0,0,.25);font-size:12px;vertical-align:top;cursor:pointer;transition:color .3s}.clear-icon:hover{color:rgba(0,0,0,.45)}"]
            }] }
];
/** @nocollapse */
AdvancedTableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
AdvancedTableComponent.propDecorators = {
    columns: [{ type: Input }],
    data: [{ type: Input }],
    selections: [{ type: Input }],
    scroll: [{ type: Input }],
    loading: [{ type: Input }],
    pageSize: [{ type: Input }],
    frontPagination: [{ type: Input }],
    showPagination: [{ type: Input }],
    fixedPagination: [{ type: Input }],
    showSizeChanger: [{ type: Input }],
    size: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    showCheckbox: [{ type: Input }],
    titleTemplate: [{ type: Input }],
    columnsChange: [{ type: Output }],
    selectionsChange: [{ type: Output }],
    load: [{ type: Output }],
    sort: [{ type: Output }],
    linkClick: [{ type: Output }],
    customCells: [{ type: ContentChildren, args: [AdvancedCellComponent,] }],
    customFilters: [{ type: ContentChildren, args: [AdvancedFilterComponent,] }]
};
if (false) {
    /** @type {?} */
    AdvancedTableComponent.prototype.columns;
    /** @type {?} */
    AdvancedTableComponent.prototype.data;
    /** @type {?} */
    AdvancedTableComponent.prototype.selections;
    /** @type {?} */
    AdvancedTableComponent.prototype.scroll;
    /** @type {?} */
    AdvancedTableComponent.prototype.loading;
    /** @type {?} */
    AdvancedTableComponent.prototype.pageSize;
    /** @type {?} */
    AdvancedTableComponent.prototype.frontPagination;
    /** @type {?} */
    AdvancedTableComponent.prototype.showPagination;
    /** @type {?} */
    AdvancedTableComponent.prototype.fixedPagination;
    /** @type {?} */
    AdvancedTableComponent.prototype.showSizeChanger;
    /** @type {?} */
    AdvancedTableComponent.prototype.size;
    /** @type {?} */
    AdvancedTableComponent.prototype.pageSizeOptions;
    /** @type {?} */
    AdvancedTableComponent.prototype.showCheckbox;
    /** @type {?} */
    AdvancedTableComponent.prototype.titleTemplate;
    /** @type {?} */
    AdvancedTableComponent.prototype.columnsChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.selectionsChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.load;
    /** @type {?} */
    AdvancedTableComponent.prototype.sort;
    /** @type {?} */
    AdvancedTableComponent.prototype.linkClick;
    /** @type {?} */
    AdvancedTableComponent.prototype.customCells;
    /** @type {?} */
    AdvancedTableComponent.prototype.customFilters;
    /** @type {?} */
    AdvancedTableComponent.prototype.load$;
    /** @type {?} */
    AdvancedTableComponent.prototype.displayData;
    /** @type {?} */
    AdvancedTableComponent.prototype.pageIndex;
    /** @type {?} */
    AdvancedTableComponent.prototype.sortParams;
    /**
     * @type {?}
     * @private
     */
    AdvancedTableComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    AdvancedTableComponent.prototype._renderer2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvIiwic291cmNlcyI6WyJhZHZhbmNlZC10YWJsZS9hZHZhbmNlZC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVV0RSxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQStCakMsWUFBb0IsV0FBdUIsRUFBVSxVQUFxQjtRQUF0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVc7UUE5QmpFLFlBQU8sR0FBMEIsRUFBRSxDQUFDLENBQUMsTUFBTTs7UUFDM0MsU0FBSSxHQUFvRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzs7UUFDM0YsZUFBVSxHQUF1QixFQUFFLENBQUMsQ0FBQyxNQUFNOztRQUUzQyxZQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsWUFBWTs7UUFDN0IsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU87O1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBUzs7UUFDbEMs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LDRDQUFnRTs7Ozs7SUFFcEQsNkNBQStCOzs7OztJQUFFLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDooajmoLznu4Tku7ZcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDctMDUgMTA6MDY6NDFcbiAqL1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFkdmFuY2VkQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWR2YW5jZWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWR2YW5jZWRUYWJsZUNvbHVtbiwgUGFnZVBhcmFtcywgQWR2YW5jZWRUYWJsZVJvdyB9IGZyb20gJy4vYWR2YW5jZWQtdGFibGUubW9kdWxlJztcbmltcG9ydCB7IE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1hZHZhbmNlZFRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWR2YW5jZWQtdGFibGUuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29sdW1uczogQWR2YW5jZWRUYWJsZUNvbHVtbltdID0gW107IC8vIOWIl+aVsOaNrlxuICBASW5wdXQoKSBkYXRhOiB7IGRhdGE6IEFkdmFuY2VkVGFibGVSb3dbXTsgdG90YWxTaXplOiBudW1iZXIgfSA9IHsgZGF0YTogW10sIHRvdGFsU2l6ZTogMCB9OyAvLyDooajmoLzmlbDmja5cbiAgQElucHV0KCkgc2VsZWN0aW9uczogQWR2YW5jZWRUYWJsZVJvd1tdID0gW107IC8vIOW3sumAiemhuVxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH07IC8vIOWbuuWumuihqOWktO+8jOa7muWKqFxuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7IC8vIOihqOagvGxvYWRpbmdcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDsgLy8g5pi+56S65p2h5pWwXG4gIEBJbnB1dCgpIGZyb250UGFnaW5hdGlvbiA9IGZhbHNlOyAvLyDmmK/lkKbliY3nq6/liIbpobVcbiAgQElucHV0KCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlOyAvLyDmmK/lkKbmmL7npLrliIbpobXlmahcbiAgQElucHV0KCkgZml4ZWRQYWdpbmF0aW9uID0gZmFsc2U7IC8vIOaYr+WQpuWbuuWumuWIhumhteWZqFxuICBASW5wdXQoKSBzaG93U2l6ZUNoYW5nZXIgPSB0cnVlOyAvLyDmmK/lkKbmmL7npLrmnaHmlbDliIfmjaLlmahcbiAgQElucHV0KCkgc2l6ZSA9ICdtaWRkbGUnOyAvLyDooajmoLxzaXplXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMzAsIDUwLCAxMDBdOyAvLyDpobXmlbDpgInmi6nlmajlj6/pgInlgLxcbiAgQElucHV0KCkgc2hvd0NoZWNrYm94ID0gZmFsc2U7IC8vIOaYr+WQpuaYvuekuuWkjemAieahhlxuICBASW5wdXQoKSB0aXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjsgLy8gdGl0bGXmqKHmnb9cblxuICBAT3V0cHV0KCkgY29sdW1uc0NoYW5nZTogRXZlbnRFbWl0dGVyPEFkdmFuY2VkVGFibGVDb2x1bW5bXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOWIl+aVsOaNruaUueWPmOS6i+S7tiDnlKjkuo7lj4zlkJHnu5HlrppcbiAgQE91dHB1dCgpIHNlbGVjdGlvbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBZHZhbmNlZFRhYmxlUm93W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDlt7LpgInpobnmlLnlj5jkuovku7Yg55So5LqO5Y+M5ZCR57uR5a6aXG4gIEBPdXRwdXQoKSBsb2FkOiBFdmVudEVtaXR0ZXI8UGFnZVBhcmFtcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGxvYWTkuovku7ZcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDmjpLluo/kuovku7ZcbiAgQE91dHB1dCgpIGxpbmtDbGljazogRXZlbnRFbWl0dGVyPHsgZmllbGQ6IHN0cmluZzsgcm93RGF0YTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDpk77mjqXngrnlh7vkuovku7ZcblxuICBAQ29udGVudENoaWxkcmVuKEFkdmFuY2VkQ2VsbENvbXBvbmVudCkgY3VzdG9tQ2VsbHM6IEFkdmFuY2VkQ2VsbENvbXBvbmVudFtdOyAvLyDoh6rlrprkuYnljZXlhYPmoLxcbiAgQENvbnRlbnRDaGlsZHJlbihBZHZhbmNlZEZpbHRlckNvbXBvbmVudCkgY3VzdG9tRmlsdGVyczogQWR2YW5jZWRGaWx0ZXJDb21wb25lbnRbXTsgLy8g6Ieq5a6a5LmJ5pCc57Si57uE5Lu2XG5cbiAgbG9hZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7IC8vIGxvYWTmtYFcblxuICBkaXNwbGF5RGF0YTogQWR2YW5jZWRUYWJsZVJvd1tdID0gW107IC8vIOW9k+WJjeaYvuekuuaVsOaNrlxuICBwYWdlSW5kZXggPSAxOyAvLyDlvZPliY3pobXnoIFcbiAgc29ydFBhcmFtczogeyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICAvLyDph43otbBzb3J0XG4gICAgICBpZiAodGhpcy5zb3J0UGFyYW1zICYmIHRoaXMuc29ydFBhcmFtcy5rZXkgJiYgdGhpcy5zb3J0UGFyYW1zLnZhbHVlKSB7XG4gICAgICAgIHRoaXMub25Tb3J0KHRoaXMuc29ydFBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIC8vIOaYr+S4i+aLiemAieaLqeeahOiHquWKqOa3u+WKoOivjeWFuFxuICAgICAgY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZS5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uc2hvd0ZpbHRlciAmJiBjb2x1bW4uZmlsdGVyVHlwZSA9PT0gJ3NlbGVjdCcgJiYgQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyT3B0aW9ucykpIHtcbiAgICAgICAgICBjb2x1bW4ubGV4aWNvbiA9IGNvbHVtbi5sZXhpY29uID8gWy4uLmNvbHVtbi5sZXhpY29uLCAuLi5jb2x1bW4uZmlsdGVyT3B0aW9uc10gOiBjb2x1bW4uZmlsdGVyT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNlbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tlZEJ5U2VsZWN0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgdGhpcy5sb2FkJC5waXBlKGRlYm91bmNlVGltZSgyMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyDmuIXnqbpzZWxlY3Rpb25zXG4gICAgICB0aGlzLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9ucyk7XG4gICAgICAvLyDlj5Hlh7psb2Fk5LqL5Lu2XG4gICAgICB0aGlzLmxvYWQuZW1pdCh7IHBhZ2U6IHRoaXMucGFnZUluZGV4LCBzaXplOiB0aGlzLnBhZ2VTaXplIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIOmhtemdouWIneWni+WMluWujOaIkOWQjuiHquWKqGxvYWTkuIDmrKFcbiAgICB0aGlzLmxvYWQkLm5leHQoKTtcbiAgICBpZiAodGhpcy5maXhlZFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMudG9GaXhlZFBhZ2luYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8g6LWL5YC86Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gICAgdGhpcy5jdXN0b21DZWxscy5mb3JFYWNoKGN1c3RvbUNlbGwgPT4ge1xuICAgICAgY29uc3QgZmluZGVkQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5maWVsZCA9PT0gY3VzdG9tQ2VsbC5maWVsZCk7XG4gICAgICBpZiAoZmluZGVkQ29sdW1uKSBmaW5kZWRDb2x1bW4uY3VzdG9tQ2VsbCA9IGN1c3RvbUNlbGwudGVtcGxhdGVSZWY7XG4gICAgfSk7XG4gICAgLy8g6LWL5YC86Ieq5a6a5LmJ5pCc57Si57uE5Lu2XG4gICAgdGhpcy5jdXN0b21GaWx0ZXJzLmZvckVhY2goY3VzdG9tRmlsdGVyID0+IHtcbiAgICAgIGNvbnN0IGZpbmRlZENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IGN1c3RvbUZpbHRlci5maWVsZCk7XG4gICAgICBpZiAoZmluZGVkQ29sdW1uKSB7XG4gICAgICAgIGZpbmRlZENvbHVtbi5zaG93RmlsdGVyID0gdHJ1ZTtcbiAgICAgICAgZmluZGVkQ29sdW1uLmN1c3RvbUZpbHRlciA9IGN1c3RvbUZpbHRlci50ZW1wbGF0ZVJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIOS4jeS9v+eUqHRha2VVbnRpbOaYr+WboOS4uuebtOaOpXVuc3Vic2NyaWJl5oCn6IO95pu05aW9XG4gICAgdGhpcy5sb2FkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOihqOagvOW9k+WJjeaYvuekuuaVsOaNruaUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gY3VycmVudERhdGEg5b2T5YmN6aG15pi+56S65pWw5o2uXG4gICAqL1xuICBjdXJyZW50UGFnZURhdGFDaGFuZ2UoY3VycmVudERhdGE6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YSA9IGN1cnJlbnREYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIOWNlemAieaUueWPmOWbnuiwg1xuICAgKi9cbiAgc2luZ2xlQ2hlY2tDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk7XG4gIH1cblxuICAvKipcbiAgICog5YWo6YCJ5aSN6YCJ5qGG5pS55Y+Y5Zue6LCDXG4gICAqIEBwYXJhbSBpc0NoZWNrZWQg5piv5ZCm5YWo6YCJXG4gICAqL1xuICBhbGxDaGVja0NoYW5nZShpc0NoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlEYXRhLmZvckVhY2gocm93ID0+IChyb3cuaXNDaGVja2VkID0gaXNDaGVja2VkKSk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uY2hlY2tlZOabtOaWsHNlbGVjdGlvbnNcbiAgICovXG4gIHVwZGF0ZVNlbGVjdGlvbnNCeUNoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25zID0gdGhpcy5kaXNwbGF5RGF0YS5maWx0ZXIocm93ID0+IHJvdy5pc0NoZWNrZWQpO1xuICAgIHRoaXMuc2VsZWN0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uc2VsZWN0aW9uc+abtOaWsGNoZWNrZWRcbiAgICovXG4gIHVwZGF0ZUNoZWNrZWRCeVNlbGVjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YS5mb3JFYWNoKHJvdyA9PiAocm93LmlzQ2hlY2tlZCA9IHRoaXMuc2VsZWN0aW9ucy5pbmNsdWRlcyhyb3cpKSk7XG4gIH1cblxuICAvKipcbiAgICog6aG156CB5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlSW5kZXhDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5pi+56S65p2h5pWw5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlU2l6ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAvLyDmmL7npLrmnaHmlbDmlLnlj5jml7blm57liLDpppbpobVcbiAgICB0aGlzLnBhZ2VJbmRleCA9IDE7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5o6S5bqP5pS55Y+YXG4gICAqIEBwYXJhbSBzb3J0UGFyYW1zIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgb25Tb3J0KHNvcnRQYXJhbXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfSk6IHZvaWQge1xuICAgIC8vIOS/neWtmOaOkuW6j+WPguaVsO+8jOeUqOS6juS4i+asoeaVsOaNrui/m+adpeWGjei/m+ihjOaOkuW6j1xuICAgIHRoaXMuc29ydFBhcmFtcyA9IHNvcnRQYXJhbXM7XG4gICAgLy8g5p+l5om+5q2j5Zyo5o6S5bqP55qE5YiXXG4gICAgY29uc3Qgc29ydENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IHNvcnRQYXJhbXMua2V5KTtcblxuICAgIC8vIOWmguaenOayoeacieiHquWumuS5ieaOkuW6j++8jOiHquWKqOWJjeerr+aOkuW6j1xuICAgIGlmIChzb3J0Q29sdW1uICYmICFzb3J0Q29sdW1uLmN1c3RvbVNvcnQpIHtcbiAgICAgIHRoaXMuZGF0YS5kYXRhLnNvcnQoKHByZXZpb3VzLCBmdXJ0aGVyKSA9PlxuICAgICAgICBzb3J0UGFyYW1zLnZhbHVlID09PSAnZGVzY2VuZCdcbiAgICAgICAgICA/IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldID4gcHJldmlvdXNbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogLTFcbiAgICAgICAgICA6IHByZXZpb3VzW3NvcnRQYXJhbXMua2V5XSA+IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiAtMSxcbiAgICAgICk7XG4gICAgICB0aGlzLmRhdGEuZGF0YSA9IFsuLi50aGlzLmRhdGEuZGF0YV07XG4gICAgfVxuICAgIHRoaXMuc29ydC5lbWl0KHNvcnRQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gaXNPcGVuIOaYr+WQpuaJk+W8gFxuICAgKiBAcGFyYW0gY29sdW1uIOW9k+WJjeWIl+aooeWei+aVsOaNrlxuICAgKi9cbiAgb25SYW5nZVBpY2tlck9wZW5DaGFuZ2UoaXNPcGVuOiBib29sZWFuLCBjb2x1bW46IEFkdmFuY2VkVGFibGVDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IGNvbHVtbi5zZWFyY2hWYWx1ZTtcbiAgICAgIGlmIChkYXRlICYmIEFycmF5LmlzQXJyYXkoZGF0ZSkgJiYgZGF0ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29sdW1uLnNlYXJjaFZhbHVlID0gW2Zvcm1hdERhdGUoZGF0ZVswXSwgJ3l5eXktTU0tZGQgMDA6MDA6MDAnLCAnemhfQ04nKSwgZm9ybWF0RGF0ZShkYXRlWzFdLCAneXl5eS1NTS1kZCAyMzo1OTo1OScsICd6aF9DTicpXTtcbiAgICAgICAgY29sdW1uLmRpc3BsYXlWYWx1ZSA9IFtmb3JtYXREYXRlKGRhdGVbMF0sICd5eXl5LU1NLWRkJywgJ3poX0NOJyksIGZvcm1hdERhdGUoZGF0ZVsxXSwgJ3l5eXktTU0tZGQnLCAnemhfQ04nKV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOafpeivouehruiupOWbnuiwg1xuICAgKi9cbiAgb25GaWx0ZXJDb25maW0oZHJvcGRvd246IE56RHJvcERvd25Db21wb25lbnQpOiB2b2lkIHtcbiAgICBkcm9wZG93bi5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcbiAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zXTtcbiAgICB0aGlzLmNvbHVtbnNDaGFuZ2UuZW1pdCh0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWbuuWumuWIhumhtVxuICAgKi9cbiAgdG9GaXhlZFBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgLy8g5rKh5pyJ5rua5Yqo5p2h5pe25ZKM5pyJ5rua5Yqo5p2h5pe2dGFibGVCb2R55Lya5LiN5LiA5qC377yM5pWF5YWI57uZ5LiK5rua5Yqo5p2hXG4gICAgdGhpcy5zY3JvbGwgPSB7IHk6ICcwcHgnIH07XG4gICAgLy8g562J5b6F5rua5Yqo5p2h5pu05pawXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgdGFibGVCb2R5ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpO1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCduei1wYWdpbmF0aW9uJyk7XG4gICAgICBjb25zdCB0YWJsZUJvZHlUb3AgPSB0YWJsZUJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gdGFibGVCb2R5VG9wIC0gcGFnaW5hdGlvbi5jbGllbnRIZWlnaHQgLSA4ICsgJ3B4JztcbiAgICAgIHRoaXMuc2Nyb2xsID0geyAuLi50aGlzLnNjcm9sbCwgeTogc2Nyb2xsSGVpZ2h0IH07XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUodGFibGVCb2R5LCAnaGVpZ2h0Jywgc2Nyb2xsSGVpZ2h0KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9ubGlua0NsaWNrKGZpZWxkOiBzdHJpbmcsIHJvd0RhdGE6IGFueSkge1xuICAgIHRoaXMubGlua0NsaWNrLmVtaXQoeyBmaWVsZCwgcm93RGF0YSB9KTtcbiAgfVxufVxuIl19