/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 是否为数字
 * @param {?} value
 * @return {?}
 */
export function isNum(value) {
    return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}
/**
 * 是否为整数
 * @param {?} value
 * @return {?}
 */
export function isInt(value) {
    // tslint:disable-next-line:triple-equals
    return isNum(value) && parseInt(value.toString(), 10) == value;
}
/**
 * 是否为小数
 * @param {?} value
 * @return {?}
 */
export function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/**
 * 是否为身份证
 * @param {?} value
 * @return {?}
 */
export function isIdCard(value) {
    return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
}
/**
 * 是否为手机号
 * @param {?} value
 * @return {?}
 */
export function isMobile(value) {
    return typeof value === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
}
/**
 * 是否为手机号/座机/或有特殊符号分隔的电话号码
 * @param {?=} which
 * @param {?=} value
 * @return {?}
 */
export function isTelPhone(which, value) {
    if (which === void 0) { which = 'phone'; }
    /** @type {?} */
    var _regex = {
        phone: /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/,
        tel: /^[0]\d{2,3}-\d{7,8}$/,
        // 标准座机没分号
        multFormat: /^\d[\s+-\/,，0-9]{0,34}$/,
    };
    return _regex[which].test(value);
}
/**
 * 是否URL地址
 * @param {?} url
 * @return {?}
 */
export function isUrl(url) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(url);
}
/**
 * 是否base64编码
 * @param {?} value
 * @return {?}
 */
export function isBase64(value) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i.test(value);
}
/**
 * 是否银行卡格式
 * @param {?} value
 * @return {?}
 */
export function isCreditCard(value) {
    /** @type {?} */
    var sanitized = value.replace(/[^0-9]+/g, '');
    return /^(?:[1-9]{1})(?:\d{15}|\d{18})$/.test(sanitized);
}
/**
 * 是否email
 * @param {?} value
 * @return {?}
 */
export function isEmail(value) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
}
/**
 * 是否uuid
 * @param {?} value
 * @return {?}
 */
export function isUUID(value) {
    return /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i.test(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0ZS92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLE9BQU8sb0NBQW9DLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBc0I7SUFDMUMseUNBQXlDO0lBQ3pDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDO0FBQ2pFLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBc0I7SUFDOUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRixDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUkscUVBQXFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hILENBQUM7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQWUsRUFBRSxLQUFhO0lBQTlCLHNCQUFBLEVBQUEsZUFBZTs7UUFDbEMsTUFBTSxHQUFHO1FBQ2IsS0FBSyxFQUFFLHFFQUFxRTtRQUM1RSxHQUFHLEVBQUUsc0JBQXNCOztRQUMzQixVQUFVLEVBQUUseUJBQXlCO0tBQ3RDO0lBQ0QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxLQUFLLENBQUMsR0FBVztJQUMvQixPQUFPLHVLQUF1SyxDQUFDLElBQUksQ0FDakwsR0FBRyxDQUNKLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyw0R0FBNEcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEksQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFhOztRQUNsQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO0lBQy9DLE9BQU8saUNBQWlDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYTtJQUNuQyxPQUFPLDZDQUE2QyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRSxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWE7SUFDbEMsT0FBTyxpRUFBaUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDmmK/lkKbkuLrmlbDlrZcgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXigoLT9cXGQrXFwuXFxkKyl8KC0/XFxkKyl8KC0/XFwuXFxkKykpJC8udGVzdCh2YWx1ZS50b1N0cmluZygpKTtcbn1cblxuLyoqIOaYr+WQpuS4uuaVtOaVsCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkgPT0gdmFsdWU7XG59XG5cbi8qKiDmmK/lkKbkuLrlsI/mlbAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RlY2ltYWwodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNOdW0odmFsdWUpICYmICFpc0ludCh2YWx1ZSk7XG59XG5cbi8qKiDmmK/lkKbkuLrouqvku73or4EgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lkQ2FyZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS9pLnRlc3QodmFsdWUpO1xufVxuXG4vKiog5piv5ZCm5Li65omL5py65Y+3ICovXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvXigwfFxcKz84NnwxNzk1MSk/KDEzWzAtOV18MTVbMC05XXwxN1swNjc4XXwxOFswLTldfDE0WzU3XSlbMC05XXs4fSQvLnRlc3QodmFsdWUpO1xufVxuXG4vKiog5piv5ZCm5Li65omL5py65Y+3L+W6p+acui/miJbmnInnibnmrornrKblj7fliIbpmpTnmoTnlLXor53lj7fnoIEgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RlbFBob25lKHdoaWNoID0gJ3Bob25lJywgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBfcmVnZXggPSB7XG4gICAgcGhvbmU6IC9eKDB8XFwrPzg2fDE3OTUxKT8oMTNbMC05XXwxNVswLTldfDE3WzA2NzhdfDE4WzAtOV18MTRbNTddKVswLTldezh9JC8sXG4gICAgdGVsOiAvXlswXVxcZHsyLDN9LVxcZHs3LDh9JC8sIC8vIOagh+WHhuW6p+acuuayoeWIhuWPt1xuICAgIG11bHRGb3JtYXQ6IC9eXFxkW1xccystXFwvLO+8jDAtOV17MCwzNH0kLywgLy8g5Lu75oSP5pWw5a2X5Yqg54m55q6K56ym5Y+3XG4gIH07XG4gIHJldHVybiBfcmVnZXhbd2hpY2hdLnRlc3QodmFsdWUpO1xufVxuXG4vKiog5piv5ZCmVVJM5Zyw5Z2AICovXG5leHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIC8oKCheaHR0cHM/Oig/OlxcL1xcLyk/KSg/OlstOzomPVxcK1xcJCxcXHddK0ApP1tBLVphLXowLTkuLV0rKD86OlxcZCspP3woPzp3d3cufFstOzomPVxcK1xcJCxcXHddK0ApW0EtWmEtejAtOS4tXSspKCg/OlxcL1tcXCt+JVxcLy5cXHctX10qKT9cXD8/KD86Wy1cXCs9JjslQC5cXHdfXSopIz8oPzpbXFx3XSopKT8pJC8udGVzdChcbiAgICB1cmwsXG4gICk7XG59XG5cbi8qKiDmmK/lkKZiYXNlNjTnvJbnoIEgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jhc2U2NCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXlxccypkYXRhOihbYS16XStcXC9bYS16MC05LSsuXSsoO1thLXotXSs9W2EtejAtOS1dKyk/KT8oO2Jhc2U2NCk/LChbYS16MC05ISQmJywoKSorOz1cXC0uX346QFxcLz8lXFxzXSo/KVxccyokL2kudGVzdCh2YWx1ZSk7XG59XG5cbi8qKiDmmK/lkKbpk7booYzljaHmoLzlvI8gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NyZWRpdENhcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBzYW5pdGl6ZWQgPSB2YWx1ZS5yZXBsYWNlKC9bXjAtOV0rL2csICcnKTtcbiAgcmV0dXJuIC9eKD86WzEtOV17MX0pKD86XFxkezE1fXxcXGR7MTh9KSQvLnRlc3Qoc2FuaXRpemVkKTtcbn1cblxuLyoqIOaYr+WQpmVtYWlsICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXFx3KyhbLSsuXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSovLnRlc3QodmFsdWUpO1xufVxuXG4vKiog5piv5ZCmdXVpZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVVVJRCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXlswLTlhLXpdezh9LVswLTlhLXpdezR9LVswLTlhLXpdezR9LVswLTlhLXpdezR9LVswLTlhLXpdezEyfSQvaS50ZXN0KHZhbHVlKTtcbn1cbiJdfQ==