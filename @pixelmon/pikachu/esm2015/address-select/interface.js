/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AddrOption() { }
if (false) {
    /** @type {?} */
    AddrOption.prototype.label;
    /** @type {?} */
    AddrOption.prototype.value;
    /** @type {?|undefined} */
    AddrOption.prototype.disabled;
    /** @type {?|undefined} */
    AddrOption.prototype.checked;
    /** @type {?|undefined} */
    AddrOption.prototype.level;
}
/**
 * @record
 */
export function ResultOption() { }
if (false) {
    /** @type {?} */
    ResultOption.prototype.label;
    /** @type {?} */
    ResultOption.prototype.value;
    /** @type {?|undefined} */
    ResultOption.prototype.mergeName;
    /** @type {?|undefined} */
    ResultOption.prototype.level;
}
/**
 * 抽象类，继承以便重写方法获取数据
 * @abstract
 */
export class AddressQueryService {
}
if (false) {
    /**
     * @abstract
     * @param {?=} code
     * @return {?}
     */
    AddressQueryService.prototype.getListByCode = function (code) { };
    /**
     * @abstract
     * @param {?} code
     * @return {?}
     */
    AddressQueryService.prototype.getOptionByCode = function (code) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvYWRkcmVzcy1zZWxlY3QvIiwic291cmNlcyI6WyJpbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLGdDQU1DOzs7SUFMQywyQkFBYzs7SUFDZCwyQkFBYzs7SUFDZCw4QkFBbUI7O0lBQ25CLDZCQUFrQjs7SUFDbEIsMkJBQWU7Ozs7O0FBRWpCLGtDQUtDOzs7SUFKQyw2QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCxpQ0FBbUI7O0lBQ25CLDZCQUFlOzs7Ozs7QUFNakIsTUFBTSxPQUFnQixtQkFBbUI7Q0FHeEM7Ozs7Ozs7SUFGQyxrRUFBeUQ7Ozs7OztJQUN6RCxvRUFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkck9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGxldmVsPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZXN1bHRPcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBtZXJnZU5hbWU/OiBzdHJpbmc7XG4gIGxldmVsPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIOaKveixoeexu++8jOe7p+aJv+S7peS+v+mHjeWGmeaWueazleiOt+WPluaVsOaNrlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWRkcmVzc1F1ZXJ5U2VydmljZSB7XG4gIGFic3RyYWN0IGdldExpc3RCeUNvZGUoY29kZT86IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+O1xuICBhYnN0cmFjdCBnZXRPcHRpb25CeUNvZGUoY29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+O1xufVxuIl19