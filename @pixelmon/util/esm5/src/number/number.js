/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * toFixed 解决js精度问题，使用方式：toFixed(value)
 * \@param <Number | String> value
 * \@param <Number> precision 精度，默认2位小数，需要取整则传0
 * 该方法会处理好以下这些问题：
 * 1.12*100=112.00000000000001
 * 1.13*100=112.9999999999999
 * '0.015'.toFixed(2)结果为0.01
 * 1121.1/100 = 11.210999999999999
 * @type {?}
 */
export var toFixed = (/**
 * @param {?} value
 * @param {?=} precision
 * @return {?}
 */
function (value, precision) {
    if (precision === void 0) { precision = 2; }
    /** @type {?} */
    var num = Number(value);
    if (Number.isNaN(num)) {
        return 0;
    }
    if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
        return 0;
    }
    // console.log(num, precision)
    if (precision < 0 || typeof precision !== 'number') {
        return value;
    }
    else if (precision > 0) {
        return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
    }
    return Math.round(num);
});
/**
 * 单位为元数值转为分
 * \@param <Number> value
 * @type {?}
 */
export var toCentNumber = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    /** @type {?} */
    var num = Number(value);
    if (Number.isNaN(num)) {
        return 0;
    }
    return toFixed(num * 100, 0);
});
/**
 * 分数值数值转为元
 * \@param <Number> centval 分为单位
 * \@param <Number> precision 精度，默认2位小数
 * @type {?}
 */
export var toYuanNumber = (/**
 * @param {?} centval
 * @param {?=} precision
 * @return {?}
 */
function (centval, precision) {
    if (precision === void 0) { precision = 2; }
    /** @type {?} */
    var num = Number(centval);
    if (Number.isNaN(num)) {
        return 0;
    }
    return toFixed(num / 100, precision);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbnVtYmVyL251bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLEtBQU8sT0FBTzs7Ozs7QUFBRyxVQUFDLEtBQUssRUFBRSxTQUFhO0lBQWIsMEJBQUEsRUFBQSxhQUFhOztRQUNwQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckIsT0FBTyxDQUFDLENBQUM7S0FDVjtJQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN2RCxPQUFPLENBQUMsQ0FBQztLQUNWO0lBQ0QsOEJBQThCO0lBQzlCLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7UUFDbEQsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDNUU7SUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFBOzs7Ozs7QUFNRCxNQUFNLEtBQU8sWUFBWTs7OztBQUFHLFVBQUEsS0FBSzs7UUFDekIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDekIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQTs7Ozs7OztBQU9ELE1BQU0sS0FBTyxZQUFZOzs7OztBQUFHLFVBQUMsT0FBTyxFQUFFLFNBQWE7SUFBYiwwQkFBQSxFQUFBLGFBQWE7O1FBQzNDLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzNCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUMsQ0FBQztLQUNWO0lBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHRvRml4ZWQg6Kej5YazanPnsr7luqbpl67popjvvIzkvb/nlKjmlrnlvI/vvJp0b0ZpeGVkKHZhbHVlKVxuICogQHBhcmFtIDxOdW1iZXIgfCBTdHJpbmc+IHZhbHVlXG4gKiBAcGFyYW0gPE51bWJlcj4gcHJlY2lzaW9uIOeyvuW6pu+8jOm7mOiupDLkvY3lsI/mlbDvvIzpnIDopoHlj5bmlbTliJnkvKAwXG4gKiDor6Xmlrnms5XkvJrlpITnkIblpb3ku6XkuIvov5nkupvpl67popjvvJpcbiAqIDEuMTIqMTAwPTExMi4wMDAwMDAwMDAwMDAwMVxuICogMS4xMyoxMDA9MTEyLjk5OTk5OTk5OTk5OTlcbiAqICcwLjAxNScudG9GaXhlZCgyKee7k+aenOS4ujAuMDFcbiAqIDExMjEuMS8xMDAgPSAxMS4yMTA5OTk5OTk5OTk5OTlcbiAqL1xuZXhwb3J0IGNvbnN0IHRvRml4ZWQgPSAodmFsdWUsIHByZWNpc2lvbiA9IDIpID0+IHtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHZhbHVlKTtcbiAgaWYgKE51bWJlci5pc05hTihudW0pKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKG51bSA8IE1hdGgucG93KC0yLCAzMSkgfHwgbnVtID4gTWF0aC5wb3coMiwgMzEpIC0gMSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKG51bSwgcHJlY2lzaW9uKVxuICBpZiAocHJlY2lzaW9uIDwgMCB8fCB0eXBlb2YgcHJlY2lzaW9uICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSBlbHNlIGlmIChwcmVjaXNpb24gPiAwKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogTWF0aC5wb3coMTAsIHByZWNpc2lvbikpIC8gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIH1cbiAgcmV0dXJuIE1hdGgucm91bmQobnVtKTtcbn07XG5cbi8qKlxuICog5Y2V5L2N5Li65YWD5pWw5YC86L2s5Li65YiGXG4gKiBAcGFyYW0gPE51bWJlcj4gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IHRvQ2VudE51bWJlciA9IHZhbHVlID0+IHtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHZhbHVlKTtcbiAgaWYgKE51bWJlci5pc05hTihudW0pKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIHRvRml4ZWQobnVtICogMTAwLCAwKTtcbn07XG5cbi8qKlxuICog5YiG5pWw5YC85pWw5YC86L2s5Li65YWDXG4gKiBAcGFyYW0gPE51bWJlcj4gY2VudHZhbCDliIbkuLrljZXkvY1cbiAqIEBwYXJhbSA8TnVtYmVyPiBwcmVjaXNpb24g57K+5bqm77yM6buY6K6kMuS9jeWwj+aVsFxuICovXG5leHBvcnQgY29uc3QgdG9ZdWFuTnVtYmVyID0gKGNlbnR2YWwsIHByZWNpc2lvbiA9IDIpID0+IHtcbiAgY29uc3QgbnVtID0gTnVtYmVyKGNlbnR2YWwpO1xuICBpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gdG9GaXhlZChudW0gLyAxMDAsIHByZWNpc2lvbik7XG59O1xuIl19