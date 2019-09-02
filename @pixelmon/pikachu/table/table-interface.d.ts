import { TemplateRef } from '@angular/core';
import { QueryTab } from '@pixelmon/pikachu/query-tabs';
export interface PTableData {
    data: PTableRow[];
    totalSize: number;
}
export interface PTableColumn extends QueryTab {
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
export interface PTableRow {
    isChecked: boolean;
    [key: string]: any;
}
export interface PTablePage {
    page: number;
    size: number;
}
