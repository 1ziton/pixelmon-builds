export interface QueryTab {
    title: string;
    field: string;
    showFilter?: boolean;
    searchValue?: any;
    defaultValue?: any;
    displayValue?: any;
    lexicon?: {
        value: any;
        label: string;
    }[];
}
