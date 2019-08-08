/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function PixelmonI18NService() { }
if (false) {
    /**
     * 调用 `use` 触发变更通知
     * @type {?}
     */
    PixelmonI18NService.prototype.change;
    /* Skipping unhandled member: [key: string]: any;*/
    /**
     * 变更语言
     * @param {?} lang 语言代码
     * @param {?=} emit 是否触发 `change`，默认：true
     * @return {?}
     */
    PixelmonI18NService.prototype.use = function (lang, emit) { };
    /**
     * 返回当前语言列表
     * @return {?}
     */
    PixelmonI18NService.prototype.getLangs = function () { };
    /**
     * 翻译
     * - `params` 模板所需要的参数对象
     * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
     * @param {?} key
     * @param {?=} params
     * @param {?=} isSafe
     * @return {?}
     */
    PixelmonI18NService.prototype.fanyi = function (key, params, isSafe) { };
}
/** @type {?} */
export const PIXELMON_I18N_TOKEN = new InjectionToken('pixelmonTranslatorToken', {
    providedIn: 'root',
    factory: PIXELMON_I18N_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
export function PIXELMON_I18N_TOKEN_FACTORY() {
    return new PixelmonI18NServiceFake();
}
export class PixelmonI18NServiceFake {
    constructor() {
        this.change$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    get change() {
        return (/** @type {?} */ (this.change$.asObservable().pipe(filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w != null)))));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        this.change$.next(lang);
    }
    /**
     * @return {?}
     */
    getLangs() {
        return [];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    fanyi(key) {
        return key;
    }
}
PixelmonI18NServiceFake.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ PixelmonI18NServiceFake.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PixelmonI18NServiceFake_Factory() { return new PixelmonI18NServiceFake(); }, token: PixelmonI18NServiceFake, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PixelmonI18NServiceFake.prototype.change$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUV4Qyx5Q0EwQkM7Ozs7OztJQXBCQyxxQ0FBb0M7Ozs7Ozs7O0lBT3BDLDhEQUF3Qzs7Ozs7SUFLeEMseURBQWtCOzs7Ozs7Ozs7O0lBT2xCLHlFQUEwRDs7O0FBRzVELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBc0IseUJBQXlCLEVBQUU7SUFDcEcsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLDJCQUEyQjtDQUNyQyxDQUFDOzs7O0FBRUYsTUFBTSxVQUFVLDJCQUEyQjtJQUN6QyxPQUFPLElBQUksdUJBQXVCLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBR0QsTUFBTSxPQUFPLHVCQUF1QjtJQURwQztRQUVVLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsSUFBSSxDQUFDLENBQUM7S0FpQjVEOzs7O0lBZkMsSUFBSSxNQUFNO1FBQ1IsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDLENBQUMsRUFBc0IsQ0FBQztJQUN4RixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQVc7UUFDZixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQWxCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7OztJQUVoQywwQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGl4ZWxtb25JMThOU2VydmljZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKipcbiAgICog6LCD55SoIGB1c2VgIOinpuWPkeWPmOabtOmAmuefpVxuICAgKi9cbiAgcmVhZG9ubHkgY2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIOWPmOabtOivreiogFxuICAgKiBAcGFyYW0gbGFuZyDor63oqIDku6PnoIFcbiAgICogQHBhcmFtIGVtaXQg5piv5ZCm6Kem5Y+RIGBjaGFuZ2Vg77yM6buY6K6k77yadHJ1ZVxuICAgKi9cbiAgdXNlKGxhbmc6IHN0cmluZywgZW1pdD86IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDov5Tlm57lvZPliY3or63oqIDliJfooahcbiAgICovXG4gIGdldExhbmdzKCk6IGFueVtdO1xuXG4gIC8qKlxuICAgKiDnv7vor5FcbiAgICogLSBgcGFyYW1zYCDmqKHmnb/miYDpnIDopoHnmoTlj4LmlbDlr7nosaFcbiAgICogLSBgaXNTYWZlYCDmmK/lkKbov5Tlm57lronlhajlrZfnrKbvvIzoh6rliqjosIPnlKggYGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sYFxuICAgKi9cbiAgZmFueWkoa2V5OiBzdHJpbmcsIHBhcmFtcz86IHt9LCBpc1NhZmU/OiBib29sZWFuKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUElYRUxNT05fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQaXhlbG1vbkkxOE5TZXJ2aWNlPigncGl4ZWxtb25UcmFuc2xhdG9yVG9rZW4nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogUElYRUxNT05fSTE4Tl9UT0tFTl9GQUNUT1JZLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBQSVhFTE1PTl9JMThOX1RPS0VOX0ZBQ1RPUlkoKSB7XG4gIHJldHVybiBuZXcgUGl4ZWxtb25JMThOU2VydmljZUZha2UoKTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQaXhlbG1vbkkxOE5TZXJ2aWNlRmFrZSBpbXBsZW1lbnRzIFBpeGVsbW9uSTE4TlNlcnZpY2Uge1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSkgYXMgT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICB9XG5cbiAgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxhbmcpO1xuICB9XG5cbiAgZ2V0TGFuZ3MoKTogYW55W10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGZhbnlpKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxufVxuIl19