/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-08-14 15:47:15
 * @description: 思维导图
 */
import { AfterViewInit, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MindProps, FlowStyle } from './interface';
export declare class MindEditorComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    data: MindProps;
    style: FlowStyle;
    onLoadingChanged?: (any);
    onError?: (any);
    rootDomID: string;
    protected getRootDomNode(): HTMLElement | null;
    protected getProps(): MindProps;
    private isMounted;
    protected render(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
