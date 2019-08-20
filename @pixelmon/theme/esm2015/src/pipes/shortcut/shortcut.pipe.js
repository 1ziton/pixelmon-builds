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
        if (!value) {
            return '';
        }
        if (value.length <= maxLength) {
            return value;
        }
        return String(value).substr(0, maxLength) + tail;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy9zaG9ydGN1dC9zaG9ydGN1dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs5RCxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFPdkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxLQUFLO1FBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbkQsQ0FBQzs7O1lBbkJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsVUFBVTthQUNqQjs7QUF3QkQsTUFBTSxPQUFPLGtCQUFrQjs7O1lBSjlCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDliIflibLmlofmnKxcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDctMDggMTE6MTg6NTlcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzaG9ydGN1dCcsXG59KVxuZXhwb3J0IGNsYXNzIFNob3J0Y3V0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIOa6kOaWh+acrFxuICAgKiBAcGFyYW0gbWF4TGVuZ3RoIOacgOWkp+mVv+W6pu+8jOm7mOiupDIwXG4gICAqIEBwYXJhbSB0YWlsIOWIh+WJsuWQjuaYvuekuueahOWwvumDqO+8jOm7mOiupC4uLlxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIG1heExlbmd0aCA9IDIwLCB0YWlsID0gJy4uLicpOiBhbnkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKS5zdWJzdHIoMCwgbWF4TGVuZ3RoKSArIHRhaWw7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2hvcnRjdXRQaXBlXSxcbiAgZXhwb3J0czogW1Nob3J0Y3V0UGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNob3J0Y3V0UGlwZU1vZHVsZSB7fVxuIl19