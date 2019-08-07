/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @Description: 主要用于把英文枚举转成中文
 * @Author: zomixi
 * @Date: 2019-05-15 14:39:06
 */
import { Pipe, NgModule } from '@angular/core';
/** @type {?} */
var ENUM_FIELDS = [];
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe() {
    }
    /**
     * @param {?} rawValue
     * @param {?} _lexicon
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} rawValue
     * @param {?} _lexicon
     * @return {?}
     */
    function (rawValue, _lexicon) {
        /** @type {?} */
        var lexicon = tslib_1.__spread(_lexicon, ENUM_FIELDS);
        /** @type {?} */
        var newValue = '';
        if (Array.isArray(rawValue)) {
            newValue = rawValue.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return translate(value, lexicon); }));
            newValue = newValue.join(',');
        }
        else {
            newValue = translate(rawValue, lexicon);
        }
        return newValue;
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate',
                },] }
    ];
    return TranslatePipe;
}());
export { TranslatePipe };
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
    var newValue = '';
    // tslint:disable-next-line:prefer-for-of
    for (var index = 0; index < lexicon.length; index++) {
        /** @type {?} */
        var element = lexicon[index];
        if (element.value === rawValue) {
            newValue = element.label;
            return newValue;
        }
    }
    return rawValue;
}
var TranslatePipeModule = /** @class */ (function () {
    function TranslatePipeModule() {
    }
    TranslatePipeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TranslatePipe],
                    exports: [TranslatePipe],
                },] }
    ];
    return TranslatePipeModule;
}());
export { TranslatePipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvcGlwZXMvdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBQ3hELFdBQVcsR0FBRyxFQUFFO0FBRXRCO0lBQUE7SUFrQkEsQ0FBQzs7Ozs7O0lBZEMsaUNBQVM7Ozs7O0lBQVQsVUFBVSxRQUFhLEVBQUUsUUFBeUM7O1lBQzFELE9BQU8sb0JBQU8sUUFBUSxFQUFLLFdBQVcsQ0FBQzs7WUFFekMsUUFBUSxHQUFRLEVBQUU7UUFFdEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO1lBQzVELFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQWpCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFdBQVc7aUJBQ2xCOztJQWdCRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO1NBZlksYUFBYTs7Ozs7O0FBaUIxQixTQUFTLFNBQVMsQ0FBQyxRQUFhLEVBQUUsT0FBd0M7SUFDeEUsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7UUFDL0MsT0FBTyxRQUFRLENBQUM7S0FDakI7O1FBRUcsUUFBUSxHQUFHLEVBQUU7SUFFakIseUNBQXlDO0lBQ3pDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztZQUM3QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU5QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO0tBQ0Y7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQ7SUFBQTtJQUlrQyxDQUFDOztnQkFKbEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUN6Qjs7SUFDaUMsMEJBQUM7Q0FBQSxBQUpuQyxJQUltQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5Li76KaB55So5LqO5oqK6Iux5paH5p6a5Li+6L2s5oiQ5Lit5paHXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA1LTE1IDE0OjM5OjA2XG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IEVOVU1fRklFTERTID0gW107XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RyYW5zbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHJhd1ZhbHVlOiBhbnksIF9sZXhpY29uOiB7IHZhbHVlOiBhbnk7IGxhYmVsOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3QgbGV4aWNvbiA9IFsuLi5fbGV4aWNvbiwgLi4uRU5VTV9GSUVMRFNdO1xuXG4gICAgbGV0IG5ld1ZhbHVlOiBhbnkgPSAnJztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHJhd1ZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSByYXdWYWx1ZS5tYXAodmFsdWUgPT4gdHJhbnNsYXRlKHZhbHVlLCBsZXhpY29uKSk7XG4gICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLmpvaW4oJywnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWUgPSB0cmFuc2xhdGUocmF3VmFsdWUsIGxleGljb24pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGUocmF3VmFsdWU6IGFueSwgbGV4aWNvbjogeyB2YWx1ZTogYW55OyBsYWJlbDogc3RyaW5nIH1bXSkge1xuICBpZiAocmF3VmFsdWUgPT09IG51bGwgfHwgcmF3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByYXdWYWx1ZTtcbiAgfVxuXG4gIGxldCBuZXdWYWx1ZSA9ICcnO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZXhpY29uLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBsZXhpY29uW2luZGV4XTtcblxuICAgIGlmIChlbGVtZW50LnZhbHVlID09PSByYXdWYWx1ZSkge1xuICAgICAgbmV3VmFsdWUgPSBlbGVtZW50LmxhYmVsO1xuICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVHJhbnNsYXRlUGlwZV0sXG4gIGV4cG9ydHM6IFtUcmFuc2xhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZU1vZHVsZSB7fVxuIl19