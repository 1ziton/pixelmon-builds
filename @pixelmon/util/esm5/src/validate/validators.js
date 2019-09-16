/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDecimal, isIdCard, isInt, isMobile, isNum, isUrl, isBase64, isCreditCard, isEmail, isUUID, isTelPhone } from './validate';
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
var /**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
_Validators = /** @class */ (function () {
    function _Validators() {
    }
    /** 是否为数字 */
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    _Validators.num = /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isNum(control.value) ? null : { num: true };
    };
    /** 是否为整数 */
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    _Validators.int = /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isInt(control.value) ? null : { int: true };
    };
    /** 是否为小数 */
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    _Validators.decimal = /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isDecimal(control.value) ? null : { decimal: true };
    };
    /** 是否为身份证 */
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    _Validators.idCard = /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isIdCard(control.value) ? null : { idCard: true };
    };
    /** 是否为手机号 */
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    _Validators.mobile = /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isMobile(control.value) ? null : { mobile: true };
    };
    /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param which 号码类型
     */
    /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param {?=} which 号码类型
     * @return {?}
     */
    _Validators.telPhone = /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param {?=} which 号码类型
     * @return {?}
     */
    function (which) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            return isTelPhone(which, control.value) ? null : { telPhone: true };
        });
    };
    /** 是否URL地址 */
    /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    _Validators.url = /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isUrl(control.value) ? null : { url: true };
    };
    /** 是否base64编码 */
    /**
     * 是否base64编码
     * @param {?} control
     * @return {?}
     */
    _Validators.base64 = /**
     * 是否base64编码
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isBase64(control.value) ? null : { base64: true };
    };
    /** 是否银行卡 */
    /**
     * 是否银行卡
     * @param {?} control
     * @return {?}
     */
    _Validators.creditCard = /**
     * 是否银行卡
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isCreditCard(control.value) ? null : { creditCard: true };
    };
    /** 是否email */
    /**
     * 是否email
     * @param {?} control
     * @return {?}
     */
    _Validators.email = /**
     * 是否email
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isEmail(control.value) ? null : { email: true };
    };
    /** 是否全等 */
    /**
     * 是否全等
     * @param {?} val
     * @return {?}
     */
    _Validators.equal = /**
     * 是否全等
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return val === v ? null : { equal: true };
        });
    };
    /** 是否大于某个数 */
    /**
     * 是否大于某个数
     * @param {?} val
     * @return {?}
     */
    _Validators.gt = /**
     * 是否大于某个数
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v > +val ? null : { gt: true };
        });
    };
    /** 是否大于等于某个数 */
    /**
     * 是否大于等于某个数
     * @param {?} val
     * @return {?}
     */
    _Validators.gte = /**
     * 是否大于等于某个数
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v >= +val ? null : { gte: true };
        });
    };
    /** 是否小于某个数 */
    /**
     * 是否小于某个数
     * @param {?} val
     * @return {?}
     */
    _Validators.lt = /**
     * 是否小于某个数
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v < +val ? null : { lt: true };
        });
    };
    /** 是否小于等于某个数 */
    /**
     * 是否小于等于某个数
     * @param {?} val
     * @return {?}
     */
    _Validators.lte = /**
     * 是否小于等于某个数
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v <= +val ? null : { lte: true };
        });
    };
    /** 是否在指定区间内 */
    /**
     * 是否在指定区间内
     * @param {?} val
     * @return {?}
     */
    _Validators.range = /**
     * 是否在指定区间内
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v >= val[0] && +v <= val[1] ? null : { range: true };
        });
    };
    /** 是否uuid */
    /**
     * 是否uuid
     * @param {?} control
     * @return {?}
     */
    _Validators.uuid = /**
     * 是否uuid
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isUUID(control.value) ? null : { uuid: true };
    };
    return _Validators;
}());
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
export { _Validators };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3ZhbGlkYXRlL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7OztBQUlySTs7Ozs7SUFBQTtJQTRHQSxDQUFDO0lBM0dDLFlBQVk7Ozs7OztJQUNMLGVBQUc7Ozs7O0lBQVYsVUFBVyxPQUF3QjtRQUNqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELFlBQVk7Ozs7OztJQUNMLGVBQUc7Ozs7O0lBQVYsVUFBVyxPQUF3QjtRQUNqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELFlBQVk7Ozs7OztJQUNMLG1CQUFPOzs7OztJQUFkLFVBQWUsT0FBd0I7UUFDckMsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhOzs7Ozs7SUFDTixrQkFBTTs7Ozs7SUFBYixVQUFjLE9BQXdCO1FBQ3BDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMs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QTVHRCxJQTRHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzRGVjaW1hbCwgaXNJZENhcmQsIGlzSW50LCBpc01vYmlsZSwgaXNOdW0sIGlzVXJsLCBpc0Jhc2U2NCwgaXNDcmVkaXRDYXJkLCBpc0VtYWlsLCBpc1VVSUQsIGlzVGVsUGhvbmUgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuLyoqIOS4gOWll+aXpeW4uOmqjOivgeWZqCAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfVmFsaWRhdG9ycyB7XG4gIC8qKiDmmK/lkKbkuLrmlbDlrZcgKi9cbiAgc3RhdGljIG51bShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzTnVtKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbnVtOiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm5Li65pW05pWwICovXG4gIHN0YXRpYyBpbnQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc0ludChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGludDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuS4uuWwj+aVsCAqL1xuICBzdGF0aWMgZGVjaW1hbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzRGVjaW1hbChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGRlY2ltYWw6IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDmmK/lkKbkuLrouqvku73or4EgKi9cbiAgc3RhdGljIGlkQ2FyZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzSWRDYXJkKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaWRDYXJkOiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm5Li65omL5py65Y+3ICovXG4gIHN0YXRpYyBtb2JpbGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc01vYmlsZShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IG1vYmlsZTogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOaYr+WQpuS4uuaJi+acuuWPty/luqfmnLov5oiW5pyJ54m55q6K56ym5Y+35YiG6ZqU55qE55S16K+d5Y+356CBXG4gICAqIEBwYXJhbSB3aGljaCDlj7fnoIHnsbvlnotcbiAgICovXG4gIHN0YXRpYyB0ZWxQaG9uZSh3aGljaD86IGFueSkge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgcmV0dXJuIGlzVGVsUGhvbmUod2hpY2gsIGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgdGVsUGhvbmU6IHRydWUgfTtcbiAgICB9O1xuICB9XG5cbiAgLyoqIOaYr+WQplVSTOWcsOWdgCAqL1xuICBzdGF0aWMgdXJsKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNVcmwoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyB1cmw6IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDmmK/lkKZiYXNlNjTnvJbnoIEgKi9cbiAgc3RhdGljIGJhc2U2NChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzQmFzZTY0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgYmFzZTY0OiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm6ZO26KGM5Y2hICovXG4gIHN0YXRpYyBjcmVkaXRDYXJkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNDcmVkaXRDYXJkKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgY3JlZGl0Q2FyZDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpmVtYWlsICovXG4gIHN0YXRpYyBlbWFpbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzRW1haWwoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBlbWFpbDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuWFqOetiSAqL1xuICBzdGF0aWMgZXF1YWwodmFsOiBhbnkpIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IHY6IGFueSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICByZXR1cm4gdmFsID09PSB2ID8gbnVsbCA6IHsgZXF1YWw6IHRydWUgfTtcbiAgICB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuWkp+S6juafkOS4quaVsCAqL1xuICBzdGF0aWMgZ3QodmFsOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IHY6IGFueSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICByZXR1cm4gK3YgPiArdmFsID8gbnVsbCA6IHsgZ3Q6IHRydWUgfTtcbiAgICB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuWkp+S6juetieS6juafkOS4quaVsCAqL1xuICBzdGF0aWMgZ3RlKHZhbDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCB2OiBhbnkgPSBjb250cm9sLnZhbHVlO1xuICAgICAgcmV0dXJuICt2ID49ICt2YWwgPyBudWxsIDogeyBndGU6IHRydWUgfTtcbiAgICB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuWwj+S6juafkOS4quaVsCAqL1xuICBzdGF0aWMgbHQodmFsOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IHY6IGFueSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICByZXR1cm4gK3YgPCArdmFsID8gbnVsbCA6IHsgbHQ6IHRydWUgfTtcbiAgICB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuWwj+S6juetieS6juafkOS4quaVsCAqL1xuICBzdGF0aWMgbHRlKHZhbDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCB2OiBhbnkgPSBjb250cm9sLnZhbHVlO1xuICAgICAgcmV0dXJuICt2IDw9ICt2YWwgPyBudWxsIDogeyBsdGU6IHRydWUgfTtcbiAgICB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuWcqOaMh+WumuWMuumXtOWGhSAqL1xuICBzdGF0aWMgcmFuZ2UodmFsOiBBcnJheTxudW1iZXI+KSB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCB2OiBhbnkgPSBjb250cm9sLnZhbHVlO1xuICAgICAgcmV0dXJuICt2ID49IHZhbFswXSAmJiArdiA8PSB2YWxbMV0gPyBudWxsIDogeyByYW5nZTogdHJ1ZSB9O1xuICAgIH07XG4gIH1cblxuICAvKiog5piv5ZCmdXVpZCAqL1xuICBzdGF0aWMgdXVpZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzVVVJRChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IHV1aWQ6IHRydWUgfTtcbiAgfVxufVxuIl19