/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CurrencyPipe } from '@angular/common';
import { Pipe } from '@angular/core';
/**
 * @see https://1ziton.com/theme/currency
 */
// tslint:disable-next-line:use-pipe-transform-interface
var CNCurrencyPipe = /** @class */ (function (_super) {
    tslib_1.__extends(CNCurrencyPipe, _super);
    function CNCurrencyPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    CNCurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    function (value, currencyCode, display, digits) {
        if (currencyCode === void 0) { currencyCode = '￥'; }
        if (display === void 0) { display = 'code'; }
        return _super.prototype.transform.call(this, value, currencyCode, (/** @type {?} */ (display)), digits);
    };
    CNCurrencyPipe.decorators = [
        { type: Pipe, args: [{ name: '_currency' },] }
    ];
    return CNCurrencyPipe;
}(CurrencyPipe));
export { CNCurrencyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXJDO0lBQ29DLDBDQUFZO0lBRGhEOztJQVVBLENBQUM7Ozs7Ozs7O0lBUkMsa0NBQVM7Ozs7Ozs7SUFBVCxVQUNFLEtBQVUsRUFDVixZQUEwQixFQUMxQixPQUErRCxFQUMvRCxNQUFlO1FBRmYsNkJBQUEsRUFBQSxrQkFBMEI7UUFDMUIsd0JBQUEsRUFBQSxnQkFBK0Q7UUFHL0QsT0FBTyxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxtQkFBQSxPQUFPLEVBQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkFURixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztJQVUzQixxQkFBQztDQUFBLEFBVkQsQ0FDb0MsWUFBWSxHQVMvQztTQVRZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly8xeml0b24uY29tL3RoZW1lL2N1cnJlbmN5XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtcGlwZS10cmFuc2Zvcm0taW50ZXJmYWNlXG5AUGlwZSh7IG5hbWU6ICdfY3VycmVuY3knIH0pXG5leHBvcnQgY2xhc3MgQ05DdXJyZW5jeVBpcGUgZXh0ZW5kcyBDdXJyZW5jeVBpcGUge1xuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IGFueSxcbiAgICBjdXJyZW5jeUNvZGU6IHN0cmluZyA9ICfvv6UnLFxuICAgIGRpc3BsYXk6ICdjb2RlJyB8ICdzeW1ib2wnIHwgJ3N5bWJvbC1uYXJyb3cnIHwgYm9vbGVhbiA9ICdjb2RlJyxcbiAgICBkaWdpdHM/OiBzdHJpbmcsXG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGN1cnJlbmN5Q29kZSwgZGlzcGxheSBhcyBhbnksIGRpZ2l0cyk7XG4gIH1cbn1cbiJdfQ==