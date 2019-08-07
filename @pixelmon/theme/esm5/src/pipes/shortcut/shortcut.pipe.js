/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 切割文本
 * @Author: zomixi
 * @Date: 2019-07-08 11:18:59
 */
import { Pipe, NgModule } from '@angular/core';
var ShortcutPipe = /** @class */ (function () {
    function ShortcutPipe() {
    }
    /**
     *
     * @param value 源文本
     * @param maxLength 最大长度，默认20
     * @param tail 切割后显示的尾部，默认...
     */
    /**
     *
     * @param {?} value 源文本
     * @param {?=} maxLength 最大长度，默认20
     * @param {?=} tail 切割后显示的尾部，默认...
     * @return {?}
     */
    ShortcutPipe.prototype.transform = /**
     *
     * @param {?} value 源文本
     * @param {?=} maxLength 最大长度，默认20
     * @param {?=} tail 切割后显示的尾部，默认...
     * @return {?}
     */
    function (value, maxLength, tail) {
        if (maxLength === void 0) { maxLength = 20; }
        if (tail === void 0) { tail = '...'; }
        if (!value) {
            return '';
        }
        if (value.length <= maxLength) {
            return value;
        }
        return value.substr(0, maxLength) + tail;
    };
    ShortcutPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'shortcut',
                },] }
    ];
    return ShortcutPipe;
}());
export { ShortcutPipe };
var ShortcutPipeModule = /** @class */ (function () {
    function ShortcutPipeModule() {
    }
    ShortcutPipeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ShortcutPipe],
                    exports: [ShortcutPipe],
                },] }
    ];
    return ShortcutPipeModule;
}());
export { ShortcutPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy9zaG9ydGN1dC9zaG9ydGN1dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RDtJQUFBO0lBb0JBLENBQUM7SUFoQkM7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsZ0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxTQUFjLEVBQUUsSUFBWTtRQUE1QiwwQkFBQSxFQUFBLGNBQWM7UUFBRSxxQkFBQSxFQUFBLFlBQVk7UUFDbkQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMzQyxDQUFDOztnQkFuQkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjs7SUFrQkQsbUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWpCWSxZQUFZO0FBbUJ6QjtJQUFBO0lBSWlDLENBQUM7O2dCQUpqQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUNnQyx5QkFBQztDQUFBLEFBSmxDLElBSWtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDliIflibLmlofmnKxcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDctMDggMTE6MTg6NTlcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzaG9ydGN1dCcsXG59KVxuZXhwb3J0IGNsYXNzIFNob3J0Y3V0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIOa6kOaWh+acrFxuICAgKiBAcGFyYW0gbWF4TGVuZ3RoIOacgOWkp+mVv+W6pu+8jOm7mOiupDIwXG4gICAqIEBwYXJhbSB0YWlsIOWIh+WJsuWQjuaYvuekuueahOWwvumDqO+8jOm7mOiupC4uLlxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIG1heExlbmd0aCA9IDIwLCB0YWlsID0gJy4uLicpOiBhbnkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyKDAsIG1heExlbmd0aCkgKyB0YWlsO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Nob3J0Y3V0UGlwZV0sXG4gIGV4cG9ydHM6IFtTaG9ydGN1dFBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTaG9ydGN1dFBpcGVNb2R1bGUge31cbiJdfQ==