import { Directive, ElementRef, Input, ContentChildren, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewerImgDirective = /** @class */ (function () {
    function ViewerImgDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.lazyLoadSrc = ''; // 懒加载图片url
        // 懒加载图片url
        this.thumbnailSrc = '/assets/img/thumbnail.png'; // 懒加载缩略图url
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ViewerImgDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // 懒加载时赋值url
        if (this.lazyLoadSrc) {
            this.nativeElement.src = this.thumbnailSrc;
            this.nativeElement.dataset.lazyLoadSrc = this.lazyLoadSrc;
        }
    };
    ViewerImgDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[viewerImg]',
                },] }
    ];
    /** @nocollapse */
    ViewerImgDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ViewerImgDirective.propDecorators = {
        lazyLoadSrc: [{ type: Input }],
        thumbnailSrc: [{ type: Input }]
    };
    return ViewerImgDirective;
}());
var ViewerDirective = /** @class */ (function () {
    function ViewerDirective(_elementRef) {
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
    ViewerDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initViewer();
        this._subscription = this.viewerImgs.changes.subscribe((/**
         * @return {?}
         */
        function () {
            // 等待DOM更新
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.initViewer();
            }));
        }));
    };
    /**
     * @return {?}
     */
    ViewerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    ViewerDirective.prototype.initViewer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var imgElements;
        // 因为ready事件只会执行一遍，故采用destroy再new的方法，update方法不适用
        if (this.viewer) {
            this.viewer.destroy();
        }
        this.viewer = new Viewer(this._elementRef.nativeElement, {
            ready: (/**
             * @return {?}
             */
            function () {
                imgElements = _this.viewer.images || [];
                // 给src赋值懒加载url
                if (_this.isLazyLoad) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var index = 0; index < imgElements.length; index++) {
                        /** @type {?} */
                        var element = (/** @type {?} */ (imgElements[index]));
                        element.src = (/** @type {?} */ (element.dataset.lazyLoadSrc));
                    }
                }
            }),
        });
        // viewer初始化后才有viewer.images
        imgElements = this.viewer.images || [];
        // 超过最大数量的不显示
        for (var index = this.maxShowNum; index < imgElements.length; index++) {
            /** @type {?} */
            var element = (/** @type {?} */ (imgElements[index]));
            element.hidden = true;
        }
    };
    ViewerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[viewer]',
                },] }
    ];
    /** @nocollapse */
    ViewerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ViewerDirective.propDecorators = {
        isLazyLoad: [{ type: Input }],
        maxShowNum: [{ type: Input }],
        viewerImgs: [{ type: ContentChildren, args: [ViewerImgDirective, { descendants: true },] }]
    };
    return ViewerDirective;
}());
var ViewerDirectiveModule = /** @class */ (function () {
    function ViewerDirectiveModule() {
    }
    ViewerDirectiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ViewerDirective, ViewerImgDirective],
                    exports: [ViewerDirective, ViewerImgDirective],
                },] }
    ];
    return ViewerDirectiveModule;
}());

export { ViewerDirective, ViewerDirectiveModule, ViewerImgDirective };
//# sourceMappingURL=pixelmon-pikachu-viewer.js.map
