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
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TableCellComponent } from './table-cell.component';
import { TableFilterComponent } from './table-filter.component';
var TableComponent = /** @class */ (function () {
    function TableComponent(_elementRef, _renderer2) {
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
    TableComponent.prototype.ngOnChanges = /**
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
            this.columns.forEach((/**
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
    TableComponent.prototype.ngOnInit = /**
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
    TableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // 页面初始化完成后自动load一次
        this.load$.next();
        if (this.showPagination && this.fixedPagination) {
            this.toFixedPagination();
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.ngAfterContentInit = /**
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
    TableComponent.prototype.ngOnDestroy = /**
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
    TableComponent.prototype.currentPageDataChange = /**
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
    TableComponent.prototype.singleCheckChange = /**
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
    TableComponent.prototype.allCheckChange = /**
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
    TableComponent.prototype.updateSelectionsByChecked = /**
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
    TableComponent.prototype.updateCheckedBySelections = /**
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
    TableComponent.prototype.pageIndexChange = /**
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
    TableComponent.prototype.pageSizeChange = /**
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
    TableComponent.prototype.onSort = /**
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
    TableComponent.prototype.onRangePickerOpenChange = /**
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
    TableComponent.prototype.onFilterConfim = /**
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
    TableComponent.prototype.toFixedPagination = /**
     * 固定分页
     * @return {?}
     */
    function () {
        var _this = this;
        // 没有滚动条时和有滚动条时tableBody会不一样，故先给上滚动条
        this.scroll = tslib_1.__assign({}, this.scroll, { y: '0px' });
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
            var pagination = _this._elementRef.nativeElement.querySelector('.ant-pagination');
            /** @type {?} */
            var tableBodyTop = tableBody.getBoundingClientRect().top;
            /** @type {?} */
            var scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight + 'px';
            // 设scroll 实际上是设了max-height
            _this.scroll = tslib_1.__assign({}, _this.scroll, { y: scrollHeight });
            // 设height
            _this._renderer2.setStyle(tableBody, 'height', scrollHeight);
        }));
    };
    /**
     * @param {?} field
     * @param {?} rowData
     * @return {?}
     */
    TableComponent.prototype.onlinkClick = /**
     * @param {?} field
     * @param {?} rowData
     * @return {?}
     */
    function (field, rowData) {
        this.linkClick.emit({ field: field, rowData: rowData });
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-table',
                    exportAs: 'pTable',
                    template: "<nz-spin [nzTip]=\"'\u52A0\u8F7D\u4E2D...'\" [nzSpinning]=\"loading\">\n  <nz-table\n    #nzTable\n    class=\"p-table\"\n    [nzData]=\"data?.data || []\"\n    [nzTitle]=\"titleTemplate || null\"\n    [nzScroll]=\"scroll\"\n    [nzFrontPagination]=\"frontPagination\"\n    [nzSize]=\"size\"\n    [nzShowPagination]=\"false\"\n    (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n    [class.fixed-pagination]=\"fixedPagination\"\n  >\n    <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n      <tr>\n        <th\n          *ngIf=\"showCheckbox\"\n          nzLeft=\"0px\"\n          nzWidth=\"40px\"\n          nzShowCheckbox\n          [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n          [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n          (nzCheckedChange)=\"allCheckChange($event)\"\n        ></th>\n        <th\n          *ngFor=\"let column of columns\"\n          [nzLeft]=\"column.left\"\n          [nzRight]=\"column.right\"\n          [nzWidth]=\"column.width || '120px'\"\n          [nzShowSort]=\"column.showSort\"\n          [nzSortKey]=\"column.field\"\n          [nzCustomFilter]=\"column.showFilter\"\n        >\n          {{ column.title }}\n          <!-- \u641C\u7D22 -->\n          <nz-dropdown *ngIf=\"column.showFilter\" nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter #dropdown>\n            <i nz-icon nzType=\"search\" class=\"ant-table-filter-icon\" [class.ant-table-filter-open]=\"dropdown.nzVisible\" nz-dropdown></i>\n            <div class=\"p-table-filter-panel\">\n              <!-- \u641C\u7D22\u7EC4\u4EF6 -->\n              <ng-container\n                [ngTemplateOutlet]=\"filterTemplate\"\n                [ngTemplateOutletContext]=\"{ $implicit: column, dropdown: dropdown }\"\n              ></ng-container>\n              <!-- \u641C\u7D22\u786E\u8BA4\u6309\u94AE -->\n              <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"p-table-filter-button\">\n                <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                  \u786E\u8BA4\n                </button>\n              </div>\n            </div>\n          </nz-dropdown>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let row of displayData\">\n        <tr>\n          <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n          <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n            <!-- \u5355\u5143\u683C -->\n            <ng-container [ngTemplateOutlet]=\"cellTemplate\" [ngTemplateOutletContext]=\"{ $implicit: column, row: row }\"></ng-container>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </nz-table>\n\n  <p-pagination\n    *ngIf=\"fixedPagination ? showPagination : showPagination && data?.totalSize\"\n    nzSize=\"small\"\n    [(nzPageIndex)]=\"pageIndex\"\n    [(nzPageSize)]=\"pageSize\"\n    [nzShowSizeChanger]=\"showSizeChanger\"\n    [nzPageSizeOptions]=\"pageSizeOptions\"\n    [nzTotal]=\"data?.totalSize || 0\"\n    [nzShowTotal]=\"totalTemplate\"\n    (nzPageIndexChange)=\"pageIndexChange()\"\n    (nzPageSizeChange)=\"pageSizeChange()\"\n  ></p-pagination>\n</nz-spin>\n\n<!-- total\u6A21\u677F -->\n<ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n\n<!-- \u641C\u7D22\u7EC4\u4EF6\u6A21\u677F -->\n<ng-template #filterTemplate let-column let-dropdown=\"dropdown\">\n  <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template #defaultFilterTemplate>\n    <ng-container [ngSwitch]=\"column.filterType\">\n      <!-- select -->\n      <ng-template ngSwitchCase=\"select\">\n        <nz-select\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          [(ngModel)]=\"column.searchValue\"\n          [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n          [style.width]=\"column.filterWidth || '180px'\"\n        >\n          <nz-option *ngFor=\"let option of column.filterOptions || []\" [nzValue]=\"option.value\" [nzLabel]=\"option.label\"></nz-option>\n        </nz-select>\n      </ng-template>\n      <!-- range-picker -->\n      <ng-template ngSwitchCase=\"rangePicker\">\n        <nz-range-picker\n          nzAllowClear\n          [(ngModel)]=\"column.searchValue\"\n          [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n          (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n        ></nz-range-picker>\n      </ng-template>\n      <!-- input -->\n      <ng-template ngSwitchDefault>\n        <nz-input-group [nzSuffix]=\"suffixTemplate\">\n          <input\n            #input\n            nz-input\n            placeholder=\"\u8BF7\u8F93\u5165\"\n            [(ngModel)]=\"column.searchValue\"\n            [style.width]=\"column.filterWidth || '180px'\"\n            (keydown.enter)=\"onFilterConfim(dropdown)\"\n          />\n        </nz-input-group>\n        <ng-template #suffixTemplate>\n          <i\n            nz-icon\n            nz-tooltip\n            class=\"p-table-clear-icon\"\n            nzTheme=\"fill\"\n            nzType=\"close-circle\"\n            *ngIf=\"column.searchValue\"\n            (click)=\"column.searchValue = null; input.focus()\"\n          ></i>\n        </ng-template>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n\n<!-- \u5355\u5143\u683C\u6A21\u677F -->\n<ng-template #cellTemplate let-column let-row=\"row\">\n  <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n  <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n  <ng-template #defaultCellTemplate>\n    <ng-container [ngSwitch]=\"column.type\">\n      <!-- link -->\n      <ng-template ngSwitchCase=\"link\">\n        <a (click)=\"onlinkClick(column['field'], row)\">\n          <smart-text [text]=\"row[column['field']]\"></smart-text>\n        </a>\n      </ng-template>\n      <!-- thumbnail -->\n      <ng-template ngSwitchCase=\"thumbnail\">\n        <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n        <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n          <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n          <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n            <nz-badge [nzCount]=\"row[column['field']]?.length\">\n              <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n            </nz-badge>\n          </ng-template>\n          <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n          <ng-template #noBadgeTemplate>\n            <img\n              viewerImg\n              height=\"24px\"\n              width=\"24px\"\n              *ngFor=\"let url of row[column['field']] || []\"\n              [lazyLoadSrc]=\"url\"\n              style=\"cursor: zoom-in\"\n            />\n          </ng-template>\n        </div>\n      </ng-template>\n      <!-- default -->\n      <ng-template ngSwitchDefault>\n        <smart-text [text]=\"row[column['field']]\"></smart-text>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: ["td{word-break:break-all}:host ::ng-deep .ant-table-scroll{position:relative}:host ::ng-deep .ant-pagination{margin:2px;padding:16px 0;text-align:right;box-shadow:0 0 2px 0 rgba(194,194,194,.5)}:host ::ng-deep .fixed-pagination .ant-table-placeholder{position:absolute;bottom:0;width:100%;border-top:none}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TableComponent.propDecorators = {
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
        customCells: [{ type: ContentChildren, args: [TableCellComponent,] }],
        customFilters: [{ type: ContentChildren, args: [TableFilterComponent,] }]
    };
    return TableComponent;
}());
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.columns;
    /** @type {?} */
    TableComponent.prototype.data;
    /** @type {?} */
    TableComponent.prototype.selections;
    /** @type {?} */
    TableComponent.prototype.scroll;
    /** @type {?} */
    TableComponent.prototype.loading;
    /** @type {?} */
    TableComponent.prototype.pageSize;
    /** @type {?} */
    TableComponent.prototype.frontPagination;
    /** @type {?} */
    TableComponent.prototype.showPagination;
    /** @type {?} */
    TableComponent.prototype.fixedPagination;
    /** @type {?} */
    TableComponent.prototype.showSizeChanger;
    /** @type {?} */
    TableComponent.prototype.size;
    /** @type {?} */
    TableComponent.prototype.pageSizeOptions;
    /** @type {?} */
    TableComponent.prototype.showCheckbox;
    /** @type {?} */
    TableComponent.prototype.titleTemplate;
    /** @type {?} */
    TableComponent.prototype.columnsChange;
    /** @type {?} */
    TableComponent.prototype.selectionsChange;
    /** @type {?} */
    TableComponent.prototype.load;
    /** @type {?} */
    TableComponent.prototype.sort;
    /** @type {?} */
    TableComponent.prototype.linkClick;
    /** @type {?} */
    TableComponent.prototype.customCells;
    /** @type {?} */
    TableComponent.prototype.customFilters;
    /** @type {?} */
    TableComponent.prototype.load$;
    /** @type {?} */
    TableComponent.prototype.displayData;
    /** @type {?} */
    TableComponent.prototype.pageIndex;
    /** @type {?} */
    TableComponent.prototype.sortParams;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._renderer2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvIiwic291cmNlcyI6WyJ0YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQW1DLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZPLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFO0lBdUNFLHdCQUFvQixXQUF1QixFQUFVLFVBQXFCO1FBQXRELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQTlCakUsWUFBTyxHQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNOztRQUNwQyxTQUFJLEdBQTZDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUNwRixlQUFVLEdBQWdCLEVBQUUsQ0FBQyxDQUFDLE1BQU07O1FBRXBDLFlBQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxZQUFZOztRQUM3QixhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTzs7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxTQUFTOztRQUNsQyxtQkFBYyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVU7O1FB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QUFNOzRCQUNOLE1BQU07OEJBRU4sZUFBZSxTQUFDLGtCQUFrQjtnQ0FDbEMsZUFBZSxTQUFDLG9CQUFvQjs7SUFzTXZDLHFCQUFDO0NBQUEsQUFyT0QsSUFxT0M7U0E3TlksY0FBYzs7O0lBQ3pCLGlDQUFzQzs7SUFDdEMsOEJBQXFGOztJQUNyRixvQ0FBc0M7O0lBQ3RDLGdDQUEwRDs7SUFDMUQsaUNBQXlCOztJQUN6QixrQ0FBdUI7O0lBQ3ZCLHlDQUFpQzs7SUFDakMsd0NBQStCOztJQUMvQix5Q0FBaUM7O0lBQ2pDLHlDQUFnQzs7SUFDaEMsOEJBQXlCOztJQUN6Qix5Q0FBNkM7O0lBQzdDLHNDQUE4Qjs7SUFDOUIsdUNBQTBDOztJQUUxQyx1Q0FBMkU7O0lBQzNFLDBDQUEyRTs7SUFDM0UsOEJBQThEOztJQUM5RCw4QkFBdUc7O0lBQ3ZHLG1DQUF3Rjs7SUFFeEYscUNBQXVFOztJQUN2RSx1Q0FBNkU7O0lBRTdFLCtCQUFvQzs7SUFFcEMscUNBQThCOztJQUM5QixtQ0FBYzs7SUFDZCxvQ0FBZ0U7Ozs7O0lBRXBELHFDQUErQjs7Ozs7SUFBRSxvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog6KGo5qC857uE5Lu2XG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA1IDEwOjA2OjQxXG4gKi9cblxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFRhYmxlQ29sdW1uLCBQVGFibGVQYWdlLCBQVGFibGVSb3cgfSBmcm9tICcuL3RhYmxlLWludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtdGFibGUnLFxuICBleHBvcnRBczogJ3BUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29sdW1uczogUFRhYmxlQ29sdW1uW10gPSBbXTsgLy8g5YiX5pWw5o2uXG4gIEBJbnB1dCgpIGRhdGE6IHsgZGF0YTogUFRhYmxlUm93W107IHRvdGFsU2l6ZTogbnVtYmVyIH0gPSB7IGRhdGE6IFtdLCB0b3RhbFNpemU6IDAgfTsgLy8g6KGo5qC85pWw5o2uXG4gIEBJbnB1dCgpIHNlbGVjdGlvbnM6IFBUYWJsZVJvd1tdID0gW107IC8vIOW3sumAiemhuVxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH07IC8vIOWbuuWumuihqOWktO+8jOa7muWKqFxuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7IC8vIOihqOagvGxvYWRpbmdcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDsgLy8g5pi+56S65p2h5pWwXG4gIEBJbnB1dCgpIGZyb250UGFnaW5hdGlvbiA9IGZhbHNlOyAvLyDmmK/lkKbliY3nq6/liIbpobVcbiAgQElucHV0KCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlOyAvLyDmmK/lkKbmmL7npLrliIbpobXlmahcbiAgQElucHV0KCkgZml4ZWRQYWdpbmF0aW9uID0gZmFsc2U7IC8vIOaYr+WQpuWbuuWumuWIhumhteWZqFxuICBASW5wdXQoKSBzaG93U2l6ZUNoYW5nZXIgPSB0cnVlOyAvLyDmmK/lkKbmmL7npLrmnaHmlbDliIfmjaLlmahcbiAgQElucHV0KCkgc2l6ZSA9ICdtaWRkbGUnOyAvLyDooajmoLxzaXplXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMzAsIDUwLCAxMDBdOyAvLyDpobXmlbDpgInmi6nlmajlj6/pgInlgLxcbiAgQElucHV0KCkgc2hvd0NoZWNrYm94ID0gZmFsc2U7IC8vIOaYr+WQpuaYvuekuuWkjemAieahhlxuICBASW5wdXQoKSB0aXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjsgLy8gdGl0bGXmqKHmnb9cblxuICBAT3V0cHV0KCkgY29sdW1uc0NoYW5nZTogRXZlbnRFbWl0dGVyPFBUYWJsZUNvbHVtbltdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5YiX5pWw5o2u5pS55Y+Y5LqL5Lu2IOeUqOS6juWPjOWQkee7keWumlxuICBAT3V0cHV0KCkgc2VsZWN0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPFBUYWJsZVJvd1tdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5bey6YCJ6aG55pS55Y+Y5LqL5Lu2IOeUqOS6juWPjOWQkee7keWumlxuICBAT3V0cHV0KCkgbG9hZDogRXZlbnRFbWl0dGVyPFBUYWJsZVBhZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBsb2Fk5LqL5Lu2XG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5o6S5bqP5LqL5Lu2XG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2s6IEV2ZW50RW1pdHRlcjx7IGZpZWxkOiBzdHJpbmc7IHJvd0RhdGE6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g6ZO+5o6l54K55Ye75LqL5Lu2XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJsZUNlbGxDb21wb25lbnQpIGN1c3RvbUNlbGxzOiBUYWJsZUNlbGxDb21wb25lbnRbXTsgLy8g6Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gIEBDb250ZW50Q2hpbGRyZW4oVGFibGVGaWx0ZXJDb21wb25lbnQpIGN1c3RvbUZpbHRlcnM6IFRhYmxlRmlsdGVyQ29tcG9uZW50W107IC8vIOiHquWumuS5ieaQnOe0oue7hOS7tlxuXG4gIGxvYWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpOyAvLyBsb2Fk5rWBXG5cbiAgZGlzcGxheURhdGE6IFBUYWJsZVJvd1tdID0gW107IC8vIOW9k+WJjeaYvuekuuaVsOaNrlxuICBwYWdlSW5kZXggPSAxOyAvLyDlvZPliY3pobXnoIFcbiAgc29ydFBhcmFtczogeyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICAvLyDph43otbBzb3J0XG4gICAgICBpZiAodGhpcy5zb3J0UGFyYW1zICYmIHRoaXMuc29ydFBhcmFtcy5rZXkgJiYgdGhpcy5zb3J0UGFyYW1zLnZhbHVlKSB7XG4gICAgICAgIHRoaXMub25Tb3J0KHRoaXMuc29ydFBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIC8vIOaYr+S4i+aLiemAieaLqeeahOiHquWKqOa3u+WKoOivjeWFuFxuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5zaG93RmlsdGVyICYmIGNvbHVtbi5maWx0ZXJUeXBlID09PSAnc2VsZWN0JyAmJiBBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXJPcHRpb25zKSkge1xuICAgICAgICAgIGNvbHVtbi5sZXhpY29uID0gY29sdW1uLmxleGljb24gPyBbLi4uY29sdW1uLmxleGljb24sIC4uLmNvbHVtbi5maWx0ZXJPcHRpb25zXSA6IGNvbHVtbi5maWx0ZXJPcHRpb25zO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc2VsZWN0aW9ucykge1xuICAgICAgdGhpcy51cGRhdGVDaGVja2VkQnlTZWxlY3Rpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICB0aGlzLmxvYWQkLnBpcGUoZGVib3VuY2VUaW1lKDIwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vIOa4heepunNlbGVjdGlvbnNcbiAgICAgIHRoaXMuc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3Rpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb25zKTtcbiAgICAgIC8vIOWPkeWHumxvYWTkuovku7ZcbiAgICAgIHRoaXMubG9hZC5lbWl0KHsgcGFnZTogdGhpcy5wYWdlSW5kZXgsIHNpemU6IHRoaXMucGFnZVNpemUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8g6aG16Z2i5Yid5aeL5YyW5a6M5oiQ5ZCO6Ieq5YqobG9hZOS4gOasoVxuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uICYmIHRoaXMuZml4ZWRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnRvRml4ZWRQYWdpbmF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIOi1i+WAvOiHquWumuS5ieWNleWFg+agvFxuICAgIHRoaXMuY3VzdG9tQ2VsbHMuZm9yRWFjaChjdXN0b21DZWxsID0+IHtcbiAgICAgIGNvbnN0IGZpbmRlZENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IGN1c3RvbUNlbGwuZmllbGQpO1xuICAgICAgaWYgKGZpbmRlZENvbHVtbikgZmluZGVkQ29sdW1uLmN1c3RvbUNlbGwgPSBjdXN0b21DZWxsLnRlbXBsYXRlUmVmO1xuICAgIH0pO1xuICAgIC8vIOi1i+WAvOiHquWumuS5ieaQnOe0oue7hOS7tlxuICAgIHRoaXMuY3VzdG9tRmlsdGVycy5mb3JFYWNoKGN1c3RvbUZpbHRlciA9PiB7XG4gICAgICBjb25zdCBmaW5kZWRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLmZpZWxkID09PSBjdXN0b21GaWx0ZXIuZmllbGQpO1xuICAgICAgaWYgKGZpbmRlZENvbHVtbikge1xuICAgICAgICBmaW5kZWRDb2x1bW4uc2hvd0ZpbHRlciA9IHRydWU7XG4gICAgICAgIGZpbmRlZENvbHVtbi5jdXN0b21GaWx0ZXIgPSBjdXN0b21GaWx0ZXIudGVtcGxhdGVSZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyDkuI3kvb/nlKh0YWtlVW50aWzmmK/lm6DkuLrnm7TmjqV1bnN1YnNjcmliZeaAp+iDveabtOWlvVxuICAgIHRoaXMubG9hZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDooajmoLzlvZPliY3mmL7npLrmlbDmja7mlLnlj5jlm57osINcbiAgICogQHBhcmFtIGN1cnJlbnREYXRhIOW9k+WJjemhteaYvuekuuaVsOaNrlxuICAgKi9cbiAgY3VycmVudFBhZ2VEYXRhQ2hhbmdlKGN1cnJlbnREYXRhOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheURhdGEgPSBjdXJyZW50RGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiDljZXpgInmlLnlj5jlm57osINcbiAgICovXG4gIHNpbmdsZUNoZWNrQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uc0J5Q2hlY2tlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFqOmAieWkjemAieahhuaUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gaXNDaGVja2VkIOaYr+WQpuWFqOmAiVxuICAgKi9cbiAgYWxsQ2hlY2tDaGFuZ2UoaXNDaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YS5mb3JFYWNoKHJvdyA9PiAocm93LmlzQ2hlY2tlZCA9IGlzQ2hlY2tlZCkpO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uc0J5Q2hlY2tlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrmNoZWNrZWTmm7TmlrBzZWxlY3Rpb25zXG4gICAqL1xuICB1cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9ucyA9IHRoaXMuZGlzcGxheURhdGEuZmlsdGVyKHJvdyA9PiByb3cuaXNDaGVja2VkKTtcbiAgICB0aGlzLnNlbGVjdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrnNlbGVjdGlvbnPmm7TmlrBjaGVja2VkXG4gICAqL1xuICB1cGRhdGVDaGVja2VkQnlTZWxlY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheURhdGEuZm9yRWFjaChyb3cgPT4gKHJvdy5pc0NoZWNrZWQgPSB0aGlzLnNlbGVjdGlvbnMuaW5jbHVkZXMocm93KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmhteeggeaUueWPmOWbnuiwg1xuICAgKi9cbiAgcGFnZUluZGV4Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaYvuekuuadoeaVsOaUueWPmOWbnuiwg1xuICAgKi9cbiAgcGFnZVNpemVDaGFuZ2UoKTogdm9pZCB7XG4gICAgLy8g5pi+56S65p2h5pWw5pS55Y+Y5pe25Zue5Yiw6aaW6aG1XG4gICAgdGhpcy5wYWdlSW5kZXggPSAxO1xuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaOkuW6j+aUueWPmFxuICAgKiBAcGFyYW0gc29ydFBhcmFtcyDmjpLluo/lj4LmlbBcbiAgICovXG4gIG9uU29ydChzb3J0UGFyYW1zOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH0pOiB2b2lkIHtcbiAgICAvLyDkv53lrZjmjpLluo/lj4LmlbDvvIznlKjkuo7kuIvmrKHmlbDmja7ov5vmnaXlho3ov5vooYzmjpLluo9cbiAgICB0aGlzLnNvcnRQYXJhbXMgPSBzb3J0UGFyYW1zO1xuICAgIC8vIOafpeaJvuato+WcqOaOkuW6j+eahOWIl1xuICAgIGNvbnN0IHNvcnRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLmZpZWxkID09PSBzb3J0UGFyYW1zLmtleSk7XG5cbiAgICAvLyDlpoLmnpzmsqHmnInoh6rlrprkuYnmjpLluo/vvIzoh6rliqjliY3nq6/mjpLluo9cbiAgICBpZiAoc29ydENvbHVtbiAmJiAhc29ydENvbHVtbi5jdXN0b21Tb3J0KSB7XG4gICAgICB0aGlzLmRhdGEuZGF0YS5zb3J0KChwcmV2aW91cywgZnVydGhlcikgPT5cbiAgICAgICAgc29ydFBhcmFtcy52YWx1ZSA9PT0gJ2Rlc2NlbmQnXG4gICAgICAgICAgPyBmdXJ0aGVyW3NvcnRQYXJhbXMua2V5XSA+IHByZXZpb3VzW3NvcnRQYXJhbXMua2V5XVxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IC0xXG4gICAgICAgICAgOiBwcmV2aW91c1tzb3J0UGFyYW1zLmtleV0gPiBmdXJ0aGVyW3NvcnRQYXJhbXMua2V5XVxuICAgICAgICAgID8gMVxuICAgICAgICAgIDogLTEsXG4gICAgICApO1xuICAgICAgdGhpcy5kYXRhLmRhdGEgPSBbLi4udGhpcy5kYXRhLmRhdGFdO1xuICAgIH1cbiAgICB0aGlzLnNvcnQuZW1pdChzb3J0UGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jlm57osINcbiAgICogQHBhcmFtIGlzT3BlbiDmmK/lkKbmiZPlvIBcbiAgICogQHBhcmFtIGNvbHVtbiDlvZPliY3liJfmqKHlnovmlbDmja5cbiAgICovXG4gIG9uUmFuZ2VQaWNrZXJPcGVuQ2hhbmdlKGlzT3BlbjogYm9vbGVhbiwgY29sdW1uOiBQVGFibGVDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IGNvbHVtbi5zZWFyY2hWYWx1ZTtcbiAgICAgIGlmIChkYXRlICYmIEFycmF5LmlzQXJyYXkoZGF0ZSkgJiYgZGF0ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29sdW1uLnNlYXJjaFZhbHVlID0gW2Zvcm1hdERhdGUoZGF0ZVswXSwgJ3l5eXktTU0tZGQgMDA6MDA6MDAnLCAnemhfQ04nKSwgZm9ybWF0RGF0ZShkYXRlWzFdLCAneXl5eS1NTS1kZCAyMzo1OTo1OScsICd6aF9DTicpXTtcbiAgICAgICAgY29sdW1uLmRpc3BsYXlWYWx1ZSA9IFtmb3JtYXREYXRlKGRhdGVbMF0sICd5eXl5LU1NLWRkJywgJ3poX0NOJyksIGZvcm1hdERhdGUoZGF0ZVsxXSwgJ3l5eXktTU0tZGQnLCAnemhfQ04nKV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOafpeivouehruiupOWbnuiwg1xuICAgKi9cbiAgb25GaWx0ZXJDb25maW0oZHJvcGRvd246IE56RHJvcERvd25Db21wb25lbnQpOiB2b2lkIHtcbiAgICBkcm9wZG93bi5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcbiAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zXTtcbiAgICB0aGlzLmNvbHVtbnNDaGFuZ2UuZW1pdCh0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWbuuWumuWIhumhtVxuICAgKi9cbiAgdG9GaXhlZFBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgLy8g5rKh5pyJ5rua5Yqo5p2h5pe25ZKM5pyJ5rua5Yqo5p2h5pe2dGFibGVCb2R55Lya5LiN5LiA5qC377yM5pWF5YWI57uZ5LiK5rua5Yqo5p2hXG4gICAgdGhpcy5zY3JvbGwgPSB7IC4uLnRoaXMuc2Nyb2xsLCB5OiAnMHB4JyB9O1xuICAgIC8vIOetieW+hea7muWKqOadoeabtOaWsFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHRhYmxlQm9keSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKTtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC1wYWdpbmF0aW9uJyk7XG4gICAgICBjb25zdCB0YWJsZUJvZHlUb3AgPSB0YWJsZUJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gdGFibGVCb2R5VG9wIC0gcGFnaW5hdGlvbi5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgLy8g6K6+c2Nyb2xsIOWunumZheS4iuaYr+iuvuS6hm1heC1oZWlnaHRcbiAgICAgIHRoaXMuc2Nyb2xsID0geyAuLi50aGlzLnNjcm9sbCwgeTogc2Nyb2xsSGVpZ2h0IH07XG4gICAgICAvLyDorr5oZWlnaHRcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZSh0YWJsZUJvZHksICdoZWlnaHQnLCBzY3JvbGxIZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgb25saW5rQ2xpY2soZmllbGQ6IHN0cmluZywgcm93RGF0YTogYW55KSB7XG4gICAgdGhpcy5saW5rQ2xpY2suZW1pdCh7IGZpZWxkLCByb3dEYXRhIH0pO1xuICB9XG59XG4iXX0=