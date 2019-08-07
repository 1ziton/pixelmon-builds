/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 基于viewer封装
 * @Author: zomixi
 * @Date: 2019-07-09 16:56:59
 */
import { NgModule, Directive, ContentChildren, QueryList, ElementRef, Input } from '@angular/core';
export class ViewerImgDirective {
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
export class ViewerDirective {
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
export class ViewerDirectiveModule {
}
ViewerDirectiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ViewerDirective, ViewerImgDirective],
                exports: [ViewerDirective, ViewerImgDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L3ZpZXdlci8iLCJzb3VyY2VzIjpbInZpZXdlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQStCLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVF4SSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUs3QixZQUFvQixXQUF5QztRQUF6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7UUFKcEQsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXOztRQUM3QixpQkFBWSxHQUFHLDJCQUEyQixDQUFDLENBQUMsWUFBWTtRQUkvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sWUFBWTtRQUNaLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7OztZQVBzRixVQUFVOzs7MEJBUzlGLEtBQUs7MkJBQ0wsS0FBSzs7OztJQUROLHlDQUEwQjs7SUFDMUIsMENBQW9EOztJQUNwRCwyQ0FBZ0M7Ozs7O0lBRXBCLHlDQUFpRDs7QUFnQi9ELE1BQU0sT0FBTyxlQUFlOzs7OztJQVExQixZQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVAzQyxXQUFNLEdBQVEsSUFBSSxDQUFDLENBQUMsV0FBVzs7UUFHdEIsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLFVBQVU7O1FBQzlCLGVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxTQUFTO0lBR0ssQ0FBQzs7OztJQUUvQyxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzFELFVBQVU7WUFDVixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7OztJQUVELFVBQVU7O1lBQ0osV0FBMkI7UUFDL0IsZ0RBQWdEO1FBQ2hELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQ3ZELEtBQUs7OztZQUFFLEdBQUcsRUFBRTtnQkFDVixXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO2dCQUV2QyxlQUFlO2dCQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsMENBQTBDO29CQUMxQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7OEJBQ2pELE9BQU8sR0FBRyxtQkFBQSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQW9CO3dCQUN0RCxPQUFPLENBQUMsR0FBRyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFVLENBQUM7cUJBQ3JEO2lCQUNGO1lBQ0gsQ0FBQyxDQUFBO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsNEJBQTRCO1FBQzVCLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFFdkMsYUFBYTtRQUNiLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7a0JBQy9ELE9BQU8sR0FBRyxtQkFBQSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQW9CO1lBQ3RELE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQTVCc0YsVUFBVTs7O3lCQWlDOUYsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Ozs7SUFMMUQsaUNBQW1COzs7OztJQUNuQix3Q0FBb0M7O0lBRXBDLHFDQUE0Qjs7SUFDNUIscUNBQStCOztJQUMvQixxQ0FBc0c7Ozs7O0lBRTFGLHNDQUErQjs7QUF1RDdDLE1BQU0sT0FBTyxxQkFBcUI7OztZQUpqQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO2dCQUNuRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5Z+65LqOdmlld2Vy5bCB6KOFXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA5IDE2OjU2OjU5XG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyIFZpZXdlcjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ZpZXdlckltZ10nLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJJbWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYXp5TG9hZFNyYyA9ICcnOyAvLyDmh5LliqDovb3lm77niYd1cmxcbiAgQElucHV0KCkgdGh1bWJuYWlsU3JjID0gJy9hc3NldHMvaW1nL3RodW1ibmFpbC5wbmcnOyAvLyDmh5LliqDovb3nvKnnlaXlm751cmxcbiAgbmF0aXZlRWxlbWVudDogSFRNTEltYWdlRWxlbWVudDsgLy8gSFRNTEltYWdlRWxlbWVudOWunuS+i1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEltYWdlRWxlbWVudD4pIHtcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyDmh5LliqDovb3ml7botYvlgLx1cmxcbiAgICBpZiAodGhpcy5sYXp5TG9hZFNyYykge1xuICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMudGh1bWJuYWlsU3JjO1xuICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFzZXQubGF6eUxvYWRTcmMgPSB0aGlzLmxhenlMb2FkU3JjO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdmlld2VyXScsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHZpZXdlcjogYW55ID0gbnVsbDsgLy8gdmlld2Vy5a6e5L6LXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uOyAvLyDnlKjkuo51bnN1YnNjcmliZVxuXG4gIEBJbnB1dCgpIGlzTGF6eUxvYWQgPSBmYWxzZTsgLy8g5piv5ZCm5oeS5Yqg6L295Zu+54mHXG4gIEBJbnB1dCgpIG1heFNob3dOdW0gPSBJbmZpbml0eTsgLy8g5pyA5aSn5pi+56S65pWw6YePXG4gIEBDb250ZW50Q2hpbGRyZW4oVmlld2VySW1nRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHZpZXdlckltZ3M6IFF1ZXJ5TGlzdDxWaWV3ZXJJbWdEaXJlY3RpdmU+OyAvLyDlvZN2aWV3ZXJJbWdz5pS55Y+Y5pe26Ieq5Yqo5pu05pawdmlld2VyXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5pbml0Vmlld2VyKCk7XG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLnZpZXdlckltZ3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8g562J5b6FRE9N5pu05pawXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0Vmlld2VyKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRWaWV3ZXIoKSB7XG4gICAgbGV0IGltZ0VsZW1lbnRzOiBIVE1MQ29sbGVjdGlvbjtcbiAgICAvLyDlm6DkuLpyZWFkeeS6i+S7tuWPquS8muaJp+ihjOS4gOmBje+8jOaVhemHh+eUqGRlc3Ryb3nlho1uZXfnmoTmlrnms5XvvIx1cGRhdGXmlrnms5XkuI3pgILnlKhcbiAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy52aWV3ZXIgPSBuZXcgVmlld2VyKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgaW1nRWxlbWVudHMgPSB0aGlzLnZpZXdlci5pbWFnZXMgfHwgW107XG5cbiAgICAgICAgLy8g57uZc3Jj6LWL5YC85oeS5Yqg6L29dXJsXG4gICAgICAgIGlmICh0aGlzLmlzTGF6eUxvYWQpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW1nRWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW1nRWxlbWVudHNbaW5kZXhdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZGF0YXNldC5sYXp5TG9hZFNyYyBhcyBzdHJpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gdmlld2Vy5Yid5aeL5YyW5ZCO5omN5pyJdmlld2VyLmltYWdlc1xuICAgIGltZ0VsZW1lbnRzID0gdGhpcy52aWV3ZXIuaW1hZ2VzIHx8IFtdO1xuXG4gICAgLy8g6LaF6L+H5pyA5aSn5pWw6YeP55qE5LiN5pi+56S6XG4gICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLm1heFNob3dOdW07IGluZGV4IDwgaW1nRWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaW1nRWxlbWVudHNbaW5kZXhdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICBlbGVtZW50LmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1ZpZXdlckRpcmVjdGl2ZSwgVmlld2VySW1nRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1ZpZXdlckRpcmVjdGl2ZSwgVmlld2VySW1nRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyRGlyZWN0aXZlTW9kdWxlIHt9XG4iXX0=