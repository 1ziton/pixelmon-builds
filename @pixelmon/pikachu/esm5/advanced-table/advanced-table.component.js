/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.data = { content: [], totalElements: 0 }; // 表格数据
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
        this.fixedPagination = true; // 是否固定分页器
        // 是否固定分页器
        this.showSizeChanger = true; // 是否显示条数切换器
        // 是否显示条数切换器
        this.size = 'middle'; // 表格size
        // 表格size
        this.pageSizeOptions = [10, 30, 50, 100]; // 页数选择器可选值
        // 页数选择器可选值
        this.showCheckbox = false; // 是否显示复选框
        // 是否显示复选框
        this.showTitle = true; // 是否有title
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
        // 当前页码
        this.queryParams = {};
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
            // 智能词典
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
            _this.load.emit([{ page: _this.pageIndex, size: _this.pageSize }, _this.queryParams]);
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
     * 表格当前显示数据改变时调用
     * @param currentData 当前页显示数据
     */
    /**
     * 表格当前显示数据改变时调用
     * @param {?} currentData 当前页显示数据
     * @return {?}
     */
    AdvancedTableComponent.prototype.currentPageDataChange = /**
     * 表格当前显示数据改变时调用
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
        this.updateSelections();
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
        this.updateSelections();
    };
    /**
     * 更新selections
     */
    /**
     * 更新selections
     * @return {?}
     */
    AdvancedTableComponent.prototype.updateSelections = /**
     * 更新selections
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
            this.data.content.sort((/**
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
            this.data.content = tslib_1.__spread(this.data.content);
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
     * @return {?}
     */
    AdvancedTableComponent.prototype.onFilterConfim = /**
     * 查询确认回调
     * @return {?}
     */
    function () {
        this.columns = tslib_1.__spread(this.columns); // 传入子组件query-display
        this.columnsChange.emit(this.columns); // 传出父组件
    };
    /**
     * 查询参数改变回调
     * @param queryParams 查询参数
     */
    /**
     * 查询参数改变回调
     * @param {?} queryParams 查询参数
     * @return {?}
     */
    AdvancedTableComponent.prototype.onQueryChange = /**
     * 查询参数改变回调
     * @param {?} queryParams 查询参数
     * @return {?}
     */
    function (queryParams) {
        this.queryParams = queryParams;
        this.load$.next();
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
        // zorro设计缺陷，没有滚动条时和有滚动条时tableBody会不一样，故先给上滚动条
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
                    selector: 'advanced-table',
                    template: "<!-- \u5305\u88F9\u8868\u683C+\u5206\u9875 -->\n<nz-spin [nzSpinning]=\"loading\">\n  <nz-table\n    [nzData]=\"data?.content || []\"\n    [nzTitle]=\"showTitle ? titleTemplate || defaultTitleTemplate : null\"\n    [nzScroll]=\"scroll\"\n    [nzFrontPagination]=\"frontPagination\"\n    [nzSize]=\"size\"\n    [nzShowPagination]=\"false\"\n    [(nzPageIndex)]=\"pageIndex\"\n    [(nzPageSize)]=\"pageSize\"\n    [nzShowSizeChanger]=\"showSizeChanger\"\n    [nzPageSizeOptions]=\"pageSizeOptions\"\n    [nzTotal]=\"data?.totalElements || 0\"\n    [nzShowTotal]=\"totalTemplate\"\n    (nzPageIndexChange)=\"pageIndexChange()\"\n    (nzPageSizeChange)=\"pageSizeChange()\"\n    (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n    [class.fixed-pagination]=\"fixedPagination\"\n  >\n    <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n      <tr>\n        <th\n          *ngIf=\"showCheckbox\"\n          nzLeft=\"0px\"\n          nzWidth=\"40px\"\n          nzShowCheckbox\n          [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n          [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n          (nzCheckedChange)=\"allCheckChange($event)\"\n        ></th>\n        <th\n          *ngFor=\"let column of columns\"\n          [nzLeft]=\"column.left\"\n          [nzRight]=\"column.right\"\n          [nzWidth]=\"column.width || '120px'\"\n          [nzShowSort]=\"column.showSort\"\n          [nzSortKey]=\"column.field\"\n          [nzCustomFilter]=\"column.showFilter\"\n        >\n          {{ column.title }}\n          <nz-dropdown\n            *ngIf=\"column.showFilter\"\n            nzTrigger=\"click\"\n            nzPlacement=\"bottomRight\"\n            [nzClickHide]=\"false\"\n            nzTableFilter\n            #dropdown\n          >\n            <i\n              nz-icon\n              nzType=\"search\"\n              class=\"ant-table-filter-icon\"\n              [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n              nz-dropdown\n            ></i>\n            <div class=\"padding-8\">\n              <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n              <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n                <ng-container\n                  [ngTemplateOutlet]=\"column.customFilter\"\n                  [ngTemplateOutletContext]=\"{ $implicit: column }\"\n                ></ng-container>\n              </ng-template>\n              <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n              <ng-template #defaultFilterTemplate>\n                <ng-container [ngSwitch]=\"column.filterType\">\n                  <!-- select -->\n                  <ng-template ngSwitchCase=\"select\">\n                    <nz-select\n                      nzAllowClear\n                      nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n                      [(ngModel)]=\"column.searchValue\"\n                      [nzMode]=\"filterMultiple ? 'multiple' : 'default'\"\n                      [style.width]=\"column.filterWidth || '180px'\"\n                    >\n                      <nz-option\n                        *ngFor=\"let option of column.filterOptions || []\"\n                        [nzValue]=\"option.value\"\n                        [nzLabel]=\"option.label\"\n                      ></nz-option>\n                    </nz-select>\n                  </ng-template>\n                  <!-- range-picker -->\n                  <ng-template ngSwitchCase=\"rangePicker\">\n                    <nz-range-picker\n                      nzAllowClear\n                      [(ngModel)]=\"column.searchValue\"\n                      [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n                      (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n                    ></nz-range-picker>\n                  </ng-template>\n                  <!-- input -->\n                  <ng-template ngSwitchDefault>\n                    <nz-input-group [nzSuffix]=\"suffixTemplate\">\n                      <input\n                        #input\n                        nz-input\n                        placeholder=\"\u8BF7\u8F93\u5165\"\n                        [(ngModel)]=\"column.searchValue\"\n                        [style.width]=\"column.filterWidth || '180px'\"\n                        (keydown.enter)=\"dropdown.setVisibleStateWhen(false); onFilterConfim()\"\n                      />\n                    </nz-input-group>\n                    <ng-template #suffixTemplate>\n                      <i\n                        nz-icon\n                        nz-tooltip\n                        class=\"clear-icon\"\n                        nzTheme=\"fill\"\n                        nzType=\"close-circle\"\n                        *ngIf=\"column.searchValue\"\n                        (click)=\"column.searchValue = null; input.focus()\"\n                      ></i>\n                    </ng-template>\n                  </ng-template>\n                </ng-container>\n              </ng-template>\n              <!-- \u6309\u94AE -->\n              <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"margin-top-8\">\n                <button\n                  nz-button\n                  nzSize=\"small\"\n                  nzType=\"primary\"\n                  (click)=\"dropdown.setVisibleStateWhen(false); onFilterConfim()\"\n                >\n                  \u786E\u8BA4\n                </button>\n              </div>\n            </div>\n          </nz-dropdown>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let row of displayData\">\n        <tr>\n          <td\n            *ngIf=\"showCheckbox\"\n            nzLeft=\"0px\"\n            nzShowCheckbox\n            [(nzChecked)]=\"row.isChecked\"\n            (nzCheckedChange)=\"singleCheckChange()\"\n          ></td>\n          <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n            <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n            <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n              <ng-container\n                [ngTemplateOutlet]=\"column.customCell\"\n                [ngTemplateOutletContext]=\"{ $implicit: row }\"\n              ></ng-container>\n            </ng-template>\n            <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n            <ng-template #defaultCellTemplate>\n              <ng-container [ngSwitch]=\"column.type\">\n                <!-- link -->\n                <ng-template ngSwitchCase=\"link\">\n                  <a (click)=\"onlinkClick(column['field'], row)\">\n                    <smart-text [text]=\"row[column['field']]\"></smart-text>\n                  </a>\n                </ng-template>\n                <!-- thumbnail -->\n                <ng-template ngSwitchCase=\"thumbnail\">\n                  <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n                  <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n                    <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n                    <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n                      <nz-badge [nzCount]=\"row[column['field']]?.length\">\n                        <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n                      </nz-badge>\n                    </ng-template>\n                    <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n                    <ng-template #noBadgeTemplate>\n                      <img\n                        viewerImg\n                        height=\"24px\"\n                        width=\"24px\"\n                        *ngFor=\"let url of row[column['field']] || []\"\n                        [lazyLoadSrc]=\"url\"\n                        style=\"cursor: zoom-in\"\n                      />\n                    </ng-template>\n                  </div>\n                </ng-template>\n                <!-- default -->\n                <ng-template ngSwitchDefault>\n                  <smart-text [text]=\"row[column['field']]\"></smart-text>\n                </ng-template>\n              </ng-container>\n            </ng-template>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n\n    <!-- total\u6A21\u677F -->\n    <ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n    <!-- \u9ED8\u8BA4title\u6A21\u677F -->\n    <ng-template #defaultTitleTemplate>\n      <div class=\"content-header\" [hidden]=\"selections.length\">\n        <div class=\"content-title\">\u5217\u8868</div>\n        <div class=\"content-query\">\n          <query-display [(columns)]=\"columns\" (queryChange)=\"onQueryChange($event)\"></query-display>\n        </div>\n      </div>\n      <div class=\"content-header\" [hidden]=\"!selections.length\">\n        <div class=\"selection-box\">\n          \u5DF2\u9009 <span class=\"color-theme\">{{ selections.length }}</span> \u9879\n          <a *ngIf=\"selections.length\" class=\"margin-left-16\" (click)=\"allCheckChange(false)\">\u53D6\u6D88</a>\n        </div>\n        <!-- \u7ED1\u5B9A\u64CD\u4F5C\u5217\u8868\u7684ng-content -->\n        <ng-content select=\".operation-box\"> </ng-content>\n      </div>\n    </ng-template>\n  </nz-table>\n\n  <!-- \u989D\u5916\u5206\u9875\u7EC4\u4EF6\uFF0C\u4E0D\u4F7F\u7528\u8868\u683C\u81EA\u5E26\u5206\u9875\uFF0C\u4E3A\u4E86\u6EE1\u8DB3UI\u7684\u6CA1\u6709\u6570\u636E\u4E5F\u8981\u663E\u793A\u5206\u9875\u7684\u9700\u6C42 -->\n  <nz-pagination\n    nzSize=\"small\"\n    [(nzPageIndex)]=\"pageIndex\"\n    [(nzPageSize)]=\"pageSize\"\n    [nzShowSizeChanger]=\"showSizeChanger\"\n    [nzPageSizeOptions]=\"pageSizeOptions\"\n    [nzTotal]=\"data?.totalElements || 0\"\n    [nzShowTotal]=\"totalTemplate\"\n    (nzPageIndexChange)=\"pageIndexChange()\"\n    (nzPageSizeChange)=\"pageSizeChange()\"\n  >\n  </nz-pagination>\n</nz-spin>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["nz-pagination{display:flex;height:48px;flex-direction:column;justify-content:center;align-items:flex-end;margin-top:2px;box-shadow:0 -2px 5px 0 rgba(194,194,194,.5)}:host ::ng-deep .ant-table-scroll{position:relative}:host ::ng-deep .fixed-pagination .ant-table-placeholder{position:absolute;width:100%;bottom:0}td{word-break:break-all}.clear-icon{color:rgba(0,0,0,.25);font-size:12px;vertical-align:top;cursor:pointer;transition:color .3s}.clear-icon:hover{color:rgba(0,0,0,.45)}"]
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
        showTitle: [{ type: Input }],
        titleTemplate: [{ type: Input }],
        filterMultiple: [{ type: Input }],
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
    AdvancedTableComponent.prototype.showTitle;
    /** @type {?} */
    AdvancedTableComponent.prototype.titleTemplate;
    /** @type {?} */
    AdvancedTableComponent.prototype.filterMultiple;
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
    AdvancedTableComponent.prototype.queryParams;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvIiwic291cmNlcyI6WyJhZHZhbmNlZC10YWJsZS9hZHZhbmNlZC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdEU7SUF3Q0UsZ0NBQW9CLFdBQXVCLEVBQVUsVUFBcUI7UUFBdEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBakNqRSxZQUFPLEdBQWEsRUFBRSxDQUFDLENBQUMsTUFBTTs7UUFDOUIsU0FBSSxHQUFpRCxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzs7UUFDL0YsZUFBVSxHQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU07O1FBRWpDLFlBQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxZQUFZOztRQUM3QixhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTzs7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxTQUFTOztRQUNsQyxtQkFBYyxHQUFHLElBQUksQ0FBQyxD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bUM7O0lBQ25DLHdDQUEwRDs7SUFDMUQseUNBQXlCOztJQUN6QiwwQ0FBdUI7O0lBQ3ZCLGlEQUFpQzs7SUFDakMsZ0RBQStCOztJQUMvQixpREFBZ0M7O0lBQ2hDLGlEQUFnQzs7SUFDaEMsc0NBQXlCOztJQUN6QixpREFBNkM7O0lBQzdDLDhDQUE4Qjs7SUFDOUIsMkNBQTBCOztJQUMxQiwrQ0FBMEM7O0lBQzFDLGdEQUFnQzs7SUFFaEMsK0NBQXFFOztJQUNyRSxrREFBd0U7O0lBQ3hFLHNDQUF5Rjs7SUFDekYsc0NBQXVHOztJQUN2RywyQ0FBd0Y7O0lBRXhGLDZDQUE2RTs7SUFDN0UsK0NBQW1GOztJQUVuRix1Q0FBb0M7O0lBRXBDLDZDQUF3Qjs7SUFDeEIsMkNBQWM7O0lBQ2QsNkNBQXlDOztJQUN6Qyw0Q0FBZ0U7Ozs7O0lBRXBELDZDQUErQjs7Ozs7SUFBRSw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog6KGo5qC857uE5Lu2XG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA1IDEwOjA2OjQxXG4gKi9cblxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZHZhbmNlZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEFkdmFuY2VkRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbiwgUGFnZVBhcmFtcyB9IGZyb20gJy4vYWR2YW5jZWQtdGFibGUubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWR2YW5jZWQtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZHZhbmNlZC10YWJsZS5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb2x1bW5zOiBDb2x1bW5bXSA9IFtdOyAvLyDliJfmlbDmja5cbiAgQElucHV0KCkgZGF0YTogeyBjb250ZW50OiBvYmplY3RbXTsgdG90YWxFbGVtZW50czogbnVtYmVyIH0gPSB7IGNvbnRlbnQ6IFtdLCB0b3RhbEVsZW1lbnRzOiAwIH07IC8vIOihqOagvOaVsOaNrlxuICBASW5wdXQoKSBzZWxlY3Rpb25zOiBvYmplY3RbXSA9IFtdOyAvLyDlt7LpgInpoblcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9OyAvLyDlm7rlrprooajlpLTvvIzmu5rliqhcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlOyAvLyDooajmoLxsb2FkaW5nXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7IC8vIOaYvuekuuadoeaVsFxuICBASW5wdXQoKSBmcm9udFBhZ2luYXRpb24gPSBmYWxzZTsgLy8g5piv5ZCm5YmN56uv5YiG6aG1XG4gIEBJbnB1dCgpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTsgLy8g5piv5ZCm5pi+56S65YiG6aG15ZmoXG4gIEBJbnB1dCgpIGZpeGVkUGFnaW5hdGlvbiA9IHRydWU7IC8vIOaYr+WQpuWbuuWumuWIhumhteWZqFxuICBASW5wdXQoKSBzaG93U2l6ZUNoYW5nZXIgPSB0cnVlOyAvLyDmmK/lkKbmmL7npLrmnaHmlbDliIfmjaLlmahcbiAgQElucHV0KCkgc2l6ZSA9ICdtaWRkbGUnOyAvLyDooajmoLxzaXplXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMzAsIDUwLCAxMDBdOyAvLyDpobXmlbDpgInmi6nlmajlj6/pgInlgLxcbiAgQElucHV0KCkgc2hvd0NoZWNrYm94ID0gZmFsc2U7IC8vIOaYr+WQpuaYvuekuuWkjemAieahhlxuICBASW5wdXQoKSBzaG93VGl0bGUgPSB0cnVlOyAvLyDmmK/lkKbmnIl0aXRsZVxuICBASW5wdXQoKSB0aXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjsgLy8gdGl0bGXmqKHmnb9cbiAgQElucHV0KCkgZmlsdGVyTXVsdGlwbGU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgY29sdW1uc0NoYW5nZTogRXZlbnRFbWl0dGVyPENvbHVtbltdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5YiX5pWw5o2u5pS55Y+Y5LqL5Lu2IOeUqOS6juWPjOWQkee7keWumlxuICBAT3V0cHV0KCkgc2VsZWN0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPG9iamVjdFtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5bey6YCJ6aG55pS55Y+Y5LqL5Lu2IOeUqOS6juWPjOWQkee7keWumlxuICBAT3V0cHV0KCkgbG9hZDogRXZlbnRFbWl0dGVyPFtQYWdlUGFyYW1zLCB7IFtrZXk6IHN0cmluZ106IGFueSB9P10+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBsb2Fk5LqL5Lu2XG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5o6S5bqP5LqL5Lu2XG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2s6IEV2ZW50RW1pdHRlcjx7IGZpZWxkOiBzdHJpbmc7IHJvd0RhdGE6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g6ZO+5o6l54K55Ye75LqL5Lu2XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBZHZhbmNlZENlbGxDb21wb25lbnQpIGN1c3RvbUNlbGxzOiBBZHZhbmNlZENlbGxDb21wb25lbnRbXTsgLy8g6Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gIEBDb250ZW50Q2hpbGRyZW4oQWR2YW5jZWRGaWx0ZXJDb21wb25lbnQpIGN1c3RvbUZpbHRlcnM6IEFkdmFuY2VkRmlsdGVyQ29tcG9uZW50W107IC8vIOiHquWumuS5ieaQnOe0oue7hOS7tlxuXG4gIGxvYWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpOyAvLyBsb2Fk5rWBXG5cbiAgZGlzcGxheURhdGE6IGFueVtdID0gW107IC8vIOW9k+WJjeaYvuekuuaVsOaNrlxuICBwYWdlSW5kZXggPSAxOyAvLyDlvZPliY3pobXnoIFcbiAgcXVlcnlQYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgc29ydFBhcmFtczogeyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICAvLyDph43otbBzb3J0XG4gICAgICBpZiAodGhpcy5zb3J0UGFyYW1zICYmIHRoaXMuc29ydFBhcmFtcy5rZXkgJiYgdGhpcy5zb3J0UGFyYW1zLnZhbHVlKSB7XG4gICAgICAgIHRoaXMub25Tb3J0KHRoaXMuc29ydFBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIC8vIOaZuuiDveivjeWFuFxuICAgICAgY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZS5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uc2hvd0ZpbHRlciAmJiBjb2x1bW4uZmlsdGVyVHlwZSA9PT0gJ3NlbGVjdCcgJiYgQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyT3B0aW9ucykpIHtcbiAgICAgICAgICBjb2x1bW4ubGV4aWNvbiA9IGNvbHVtbi5sZXhpY29uID8gWy4uLmNvbHVtbi5sZXhpY29uLCAuLi5jb2x1bW4uZmlsdGVyT3B0aW9uc10gOiBjb2x1bW4uZmlsdGVyT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICB0aGlzLmxvYWQkLnBpcGUoZGVib3VuY2VUaW1lKDIwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vIOa4heepunNlbGVjdGlvbnNcbiAgICAgIHRoaXMuc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3Rpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb25zKTtcbiAgICAgIC8vIOWPkeWHumxvYWTkuovku7ZcbiAgICAgIHRoaXMubG9hZC5lbWl0KFt7IHBhZ2U6IHRoaXMucGFnZUluZGV4LCBzaXplOiB0aGlzLnBhZ2VTaXplIH0sIHRoaXMucXVlcnlQYXJhbXNdKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyDpobXpnaLliJ3lp4vljJblrozmiJDlkI7oh6rliqhsb2Fk5LiA5qyhXG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gICAgaWYgKHRoaXMuZml4ZWRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnRvRml4ZWRQYWdpbmF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIOi1i+WAvOiHquWumuS5ieWNleWFg+agvFxuICAgIHRoaXMuY3VzdG9tQ2VsbHMuZm9yRWFjaChjdXN0b21DZWxsID0+IHtcbiAgICAgIGNvbnN0IGZpbmRlZENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IGN1c3RvbUNlbGwuZmllbGQpO1xuICAgICAgaWYgKGZpbmRlZENvbHVtbikgZmluZGVkQ29sdW1uLmN1c3RvbUNlbGwgPSBjdXN0b21DZWxsLnRlbXBsYXRlUmVmO1xuICAgIH0pO1xuICAgIC8vIOi1i+WAvOiHquWumuS5ieaQnOe0oue7hOS7tlxuICAgIHRoaXMuY3VzdG9tRmlsdGVycy5mb3JFYWNoKGN1c3RvbUZpbHRlciA9PiB7XG4gICAgICBjb25zdCBmaW5kZWRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLmZpZWxkID09PSBjdXN0b21GaWx0ZXIuZmllbGQpO1xuICAgICAgaWYgKGZpbmRlZENvbHVtbikge1xuICAgICAgICBmaW5kZWRDb2x1bW4uc2hvd0ZpbHRlciA9IHRydWU7XG4gICAgICAgIGZpbmRlZENvbHVtbi5jdXN0b21GaWx0ZXIgPSBjdXN0b21GaWx0ZXIudGVtcGxhdGVSZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyDkuI3kvb/nlKh0YWtlVW50aWzmmK/lm6DkuLrnm7TmjqV1bnN1YnNjcmliZeaAp+iDveabtOWlvVxuICAgIHRoaXMubG9hZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDooajmoLzlvZPliY3mmL7npLrmlbDmja7mlLnlj5jml7bosIPnlKhcbiAgICogQHBhcmFtIGN1cnJlbnREYXRhIOW9k+WJjemhteaYvuekuuaVsOaNrlxuICAgKi9cbiAgY3VycmVudFBhZ2VEYXRhQ2hhbmdlKGN1cnJlbnREYXRhOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheURhdGEgPSBjdXJyZW50RGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiDljZXpgInmlLnlj5jlm57osINcbiAgICovXG4gIHNpbmdsZUNoZWNrQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFqOmAieWkjemAieahhuaUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gaXNDaGVja2VkIOaYr+WQpuWFqOmAiVxuICAgKi9cbiAgYWxsQ2hlY2tDaGFuZ2UoaXNDaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YS5mb3JFYWNoKHJvdyA9PiAocm93LmlzQ2hlY2tlZCA9IGlzQ2hlY2tlZCkpO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOabtOaWsHNlbGVjdGlvbnNcbiAgICovXG4gIHVwZGF0ZVNlbGVjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25zID0gdGhpcy5kaXNwbGF5RGF0YS5maWx0ZXIocm93ID0+IHJvdy5pc0NoZWNrZWQpO1xuICAgIHRoaXMuc2VsZWN0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog6aG156CB5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlSW5kZXhDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5pi+56S65p2h5pWw5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlU2l6ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAvLyDmmL7npLrmnaHmlbDmlLnlj5jml7blm57liLDpppbpobVcbiAgICB0aGlzLnBhZ2VJbmRleCA9IDE7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5o6S5bqP5pS55Y+YXG4gICAqIEBwYXJhbSBzb3J0UGFyYW1zIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgb25Tb3J0KHNvcnRQYXJhbXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfSk6IHZvaWQge1xuICAgIC8vIOS/neWtmOaOkuW6j+WPguaVsO+8jOeUqOS6juS4i+asoeaVsOaNrui/m+adpeWGjei/m+ihjOaOkuW6j1xuICAgIHRoaXMuc29ydFBhcmFtcyA9IHNvcnRQYXJhbXM7XG4gICAgLy8g5p+l5om+5q2j5Zyo5o6S5bqP55qE5YiXXG4gICAgY29uc3Qgc29ydENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IHNvcnRQYXJhbXMua2V5KTtcblxuICAgIC8vIOWmguaenOayoeacieiHquWumuS5ieaOkuW6j++8jOiHquWKqOWJjeerr+aOkuW6j1xuICAgIGlmIChzb3J0Q29sdW1uICYmICFzb3J0Q29sdW1uLmN1c3RvbVNvcnQpIHtcbiAgICAgIHRoaXMuZGF0YS5jb250ZW50LnNvcnQoKHByZXZpb3VzLCBmdXJ0aGVyKSA9PlxuICAgICAgICBzb3J0UGFyYW1zLnZhbHVlID09PSAnZGVzY2VuZCdcbiAgICAgICAgICA/IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldID4gcHJldmlvdXNbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogLTFcbiAgICAgICAgICA6IHByZXZpb3VzW3NvcnRQYXJhbXMua2V5XSA+IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiAtMSxcbiAgICAgICk7XG4gICAgICB0aGlzLmRhdGEuY29udGVudCA9IFsuLi50aGlzLmRhdGEuY29udGVudF07XG4gICAgfVxuICAgIHRoaXMuc29ydC5lbWl0KHNvcnRQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gaXNPcGVuIOaYr+WQpuaJk+W8gFxuICAgKiBAcGFyYW0gY29sdW1uIOW9k+WJjeWIl+aooeWei+aVsOaNrlxuICAgKi9cbiAgb25SYW5nZVBpY2tlck9wZW5DaGFuZ2UoaXNPcGVuOiBib29sZWFuLCBjb2x1bW46IENvbHVtbik6IHZvaWQge1xuICAgIGlmIChpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBkYXRlID0gY29sdW1uLnNlYXJjaFZhbHVlO1xuICAgICAgaWYgKGRhdGUgJiYgQXJyYXkuaXNBcnJheShkYXRlKSAmJiBkYXRlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb2x1bW4uc2VhcmNoVmFsdWUgPSBbZm9ybWF0RGF0ZShkYXRlWzBdLCAneXl5eS1NTS1kZCAwMDowMDowMCcsICd6aF9DTicpLCBmb3JtYXREYXRlKGRhdGVbMV0sICd5eXl5LU1NLWRkIDIzOjU5OjU5JywgJ3poX0NOJyldO1xuICAgICAgICBjb2x1bW4uZGlzcGxheVZhbHVlID0gW2Zvcm1hdERhdGUoZGF0ZVswXSwgJ3l5eXktTU0tZGQnLCAnemhfQ04nKSwgZm9ybWF0RGF0ZShkYXRlWzFdLCAneXl5eS1NTS1kZCcsICd6aF9DTicpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5p+l6K+i56Gu6K6k5Zue6LCDXG4gICAqL1xuICBvbkZpbHRlckNvbmZpbSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zXTsgLy8g5Lyg5YWl5a2Q57uE5Lu2cXVlcnktZGlzcGxheVxuICAgIHRoaXMuY29sdW1uc0NoYW5nZS5lbWl0KHRoaXMuY29sdW1ucyk7IC8vIOS8oOWHuueItue7hOS7tlxuICB9XG5cbiAgLyoqXG4gICAqIOafpeivouWPguaVsOaUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gcXVlcnlQYXJhbXMg5p+l6K+i5Y+C5pWwXG4gICAqL1xuICBvblF1ZXJ5Q2hhbmdlKHF1ZXJ5UGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogdm9pZCB7XG4gICAgdGhpcy5xdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zO1xuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWbuuWumuWIhumhtVxuICAgKi9cbiAgdG9GaXhlZFBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgLy8gem9ycm/orr7orqHnvLrpmbfvvIzmsqHmnInmu5rliqjmnaHml7blkozmnInmu5rliqjmnaHml7Z0YWJsZUJvZHnkvJrkuI3kuIDmoLfvvIzmlYXlhYjnu5nkuIrmu5rliqjmnaFcbiAgICB0aGlzLnNjcm9sbCA9IHsgeTogJzBweCcgfTtcbiAgICAvLyDnrYnlvoXmu5rliqjmnaHmm7TmlrBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB0YWJsZUJvZHkgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5Jyk7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ256LXBhZ2luYXRpb24nKTtcbiAgICAgIGNvbnN0IHRhYmxlQm9keVRvcCA9IHRhYmxlQm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSB0YWJsZUJvZHlUb3AgLSBwYWdpbmF0aW9uLmNsaWVudEhlaWdodCAtIDggKyAncHgnO1xuICAgICAgdGhpcy5zY3JvbGwgPSB7IC4uLnRoaXMuc2Nyb2xsLCB5OiBzY3JvbGxIZWlnaHQgfTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZSh0YWJsZUJvZHksICdoZWlnaHQnLCBzY3JvbGxIZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgb25saW5rQ2xpY2soZmllbGQ6IHN0cmluZywgcm93RGF0YTogYW55KSB7XG4gICAgdGhpcy5saW5rQ2xpY2suZW1pdCh7IGZpZWxkLCByb3dEYXRhIH0pO1xuICB9XG59XG4iXX0=