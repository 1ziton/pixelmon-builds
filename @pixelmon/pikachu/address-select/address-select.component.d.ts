import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzNoAnimationDirective, NzSizeLDSType } from 'ng-zorro-antd/core';
import { AddressSelectService } from './address-select.service';
import { AddrSelectTopControlComponent } from './p-select-top-control.component';
export declare class AddressSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, AfterContentInit {
    private renderer;
    addrSelectService: AddressSelectService;
    private cdr;
    private focusMonitor;
    private platform;
    noAnimation?: NzNoAnimationDirective | undefined;
    _open: boolean;
    value: any | any[];
    dropDownPosition: 'top' | 'center' | 'bottom';
    triggerWidth: number;
    private _disabled;
    private _autoFocus;
    private isInit;
    private destroy$;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    panelTopControlComponent: AddrSelectTopControlComponent;
    /** should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved **/
    readonly onSearch: EventEmitter<string>;
    readonly scrollToBottom: EventEmitter<void>;
    readonly openChange: EventEmitter<boolean>;
    readonly pBlur: EventEmitter<void>;
    readonly pFocus: EventEmitter<void>;
    size: NzSizeLDSType;
    level: number;
    dropdownClassName: string;
    dropdownMatchSelectWidth: boolean;
    dropdownStyle: {
        [key: string]: string;
    };
    notFoundContent: string;
    allowClear: boolean;
    showSearch: boolean;
    loading: boolean;
    placeHolder: string;
    suffixIcon: TemplateRef<void>;
    clearIcon: TemplateRef<void>;
    removeIcon: TemplateRef<void>;
    menuItemSelectedIcon: TemplateRef<void>;
    showArrow: boolean;
    autoClearSearchValue: boolean;
    serverSearch: boolean;
    filterOption: any;
    separator: string;
    compareWith: (o1: any, o2: any) => boolean;
    autoFocus: boolean;
    open: boolean;
    disabled: boolean;
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    updateAutoFocus(): void;
    focus(): void;
    blur(): void;
    toggleDropDown(): void;
    closeDropDown(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    constructor(renderer: Renderer2, addrSelectService: AddressSelectService, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor, platform: Platform, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective | undefined);
    /** update ngModel -> update selectedOption */
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
