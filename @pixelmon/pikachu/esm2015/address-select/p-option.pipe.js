/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/** @type {?} */
const defaultAddressLevelOptions = [
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
export class AddrFilterOptionPipe {
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            /** @type {?} */
            const result = ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            o => filterOption(searchValue, o)));
            console.log(result);
            return result;
        }
    }
}
AddrFilterOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'addrFilterOption' },] }
];
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
export function defaultLevelLabelsFilterOption(level = 1) {
    /** @type {?} */
    const cloneArr = defaultAddressLevelOptions.map((/**
     * @param {?} o
     * @return {?}
     */
    o => (Object.assign({}, o))));
    return cloneArr.slice(0, level);
}
export class AddrLevelFilterPipe {
    /**
     * @param {?} level
     * @return {?}
     */
    transform(level) {
        return defaultLevelLabelsFilterOption(level);
    }
}
AddrLevelFilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'pAddrLevelFitler' },] }
];
export class AddrCheckedFilterPipe {
    /**
     * @param {?} activedOption
     * @param {?} index
     * @param {?} option
     * @return {?}
     */
    transform(activedOption, index, option) {
        if (activedOption && activedOption.length > 0) {
            if (!activedOption[index])
                return false;
            return activedOption[index].value === option.value && !option.disabled;
        }
        return false;
    }
}
AddrCheckedFilterPipe.decorators = [
    { type: Pipe, args: [{ name: 'pAddrCheckedFitler' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicC1vcHRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L2FkZHJlc3Mtc2VsZWN0LyIsInNvdXJjZXMiOlsicC1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O01BSzlDLDBCQUEwQixHQUFpQjtJQUMvQztRQUNFLEtBQUssRUFBRSxHQUFHO1FBQ1YsS0FBSyxFQUFFLFVBQVU7UUFDakIsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNEO1FBQ0UsS0FBSyxFQUFFLEdBQUc7UUFDVixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsR0FBRztRQUNWLEtBQUssRUFBRSxXQUFXO0tBQ25CO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxRQUFRO0tBQ2hCO0NBQ0Y7QUFHRCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7OztJQUMvQixTQUFTLENBQUMsT0FBcUIsRUFBRSxXQUFtQixFQUFFLFlBQTJCLEVBQUUsWUFBcUI7UUFDdEcsSUFBSSxZQUFZLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTs7a0JBQ0MsTUFBTSxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUFnQixDQUFDLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBQztZQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7Ozs7Ozs7QUFhbEMsTUFBTSxVQUFVLHVCQUF1QixDQUFDLFdBQW1CLEVBQUUsTUFBa0I7SUFDN0UsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtRQUMxQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNFO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsOEJBQThCLENBQUMsS0FBSyxHQUFHLENBQUM7O1VBQ2hELFFBQVEsR0FBRywwQkFBMEIsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBTSxDQUFDLEVBQUcsRUFBQztJQUNoRSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFHRCxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUM5QixTQUFTLENBQUMsS0FBYTtRQUNyQixPQUFPLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTs7QUFRbEMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQUNoQyxTQUFTLENBQUMsYUFBMkIsRUFBRSxLQUFhLEVBQUUsTUFBa0I7UUFDdEUsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDeEMsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyT3B0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgdHlwZSBURmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogQWRkck9wdGlvbikgPT4gYm9vbGVhbjtcblxuY29uc3QgZGVmYXVsdEFkZHJlc3NMZXZlbE9wdGlvbnM6IEFkZHJPcHRpb25bXSA9IFtcbiAge1xuICAgIGxhYmVsOiAn55yBJyxcbiAgICB2YWx1ZTogJ3Byb3ZpbmNlJyxcbiAgICBjaGVja2VkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICfluIInLFxuICAgIHZhbHVlOiAnY2l0eScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ+WMuicsXG4gICAgdmFsdWU6ICdkaXN0cmluY3QnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICfooZfpgZMnLFxuICAgIHZhbHVlOiAnc3RyZWV0JyxcbiAgfSxcbl07XG5cbkBQaXBlKHsgbmFtZTogJ2FkZHJGaWx0ZXJPcHRpb24nIH0pXG5leHBvcnQgY2xhc3MgQWRkckZpbHRlck9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9wdGlvbnM6IEFkZHJPcHRpb25bXSwgc2VhcmNoVmFsdWU6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBBZGRyT3B0aW9uW10ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIXNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0ID0gKG9wdGlvbnMgYXMgQWRkck9wdGlvbltdKS5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEFkZHJGaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWU6IHN0cmluZywgb3B0aW9uOiBBZGRyT3B0aW9uKTogYm9vbGVhbiB7XG4gIGlmIChvcHRpb24gJiYgb3B0aW9uLmxhYmVsKSB7XG4gICAgcmV0dXJuIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRMZXZlbExhYmVsc0ZpbHRlck9wdGlvbihsZXZlbCA9IDEpOiBBZGRyT3B0aW9uW10ge1xuICBjb25zdCBjbG9uZUFyciA9IGRlZmF1bHRBZGRyZXNzTGV2ZWxPcHRpb25zLm1hcChvID0+ICh7IC4uLm8gfSkpO1xuICByZXR1cm4gY2xvbmVBcnIuc2xpY2UoMCwgbGV2ZWwpO1xufVxuXG5AUGlwZSh7IG5hbWU6ICdwQWRkckxldmVsRml0bGVyJyB9KVxuZXhwb3J0IGNsYXNzIEFkZHJMZXZlbEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGxldmVsOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgcmV0dXJuIGRlZmF1bHRMZXZlbExhYmVsc0ZpbHRlck9wdGlvbihsZXZlbCk7XG4gIH1cbn1cblxuQFBpcGUoeyBuYW1lOiAncEFkZHJDaGVja2VkRml0bGVyJyB9KVxuZXhwb3J0IGNsYXNzIEFkZHJDaGVja2VkRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oYWN0aXZlZE9wdGlvbjogQWRkck9wdGlvbltdLCBpbmRleDogbnVtYmVyLCBvcHRpb246IEFkZHJPcHRpb24pOiBib29sZWFuIHtcbiAgICBpZiAoYWN0aXZlZE9wdGlvbiAmJiBhY3RpdmVkT3B0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICghYWN0aXZlZE9wdGlvbltpbmRleF0pIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBhY3RpdmVkT3B0aW9uW2luZGV4XS52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlICYmICFvcHRpb24uZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19