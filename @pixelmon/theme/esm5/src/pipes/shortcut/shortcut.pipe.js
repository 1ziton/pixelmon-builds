/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (value === undefined || value === null) {
            return '';
        }
        /** @type {?} */
        var valueString = String(value);
        if (valueString.length <= maxLength) {
            return valueString;
        }
        return valueString.substr(0, maxLength) + tail;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy9zaG9ydGN1dC9zaG9ydGN1dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RDtJQUFBO0lBdUJBLENBQUM7SUFuQkM7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsZ0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxTQUFjLEVBQUUsSUFBWTtRQUE1QiwwQkFBQSxFQUFBLGNBQWM7UUFBRSxxQkFBQSxFQUFBLFlBQVk7UUFDbkQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFFSyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQ25DLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDakQsQ0FBQzs7Z0JBdEJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakI7O0lBcUJELG1CQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FwQlksWUFBWTtBQXNCekI7SUFBQTtJQUlpQyxDQUFDOztnQkFKakMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFDZ0MseUJBQUM7Q0FBQSxBQUpsQyxJQUlrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5YiH5Ymy5paH5pysXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA4IDExOjE4OjU5XG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc2hvcnRjdXQnLFxufSlcbmV4cG9ydCBjbGFzcyBTaG9ydGN1dFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSDmupDmlofmnKxcbiAgICogQHBhcmFtIG1heExlbmd0aCDmnIDlpKfplb/luqbvvIzpu5jorqQyMFxuICAgKiBAcGFyYW0gdGFpbCDliIflibLlkI7mmL7npLrnmoTlsL7pg6jvvIzpu5jorqQuLi5cbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBtYXhMZW5ndGggPSAyMCwgdGFpbCA9ICcuLi4nKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gU3RyaW5nKHZhbHVlKTtcblxuICAgIGlmICh2YWx1ZVN0cmluZy5sZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdmFsdWVTdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlU3RyaW5nLnN1YnN0cigwLCBtYXhMZW5ndGgpICsgdGFpbDtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTaG9ydGN1dFBpcGVdLFxuICBleHBvcnRzOiBbU2hvcnRjdXRQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hvcnRjdXRQaXBlTW9kdWxlIHt9XG4iXX0=