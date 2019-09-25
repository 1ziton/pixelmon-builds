/**
 * @Description: 表格组件
 * @Author: zomixi
 * @Date: 2019-07-05 10:06:41
 */
import { AfterContentInit, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzDropDownDirective } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { TableCellComponent } from './table-cell.component';
import { TableFilterComponent } from './table-filter.component';
import { TableColumn, TablePage, TableRow } from './table-interface';
export declare class TableComponent implements OnChanges, OnInit, AfterViewInit, AfterContentInit, OnDestroy {
    private _elementRef;
    private _renderer2;
    columns: TableColumn[];
    data: {
        data: TableRow[];
        totalSize: number;
    };
    selections: TableRow[];
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    loading: boolean;
    pageSize: number;
    frontPagination: boolean;
    showPagination: boolean;
    fixedPagination: boolean;
    paginationOffset: number;
    showSizeChanger: boolean;
    showQuickJumper: boolean;
    size: 'middle' | 'small' | 'default';
    paginationSize: 'default' | 'small';
    title: string | TemplateRef<void>;
    pageSizeOptions: number[];
    showCheckbox: boolean;
    columnsChange: EventEmitter<TableColumn[]>;
    selectionsChange: EventEmitter<TableRow[]>;
    load: EventEmitter<TablePage>;
    sort: EventEmitter<{
        key: string;
        value: 'descend' | 'ascend' | null;
    }>;
    linkClick: EventEmitter<{
        field: string;
        rowData: any;
    }>;
    customCells: TableCellComponent[];
    customFilters: TableFilterComponent[];
    load$: Subject<any>;
    displayData: TableRow[];
    pageIndex: number;
    sortParams: {
        key: string;
        value: 'descend' | 'ascend' | null;
    };
    constructor(_elementRef: ElementRef, _renderer2: Renderer2);
    ngOnChanges(changes: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * 表格当前显示数据改变回调
     * @param currentData 当前页显示数据
     */
    currentPageDataChange(currentData: any[]): void;
    /**
     * 单选改变回调
     */
    singleCheckChange(): void;
    /**
     * 全选复选框改变回调
     * @param isChecked 是否全选
     */
    allCheckChange(isChecked: boolean): void;
    /**
     * 根据checked更新selections
     */
    updateSelectionsByChecked(): void;
    /**
     * 根据selections更新checked
     */
    updateCheckedBySelections(): void;
    /**
     * 页码改变回调
     */
    pageIndexChange(): void;
    /**
     * 显示条数改变回调
     */
    pageSizeChange(): void;
    /**
     * 排序改变
     * @param sortParams 排序参数
     */
    onSort(sortParams: {
        key: string;
        value: 'descend' | 'ascend' | null;
    }): void;
    /**
     * 日期改变回调
     * @param isOpen 是否打开
     * @param column 当前列模型数据
     */
    onRangePickerOpenChange(isOpen: boolean, column: TableColumn): void;
    /**
     * 查询确认回调
     */
    onFilterConfim(dropdown: NzDropDownDirective): void;
    /**
     * 固定分页
     */
    toFixedPagination(): void;
    onlinkClick(field: string, rowData: any): void;
    view(imgUrls: string[]): void;
}
