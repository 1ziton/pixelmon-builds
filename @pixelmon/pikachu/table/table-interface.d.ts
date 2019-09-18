import { TemplateRef } from '@angular/core';
import { QueryTab } from '@pixelmon/pikachu/query-tabs';
export interface TableData {
    data: TableRow[];
    totalSize: number;
}
export interface TableColumn extends QueryTab {
    title: string;
    field: string;
    width?: string;
    left?: string;
    right?: string;
    type?: 'link' | 'thumbnail';
    customCell?: TemplateRef<any>;
    showSort?: boolean;
    sortValue?: 'descend' | 'ascend' | null;
    customSort?: boolean;
    showFilter?: boolean;
    filterType?: string;
    filterOptions?: {
        label: string;
        value: any;
    }[];
    filterWidth?: string;
    filterMultiple?: boolean;
    customFilter?: TemplateRef<any>;
}
export interface TableRow {
    isChecked?: boolean;
    [key: string]: any;
}
export interface TablePage {
    page: number;
    size: number;
}
