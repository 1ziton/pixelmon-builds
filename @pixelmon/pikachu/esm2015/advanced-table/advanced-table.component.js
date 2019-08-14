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
    ngOnChanges(changes) {
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
            column => {
                if (column.showFilter && column.filterType === 'select' && Array.isArray(column.filterOptions)) {
                    column.lexicon = column.lexicon ? [...column.lexicon, ...column.filterOptions] : column.filterOptions;
                }
            }));
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
            this.load.emit([{ page: this.pageIndex, size: this.pageSize }, this.queryParams]);
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
     * 表格当前显示数据改变时调用
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
        this.updateSelections();
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
        this.updateSelections();
    }
    /**
     * 更新selections
     * @return {?}
     */
    updateSelections() {
        this.selections = this.displayData.filter((/**
         * @param {?} row
         * @return {?}
         */
        row => row.isChecked));
        this.selectionsChange.emit(this.selections);
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
            this.data.content.sort((/**
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
            this.data.content = [...this.data.content];
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
     * @return {?}
     */
    onFilterConfim() {
        this.columns = [...this.columns]; // 传入子组件query-display
        this.columnsChange.emit(this.columns); // 传出父组件
    }
    /**
     * 查询参数改变回调
     * @param {?} queryParams 查询参数
     * @return {?}
     */
    onQueryChange(queryParams) {
        this.queryParams = queryParams;
        this.load$.next();
    }
    /**
     * 固定分页
     * @return {?}
     */
    toFixedPagination() {
        // zorro设计缺陷，没有滚动条时和有滚动条时tableBody会不一样，故先给上滚动条
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
                selector: 'advanced-table',
                template: "<!-- \u5305\u88F9\u8868\u683C+\u5206\u9875 -->\n<nz-spin [nzSpinning]=\"loading\">\n  <nz-table\n    [nzData]=\"data?.content || []\"\n    [nzTitle]=\"showTitle ? titleTemplate || defaultTitleTemplate : null\"\n    [nzScroll]=\"scroll\"\n    [nzFrontPagination]=\"frontPagination\"\n    [nzSize]=\"size\"\n    [nzShowPagination]=\"false\"\n    [(nzPageIndex)]=\"pageIndex\"\n    [(nzPageSize)]=\"pageSize\"\n    [nzShowSizeChanger]=\"showSizeChanger\"\n    [nzPageSizeOptions]=\"pageSizeOptions\"\n    [nzTotal]=\"data?.totalElements || 0\"\n    [nzShowTotal]=\"totalTemplate\"\n    (nzPageIndexChange)=\"pageIndexChange()\"\n    (nzPageSizeChange)=\"pageSizeChange()\"\n    (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n    [class.fixed-pagination]=\"fixedPagination\"\n  >\n    <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n      <tr>\n        <th\n          *ngIf=\"showCheckbox\"\n          nzLeft=\"0px\"\n          nzWidth=\"40px\"\n          nzShowCheckbox\n          [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n          [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n          (nzCheckedChange)=\"allCheckChange($event)\"\n        ></th>\n        <th\n          *ngFor=\"let column of columns\"\n          [nzLeft]=\"column.left\"\n          [nzRight]=\"column.right\"\n          [nzWidth]=\"column.width || '120px'\"\n          [nzShowSort]=\"column.showSort\"\n          [nzSortKey]=\"column.field\"\n          [nzCustomFilter]=\"column.showFilter\"\n        >\n          {{ column.title }}\n          <nz-dropdown\n            *ngIf=\"column.showFilter\"\n            nzTrigger=\"click\"\n            nzPlacement=\"bottomRight\"\n            [nzClickHide]=\"false\"\n            nzTableFilter\n            #dropdown\n          >\n            <i\n              nz-icon\n              nzType=\"search\"\n              class=\"ant-table-filter-icon\"\n              [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n              nz-dropdown\n            ></i>\n            <div class=\"padding-8\">\n              <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n              <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n                <ng-container\n                  [ngTemplateOutlet]=\"column.customFilter\"\n                  [ngTemplateOutletContext]=\"{ $implicit: column }\"\n                ></ng-container>\n              </ng-template>\n              <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n              <ng-template #defaultFilterTemplate>\n                <ng-container [ngSwitch]=\"column.filterType\">\n                  <!-- select -->\n                  <ng-template ngSwitchCase=\"select\">\n                    <nz-select\n                      nzAllowClear\n                      nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n                      [(ngModel)]=\"column.searchValue\"\n                      [nzMode]=\"filterMultiple ? 'multiple' : 'default'\"\n                      [style.width]=\"column.filterWidth || '180px'\"\n                    >\n                      <nz-option\n                        *ngFor=\"let option of column.filterOptions || []\"\n                        [nzValue]=\"option.value\"\n                        [nzLabel]=\"option.label\"\n                      ></nz-option>\n                    </nz-select>\n                  </ng-template>\n                  <!-- range-picker -->\n                  <ng-template ngSwitchCase=\"rangePicker\">\n                    <nz-range-picker\n                      nzAllowClear\n                      [(ngModel)]=\"column.searchValue\"\n                      [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n                      (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n                    ></nz-range-picker>\n                  </ng-template>\n                  <!-- input -->\n                  <ng-template ngSwitchDefault>\n                    <nz-input-group [nzSuffix]=\"suffixTemplate\">\n                      <input\n                        #input\n                        nz-input\n                        placeholder=\"\u8BF7\u8F93\u5165\"\n                        [(ngModel)]=\"column.searchValue\"\n                        [style.width]=\"column.filterWidth || '180px'\"\n                        (keydown.enter)=\"dropdown.setVisibleStateWhen(false); onFilterConfim()\"\n                      />\n                    </nz-input-group>\n                    <ng-template #suffixTemplate>\n                      <i\n                        nz-icon\n                        nz-tooltip\n                        class=\"clear-icon\"\n                        nzTheme=\"fill\"\n                        nzType=\"close-circle\"\n                        *ngIf=\"column.searchValue\"\n                        (click)=\"column.searchValue = null; input.focus()\"\n                      ></i>\n                    </ng-template>\n                  </ng-template>\n                </ng-container>\n              </ng-template>\n              <!-- \u6309\u94AE -->\n              <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"margin-top-8\">\n                <button\n                  nz-button\n                  nzSize=\"small\"\n                  nzType=\"primary\"\n                  (click)=\"dropdown.setVisibleStateWhen(false); onFilterConfim()\"\n                >\n                  \u786E\u8BA4\n                </button>\n              </div>\n            </div>\n          </nz-dropdown>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let row of displayData\">\n        <tr>\n          <td\n            *ngIf=\"showCheckbox\"\n            nzLeft=\"0px\"\n            nzShowCheckbox\n            [(nzChecked)]=\"row.isChecked\"\n            (nzCheckedChange)=\"singleCheckChange()\"\n          ></td>\n          <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n            <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n            <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n              <ng-container\n                [ngTemplateOutlet]=\"column.customCell\"\n                [ngTemplateOutletContext]=\"{ $implicit: row }\"\n              ></ng-container>\n            </ng-template>\n            <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n            <ng-template #defaultCellTemplate>\n              <ng-container [ngSwitch]=\"column.type\">\n                <!-- link -->\n                <ng-template ngSwitchCase=\"link\">\n                  <a (click)=\"onlinkClick(column['field'], row)\">\n                    <smart-text [text]=\"row[column['field']]\"></smart-text>\n                  </a>\n                </ng-template>\n                <!-- thumbnail -->\n                <ng-template ngSwitchCase=\"thumbnail\">\n                  <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n                  <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n                    <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n                    <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n                      <nz-badge [nzCount]=\"row[column['field']]?.length\">\n                        <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n                      </nz-badge>\n                    </ng-template>\n                    <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n                    <ng-template #noBadgeTemplate>\n                      <img\n                        viewerImg\n                        height=\"24px\"\n                        width=\"24px\"\n                        *ngFor=\"let url of row[column['field']] || []\"\n                        [lazyLoadSrc]=\"url\"\n                        style=\"cursor: zoom-in\"\n                      />\n                    </ng-template>\n                  </div>\n                </ng-template>\n                <!-- default -->\n                <ng-template ngSwitchDefault>\n                  <smart-text [text]=\"row[column['field']]\"></smart-text>\n                </ng-template>\n              </ng-container>\n            </ng-template>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n\n    <!-- total\u6A21\u677F -->\n    <ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n    <!-- \u9ED8\u8BA4title\u6A21\u677F -->\n    <ng-template #defaultTitleTemplate>\n      <div class=\"content-header\" [hidden]=\"selections.length\">\n        <div class=\"content-title\">\u5217\u8868</div>\n        <div class=\"content-query\">\n          <query-display [(columns)]=\"columns\" (queryChange)=\"onQueryChange($event)\"></query-display>\n        </div>\n      </div>\n      <div class=\"content-header\" [hidden]=\"!selections.length\">\n        <div class=\"selection-box\">\n          \u5DF2\u9009 <span class=\"color-theme\">{{ selections.length }}</span> \u9879\n          <a *ngIf=\"selections.length\" class=\"margin-left-16\" (click)=\"allCheckChange(false)\">\u53D6\u6D88</a>\n        </div>\n        <!-- \u7ED1\u5B9A\u64CD\u4F5C\u5217\u8868\u7684ng-content -->\n        <ng-content select=\".operation-box\"> </ng-content>\n      </div>\n    </ng-template>\n  </nz-table>\n\n  <!-- \u989D\u5916\u5206\u9875\u7EC4\u4EF6\uFF0C\u4E0D\u4F7F\u7528\u8868\u683C\u81EA\u5E26\u5206\u9875\uFF0C\u4E3A\u4E86\u6EE1\u8DB3UI\u7684\u6CA1\u6709\u6570\u636E\u4E5F\u8981\u663E\u793A\u5206\u9875\u7684\u9700\u6C42 -->\n  <nz-pagination\n    nzSize=\"small\"\n    [(nzPageIndex)]=\"pageIndex\"\n    [(nzPageSize)]=\"pageSize\"\n    [nzShowSizeChanger]=\"showSizeChanger\"\n    [nzPageSizeOptions]=\"pageSizeOptions\"\n    [nzTotal]=\"data?.totalElements || 0\"\n    [nzShowTotal]=\"totalTemplate\"\n    (nzPageIndexChange)=\"pageIndexChange()\"\n    (nzPageSizeChange)=\"pageSizeChange()\"\n  >\n  </nz-pagination>\n</nz-spin>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["nz-pagination{display:flex;flex-direction:column;align-items:flex-end;justify-content:center;height:48px;margin-top:2px;box-shadow:0 -2px 5px 0 rgba(194,194,194,.5)}:host ::ng-deep .ant-table-scroll{position:relative}:host ::ng-deep .fixed-pagination .ant-table-placeholder{position:absolute;bottom:0;width:100%}td{word-break:break-all}.clear-icon{color:rgba(0,0,0,.25);font-size:12px;vertical-align:top;cursor:pointer;transition:color .3s}.clear-icon:hover{color:rgba(0,0,0,.45)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvIiwic291cmNlcyI6WyJhZHZhbmNlZC10YWJsZS9hZHZhbmNlZC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVN0RSxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQWtDakMsWUFBb0IsV0FBdUIsRUFBVSxVQUFxQjtRQUF0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVc7UUFqQ2pFLFlBQU8sR0FBYSxFQUFFLENBQUMsQ0FBQyxNQUFNOztRQUM5QixTQUFJLEdBQWlELEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUMvRixlQUFVLEdBQWEsRUFBRSxDQUFDLENBQUMsTUFBTTs7UUFFakMsWUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLFlBQVk7O1FBQzdCLGFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLFNBQVM7O1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVTs7UUFDakMsb0JBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVOztRQUNsQyxvQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLFlBQVk7O1FBQ3BDLFNBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxTQUFTOztRQUMxQixvQkFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXOztRQUNoRCxpQkFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLFVBQVU7O1FBQ2hDLGNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxXQUFXO1FBSTVCLGtCQUFhLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxpQkFBaUI7O1FBQzdFLHFCQUFnQixHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsaUJBQWlCOztRQUNoRixTQUFJLEdBQXdELElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxTQUFTOztRQUN6RixTQUFJLEdBQXNFLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUNyRyxjQUFTLEdBQWtELElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyxTQUFTOztRQUtsRyxVQUFLLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFROztRQUU3QyxnQkFBVyxHQUFVLEVBQUUsQ0FBQyxDQUFDLFNBQVM7O1FBQ2xDLGNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPOztRQUN0QixnQkFBVyxHQUEyQixFQUFFLENBQUM7SUFHb0MsQ0FBQzs7Ozs7SUFFOUUsV0FBVyxDQUFDLE9BQU87UUFDakIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLFNBQVM7WUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsT0FBTztZQUNQLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUM5RixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2lCQUN2RztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDL0MsZUFBZTtZQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLFdBQVc7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixXQUFXO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBVSxDQUFDLEVBQUU7O2tCQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxLQUFLLEVBQUM7WUFDbkYsSUFBSSxZQUFZO2dCQUFFLFlBQVksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNyRSxDQUFDLEVBQUMsQ0FBQztRQUNILFlBQVk7UUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxZQUFZLENBQUMsRUFBRTs7a0JBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssRUFBQztZQUNyRixJQUFJLFlBQVksRUFBRTtnQkFDaEIsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLFlBQVksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQzthQUN0RDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFNRCxxQkFBcUIsQ0FBQyxXQUFrQjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUtELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQU1ELGNBQWMsQ0FBQyxTQUFrQjtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsRUFBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBS0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUtELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLGNBQWM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQU1ELE1BQU0sQ0FBQyxVQUErRDtRQUNwRSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7OztjQUV2QixVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxHQUFHLEVBQUM7UUFFL0UsbUJBQW1CO1FBQ25CLElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7OztZQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQzNDLFVBQVUsQ0FBQyxLQUFLLEtBQUssU0FBUztnQkFDNUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7b0JBQ2xELENBQUMsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7b0JBQ3BELENBQUMsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUCxDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBT0QsdUJBQXVCLENBQUMsTUFBZSxFQUFFLE1BQWM7UUFDckQsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFOztrQkFDZCxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVc7WUFDL0IsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDcEQsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNoSSxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNoSDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVE7SUFDakQsQ0FBQzs7Ozs7O0lBTUQsYUFBYSxDQUFDLFdBQW1DO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFLRCxpQkFBaUI7UUFDZiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMzQixVQUFVO1FBQ1YsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDUixZQUFZLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZOztrQkFDcEQsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQzs7a0JBQzNFLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDOztrQkFDMUUsWUFBWSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUc7O2tCQUNwRCxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJO1lBQ3JGLElBQUksQ0FBQyxNQUFNLHFCQUFRLElBQUksQ0FBQyxNQUFNLElBQUUsQ0FBQyxFQUFFLFlBQVksR0FBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYSxFQUFFLE9BQVk7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFqT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHM3VEFBOEM7Z0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQXJCQyxVQUFVO1lBT1YsU0FBUzs7O3NCQWdCUixLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO21CQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUVMLE1BQU07K0JBQ04sTUFBTTttQkFDTixNQUFNO21CQUNOLE1BQU07d0JBQ04sTUFBTTswQkFFTixlQUFlLFNBQUMscUJBQXFCOzRCQUNyQyxlQUFlLFNBQUMsdUJBQXVCOzs7O0lBeEJ4Qyx5Q0FBZ0M7O0lBQ2hDLHNDQUFnRzs7SUFDaEcsNENBQW1DOztJQUNuQyx3Q0FBMEQ7O0lBQzFELHlDQUF5Qjs7SUFDekIsMENBQXVCOztJQUN2QixpREFBaUM7O0lBQ2pDLGdEQUErQjs7SUFDL0IsaURBQWdDOztJQUNoQyxpREFBZ0M7O0lBQ2hDLHNDQUF5Qjs7SUFDekIsaURBQTZDOztJQUM3Qyw4Q0FBOEI7O0lBQzlCLDJDQUEwQjs7SUFDMUIsK0NBQTBDOztJQUMxQyxnREFBZ0M7O0lBRWhDLCtDQUFxRTs7SUFDckUsa0RBQXdFOztJQUN4RSxzQ0FBeUY7O0lBQ3pGLHNDQUF1Rzs7SUFDdkcsMkNBQXdGOztJQUV4Riw2Q0FBNkU7O0lBQzdFLCtDQUFtRjs7SUFFbkYsdUNBQW9DOztJQUVwQyw2Q0FBd0I7O0lBQ3hCLDJDQUFjOztJQUNkLDZDQUF5Qzs7SUFDekMsNENBQWdFOzs7OztJQUVwRCw2Q0FBK0I7Ozs7O0lBQUUsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBARGVzY3JpcHRpb246IOihqOagvOe7hOS7tlxuICogQEF1dGhvcjogem9taXhpXG4gKiBARGF0ZTogMjAxOS0wNy0wNSAxMDowNjo0MVxuICovXG5cbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWR2YW5jZWRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZHZhbmNlZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW4sIFBhZ2VQYXJhbXMgfSBmcm9tICcuL2FkdmFuY2VkLXRhYmxlLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkdmFuY2VkLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWR2YW5jZWQtdGFibGUuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29sdW1uczogQ29sdW1uW10gPSBbXTsgLy8g5YiX5pWw5o2uXG4gIEBJbnB1dCgpIGRhdGE6IHsgY29udGVudDogb2JqZWN0W107IHRvdGFsRWxlbWVudHM6IG51bWJlciB9ID0geyBjb250ZW50OiBbXSwgdG90YWxFbGVtZW50czogMCB9OyAvLyDooajmoLzmlbDmja5cbiAgQElucHV0KCkgc2VsZWN0aW9uczogb2JqZWN0W10gPSBbXTsgLy8g5bey6YCJ6aG5XG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfTsgLy8g5Zu65a6a6KGo5aS077yM5rua5YqoXG4gIEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTsgLy8g6KGo5qC8bG9hZGluZ1xuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwOyAvLyDmmL7npLrmnaHmlbBcbiAgQElucHV0KCkgZnJvbnRQYWdpbmF0aW9uID0gZmFsc2U7IC8vIOaYr+WQpuWJjeerr+WIhumhtVxuICBASW5wdXQoKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7IC8vIOaYr+WQpuaYvuekuuWIhumhteWZqFxuICBASW5wdXQoKSBmaXhlZFBhZ2luYXRpb24gPSB0cnVlOyAvLyDmmK/lkKblm7rlrprliIbpobXlmahcbiAgQElucHV0KCkgc2hvd1NpemVDaGFuZ2VyID0gdHJ1ZTsgLy8g5piv5ZCm5pi+56S65p2h5pWw5YiH5o2i5ZmoXG4gIEBJbnB1dCgpIHNpemUgPSAnbWlkZGxlJzsgLy8g6KGo5qC8c2l6ZVxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDMwLCA1MCwgMTAwXTsgLy8g6aG15pWw6YCJ5oup5Zmo5Y+v6YCJ5YC8XG4gIEBJbnB1dCgpIHNob3dDaGVja2JveCA9IGZhbHNlOyAvLyDmmK/lkKbmmL7npLrlpI3pgInmoYZcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTsgLy8g5piv5ZCm5pyJdGl0bGVcbiAgQElucHV0KCkgdGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47IC8vIHRpdGxl5qih5p2/XG4gIEBJbnB1dCgpIGZpbHRlck11bHRpcGxlOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNvbHVtbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDb2x1bW5bXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOWIl+aVsOaNruaUueWPmOS6i+S7tiDnlKjkuo7lj4zlkJHnu5HlrppcbiAgQE91dHB1dCgpIHNlbGVjdGlvbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxvYmplY3RbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOW3sumAiemhueaUueWPmOS6i+S7tiDnlKjkuo7lj4zlkJHnu5HlrppcbiAgQE91dHB1dCgpIGxvYWQ6IEV2ZW50RW1pdHRlcjxbUGFnZVBhcmFtcywgeyBba2V5OiBzdHJpbmddOiBhbnkgfT9dPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gbG9hZOS6i+S7tlxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOaOkuW6j+S6i+S7tlxuICBAT3V0cHV0KCkgbGlua0NsaWNrOiBFdmVudEVtaXR0ZXI8eyBmaWVsZDogc3RyaW5nOyByb3dEYXRhOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOmTvuaOpeeCueWHu+S6i+S7tlxuXG4gIEBDb250ZW50Q2hpbGRyZW4oQWR2YW5jZWRDZWxsQ29tcG9uZW50KSBjdXN0b21DZWxsczogQWR2YW5jZWRDZWxsQ29tcG9uZW50W107IC8vIOiHquWumuS5ieWNleWFg+agvFxuICBAQ29udGVudENoaWxkcmVuKEFkdmFuY2VkRmlsdGVyQ29tcG9uZW50KSBjdXN0b21GaWx0ZXJzOiBBZHZhbmNlZEZpbHRlckNvbXBvbmVudFtdOyAvLyDoh6rlrprkuYnmkJzntKLnu4Tku7ZcblxuICBsb2FkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTsgLy8gbG9hZOa1gVxuXG4gIGRpc3BsYXlEYXRhOiBhbnlbXSA9IFtdOyAvLyDlvZPliY3mmL7npLrmlbDmja5cbiAgcGFnZUluZGV4ID0gMTsgLy8g5b2T5YmN6aG156CBXG4gIHF1ZXJ5UGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gIHNvcnRQYXJhbXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgICAgLy8g6YeN6LWwc29ydFxuICAgICAgaWYgKHRoaXMuc29ydFBhcmFtcyAmJiB0aGlzLnNvcnRQYXJhbXMua2V5ICYmIHRoaXMuc29ydFBhcmFtcy52YWx1ZSkge1xuICAgICAgICB0aGlzLm9uU29ydCh0aGlzLnNvcnRQYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICAvLyDmmbrog73or43lhbhcbiAgICAgIGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnNob3dGaWx0ZXIgJiYgY29sdW1uLmZpbHRlclR5cGUgPT09ICdzZWxlY3QnICYmIEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlck9wdGlvbnMpKSB7XG4gICAgICAgICAgY29sdW1uLmxleGljb24gPSBjb2x1bW4ubGV4aWNvbiA/IFsuLi5jb2x1bW4ubGV4aWNvbiwgLi4uY29sdW1uLmZpbHRlck9wdGlvbnNdIDogY29sdW1uLmZpbHRlck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgdGhpcy5sb2FkJC5waXBlKGRlYm91bmNlVGltZSgyMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyDmuIXnqbpzZWxlY3Rpb25zXG4gICAgICB0aGlzLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9ucyk7XG4gICAgICAvLyDlj5Hlh7psb2Fk5LqL5Lu2XG4gICAgICB0aGlzLmxvYWQuZW1pdChbeyBwYWdlOiB0aGlzLnBhZ2VJbmRleCwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9LCB0aGlzLnF1ZXJ5UGFyYW1zXSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8g6aG16Z2i5Yid5aeL5YyW5a6M5oiQ5ZCO6Ieq5YqobG9hZOS4gOasoVxuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICAgIGlmICh0aGlzLmZpeGVkUGFnaW5hdGlvbikge1xuICAgICAgdGhpcy50b0ZpeGVkUGFnaW5hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyDotYvlgLzoh6rlrprkuYnljZXlhYPmoLxcbiAgICB0aGlzLmN1c3RvbUNlbGxzLmZvckVhY2goY3VzdG9tQ2VsbCA9PiB7XG4gICAgICBjb25zdCBmaW5kZWRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLmZpZWxkID09PSBjdXN0b21DZWxsLmZpZWxkKTtcbiAgICAgIGlmIChmaW5kZWRDb2x1bW4pIGZpbmRlZENvbHVtbi5jdXN0b21DZWxsID0gY3VzdG9tQ2VsbC50ZW1wbGF0ZVJlZjtcbiAgICB9KTtcbiAgICAvLyDotYvlgLzoh6rlrprkuYnmkJzntKLnu4Tku7ZcbiAgICB0aGlzLmN1c3RvbUZpbHRlcnMuZm9yRWFjaChjdXN0b21GaWx0ZXIgPT4ge1xuICAgICAgY29uc3QgZmluZGVkQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5maWVsZCA9PT0gY3VzdG9tRmlsdGVyLmZpZWxkKTtcbiAgICAgIGlmIChmaW5kZWRDb2x1bW4pIHtcbiAgICAgICAgZmluZGVkQ29sdW1uLnNob3dGaWx0ZXIgPSB0cnVlO1xuICAgICAgICBmaW5kZWRDb2x1bW4uY3VzdG9tRmlsdGVyID0gY3VzdG9tRmlsdGVyLnRlbXBsYXRlUmVmO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8g5LiN5L2/55SodGFrZVVudGls5piv5Zug5Li655u05o6ldW5zdWJzY3JpYmXmgKfog73mm7Tlpb1cbiAgICB0aGlzLmxvYWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICog6KGo5qC85b2T5YmN5pi+56S65pWw5o2u5pS55Y+Y5pe26LCD55SoXG4gICAqIEBwYXJhbSBjdXJyZW50RGF0YSDlvZPliY3pobXmmL7npLrmlbDmja5cbiAgICovXG4gIGN1cnJlbnRQYWdlRGF0YUNoYW5nZShjdXJyZW50RGF0YTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlEYXRhID0gY3VycmVudERhdGE7XG4gIH1cblxuICAvKipcbiAgICog5Y2V6YCJ5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBzaW5nbGVDaGVja0NoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhajpgInlpI3pgInmoYbmlLnlj5jlm57osINcbiAgICogQHBhcmFtIGlzQ2hlY2tlZCDmmK/lkKblhajpgIlcbiAgICovXG4gIGFsbENoZWNrQ2hhbmdlKGlzQ2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheURhdGEuZm9yRWFjaChyb3cgPT4gKHJvdy5pc0NoZWNrZWQgPSBpc0NoZWNrZWQpKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrBzZWxlY3Rpb25zXG4gICAqL1xuICB1cGRhdGVTZWxlY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9ucyA9IHRoaXMuZGlzcGxheURhdGEuZmlsdGVyKHJvdyA9PiByb3cuaXNDaGVja2VkKTtcbiAgICB0aGlzLnNlbGVjdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmhteeggeaUueWPmOWbnuiwg1xuICAgKi9cbiAgcGFnZUluZGV4Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaYvuekuuadoeaVsOaUueWPmOWbnuiwg1xuICAgKi9cbiAgcGFnZVNpemVDaGFuZ2UoKTogdm9pZCB7XG4gICAgLy8g5pi+56S65p2h5pWw5pS55Y+Y5pe25Zue5Yiw6aaW6aG1XG4gICAgdGhpcy5wYWdlSW5kZXggPSAxO1xuICAgIHRoaXMubG9hZCQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaOkuW6j+aUueWPmFxuICAgKiBAcGFyYW0gc29ydFBhcmFtcyDmjpLluo/lj4LmlbBcbiAgICovXG4gIG9uU29ydChzb3J0UGFyYW1zOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH0pOiB2b2lkIHtcbiAgICAvLyDkv53lrZjmjpLluo/lj4LmlbDvvIznlKjkuo7kuIvmrKHmlbDmja7ov5vmnaXlho3ov5vooYzmjpLluo9cbiAgICB0aGlzLnNvcnRQYXJhbXMgPSBzb3J0UGFyYW1zO1xuICAgIC8vIOafpeaJvuato+WcqOaOkuW6j+eahOWIl1xuICAgIGNvbnN0IHNvcnRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLmZpZWxkID09PSBzb3J0UGFyYW1zLmtleSk7XG5cbiAgICAvLyDlpoLmnpzmsqHmnInoh6rlrprkuYnmjpLluo/vvIzoh6rliqjliY3nq6/mjpLluo9cbiAgICBpZiAoc29ydENvbHVtbiAmJiAhc29ydENvbHVtbi5jdXN0b21Tb3J0KSB7XG4gICAgICB0aGlzLmRhdGEuY29udGVudC5zb3J0KChwcmV2aW91cywgZnVydGhlcikgPT5cbiAgICAgICAgc29ydFBhcmFtcy52YWx1ZSA9PT0gJ2Rlc2NlbmQnXG4gICAgICAgICAgPyBmdXJ0aGVyW3NvcnRQYXJhbXMua2V5XSA+IHByZXZpb3VzW3NvcnRQYXJhbXMua2V5XVxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IC0xXG4gICAgICAgICAgOiBwcmV2aW91c1tzb3J0UGFyYW1zLmtleV0gPiBmdXJ0aGVyW3NvcnRQYXJhbXMua2V5XVxuICAgICAgICAgID8gMVxuICAgICAgICAgIDogLTEsXG4gICAgICApO1xuICAgICAgdGhpcy5kYXRhLmNvbnRlbnQgPSBbLi4udGhpcy5kYXRhLmNvbnRlbnRdO1xuICAgIH1cbiAgICB0aGlzLnNvcnQuZW1pdChzb3J0UGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jlm57osINcbiAgICogQHBhcmFtIGlzT3BlbiDmmK/lkKbmiZPlvIBcbiAgICogQHBhcmFtIGNvbHVtbiDlvZPliY3liJfmqKHlnovmlbDmja5cbiAgICovXG4gIG9uUmFuZ2VQaWNrZXJPcGVuQ2hhbmdlKGlzT3BlbjogYm9vbGVhbiwgY29sdW1uOiBDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IGNvbHVtbi5zZWFyY2hWYWx1ZTtcbiAgICAgIGlmIChkYXRlICYmIEFycmF5LmlzQXJyYXkoZGF0ZSkgJiYgZGF0ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29sdW1uLnNlYXJjaFZhbHVlID0gW2Zvcm1hdERhdGUoZGF0ZVswXSwgJ3l5eXktTU0tZGQgMDA6MDA6MDAnLCAnemhfQ04nKSwgZm9ybWF0RGF0ZShkYXRlWzFdLCAneXl5eS1NTS1kZCAyMzo1OTo1OScsICd6aF9DTicpXTtcbiAgICAgICAgY29sdW1uLmRpc3BsYXlWYWx1ZSA9IFtmb3JtYXREYXRlKGRhdGVbMF0sICd5eXl5LU1NLWRkJywgJ3poX0NOJyksIGZvcm1hdERhdGUoZGF0ZVsxXSwgJ3l5eXktTU0tZGQnLCAnemhfQ04nKV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOafpeivouehruiupOWbnuiwg1xuICAgKi9cbiAgb25GaWx0ZXJDb25maW0oKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc107IC8vIOS8oOWFpeWtkOe7hOS7tnF1ZXJ5LWRpc3BsYXlcbiAgICB0aGlzLmNvbHVtbnNDaGFuZ2UuZW1pdCh0aGlzLmNvbHVtbnMpOyAvLyDkvKDlh7rniLbnu4Tku7ZcbiAgfVxuXG4gIC8qKlxuICAgKiDmn6Xor6Llj4LmlbDmlLnlj5jlm57osINcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIOafpeivouWPguaVsFxuICAgKi9cbiAgb25RdWVyeUNoYW5nZShxdWVyeVBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHZvaWQge1xuICAgIHRoaXMucXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcztcbiAgICB0aGlzLmxvYWQkLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm7rlrprliIbpobVcbiAgICovXG4gIHRvRml4ZWRQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIC8vIHpvcnJv6K6+6K6h57y66Zm377yM5rKh5pyJ5rua5Yqo5p2h5pe25ZKM5pyJ5rua5Yqo5p2h5pe2dGFibGVCb2R55Lya5LiN5LiA5qC377yM5pWF5YWI57uZ5LiK5rua5Yqo5p2hXG4gICAgdGhpcy5zY3JvbGwgPSB7IHk6ICcwcHgnIH07XG4gICAgLy8g562J5b6F5rua5Yqo5p2h5pu05pawXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgdGFibGVCb2R5ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpO1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCduei1wYWdpbmF0aW9uJyk7XG4gICAgICBjb25zdCB0YWJsZUJvZHlUb3AgPSB0YWJsZUJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gdGFibGVCb2R5VG9wIC0gcGFnaW5hdGlvbi5jbGllbnRIZWlnaHQgLSA4ICsgJ3B4JztcbiAgICAgIHRoaXMuc2Nyb2xsID0geyAuLi50aGlzLnNjcm9sbCwgeTogc2Nyb2xsSGVpZ2h0IH07XG4gICAgICB0aGlzLl9yZW5kZXJlcjIuc2V0U3R5bGUodGFibGVCb2R5LCAnaGVpZ2h0Jywgc2Nyb2xsSGVpZ2h0KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9ubGlua0NsaWNrKGZpZWxkOiBzdHJpbmcsIHJvd0RhdGE6IGFueSkge1xuICAgIHRoaXMubGlua0NsaWNrLmVtaXQoeyBmaWVsZCwgcm93RGF0YSB9KTtcbiAgfVxufVxuIl19