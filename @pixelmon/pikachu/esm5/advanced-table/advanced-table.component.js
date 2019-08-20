/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var AdvancedTableComponent = /** @class */ (function () {
    function AdvancedTableComponent(_elementRef, _renderer2) {
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
    AdvancedTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
            function (column) {
                if (column.showFilter && column.filterType === 'select' && Array.isArray(column.filterOptions)) {
                    column.lexicon = column.lexicon ? tslib_1.__spread(column.lexicon, column.filterOptions) : column.filterOptions;
                }
            }));
        }
        if (changes.selections) {
            this.updateCheckedBySelections();
        }
    };
    /**
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* tslint:disable */
        this.load$.pipe(debounceTime(20)).subscribe((/**
         * @return {?}
         */
        function () {
            // 清空selections
            _this.selections = [];
            _this.selectionsChange.emit(_this.selections);
            // 发出load事件
            _this.load.emit({ page: _this.pageIndex, size: _this.pageSize });
        }));
    };
    /**
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // 页面初始化完成后自动load一次
        this.load$.next();
        if (this.fixedPagination) {
            this.toFixedPagination();
        }
    };
    /**
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 赋值自定义单元格
        this.customCells.forEach((/**
         * @param {?} customCell
         * @return {?}
         */
        function (customCell) {
            /** @type {?} */
            var findedColumn = _this.columns.find((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.field === customCell.field; }));
            if (findedColumn)
                findedColumn.customCell = customCell.templateRef;
        }));
        // 赋值自定义搜索组件
        this.customFilters.forEach((/**
         * @param {?} customFilter
         * @return {?}
         */
        function (customFilter) {
            /** @type {?} */
            var findedColumn = _this.columns.find((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.field === customFilter.field; }));
            if (findedColumn) {
                findedColumn.showFilter = true;
                findedColumn.customFilter = customFilter.templateRef;
            }
        }));
    };
    /**
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // 不使用takeUntil是因为直接unsubscribe性能更好
        this.load$.unsubscribe();
    };
    /**
     * 表格当前显示数据改变回调
     * @param currentData 当前页显示数据
     */
    /**
     * 表格当前显示数据改变回调
     * @param {?} currentData 当前页显示数据
     * @return {?}
     */
    AdvancedTableComponent.prototype.currentPageDataChange = /**
     * 表格当前显示数据改变回调
     * @param {?} currentData 当前页显示数据
     * @return {?}
     */
    function (currentData) {
        this.displayData = currentData;
    };
    /**
     * 单选改变回调
     */
    /**
     * 单选改变回调
     * @return {?}
     */
    AdvancedTableComponent.prototype.singleCheckChange = /**
     * 单选改变回调
     * @return {?}
     */
    function () {
        this.updateSelectionsByChecked();
    };
    /**
     * 全选复选框改变回调
     * @param isChecked 是否全选
     */
    /**
     * 全选复选框改变回调
     * @param {?} isChecked 是否全选
     * @return {?}
     */
    AdvancedTableComponent.prototype.allCheckChange = /**
     * 全选复选框改变回调
     * @param {?} isChecked 是否全选
     * @return {?}
     */
    function (isChecked) {
        this.displayData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return (row.isChecked = isChecked); }));
        this.updateSelectionsByChecked();
    };
    /**
     * 根据checked更新selections
     */
    /**
     * 根据checked更新selections
     * @return {?}
     */
    AdvancedTableComponent.prototype.updateSelectionsByChecked = /**
     * 根据checked更新selections
     * @return {?}
     */
    function () {
        this.selections = this.displayData.filter((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return row.isChecked; }));
        this.selectionsChange.emit(this.selections);
    };
    /**
     * 根据selections更新checked
     */
    /**
     * 根据selections更新checked
     * @return {?}
     */
    AdvancedTableComponent.prototype.updateCheckedBySelections = /**
     * 根据selections更新checked
     * @return {?}
     */
    function () {
        var _this = this;
        this.displayData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return (row.isChecked = _this.selections.includes(row)); }));
    };
    /**
     * 页码改变回调
     */
    /**
     * 页码改变回调
     * @return {?}
     */
    AdvancedTableComponent.prototype.pageIndexChange = /**
     * 页码改变回调
     * @return {?}
     */
    function () {
        this.load$.next();
    };
    /**
     * 显示条数改变回调
     */
    /**
     * 显示条数改变回调
     * @return {?}
     */
    AdvancedTableComponent.prototype.pageSizeChange = /**
     * 显示条数改变回调
     * @return {?}
     */
    function () {
        // 显示条数改变时回到首页
        this.pageIndex = 1;
        this.load$.next();
    };
    /**
     * 排序改变
     * @param sortParams 排序参数
     */
    /**
     * 排序改变
     * @param {?} sortParams 排序参数
     * @return {?}
     */
    AdvancedTableComponent.prototype.onSort = /**
     * 排序改变
     * @param {?} sortParams 排序参数
     * @return {?}
     */
    function (sortParams) {
        // 保存排序参数，用于下次数据进来再进行排序
        this.sortParams = sortParams;
        // 查找正在排序的列
        /** @type {?} */
        var sortColumn = this.columns.find((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.field === sortParams.key; }));
        // 如果没有自定义排序，自动前端排序
        if (sortColumn && !sortColumn.customSort) {
            this.data.data.sort((/**
             * @param {?} previous
             * @param {?} further
             * @return {?}
             */
            function (previous, further) {
                return sortParams.value === 'descend'
                    ? further[sortParams.key] > previous[sortParams.key]
                        ? 1
                        : -1
                    : previous[sortParams.key] > further[sortParams.key]
                        ? 1
                        : -1;
            }));
            this.data.data = tslib_1.__spread(this.data.data);
        }
        this.sort.emit(sortParams);
    };
    /**
     * 日期改变回调
     * @param isOpen 是否打开
     * @param column 当前列模型数据
     */
    /**
     * 日期改变回调
     * @param {?} isOpen 是否打开
     * @param {?} column 当前列模型数据
     * @return {?}
     */
    AdvancedTableComponent.prototype.onRangePickerOpenChange = /**
     * 日期改变回调
     * @param {?} isOpen 是否打开
     * @param {?} column 当前列模型数据
     * @return {?}
     */
    function (isOpen, column) {
        if (isOpen === false) {
            /** @type {?} */
            var date = column.searchValue;
            if (date && Array.isArray(date) && date.length === 2) {
                column.searchValue = [formatDate(date[0], 'yyyy-MM-dd 00:00:00', 'zh_CN'), formatDate(date[1], 'yyyy-MM-dd 23:59:59', 'zh_CN')];
                column.displayValue = [formatDate(date[0], 'yyyy-MM-dd', 'zh_CN'), formatDate(date[1], 'yyyy-MM-dd', 'zh_CN')];
            }
        }
    };
    /**
     * 查询确认回调
     */
    /**
     * 查询确认回调
     * @param {?} dropdown
     * @return {?}
     */
    AdvancedTableComponent.prototype.onFilterConfim = /**
     * 查询确认回调
     * @param {?} dropdown
     * @return {?}
     */
    function (dropdown) {
        dropdown.setVisibleStateWhen(false);
        this.columns = tslib_1.__spread(this.columns);
        this.columnsChange.emit(this.columns);
    };
    /**
     * 固定分页
     */
    /**
     * 固定分页
     * @return {?}
     */
    AdvancedTableComponent.prototype.toFixedPagination = /**
     * 固定分页
     * @return {?}
     */
    function () {
        var _this = this;
        // 没有滚动条时和有滚动条时tableBody会不一样，故先给上滚动条
        this.scroll = { y: '0px' };
        // 等待滚动条更新
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var windowHeight = document.documentElement.clientHeight;
            /** @type {?} */
            var tableBody = _this._elementRef.nativeElement.querySelector('.ant-table-body');
            /** @type {?} */
            var pagination = _this._elementRef.nativeElement.querySelector('nz-pagination');
            /** @type {?} */
            var tableBodyTop = tableBody.getBoundingClientRect().top;
            /** @type {?} */
            var scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight - 8 + 'px';
            _this.scroll = tslib_1.__assign({}, _this.scroll, { y: scrollHeight });
            _this._renderer2.setStyle(tableBody, 'height', scrollHeight);
        }));
    };
    /**
     * @param {?} field
     * @param {?} rowData
     * @return {?}
     */
    AdvancedTableComponent.prototype.onlinkClick = /**
     * @param {?} field
     * @param {?} rowData
     * @return {?}
     */
    function (field, rowData) {
        this.linkClick.emit({ field: field, rowData: rowData });
    };
    AdvancedTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-advancedTable',
                    template: "<nz-table\n  class=\"advanced-table\"\n  [nzData]=\"data?.data || []\"\n  [nzLoading]=\"loading\"\n  [nzTitle]=\"titleTemplate || null\"\n  [nzScroll]=\"scroll\"\n  [nzFrontPagination]=\"frontPagination\"\n  [nzSize]=\"size\"\n  [nzShowPagination]=\"showPagination\"\n  [(nzPageIndex)]=\"pageIndex\"\n  [(nzPageSize)]=\"pageSize\"\n  [nzShowSizeChanger]=\"showSizeChanger\"\n  [nzPageSizeOptions]=\"pageSizeOptions\"\n  [nzTotal]=\"data?.totalSize || 0\"\n  [nzShowTotal]=\"totalTemplate\"\n  (nzPageIndexChange)=\"pageIndexChange()\"\n  (nzPageSizeChange)=\"pageSizeChange()\"\n  (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n  [class.fixed-pagination]=\"fixedPagination\"\n>\n  <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n    <tr>\n      <th\n        *ngIf=\"showCheckbox\"\n        nzLeft=\"0px\"\n        nzWidth=\"40px\"\n        nzShowCheckbox\n        [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n        [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n        (nzCheckedChange)=\"allCheckChange($event)\"\n      ></th>\n      <th\n        *ngFor=\"let column of columns\"\n        [nzLeft]=\"column.left\"\n        [nzRight]=\"column.right\"\n        [nzWidth]=\"column.width || '120px'\"\n        [nzShowSort]=\"column.showSort\"\n        [nzSortKey]=\"column.field\"\n        [nzCustomFilter]=\"column.showFilter\"\n      >\n        {{ column.title }}\n        <nz-dropdown *ngIf=\"column.showFilter\" nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter #dropdown>\n          <i nz-icon nzType=\"search\" class=\"ant-table-filter-icon\" [class.ant-table-filter-open]=\"dropdown.nzVisible\" nz-dropdown></i>\n          <div class=\"advanced-table-filter-panel\">\n            <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n            <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n              <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n            </ng-template>\n            <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n            <ng-template #defaultFilterTemplate>\n              <ng-container [ngSwitch]=\"column.filterType\">\n                <!-- select -->\n                <ng-template ngSwitchCase=\"select\">\n                  <nz-select\n                    nzAllowClear\n                    nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n                    [(ngModel)]=\"column.searchValue\"\n                    [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n                    [style.width]=\"column.filterWidth || '180px'\"\n                  >\n                    <nz-option\n                      *ngFor=\"let option of column.filterOptions || []\"\n                      [nzValue]=\"option.value\"\n                      [nzLabel]=\"option.label\"\n                    ></nz-option>\n                  </nz-select>\n                </ng-template>\n                <!-- range-picker -->\n                <ng-template ngSwitchCase=\"rangePicker\">\n                  <nz-range-picker\n                    nzAllowClear\n                    [(ngModel)]=\"column.searchValue\"\n                    [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n                    (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n                  ></nz-range-picker>\n                </ng-template>\n                <!-- input -->\n                <ng-template ngSwitchDefault>\n                  <nz-input-group [nzSuffix]=\"suffixTemplate\">\n                    <input\n                      #input\n                      nz-input\n                      placeholder=\"\u8BF7\u8F93\u5165\"\n                      [(ngModel)]=\"column.searchValue\"\n                      [style.width]=\"column.filterWidth || '180px'\"\n                      (keydown.enter)=\"onFilterConfim(dropdown)\"\n                    />\n                  </nz-input-group>\n                  <ng-template #suffixTemplate>\n                    <i\n                      nz-icon\n                      nz-tooltip\n                      class=\"clear-icon\"\n                      nzTheme=\"fill\"\n                      nzType=\"close-circle\"\n                      *ngIf=\"column.searchValue\"\n                      (click)=\"column.searchValue = null; input.focus()\"\n                    ></i>\n                  </ng-template>\n                </ng-template>\n              </ng-container>\n            </ng-template>\n            <!-- \u6309\u94AE -->\n            <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"advanced-table-filter-button\">\n              <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                \u786E\u8BA4\n              </button>\n            </div>\n          </div>\n        </nz-dropdown>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let row of displayData\">\n      <tr>\n        <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n        <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n          <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n          <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n            <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n          </ng-template>\n          <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n          <ng-template #defaultCellTemplate>\n            <ng-container [ngSwitch]=\"column.type\">\n              <!-- link -->\n              <ng-template ngSwitchCase=\"link\">\n                <a (click)=\"onlinkClick(column['field'], row)\">\n                  <smart-text [text]=\"row[column['field']]\"></smart-text>\n                </a>\n              </ng-template>\n              <!-- thumbnail -->\n              <ng-template ngSwitchCase=\"thumbnail\">\n                <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n                <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n                  <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n                  <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n                    <nz-badge [nzCount]=\"row[column['field']]?.length\">\n                      <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n                    </nz-badge>\n                  </ng-template>\n                  <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n                  <ng-template #noBadgeTemplate>\n                    <img\n                      viewerImg\n                      height=\"24px\"\n                      width=\"24px\"\n                      *ngFor=\"let url of row[column['field']] || []\"\n                      [lazyLoadSrc]=\"url\"\n                      style=\"cursor: zoom-in\"\n                    />\n                  </ng-template>\n                </div>\n              </ng-template>\n              <!-- default -->\n              <ng-template ngSwitchDefault>\n                <smart-text [text]=\"row[column['field']]\"></smart-text>\n              </ng-template>\n            </ng-container>\n          </ng-template>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n\n  <!-- total\u6A21\u677F -->\n  <ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n</nz-table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host ::ng-deep .ant-table-scroll{position:relative}:host ::ng-deep .fixed-pagination .ant-table-placeholder{position:absolute;bottom:0;width:100%}td{word-break:break-all}.clear-icon{color:rgba(0,0,0,.25);font-size:12px;vertical-align:top;cursor:pointer;transition:color .3s}.clear-icon:hover{color:rgba(0,0,0,.45)}"]
                }] }
    ];
    /** @nocollapse */
    AdvancedTableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return AdvancedTableComponent;
}());
export { AdvancedTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvIiwic291cmNlcyI6WyJhZHZhbmNlZC10YWJsZS9hZHZhbmNlZC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJdEU7SUFxQ0UsZ0NBQW9CLFdBQXVCLEVBQVUsVUFBcUI7UUFBdEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBOUJqRSxZQUFPLEdBQTBCLEVBQUUsQ0FBQyxDQUFDLE1BQU07O1FBQzNDLFNBQUksR0FBb0QsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU87O1FBQzNGLGVBQVUsR0FBdUIsRUFBRSxDQUFDLENBQUMsTUFBTTs7UUFFM0MsWUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLFlBQVk7O1FBQzdCLGFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLFNBQVM7O1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxDQUFD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ak9ELElBaU9DO1NBM05ZLHNCQUFzQjs7O0lBQ2pDLHlDQUE2Qzs7SUFDN0Msc0NBQTRGOztJQUM1Riw0Q0FBNkM7O0lBQzdDLHdDQUEwRDs7SUFDMUQseUNBQXlCOztJQUN6QiwwQ0FBdUI7O0lBQ3ZCLGlEQUFpQzs7SUFDakMsZ0RBQStCOztJQUMvQixpREFBaUM7O0lBQ2pDLGlEQUFnQzs7SUFDaEMsc0NBQXlCOztJQUN6QixpREFBNkM7O0lBQzdDLDhDQUE4Qjs7SUFDOUIsK0NBQTBDOztJQUUxQywrQ0FBa0Y7O0lBQ2xGLGtEQUFrRjs7SUFDbEYsc0NBQThEOztJQUM5RCxzQ0FBdUc7O0lBQ3ZHLDJDQUF3Rjs7SUFFeEYsNkNBQTZFOztJQUM3RSwrQ0FBbUY7O0lBRW5GLHVDQUFvQzs7SUFFcEMsNkNBQXFDOztJQUNyQywyQ0FBYzs7SUFDZCw0Q0FBZ0U7Ozs7O0lBRXBELDZDQUErQjs7Ozs7SUFBRSw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog6KGo5qC857uE5Lu2XG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA1IDEwOjA2OjQxXG4gKi9cblxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZHZhbmNlZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEFkdmFuY2VkRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkdmFuY2VkVGFibGVDb2x1bW4sIFBhZ2VQYXJhbXMsIEFkdmFuY2VkVGFibGVSb3cgfSBmcm9tICcuL2FkdmFuY2VkLXRhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtYWR2YW5jZWRUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkdmFuY2VkLXRhYmxlLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZHZhbmNlZFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IEFkdmFuY2VkVGFibGVDb2x1bW5bXSA9IFtdOyAvLyDliJfmlbDmja5cbiAgQElucHV0KCkgZGF0YTogeyBkYXRhOiBBZHZhbmNlZFRhYmxlUm93W107IHRvdGFsU2l6ZTogbnVtYmVyIH0gPSB7IGRhdGE6IFtdLCB0b3RhbFNpemU6IDAgfTsgLy8g6KGo5qC85pWw5o2uXG4gIEBJbnB1dCgpIHNlbGVjdGlvbnM6IEFkdmFuY2VkVGFibGVSb3dbXSA9IFtdOyAvLyDlt7LpgInpoblcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9OyAvLyDlm7rlrprooajlpLTvvIzmu5rliqhcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlOyAvLyDooajmoLxsb2FkaW5nXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7IC8vIOaYvuekuuadoeaVsFxuICBASW5wdXQoKSBmcm9udFBhZ2luYXRpb24gPSBmYWxzZTsgLy8g5piv5ZCm5YmN56uv5YiG6aG1XG4gIEBJbnB1dCgpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTsgLy8g5piv5ZCm5pi+56S65YiG6aG15ZmoXG4gIEBJbnB1dCgpIGZpeGVkUGFnaW5hdGlvbiA9IGZhbHNlOyAvLyDmmK/lkKblm7rlrprliIbpobXlmahcbiAgQElucHV0KCkgc2hvd1NpemVDaGFuZ2VyID0gdHJ1ZTsgLy8g5piv5ZCm5pi+56S65p2h5pWw5YiH5o2i5ZmoXG4gIEBJbnB1dCgpIHNpemUgPSAnbWlkZGxlJzsgLy8g6KGo5qC8c2l6ZVxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDMwLCA1MCwgMTAwXTsgLy8g6aG15pWw6YCJ5oup5Zmo5Y+v6YCJ5YC8XG4gIEBJbnB1dCgpIHNob3dDaGVja2JveCA9IGZhbHNlOyAvLyDmmK/lkKbmmL7npLrlpI3pgInmoYZcbiAgQElucHV0KCkgdGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47IC8vIHRpdGxl5qih5p2/XG5cbiAgQE91dHB1dCgpIGNvbHVtbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxBZHZhbmNlZFRhYmxlQ29sdW1uW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDliJfmlbDmja7mlLnlj5jkuovku7Yg55So5LqO5Y+M5ZCR57uR5a6aXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QWR2YW5jZWRUYWJsZVJvd1tdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5bey6YCJ6aG55pS55Y+Y5LqL5Lu2IOeUqOS6juWPjOWQkee7keWumlxuICBAT3V0cHV0KCkgbG9hZDogRXZlbnRFbWl0dGVyPFBhZ2VQYXJhbXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBsb2Fk5LqL5Lu2XG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5o6S5bqP5LqL5Lu2XG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2s6IEV2ZW50RW1pdHRlcjx7IGZpZWxkOiBzdHJpbmc7IHJvd0RhdGE6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g6ZO+5o6l54K55Ye75LqL5Lu2XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBZHZhbmNlZENlbGxDb21wb25lbnQpIGN1c3RvbUNlbGxzOiBBZHZhbmNlZENlbGxDb21wb25lbnRbXTsgLy8g6Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gIEBDb250ZW50Q2hpbGRyZW4oQWR2YW5jZWRGaWx0ZXJDb21wb25lbnQpIGN1c3RvbUZpbHRlcnM6IEFkdmFuY2VkRmlsdGVyQ29tcG9uZW50W107IC8vIOiHquWumuS5ieaQnOe0oue7hOS7tlxuXG4gIGxvYWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpOyAvLyBsb2Fk5rWBXG5cbiAgZGlzcGxheURhdGE6IEFkdmFuY2VkVGFibGVSb3dbXSA9IFtdOyAvLyDlvZPliY3mmL7npLrmlbDmja5cbiAgcGFnZUluZGV4ID0gMTsgLy8g5b2T5YmN6aG156CBXG4gIHNvcnRQYXJhbXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgICAgLy8g6YeN6LWwc29ydFxuICAgICAgaWYgKHRoaXMuc29ydFBhcmFtcyAmJiB0aGlzLnNvcnRQYXJhbXMua2V5ICYmIHRoaXMuc29ydFBhcmFtcy52YWx1ZSkge1xuICAgICAgICB0aGlzLm9uU29ydCh0aGlzLnNvcnRQYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICAvLyDmmK/kuIvmi4npgInmi6nnmoToh6rliqjmt7vliqDor43lhbhcbiAgICAgIGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnNob3dGaWx0ZXIgJiYgY29sdW1uLmZpbHRlclR5cGUgPT09ICdzZWxlY3QnICYmIEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlck9wdGlvbnMpKSB7XG4gICAgICAgICAgY29sdW1uLmxleGljb24gPSBjb2x1bW4ubGV4aWNvbiA/IFsuLi5jb2x1bW4ubGV4aWNvbiwgLi4uY29sdW1uLmZpbHRlck9wdGlvbnNdIDogY29sdW1uLmZpbHRlck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zZWxlY3Rpb25zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrZWRCeVNlbGVjdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgIHRoaXMubG9hZCQucGlwZShkZWJvdW5jZVRpbWUoMjApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8g5riF56m6c2VsZWN0aW9uc1xuICAgICAgdGhpcy5zZWxlY3Rpb25zID0gW107XG4gICAgICB0aGlzLnNlbGVjdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbnMpO1xuICAgICAgLy8g5Y+R5Ye6bG9hZOS6i+S7tlxuICAgICAgdGhpcy5sb2FkLmVtaXQoeyBwYWdlOiB0aGlzLnBhZ2VJbmRleCwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyDpobXpnaLliJ3lp4vljJblrozmiJDlkI7oh6rliqhsb2Fk5LiA5qyhXG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gICAgaWYgKHRoaXMuZml4ZWRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnRvRml4ZWRQYWdpbmF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIOi1i+WAvOiHquWumuS5ieWNleWFg+agvFxuICAgIHRoaXMuY3VzdG9tQ2VsbHMuZm9yRWFjaChjdXN0b21DZWxsID0+IHtcbiAgICAgIGNvbnN0IGZpbmRlZENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IGN1c3RvbUNlbGwuZmllbGQpO1xuICAgICAgaWYgKGZpbmRlZENvbHVtbikgZmluZGVkQ29sdW1uLmN1c3RvbUNlbGwgPSBjdXN0b21DZWxsLnRlbXBsYXRlUmVmO1xuICAgIH0pO1xuICAgIC8vIOi1i+WAvOiHquWumuS5ieaQnOe0oue7hOS7tlxuICAgIHRoaXMuY3VzdG9tRmlsdGVycy5mb3JFYWNoKGN1c3RvbUZpbHRlciA9PiB7XG4gICAgICBjb25zdCBmaW5kZWRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLmZpZWxkID09PSBjdXN0b21GaWx0ZXIuZmllbGQpO1xuICAgICAgaWYgKGZpbmRlZENvbHVtbikge1xuICAgICAgICBmaW5kZWRDb2x1bW4uc2hvd0ZpbHRlciA9IHRydWU7XG4gICAgICAgIGZpbmRlZENvbHVtbi5jdXN0b21GaWx0ZXIgPSBjdXN0b21GaWx0ZXIudGVtcGxhdGVSZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyDkuI3kvb/nlKh0YWtlVW50aWzmmK/lm6DkuLrnm7TmjqV1bnN1YnNjcmliZeaAp+iDveabtOWlvVxuICAgIHRoaXMubG9hZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDooajmoLzlvZPliY3mmL7npLrmlbDmja7mlLnlj5jlm57osINcbiAgICogQHBhcmFtIGN1cnJlbnREYXRhIOW9k+WJjemhteaYvuekuuaVsOaNrlxuICAgKi9cbiAgY3VycmVudFBhZ2VEYXRhQ2hhbmdlKGN1cnJlbnREYXRhOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheURhdGEgPSBjdXJyZW50RGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiDljZXpgInmlLnlj5jlm57osINcbiAgICovXG4gIHNpbmdsZUNoZWNrQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uc0J5Q2hlY2tlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFqOmAieWkjemAieahhuaUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gaXNDaGVja2VkIOaYr+WQpuWFqOmAiVxuICAgKi9cbiAgYWxsQ2hlY2tDaGFuZ2UoaXNDaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YS5mb3JFYWNoKHJvdyA9PiAocm93LmlzQ2hlY2tlZCA9IGlzQ2hlY2tlZCkpO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uc0J5Q2hlY2tlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrmNoZWNrZWTmm7TmlrBzZWxlY3Rpb25zXG4gICAqL1xuICB1cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9ucyA9IHRoaXMuZGlzcGxheURhdGEuZmlsdGVyKHJvdyA9PiByb3cuaXNDaGVja2VkKTtcbiAgICB0aGlzLnNlbGVjdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrnNlbGVjdGlvbnPmm7TmlrBjaGVja2VkXG4gICAqL1xuICB1cGRhdGVDaGVja2VkQnlTZWxlY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheURhdGEuZm9yRWFjaChyb3cgPT4gKHJvdy5pc0NoZWNrZWQgPSB0aGlzLnNlbGVjdGlvbnMuaW5jbHVkZXMocm93KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmhteeggeaUueWPmOWbnuiwg1xuICAgKi9cbiAgcGFnZUluZGV4Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaYvuekuuadoeaVsOaUueWPmOWbnuiwg1xuICAgKi9cbiAgcGFnZVNpemVDaGFuZ2UoKTogdm9pZCB7XG4gICAgLy8g5pi+56S65p2h5pWw5pS55Y+Y5pe25Zue5Yiw6aaW6aG1XG4gICAgdGhpcy5wYWdlSW5kZXggPSAxO1xuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaOkuW6j+aUueWPmFxuICAgKiBAcGFyYW0gc29ydFBhcmFtcyDmjpLluo/lj4LmlbBcbiAgICovXG4gIG9uU29ydChzb3J0UGFyYW1zOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH0pOiB2b2lkIHtcbiAgICAvLyDkv53lrZjmjpLluo/lj4LmlbDvvIznlKjkuo7kuIvmrKHmlbDmja7ov5vmnaXlho3ov5vooYzmjpLluo9cbiAgICB0aGlzLnNvcnRQYXJhbXMgPSBzb3J0UGFyYW1zO1xuICAgIC8vIOafpeaJvuato+WcqOaOkuW6j+eahOWIl1xuICAgIGNvbnN0IHNvcnRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLmZpZWxkID09PSBzb3J0UGFyYW1zLmtleSk7XG5cbiAgICAvLyDlpoLmnpzmsqHmnInoh6rlrprkuYnmjpLluo/vvIzoh6rliqjliY3nq6/mjpLluo9cbiAgICBpZiAoc29ydENvbHVtbiAmJiAhc29ydENvbHVtbi5jdXN0b21Tb3J0KSB7XG4gICAgICB0aGlzLmRhdGEuZGF0YS5zb3J0KChwcmV2aW91cywgZnVydGhlcikgPT5cbiAgICAgICAgc29ydFBhcmFtcy52YWx1ZSA9PT0gJ2Rlc2NlbmQnXG4gICAgICAgICAgPyBmdXJ0aGVyW3NvcnRQYXJhbXMua2V5XSA+IHByZXZpb3VzW3NvcnRQYXJhbXMua2V5XVxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IC0xXG4gICAgICAgICAgOiBwcmV2aW91c1tzb3J0UGFyYW1zLmtleV0gPiBmdXJ0aGVyW3NvcnRQYXJhbXMua2V5XVxuICAgICAgICAgID8gMVxuICAgICAgICAgIDogLTEsXG4gICAgICApO1xuICAgICAgdGhpcy5kYXRhLmRhdGEgPSBbLi4udGhpcy5kYXRhLmRhdGFdO1xuICAgIH1cbiAgICB0aGlzLnNvcnQuZW1pdChzb3J0UGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jlm57osINcbiAgICogQHBhcmFtIGlzT3BlbiDmmK/lkKbmiZPlvIBcbiAgICogQHBhcmFtIGNvbHVtbiDlvZPliY3liJfmqKHlnovmlbDmja5cbiAgICovXG4gIG9uUmFuZ2VQaWNrZXJPcGVuQ2hhbmdlKGlzT3BlbjogYm9vbGVhbiwgY29sdW1uOiBBZHZhbmNlZFRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKGlzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBjb2x1bW4uc2VhcmNoVmFsdWU7XG4gICAgICBpZiAoZGF0ZSAmJiBBcnJheS5pc0FycmF5KGRhdGUpICYmIGRhdGUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbHVtbi5zZWFyY2hWYWx1ZSA9IFtmb3JtYXREYXRlKGRhdGVbMF0sICd5eXl5LU1NLWRkIDAwOjAwOjAwJywgJ3poX0NOJyksIGZvcm1hdERhdGUoZGF0ZVsxXSwgJ3l5eXktTU0tZGQgMjM6NTk6NTknLCAnemhfQ04nKV07XG4gICAgICAgIGNvbHVtbi5kaXNwbGF5VmFsdWUgPSBbZm9ybWF0RGF0ZShkYXRlWzBdLCAneXl5eS1NTS1kZCcsICd6aF9DTicpLCBmb3JtYXREYXRlKGRhdGVbMV0sICd5eXl5LU1NLWRkJywgJ3poX0NOJyldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmn6Xor6Lnoa7orqTlm57osINcbiAgICovXG4gIG9uRmlsdGVyQ29uZmltKGRyb3Bkb3duOiBOekRyb3BEb3duQ29tcG9uZW50KTogdm9pZCB7XG4gICAgZHJvcGRvd24uc2V0VmlzaWJsZVN0YXRlV2hlbihmYWxzZSk7XG4gICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc107XG4gICAgdGhpcy5jb2x1bW5zQ2hhbmdlLmVtaXQodGhpcy5jb2x1bW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm7rlrprliIbpobVcbiAgICovXG4gIHRvRml4ZWRQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIC8vIOayoeaciea7muWKqOadoeaXtuWSjOaciea7muWKqOadoeaXtnRhYmxlQm9keeS8muS4jeS4gOagt++8jOaVheWFiOe7meS4iua7muWKqOadoVxuICAgIHRoaXMuc2Nyb2xsID0geyB5OiAnMHB4JyB9O1xuICAgIC8vIOetieW+hea7muWKqOadoeabtOaWsFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHRhYmxlQm9keSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKTtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignbnotcGFnaW5hdGlvbicpO1xuICAgICAgY29uc3QgdGFibGVCb2R5VG9wID0gdGFibGVCb2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIHRhYmxlQm9keVRvcCAtIHBhZ2luYXRpb24uY2xpZW50SGVpZ2h0IC0gOCArICdweCc7XG4gICAgICB0aGlzLnNjcm9sbCA9IHsgLi4udGhpcy5zY3JvbGwsIHk6IHNjcm9sbEhlaWdodCB9O1xuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKHRhYmxlQm9keSwgJ2hlaWdodCcsIHNjcm9sbEhlaWdodCk7XG4gICAgfSk7XG4gIH1cblxuICBvbmxpbmtDbGljayhmaWVsZDogc3RyaW5nLCByb3dEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmxpbmtDbGljay5lbWl0KHsgZmllbGQsIHJvd0RhdGEgfSk7XG4gIH1cbn1cbiJdfQ==