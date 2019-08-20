/**
 * @Description: 用于展示当前查询条件
 * @Author: zomixi
 * @Date: 2019-05-15 14:42:17
 */
import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { QueryTab } from './query-tabs.module';
export declare class QueryTabsComponent implements OnInit, OnChanges {
    tabs: QueryTab[];
    lexicon: {
        value: any;
        label: string;
    }[];
    tabsChange: EventEmitter<QueryTab[]>;
    queryChange: EventEmitter<object>;
    closeTab: EventEmitter<QueryTab>;
    filterRule: (tab: QueryTab) => boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onClose(tab: QueryTab): void;
    updateQuery(): void;
}
