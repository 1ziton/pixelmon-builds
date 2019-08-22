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
export class ShortcutPipe {
    /**
     *
     * @param {?} value 源文本
     * @param {?=} maxLength 最大长度，默认20
     * @param {?=} tail 切割后显示的尾部，默认...
     * @return {?}
     */
    transform(value, maxLength = 20, tail = '...') {
        if (value === undefined || value === null) {
            return '';
        }
        /** @type {?} */
        const valueString = String(value);
        if (valueString.length <= maxLength) {
            return valueString;
        }
        return valueString.substr(0, maxLength) + tail;
    }
}
ShortcutPipe.decorators = [
    { type: Pipe, args: [{
                name: 'shortcut',
            },] }
];
export class ShortcutPipeModule {
}
ShortcutPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ShortcutPipe],
                exports: [ShortcutPipe],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy9zaG9ydGN1dC9zaG9ydGN1dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs5RCxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFPdkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxLQUFLO1FBQ25ELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBRUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFakMsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUNuQyxPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUVELE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2pELENBQUM7OztZQXRCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFVBQVU7YUFDakI7O0FBMkJELE1BQU0sT0FBTyxrQkFBa0I7OztZQUo5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5YiH5Ymy5paH5pysXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTA4IDExOjE4OjU5XG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc2hvcnRjdXQnLFxufSlcbmV4cG9ydCBjbGFzcyBTaG9ydGN1dFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSDmupDmlofmnKxcbiAgICogQHBhcmFtIG1heExlbmd0aCDmnIDlpKfplb/luqbvvIzpu5jorqQyMFxuICAgKiBAcGFyYW0gdGFpbCDliIflibLlkI7mmL7npLrnmoTlsL7pg6jvvIzpu5jorqQuLi5cbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBtYXhMZW5ndGggPSAyMCwgdGFpbCA9ICcuLi4nKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gU3RyaW5nKHZhbHVlKTtcblxuICAgIGlmICh2YWx1ZVN0cmluZy5sZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdmFsdWVTdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlU3RyaW5nLnN1YnN0cigwLCBtYXhMZW5ndGgpICsgdGFpbDtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTaG9ydGN1dFBpcGVdLFxuICBleHBvcnRzOiBbU2hvcnRjdXRQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hvcnRjdXRQaXBlTW9kdWxlIHt9XG4iXX0=