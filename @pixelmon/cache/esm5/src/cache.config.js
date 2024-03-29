/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var PixelmonCacheConfig = /** @class */ (function () {
    function PixelmonCacheConfig() {
        /**
         * 缓存模式，默认：`promise`
         * - `promise` 约定模式，允许 `key` 作为 http 获取数据
         * - `none` 正常模式
         */
        this.mode = 'promise';
        /**
         * 重命名返回参数，例如：
         * - `null` 返回体为内容
         * - `list` 返回体应 `{ list: [] }`
         * - `result.list` 返回体应 `{ result: { list: [] } }`
         */
        this.reName = '';
        /**
         * 持久化数据键值前缀
         */
        this.prefix = '';
        /**
         * 持久化数据元数据存储键名
         */
        this.meta_key = '__cache_meta';
    }
    PixelmonCacheConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ PixelmonCacheConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PixelmonCacheConfig_Factory() { return new PixelmonCacheConfig(); }, token: PixelmonCacheConfig, providedIn: "root" });
    return PixelmonCacheConfig;
}());
export { PixelmonCacheConfig };
if (false) {
    /**
     * 缓存模式，默认：`promise`
     * - `promise` 约定模式，允许 `key` 作为 http 获取数据
     * - `none` 正常模式
     * @type {?}
     */
    PixelmonCacheConfig.prototype.mode;
    /**
     * 重命名返回参数，例如：
     * - `null` 返回体为内容
     * - `list` 返回体应 `{ list: [] }`
     * - `result.list` 返回体应 `{ result: { list: [] } }`
     * @type {?}
     */
    PixelmonCacheConfig.prototype.reName;
    /**
     * 持久化数据键值前缀
     * @type {?}
     */
    PixelmonCacheConfig.prototype.prefix;
    /**
     * 持久化数据元数据存储键名
     * @type {?}
     */
    PixelmonCacheConfig.prototype.meta_key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTs7Ozs7O1FBT0UsU0FBSSxHQUF3QixTQUFTLENBQUM7Ozs7Ozs7UUFPdEMsV0FBTSxHQUF1QixFQUFFLENBQUM7Ozs7UUFJaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQzs7OztRQUlyQixhQUFRLEdBQVksY0FBYyxDQUFDO0tBQ3BDOztnQkF2QkEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzhCQUZsQztDQXlCQyxBQXZCRCxJQXVCQztTQXRCWSxtQkFBbUI7Ozs7Ozs7O0lBTTlCLG1DQUFzQzs7Ozs7Ozs7SUFPdEMscUNBQWdDOzs7OztJQUloQyxxQ0FBcUI7Ozs7O0lBSXJCLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQaXhlbG1vbkNhY2hlQ29uZmlnIHtcbiAgLyoqXG4gICAqIOe8k+WtmOaooeW8j++8jOm7mOiupO+8mmBwcm9taXNlYFxuICAgKiAtIGBwcm9taXNlYCDnuqblrprmqKHlvI/vvIzlhYHorrggYGtleWAg5L2c5Li6IGh0dHAg6I635Y+W5pWw5o2uXG4gICAqIC0gYG5vbmVgIOato+W4uOaooeW8j1xuICAgKi9cbiAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJyA9ICdwcm9taXNlJztcbiAgLyoqXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsO+8jOS+i+Wmgu+8mlxuICAgKiAtIGBudWxsYCDov5Tlm57kvZPkuLrlhoXlrrlcbiAgICogLSBgbGlzdGAg6L+U5Zue5L2T5bqUIGB7IGxpc3Q6IFtdIH1gXG4gICAqIC0gYHJlc3VsdC5saXN0YCDov5Tlm57kvZPlupQgYHsgcmVzdWx0OiB7IGxpc3Q6IFtdIH0gfWBcbiAgICovXG4gIHJlTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdID0gJyc7XG4gIC8qKlxuICAgKiDmjIHkuYXljJbmlbDmja7plK7lgLzliY3nvIBcbiAgICovXG4gIHByZWZpeD86IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICog5oyB5LmF5YyW5pWw5o2u5YWD5pWw5o2u5a2Y5YKo6ZSu5ZCNXG4gICAqL1xuICBtZXRhX2tleT86IHN0cmluZyA9ICdfX2NhY2hlX21ldGEnO1xufVxuIl19