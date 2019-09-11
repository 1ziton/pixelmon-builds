import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DropdownPanelService } from './dropdown-panel.service';
export declare class PanelSelectTopControlComponent implements OnInit, OnDestroy {
    dropPanelService: DropdownPanelService;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    inputValue: string;
    isComposing: boolean;
    private destroy$;
    inputElement: ElementRef;
    showSearch: boolean;
    placeHolder: string;
    open: boolean;
    allowClear: boolean;
    showArrow: boolean;
    loading: boolean;
    suffixIcon: TemplateRef<void>;
    clearIcon: TemplateRef<void>;
    removeIcon: TemplateRef<void>;
    onClearSelection(e: MouseEvent): void;
    setInputValue(value: string): void;
    readonly placeHolderDisplay: string;
    readonly selectedValueStyle: {
        [key: string]: string;
    };
    trackValue(_index: number, option: any): any;
    removeSelectedValue(option: any, e: MouseEvent): void;
    constructor(dropPanelService: DropdownPanelService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
