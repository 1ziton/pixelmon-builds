/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-08-14 15:47:15
 * @description: 流程图
 */
import { AfterViewInit, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FlowProps, FlowStyle } from './interface';
export declare class FlowEditorComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    data: FlowProps;
    style: FlowStyle;
    onLoadingChanged?: (any);
    onError?: (any);
    rootDomID: string;
    protected getRootDomNode(): HTMLElement | null;
    protected getProps(): FlowProps;
    private isMounted;
    protected render(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    returnMessageToReactWhenReceived(): void;
}
