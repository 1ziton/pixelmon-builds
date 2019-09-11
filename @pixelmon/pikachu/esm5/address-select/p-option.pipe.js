/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return filterOption(searchValue, o); }));
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
    return defaultAddressLevelOptions.slice(0, level);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsicC1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0lBSzlDLDBCQUEwQixHQUFpQjtJQUMvQztRQUNFLEtBQUssRUFBRSxHQUFHO1FBQ1YsS0FBSyxFQUFFLFVBQVU7UUFDakIsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNEO1FBQ0UsS0FBSyxFQUFFLEdBQUc7UUFDVixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsR0FBRztRQUNWLEtBQUssRUFBRSxXQUFXO0tBQ25CO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxRQUFRO0tBQ2hCO0NBQ0Y7QUFFRDtJQUFBO0lBU0EsQ0FBQzs7Ozs7Ozs7SUFQQyx3Q0FBUzs7Ozs7OztJQUFULFVBQVUsT0FBcUIsRUFBRSxXQUFtQixFQUFFLFlBQTJCLEVBQUUsWUFBcUI7UUFDdEcsSUFBSSxZQUFZLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxtQkFBQSxPQUFPLEVBQWdCLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUE1QixDQUE0QixFQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7O0lBU2xDLDJCQUFDO0NBQUEsQUFURCxJQVNDO1NBUlksb0JBQW9COzs7Ozs7QUFVakMsTUFBTSxVQUFVLHVCQUF1QixDQUFDLFdBQW1CLEVBQUUsTUFBa0I7SUFDN0UsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtRQUMxQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNFO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsOEJBQThCLENBQUMsS0FBUztJQUFULHNCQUFBLEVBQUEsU0FBUztJQUN0RCxPQUFPLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVEO0lBQUE7SUFLQSxDQUFDOzs7OztJQUhDLHVDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFOztJQUtsQywwQkFBQztDQUFBLEFBTEQsSUFLQztTQUpZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZHJPcHRpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCB0eXBlIFRGaWx0ZXJPcHRpb24gPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBBZGRyT3B0aW9uKSA9PiBib29sZWFuO1xuXG5jb25zdCBkZWZhdWx0QWRkcmVzc0xldmVsT3B0aW9uczogQWRkck9wdGlvbltdID0gW1xuICB7XG4gICAgbGFiZWw6ICfnnIEnLFxuICAgIHZhbHVlOiAncHJvdmluY2UnLFxuICAgIGNoZWNrZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ+W4gicsXG4gICAgdmFsdWU6ICdjaXR5JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAn5Yy6JyxcbiAgICB2YWx1ZTogJ2Rpc3RyaW5jdCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ+ihl+mBkycsXG4gICAgdmFsdWU6ICdzdHJlZXQnLFxuICB9LFxuXTtcblxuQFBpcGUoeyBuYW1lOiAnYWRkckZpbHRlck9wdGlvbicgfSlcbmV4cG9ydCBjbGFzcyBBZGRyRmlsdGVyT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ob3B0aW9uczogQWRkck9wdGlvbltdLCBzZWFyY2hWYWx1ZTogc3RyaW5nLCBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sIHNlcnZlclNlYXJjaDogYm9vbGVhbik6IEFkZHJPcHRpb25bXSB7XG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhc2VhcmNoVmFsdWUpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9wdGlvbnMgYXMgQWRkck9wdGlvbltdKS5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRBZGRyRmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlOiBzdHJpbmcsIG9wdGlvbjogQWRkck9wdGlvbik6IGJvb2xlYW4ge1xuICBpZiAob3B0aW9uICYmIG9wdGlvbi5sYWJlbCkge1xuICAgIHJldHVybiBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TGV2ZWxMYWJlbHNGaWx0ZXJPcHRpb24obGV2ZWwgPSAxKTogQWRkck9wdGlvbltdIHtcbiAgcmV0dXJuIGRlZmF1bHRBZGRyZXNzTGV2ZWxPcHRpb25zLnNsaWNlKDAsIGxldmVsKTtcbn1cblxuQFBpcGUoeyBuYW1lOiAncEFkZHJMZXZlbEZpdGxlcicgfSlcbmV4cG9ydCBjbGFzcyBBZGRyTGV2ZWxGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShsZXZlbDogbnVtYmVyKTogYW55W10ge1xuICAgIHJldHVybiBkZWZhdWx0TGV2ZWxMYWJlbHNGaWx0ZXJPcHRpb24obGV2ZWwpO1xuICB9XG59XG4iXX0=