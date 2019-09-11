import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { AddressSelectService } from './address-select.service';
import { AddrOption } from './interface';
export declare class AddrOptionContainerComponent implements OnDestroy, OnInit {
    addrSelectService: AddressSelectService;
    private cdr;
    private destroy$;
    dropdownUl: ElementRef<HTMLUListElement>;
    notFoundContent: string;
    menuItemSelectedIcon: TemplateRef<void>;
    readonly scrollToBottom: EventEmitter<void>;
    level: number;
    clickOption(option: AddrOption): void;
    toggleTabs(tab: any, index: number): void;
    trackLabel(_index: number, option: AddrOption): string | TemplateRef<void>;
    trackValue(_index: number, option: AddrOption): any;
    constructor(addrSelectService: AddressSelectService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
