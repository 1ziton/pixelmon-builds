/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 基于viewer封装
 * @Author: zomixi
 * @Date: 2019-07-09 16:56:59
 */
import { NgModule, Directive, ContentChildren, QueryList, ElementRef, Input } from '@angular/core';
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
export { ViewerImgDirective };
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
export { ViewerDirective };
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
    ViewerDirective.prototype.maxShowNum;
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
export { ViewerDirectiveModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L3ZpZXdlci8iLCJzb3VyY2VzIjpbInZpZXdlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQStCLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUt4STtJQVFFLDRCQUFvQixXQUF5QztRQUF6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7UUFKcEQsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXOztRQUM3QixpQkFBWSxHQUFHLDJCQUEyQixDQUFDLENBQUMsWUFBWTtRQUkvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRSxZQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDM0Q7SUFDSCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkFQc0YsVUFBVTs7OzhCQVM5RixLQUFLOytCQUNMLEtBQUs7O0lBY1IseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWhCWSxrQkFBa0I7OztJQUM3Qix5Q0FBMEI7O0lBQzFCLDBDQUFvRDs7SUFDcEQsMkNBQWdDOzs7OztJQUVwQix5Q0FBaUQ7O0FBYS9EO0lBV0UseUJBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBUDNDLFdBQU0sR0FBUSxJQUFJ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5LqOdmlld2Vy5bCB6KOFXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA5IDE2OjU2OjU5XG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyIFZpZXdlcjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ZpZXdlckltZ10nLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJJbWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYXp5TG9hZFNyYyA9ICcnOyAvLyDmh5LliqDovb3lm77niYd1cmxcbiAgQElucHV0KCkgdGh1bWJuYWlsU3JjID0gJy9hc3NldHMvaW1nL3RodW1ibmFpbC5wbmcnOyAvLyDmh5LliqDovb3nvKnnlaXlm751cmxcbiAgbmF0aXZlRWxlbWVudDogSFRNTEltYWdlRWxlbWVudDsgLy8gSFRNTEltYWdlRWxlbWVudOWunuS+i1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEltYWdlRWxlbWVudD4pIHtcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyDmh5LliqDovb3ml7botYvlgLx1cmxcbiAgICBpZiAodGhpcy5sYXp5TG9hZFNyYykge1xuICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMudGh1bWJuYWlsU3JjO1xuICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFzZXQubGF6eUxvYWRTcmMgPSB0aGlzLmxhenlMb2FkU3JjO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdmlld2VyXScsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHZpZXdlcjogYW55ID0gbnVsbDsgLy8gdmlld2Vy5a6e5L6LXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uOyAvLyDnlKjkuo51bnN1YnNjcmliZVxuXG4gIEBJbnB1dCgpIGlzTGF6eUxvYWQgPSBmYWxzZTsgLy8g5piv5ZCm5oeS5Yqg6L295Zu+54mHXG4gIEBJbnB1dCgpIG1heFNob3dOdW0gPSBJbmZpbml0eTsgLy8g5pyA5aSn5pi+56S65pWw6YePXG4gIEBDb250ZW50Q2hpbGRyZW4oVmlld2VySW1nRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHZpZXdlckltZ3M6IFF1ZXJ5TGlzdDxWaWV3ZXJJbWdEaXJlY3RpdmU+OyAvLyDlvZN2aWV3ZXJJbWdz5pS55Y+Y5pe26Ieq5Yqo5pu05pawdmlld2VyXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5pbml0Vmlld2VyKCk7XG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLnZpZXdlckltZ3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8g562J5b6FRE9N5pu05pawXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0Vmlld2VyKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRWaWV3ZXIoKSB7XG4gICAgbGV0IGltZ0VsZW1lbnRzOiBIVE1MQ29sbGVjdGlvbjtcbiAgICAvLyDlm6DkuLpyZWFkeeS6i+S7tuWPquS8muaJp+ihjOS4gOmBje+8jOaVhemHh+eUqGRlc3Ryb3nlho1uZXfnmoTmlrnms5XvvIx1cGRhdGXmlrnms5XkuI3pgILnlKhcbiAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy52aWV3ZXIgPSBuZXcgVmlld2VyKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgaW1nRWxlbWVudHMgPSB0aGlzLnZpZXdlci5pbWFnZXMgfHwgW107XG5cbiAgICAgICAgLy8g57uZc3Jj6LWL5YC85oeS5Yqg6L29dXJsXG4gICAgICAgIGlmICh0aGlzLmlzTGF6eUxvYWQpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW1nRWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW1nRWxlbWVudHNbaW5kZXhdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZGF0YXNldC5sYXp5TG9hZFNyYyBhcyBzdHJpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gdmlld2Vy5Yid5aeL5YyW5ZCO5omN5pyJdmlld2VyLmltYWdlc1xuICAgIGltZ0VsZW1lbnRzID0gdGhpcy52aWV3ZXIuaW1hZ2VzIHx8IFtdO1xuXG4gICAgLy8g6LaF6L+H5pyA5aSn5pWw6YeP55qE5LiN5pi+56S6XG4gICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLm1heFNob3dOdW07IGluZGV4IDwgaW1nRWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaW1nRWxlbWVudHNbaW5kZXhdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICBlbGVtZW50LmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1ZpZXdlckRpcmVjdGl2ZSwgVmlld2VySW1nRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1ZpZXdlckRpcmVjdGl2ZSwgVmlld2VySW1nRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyRGlyZWN0aXZlTW9kdWxlIHt9XG4iXX0=