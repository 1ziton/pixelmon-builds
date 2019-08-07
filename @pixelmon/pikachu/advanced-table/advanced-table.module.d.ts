import { TemplateRef } from '@angular/core';
export declare class AdvancedTableModule {
}
export interface Column {
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
    searchValue?: any;
    defaultValue?: any;
    displayValue?: any;
    lexicon?: {
        [key: string]: string;
    };
}
export interface PageParams {
    page: number;
    size: number;
}
