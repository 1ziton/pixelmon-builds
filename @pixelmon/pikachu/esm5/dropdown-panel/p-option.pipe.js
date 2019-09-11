/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var PanelFilterOptionPipe = /** @class */ (function () {
    function PanelFilterOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    PanelFilterOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return filterOption(searchValue, o); }));
        }
    };
    PanelFilterOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'pFilterOption' },] }
    ];
    return PanelFilterOptionPipe;
}());
export { PanelFilterOptionPipe };
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(searchValue, option) {
    if (option && option.label) {
        return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2Ryb3Bkb3duLXBhbmVsLyIsInNvdXJjZXMiOlsicC1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQ7SUFBQTtJQWNBLENBQUM7Ozs7Ozs7O0lBWkMseUNBQVM7Ozs7Ozs7SUFBVCxVQUNFLE9BQWtCLEVBQ2xCLFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUFhLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUE1QixDQUE0QixFQUFDLENBQUM7U0FDekU7SUFDSCxDQUFDOztnQkFiRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFOztJQWMvQiw0QkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLHFCQUFxQjs7Ozs7O0FBZWxDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLE1BQWU7SUFDdEUsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtRQUMxQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNFO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUE9wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFBPcHRpb24pID0+IGJvb2xlYW47XG5cbkBQaXBlKHsgbmFtZTogJ3BGaWx0ZXJPcHRpb24nIH0pXG5leHBvcnQgY2xhc3MgUGFuZWxGaWx0ZXJPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICBvcHRpb25zOiBQT3B0aW9uW10sXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXG4gICk6IFBPcHRpb25bXSB7XG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhc2VhcmNoVmFsdWUpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9wdGlvbnMgYXMgUE9wdGlvbltdKS5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWU6IHN0cmluZywgb3B0aW9uOiBQT3B0aW9uKTogYm9vbGVhbiB7XG4gIGlmIChvcHRpb24gJiYgb3B0aW9uLmxhYmVsKSB7XG4gICAgcmV0dXJuIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==