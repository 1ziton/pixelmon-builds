/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { deepMerge } from '@pixelmon/util';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/drawer";
/**
 * @record
 */
export function DrawerHelperOptions() { }
if (false) {
    /**
     * 大小，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth`；例如：lg、600，默认：`md`
     *
     * | 类型 | 默认大小 |
     * | --- | ------ |
     * | `sm` | `300` |
     * | `md` | `600` |
     * | `lg` | `900` |
     * | `xl` | `1200` |
     *
     * > 以上值，可通过覆盖相应的LESS参数自行调整
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.size;
    /**
     * 是否包含底部工具条，默认：`true`
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.footer;
    /**
     * 底部工具条高度，默认：`55`
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.footerHeight;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.exact;
    /**
     * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.drawerOptions;
}
/**
 * 抽屉辅助类
 *
 * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
 *
 * \@example
 * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
 * // 对于组件的成功&关闭的处理说明
 * // 成功
 * this.NzDrawerRef.close(data);
 * this.NzDrawerRef.close(true);
 * // 关闭
 * this.NzDrawerRef.close();
 * this.NzDrawerRef.close(false);
 */
var DrawerHelper = /** @class */ (function () {
    function DrawerHelper(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个抽屉
     */
    /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    DrawerHelper.prototype.create = /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    function (title, comp, params, options) {
        var _this = this;
        options = deepMerge({
            size: 'md',
            footer: true,
            footerHeight: 55,
            exact: true,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: '',
            },
        }, options);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            var _a = (/** @type {?} */ (options)), size = _a.size, footer = _a.footer, footerHeight = _a.footerHeight, drawerOptions = _a.drawerOptions;
            /** @type {?} */
            var defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzTitle: title,
            };
            if (typeof size === 'number') {
                defaultOptions[(/** @type {?} */ (drawerOptions)).nzPlacement === 'top' || (/** @type {?} */ (drawerOptions)).nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = (/** @type {?} */ (options)).size;
            }
            else {
                defaultOptions.nzWrapClassName = ((/** @type {?} */ (drawerOptions)).nzWrapClassName + (" drawer-" + (/** @type {?} */ (options)).size)).trim();
                delete (/** @type {?} */ (drawerOptions)).nzWrapClassName;
            }
            if (footer) {
                var _b = (/** @type {?} */ (drawerOptions)), nzPlacement = _b.nzPlacement, nzHeight = _b.nzHeight;
                // Should be header * footer, because of includes header
                /** @type {?} */
                var reduceHeight = (/** @type {?} */ (footerHeight)) * 2 - 2;
                if (nzPlacement === 'left' || nzPlacement === 'right') {
                    defaultOptions.nzBodyStyle = {
                        height: "calc(100% - " + reduceHeight + "px)",
                        overflow: 'auto',
                    };
                }
                else {
                    defaultOptions.nzBodyStyle = {
                        height: +(nzHeight || 256) - reduceHeight + "px",
                        overflow: 'auto',
                    };
                }
            }
            /** @type {?} */
            var subject = _this.srv.create(tslib_1.__assign({}, defaultOptions, drawerOptions));
            /** @type {?} */
            var afterClose$ = subject.afterClose.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if ((/** @type {?} */ (options)).exact === true) {
                    if (res != null) {
                        observer.next(res);
                    }
                }
                else {
                    observer.next(res);
                }
                observer.complete();
                afterClose$.unsubscribe();
            }));
        }));
    };
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     */
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    DrawerHelper.prototype.static = /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    function (title, comp, params, options) {
        /** @type {?} */
        var drawerOptions = tslib_1.__assign({ nzMaskClosable: false }, (options && options.drawerOptions));
        return this.create(title, comp, params, tslib_1.__assign({}, options, { drawerOptions: drawerOptions }));
    };
    DrawerHelper.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DrawerHelper.ctorParameters = function () { return [
        { type: NzDrawerService }
    ]; };
    /** @nocollapse */ DrawerHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.ɵɵinject(i1.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
    return DrawerHelper;
}());
export { DrawerHelper };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBRTVDLHlDQTBCQzs7Ozs7Ozs7Ozs7Ozs7O0lBYkMsbUNBQTBDOzs7OztJQUkxQyxxQ0FBaUI7Ozs7O0lBSWpCLDJDQUFzQjs7Ozs7SUFFdEIsb0NBQWdCOzs7OztJQUVoQiw0Q0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JsQztJQUVFLHNCQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7SUFFNUM7O09BRUc7Ozs7Ozs7OztJQUNILDZCQUFNOzs7Ozs7OztJQUFOLFVBQU8sS0FBYSxFQUFFLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNkI7UUFBNUUsaUJBNkRDO1FBNURDLE9BQU8sR0FBRyxTQUFTLENBQ2pCO1lBQ0UsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsYUFBYSxFQUFFO2dCQUNiLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixlQUFlLEVBQUUsRUFBRTthQUNwQjtTQUNGLEVBQ0QsT0FBTyxDQUNSLENBQUM7UUFDRixPQUFPLElBQUksVUFBVTs7OztRQUFDLFVBQUMsUUFBdUI7WUFDdEMsSUFBQSxpQ0FBOEUsRUFBNUUsY0FBSSxFQUFFLGtCQUFNLEVBQUUsOEJBQVksRUFBRSxnQ0FBZ0Q7O2dCQUM5RSxjQUFjLEdBQW9CO2dCQUN0QyxTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsTUFBTTtnQkFDdkIsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixjQUFjLENBQ1osbUJBQUEsYUFBYSxFQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssSUFBSSxtQkFBQSxhQUFhLEVBQUMsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDekcsR0FBRyxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxJQUFJLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLG1CQUFBLGFBQWEsRUFBQyxDQUFDLGVBQWUsSUFBRyxhQUFXLG1CQUFBLE9BQU8sRUFBQyxDQUFDLElBQU0sQ0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RHLE9BQU8sbUJBQUEsYUFBYSxFQUFDLENBQUMsZUFBZSxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxNQUFNLEVBQUU7Z0JBQ0osSUFBQSx1Q0FBNEQsRUFBMUQsNEJBQVcsRUFBRSxzQkFBNkM7OztvQkFFNUQsWUFBWSxHQUFHLG1CQUFBLFlBQVksRUFBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUMxQyxJQUFJLFdBQVcsS0FBSyxNQUFNLElBQUksV0FBVyxLQUFLLE9BQU8sRUFBRTtvQkFDckQsY0FBYyxDQUFDLFdBQVcsR0FBRzt3QkFDM0IsTUFBTSxFQUFFLGlCQUFlLFlBQVksUUFBSzt3QkFDeEMsUUFBUSxFQUFFLE1BQU07cUJBQ2pCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsY0FBYyxDQUFDLFdBQVcsR0FBRzt3QkFDM0IsTUFBTSxFQUFLLENBQUMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsWUFBWSxPQUFJO3dCQUNoRCxRQUFRLEVBQUUsTUFBTTtxQkFDakIsQ0FBQztpQkFDSDthQUNGOztnQkFFSyxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLHNCQUFNLGNBQWMsRUFBSyxhQUFhLEVBQUc7O2dCQUNsRSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxHQUFRO2dCQUN4RCxJQUFJLG1CQUFBLE9BQU8sRUFBQyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQzNCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTt3QkFDZixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNwQjtpQkFDRjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BCLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixDQUFDLEVBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7Ozs7O0lBQ0gsNkJBQU07Ozs7Ozs7O0lBQU4sVUFBTyxLQUFhLEVBQUUsSUFBUyxFQUFFLE1BQVksRUFBRSxPQUE2Qjs7WUFDcEUsYUFBYSxzQkFDakIsY0FBYyxFQUFFLEtBQUssSUFDbEIsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQU8sT0FBTyxJQUFFLGFBQWEsZUFBQSxJQUFHLENBQUM7SUFDekUsQ0FBQzs7Z0JBL0VGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBOUNSLGVBQWU7Ozt1QkFGekM7Q0FnSUMsQUFoRkQsSUFnRkM7U0EvRVksWUFBWTs7Ozs7O0lBQ1gsMkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQHBpeGVsbW9uL3V0aWwnO1xuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zLCBOekRyYXdlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlckhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICog5aSn5bCP77yM6Iul5YC85Li65pWw5YC857G75Z6L77yM5YiZ5qC55o2uIGBuelBsYWNlbWVudGAg6Ieq5Yqo6L2s5YyW5Li6IGBuekhlaWdodGAg5oiWIGBueldpZHRoYO+8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYG1kYFxuICAgKlxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICpcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuLyoqXG4gKiDmir3lsYnovoXliqnnsbtcbiAqXG4gKiAqKuazqOaEj++8mioqIOaehOW7uue7k+aenOmDveWPr+iiq+iuoumYhe+8jOS9huawuOi/nOmDveS4jeS8muinpuWPkSBgb2JzZXJ2ZXIuZXJyb3JgXG4gKlxuICogQGV4YW1wbGVcbiAqIHRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZSgnRWRpdCcsIEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gKiAvLyDmiJDlip9cbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZGF0YSk7XG4gKiB0aGlzLk56RHJhd2VyUmVmLmNsb3NlKHRydWUpO1xuICogLy8g5YWz6ZetXG4gKiB0aGlzLk56RHJhd2VyUmVmLmNsb3NlKCk7XG4gKiB0aGlzLk56RHJhd2VyUmVmLmNsb3NlKGZhbHNlKTtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJIZWxwZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpEcmF3ZXJTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiDmnoTlu7rkuIDkuKrmir3lsYlcbiAgICovXG4gIGNyZWF0ZSh0aXRsZTogc3RyaW5nLCBjb21wOiBhbnksIHBhcmFtcz86IGFueSwgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXG4gICAgICB7XG4gICAgICAgIHNpemU6ICdtZCcsXG4gICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgIGRyYXdlck9wdGlvbnM6IHtcbiAgICAgICAgICBuelBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICBueldyYXBDbGFzc05hbWU6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zIGFzIERyYXdlckhlbHBlck9wdGlvbnM7XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpEcmF3ZXJPcHRpb25zID0ge1xuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56Q29udGVudFBhcmFtczogcGFyYW1zLFxuICAgICAgICBuelRpdGxlOiB0aXRsZSxcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNbXG4gICAgICAgICAgZHJhd2VyT3B0aW9ucyEubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMhLm56UGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICduekhlaWdodCcgOiAnbnpXaWR0aCdcbiAgICAgICAgXSA9IG9wdGlvbnMhLnNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5ueldyYXBDbGFzc05hbWUgPSAoZHJhd2VyT3B0aW9ucyEubnpXcmFwQ2xhc3NOYW1lICsgYCBkcmF3ZXItJHtvcHRpb25zIS5zaXplfWApLnRyaW0oKTtcbiAgICAgICAgZGVsZXRlIGRyYXdlck9wdGlvbnMhLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICBjb25zdCB7IG56UGxhY2VtZW50LCBuekhlaWdodCB9ID0gZHJhd2VyT3B0aW9ucyBhcyBOekRyYXdlck9wdGlvbnM7XG4gICAgICAgIC8vIFNob3VsZCBiZSBoZWFkZXIgKiBmb290ZXIsIGJlY2F1c2Ugb2YgaW5jbHVkZXMgaGVhZGVyXG4gICAgICAgIGNvbnN0IHJlZHVjZUhlaWdodCA9IGZvb3RlckhlaWdodCEgKiAyIC0gMjtcbiAgICAgICAgaWYgKG56UGxhY2VtZW50ID09PSAnbGVmdCcgfHwgbnpQbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5uekJvZHlTdHlsZSA9IHtcbiAgICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7cmVkdWNlSGVpZ2h0fXB4KWAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGAkeysobnpIZWlnaHQgfHwgMjU2KSAtIHJlZHVjZUhlaWdodH1weGAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZSh7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5kcmF3ZXJPcHRpb25zIH0pO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucyEuZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmnoTlu7rkuIDkuKrmir3lsYnvvIzngrnlh7vokpnlsYLkuI3lhYHorrjlhbPpl61cbiAgICovXG4gIHN0YXRpYyh0aXRsZTogc3RyaW5nLCBjb21wOiBhbnksIHBhcmFtcz86IGFueSwgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGRyYXdlck9wdGlvbnMgPSB7XG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAuLi4ob3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRpdGxlLCBjb21wLCBwYXJhbXMsIHsgLi4ub3B0aW9ucywgZHJhd2VyT3B0aW9ucyB9KTtcbiAgfVxufVxuIl19