/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                    for (var imgElements_1 = tslib_1.__values(imgElements), imgElements_1_1 = imgElements_1.next(); !imgElements_1_1.done; imgElements_1_1 = imgElements_1.next()) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1LyIsInNvdXJjZXMiOlsidmlld2VyL3ZpZXdlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUErQixlQUFlLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLeEk7SUFrRUUsNEJBQW9CLFdBQXlDO1FBQXpDLGdCQUFXLEdBQVgsV0FBVyxDQUE4QjtRQTlEcEQsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXOztRQUM3QixpQkFBWSxHQUFHLHNoSkEwRHFCLENBQUMsQ0FBQyxZQUFZO1FBSXpELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLFlBQVk7UUFDWixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzRDtJQUNILENBQUM7O2dCQTVFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQVBzRixVQUFVOzs7OEJBUzlGLEtBQUs7K0JBQ0wsS0FBSzs7SUF3RVIseUJBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQTFFWSxrQkFBa0I7OztJQUM3Qix5Q0FBMEI7O0lBQzFCLDBDQTBEOEM7O0lBQzlDLDJDQUFnQzs7Ozs7SUFFcEIseUNBQWlEOztBQWEvRDtJQVVFLHlCQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7UUFIbEMsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLFVBQVU7SUFHTyxDQUFDOzs7O0lBRS9DLDRDQUFrQjs7O0lBQWxCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQztZQUNyRCxVQUFVO1lBQ1YsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVk7OztJQUFaO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQ3ZELEtBQUs7OztZQUFFOztnQkFDTCxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRTtvQkFDcEIsT0FBTztpQkFDUjs7O29CQUdLLFdBQVcsR0FBdUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRTs7b0JBRWhFLEtBQXNCLElBQUEsZ0JBQUEsaUJBQUEsV0FBVyxDQUFBLHdDQUFBLGlFQUFFO3dCQUE5QixJQUFNLE9BQU8sd0JBQUE7d0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsbUJBQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsQ0FBQztxQkFDNUM7Ozs7Ozs7OztZQUNILENBQUMsQ0FBQTtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQXRGc0YsVUFBVTs7OzZCQTJGOUYsS0FBSzs2QkFDTCxlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztJQXFDNUQsc0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTFDWSxlQUFlOzs7SUFDMUIsaUNBQVk7Ozs7O0lBQ1osd0NBQW9DOztJQUVwQyxxQ0FBNEI7O0lBQzVCLHFDQUFzRzs7Ozs7SUFFMUYsc0NBQStCOztBQXFDN0M7SUFBQTtJQUlvQyxDQUFDOztnQkFKcEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztvQkFDbkQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO2lCQUMvQzs7SUFDbUMsNEJBQUM7Q0FBQSxBQUpyQyxJQUlxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5Z+65LqOdmlld2Vy5bCB6KOFXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA5IDE2OjU2OjU5XG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyIFZpZXdlcjogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdmlld2VySW1nXScsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckltZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhenlMb2FkU3JjID0gJyc7IC8vIOaHkuWKoOi9veWbvueJh3VybFxuICBASW5wdXQoKSB0aHVtYm5haWxTcmMgPSBgZGF0YTppbWcvanBnO2Jhc2U2NCxcbiAgaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQVlBQUFDdFdLNmVBQUFNbDBsRVFWUjRYdTJkZ2JIdU5oR0Y5U29JVkFCVVxuICA4RWdGSVJXRVZCQ29JS0VDb0lJa0ZVQXFDRlNRcElJSEZVQTZJQlhBSE1hR3krUGQvK3FzcmRYSy9qUnpKL015NjEvU1dYMWV5WlpYXG4gIHJ4b0ZCVkRnV1FWZW9RMEtvTUR6Q2dBSW93TUZIaWdBSUF3UEZBQVF4Z0FLeEJRZ2dzUjA0NnFiS0FBZ04zRTAzWXdwQUNBeDNianFcbiAgSmdvQXlFMGNUVGRqQ2dCSVREZXV1b2tDQUhJVFI5UE5tQUlBRXRPTnEyNmlBSURjeE5GME02WUFnTVIwNDZxYktBQWdOM0UwM1l3cFxuICBBQ0F4M2JqcUpnb0F5RTBjVFRkakNnQklURGV1dW9rQ0FISVRSOVBObUFJQUV0T05xMjZpQUlEY3hORjBNNllBZ01SMDQ2cWJLQUFnXG4gIE4zRTAzWXdwQUNBeDNianFKZ29BeUUwY1RUZGpDZ0JJVERldXVva0NBSElUUjlQTm1BSUFFdE9OcTI2aUFJRGN4TkYwTTZZQWdNUjBcbiAgNDZxYktBQWdOM0UwM1l3cEFDQXgzYmpxSmdvQXlFMGNUVGRqQ2dCSVREZXV1b2tDQUhJVFI5UE5tQUlBRXRPTnEyNmlBSURjeE5GMFxuICBNNmJBQ29COHNIWHRwNjAxL1ZIV1YrRHZyVFg5cVh4WHVUc1ZBZmxSYSsyajF0b3ZXbXUvYkszcDM1VHJLdkNQMXRxZldtdmZ0dGIrXG4gIDNGclR2OHVVU29BSWhFOWJhNThCUlpueGtkMFF3ZkZGYSszTEtxQlVBZVNUVFJpaVJmYVFyRm1mUU5HTjhxdlp6WnNOaUlENHZMWDJcbiAgcTlsQ1VIOUpCZjdZV3Z2TnpHZ3lFeERCOFUxcjdlY2xYVU9qcWlqd2w5YmFoN01nbVFVSWNGUVpmbXUwWXhva3N3QlI1TkJUS2dvS1xuICA5Q3FncDF5S0pLbGxCaUI2U3FHblZSUVVjQlhRMHkwdDN0TktOaUJhYjd4SjZ4MFZYVkdCOTF0cm1uS2xsR3hBbUZxbHVQWFNsYVJPXG4gIHRUSUIwWnBEZ0ZCUTRLZ0NXb3NJbE9FbEV4QnRKOUFXRWdvS0hGVkFXMUswRFdsNHlRVGtuOEhlZkwrOVpSZGcrd2EzNEU5eFdSRUZcbiAgdE9sVUExd0w3cDhFMjVReWRsTXEyY1Q0T2lDRTdoUjZ5MTVxQTF1Z0gxenliZ1gwUGt4dnl5TXppNCszVFk1RHRjMENSQ0pvdjVWVFxuICAvc3BiZGtldXBXMzFWT3ExMlFQdDB4cStSU2tMRUMybzl1ODZlblg0R1ZPcVhxbVd0NHM4L3RkM0pNTmZObGNGaE9peC9KaTNPK0JHXG4gIGtVc0I0aTdRZjk5YSs1MHRNUmVzcklEOC9WdXpBOE52OE1NcjJEb01JS2JuYjJnT0lJYlRpU0NHV0JjeEJSRERrUUJpaUhVUlV3QXhcbiAgSEFrZ2hsZ1hNUVVRdzVFQVlvaDFFVk1BTVJ3SklJWllGekVGRU1PUjJZQzhLem5kdmx0VWU4SFlBMlk0TDJnS0lJWndvd0Z4azlQcFxuICBKWlkyUzJwdldOckhPb1plVnpBRkVNT0xvd0E1SXptZElvdmFsL0k5Z3FIWjZxWUFZbmh3QkNCbko2ZFRSRkhPSnFaZmhtTWZtQUtJXG4gIG9lT1pnSXhNVHFkdCtOcDJUVFF4blB1TUtZQVlHcDRGU0ZiK3JWOXYzelVZWGNUMExRVUF4QmdTWndDU0JjZmVMU0F4SFB3T1V3QXhcbiAgOURzRGtCa1pWTktTQ1JoYXJtSUtJSWFuamdJeUt6bWQxaVRLMjhUQzNYRDJaZ29naG1aSEFJbDhuV1kwN1VWVFBkM1N3cDNpS1FBZ1xuICBobDVIQUpreHRYcTdhMHkxREdjVFFWckwrbUNxU25LNjFPeC8vbGdzZVFVUnhIQkxOSUpVU2s2WG1rUFcwTGFxS1lBWW5va0M0a2FxXG4gIHZVbnZTazZueEdiNmM5TVY3YjhaN1lNaDA2Vk1BY1J3WjJSd2FUQ1BTRTZuMzFWZXIvZU05c3RVbXhvVlJTaDlDZ0JJbjA3L3Rvb0FcbiAgTWpJNVhSUStjbnYxT3gxQStyVUtBVEk2T1Yxa2ZjUFRySDZuQTBpL1ZpbUF1TW5wSWxFRVFQcWREaUQ5V29VQWNSZm9rV2xjUmgyR1xuICBUSmN5QlJERG5WVUhMNEFZVGpSTkFjUVFMQUtJOWo4NVowMjQyY0YxcHNYZmpEN0lsQjIrL1lJQlNMOVdvU21XdTBqWHhzSWZHMjNTXG4gIFlTK2ZHL1l5WlEzU0x4aUE5R3VWQW9pYW8wOW10ZlAzcGFKdlN4UTk5RituQUVpL1dnRFNyMVVJa01nZFhrM3EyUktpRjVEdW1YZy9cbiAgQklBeUpMcWNLWUFZTG8yc1FTSnJoTDFKY283cWZMdG82L3dmZ2lkZHVXc2NRNTVMbWdLSTRkWUlJUHA1ZDZIK3RFbGFrenc5S0ZRUlxuICBRNEJFeTRvTDlEMkIzdkNUbTk0aHF1cDA2eDErZk1md0NqWWhzaDZQUnU1Q1VRQWVYYWZwbFNKYTljTkhkUVBRWmt3TnpDTTNneEVhXG4gIDl2em04UEU3dklKa1FMU0lWaFJ4TnhiMk9NT3hpVVpBcDQ0anRvSkNOeE5CdkhJWlBuNkhWNUFNaUtxYkhVVXFSNCtyZ0xGRFBYejhcbiAgRHE5Z0FpQkgxeUpINzZnVjF4NktySHJZNEQ2Sk82ckY2T3VIajkvaEZVd0NSUE5wdlRqTW5tcFZmSElsTGZTZHZ2c09aL1RnUHVQM1xuICBoNC9mNFJWTUFrVFY2cEI1M1RXemluWUhhN0ZiYVdFdURmVDIvNHB3eUsvRHgrL3dDaVlDa2dsSlZUZ3lieEJaTjZLbjlRd2Z2OE1yXG4gIG1BeklEb20yazR5YWJ1bEFlODN0SzBXT0swK3JBQ1Q0eWUyak81Z0dqRjRDT3J0OWUrNklYN2JXdE1XbFV0RjA2czBGSHVIMmFEcjhcbiAgQmorOGdnSVI1S25RZWdTc0FYMDBtaWhxNkhjcW5qWVYyVGZXTXhncjJnd2Z2OE1yS0FhSW1xTTdyQWEzRnJCdVJORVJiSnF1VlQwUFxuICBwRXJpdkN5WWhvL2Y0UlVVQk9TcDgvUW1lYzkvcGYrdmYrL1FLRXFvNk0yOHBtZjZxMTQwdFZweHkwaFUxK0hqZDNnRnhRR0pPcWJpXG4gIGRXYzgxdFo3SEtWUFVzbU9rcEVkRU1QSDcvQUtBQ1NOSlgzUUZkMWJKVEEwUUdjZTJ3QWd4bENwdnRuUDZFcUs2WkhvMGZ0VjVlaU9cbiAgQUlpaE1JQVlZbTJmQTBlaVJ4VTQxRnNBTVh3T0lQMWlSYU9ISGtLNEh5ajF0OHEzQkJCRE13RHBGeXU2OXFpV054aEErbjBlU3RwZ1xuICAvUHhsVEtQUm8rS3VZd0F4aGlVUnBFK3NxMFFQMWlCOS92NlBGWUM4TE5pVm9nZUF2T3p2LzdFQWtNZUNIZG1RV0czdHNmZVVLWllCXG4gIENZQThGa3ZmZVNpQ3VLWGkyZ05BV3Q0cHQrNkFXYzMrU0NJNzliVnE5R0NLWlk3RUZTT0lwajJ2dDM1cUlKLzVtYXQrNjJqdXFzclJcbiAgQTBBdUNvamVYbiswVFhlcTc2S3RIRDBBNUdLQUNBd2xRMWdsalU3MTZBRWdGd0ZFVXgyQkVWa2dteEtjWmw0NWtkM1RUdklVeTNCNVxuICB4VFhJMFFXeTBmMVRUU3R0U0h6VU1RQXgzRjRORUUybDlHajF6SVczSVVmWXROcUdSQUI1Um9HczdPN2hrZlRnd3VnYjZ4RnRjWDd6XG4gICsrM3oyMHJwaUFEa1lvQ3NDb2NTMlNucXpmeEMwSUdaUmJxcFZvVXAxc3B3VkV1QjJ1TisxaUE5S20wMnN3RlpGUTRsc3ROQVcyVmFcbiAgeFZPc1RZR1YxaUFyd3FIRnVNREl6a1JpM1BOZU5DV0N2Q2pSZncxbVJaRFY0RkFpTytYcjJsUDFHQktYTXdVUXd5VXpBS2tPaDU1S1xuICBhZEd0ZEtmNkV4Z3JUcVdlR3dZQVVoaVFzK0RRVkVkMzg2c05Yc04xWVZNQU1hVExqQ0Jud2JIS0cydkREYW1tQUdMSW5RWElXWEJVXG4gIFBKZlFrTHVFS1lBWWJzZ0FCRGdNaHlTWUFvZ2g4bWhBZ01Od1JwSXBnQmhDandRRU9BeEhKSm9DaUNIMktFQ0F3M0JDc2ltQUdJS1BcbiAgQUFRNERBZE1NQVVRUS9TekFRRU9RL3hKcGdCaUNIOG1JTUJoQ0QvUkZFQU04YzhDQkRnTTBTZWJBb2poZ0RNQUFRNUQ4QUttQUdJNFxuICA0U2dnd0dHSVhjUVVRQXhISEFFRU9BeWhDNWtDaU9HTUtDREFZWWhjekJSQURJZEVBQUVPUStDQ3BnQmlPTVVGQkRnTWNZdWFBb2poXG4gIEdBY1E0RENFTFd3S0lJWnplZ0VCRGtQVTRxWUFZamlvSnhzNWNCaUNMbUI2YTBDVWp1WUR3MGxLU3ZEK0EzdmdNTVJjeFBUTmxpcTFcbiAgdDdrcGVZZGY5YmJtb0owTGlLcjc4Sms4VDhCeDBCa0ZMMWZtZkFIaWxFc0Jva3dmbnppOTMxTGJDSktucVcyQXd4UnhFWE0zZXFoYlxuICBQZFB3dzkzUGlpQktwUHgxb0xXS1BCOXZrQUJIUU1EaWwrZzRDUjByRVRtcFMrTkM2WldHbGl4QTFBazMvZWplY1VVUUNYSEdxVTVrXG4gIEh4azZuTHAvZkQvYlVRdno2SmtyS1dNM3BaSk5OZzF5SFhoSlFZR2pDaWpsYWlUcTJQVm1BcUtVL04vWUxlUUNGUGgvQlo1N2dITzZcbiAgVnBtQXFQR1JwMW1uZDVvZlhGcUJsS2RYdTBMWmdFUWU1eTN0VFJwL3VnSjZQNmIzWkNrbEd4QjE2b3ZXMnFjcHZhT1NxeW1nQTRJK1xuICB5K3pVREVDWWFtVjYrRHAxcFU2dFprMng5bnIxYUUvcmtkZlg4Ujg5R2FpQURpV2RjdTdpckFnaUxZRms0SWk2MEU5UGcwTWF6Z1JrXG4gIGgwUnJFbmNieW9YOFQxY2VLS0R0SkZwelREdEphellndXpaNlN5NVEzbU80b0VCcjdZY05qT2xuTDFZQlpJOG11bHZvRDFEdXlZbkFcbiAgMEkxU2Y5T2l4bFBwS3dIeWRBR3ZiUVJhbE9tL3dISnRXQVNGdGlIcG9VMjVzeDByQXZMMmNCQW9LdHJncGovSytncm90Rjc5cVpRK1xuICAyMzBGUU5ZZkR2UmdXUVVBWkZuWDBmQU1CUUFrUTJYcVdGWUJBRm5XZFRROFF3RUF5VkNaT3BaVkFFQ1dkUjBOejFBQVFESlVwbzVsXG4gIEZRQ1FaVjFId3pNVUFKQU1sYWxqV1FVQVpGblgwZkFNQlFBa1EyWHFXRllCQUZuV2RUUThRd0VBeVZDWk9wWlZBRUNXZFIwTnoxQUFcbiAgUURKVXBvNWxGUUNRWlYxSHd6TVVBSkFNbGFsaldRVUFaRm5YMGZBTUJRQWtRMlhxV0ZZQkFGbldkVFE4UXdFQXlWQ1pPcFpWQUVDV1xuICBkUjBOejFBQVFESlVwbzVsRlFDUVpWMUh3ek1VQUpBTWxhbGpXUVVBWkZuWDBmQU1CUUFrUTJYcVdGWUJBRm5XZFRROFF3RUF5VkNaXG4gIE9wWlZBRUNXZFIwTnoxQUFRREpVcG81bEZRQ1FaVjFId3pNVUFKQU1sYWxqV1FVQVpGblgwZkFNQlFBa1EyWHFXRllCQUZuV2RUUThcbiAgUXdFQXlWQ1pPcFpWNEYrY2YyN25SSlZVVkFBQUFBQkpSVTVFcmtKZ2dnPT1gOyAvLyDmh5LliqDovb3nvKnnlaXlm751cmxcbiAgbmF0aXZlRWxlbWVudDogSFRNTEltYWdlRWxlbWVudDsgLy8gSFRNTEltYWdlRWxlbWVudOWunuS+i1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEltYWdlRWxlbWVudD4pIHtcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyDmh5LliqDovb3ml7botYvlgLx1cmxcbiAgICBpZiAodGhpcy5sYXp5TG9hZFNyYykge1xuICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMudGh1bWJuYWlsU3JjO1xuICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFzZXQubGF6eUxvYWRTcmMgPSB0aGlzLmxhenlMb2FkU3JjO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdmlld2VyXScsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHZpZXdlcjogYW55OyAvLyB2aWV3ZXLlrp7kvotcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247IC8vIOeUqOS6jnVuc3Vic2NyaWJlXG5cbiAgQElucHV0KCkgaXNMYXp5TG9hZCA9IGZhbHNlOyAvLyDmmK/lkKbmh5LliqDovb3lm77niYdcbiAgQENvbnRlbnRDaGlsZHJlbihWaWV3ZXJJbWdEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgdmlld2VySW1nczogUXVlcnlMaXN0PFZpZXdlckltZ0RpcmVjdGl2ZT47IC8vIOW9k3ZpZXdlckltZ3PmlLnlj5jml7boh6rliqjmm7TmlrB2aWV3ZXJcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVZpZXdlcigpO1xuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy52aWV3ZXJJbWdzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vIOetieW+hURPTeabtOaWsFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld2VyKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZpZXdlcigpIHtcbiAgICB0aGlzLnZpZXdlciA9IG5ldyBWaWV3ZXIodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XG4gICAgICByZWFkeTogKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNMYXp5TG9hZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOe7mXNyY+i1i+WAvOaHkuWKoOi9vXVybFxuICAgICAgICBjb25zdCBpbWdFbGVtZW50czogSFRNTEltYWdlRWxlbWVudFtdID0gdGhpcy52aWV3ZXIuaW1hZ2VzIHx8IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBpbWdFbGVtZW50cykge1xuICAgICAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5kYXRhc2V0LmxhenlMb2FkU3JjITtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtWaWV3ZXJEaXJlY3RpdmUsIFZpZXdlckltZ0RpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtWaWV3ZXJEaXJlY3RpdmUsIFZpZXdlckltZ0RpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckRpcmVjdGl2ZU1vZHVsZSB7fVxuIl19