import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { AddressSelectService } from './address-select.service';
export declare class AddrSelectTopControlComponent implements OnInit, OnDestroy {
    addrSelectService: AddressSelectService;
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
    constructor(addrSelectService: AddressSelectService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
