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
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
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
            const scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight - this.paginationOffset + 'px';
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
    /**
     * @param {?} imgUrls
     * @return {?}
     */
    view(imgUrls) {
        /** @type {?} */
        const images = imgUrls.map((/**
         * @param {?} url
         * @return {?}
         */
        url => {
            /** @type {?} */
            const image = new Image();
            image.src = url;
            return image;
        }));
        /** @type {?} */
        const hostElement = document.createElement('div');
        hostElement.append(...images);
        /** @type {?} */
        const viewer = new Viewer(hostElement, {
            hidden: (/**
             * @return {?}
             */
            () => {
                viewer.destroy();
            }),
        });
        viewer.show();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVloRSxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFrQ3pCLFlBQW9CLFdBQXVCLEVBQVUsVUFBcUI7UUFBdEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBakNqRSxZQUFPLEdBQWtCLEVBQUUsQ0FBQyxDQUFDLE1BQU07O1FBQ25DLFNBQUksR0FBNEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU87O1FBQ25GLGVBQVUsR0FBZSxFQUFFLENBQUMsQ0FBQyxNQUFNOztRQUVuQyxZQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsWUFBWTs7UUFDN0IsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU87O1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBUzs7UUFDbEMsbUJBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyxV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QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7bUJBQ0wsS0FBSzs2QkFDTCxLQUFLO29CQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUVMLE1BQU07K0JBQ04sTUFBTTttQkFDTixNQUFNO21CQUNOLE1BQU07d0JBQ04sTUFBTTswQkFFTixlQUFlLFNBQUMsa0JBQWtCOzRCQUNsQyxlQUFlLFNBQUMsb0JBQW9COzs7O0lBekJyQyxpQ0FBcUM7O0lBQ3JDLDhCQUFvRjs7SUFDcEYsb0NBQXFDOztJQUNyQyxnQ0FBMEQ7O0lBQzFELGlDQUF5Qjs7SUFDekIsa0NBQXVCOztJQUN2Qix5Q0FBaUM7O0lBQ2pDLHdDQUErQjs7SUFDL0IseUNBQWlDOztJQUNqQywwQ0FBOEI7O0lBQzlCLHlDQUFnQzs7SUFDaEMseUNBQWdDOztJQUNoQyw4QkFBeUQ7O0lBQ3pELHdDQUF5RDs7SUFDekQsK0JBQTJDOztJQUMzQyx5Q0FBNkM7O0lBQzdDLHNDQUE4Qjs7SUFFOUIsdUNBQTBFOztJQUMxRSwwQ0FBMEU7O0lBQzFFLDhCQUE2RDs7SUFDN0QsOEJBQXVHOztJQUN2RyxtQ0FBd0Y7O0lBRXhGLHFDQUF1RTs7SUFDdkUsdUNBQTZFOztJQUU3RSwrQkFBb0M7O0lBRXBDLHFDQUE2Qjs7SUFDN0IsbUNBQWM7O0lBQ2Qsb0NBQWdFOzs7OztJQUVwRCxxQ0FBK0I7Ozs7O0lBQUUsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBARGVzY3JpcHRpb246IOihqOagvOe7hOS7tlxuICogQEF1dGhvcjogem9taXhpXG4gKiBARGF0ZTogMjAxOS0wNy0wNSAxMDowNjo0MVxuICovXG5cbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVDb2x1bW4sIFRhYmxlUGFnZSwgVGFibGVSb3cgfSBmcm9tICcuL3RhYmxlLWludGVyZmFjZSc7XG5cbmRlY2xhcmUgY29uc3QgVmlld2VyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtdGFibGUnLFxuICBleHBvcnRBczogJ3BUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb2x1bW5zOiBUYWJsZUNvbHVtbltdID0gW107IC8vIOWIl+aVsOaNrlxuICBASW5wdXQoKSBkYXRhOiB7IGRhdGE6IFRhYmxlUm93W107IHRvdGFsU2l6ZTogbnVtYmVyIH0gPSB7IGRhdGE6IFtdLCB0b3RhbFNpemU6IDAgfTsgLy8g6KGo5qC85pWw5o2uXG4gIEBJbnB1dCgpIHNlbGVjdGlvbnM6IFRhYmxlUm93W10gPSBbXTsgLy8g5bey6YCJ6aG5XG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfTsgLy8g5Zu65a6a6KGo5aS077yM5rua5YqoXG4gIEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTsgLy8g6KGo5qC8bG9hZGluZ1xuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwOyAvLyDmmL7npLrmnaHmlbBcbiAgQElucHV0KCkgZnJvbnRQYWdpbmF0aW9uID0gZmFsc2U7IC8vIOaYr+WQpuWJjeerr+WIhumhtVxuICBASW5wdXQoKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7IC8vIOaYr+WQpuaYvuekuuWIhumhteWZqFxuICBASW5wdXQoKSBmaXhlZFBhZ2luYXRpb24gPSBmYWxzZTsgLy8g5piv5ZCm5Zu65a6a5YiG6aG15Zmo77yM55u05o6l5Zu65a6a5Zyo6aG16Z2i5bqV6YOoXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25PZmZzZXQgPSAwOyAvLyDlm7rlrprliIbpobXlmajnmoTlgY/np7vph4/vvIznlKjkuo7kuI3lm7rlrprlnKjpobXpnaLlupXpg6jogIzkuI7pobXpnaLlupXpg6jmnInlsI/orrjovrnot51cbiAgQElucHV0KCkgc2hvd1NpemVDaGFuZ2VyID0gdHJ1ZTsgLy8g5piv5ZCm5pi+56S65p2h5pWw5YiH5o2i5ZmoXG4gIEBJbnB1dCgpIHNob3dRdWlja0p1bXBlciA9IHRydWU7IC8vIOaYr+WQpuaYvuekuuW/q+mAn+i3s+i9rOWZqFxuICBASW5wdXQoKSBzaXplOiAnbWlkZGxlJyB8ICdzbWFsbCcgfCAnZGVmYXVsdCcgPSAnbWlkZGxlJzsgLy8g6KGo5qC8c2l6ZVxuICBASW5wdXQoKSBwYWdpbmF0aW9uU2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JzsgLy8g5YiG6aG1c2l6ZVxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47IC8vIOihqOagvOagh+mimFxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDMwLCA1MCwgMTAwXTsgLy8g6aG15pWw6YCJ5oup5Zmo5Y+v6YCJ5YC8XG4gIEBJbnB1dCgpIHNob3dDaGVja2JveCA9IGZhbHNlOyAvLyDmmK/lkKbmmL7npLrlpI3pgInmoYZcblxuICBAT3V0cHV0KCkgY29sdW1uc0NoYW5nZTogRXZlbnRFbWl0dGVyPFRhYmxlQ29sdW1uW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyDliJfmlbDmja7mlLnlj5jkuovku7Yg55So5LqO5Y+M5ZCR57uR5a6aXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VGFibGVSb3dbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOW3sumAiemhueaUueWPmOS6i+S7tiDnlKjkuo7lj4zlkJHnu5HlrppcbiAgQE91dHB1dCgpIGxvYWQ6IEV2ZW50RW1pdHRlcjxUYWJsZVBhZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBsb2Fk5LqL5Lu2XG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdmFsdWU6ICdkZXNjZW5kJyB8ICdhc2NlbmQnIHwgbnVsbCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5o6S5bqP5LqL5Lu2XG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2s6IEV2ZW50RW1pdHRlcjx7IGZpZWxkOiBzdHJpbmc7IHJvd0RhdGE6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g6ZO+5o6l54K55Ye75LqL5Lu2XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJsZUNlbGxDb21wb25lbnQpIGN1c3RvbUNlbGxzOiBUYWJsZUNlbGxDb21wb25lbnRbXTsgLy8g6Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gIEBDb250ZW50Q2hpbGRyZW4oVGFibGVGaWx0ZXJDb21wb25lbnQpIGN1c3RvbUZpbHRlcnM6IFRhYmxlRmlsdGVyQ29tcG9uZW50W107IC8vIOiHquWumuS5ieaQnOe0oue7hOS7tlxuXG4gIGxvYWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpOyAvLyBsb2Fk5rWBXG5cbiAgZGlzcGxheURhdGE6IFRhYmxlUm93W10gPSBbXTsgLy8g5b2T5YmN5pi+56S65pWw5o2uXG4gIHBhZ2VJbmRleCA9IDE7IC8vIOW9k+WJjemhteeggVxuICBzb3J0UGFyYW1zOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogJ2Rlc2NlbmQnIHwgJ2FzY2VuZCcgfCBudWxsIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXIyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcbiAgICAgIC8vIOmHjei1sHNvcnRcbiAgICAgIGlmICh0aGlzLnNvcnRQYXJhbXMgJiYgdGhpcy5zb3J0UGFyYW1zLmtleSAmJiB0aGlzLnNvcnRQYXJhbXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5vblNvcnQodGhpcy5zb3J0UGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgLy8g5piv5LiL5ouJ6YCJ5oup55qE6Ieq5Yqo5re75Yqg6K+N5YW4XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnNob3dGaWx0ZXIgJiYgY29sdW1uLmZpbHRlclR5cGUgPT09ICdzZWxlY3QnICYmIEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlck9wdGlvbnMpKSB7XG4gICAgICAgICAgY29sdW1uLmxleGljb24gPSBjb2x1bW4ubGV4aWNvbiA/IFsuLi5jb2x1bW4ubGV4aWNvbiwgLi4uY29sdW1uLmZpbHRlck9wdGlvbnNdIDogY29sdW1uLmZpbHRlck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zZWxlY3Rpb25zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrZWRCeVNlbGVjdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgIHRoaXMubG9hZCQucGlwZShkZWJvdW5jZVRpbWUoMjApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8g5Y+R5Ye6bG9hZOS6i+S7tlxuICAgICAgdGhpcy5sb2FkLmVtaXQoeyBwYWdlOiB0aGlzLnBhZ2VJbmRleCwgc2l6ZTogdGhpcy5wYWdlU2l6ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyDpobXpnaLliJ3lp4vljJblrozmiJDlkI7oh6rliqhsb2Fk5LiA5qyhXG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24gJiYgdGhpcy5maXhlZFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMudG9GaXhlZFBhZ2luYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8g6LWL5YC86Ieq5a6a5LmJ5Y2V5YWD5qC8XG4gICAgdGhpcy5jdXN0b21DZWxscy5mb3JFYWNoKGN1c3RvbUNlbGwgPT4ge1xuICAgICAgY29uc3QgZmluZGVkQ29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5maWVsZCA9PT0gY3VzdG9tQ2VsbC5maWVsZCk7XG4gICAgICBpZiAoZmluZGVkQ29sdW1uKSBmaW5kZWRDb2x1bW4uY3VzdG9tQ2VsbCA9IGN1c3RvbUNlbGwudGVtcGxhdGVSZWY7XG4gICAgfSk7XG4gICAgLy8g6LWL5YC86Ieq5a6a5LmJ5pCc57Si57uE5Lu2XG4gICAgdGhpcy5jdXN0b21GaWx0ZXJzLmZvckVhY2goY3VzdG9tRmlsdGVyID0+IHtcbiAgICAgIGNvbnN0IGZpbmRlZENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IGN1c3RvbUZpbHRlci5maWVsZCk7XG4gICAgICBpZiAoZmluZGVkQ29sdW1uKSB7XG4gICAgICAgIGZpbmRlZENvbHVtbi5zaG93RmlsdGVyID0gdHJ1ZTtcbiAgICAgICAgZmluZGVkQ29sdW1uLmN1c3RvbUZpbHRlciA9IGN1c3RvbUZpbHRlci50ZW1wbGF0ZVJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIOS4jeS9v+eUqHRha2VVbnRpbOaYr+WboOS4uuebtOaOpXVuc3Vic2NyaWJl5oCn6IO95pu05aW9XG4gICAgdGhpcy5sb2FkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOihqOagvOW9k+WJjeaYvuekuuaVsOaNruaUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gY3VycmVudERhdGEg5b2T5YmN6aG15pi+56S65pWw5o2uXG4gICAqL1xuICBjdXJyZW50UGFnZURhdGFDaGFuZ2UoY3VycmVudERhdGE6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YSA9IGN1cnJlbnREYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIOWNlemAieaUueWPmOWbnuiwg1xuICAgKi9cbiAgc2luZ2xlQ2hlY2tDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk7XG4gIH1cblxuICAvKipcbiAgICog5YWo6YCJ5aSN6YCJ5qGG5pS55Y+Y5Zue6LCDXG4gICAqIEBwYXJhbSBpc0NoZWNrZWQg5piv5ZCm5YWo6YCJXG4gICAqL1xuICBhbGxDaGVja0NoYW5nZShpc0NoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlEYXRhLmZvckVhY2gocm93ID0+IChyb3cuaXNDaGVja2VkID0gaXNDaGVja2VkKSk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25zQnlDaGVja2VkKCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uY2hlY2tlZOabtOaWsHNlbGVjdGlvbnNcbiAgICovXG4gIHVwZGF0ZVNlbGVjdGlvbnNCeUNoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25zID0gdGhpcy5kaXNwbGF5RGF0YS5maWx0ZXIocm93ID0+IHJvdy5pc0NoZWNrZWQpO1xuICAgIHRoaXMuc2VsZWN0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uc2VsZWN0aW9uc+abtOaWsGNoZWNrZWRcbiAgICovXG4gIHVwZGF0ZUNoZWNrZWRCeVNlbGVjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5RGF0YS5mb3JFYWNoKHJvdyA9PiAocm93LmlzQ2hlY2tlZCA9IHRoaXMuc2VsZWN0aW9ucy5pbmNsdWRlcyhyb3cpKSk7XG4gIH1cblxuICAvKipcbiAgICog6aG156CB5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlSW5kZXhDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5pi+56S65p2h5pWw5pS55Y+Y5Zue6LCDXG4gICAqL1xuICBwYWdlU2l6ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAvLyDmmL7npLrmnaHmlbDmlLnlj5jml7blm57liLDpppbpobVcbiAgICB0aGlzLnBhZ2VJbmRleCA9IDE7XG4gICAgdGhpcy5sb2FkJC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICog5o6S5bqP5pS55Y+YXG4gICAqIEBwYXJhbSBzb3J0UGFyYW1zIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgb25Tb3J0KHNvcnRQYXJhbXM6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiAnZGVzY2VuZCcgfCAnYXNjZW5kJyB8IG51bGwgfSk6IHZvaWQge1xuICAgIC8vIOS/neWtmOaOkuW6j+WPguaVsO+8jOeUqOS6juS4i+asoeaVsOaNrui/m+adpeWGjei/m+ihjOaOkuW6j1xuICAgIHRoaXMuc29ydFBhcmFtcyA9IHNvcnRQYXJhbXM7XG4gICAgLy8g5p+l5om+5q2j5Zyo5o6S5bqP55qE5YiXXG4gICAgY29uc3Qgc29ydENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4uZmllbGQgPT09IHNvcnRQYXJhbXMua2V5KTtcblxuICAgIC8vIOWmguaenOayoeacieiHquWumuS5ieaOkuW6j++8jOiHquWKqOWJjeerr+aOkuW6j1xuICAgIGlmIChzb3J0Q29sdW1uICYmICFzb3J0Q29sdW1uLmN1c3RvbVNvcnQpIHtcbiAgICAgIHRoaXMuZGF0YS5kYXRhLnNvcnQoKHByZXZpb3VzLCBmdXJ0aGVyKSA9PlxuICAgICAgICBzb3J0UGFyYW1zLnZhbHVlID09PSAnZGVzY2VuZCdcbiAgICAgICAgICA/IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldID4gcHJldmlvdXNbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogLTFcbiAgICAgICAgICA6IHByZXZpb3VzW3NvcnRQYXJhbXMua2V5XSA+IGZ1cnRoZXJbc29ydFBhcmFtcy5rZXldXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiAtMSxcbiAgICAgICk7XG4gICAgICB0aGlzLmRhdGEuZGF0YSA9IFsuLi50aGlzLmRhdGEuZGF0YV07XG4gICAgfVxuICAgIHRoaXMuc29ydC5lbWl0KHNvcnRQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOWbnuiwg1xuICAgKiBAcGFyYW0gaXNPcGVuIOaYr+WQpuaJk+W8gFxuICAgKiBAcGFyYW0gY29sdW1uIOW9k+WJjeWIl+aooeWei+aVsOaNrlxuICAgKi9cbiAgb25SYW5nZVBpY2tlck9wZW5DaGFuZ2UoaXNPcGVuOiBib29sZWFuLCBjb2x1bW46IFRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKGlzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBjb2x1bW4uc2VhcmNoVmFsdWU7XG4gICAgICBpZiAoZGF0ZSAmJiBBcnJheS5pc0FycmF5KGRhdGUpICYmIGRhdGUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbHVtbi5zZWFyY2hWYWx1ZSA9IFtmb3JtYXREYXRlKGRhdGVbMF0sICd5eXl5LU1NLWRkIDAwOjAwOjAwJywgJ3poX0NOJyksIGZvcm1hdERhdGUoZGF0ZVsxXSwgJ3l5eXktTU0tZGQgMjM6NTk6NTknLCAnemhfQ04nKV07XG4gICAgICAgIGNvbHVtbi5kaXNwbGF5VmFsdWUgPSBbZm9ybWF0RGF0ZShkYXRlWzBdLCAneXl5eS1NTS1kZCcsICd6aF9DTicpLCBmb3JtYXREYXRlKGRhdGVbMV0sICd5eXl5LU1NLWRkJywgJ3poX0NOJyldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmn6Xor6Lnoa7orqTlm57osINcbiAgICovXG4gIG9uRmlsdGVyQ29uZmltKGRyb3Bkb3duOiBOekRyb3BEb3duRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgZHJvcGRvd24ubnpEcm9wZG93bk1lbnUuc2V0VmlzaWJsZVN0YXRlV2hlbihmYWxzZSk7XG4gICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc107XG4gICAgdGhpcy5jb2x1bW5zQ2hhbmdlLmVtaXQodGhpcy5jb2x1bW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm7rlrprliIbpobVcbiAgICovXG4gIHRvRml4ZWRQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIC8vIOayoeaciea7muWKqOadoeaXtuWSjOaciea7muWKqOadoeaXtnRhYmxlQm9keeS8muS4jeS4gOagt++8jOaVheWFiOe7meS4iua7muWKqOadoVxuICAgIHRoaXMuc2Nyb2xsID0geyAuLi50aGlzLnNjcm9sbCwgeTogJzBweCcgfTtcbiAgICAvLyDnrYnlvoXmu5rliqjmnaHmm7TmlrBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB0YWJsZUJvZHkgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5Jyk7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wLXRhYmxlLXBhZ2luYXRpb24tY29udGFpbmVyJyk7XG4gICAgICBjb25zdCB0YWJsZUJvZHlUb3AgPSB0YWJsZUJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gdGFibGVCb2R5VG9wIC0gcGFnaW5hdGlvbi5jbGllbnRIZWlnaHQgLSB0aGlzLnBhZ2luYXRpb25PZmZzZXQgKyAncHgnO1xuICAgICAgLy8g6K6+c2Nyb2xsIOWunumZheS4iuaYr+iuvuS6hm1heC1oZWlnaHRcbiAgICAgIHRoaXMuc2Nyb2xsID0geyAuLi50aGlzLnNjcm9sbCwgeTogc2Nyb2xsSGVpZ2h0IH07XG4gICAgICAvLyDorr5oZWlnaHRcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5zZXRTdHlsZSh0YWJsZUJvZHksICdoZWlnaHQnLCBzY3JvbGxIZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgb25saW5rQ2xpY2soZmllbGQ6IHN0cmluZywgcm93RGF0YTogYW55KSB7XG4gICAgdGhpcy5saW5rQ2xpY2suZW1pdCh7IGZpZWxkLCByb3dEYXRhIH0pO1xuICB9XG5cbiAgdmlldyhpbWdVcmxzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGltYWdlcyA9IGltZ1VybHMubWFwKHVybCA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3N0RWxlbWVudC5hcHBlbmQoLi4uaW1hZ2VzKTtcblxuICAgIGNvbnN0IHZpZXdlciA9IG5ldyBWaWV3ZXIoaG9zdEVsZW1lbnQsIHtcbiAgICAgIGhpZGRlbjogKCkgPT4ge1xuICAgICAgICB2aWV3ZXIuZGVzdHJveSgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICB2aWV3ZXIuc2hvdygpO1xuICB9XG59XG4iXX0=