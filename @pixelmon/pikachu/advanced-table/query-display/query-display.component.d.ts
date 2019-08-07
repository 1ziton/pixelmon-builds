/**
 * @Description: 用于展示当前查询条件
 * @Author: zomixi
 * @Date: 2019-05-15 14:42:17
 */
import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Column } from '../advanced-table.module';
export declare class QueryDisplayComponent implements OnInit, OnChanges {
    columns: Column[];
    lexicon: {
        value: any;
        label: string;
    }[];
    columnsChange: EventEmitter<Column[]>;
    queryChange: EventEmitter<object>;
    close: EventEmitter<Column>;
    filterRule: (element: any) => boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onClose(column: Column): void;
    updateQuery(): void;
    closeTab(column: any): void;
}
