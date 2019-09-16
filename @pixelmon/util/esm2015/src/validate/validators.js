/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDecimal, isIdCard, isInt, isMobile, isNum, isUrl, isBase64, isCreditCard, isEmail, isUUID, isTelPhone } from './validate';
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
export class _Validators {
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    static num(control) {
        return isNum(control.value) ? null : { num: true };
    }
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    static int(control) {
        return isInt(control.value) ? null : { int: true };
    }
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    static decimal(control) {
        return isDecimal(control.value) ? null : { decimal: true };
    }
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    static idCard(control) {
        return isIdCard(control.value) ? null : { idCard: true };
    }
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    static mobile(control) {
        return isMobile(control.value) ? null : { mobile: true };
    }
    /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param {?=} which 号码类型
     * @return {?}
     */
    static telPhone(which) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            return isTelPhone(which, control.value) ? null : { telPhone: true };
        });
    }
    /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    static url(control) {
        return isUrl(control.value) ? null : { url: true };
    }
    /**
     * 是否base64编码
     * @param {?} control
     * @return {?}
     */
    static base64(control) {
        return isBase64(control.value) ? null : { base64: true };
    }
    /**
     * 是否银行卡
     * @param {?} control
     * @return {?}
     */
    static creditCard(control) {
        return isCreditCard(control.value) ? null : { creditCard: true };
    }
    /**
     * 是否email
     * @param {?} control
     * @return {?}
     */
    static email(control) {
        return isEmail(control.value) ? null : { email: true };
    }
    /**
     * 是否全等
     * @param {?} val
     * @return {?}
     */
    static equal(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return val === v ? null : { equal: true };
        });
    }
    /**
     * 是否大于某个数
     * @param {?} val
     * @return {?}
     */
    static gt(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v > +val ? null : { gt: true };
        });
    }
    /**
     * 是否大于等于某个数
     * @param {?} val
     * @return {?}
     */
    static gte(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v >= +val ? null : { gte: true };
        });
    }
    /**
     * 是否小于某个数
     * @param {?} val
     * @return {?}
     */
    static lt(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v < +val ? null : { lt: true };
        });
    }
    /**
     * 是否小于等于某个数
     * @param {?} val
     * @return {?}
     */
    static lte(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v <= +val ? null : { lte: true };
        });
    }
    /**
     * 是否在指定区间内
     * @param {?} val
     * @return {?}
     */
    static range(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v >= val[0] && +v <= val[1] ? null : { range: true };
        });
    }
    /**
     * 是否uuid
     * @param {?} control
     * @return {?}
     */
    static uuid(control) {
        return isUUID(control.value) ? null : { uuid: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3ZhbGlkYXRlL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7OztBQUlySSxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBRXRCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBd0I7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBd0I7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBd0I7UUFDckMsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBd0I7UUFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFB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QUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDekMsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFXO1FBQ3BCOzs7O1FBQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFOztrQkFDckQsQ0FBQyxHQUFRLE9BQU8sQ0FBQyxLQUFLO1lBQzVCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDM0MsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFrQjtRQUM3Qjs7OztRQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTs7a0JBQ3JELENBQUMsR0FBUSxPQUFPLENBQUMsS0FBSztZQUM1QixPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDL0QsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUF3QjtRQUNsQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNEZWNpbWFsLCBpc0lkQ2FyZCwgaXNJbnQsIGlzTW9iaWxlLCBpc051bSwgaXNVcmwsIGlzQmFzZTY0LCBpc0NyZWRpdENhcmQsIGlzRW1haWwsIGlzVVVJRCwgaXNUZWxQaG9uZSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuXG4vKiog5LiA5aWX5pel5bi46aqM6K+B5ZmoICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9WYWxpZGF0b3JzIHtcbiAgLyoqIOaYr+WQpuS4uuaVsOWtlyAqL1xuICBzdGF0aWMgbnVtKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNOdW0oY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBudW06IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDmmK/lkKbkuLrmlbTmlbAgKi9cbiAgc3RhdGljIGludChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzSW50KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaW50OiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm5Li65bCP5pWwICovXG4gIHN0YXRpYyBkZWNpbWFsKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNEZWNpbWFsKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgZGVjaW1hbDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuS4uui6q+S7veivgSAqL1xuICBzdGF0aWMgaWRDYXJkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNJZENhcmQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpZENhcmQ6IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDmmK/lkKbkuLrmiYvmnLrlj7cgKi9cbiAgc3RhdGljIG1vYmlsZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzTW9iaWxlKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbW9iaWxlOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICog5piv5ZCm5Li65omL5py65Y+3L+W6p+acui/miJbmnInnibnmrornrKblj7fliIbpmpTnmoTnlLXor53lj7fnoIFcbiAgICogQHBhcmFtIHdoaWNoIOWPt+eggeexu+Wei1xuICAgKi9cbiAgc3RhdGljIHRlbFBob25lKHdoaWNoPzogYW55KSB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICByZXR1cm4gaXNUZWxQaG9uZSh3aGljaCwgY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyB0ZWxQaG9uZTogdHJ1ZSB9O1xuICAgIH07XG4gIH1cblxuICAvKiog5piv5ZCmVVJM5Zyw5Z2AICovXG4gIHN0YXRpYyB1cmwoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc1VybChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IHVybDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpmJhc2U2NOe8lueggSAqL1xuICBzdGF0aWMgYmFzZTY0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNCYXNlNjQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBiYXNlNjQ6IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDmmK/lkKbpk7booYzljaEgKi9cbiAgc3RhdGljIGNyZWRpdENhcmQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc0NyZWRpdENhcmQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBjcmVkaXRDYXJkOiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCmZW1haWwgKi9cbiAgc3RhdGljIGVtYWlsKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNFbWFpbChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGVtYWlsOiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm5YWo562JICovXG4gIHN0YXRpYyBlcXVhbCh2YWw6IGFueSkge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgdjogYW55ID0gY29udHJvbC52YWx1ZTtcbiAgICAgIHJldHVybiB2YWwgPT09IHYgPyBudWxsIDogeyBlcXVhbDogdHJ1ZSB9O1xuICAgIH07XG4gIH1cblxuICAvKiog5piv5ZCm5aSn5LqO5p+Q5Liq5pWwICovXG4gIHN0YXRpYyBndCh2YWw6IG51bWJlcikge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgdjogYW55ID0gY29udHJvbC52YWx1ZTtcbiAgICAgIHJldHVybiArdiA+ICt2YWwgPyBudWxsIDogeyBndDogdHJ1ZSB9O1xuICAgIH07XG4gIH1cblxuICAvKiog5piv5ZCm5aSn5LqO562J5LqO5p+Q5Liq5pWwICovXG4gIHN0YXRpYyBndGUodmFsOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IHY6IGFueSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICByZXR1cm4gK3YgPj0gK3ZhbCA/IG51bGwgOiB7IGd0ZTogdHJ1ZSB9O1xuICAgIH07XG4gIH1cblxuICAvKiog5piv5ZCm5bCP5LqO5p+Q5Liq5pWwICovXG4gIHN0YXRpYyBsdCh2YWw6IG51bWJlcikge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgdjogYW55ID0gY29udHJvbC52YWx1ZTtcbiAgICAgIHJldHVybiArdiA8ICt2YWwgPyBudWxsIDogeyBsdDogdHJ1ZSB9O1xuICAgIH07XG4gIH1cblxuICAvKiog5piv5ZCm5bCP5LqO562J5LqO5p+Q5Liq5pWwICovXG4gIHN0YXRpYyBsdGUodmFsOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IHY6IGFueSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICByZXR1cm4gK3YgPD0gK3ZhbCA/IG51bGwgOiB7IGx0ZTogdHJ1ZSB9O1xuICAgIH07XG4gIH1cblxuICAvKiog5piv5ZCm5Zyo5oyH5a6a5Yy66Ze05YaFICovXG4gIHN0YXRpYyByYW5nZSh2YWw6IEFycmF5PG51bWJlcj4pIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IHY6IGFueSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICByZXR1cm4gK3YgPj0gdmFsWzBdICYmICt2IDw9IHZhbFsxXSA/IG51bGwgOiB7IHJhbmdlOiB0cnVlIH07XG4gICAgfTtcbiAgfVxuXG4gIC8qKiDmmK/lkKZ1dWlkICovXG4gIHN0YXRpYyB1dWlkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNVVUlEKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgdXVpZDogdHJ1ZSB9O1xuICB9XG59XG4iXX0=