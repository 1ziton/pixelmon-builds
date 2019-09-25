/**
 * @Description: 基于viewer封装
 * @Author: zomixi
 * @Date: 2019-07-09 16:56:59
 */
import { AfterContentInit, OnDestroy, QueryList, ElementRef, OnInit } from '@angular/core';
export declare class ViewerImgDirective implements OnInit {
    private _elementRef;
    lazyLoadSrc: string;
    thumbnailSrc: string;
    nativeElement: HTMLImageElement;
    constructor(_elementRef: ElementRef<HTMLImageElement>);
    ngOnInit(): void;
}
export declare class ViewerDirective implements AfterContentInit, OnDestroy {
    private _elementRef;
    viewer: any;
    private _subscription;
    isLazyLoad: boolean;
    viewerImgs: QueryList<ViewerImgDirective>;
    constructor(_elementRef: ElementRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateViewer(): void;
}
export declare class ViewerDirectiveModule {
}
