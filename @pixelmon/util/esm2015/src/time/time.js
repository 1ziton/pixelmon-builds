/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import addDays from 'date-fns/add_days';
import endOfDay from 'date-fns/end_of_day';
import endOfMonth from 'date-fns/end_of_month';
import endOfWeek from 'date-fns/end_of_week';
import endOfYear from 'date-fns/end_of_year';
import parse from 'date-fns/parse';
import startOfDay from 'date-fns/start_of_day';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import subMonths from 'date-fns/sub_months';
import subWeeks from 'date-fns/sub_weeks';
import subYears from 'date-fns/sub_years';
/**
 * 获取时间范围
 * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param {?=} time 开始时间
 * @return {?}
 */
export function getTimeDistance(type, time) {
    time = parse(time || new Date());
    /** @type {?} */
    const options = { weekStartsOn: 1 };
    /** @type {?} */
    let res;
    switch (type) {
        case 'today':
            res = [time, time];
            break;
        case '-today':
            res = [addDays(time, -1), time];
            break;
        case 'yesterday':
            res = [addDays(time, -1), addDays(time, -1)];
            break;
        case 'week':
            res = [startOfWeek(time, options), endOfWeek(time, options)];
            break;
        case '-week':
            res = [startOfWeek(subWeeks(time, 1), options), endOfWeek(subWeeks(time, 1), options)];
            break;
        case 'month':
            res = [startOfMonth(time), endOfMonth(time)];
            break;
        case '-month':
            res = [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
            break;
        case 'year':
            res = [startOfYear(time), endOfYear(time)];
            break;
        case '-year':
            res = [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
            break;
        default:
            res = type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
            break;
    }
    return fixEndTimeOfRange(res);
}
/**
 * fix time is the most, big value
 * @param {?} dates
 * @return {?}
 */
export function fixEndTimeOfRange(dates) {
    return [startOfDay(dates[0]), endOfDay(dates[1])];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3RpbWUvdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxRQUFRLE1BQU0scUJBQXFCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxTQUFTLE1BQU0sc0JBQXNCLENBQUM7QUFDN0MsT0FBTyxTQUFTLE1BQU0sc0JBQXNCLENBQUM7QUFDN0MsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxVQUFVLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxZQUFZLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFPMUMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsSUFBMEcsRUFDMUcsSUFBNkI7SUFFN0IsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztVQUMzQixPQUFPLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFOztRQUUvQixHQUFpQjtJQUNyQixRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssT0FBTztZQUNWLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQixNQUFNO1FBQ1IsS0FBSyxRQUFRO1lBQ1gsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hDLE1BQU07UUFDUixLQUFLLFdBQVc7WUFDZCxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTTtRQUNSLEtBQUssTUFBTTtZQUNULEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU07UUFDUixLQUFLLE9BQU87WUFDVixHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLE1BQU07UUFDUixLQUFLLE9BQU87WUFDVixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTTtRQUNSLEtBQUssUUFBUTtZQUNYLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU07UUFDUixLQUFLLE1BQU07WUFDVCxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTTtRQUNSLEtBQUssT0FBTztZQUNWLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE1BQU07UUFDUjtZQUNFLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRSxNQUFNO0tBQ1Q7SUFDRCxPQUFPLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxLQUFtQjtJQUNuRCxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cyc7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSAnZGF0ZS1mbnMvZW5kX29mX2RheSc7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xuaW1wb3J0IGVuZE9mV2VlayBmcm9tICdkYXRlLWZucy9lbmRfb2Zfd2Vlayc7XG5pbXBvcnQgZW5kT2ZZZWFyIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl95ZWFyJztcbmltcG9ydCBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9kYXknO1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9tb250aCc7XG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2Zfd2Vlayc7XG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhcic7XG5pbXBvcnQgc3ViTW9udGhzIGZyb20gJ2RhdGUtZm5zL3N1Yl9tb250aHMnO1xuaW1wb3J0IHN1YldlZWtzIGZyb20gJ2RhdGUtZm5zL3N1Yl93ZWVrcyc7XG5pbXBvcnQgc3ViWWVhcnMgZnJvbSAnZGF0ZS1mbnMvc3ViX3llYXJzJztcblxuLyoqXG4gKiDojrflj5bml7bpl7TojIPlm7RcbiAqIEBwYXJhbSB0eXBlIOexu+Wei++8jOW4piBgLWAg6KGo56S66L+H5Y675LiA5Liq5pe26Ze077yM6Iul5oyH5a6aIGBudW1iZXJgIOihqOekuuWkqeaVsFxuICogQHBhcmFtIHRpbWUg5byA5aeL5pe26Ze0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lRGlzdGFuY2UoXG4gIHR5cGU6ICd0b2RheScgfCAnLXRvZGF5JyB8ICd5ZXN0ZXJkYXknIHwgJ3dlZWsnIHwgJy13ZWVrJyB8ICdtb250aCcgfCAnLW1vbnRoJyB8ICd5ZWFyJyB8ICcteWVhcicgfCBudW1iZXIsXG4gIHRpbWU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLFxuKTogW0RhdGUsIERhdGVdIHtcbiAgdGltZSA9IHBhcnNlKHRpbWUgfHwgbmV3IERhdGUoKSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHdlZWtTdGFydHNPbjogMSB9O1xuXG4gIGxldCByZXM6IFtEYXRlLCBEYXRlXTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndG9kYXknOlxuICAgICAgcmVzID0gW3RpbWUsIHRpbWVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLXRvZGF5JzpcbiAgICAgIHJlcyA9IFthZGREYXlzKHRpbWUsIC0xKSwgdGltZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICd5ZXN0ZXJkYXknOlxuICAgICAgcmVzID0gW2FkZERheXModGltZSwgLTEpLCBhZGREYXlzKHRpbWUsIC0xKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3ZWVrJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mV2Vlayh0aW1lLCBvcHRpb25zKSwgZW5kT2ZXZWVrKHRpbWUsIG9wdGlvbnMpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy13ZWVrJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSwgb3B0aW9ucyksIGVuZE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSwgb3B0aW9ucyldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmVzID0gW3N0YXJ0T2ZNb250aCh0aW1lKSwgZW5kT2ZNb250aCh0aW1lKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICctbW9udGgnOlxuICAgICAgcmVzID0gW3N0YXJ0T2ZNb250aChzdWJNb250aHModGltZSwgMSkpLCBlbmRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXMgPSBbc3RhcnRPZlllYXIodGltZSksIGVuZE9mWWVhcih0aW1lKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICcteWVhcic6XG4gICAgICByZXMgPSBbc3RhcnRPZlllYXIoc3ViWWVhcnModGltZSwgMSkpLCBlbmRPZlllYXIoc3ViWWVhcnModGltZSwgMSkpXTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMgPSB0eXBlID4gMCA/IFt0aW1lLCBhZGREYXlzKHRpbWUsIHR5cGUpXSA6IFthZGREYXlzKHRpbWUsIHR5cGUpLCB0aW1lXTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBmaXhFbmRUaW1lT2ZSYW5nZShyZXMpO1xufVxuXG4vKipcbiAqIGZpeCB0aW1lIGlzIHRoZSBtb3N0LCBiaWcgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpeEVuZFRpbWVPZlJhbmdlKGRhdGVzOiBbRGF0ZSwgRGF0ZV0pOiBbRGF0ZSwgRGF0ZV0ge1xuICByZXR1cm4gW3N0YXJ0T2ZEYXkoZGF0ZXNbMF0pLCBlbmRPZkRheShkYXRlc1sxXSldO1xufVxuIl19