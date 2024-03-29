import { __values } from 'tslib';
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
        this.thumbnailSrc = "data:img/jpg;base64,\n  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"; // 懒加载缩略图url
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
if (false) {
    /** @type {?} */
    ViewerImgDirective.prototype.lazyLoadSrc;
    /** @type {?} */
    ViewerImgDirective.prototype.thumbnailSrc;
    /** @type {?} */
    ViewerImgDirective.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    ViewerImgDirective.prototype._elementRef;
}
var ViewerDirective = /** @class */ (function () {
    function ViewerDirective(_elementRef) {
        this._elementRef = _elementRef;
        // 用于unsubscribe
        this.isLazyLoad = false; // 是否懒加载图片
    }
    /**
     * @return {?}
     */
    ViewerDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateViewer();
        this._subscription = this.viewerImgs.changes.subscribe((/**
         * @return {?}
         */
        function () {
            // 等待DOM更新
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.updateViewer();
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
    ViewerDirective.prototype.updateViewer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.viewer = new Viewer(this._elementRef.nativeElement, {
            ready: (/**
             * @return {?}
             */
            function () {
                var e_1, _a;
                if (!_this.isLazyLoad) {
                    return;
                }
                // 给src赋值懒加载url
                /** @type {?} */
                var imgElements = _this.viewer.images || [];
                try {
                    for (var imgElements_1 = __values(imgElements), imgElements_1_1 = imgElements_1.next(); !imgElements_1_1.done; imgElements_1_1 = imgElements_1.next()) {
                        var element = imgElements_1_1.value;
                        element.src = (/** @type {?} */ (element.dataset.lazyLoadSrc));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (imgElements_1_1 && !imgElements_1_1.done && (_a = imgElements_1.return)) _a.call(imgElements_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }),
        });
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
        viewerImgs: [{ type: ContentChildren, args: [ViewerImgDirective, { descendants: true },] }]
    };
    return ViewerDirective;
}());
if (false) {
    /** @type {?} */
    ViewerDirective.prototype.viewer;
    /**
     * @type {?}
     * @private
     */
    ViewerDirective.prototype._subscription;
    /** @type {?} */
    ViewerDirective.prototype.isLazyLoad;
    /** @type {?} */
    ViewerDirective.prototype.viewerImgs;
    /**
     * @type {?}
     * @private
     */
    ViewerDirective.prototype._elementRef;
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ViewerDirective, ViewerDirectiveModule, ViewerImgDirective };
//# sourceMappingURL=pixelmon-pikachu-viewer.js.map
