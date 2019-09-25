import { __spread, __assign } from 'tslib';
import { formatDate, CommonModule } from '@angular/common';
import { Component, Input, ContentChild, TemplateRef, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, Output, ContentChildren, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from '@pixelmon/pikachu/pagination';
import { SmartTextModule } from '@pixelmon/pikachu/smart-text';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TableData() { }
if (false) {
    /** @type {?} */
    TableData.prototype.data;
    /** @type {?} */
    TableData.prototype.totalSize;
}
/**
 * @record
 */
function TableColumn() { }
if (false) {
    /** @type {?} */
    TableColumn.prototype.title;
    /** @type {?} */
    TableColumn.prototype.field;
    /** @type {?|undefined} */
    TableColumn.prototype.width;
    /** @type {?|undefined} */
    TableColumn.prototype.left;
    /** @type {?|undefined} */
    TableColumn.prototype.right;
    /** @type {?|undefined} */
    TableColumn.prototype.type;
    /** @type {?|undefined} */
    TableColumn.prototype.customCell;
    /** @type {?|undefined} */
    TableColumn.prototype.showSort;
    /** @type {?|undefined} */
    TableColumn.prototype.sortValue;
    /** @type {?|undefined} */
    TableColumn.prototype.customSort;
    /** @type {?|undefined} */
    TableColumn.prototype.showFilter;
    /** @type {?|undefined} */
    TableColumn.prototype.filterType;
    /** @type {?|undefined} */
    TableColumn.prototype.filterOptions;
    /** @type {?|undefined} */
    TableColumn.prototype.filterWidth;
    /** @type {?|undefined} */
    TableColumn.prototype.filterMultiple;
    /** @type {?|undefined} */
    TableColumn.prototype.customFilter;
}
/**
 * @record
 */
function TableRow() { }
if (false) {
    /** @type {?|undefined} */
    TableRow.prototype.isChecked;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function TablePage() { }
if (false) {
    /** @type {?} */
    TablePage.prototype.page;
    /** @type {?} */
    TablePage.prototype.size;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableCellComponent = /** @class */ (function () {
    function TableCellComponent() {
        this.field = ''; // 对应域
    }
    /**
     * @return {?}
     */
    TableCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    TableCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-tableCell',
                    template: '<ng-content> </ng-content>'
                }] }
    ];
    /** @nocollapse */
    TableCellComponent.ctorParameters = function () { return []; };
    TableCellComponent.propDecorators = {
        field: [{ type: Input }],
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return TableCellComponent;
}());
if (false) {
    /** @type {?} */
    TableCellComponent.prototype.field;
    /** @type {?} */
    TableCellComponent.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent() {
        this.field = ''; // 对应域
    }
    /**
     * @return {?}
     */
    TableFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    TableFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-tableFilter',
                    template: '<ng-content> </ng-content>'
                }] }
    ];
    /** @nocollapse */
    TableFilterComponent.ctorParameters = function () { return []; };
    TableFilterComponent.propDecorators = {
        field: [{ type: Input }],
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return TableFilterComponent;
}());
if (false) {
    /** @type {?} */
    TableFilterComponent.prototype.field;
    /** @type {?} */
    TableFilterComponent.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.fixedPagination = false; // 是否固定分页器，直接固定在页面底部
        // 是否固定分页器，直接固定在页面底部
        this.paginationOffset = 0; // 固定分页器的偏移量，用于不固定在页面底部而与页面底部有小许边距
        // 固定分页器的偏移量，用于不固定在页面底部而与页面底部有小许边距
        this.showSizeChanger = true; // 是否显示条数切换器
        // 是否显示条数切换器
        this.showQuickJumper = true; // 是否显示快速跳转器
        // 是否显示快速跳转器
        this.size = 'middle'; // 表格size
        // 表格size
        this.paginationSize = 'default'; // 分页size
        // 表格标题
        this.pageSizeOptions = [10, 30, 50, 100]; // 页数选择器可选值
        // 页数选择器可选值
        this.showCheckbox = false; // 是否显示复选框
        // 是否显示复选框
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
                    column.lexicon = column.lexicon ? __spread(column.lexicon, column.filterOptions) : column.filterOptions;
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
            this.data.data = __spread(this.data.data);
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
        this.columns = __spread(this.columns);
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
        this.scroll = __assign({}, this.scroll, { y: '0px' });
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
            var scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight - _this.paginationOffset + 'px';
            // 设scroll 实际上是设了max-height
            _this.scroll = __assign({}, _this.scroll, { y: scrollHeight });
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
    /**
     * @param {?} imgUrls
     * @return {?}
     */
    TableComponent.prototype.view = /**
     * @param {?} imgUrls
     * @return {?}
     */
    function (imgUrls) {
        /** @type {?} */
        var images = imgUrls.map((/**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            /** @type {?} */
            var image = new Image();
            image.src = url;
            return image;
        }));
        /** @type {?} */
        var hostElement = document.createElement('div');
        hostElement.append.apply(hostElement, __spread(images));
        /** @type {?} */
        var viewer = new Viewer(hostElement, {
            hidden: (/**
             * @return {?}
             */
            function () {
                viewer.destroy();
            }),
        });
        viewer.show();
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-table',
                    exportAs: 'pTable',
                    template: "<nz-spin [nzTip]=\"'\u52A0\u8F7D\u4E2D...'\" [nzSpinning]=\"loading\">\n  <nz-table\n    #nzTable\n    class=\"p-table\"\n    [nzData]=\"data?.data || []\"\n    [nzTitle]=\"title\"\n    [nzScroll]=\"scroll\"\n    [nzFrontPagination]=\"frontPagination\"\n    [nzSize]=\"size\"\n    [nzShowPagination]=\"false\"\n    (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n    [class.fixed-pagination]=\"fixedPagination\"\n  >\n    <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n      <tr>\n        <th\n          *ngIf=\"showCheckbox\"\n          nzLeft=\"0px\"\n          nzWidth=\"40px\"\n          nzShowCheckbox\n          [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n          [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n          (nzCheckedChange)=\"allCheckChange($event)\"\n        ></th>\n        <th\n          *ngFor=\"let column of columns\"\n          [nzLeft]=\"column.left\"\n          [nzRight]=\"column.right\"\n          [nzWidth]=\"column.width || '120px'\"\n          [nzShowSort]=\"column.showSort\"\n          [nzSortKey]=\"column.field\"\n          [nzCustomFilter]=\"column.showFilter\"\n        >\n          {{ column.title }}\n          <!-- \u641C\u7D22 -->\n          <ng-container *ngIf=\"column.showFilter\">\n            <i\n              nz-icon\n              nz-dropdown\n              [nzDropdownMenu]=\"dropdownMenu\"\n              nzType=\"search\"\n              class=\"ant-table-filter-icon\"\n              [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n              nzTrigger=\"click\"\n              nzPlacement=\"bottomRight\"\n              [nzClickHide]=\"false\"\n              nzTableFilter\n              #dropdown=\"nzDropdown\"\n            ></i>\n            <nz-dropdown-menu #dropdownMenu=\"nzDropdownMenu\">\n              <div class=\"p-table-filter-panel\">\n                <!-- \u641C\u7D22\u7EC4\u4EF6 -->\n                <ng-container\n                  [ngTemplateOutlet]=\"filterTemplate\"\n                  [ngTemplateOutletContext]=\"{ $implicit: column, dropdown: dropdown }\"\n                ></ng-container>\n                <!-- \u641C\u7D22\u786E\u8BA4\u6309\u94AE -->\n                <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"p-table-filter-button\">\n                  <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                    \u786E\u8BA4\n                  </button>\n                </div>\n              </div>\n            </nz-dropdown-menu>\n          </ng-container>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let row of displayData\">\n        <tr>\n          <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n          <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n            <!-- \u5355\u5143\u683C -->\n            <ng-container [ngTemplateOutlet]=\"cellTemplate\" [ngTemplateOutletContext]=\"{ $implicit: column, row: row }\"></ng-container>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </nz-table>\n\n  <div class=\"p-table-pagination-container\">\n    <p-pagination\n      *ngIf=\"fixedPagination ? showPagination : showPagination && data?.totalSize\"\n      [nzSize]=\"paginationSize\"\n      [nzShowQuickJumper]=\"showQuickJumper\"\n      [(nzPageIndex)]=\"pageIndex\"\n      [(nzPageSize)]=\"pageSize\"\n      [nzShowSizeChanger]=\"showSizeChanger\"\n      [nzPageSizeOptions]=\"pageSizeOptions\"\n      [nzTotal]=\"data?.totalSize || 0\"\n      [nzShowTotal]=\"totalTemplate\"\n      (nzPageIndexChange)=\"pageIndexChange()\"\n      (nzPageSizeChange)=\"pageSizeChange()\"\n    ></p-pagination>\n  </div>\n</nz-spin>\n\n<!-- total\u6A21\u677F -->\n<ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n\n<!-- \u641C\u7D22\u7EC4\u4EF6\u6A21\u677F -->\n<ng-template #filterTemplate let-column let-dropdown=\"dropdown\">\n  <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template #defaultFilterTemplate>\n    <ng-container [ngSwitch]=\"column.filterType\">\n      <!-- select -->\n      <ng-template ngSwitchCase=\"select\">\n        <nz-select\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          [(ngModel)]=\"column.searchValue\"\n          [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n          [style.width]=\"column.filterWidth || '180px'\"\n        >\n          <nz-option *ngFor=\"let option of column.filterOptions || []\" [nzValue]=\"option.value\" [nzLabel]=\"option.label\"></nz-option>\n        </nz-select>\n      </ng-template>\n      <!-- range-picker -->\n      <ng-template ngSwitchCase=\"rangePicker\">\n        <nz-range-picker\n          nzAllowClear\n          [(ngModel)]=\"column.searchValue\"\n          [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n          (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n        ></nz-range-picker>\n      </ng-template>\n      <!-- input -->\n      <ng-template ngSwitchDefault>\n        <nz-input-group [nzSuffix]=\"suffixTemplate\">\n          <input\n            #input\n            nz-input\n            placeholder=\"\u8BF7\u8F93\u5165\"\n            [(ngModel)]=\"column.searchValue\"\n            [style.width]=\"column.filterWidth || '180px'\"\n            (keydown.enter)=\"onFilterConfim(dropdown)\"\n          />\n        </nz-input-group>\n        <ng-template #suffixTemplate>\n          <i\n            nz-icon\n            nz-tooltip\n            class=\"p-table-clear-icon\"\n            nzTheme=\"fill\"\n            nzType=\"close-circle\"\n            *ngIf=\"column.searchValue\"\n            (click)=\"column.searchValue = null; input.focus()\"\n          ></i>\n        </ng-template>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n\n<!-- \u5355\u5143\u683C\u6A21\u677F -->\n<ng-template #cellTemplate let-column let-row=\"row\">\n  <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n  <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n  <ng-template #defaultCellTemplate>\n    <ng-container [ngSwitch]=\"column.type\">\n      <!-- link -->\n      <ng-template ngSwitchCase=\"link\">\n        <a (click)=\"onlinkClick(column['field'], row)\">\n          <smart-text [text]=\"row[column['field']]\"></smart-text>\n        </a>\n      </ng-template>\n      <!-- thumbnail -->\n      <ng-template ngSwitchCase=\"thumbnail\">\n        <div class=\"p-table-thumbnail\" *ngIf=\"row[column['field']]?.length\" (click)=\"view(row[column['field']])\">\n          <svg\n            t=\"1569221249447\"\n            class=\"icon\"\n            viewBox=\"0 0 1024 1024\"\n            version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            p-id=\"2711\"\n            width=\"100%\"\n            height=\"100%\"\n          >\n            <path\n              d=\"M896 0H128a128 128 0 0 0-128 128v768a128 128 0 0 0 128 128h768a128 128 0 0 0 128-128V128a128 128 0 0 0-128-128zM128 64h768a64 64 0 0 1 64 64v552.64l-169.6-141.12-192 160L241.92 373.76 64 611.2V128a64 64 0 0 1 64-64z m768 896H128a64 64 0 0 1-64-64v-177.92l186.88-249.6 346.56 315.2 192-160L960 764.16V896a64 64 0 0 1-64 64z\"\n              p-id=\"2712\"\n            ></path>\n            <path d=\"M736 416a128 128 0 1 0-128-128 128 128 0 0 0 128 128z m0-192a64 64 0 1 1-64 64 64 64 0 0 1 64-64z\" p-id=\"2713\"></path>\n          </svg>\n          <div class=\"p-table-thumbnail-mask\">{{ row[column['field']].length }}</div>\n        </div>\n      </ng-template>\n      <!-- default -->\n      <ng-template ngSwitchDefault>\n        <smart-text [text]=\"row[column['field']]\"></smart-text>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n",
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
        paginationOffset: [{ type: Input }],
        showSizeChanger: [{ type: Input }],
        showQuickJumper: [{ type: Input }],
        size: [{ type: Input }],
        paginationSize: [{ type: Input }],
        title: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        showCheckbox: [{ type: Input }],
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
    TableComponent.prototype.paginationOffset;
    /** @type {?} */
    TableComponent.prototype.showSizeChanger;
    /** @type {?} */
    TableComponent.prototype.showQuickJumper;
    /** @type {?} */
    TableComponent.prototype.size;
    /** @type {?} */
    TableComponent.prototype.paginationSize;
    /** @type {?} */
    TableComponent.prototype.title;
    /** @type {?} */
    TableComponent.prototype.pageSizeOptions;
    /** @type {?} */
    TableComponent.prototype.showCheckbox;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENT = [TableComponent, TableCellComponent, TableFilterComponent];
/** @type {?} */
var MODULE = [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzBadgeModule,
    NzSelectModule,
    NzDatePickerModule,
    NzSpinModule,
    SmartTextModule,
    PaginationModule,
];
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(COMPONENT),
                    imports: __spread(MODULE),
                    exports: __spread(COMPONENT),
                },] }
    ];
    return TableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TableCellComponent, TableComponent, TableFilterComponent, TableModule };
//# sourceMappingURL=pTable.js.map
