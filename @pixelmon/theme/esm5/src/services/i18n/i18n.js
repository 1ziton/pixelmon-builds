/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export var PIXELMON_I18N_TOKEN = new InjectionToken('pixelmonTranslatorToken', {
    providedIn: 'root',
    factory: PIXELMON_I18N_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
export function PIXELMON_I18N_TOKEN_FACTORY() {
    return new PixelmonI18NServiceFake();
}
var PixelmonI18NServiceFake = /** @class */ (function () {
    function PixelmonI18NServiceFake() {
        this.change$ = new BehaviorSubject(null);
    }
    Object.defineProperty(PixelmonI18NServiceFake.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.change$.asObservable().pipe(filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w != null; })))));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    PixelmonI18NServiceFake.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.change$.next(lang);
    };
    /**
     * @return {?}
     */
    PixelmonI18NServiceFake.prototype.getLangs = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PixelmonI18NServiceFake.prototype.fanyi = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key;
    };
    PixelmonI18NServiceFake.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ PixelmonI18NServiceFake.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PixelmonI18NServiceFake_Factory() { return new PixelmonI18NServiceFake(); }, token: PixelmonI18NServiceFake, providedIn: "root" });
    return PixelmonI18NServiceFake;
}());
export { PixelmonI18NServiceFake };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PixelmonI18NServiceFake.prototype.change$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUV4Qyx5Q0EwQkM7Ozs7OztJQXBCQyxxQ0FBb0M7Ozs7Ozs7O0lBT3BDLDhEQUF3Qzs7Ozs7SUFLeEMseURBQWtCOzs7Ozs7Ozs7O0lBT2xCLHlFQUEwRDs7O0FBRzVELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBc0IseUJBQXlCLEVBQUU7SUFDcEcsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLDJCQUEyQjtDQUNyQyxDQUFDOzs7O0FBRUYsTUFBTSxVQUFVLDJCQUEyQjtJQUN6QyxPQUFPLElBQUksdUJBQXVCLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBRUQ7SUFBQTtRQUVVLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsSUFBSSxDQUFDLENBQUM7S0FpQjVEO0lBZkMsc0JBQUksMkNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLElBQUksRUFBVCxDQUFTLEVBQUMsQ0FBQyxFQUFzQixDQUFDO1FBQ3hGLENBQUM7OztPQUFBOzs7OztJQUVELHFDQUFHOzs7O0lBQUgsVUFBSSxJQUFZO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFRCx1Q0FBSzs7OztJQUFMLFVBQU0sR0FBVztRQUNmLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Z0JBbEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztrQ0F6Q2xDO0NBNERDLEFBbkJELElBbUJDO1NBbEJZLHVCQUF1Qjs7Ozs7O0lBQ2xDLDBDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBQaXhlbG1vbkkxOE5TZXJ2aWNlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiDosIPnlKggYHVzZWAg6Kem5Y+R5Y+Y5pu06YCa55+lXG4gICAqL1xuICByZWFkb25seSBjaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICog5Y+Y5pu06K+t6KiAXG4gICAqIEBwYXJhbSBsYW5nIOivreiogOS7o+eggVxuICAgKiBAcGFyYW0gZW1pdCDmmK/lkKbop6blj5EgYGNoYW5nZWDvvIzpu5jorqTvvJp0cnVlXG4gICAqL1xuICB1c2UobGFuZzogc3RyaW5nLCBlbWl0PzogYm9vbGVhbik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOi/lOWbnuW9k+WJjeivreiogOWIl+ihqFxuICAgKi9cbiAgZ2V0TGFuZ3MoKTogYW55W107XG5cbiAgLyoqXG4gICAqIOe/u+ivkVxuICAgKiAtIGBwYXJhbXNgIOaooeadv+aJgOmcgOimgeeahOWPguaVsOWvueixoVxuICAgKiAtIGBpc1NhZmVgIOaYr+WQpui/lOWbnuWuieWFqOWtl+espu+8jOiHquWKqOiwg+eUqCBgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWxgXG4gICAqL1xuICBmYW55aShrZXk6IHN0cmluZywgcGFyYW1zPzoge30sIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBQSVhFTE1PTl9JMThOX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFBpeGVsbW9uSTE4TlNlcnZpY2U+KCdwaXhlbG1vblRyYW5zbGF0b3JUb2tlbicsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiBQSVhFTE1PTl9JMThOX1RPS0VOX0ZBQ1RPUlksXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBJWEVMTU9OX0kxOE5fVE9LRU5fRkFDVE9SWSgpIHtcbiAgcmV0dXJuIG5ldyBQaXhlbG1vbkkxOE5TZXJ2aWNlRmFrZSgpO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFBpeGVsbW9uSTE4TlNlcnZpY2VGYWtlIGltcGxlbWVudHMgUGl4ZWxtb25JMThOU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQuYXNPYnNlcnZhYmxlKCkucGlwZShmaWx0ZXIodyA9PiB3ICE9IG51bGwpKSBhcyBPYnNlcnZhYmxlPHN0cmluZz47XG4gIH1cblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XG4gIH1cblxuICBnZXRMYW5ncygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZmFueWkoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG4iXX0=