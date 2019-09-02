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
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TableCellComponent } from './table-cell.component';
import { TableFilterComponent } from './table-filter.component';
export class TableComponent {
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
            this.columns.forEach((/**
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
        if (this.showPagination && this.fixedPagination) {
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
        this.scroll = Object.assign({}, this.scroll, { y: '0px' });
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
            const pagination = this._elementRef.nativeElement.querySelector('.ant-pagination');
            /** @type {?} */
            const tableBodyTop = tableBody.getBoundingClientRect().top;
            /** @type {?} */
            const scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight + 'px';
            // 设scroll 实际上是设了max-height
            this.scroll = Object.assign({}, this.scroll, { y: scrollHeight });
            // 设height
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
TableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvIiwic291cmNlcyI6WyJ0YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBbUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdk8sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFXaEUsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBK0J6QixZQUFvQixXQUF1QixFQUFVLFVBQXFCO1FBQXRELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQTlCakUsWUFBTyxHQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNOztRQUNwQyxTQUFJLEdBQTZDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUNwRixlQUFVLEdBQWdCLEVBQUUsQ0FBQyxDQUFDLE1BQU07O1FBRXBDLFlBQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxZQUFZOztRQUM3QixhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTzs7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxTQUFTOztRQUNsQyxtQkFBYyxHQUFHLElBQUks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bUNBQXdGOztJQUV4RixxQ0FBdUU7O0lBQ3ZFLHVDQUE2RTs7SUFFN0UsK0JBQW9DOztJQUVwQyxxQ0FBOEI7O0lBQzlCLG1DQUFjOztJQUNkLG9DQUFnRTs7Ozs7SUFFcEQscUNBQStCOzs7OztJQUFFLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDooajmoLznu4Tku7ZcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDctMDUgMTA6MDY6NDFcbiAqL1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVGFibGVDb2x1bW4sIFBUYWJsZVBhZ2UsIFBUYWJsZVJvdyB9IGZyb20gJy4vdGFibGUtaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC10YWJsZScsXG4gIGV4cG9ydEFzOiAncFRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb2x1bW5zOiBQVGFibGVDb2x1bW5bXSA9IFtdOyAvLyDliJfmlbDmja5cbiAgQElucHV0KCkgZGF0YTogeyBkYXRhOiBQVGFibGVSb3dbXTsgdG90YWxTaXplOiBudW1iZXIgfSA9IHsgZGF0YTogW10sIHRvdGFsU2l6ZTogMCB9OyAvLyDooajmoLzmlbDmja5cbiAgQElucHV0KCkgc2VsZWN0aW9uczogUFRhYmxlUm93W10gPSBbXTsgLy8g5bey6YCJ6aG5XG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfTsgLy8g5Zu65a6a6KGo5aS077yM5rua5YqoXG4gIEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTsgLy8g6KGo5qC8bG9hZGluZ1xuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwOyAvLyDmmL7npLrmnaHmlbBcbiAgQElucHV0KCkgZnJvbnRQYWdpbmF0aW9uID0gZmFsc2U7IC8vIOaYr+WQpuWJjeerr+WIhumhtVxuICBASW5wdXQoKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7IC8vIOaYr+WQpuaYvuekuuWIhumhteWZqFxuICBASW5wdXQoKSBmaXhlZFBhZ2luYXRpb24gPSBmYWxzZTsgLy8g5piv5ZCm5Zu65a6a5YiG6aG15ZmoXG4gIEBJbnB1dCgpIHNob3dTaXplQ2hhbmdlciA9IHRydWU7IC8vIOaYr+WQpuaYvuekuuadoeaVsOWIh+aNouWZqFxuICBASW5wdXQoKSBzaXplID0gJ21pZGRsZSc7IC8vIOihqOagvHNpemVcbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAzMCwgNTAsIDEwMF07IC8vIOmhteaVsOmAieaLqeWZqOWPr+mAieWAvFxuICBASW5wdXQoKSBzaG93Q2hlY2tib3ggPSBmYWxzZTsgLy8g5piv5ZCm5pi+56S65aSN6YCJ5qGGXG4gIEBJbnB1dCgpIHRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+OyAvLyB0aXRsZeaooeadv1xuXG4gIEBPdXRwdXQoKSBjb2x1bW5zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8UFRhYmxlQ29sdW1uW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDliJfmlbDmja7mlLnlj5jkuovku7Yg55So5LqO5Y+M5ZCR57uR5a6aXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8UFRhYmxlUm93W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDlt7LpgInpobnmlLnlj5jkuovku7Yg55So5LqO5Y+M5ZCR57uR5a6aXG4gIEBPdXRwdXQoKSBsb2FkOiBFdmVudEVtaXR0ZXI8UFRhYmxlUGFnZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGxvYWTkuovku7ZcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDmjpLluo/kuovku7ZcbiAgQE91dHB1dCgpIGxpbmtDbGljazogRXZlbnRFbWl0dGVyPHsgZmllbGQ6IHN0cmluZzsgcm93RGF0YTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDpk77mjqXngrnlh7vkuovku7ZcblxuICBAQ29udGVudENoaWxkcmVuKFRhYmxlQ2VsbENvbXBvbmVudCkgY3VzdG9tQ2VsbHM6IFRhYmxlQ2VsbENvbXBvbmVudFtdOyAvLyDoh6rlrprkuYnljZXlhYPmoLxcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJsZUZpbHRlckNvbXBvbmVudCkgY3VzdG9tRmlsdGVyczogVGFibGVGaWx0ZXJDb21wb25lbnRbXTsgLy8g6Ieq5a6a5LmJ5pCc57Si57uE5Lu2XG5cbiAgbG9hZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7IC8vIGxvYWTmtYFcblxuICBkaXNwbGF5RGF0YTogUFRhYmxlUm93W10gPSBbXTsgLy8g5b2T5YmN5pi+56S65pWw5o2uXG4gIHBhZ2VJbmRleCA9IDE7IC8vIOW9k+WJjemhteeggVxuICBzb3J0UGFyYW1zOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXIyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcbiAgICAgIC8vIOmHjei1sHNvcnRcbiAgICAgIGlmICh0aGlzLnNvcnRQYXJhbXMgJiYgdGhpcy5zb3J0UGFyYW1zLmtleSAmJiB0aGlzLnNvcnRQYXJhbXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5vblNvcnQodGhpcy5zb3J0UGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgLy8g5piv5LiL5ouJ6YCJ5oup55qE6Ieq5Yqo5re75Yqg6K+N5YW4XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnNob3dGaWx0ZXIgJiYgY29sdW1uLmZpbHRlclR5cGUgPT09ICdzZWxlY3QnICYmIEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlck9wdGlvbnMpKSB7XG4gICAgICAgICAgY29sdW1uLmxleGljb24gPSBjb2x1bW4ubGV4aWNvbiA/IFsuLi5jb2x1bW4ubGV4aWNvbiwgLi4uY29sdW1uLmZpbHRlck9wdGlvbnNdIDogY29sdW1uLmZpbHRlck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zZWxlY3Rpb25zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrZWRCeVNlbGVjdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgIHRoaXMubG9hZCQucGlwZShkZWJvdW5jZVRpbWUoMjApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8g5riF56m6c2VsZWN0aW9uc1xuICAgICAgdGhpcy5zZWxlY3Rpb25zID0gW107XG4gICAgICB0aGlzLnNlbGVjdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbnMpO1xuICAgICAgLy8g5Y+R5Ye6bG9hZOS6i+S7tlxuICAgICAgdGhpcy5sb2FkLmVtaXQoeyBwYWdlOiB0aGlzLnBhZ2VJbmRleCwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyDpobXpnaLliJ3lp4vljJblrozmiJDlkI7oh6rliqhsb2Fk5LiA5qyhXG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24gJiYgdGhpcy5maXhlZFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMudG9GaXhlZFBhZ2luYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8g6LWL5YC86Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gICAgdGhpcy5jdXN0b21DZWxscy5mb3JFYWNoKGN1c3RvbUNlbGwgPT4ge1xuICAgICAgY29uc3QgZmluZGVkQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5maWVsZCA9PT0gY3VzdG9tQ2VsbC5maWVsZCk7XG4gICAgICBpZiAoZmluZGVkQ29sdW1uKSBmaW5kZWRDb2x1bW4uY3VzdG9tQ2VsbCA9IGN1c3RvbUNlbGwudGVtcGxhdGVSZWY7XG4gICAgfSk7XG4gICAgLy8g6LWL5YC86Ieq5a6a5LmJ5pCc57Si57uE5Lu2XG4gICAgdGhpcy5jdXN0b21GaWx0ZXJzLmZvckVhY2goY3VzdG9tRmlsdGVyID0+IHtcbiAgICAgIGNvbnN0IGZpbmRlZENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IGN1c3RvbUZpbHRlci5maWVsZCk7XG4gICAgICBpZiAoZmluZGVkQ29sdW1uKSB7XG4gICAgICAgIGZpbmRlZENvbHVtbi5zaG93RmlsdGVyID0gdHJ1ZTtcbiAgICAgICAgZmluZGVkQ29sdW1uLmN1c3RvbUZpbHRlciA9IGN1c3RvbUZpbHRlci50ZW1wbGF0ZVJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIOS4jeS9v+eUqHRha2VVbnRpbOaYr+WboOS4uuebtOaOpXVuc3Vic2NyaWJl5oCn6IO95pu05aW9XG4gICAgdGhpcy5sb2FkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOihqOagvOW9k+WJjeaYvuekuuaVsOaNruaUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gY3VycmVudERhdGEg5b2T5YmN6aG15pi+56S65pWw5o2uXG4gICAqL1xuICBjdXJyZW50UGFnZURhdGFDaGFuZ2UoY3VycmVudERhdGE6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YSA9IGN1cnJlbnREYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIOWNlemAieaUueWPmOWbnuiwg1xuICAgKi9cbiAgc2luZ2xlQ2hlY2tDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk7XG4gIH1cblxuICAvKipcbiAgICog5YWo6YCJ5aSN6YCJ5qGG5pS55Y+Y5Zue6LCDXG4gICAqIEBwYXJhbSBpc0NoZWNrZWQg5piv5ZCm5YWo6YCJXG4gICAqL1xuICBhbGxDaGVja0NoYW5nZShpc0NoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlEYXRhLmZvckVhY2gocm93ID0+IChyb3cuaXNDaGVja2VkID0gaXNDaGVja2VkKSk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uY2hlY2tlZOabtOaWsHNlbGVjdGlvbnNcbiAgICovXG4gIHVwZGF0ZVNlbGVjdGlvbnNCeUNoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25zID0gdGhpcy5kaXNwbGF5RGF0YS5maWx0ZXIocm93ID0+IHJvdy5pc0NoZWNrZWQpO1xuICAgIHRoaXMuc2VsZWN0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uc2VsZWN0aW9uc+abtOaWsGNoZWNrZWRcbiAgICovXG4gIHVwZGF0ZUNoZWNrZWRCeVNlbGVjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YS5mb3JFYWNoKHJvdyA9PiAocm93LmlzQ2hlY2tlZCA9IHRoaXMuc2VsZWN0aW9ucy5pbmNsdWRlcyhyb3cpKSk7XG4gIH1cblxuICAvKipcbiAgICog6aG156CB5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlSW5kZXhDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5pi+56S65p2h5pWw5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlU2l6ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAvLyDmmL7npLrmnaHmlbDmlLnlj5jml7blm57liLDpppbpobVcbiAgICB0aGlzLnBhZ2VJbmRleCA9IDE7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5o6S5bqP5pS55Y+YXG4gICAqIEBwYXJhbSBzb3J0UGFyYW1zIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgb25Tb3J0KHNvcnRQYXJhbXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfSk6IHZvaWQge1xuICAgIC8vIOS/neWtmOaOkuW6j+WPguaVsO+8jOeUqOS6juS4i+asoeaVsOaNrui/m+adpeWGjei/m+ihjOaOkuW6j1xuICAgIHRoaXMuc29ydFBhcmFtcyA9IHNvcnRQYXJhbXM7XG4gICAgLy8g5p+l5om+5q2j5Zyo5o6S5bqP55qE5YiXXG4gICAgY29uc3Qgc29ydENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IHNvcnRQYXJhbXMua2V5KTtcblxuICAgIC8vIOWmguaenOayoeacieiHquWumuS5ieaOkuW6j++8jOiHquWKqOWJjeerr+aOkuW6j1xuICAgIGlmIChzb3J0Q29sdW1uICYmICFzb3J0Q29sdW1uLmN1c3RvbVNvcnQpIHtcbiAgICAgIHRoaXMuZGF0YS5kYXRhLnNvcnQoKHByZXZpb3VzLCBmdXJ0aGVyKSA9PlxuICAgICAgICBzb3J0UGFyYW1zLnZhbHVlID09PSAnZGVzY2VuZCdcbiAgICAgICAgICA/IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldID4gcHJldmlvdXNbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogLTFcbiAgICAgICAgICA6IHByZXZpb3VzW3NvcnRQYXJhbXMua2V5XSA+IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiAtMSxcbiAgICAgICk7XG4gICAgICB0aGlzLmRhdGEuZGF0YSA9IFsuLi50aGlzLmRhdGEuZGF0YV07XG4gICAgfVxuICAgIHRoaXMuc29ydC5lbWl0KHNvcnRQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gaXNPcGVuIOaYr+WQpuaJk+W8gFxuICAgKiBAcGFyYW0gY29sdW1uIOW9k+WJjeWIl+aooeWei+aVsOaNrlxuICAgKi9cbiAgb25SYW5nZVBpY2tlck9wZW5DaGFuZ2UoaXNPcGVuOiBib29sZWFuLCBjb2x1bW46IFBUYWJsZUNvbHVtbik6IHZvaWQge1xuICAgIGlmIChpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBkYXRlID0gY29sdW1uLnNlYXJjaFZhbHVlO1xuICAgICAgaWYgKGRhdGUgJiYgQXJyYXkuaXNBcnJheShkYXRlKSAmJiBkYXRlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb2x1bW4uc2VhcmNoVmFsdWUgPSBbZm9ybWF0RGF0ZShkYXRlWzBdLCAneXl5eS1NTS1kZCAwMDowMDowMCcsICd6aF9DTicpLCBmb3JtYXREYXRlKGRhdGVbMV0sICd5eXl5LU1NLWRkIDIzOjU5OjU5JywgJ3poX0NOJyldO1xuICAgICAgICBjb2x1bW4uZGlzcGxheVZhbHVlID0gW2Zvcm1hdERhdGUoZGF0ZVswXSwgJ3l5eXktTU0tZGQnLCAnemhfQ04nKSwgZm9ybWF0RGF0ZShkYXRlWzFdLCAneXl5eS1NTS1kZCcsICd6aF9DTicpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5p+l6K+i56Gu6K6k5Zue6LCDXG4gICAqL1xuICBvbkZpbHRlckNvbmZpbShkcm9wZG93bjogTnpEcm9wRG93bkNvbXBvbmVudCk6IHZvaWQge1xuICAgIGRyb3Bkb3duLnNldFZpc2libGVTdGF0ZVdoZW4oZmFsc2UpO1xuICAgIHRoaXMuY29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNdO1xuICAgIHRoaXMuY29sdW1uc0NoYW5nZS5lbWl0KHRoaXMuY29sdW1ucyk7XG4gIH1cblxuICAvKipcbiAgICog5Zu65a6a5YiG6aG1XG4gICAqL1xuICB0b0ZpeGVkUGFnaW5hdGlvbigpOiB2b2lkIHtcbiAgICAvLyDmsqHmnInmu5rliqjmnaHml7blkozmnInmu5rliqjmnaHml7Z0YWJsZUJvZHnkvJrkuI3kuIDmoLfvvIzmlYXlhYjnu5nkuIrmu5rliqjmnaFcbiAgICB0aGlzLnNjcm9sbCA9IHsgLi4udGhpcy5zY3JvbGwsIHk6ICcwcHgnIH07XG4gICAgLy8g562J5b6F5rua5Yqo5p2h5pu05pawXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgdGFibGVCb2R5ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpO1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXBhZ2luYXRpb24nKTtcbiAgICAgIGNvbnN0IHRhYmxlQm9keVRvcCA9IHRhYmxlQm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSB0YWJsZUJvZHlUb3AgLSBwYWdpbmF0aW9uLmNsaWVudEhlaWdodCArICdweCc7XG4gICAgICAvLyDorr5zY3JvbGwg5a6e6ZmF5LiK5piv6K6+5LqGbWF4LWhlaWdodFxuICAgICAgdGhpcy5zY3JvbGwgPSB7IC4uLnRoaXMuc2Nyb2xsLCB5OiBzY3JvbGxIZWlnaHQgfTtcbiAgICAgIC8vIOiuvmhlaWdodFxuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKHRhYmxlQm9keSwgJ2hlaWdodCcsIHNjcm9sbEhlaWdodCk7XG4gICAgfSk7XG4gIH1cblxuICBvbmxpbmtDbGljayhmaWVsZDogc3RyaW5nLCByb3dEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmxpbmtDbGljay5lbWl0KHsgZmllbGQsIHJvd0RhdGEgfSk7XG4gIH1cbn1cbiJdfQ==