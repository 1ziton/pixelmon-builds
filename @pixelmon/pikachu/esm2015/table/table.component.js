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
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewEncapsulation, } from '@angular/core';
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
        dropdown.nzDropdownMenu.setVisibleStateWhen(false);
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
            const pagination = this._elementRef.nativeElement.querySelector('.p-table-pagination-container');
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
                template: "<nz-spin [nzTip]=\"'\u52A0\u8F7D\u4E2D...'\" [nzSpinning]=\"loading\">\n  <nz-table\n    #nzTable\n    class=\"p-table\"\n    [nzData]=\"data?.data || []\"\n    [nzTitle]=\"titleTemplate || null\"\n    [nzScroll]=\"scroll\"\n    [nzFrontPagination]=\"frontPagination\"\n    [nzSize]=\"size\"\n    [nzShowPagination]=\"false\"\n    (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n    [class.fixed-pagination]=\"fixedPagination\"\n  >\n    <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n      <tr>\n        <th\n          *ngIf=\"showCheckbox\"\n          nzLeft=\"0px\"\n          nzWidth=\"40px\"\n          nzShowCheckbox\n          [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n          [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n          (nzCheckedChange)=\"allCheckChange($event)\"\n        ></th>\n        <th\n          *ngFor=\"let column of columns\"\n          [nzLeft]=\"column.left\"\n          [nzRight]=\"column.right\"\n          [nzWidth]=\"column.width || '120px'\"\n          [nzShowSort]=\"column.showSort\"\n          [nzSortKey]=\"column.field\"\n          [nzCustomFilter]=\"column.showFilter\"\n        >\n          {{ column.title }}\n          <!-- \u641C\u7D22 -->\n          <ng-container *ngIf=\"column.showFilter\">\n            <i\n              nz-icon\n              nz-dropdown\n              [nzDropdownMenu]=\"dropdownMenu\"\n              nzType=\"search\"\n              class=\"ant-table-filter-icon\"\n              [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n              nzTrigger=\"click\"\n              nzPlacement=\"bottomRight\"\n              [nzClickHide]=\"false\"\n              nzTableFilter\n              #dropdown=\"nzDropdown\"\n            ></i>\n            <nz-dropdown-menu #dropdownMenu=\"nzDropdownMenu\">\n              <div class=\"p-table-filter-panel\">\n                <!-- \u641C\u7D22\u7EC4\u4EF6 -->\n                <ng-container\n                  [ngTemplateOutlet]=\"filterTemplate\"\n                  [ngTemplateOutletContext]=\"{ $implicit: column, dropdown: dropdown }\"\n                ></ng-container>\n                <!-- \u641C\u7D22\u786E\u8BA4\u6309\u94AE -->\n                <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"p-table-filter-button\">\n                  <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                    \u786E\u8BA4\n                  </button>\n                </div>\n              </div>\n            </nz-dropdown-menu>\n          </ng-container>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let row of displayData\">\n        <tr>\n          <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n          <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n            <!-- \u5355\u5143\u683C -->\n            <ng-container [ngTemplateOutlet]=\"cellTemplate\" [ngTemplateOutletContext]=\"{ $implicit: column, row: row }\"></ng-container>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </nz-table>\n\n  <div class=\"p-table-pagination-container\">\n    <p-pagination\n      *ngIf=\"fixedPagination ? showPagination : showPagination && data?.totalSize\"\n      [nzSize]=\"paginationSize\"\n      [nzShowQuickJumper]=\"showQuickJumper\"\n      [(nzPageIndex)]=\"pageIndex\"\n      [(nzPageSize)]=\"pageSize\"\n      [nzShowSizeChanger]=\"showSizeChanger\"\n      [nzPageSizeOptions]=\"pageSizeOptions\"\n      [nzTotal]=\"data?.totalSize || 0\"\n      [nzShowTotal]=\"totalTemplate\"\n      (nzPageIndexChange)=\"pageIndexChange()\"\n      (nzPageSizeChange)=\"pageSizeChange()\"\n    ></p-pagination>\n  </div>\n</nz-spin>\n\n<!-- total\u6A21\u677F -->\n<ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n\n<!-- \u641C\u7D22\u7EC4\u4EF6\u6A21\u677F -->\n<ng-template #filterTemplate let-column let-dropdown=\"dropdown\">\n  <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template #defaultFilterTemplate>\n    <ng-container [ngSwitch]=\"column.filterType\">\n      <!-- select -->\n      <ng-template ngSwitchCase=\"select\">\n        <nz-select\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          [(ngModel)]=\"column.searchValue\"\n          [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n          [style.width]=\"column.filterWidth || '180px'\"\n        >\n          <nz-option *ngFor=\"let option of column.filterOptions || []\" [nzValue]=\"option.value\" [nzLabel]=\"option.label\"></nz-option>\n        </nz-select>\n      </ng-template>\n      <!-- range-picker -->\n      <ng-template ngSwitchCase=\"rangePicker\">\n        <nz-range-picker\n          nzAllowClear\n          [(ngModel)]=\"column.searchValue\"\n          [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n          (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n        ></nz-range-picker>\n      </ng-template>\n      <!-- input -->\n      <ng-template ngSwitchDefault>\n        <nz-input-group [nzSuffix]=\"suffixTemplate\">\n          <input\n            #input\n            nz-input\n            placeholder=\"\u8BF7\u8F93\u5165\"\n            [(ngModel)]=\"column.searchValue\"\n            [style.width]=\"column.filterWidth || '180px'\"\n            (keydown.enter)=\"onFilterConfim(dropdown)\"\n          />\n        </nz-input-group>\n        <ng-template #suffixTemplate>\n          <i\n            nz-icon\n            nz-tooltip\n            class=\"p-table-clear-icon\"\n            nzTheme=\"fill\"\n            nzType=\"close-circle\"\n            *ngIf=\"column.searchValue\"\n            (click)=\"column.searchValue = null; input.focus()\"\n          ></i>\n        </ng-template>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n\n<!-- \u5355\u5143\u683C\u6A21\u677F -->\n<ng-template #cellTemplate let-column let-row=\"row\">\n  <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n  <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n  <ng-template #defaultCellTemplate>\n    <ng-container [ngSwitch]=\"column.type\">\n      <!-- link -->\n      <ng-template ngSwitchCase=\"link\">\n        <a (click)=\"onlinkClick(column['field'], row)\">\n          <smart-text [text]=\"row[column['field']]\"></smart-text>\n        </a>\n      </ng-template>\n      <!-- thumbnail -->\n      <ng-template ngSwitchCase=\"thumbnail\">\n        <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n        <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n          <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n          <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n            <nz-badge [nzCount]=\"row[column['field']]?.length\">\n              <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n            </nz-badge>\n          </ng-template>\n          <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n          <ng-template #noBadgeTemplate>\n            <img\n              viewerImg\n              height=\"24px\"\n              width=\"24px\"\n              *ngFor=\"let url of row[column['field']] || []\"\n              [lazyLoadSrc]=\"url\"\n              style=\"cursor: zoom-in\"\n            />\n          </ng-template>\n        </div>\n      </ng-template>\n      <!-- default -->\n      <ng-template ngSwitchDefault>\n        <smart-text [text]=\"row[column['field']]\"></smart-text>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVaEUsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBa0N6QixZQUFvQixXQUF1QixFQUFVLFVBQXFCO1FBQXRELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWpDakUsWUFBTyxHQUFrQixFQUFFLENBQUMsQ0FBQyxNQUFNOztRQUNuQyxTQUFJLEdBQTRDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUNuRixlQUFVLEdBQWUsRUFBRSxDQUFDLENBQUMsTUFBTTs7UUFFbkMsWUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLFlBQVk7O1FBQzdCLGFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPOztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLFNBQVM7O1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxD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NkQ7O0lBQzdELDhCQUF1Rzs7SUFDdkcsbUNBQXdGOztJQUV4RixxQ0FBdUU7O0lBQ3ZFLHVDQUE2RTs7SUFFN0UsK0JBQW9DOztJQUVwQyxxQ0FBNkI7O0lBQzdCLG1DQUFjOztJQUNkLG9DQUFnRTs7Ozs7SUFFcEQscUNBQStCOzs7OztJQUFFLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDooajmoLznu4Tku7ZcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDctMDUgMTA6MDY6NDFcbiAqL1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUYWJsZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlQ29sdW1uLCBUYWJsZVBhZ2UsIFRhYmxlUm93IH0gZnJvbSAnLi90YWJsZS1pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLXRhYmxlJyxcbiAgZXhwb3J0QXM6ICdwVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtdOyAvLyDliJfmlbDmja5cbiAgQElucHV0KCkgZGF0YTogeyBkYXRhOiBUYWJsZVJvd1tdOyB0b3RhbFNpemU6IG51bWJlciB9ID0geyBkYXRhOiBbXSwgdG90YWxTaXplOiAwIH07IC8vIOihqOagvOaVsOaNrlxuICBASW5wdXQoKSBzZWxlY3Rpb25zOiBUYWJsZVJvd1tdID0gW107IC8vIOW3sumAiemhuVxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH07IC8vIOWbuuWumuihqOWktO+8jOa7muWKqFxuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7IC8vIOihqOagvGxvYWRpbmdcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDsgLy8g5pi+56S65p2h5pWwXG4gIEBJbnB1dCgpIGZyb250UGFnaW5hdGlvbiA9IGZhbHNlOyAvLyDmmK/lkKbliY3nq6/liIbpobVcbiAgQElucHV0KCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlOyAvLyDmmK/lkKbmmL7npLrliIbpobXlmahcbiAgQElucHV0KCkgZml4ZWRQYWdpbmF0aW9uID0gZmFsc2U7IC8vIOaYr+WQpuWbuuWumuWIhumhteWZqFxuICBASW5wdXQoKSBzaG93U2l6ZUNoYW5nZXIgPSB0cnVlOyAvLyDmmK/lkKbmmL7npLrmnaHmlbDliIfmjaLlmahcbiAgQElucHV0KCkgc2hvd1F1aWNrSnVtcGVyID0gdHJ1ZTsgLy8g5piv5ZCm5pi+56S65b+r6YCf6Lez6L2s5ZmoXG4gIEBJbnB1dCgpIHNpemU6ICdtaWRkbGUnIHwgJ3NtYWxsJyB8ICdkZWZhdWx0JyA9ICdtaWRkbGUnOyAvLyDooajmoLxzaXplXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25TaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnOyAvLyDliIbpobVzaXplXG5cbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAzMCwgNTAsIDEwMF07IC8vIOmhteaVsOmAieaLqeWZqOWPr+mAieWAvFxuICBASW5wdXQoKSBzaG93Q2hlY2tib3ggPSBmYWxzZTsgLy8g5piv5ZCm5pi+56S65aSN6YCJ5qGGXG4gIEBJbnB1dCgpIHRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+OyAvLyB0aXRsZeaooeadv1xuXG4gIEBPdXRwdXQoKSBjb2x1bW5zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VGFibGVDb2x1bW5bXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOWIl+aVsOaNruaUueWPmOS6i+S7tiDnlKjkuo7lj4zlkJHnu5HlrppcbiAgQE91dHB1dCgpIHNlbGVjdGlvbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUYWJsZVJvd1tdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5bey6YCJ6aG55pS55Y+Y5LqL5Lu2IOeUqOS6juWPjOWQkee7keWumlxuICBAT3V0cHV0KCkgbG9hZDogRXZlbnRFbWl0dGVyPFRhYmxlUGFnZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGxvYWTkuovku7ZcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDmjpLluo/kuovku7ZcbiAgQE91dHB1dCgpIGxpbmtDbGljazogRXZlbnRFbWl0dGVyPHsgZmllbGQ6IHN0cmluZzsgcm93RGF0YTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDpk77mjqXngrnlh7vkuovku7ZcblxuICBAQ29udGVudENoaWxkcmVuKFRhYmxlQ2VsbENvbXBvbmVudCkgY3VzdG9tQ2VsbHM6IFRhYmxlQ2VsbENvbXBvbmVudFtdOyAvLyDoh6rlrprkuYnljZXlhYPmoLxcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJsZUZpbHRlckNvbXBvbmVudCkgY3VzdG9tRmlsdGVyczogVGFibGVGaWx0ZXJDb21wb25lbnRbXTsgLy8g6Ieq5a6a5LmJ5pCc57Si57uE5Lu2XG5cbiAgbG9hZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7IC8vIGxvYWTmtYFcblxuICBkaXNwbGF5RGF0YTogVGFibGVSb3dbXSA9IFtdOyAvLyDlvZPliY3mmL7npLrmlbDmja5cbiAgcGFnZUluZGV4ID0gMTsgLy8g5b2T5YmN6aG156CBXG4gIHNvcnRQYXJhbXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgICAgLy8g6YeN6LWwc29ydFxuICAgICAgaWYgKHRoaXMuc29ydFBhcmFtcyAmJiB0aGlzLnNvcnRQYXJhbXMua2V5ICYmIHRoaXMuc29ydFBhcmFtcy52YWx1ZSkge1xuICAgICAgICB0aGlzLm9uU29ydCh0aGlzLnNvcnRQYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICAvLyDmmK/kuIvmi4npgInmi6nnmoToh6rliqjmt7vliqDor43lhbhcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uc2hvd0ZpbHRlciAmJiBjb2x1bW4uZmlsdGVyVHlwZSA9PT0gJ3NlbGVjdCcgJiYgQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyT3B0aW9ucykpIHtcbiAgICAgICAgICBjb2x1bW4ubGV4aWNvbiA9IGNvbHVtbi5sZXhpY29uID8gWy4uLmNvbHVtbi5sZXhpY29uLCAuLi5jb2x1bW4uZmlsdGVyT3B0aW9uc10gOiBjb2x1bW4uZmlsdGVyT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNlbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tlZEJ5U2VsZWN0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgdGhpcy5sb2FkJC5waXBlKGRlYm91bmNlVGltZSgyMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyDlj5Hlh7psb2Fk5LqL5Lu2XG4gICAgICB0aGlzLmxvYWQuZW1pdCh7IHBhZ2U6IHRoaXMucGFnZUluZGV4LCBzaXplOiB0aGlzLnBhZ2VTaXplIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIOmhtemdouWIneWni+WMluWujOaIkOWQjuiHquWKqGxvYWTkuIDmrKFcbiAgICB0aGlzLmxvYWQkLm5leHQoKTtcbiAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbiAmJiB0aGlzLmZpeGVkUGFnaW5hdGlvbikge1xuICAgICAgdGhpcy50b0ZpeGVkUGFnaW5hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyDotYvlgLzoh6rlrprkuYnljZXlhYPmoLxcbiAgICB0aGlzLmN1c3RvbUNlbGxzLmZvckVhY2goY3VzdG9tQ2VsbCA9PiB7XG4gICAgICBjb25zdCBmaW5kZWRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLmZpZWxkID09PSBjdXN0b21DZWxsLmZpZWxkKTtcbiAgICAgIGlmIChmaW5kZWRDb2x1bW4pIGZpbmRlZENvbHVtbi5jdXN0b21DZWxsID0gY3VzdG9tQ2VsbC50ZW1wbGF0ZVJlZjtcbiAgICB9KTtcbiAgICAvLyDotYvlgLzoh6rlrprkuYnmkJzntKLnu4Tku7ZcbiAgICB0aGlzLmN1c3RvbUZpbHRlcnMuZm9yRWFjaChjdXN0b21GaWx0ZXIgPT4ge1xuICAgICAgY29uc3QgZmluZGVkQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5maWVsZCA9PT0gY3VzdG9tRmlsdGVyLmZpZWxkKTtcbiAgICAgIGlmIChmaW5kZWRDb2x1bW4pIHtcbiAgICAgICAgZmluZGVkQ29sdW1uLnNob3dGaWx0ZXIgPSB0cnVlO1xuICAgICAgICBmaW5kZWRDb2x1bW4uY3VzdG9tRmlsdGVyID0gY3VzdG9tRmlsdGVyLnRlbXBsYXRlUmVmO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8g5LiN5L2/55SodGFrZVVudGls5piv5Zug5Li655u05o6ldW5zdWJzY3JpYmXmgKfog73mm7Tlpb1cbiAgICB0aGlzLmxvYWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICog6KGo5qC85b2T5YmN5pi+56S65pWw5o2u5pS55Y+Y5Zue6LCDXG4gICAqIEBwYXJhbSBjdXJyZW50RGF0YSDlvZPliY3pobXmmL7npLrmlbDmja5cbiAgICovXG4gIGN1cnJlbnRQYWdlRGF0YUNoYW5nZShjdXJyZW50RGF0YTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlEYXRhID0gY3VycmVudERhdGE7XG4gIH1cblxuICAvKipcbiAgICog5Y2V6YCJ5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBzaW5nbGVDaGVja0NoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbnNCeUNoZWNrZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhajpgInlpI3pgInmoYbmlLnlj5jlm57osINcbiAgICogQHBhcmFtIGlzQ2hlY2tlZCDmmK/lkKblhajpgIlcbiAgICovXG4gIGFsbENoZWNrQ2hhbmdlKGlzQ2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheURhdGEuZm9yRWFjaChyb3cgPT4gKHJvdy5pc0NoZWNrZWQgPSBpc0NoZWNrZWQpKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbnNCeUNoZWNrZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja5jaGVja2Vk5pu05pawc2VsZWN0aW9uc1xuICAgKi9cbiAgdXBkYXRlU2VsZWN0aW9uc0J5Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbnMgPSB0aGlzLmRpc3BsYXlEYXRhLmZpbHRlcihyb3cgPT4gcm93LmlzQ2hlY2tlZCk7XG4gICAgdGhpcy5zZWxlY3Rpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja5zZWxlY3Rpb25z5pu05pawY2hlY2tlZFxuICAgKi9cbiAgdXBkYXRlQ2hlY2tlZEJ5U2VsZWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlEYXRhLmZvckVhY2gocm93ID0+IChyb3cuaXNDaGVja2VkID0gdGhpcy5zZWxlY3Rpb25zLmluY2x1ZGVzKHJvdykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpobXnoIHmlLnlj5jlm57osINcbiAgICovXG4gIHBhZ2VJbmRleENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWQkLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmmL7npLrmnaHmlbDmlLnlj5jlm57osINcbiAgICovXG4gIHBhZ2VTaXplQ2hhbmdlKCk6IHZvaWQge1xuICAgIC8vIOaYvuekuuadoeaVsOaUueWPmOaXtuWbnuWIsOmmlumhtVxuICAgIHRoaXMucGFnZUluZGV4ID0gMTtcbiAgICB0aGlzLmxvYWQkLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmjpLluo/mlLnlj5hcbiAgICogQHBhcmFtIHNvcnRQYXJhbXMg5o6S5bqP5Y+C5pWwXG4gICAqL1xuICBvblNvcnQoc29ydFBhcmFtczogeyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9KTogdm9pZCB7XG4gICAgLy8g5L+d5a2Y5o6S5bqP5Y+C5pWw77yM55So5LqO5LiL5qyh5pWw5o2u6L+b5p2l5YaN6L+b6KGM5o6S5bqPXG4gICAgdGhpcy5zb3J0UGFyYW1zID0gc29ydFBhcmFtcztcbiAgICAvLyDmn6Xmib7mraPlnKjmjpLluo/nmoTliJdcbiAgICBjb25zdCBzb3J0Q29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5maWVsZCA9PT0gc29ydFBhcmFtcy5rZXkpO1xuXG4gICAgLy8g5aaC5p6c5rKh5pyJ6Ieq5a6a5LmJ5o6S5bqP77yM6Ieq5Yqo5YmN56uv5o6S5bqPXG4gICAgaWYgKHNvcnRDb2x1bW4gJiYgIXNvcnRDb2x1bW4uY3VzdG9tU29ydCkge1xuICAgICAgdGhpcy5kYXRhLmRhdGEuc29ydCgocHJldmlvdXMsIGZ1cnRoZXIpID0+XG4gICAgICAgIHNvcnRQYXJhbXMudmFsdWUgPT09ICdkZXNjZW5kJ1xuICAgICAgICAgID8gZnVydGhlcltzb3J0UGFyYW1zLmtleV0gPiBwcmV2aW91c1tzb3J0UGFyYW1zLmtleV1cbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiAtMVxuICAgICAgICAgIDogcHJldmlvdXNbc29ydFBhcmFtcy5rZXldID4gZnVydGhlcltzb3J0UGFyYW1zLmtleV1cbiAgICAgICAgICA/IDFcbiAgICAgICAgICA6IC0xLFxuICAgICAgKTtcbiAgICAgIHRoaXMuZGF0YS5kYXRhID0gWy4uLnRoaXMuZGF0YS5kYXRhXTtcbiAgICB9XG4gICAgdGhpcy5zb3J0LmVtaXQoc29ydFBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICog5pel5pyf5pS55Y+Y5Zue6LCDXG4gICAqIEBwYXJhbSBpc09wZW4g5piv5ZCm5omT5byAXG4gICAqIEBwYXJhbSBjb2x1bW4g5b2T5YmN5YiX5qih5Z6L5pWw5o2uXG4gICAqL1xuICBvblJhbmdlUGlja2VyT3BlbkNoYW5nZShpc09wZW46IGJvb2xlYW4sIGNvbHVtbjogVGFibGVDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IGNvbHVtbi5zZWFyY2hWYWx1ZTtcbiAgICAgIGlmIChkYXRlICYmIEFycmF5LmlzQXJyYXkoZGF0ZSkgJiYgZGF0ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29sdW1uLnNlYXJjaFZhbHVlID0gW2Zvcm1hdERhdGUoZGF0ZVswXSwgJ3l5eXktTU0tZGQgMDA6MDA6MDAnLCAnemhfQ04nKSwgZm9ybWF0RGF0ZShkYXRlWzFdLCAneXl5eS1NTS1kZCAyMzo1OTo1OScsICd6aF9DTicpXTtcbiAgICAgICAgY29sdW1uLmRpc3BsYXlWYWx1ZSA9IFtmb3JtYXREYXRlKGRhdGVbMF0sICd5eXl5LU1NLWRkJywgJ3poX0NOJyksIGZvcm1hdERhdGUoZGF0ZVsxXSwgJ3l5eXktTU0tZGQnLCAnemhfQ04nKV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOafpeivouehruiupOWbnuiwg1xuICAgKi9cbiAgb25GaWx0ZXJDb25maW0oZHJvcGRvd246IE56RHJvcERvd25EaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBkcm9wZG93bi5uekRyb3Bkb3duTWVudS5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcbiAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zXTtcbiAgICB0aGlzLmNvbHVtbnNDaGFuZ2UuZW1pdCh0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWbuuWumuWIhumhtVxuICAgKi9cbiAgdG9GaXhlZFBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgLy8g5rKh5pyJ5rua5Yqo5p2h5pe25ZKM5pyJ5rua5Yqo5p2h5pe2dGFibGVCb2R55Lya5LiN5LiA5qC377yM5pWF5YWI57uZ5LiK5rua5Yqo5p2hXG4gICAgdGhpcy5zY3JvbGwgPSB7IC4uLnRoaXMuc2Nyb2xsLCB5OiAnMHB4JyB9O1xuICAgIC8vIOetieW+hea7muWKqOadoeabtOaWsFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHRhYmxlQm9keSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKTtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnAtdGFibGUtcGFnaW5hdGlvbi1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHRhYmxlQm9keVRvcCA9IHRhYmxlQm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSB0YWJsZUJvZHlUb3AgLSBwYWdpbmF0aW9uLmNsaWVudEhlaWdodCArICdweCc7XG4gICAgICAvLyDorr5zY3JvbGwg5a6e6ZmF5LiK5piv6K6+5LqGbWF4LWhlaWdodFxuICAgICAgdGhpcy5zY3JvbGwgPSB7IC4uLnRoaXMuc2Nyb2xsLCB5OiBzY3JvbGxIZWlnaHQgfTtcbiAgICAgIC8vIOiuvmhlaWdodFxuICAgICAgdGhpcy5fcmVuZGVyZXIyLnNldFN0eWxlKHRhYmxlQm9keSwgJ2hlaWdodCcsIHNjcm9sbEhlaWdodCk7XG4gICAgfSk7XG4gIH1cblxuICBvbmxpbmtDbGljayhmaWVsZDogc3RyaW5nLCByb3dEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmxpbmtDbGljay5lbWl0KHsgZmllbGQsIHJvd0RhdGEgfSk7XG4gIH1cbn1cbiJdfQ==