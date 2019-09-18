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
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewEncapsulation, } from '@angular/core';
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
        this.showQuickJumper = true; // 是否显示快速跳转器
        // 是否显示快速跳转器
        this.size = 'middle'; // 表格size
        // 表格size
        this.paginationSize = 'default'; // 分页size
        // 分页size
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
        dropdown.nzDropdownMenu.setVisibleStateWhen(false);
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
            var pagination = _this._elementRef.nativeElement.querySelector('.p-table-pagination-container');
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
                    template: "<nz-spin [nzTip]=\"'\u52A0\u8F7D\u4E2D...'\" [nzSpinning]=\"loading\">\n  <nz-table\n    #nzTable\n    class=\"p-table\"\n    [nzData]=\"data?.data || []\"\n    [nzTitle]=\"titleTemplate || null\"\n    [nzScroll]=\"scroll\"\n    [nzFrontPagination]=\"frontPagination\"\n    [nzSize]=\"size\"\n    [nzShowPagination]=\"false\"\n    (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n    [class.fixed-pagination]=\"fixedPagination\"\n  >\n    <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n      <tr>\n        <th\n          *ngIf=\"showCheckbox\"\n          nzLeft=\"0px\"\n          nzWidth=\"40px\"\n          nzShowCheckbox\n          [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n          [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n          (nzCheckedChange)=\"allCheckChange($event)\"\n        ></th>\n        <th\n          *ngFor=\"let column of columns\"\n          [nzLeft]=\"column.left\"\n          [nzRight]=\"column.right\"\n          [nzWidth]=\"column.width || '120px'\"\n          [nzShowSort]=\"column.showSort\"\n          [nzSortKey]=\"column.field\"\n          [nzCustomFilter]=\"column.showFilter\"\n        >\n          {{ column.title }}\n          <!-- \u641C\u7D22 -->\n          <ng-container *ngIf=\"column.showFilter\">\n            <i\n              nz-icon\n              nz-dropdown\n              [nzDropdownMenu]=\"dropdownMenu\"\n              nzType=\"search\"\n              class=\"ant-table-filter-icon\"\n              [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n              nzTrigger=\"click\"\n              nzPlacement=\"bottomRight\"\n              [nzClickHide]=\"false\"\n              nzTableFilter\n              #dropdown=\"nzDropdown\"\n            ></i>\n            <nz-dropdown-menu #dropdownMenu=\"nzDropdownMenu\">\n              <div class=\"p-table-filter-panel\">\n                <!-- \u641C\u7D22\u7EC4\u4EF6 -->\n                <ng-container\n                  [ngTemplateOutlet]=\"filterTemplate\"\n                  [ngTemplateOutletContext]=\"{ $implicit: column, dropdown: dropdown }\"\n                ></ng-container>\n                <!-- \u641C\u7D22\u786E\u8BA4\u6309\u94AE -->\n                <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"p-table-filter-button\">\n                  <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                    \u786E\u8BA4\n                  </button>\n                </div>\n              </div>\n            </nz-dropdown-menu>\n          </ng-container>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let row of displayData\">\n        <tr>\n          <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n          <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n            <!-- \u5355\u5143\u683C -->\n            <ng-container [ngTemplateOutlet]=\"cellTemplate\" [ngTemplateOutletContext]=\"{ $implicit: column, row: row }\"></ng-container>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </nz-table>\n\n  <div class=\"p-table-pagination-container\">\n    <p-pagination\n      *ngIf=\"fixedPagination ? showPagination : showPagination && data?.totalSize\"\n      [nzSize]=\"paginationSize\"\n      [nzShowQuickJumper]=\"showQuickJumper\"\n      [(nzPageIndex)]=\"pageIndex\"\n      [(nzPageSize)]=\"pageSize\"\n      [nzShowSizeChanger]=\"showSizeChanger\"\n      [nzPageSizeOptions]=\"pageSizeOptions\"\n      [nzTotal]=\"data?.totalSize || 0\"\n      [nzShowTotal]=\"totalTemplate\"\n      (nzPageIndexChange)=\"pageIndexChange()\"\n      (nzPageSizeChange)=\"pageSizeChange()\"\n    ></p-pagination>\n  </div>\n</nz-spin>\n\n<!-- total\u6A21\u677F -->\n<ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n\n<!-- \u641C\u7D22\u7EC4\u4EF6\u6A21\u677F -->\n<ng-template #filterTemplate let-column let-dropdown=\"dropdown\">\n  <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template #defaultFilterTemplate>\n    <ng-container [ngSwitch]=\"column.filterType\">\n      <!-- select -->\n      <ng-template ngSwitchCase=\"select\">\n        <nz-select\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          [(ngModel)]=\"column.searchValue\"\n          [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n          [style.width]=\"column.filterWidth || '180px'\"\n        >\n          <nz-option *ngFor=\"let option of column.filterOptions || []\" [nzValue]=\"option.value\" [nzLabel]=\"option.label\"></nz-option>\n        </nz-select>\n      </ng-template>\n      <!-- range-picker -->\n      <ng-template ngSwitchCase=\"rangePicker\">\n        <nz-range-picker\n          nzAllowClear\n          [(ngModel)]=\"column.searchValue\"\n          [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n          (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n        ></nz-range-picker>\n      </ng-template>\n      <!-- input -->\n      <ng-template ngSwitchDefault>\n        <nz-input-group [nzSuffix]=\"suffixTemplate\">\n          <input\n            #input\n            nz-input\n            placeholder=\"\u8BF7\u8F93\u5165\"\n            [(ngModel)]=\"column.searchValue\"\n            [style.width]=\"column.filterWidth || '180px'\"\n            (keydown.enter)=\"onFilterConfim(dropdown)\"\n          />\n        </nz-input-group>\n        <ng-template #suffixTemplate>\n          <i\n            nz-icon\n            nz-tooltip\n            class=\"p-table-clear-icon\"\n            nzTheme=\"fill\"\n            nzType=\"close-circle\"\n            *ngIf=\"column.searchValue\"\n            (click)=\"column.searchValue = null; input.focus()\"\n          ></i>\n        </ng-template>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n\n<!-- \u5355\u5143\u683C\u6A21\u677F -->\n<ng-template #cellTemplate let-column let-row=\"row\">\n  <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n  <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n  <ng-template #defaultCellTemplate>\n    <ng-container [ngSwitch]=\"column.type\">\n      <!-- link -->\n      <ng-template ngSwitchCase=\"link\">\n        <a (click)=\"onlinkClick(column['field'], row)\">\n          <smart-text [text]=\"row[column['field']]\"></smart-text>\n        </a>\n      </ng-template>\n      <!-- thumbnail -->\n      <ng-template ngSwitchCase=\"thumbnail\">\n        <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n        <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n          <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n          <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n            <nz-badge [nzCount]=\"row[column['field']]?.length\">\n              <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n            </nz-badge>\n          </ng-template>\n          <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n          <ng-template #noBadgeTemplate>\n            <img\n              viewerImg\n              height=\"24px\"\n              width=\"24px\"\n              *ngFor=\"let url of row[column['field']] || []\"\n              [lazyLoadSrc]=\"url\"\n              style=\"cursor: zoom-in\"\n            />\n          </ng-template>\n        </div>\n      </ng-template>\n      <!-- default -->\n      <ng-template ngSwitchDefault>\n        <smart-text [text]=\"row[column['field']]\"></smart-text>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
        showQuickJumper: [{ type: Input }],
        size: [{ type: Input }],
        paginationSize: [{ type: Input }],
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
    TableComponent.prototype.showQuickJumper;
    /** @type {?} */
    TableComponent.prototype.size;
    /** @type {?} */
    TableComponent.prototype.paginationSize;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFO0lBeUNFLHdCQUFvQixXQUF1QixFQUFVLFVBQXFCO1FBQXRELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWpDakUsWUFBTyxHQUFrQixFQUFFLENBQUMsQ0FBQyxNQUFNOztRQUNuQyxTQUFJLEdBQTRDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUNuRixlQUFVLEdBQWUsRUFBRSxDQUFDLENBQUMsTUFBTTs7UUFFbkMsWUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLFlBQVk7O1FBQzdCLGFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLFNBQVM7O1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVTs7UUFDakMsb0JBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxVQUFVOztRQUNuQyxvQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLFlBQVk7O1FBQ3BDLG9CQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMsWUFBWTs7UUFDcEMsU0FBSSxHQUFtQyxRQUFRLENBQUMsQ0FBQyxTQUFTOztRQUMxRCxtQkFBYyxHQUF3QixTQUFTLENBQUMsQ0FBQyxTQUFTOztRQUUxRCxvQkFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXOztRQUNoRCxpQkFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLFVBQVU7O1FBRy9CLGtCQUFhLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxpQkFBaUI7O1FBQ2xGLHFCQUFnQixHQUE2QixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsaUJBQWlCOztRQUNsRixTQUFJLEdBQTRCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxTQUFTOztRQUM3RCxTQUFJLEdBQXNFLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUNyRyxjQUFTLEdBQWtELElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxTQUFTOztRQUtsRyxVQUFLLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFROztRQUU3QyxnQkFBVyxHQUFlLEVBQUUsQ0FBQyxDQUFDLFNBQVM7O1FBQ3ZDLGNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBR3VELENBQUM7Ozs7O0lBRTlFLG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixTQUFTO1lBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLGVBQWU7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLE1BQU07Z0JBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDOUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQUssTUFBTSxDQUFDLE9BQU8sRUFBSyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2lCQUN2RztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDMUMsV0FBVztZQUNYLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtRQUNFLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQy9DLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFrQjs7O0lBQWxCO1FBQUEsaUJBY0M7UUFiQyxXQUFXO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxVQUFVOztnQkFDM0IsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsS0FBSyxFQUFqQyxDQUFpQyxFQUFDO1lBQ25GLElBQUksWUFBWTtnQkFBRSxZQUFZLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDckUsQ0FBQyxFQUFDLENBQUM7UUFDSCxZQUFZO1FBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxZQUFZOztnQkFDL0IsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxFQUFuQyxDQUFtQyxFQUFDO1lBQ3JGLElBQUksWUFBWSxFQUFFO2dCQUNoQixZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDL0IsWUFBWSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO2FBQ3REO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsOENBQXFCOzs7OztJQUFyQixVQUFzQixXQUFrQjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMENBQWlCOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsdUNBQWM7Ozs7O0lBQWQsVUFBZSxTQUFrQjtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1FBQzdELElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrREFBeUI7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFNBQVMsRUFBYixDQUFhLEVBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsa0RBQXlCOzs7O0lBQXpCO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxFQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHdDQUFlOzs7O0lBQWY7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1Q0FBYzs7OztJQUFkO1FBQ0UsY0FBYztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsK0JBQU07Ozs7O0lBQU4sVUFBTyxVQUErRDtRQUNwRSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7OztZQUV2QixVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxHQUFHLEVBQS9CLENBQStCLEVBQUM7UUFFL0UsbUJBQW1CO1FBQ25CLElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7OztZQUFDLFVBQUMsUUFBUSxFQUFFLE9BQU87Z0JBQ3BDLE9BQUEsVUFBVSxDQUFDLEtBQUssS0FBSyxTQUFTO29CQUM1QixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzt3QkFDbEQsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDTixDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzt3QkFDcEQsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQU5OLENBTU0sRUFDUCxDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILGdEQUF1Qjs7Ozs7O0lBQXZCLFVBQXdCLE1BQWUsRUFBRSxNQUFtQjtRQUMxRCxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7O2dCQUNkLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVztZQUMvQixJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNwRCxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxPQUFPLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2hIO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILHVDQUFjOzs7OztJQUFkLFVBQWUsUUFBNkI7UUFDMUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxvQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwwQ0FBaUI7Ozs7SUFBakI7UUFBQSxpQkFlQztRQWRDLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsTUFBTSx3QkFBUSxJQUFJLENBQUMsTUFBTSxJQUFFLENBQUMsRUFBRSxLQUFLLEdBQUUsQ0FBQztRQUMzQyxVQUFVO1FBQ1YsVUFBVTs7O1FBQUM7O2dCQUNILFlBQVksR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVk7O2dCQUNwRCxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDOztnQkFDM0UsVUFBVSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQzs7Z0JBQzFGLFlBQVksR0FBRyxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHOztnQkFDcEQsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJO1lBQ2pGLDJCQUEyQjtZQUMzQixLQUFJLENBQUMsTUFBTSx3QkFBUSxLQUFJLENBQUMsTUFBTSxJQUFFLENBQUMsRUFBRSxZQUFZLEdBQUUsQ0FBQztZQUNsRCxVQUFVO1lBQ1YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELG9DQUFXOzs7OztJQUFYLFVBQVksS0FBYSxFQUFFLE9BQVk7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBbk9GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLDZxUUFBcUM7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBeEJDLFVBQVU7Z0JBT1YsU0FBUzs7OzBCQW1CUixLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2tDQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUVMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUVMLE1BQU07bUNBQ04sTUFBTTt1QkFDTixNQUFNO3VCQUNOLE1BQU07NEJBQ04sTUFBTTs4QkFFTixlQUFlLFNBQUMsa0JBQWtCO2dDQUNsQyxlQUFlLFNBQUMsb0JBQW9COztJQW1NdkMscUJBQUM7Q0FBQSxBQXBPRCxJQW9PQztTQTdOWSxjQUFjOzs7SUFDekIsaUNBQXFDOztJQUNyQyw4QkFBb0Y7O0lBQ3BGLG9DQUFxQzs7SUFDckMsZ0NBQTBEOztJQUMxRCxpQ0FBeUI7O0lBQ3pCLGtDQUF1Qjs7SUFDdkIseUNBQWlDOztJQUNqQyx3Q0FBK0I7O0lBQy9CLHlDQUFpQzs7SUFDakMseUNBQWdDOztJQUNoQyx5Q0FBZ0M7O0lBQ2hDLDhCQUF5RDs7SUFDekQsd0NBQXlEOztJQUV6RCx5Q0FBNkM7O0lBQzdDLHNDQUE4Qjs7SUFDOUIsdUNBQTBDOztJQUUxQyx1Q0FBMEU7O0lBQzFFLDBDQUEwRTs7SUFDMUUsOEJBQTZEOztJQUM3RCw4QkFBdUc7O0lBQ3ZHLG1DQUF3Rjs7SUFFeEYscUNBQXVFOztJQUN2RSx1Q0FBNkU7O0lBRTdFLCtCQUFvQzs7SUFFcEMscUNBQTZCOztJQUM3QixtQ0FBYzs7SUFDZCxvQ0FBZ0U7Ozs7O0lBRXBELHFDQUErQjs7Ozs7SUFBRSxvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog6KGo5qC857uE5Lu2XG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA1IDEwOjA2OjQxXG4gKi9cblxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiwgVGFibGVQYWdlLCBUYWJsZVJvdyB9IGZyb20gJy4vdGFibGUtaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC10YWJsZScsXG4gIGV4cG9ydEFzOiAncFRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IFRhYmxlQ29sdW1uW10gPSBbXTsgLy8g5YiX5pWw5o2uXG4gIEBJbnB1dCgpIGRhdGE6IHsgZGF0YTogVGFibGVSb3dbXTsgdG90YWxTaXplOiBudW1iZXIgfSA9IHsgZGF0YTogW10sIHRvdGFsU2l6ZTogMCB9OyAvLyDooajmoLzmlbDmja5cbiAgQElucHV0KCkgc2VsZWN0aW9uczogVGFibGVSb3dbXSA9IFtdOyAvLyDlt7LpgInpoblcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9OyAvLyDlm7rlrprooajlpLTvvIzmu5rliqhcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlOyAvLyDooajmoLxsb2FkaW5nXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7IC8vIOaYvuekuuadoeaVsFxuICBASW5wdXQoKSBmcm9udFBhZ2luYXRpb24gPSBmYWxzZTsgLy8g5piv5ZCm5YmN56uv5YiG6aG1XG4gIEBJbnB1dCgpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTsgLy8g5piv5ZCm5pi+56S65YiG6aG15ZmoXG4gIEBJbnB1dCgpIGZpeGVkUGFnaW5hdGlvbiA9IGZhbHNlOyAvLyDmmK/lkKblm7rlrprliIbpobXlmahcbiAgQElucHV0KCkgc2hvd1NpemVDaGFuZ2VyID0gdHJ1ZTsgLy8g5piv5ZCm5pi+56S65p2h5pWw5YiH5o2i5ZmoXG4gIEBJbnB1dCgpIHNob3dRdWlja0p1bXBlciA9IHRydWU7IC8vIOaYr+WQpuaYvuekuuW/q+mAn+i3s+i9rOWZqFxuICBASW5wdXQoKSBzaXplOiAnbWlkZGxlJyB8ICdzbWFsbCcgfCAnZGVmYXVsdCcgPSAnbWlkZGxlJzsgLy8g6KGo5qC8c2l6ZVxuICBASW5wdXQoKSBwYWdpbmF0aW9uU2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JzsgLy8g5YiG6aG1c2l6ZVxuXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMzAsIDUwLCAxMDBdOyAvLyDpobXmlbDpgInmi6nlmajlj6/pgInlgLxcbiAgQElucHV0KCkgc2hvd0NoZWNrYm94ID0gZmFsc2U7IC8vIOaYr+WQpuaYvuekuuWkjemAieahhlxuICBASW5wdXQoKSB0aXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjsgLy8gdGl0bGXmqKHmnb9cblxuICBAT3V0cHV0KCkgY29sdW1uc0NoYW5nZTogRXZlbnRFbWl0dGVyPFRhYmxlQ29sdW1uW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDliJfmlbDmja7mlLnlj5jkuovku7Yg55So5LqO5Y+M5ZCR57uR5a6aXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VGFibGVSb3dbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOW3sumAiemhueaUueWPmOS6i+S7tiDnlKjkuo7lj4zlkJHnu5HlrppcbiAgQE91dHB1dCgpIGxvYWQ6IEV2ZW50RW1pdHRlcjxUYWJsZVBhZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBsb2Fk5LqL5Lu2XG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5o6S5bqP5LqL5Lu2XG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2s6IEV2ZW50RW1pdHRlcjx7IGZpZWxkOiBzdHJpbmc7IHJvd0RhdGE6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g6ZO+5o6l54K55Ye75LqL5Lu2XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJsZUNlbGxDb21wb25lbnQpIGN1c3RvbUNlbGxzOiBUYWJsZUNlbGxDb21wb25lbnRbXTsgLy8g6Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gIEBDb250ZW50Q2hpbGRyZW4oVGFibGVGaWx0ZXJDb21wb25lbnQpIGN1c3RvbUZpbHRlcnM6IFRhYmxlRmlsdGVyQ29tcG9uZW50W107IC8vIOiHquWumuS5ieaQnOe0oue7hOS7tlxuXG4gIGxvYWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpOyAvLyBsb2Fk5rWBXG5cbiAgZGlzcGxheURhdGE6IFRhYmxlUm93W10gPSBbXTsgLy8g5b2T5YmN5pi+56S65pWw5o2uXG4gIHBhZ2VJbmRleCA9IDE7IC8vIOW9k+WJjemhteeggVxuICBzb3J0UGFyYW1zOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXIyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcbiAgICAgIC8vIOmHjei1sHNvcnRcbiAgICAgIGlmICh0aGlzLnNvcnRQYXJhbXMgJiYgdGhpcy5zb3J0UGFyYW1zLmtleSAmJiB0aGlzLnNvcnRQYXJhbXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5vblNvcnQodGhpcy5zb3J0UGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgLy8g5piv5LiL5ouJ6YCJ5oup55qE6Ieq5Yqo5re75Yqg6K+N5YW4XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnNob3dGaWx0ZXIgJiYgY29sdW1uLmZpbHRlclR5cGUgPT09ICdzZWxlY3QnICYmIEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlck9wdGlvbnMpKSB7XG4gICAgICAgICAgY29sdW1uLmxleGljb24gPSBjb2x1bW4ubGV4aWNvbiA/IFsuLi5jb2x1bW4ubGV4aWNvbiwgLi4uY29sdW1uLmZpbHRlck9wdGlvbnNdIDogY29sdW1uLmZpbHRlck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zZWxlY3Rpb25zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrZWRCeVNlbGVjdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgIHRoaXMubG9hZCQucGlwZShkZWJvdW5jZVRpbWUoMjApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8g5Y+R5Ye6bG9hZOS6i+S7tlxuICAgICAgdGhpcy5sb2FkLmVtaXQoeyBwYWdlOiB0aGlzLnBhZ2VJbmRleCwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyDpobXpnaLliJ3lp4vljJblrozmiJDlkI7oh6rliqhsb2Fk5LiA5qyhXG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24gJiYgdGhpcy5maXhlZFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMudG9GaXhlZFBhZ2luYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8g6LWL5YC86Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gICAgdGhpcy5jdXN0b21DZWxscy5mb3JFYWNoKGN1c3RvbUNlbGwgPT4ge1xuICAgICAgY29uc3QgZmluZGVkQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5maWVsZCA9PT0gY3VzdG9tQ2VsbC5maWVsZCk7XG4gICAgICBpZiAoZmluZGVkQ29sdW1uKSBmaW5kZWRDb2x1bW4uY3VzdG9tQ2VsbCA9IGN1c3RvbUNlbGwudGVtcGxhdGVSZWY7XG4gICAgfSk7XG4gICAgLy8g6LWL5YC86Ieq5a6a5LmJ5pCc57Si57uE5Lu2XG4gICAgdGhpcy5jdXN0b21GaWx0ZXJzLmZvckVhY2goY3VzdG9tRmlsdGVyID0+IHtcbiAgICAgIGNvbnN0IGZpbmRlZENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IGN1c3RvbUZpbHRlci5maWVsZCk7XG4gICAgICBpZiAoZmluZGVkQ29sdW1uKSB7XG4gICAgICAgIGZpbmRlZENvbHVtbi5zaG93RmlsdGVyID0gdHJ1ZTtcbiAgICAgICAgZmluZGVkQ29sdW1uLmN1c3RvbUZpbHRlciA9IGN1c3RvbUZpbHRlci50ZW1wbGF0ZVJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIOS4jeS9v+eUqHRha2VVbnRpbOaYr+WboOS4uuebtOaOpXVuc3Vic2NyaWJl5oCn6IO95pu05aW9XG4gICAgdGhpcy5sb2FkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOihqOagvOW9k+WJjeaYvuekuuaVsOaNruaUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gY3VycmVudERhdGEg5b2T5YmN6aG15pi+56S65pWw5o2uXG4gICAqL1xuICBjdXJyZW50UGFnZURhdGFDaGFuZ2UoY3VycmVudERhdGE6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YSA9IGN1cnJlbnREYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIOWNlemAieaUueWPmOWbnuiwg1xuICAgKi9cbiAgc2luZ2xlQ2hlY2tDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk7XG4gIH1cblxuICAvKipcbiAgICog5YWo6YCJ5aSN6YCJ5qGG5pS55Y+Y5Zue6LCDXG4gICAqIEBwYXJhbSBpc0NoZWNrZWQg5piv5ZCm5YWo6YCJXG4gICAqL1xuICBhbGxDaGVja0NoYW5nZShpc0NoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlEYXRhLmZvckVhY2gocm93ID0+IChyb3cuaXNDaGVja2VkID0gaXNDaGVja2VkKSk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uY2hlY2tlZOabtOaWsHNlbGVjdGlvbnNcbiAgICovXG4gIHVwZGF0ZVNlbGVjdGlvbnNCeUNoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25zID0gdGhpcy5kaXNwbGF5RGF0YS5maWx0ZXIocm93ID0+IHJvdy5pc0NoZWNrZWQpO1xuICAgIHRoaXMuc2VsZWN0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uc2VsZWN0aW9uc+abtOaWsGNoZWNrZWRcbiAgICovXG4gIHVwZGF0ZUNoZWNrZWRCeVNlbGVjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YS5mb3JFYWNoKHJvdyA9PiAocm93LmlzQ2hlY2tlZCA9IHRoaXMuc2VsZWN0aW9ucy5pbmNsdWRlcyhyb3cpKSk7XG4gIH1cblxuICAvKipcbiAgICog6aG156CB5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlSW5kZXhDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5pi+56S65p2h5pWw5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlU2l6ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAvLyDmmL7npLrmnaHmlbDmlLnlj5jml7blm57liLDpppbpobVcbiAgICB0aGlzLnBhZ2VJbmRleCA9IDE7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5o6S5bqP5pS55Y+YXG4gICAqIEBwYXJhbSBzb3J0UGFyYW1zIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgb25Tb3J0KHNvcnRQYXJhbXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfSk6IHZvaWQge1xuICAgIC8vIOS/neWtmOaOkuW6j+WPguaVsO+8jOeUqOS6juS4i+asoeaVsOaNrui/m+adpeWGjei/m+ihjOaOkuW6j1xuICAgIHRoaXMuc29ydFBhcmFtcyA9IHNvcnRQYXJhbXM7XG4gICAgLy8g5p+l5om+5q2j5Zyo5o6S5bqP55qE5YiXXG4gICAgY29uc3Qgc29ydENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IHNvcnRQYXJhbXMua2V5KTtcblxuICAgIC8vIOWmguaenOayoeacieiHquWumuS5ieaOkuW6j++8jOiHquWKqOWJjeerr+aOkuW6j1xuICAgIGlmIChzb3J0Q29sdW1uICYmICFzb3J0Q29sdW1uLmN1c3RvbVNvcnQpIHtcbiAgICAgIHRoaXMuZGF0YS5kYXRhLnNvcnQoKHByZXZpb3VzLCBmdXJ0aGVyKSA9PlxuICAgICAgICBzb3J0UGFyYW1zLnZhbHVlID09PSAnZGVzY2VuZCdcbiAgICAgICAgICA/IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldID4gcHJldmlvdXNbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogLTFcbiAgICAgICAgICA6IHByZXZpb3VzW3NvcnRQYXJhbXMua2V5XSA+IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiAtMSxcbiAgICAgICk7XG4gICAgICB0aGlzLmRhdGEuZGF0YSA9IFsuLi50aGlzLmRhdGEuZGF0YV07XG4gICAgfVxuICAgIHRoaXMuc29ydC5lbWl0KHNvcnRQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gaXNPcGVuIOaYr+WQpuaJk+W8gFxuICAgKiBAcGFyYW0gY29sdW1uIOW9k+WJjeWIl+aooeWei+aVsOaNrlxuICAgKi9cbiAgb25SYW5nZVBpY2tlck9wZW5DaGFuZ2UoaXNPcGVuOiBib29sZWFuLCBjb2x1bW46IFRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKGlzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBjb2x1bW4uc2VhcmNoVmFsdWU7XG4gICAgICBpZiAoZGF0ZSAmJiBBcnJheS5pc0FycmF5KGRhdGUpICYmIGRhdGUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbHVtbi5zZWFyY2hWYWx1ZSA9IFtmb3JtYXREYXRlKGRhdGVbMF0sICd5eXl5LU1NLWRkIDAwOjAwOjAwJywgJ3poX0NOJyksIGZvcm1hdERhdGUoZGF0ZVsxXSwgJ3l5eXktTU0tZGQgMjM6NTk6NTknLCAnemhfQ04nKV07XG4gICAgICAgIGNvbHVtbi5kaXNwbGF5VmFsdWUgPSBbZm9ybWF0RGF0ZShkYXRlWzBdLCAneXl5eS1NTS1kZCcsICd6aF9DTicpLCBmb3JtYXREYXRlKGRhdGVbMV0sICd5eXl5LU1NLWRkJywgJ3poX0NOJyldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmn6Xor6Lnoa7orqTlm57osINcbiAgICovXG4gIG9uRmlsdGVyQ29uZmltKGRyb3Bkb3duOiBOekRyb3BEb3duRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgZHJvcGRvd24ubnpEcm9wZG93bk1lbnUuc2V0VmlzaWJsZVN0YXRlV2hlbihmYWxzZSk7XG4gICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc107XG4gICAgdGhpcy5jb2x1bW5zQ2hhbmdlLmVtaXQodGhpcy5jb2x1bW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm7rlrprliIbpobVcbiAgICovXG4gIHRvRml4ZWRQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIC8vIOayoeaciea7muWKqOadoeaXtuWSjOaciea7muWKqOadoeaXtnRhYmxlQm9keeS8muS4jeS4gOagt++8jOaVheWFiOe7meS4iua7muWKqOadoVxuICAgIHRoaXMuc2Nyb2xsID0geyAuLi50aGlzLnNjcm9sbCwgeTogJzBweCcgfTtcbiAgICAvLyDnrYnlvoXmu5rliqjmnaHmm7TmlrBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB0YWJsZUJvZHkgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5Jyk7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wLXRhYmxlLXBhZ2luYXRpb24tY29udGFpbmVyJyk7XG4gICAgICBjb25zdCB0YWJsZUJvZHlUb3AgPSB0YWJsZUJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gdGFibGVCb2R5VG9wIC0gcGFnaW5hdGlvbi5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgLy8g6K6+c2Nyb2xsIOWunumZheS4iuaYr+iuvuS6hm1heC1oZWlnaHRcbiAgICAgIHRoaXMuc2Nyb2xsID0geyAuLi50aGlzLnNjcm9sbCwgeTogc2Nyb2xsSGVpZ2h0IH07XG4gICAgICAvLyDorr5oZWlnaHRcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZSh0YWJsZUJvZHksICdoZWlnaHQnLCBzY3JvbGxIZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgb25saW5rQ2xpY2soZmllbGQ6IHN0cmluZywgcm93RGF0YTogYW55KSB7XG4gICAgdGhpcy5saW5rQ2xpY2suZW1pdCh7IGZpZWxkLCByb3dEYXRhIH0pO1xuICB9XG59XG4iXX0=