import { formatDate, CommonModule } from '@angular/common';
import { Component, Input, ContentChild, TemplateRef, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2, Output, ContentChildren, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewerDirectiveModule } from '@pixelmon/pikachu/viewer';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TranslatePipeModule, FilterPipeModule, ShortcutPipeModule } from '@pixelmon/theme';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdvancedCellComponent {
    // 模板
    constructor() {
        this.field = ''; // 对应域
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
AdvancedCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'advanced-cell',
                template: '<ng-content> </ng-content>'
            }] }
];
/** @nocollapse */
AdvancedCellComponent.ctorParameters = () => [];
AdvancedCellComponent.propDecorators = {
    field: [{ type: Input }],
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdvancedFilterComponent {
    // 模板
    constructor() {
        this.field = ''; // 对应域
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
AdvancedFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'advanced-filter',
                template: '<ng-content> </ng-content>'
            }] }
];
/** @nocollapse */
AdvancedFilterComponent.ctorParameters = () => [];
AdvancedFilterComponent.propDecorators = {
    field: [{ type: Input }],
    templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdvancedTableComponent {
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
                styles: ["nz-pagination{display:flex;height:48px;flex-direction:column;justify-content:center;align-items:flex-end;margin-top:2px;box-shadow:0 -2px 5px 0 rgba(194,194,194,.5)}:host ::ng-deep .ant-table-scroll{position:relative}:host ::ng-deep .fixed-pagination .ant-table-placeholder{position:absolute;width:100%;bottom:0}td{word-break:break-all}.clear-icon{color:rgba(0,0,0,.25);font-size:12px;vertical-align:top;cursor:pointer;transition:color .3s}.clear-icon:hover{color:rgba(0,0,0,.45)}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QueryDisplayComponent {
    constructor() {
        this.columns = [];
        this.lexicon = []; // 词典
        // 词典
        this.columnsChange = new EventEmitter();
        this.queryChange = new EventEmitter();
        this.close = new EventEmitter();
        // 过滤规则
        this.filterRule = (/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            const searchValue = element.searchValue;
            // 有默认值且搜索值和默认值相等
            if (element.hasOwnProperty('defaultValue') && searchValue === element.defaultValue) {
                return false;
            }
            // 非法基础数据类型
            if ([undefined, null, ''].includes(searchValue)) {
                return false;
            }
            // 空数组
            if (Array.isArray(searchValue) && !searchValue.length) {
                return false;
            }
            // 通过校验，返回true
            return true;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.columns) {
            this.updateQuery();
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    onClose(column) {
        // 有默认值恢复默认值，没有则置为null
        column.searchValue = column.hasOwnProperty('defaultValue') ? column.defaultValue : null;
        this.close.emit(column);
        this.columns = [...this.columns];
        this.columnsChange.emit(this.columns);
    }
    // 组件内更新查询值
    /**
     * @return {?}
     */
    updateQuery() {
        /** @type {?} */
        const query = {};
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            if (column.showFilter) {
                query[column.field] = column.searchValue;
            }
        }));
        this.queryChange.emit(query);
    }
    /**
     * @param {?} column
     * @return {?}
     */
    closeTab(column) {
        console.log(column);
    }
}
QueryDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'query-display',
                template: "<nz-tabset nzType=\"card\">\n  <ng-container *ngFor=\"let column of columns | filter: filterRule\">\n    <nz-tab [nzTitle]=\"titleTemplate\">\n      <ng-template #titleTemplate>\n        <div class=\"flex\">\n          <span class=\"label\">{{ column.title + '\uFF1A' }}</span>\n          <ng-container\n            *ngIf=\"(column.searchValue | translate: column.lexicon || lexicon)?.length > 10; else textTemplate\"\n          >\n            <div nz-popover nzTrigger=\"hover\" [nzContent]=\"textTemplate\" nzPlacement=\"bottom\">\n              <span class=\"value text-ellipsis\">\n                {{ column.displayValue || column.searchValue | translate: column.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-container>\n\n          <ng-template #textTemplate>\n            <div>\n              <span class=\"value\">\n                {{ column.displayValue || column.searchValue | translate: column.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-template>\n\n          <div>\n            <i nz-icon type=\"close\" class=\"ant-tabs-close-x\" (click)=\"closeTab(column)\"></i>\n          </div>\n        </div>\n      </ng-template>\n    </nz-tab>\n  </ng-container>\n</nz-tabset>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".text-ellipsis{display:inline-block;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:top}.flex{display:flex;justify-content:center;align-items:center}.label{color:#515151}.value{color:#1890ff}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar{border:none;margin:0 0 2px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab{margin:0 2px 0 0;border:1px solid #e8e8e8!important;border-radius:4px;background:#fafafa;padding:0 16px;transition:.3s cubic-bezier(.645,.045,.355,1);line-height:28px;height:30px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-nav-container{height:31px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab-active{font-weight:400}"]
            }] }
];
/** @nocollapse */
QueryDisplayComponent.ctorParameters = () => [];
QueryDisplayComponent.propDecorators = {
    columns: [{ type: Input }],
    lexicon: [{ type: Input }],
    columnsChange: [{ type: Output }],
    queryChange: [{ type: Output }],
    close: [{ type: Output }],
    filterRule: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QueryDisplayModule {
}
QueryDisplayModule.decorators = [
    { type: NgModule, args: [{
                declarations: [QueryDisplayComponent],
                imports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule],
                exports: [QueryDisplayComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmartTextComponent {
    constructor() {
        this.text = '';
        this.maxLength = 20;
        this.tail = '...';
    }
}
SmartTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'smart-text',
                template: "<!-- \u76F4\u63A5\u663E\u793A -->\n<ng-container *ngIf=\"text.length <= maxLength; else tooltipBlock\">\n  <span>{{ text }}</span>\n</ng-container>\n\n<!-- \u63D0\u793A\u6846\u663E\u793A -->\n<ng-template #tooltipBlock>\n  <span nz-tooltip [nzTitle]=\"text\">{{ text | shortcut: maxLength:tail }}</span>\n</ng-template>\n\n<ng-content></ng-content>\n"
            }] }
];
SmartTextComponent.propDecorators = {
    text: [{ type: Input }],
    maxLength: [{ type: Input }],
    tail: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmartTextModule {
}
SmartTextModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ShortcutPipeModule, NzToolTipModule],
                declarations: [SmartTextComponent],
                exports: [CommonModule, SmartTextComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENT = [AdvancedTableComponent, AdvancedCellComponent, AdvancedFilterComponent];
/** @type {?} */
const MODULE = [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    QueryDisplayModule,
    SmartTextModule,
    ViewerDirectiveModule,
    QueryDisplayModule,
];
class AdvancedTableModule {
}
AdvancedTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...COMPONENT],
                imports: [...MODULE],
                exports: [...MODULE, ...COMPONENT],
            },] }
];

export { AdvancedTableModule, AdvancedTableComponent as ɵa, AdvancedCellComponent as ɵb, AdvancedFilterComponent as ɵc, QueryDisplayModule as ɵd, QueryDisplayComponent as ɵe, SmartTextModule as ɵf, SmartTextComponent as ɵg };
//# sourceMappingURL=pixelmon-pikachu-advanced-table.js.map
