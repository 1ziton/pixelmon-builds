import { TemplateRef } from '@angular/core';
import { QueryTab } from '@pixelmon/pikachu/query-tabs';
export declare class AdvancedTableModule {
}
export interface AdvancedTableColumn extends QueryTab {
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
export interface AdvancedTableRow {
    isChecked: boolean;
    [key: string]: any;
}
export interface PageParams {
    page: number;
    size: number;
}
