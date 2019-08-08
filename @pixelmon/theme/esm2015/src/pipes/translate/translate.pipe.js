/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 主要用于把英文枚举转成中文
 * @Author: zomixi
 * @Date: 2019-05-15 14:39:06
 */
import { Pipe, NgModule } from '@angular/core';
/** @type {?} */
const ENUM_FIELDS = [];
export class TranslatePipe {
    /**
     * @param {?} rawValue
     * @param {?} _lexicon
     * @return {?}
     */
    transform(rawValue, _lexicon) {
        /** @type {?} */
        const lexicon = [..._lexicon, ...ENUM_FIELDS];
        /** @type {?} */
        let newValue = '';
        if (Array.isArray(rawValue)) {
            newValue = rawValue.map((/**
             * @param {?} value
             * @return {?}
             */
            value => translate(value, lexicon)));
            newValue = newValue.join(',');
        }
        else {
            newValue = translate(rawValue, lexicon);
        }
        return newValue;
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
            },] }
];
/**
 * @param {?} rawValue
 * @param {?} lexicon
 * @return {?}
 */
function translate(rawValue, lexicon) {
    if (rawValue === null || rawValue === undefined) {
        return rawValue;
    }
    /** @type {?} */
    let newValue = '';
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < lexicon.length; index++) {
        /** @type {?} */
        const element = lexicon[index];
        if (element.value === rawValue) {
            newValue = element.label;
            return newValue;
        }
    }
    return rawValue;
}
export class TranslatePipeModule {
}
TranslatePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TranslatePipe],
                exports: [TranslatePipe],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvcGlwZXMvdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFDeEQsV0FBVyxHQUFHLEVBQUU7QUFLdEIsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUN4QixTQUFTLENBQUMsUUFBYSxFQUFFLFFBQXlDOztjQUMxRCxPQUFPLEdBQUcsQ0FBQyxHQUFHLFFBQVEsRUFBRSxHQUFHLFdBQVcsQ0FBQzs7WUFFekMsUUFBUSxHQUFRLEVBQUU7UUFFdEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBQyxDQUFDO1lBQzVELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQWpCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFdBQVc7YUFDbEI7Ozs7Ozs7QUFrQkQsU0FBUyxTQUFTLENBQUMsUUFBYSxFQUFFLE9BQXdDO0lBQ3hFLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQy9DLE9BQU8sUUFBUSxDQUFDO0tBQ2pCOztRQUVHLFFBQVEsR0FBRyxFQUFFO0lBRWpCLHlDQUF5QztJQUN6QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7Y0FDN0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM5QixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLFFBQVEsQ0FBQztTQUNqQjtLQUNGO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQU1ELE1BQU0sT0FBTyxtQkFBbUI7OztZQUovQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5Li76KaB55So5LqO5oqK6Iux5paH5p6a5Li+6L2s5oiQ5Lit5paHXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA1LTE1IDE0OjM5OjA2XG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IEVOVU1fRklFTERTID0gW107XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RyYW5zbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHJhd1ZhbHVlOiBhbnksIF9sZXhpY29uOiB7IHZhbHVlOiBhbnk7IGxhYmVsOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3QgbGV4aWNvbiA9IFsuLi5fbGV4aWNvbiwgLi4uRU5VTV9GSUVMRFNdO1xuXG4gICAgbGV0IG5ld1ZhbHVlOiBhbnkgPSAnJztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHJhd1ZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSByYXdWYWx1ZS5tYXAodmFsdWUgPT4gdHJhbnNsYXRlKHZhbHVlLCBsZXhpY29uKSk7XG4gICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLmpvaW4oJywnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWUgPSB0cmFuc2xhdGUocmF3VmFsdWUsIGxleGljb24pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGUocmF3VmFsdWU6IGFueSwgbGV4aWNvbjogeyB2YWx1ZTogYW55OyBsYWJlbDogc3RyaW5nIH1bXSkge1xuICBpZiAocmF3VmFsdWUgPT09IG51bGwgfHwgcmF3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByYXdWYWx1ZTtcbiAgfVxuXG4gIGxldCBuZXdWYWx1ZSA9ICcnO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZXhpY29uLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBsZXhpY29uW2luZGV4XTtcblxuICAgIGlmIChlbGVtZW50LnZhbHVlID09PSByYXdWYWx1ZSkge1xuICAgICAgbmV3VmFsdWUgPSBlbGVtZW50LmxhYmVsO1xuICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVHJhbnNsYXRlUGlwZV0sXG4gIGV4cG9ydHM6IFtUcmFuc2xhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZU1vZHVsZSB7fVxuIl19