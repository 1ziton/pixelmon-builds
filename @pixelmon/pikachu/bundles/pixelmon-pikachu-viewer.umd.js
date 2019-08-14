/**
 * @license ng-alain(cipchk@qq.com) v0.1.3
 * (c) 2019 giscafer(giscafer@outlook.com)
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/viewer', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu.viewer = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

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
            { type: core.Directive, args: [{
                        selector: '[viewerImg]',
                    },] }
        ];
        /** @nocollapse */
        ViewerImgDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ViewerImgDirective.propDecorators = {
            lazyLoadSrc: [{ type: core.Input }],
            thumbnailSrc: [{ type: core.Input }]
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
            { type: core.Directive, args: [{
                        selector: '[viewer]',
                    },] }
        ];
        /** @nocollapse */
        ViewerDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ViewerDirective.propDecorators = {
            isLazyLoad: [{ type: core.Input }],
            maxShowNum: [{ type: core.Input }],
            viewerImgs: [{ type: core.ContentChildren, args: [ViewerImgDirective, { descendants: true },] }]
        };
        return ViewerDirective;
    }());
    var ViewerDirectiveModule = /** @class */ (function () {
        function ViewerDirectiveModule() {
        }
        ViewerDirectiveModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ViewerDirective, ViewerImgDirective],
                        exports: [ViewerDirective, ViewerImgDirective],
                    },] }
        ];
        return ViewerDirectiveModule;
    }());

    exports.ViewerDirective = ViewerDirective;
    exports.ViewerDirectiveModule = ViewerDirectiveModule;
    exports.ViewerImgDirective = ViewerImgDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pixelmon-pikachu-viewer.umd.js.map
