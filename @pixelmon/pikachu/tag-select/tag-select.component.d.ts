import { EventEmitter } from '@angular/core';
export declare class TagSelectComponent {
    expand: boolean;
    /** 是否启用 `展开与收进` */
    expandable: boolean;
    readonly change: EventEmitter<boolean>;
    constructor();
    trigger(): void;
}
