/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-08-14 15:47:15
 * @description: ggeditor angular component
 */
import { AfterViewInit, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MindProps } from 'gg-editor';
import { FlowProps, FlowStyle, GraphType } from './interface';
export declare class GGEditorComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    data: FlowProps;
    style: FlowStyle;
    type: GraphType;
    enableEditor: boolean;
    onLoadingChanged?: any;
    onError?: any;
    rootDomID: string;
    protected getRootDomNode(): HTMLElement;
    protected getProps(): FlowProps | MindProps;
    private isMounted;
    protected render(): void;
    renderFlow(): void;
    renderFlowEditor(): void;
    renderMind(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
