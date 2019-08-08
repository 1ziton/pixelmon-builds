import { Directive, ElementRef, Input, ContentChildren, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerImgDirective {
    // HTMLImageElement实例
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.lazyLoadSrc = ''; // 懒加载图片url
        // 懒加载图片url
        this.thumbnailSrc = '/assets/img/thumbnail.png'; // 懒加载缩略图url
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // 懒加载时赋值url
        if (this.lazyLoadSrc) {
            this.nativeElement.src = this.thumbnailSrc;
            this.nativeElement.dataset.lazyLoadSrc = this.lazyLoadSrc;
        }
    }
}
ViewerImgDirective.decorators = [
    { type: Directive, args: [{
                selector: '[viewerImg]',
            },] }
];
/** @nocollapse */
ViewerImgDirective.ctorParameters = () => [
    { type: ElementRef }
];
ViewerImgDirective.propDecorators = {
    lazyLoadSrc: [{ type: Input }],
    thumbnailSrc: [{ type: Input }]
};
class ViewerDirective {
    // 当viewerImgs改变时自动更新viewer
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.viewer = null; // viewer实例
        // 用于unsubscribe
        this.isLazyLoad = false; // 是否懒加载图片
        // 是否懒加载图片
        this.maxShowNum = Infinity; // 最大显示数量
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.initViewer();
        this._subscription = this.viewerImgs.changes.subscribe((/**
         * @return {?}
         */
        () => {
            // 等待DOM更新
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.initViewer();
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    initViewer() {
        /** @type {?} */
        let imgElements;
        // 因为ready事件只会执行一遍，故采用destroy再new的方法，update方法不适用
        if (this.viewer) {
            this.viewer.destroy();
        }
        this.viewer = new Viewer(this._elementRef.nativeElement, {
            ready: (/**
             * @return {?}
             */
            () => {
                imgElements = this.viewer.images || [];
                // 给src赋值懒加载url
                if (this.isLazyLoad) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let index = 0; index < imgElements.length; index++) {
                        /** @type {?} */
                        const element = (/** @type {?} */ (imgElements[index]));
                        element.src = (/** @type {?} */ (element.dataset.lazyLoadSrc));
                    }
                }
            }),
        });
        // viewer初始化后才有viewer.images
        imgElements = this.viewer.images || [];
        // 超过最大数量的不显示
        for (let index = this.maxShowNum; index < imgElements.length; index++) {
            /** @type {?} */
            const element = (/** @type {?} */ (imgElements[index]));
            element.hidden = true;
        }
    }
}
ViewerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[viewer]',
            },] }
];
/** @nocollapse */
ViewerDirective.ctorParameters = () => [
    { type: ElementRef }
];
ViewerDirective.propDecorators = {
    isLazyLoad: [{ type: Input }],
    maxShowNum: [{ type: Input }],
    viewerImgs: [{ type: ContentChildren, args: [ViewerImgDirective, { descendants: true },] }]
};
class ViewerDirectiveModule {
}
ViewerDirectiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ViewerDirective, ViewerImgDirective],
                exports: [ViewerDirective, ViewerImgDirective],
            },] }
];

export { ViewerDirective, ViewerDirectiveModule, ViewerImgDirective };
//# sourceMappingURL=pixelmon-pikachu-viewer.js.map
