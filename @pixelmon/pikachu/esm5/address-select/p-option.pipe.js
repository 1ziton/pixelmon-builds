/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
/** @type {?} */
var defaultAddressLevelOptions = [
    {
        label: '省',
        value: 'province',
        checked: true,
    },
    {
        label: '市',
        value: 'city',
    },
    {
        label: '区',
        value: 'distrinct',
    },
    {
        label: '街道',
        value: 'street',
    },
];
var AddrFilterOptionPipe = /** @class */ (function () {
    function AddrFilterOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    AddrFilterOptionPipe.prototype.transform = /**
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
            /** @type {?} */
            var result = ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return filterOption(searchValue, o); }));
            console.log(result);
            return result;
        }
    };
    AddrFilterOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'addrFilterOption' },] }
    ];
    return AddrFilterOptionPipe;
}());
export { AddrFilterOptionPipe };
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
export function defaultAddrFilterOption(searchValue, option) {
    if (option && option.label) {
        return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
/**
 * @param {?=} level
 * @return {?}
 */
export function defaultLevelLabelsFilterOption(level) {
    if (level === void 0) { level = 1; }
    /** @type {?} */
    var cloneArr = defaultAddressLevelOptions.map((/**
     * @param {?} o
     * @return {?}
     */
    function (o) { return (tslib_1.__assign({}, o)); }));
    return cloneArr.slice(0, level);
}
var AddrLevelFilterPipe = /** @class */ (function () {
    function AddrLevelFilterPipe() {
    }
    /**
     * @param {?} level
     * @return {?}
     */
    AddrLevelFilterPipe.prototype.transform = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        return defaultLevelLabelsFilterOption(level);
    };
    AddrLevelFilterPipe.decorators = [
        { type: Pipe, args: [{ name: 'pAddrLevelFitler' },] }
    ];
    return AddrLevelFilterPipe;
}());
export { AddrLevelFilterPipe };
var AddrCheckedFilterPipe = /** @class */ (function () {
    function AddrCheckedFilterPipe() {
    }
    /**
     * @param {?} activedOption
     * @param {?} index
     * @param {?} option
     * @return {?}
     */
    AddrCheckedFilterPipe.prototype.transform = /**
     * @param {?} activedOption
     * @param {?} index
     * @param {?} option
     * @return {?}
     */
    function (activedOption, index, option) {
        if (activedOption && activedOption.length > 0) {
            if (!activedOption[index])
                return false;
            return activedOption[index].value === option.value && !option.disabled;
        }
        return false;
    };
    AddrCheckedFilterPipe.decorators = [
        { type: Pipe, args: [{ name: 'pAddrCheckedFitler' },] }
    ];
    return AddrCheckedFilterPipe;
}());
export { AddrCheckedFilterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsicC1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztJQUs5QywwQkFBMEIsR0FBaUI7SUFDL0M7UUFDRSxLQUFLLEVBQUUsR0FBRztRQUNWLEtBQUssRUFBRSxVQUFVO1FBQ2pCLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRDtRQUNFLEtBQUssRUFBRSxHQUFHO1FBQ1YsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNEO1FBQ0UsS0FBSyxFQUFFLEdBQUc7UUFDVixLQUFLLEVBQUUsV0FBVztLQUNuQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLElBQUk7UUFDWCxLQUFLLEVBQUUsUUFBUTtLQUNoQjtDQUNGO0FBRUQ7SUFBQTtJQVdBLENBQUM7Ozs7Ozs7O0lBVEMsd0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLE9BQXFCLEVBQUUsV0FBbUIsRUFBRSxZQUEyQixFQUFFLFlBQXFCO1FBQ3RHLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07O2dCQUNDLE1BQU0sR0FBRyxDQUFDLG1CQUFBLE9BQU8sRUFBZ0IsQ0FBQyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQUM7WUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFOztJQVdsQywyQkFBQztDQUFBLEFBWEQsSUFXQztTQVZZLG9CQUFvQjs7Ozs7O0FBWWpDLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxXQUFtQixFQUFFLE1BQWtCO0lBQzdFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDMUIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMzRTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDhCQUE4QixDQUFDLEtBQVM7SUFBVCxzQkFBQSxFQUFBLFNBQVM7O1FBQ2hELFFBQVEsR0FBRywwQkFBMEIsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxzQkFBTSxDQUFDLEVBQUcsRUFBVixDQUFVLEVBQUM7SUFDaEUsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQ7SUFBQTtJQUtBLENBQUM7Ozs7O0lBSEMsdUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7O0lBS2xDLDBCQUFDO0NBQUEsQUFMRCxJQUtDO1NBSlksbUJBQW1CO0FBTWhDO0lBQUE7SUFTQSxDQUFDOzs7Ozs7O0lBUEMseUNBQVM7Ozs7OztJQUFULFVBQVUsYUFBMkIsRUFBRSxLQUFhLEVBQUUsTUFBa0I7UUFDdEUsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDeEMsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O0lBU3BDLDRCQUFDO0NBQUEsQUFURCxJQVNDO1NBUlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkck9wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IEFkZHJPcHRpb24pID0+IGJvb2xlYW47XG5cbmNvbnN0IGRlZmF1bHRBZGRyZXNzTGV2ZWxPcHRpb25zOiBBZGRyT3B0aW9uW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ+ecgScsXG4gICAgdmFsdWU6ICdwcm92aW5jZScsXG4gICAgY2hlY2tlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAn5biCJyxcbiAgICB2YWx1ZTogJ2NpdHknLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICfljLonLFxuICAgIHZhbHVlOiAnZGlzdHJpbmN0JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAn6KGX6YGTJyxcbiAgICB2YWx1ZTogJ3N0cmVldCcsXG4gIH0sXG5dO1xuXG5AUGlwZSh7IG5hbWU6ICdhZGRyRmlsdGVyT3B0aW9uJyB9KVxuZXhwb3J0IGNsYXNzIEFkZHJGaWx0ZXJPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShvcHRpb25zOiBBZGRyT3B0aW9uW10sIHNlYXJjaFZhbHVlOiBzdHJpbmcsIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiwgc2VydmVyU2VhcmNoOiBib29sZWFuKTogQWRkck9wdGlvbltdIHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IChvcHRpb25zIGFzIEFkZHJPcHRpb25bXSkuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRBZGRyRmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlOiBzdHJpbmcsIG9wdGlvbjogQWRkck9wdGlvbik6IGJvb2xlYW4ge1xuICBpZiAob3B0aW9uICYmIG9wdGlvbi5sYWJlbCkge1xuICAgIHJldHVybiBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TGV2ZWxMYWJlbHNGaWx0ZXJPcHRpb24obGV2ZWwgPSAxKTogQWRkck9wdGlvbltdIHtcbiAgY29uc3QgY2xvbmVBcnIgPSBkZWZhdWx0QWRkcmVzc0xldmVsT3B0aW9ucy5tYXAobyA9PiAoeyAuLi5vIH0pKTtcbiAgcmV0dXJuIGNsb25lQXJyLnNsaWNlKDAsIGxldmVsKTtcbn1cblxuQFBpcGUoeyBuYW1lOiAncEFkZHJMZXZlbEZpdGxlcicgfSlcbmV4cG9ydCBjbGFzcyBBZGRyTGV2ZWxGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShsZXZlbDogbnVtYmVyKTogYW55W10ge1xuICAgIHJldHVybiBkZWZhdWx0TGV2ZWxMYWJlbHNGaWx0ZXJPcHRpb24obGV2ZWwpO1xuICB9XG59XG5cbkBQaXBlKHsgbmFtZTogJ3BBZGRyQ2hlY2tlZEZpdGxlcicgfSlcbmV4cG9ydCBjbGFzcyBBZGRyQ2hlY2tlZEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGFjdGl2ZWRPcHRpb246IEFkZHJPcHRpb25bXSwgaW5kZXg6IG51bWJlciwgb3B0aW9uOiBBZGRyT3B0aW9uKTogYm9vbGVhbiB7XG4gICAgaWYgKGFjdGl2ZWRPcHRpb24gJiYgYWN0aXZlZE9wdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoIWFjdGl2ZWRPcHRpb25baW5kZXhdKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gYWN0aXZlZE9wdGlvbltpbmRleF0udmFsdWUgPT09IG9wdGlvbi52YWx1ZSAmJiAhb3B0aW9uLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==