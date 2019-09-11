import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DropdownPanelService } from './dropdown-panel.service';
import { POption } from './interface';
export declare class PanelOptionContainerComponent implements OnDestroy, OnInit {
    dropPanelService: DropdownPanelService;
    private cdr;
    private ngZone;
    private destroy$;
    private lastScrollTop;
    dropdownUl: ElementRef<HTMLUListElement>;
    notFoundContent: string;
    menuItemSelectedIcon: TemplateRef<void>;
    readonly scrollToBottom: EventEmitter<void>;
    clickOption(option: POption): void;
    trackLabel(_index: number, option: POption): string | TemplateRef<void>;
    trackValue(_index: number, option: POption): any;
    constructor(dropPanelService: DropdownPanelService, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
