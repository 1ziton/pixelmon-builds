/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpErrorResponse, HttpResponse, HttpResponseBase, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PixelmonMockConfig } from './mock.config';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
var HttpMockInterceptorHandler = /** @class */ (function () {
    function HttpMockInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpMockInterceptorHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpMockInterceptorHandler;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpMockInterceptorHandler.prototype.next;
    /**
     * @type {?}
     * @private
     */
    HttpMockInterceptorHandler.prototype.interceptor;
}
var MockInterceptor = /** @class */ (function () {
    function MockInterceptor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    MockInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        /** @type {?} */
        var src = this.injector.get(MockService);
        /** @type {?} */
        var config = tslib_1.__assign({ delay: 300, force: false, log: true, executeOtherInterceptors: true }, this.injector.get(PixelmonMockConfig));
        /** @type {?} */
        var rule = src.getRule(req.method, req.url.split('?')[0]);
        if (!rule && !config.force) {
            return next.handle(req);
        }
        /** @type {?} */
        var res;
        switch (typeof (/** @type {?} */ (rule)).callback) {
            case 'function':
                /** @type {?} */
                var mockRequest_1 = {
                    original: req,
                    body: req.body,
                    queryString: {},
                    headers: {},
                    params: (/** @type {?} */ (rule)).params,
                };
                /** @type {?} */
                var urlParams = req.url.split('?');
                if (urlParams.length > 1) {
                    urlParams[1].split('&').forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        /** @type {?} */
                        var itemArr = item.split('=');
                        /** @type {?} */
                        var key = itemArr[0];
                        /** @type {?} */
                        var value = itemArr[1];
                        // is array
                        if (Object.keys(mockRequest_1.queryString).includes(key)) {
                            if (!Array.isArray(mockRequest_1.queryString[key])) {
                                mockRequest_1.queryString[key] = [mockRequest_1.queryString[key]];
                            }
                            mockRequest_1.queryString[key].push(value);
                        }
                        else {
                            mockRequest_1.queryString[key] = value;
                        }
                    }));
                }
                req.params.keys().forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (mockRequest_1.queryString[key] = req.params.get(key)); }));
                req.headers.keys().forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (mockRequest_1.headers[key] = req.headers.get(key)); }));
                try {
                    res = (/** @type {?} */ (rule)).callback.call(this, mockRequest_1);
                }
                catch (e) {
                    res = new HttpErrorResponse({
                        url: req.url,
                        headers: req.headers,
                        status: 400,
                        statusText: e.statusText || 'Unknown Error',
                        error: e.error,
                    });
                    if (e instanceof MockStatusError) {
                        res.status = e.status;
                    }
                }
                break;
            default:
                res = (/** @type {?} */ (rule)).callback;
                break;
        }
        if (!(res instanceof HttpResponseBase)) {
            res = new HttpResponse({
                status: 200,
                url: req.url,
                body: res,
            });
        }
        if (config.log) {
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->request", 'background:#000;color:#bada55', req);
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->response", 'background:#000;color:#bada55', res);
        }
        /** @type {?} */
        var res$ = res instanceof HttpErrorResponse ? throwError(res) : of(res);
        if (config.executeOtherInterceptors) {
            /** @type {?} */
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            /** @type {?} */
            var lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
            if (lastInterceptors.length > 0) {
                /** @type {?} */
                var chain = lastInterceptors.reduceRight((/**
                 * @param {?} _next
                 * @param {?} _interceptor
                 * @return {?}
                 */
                function (_next, _interceptor) { return new HttpMockInterceptorHandler(_next, _interceptor); }), (/** @type {?} */ ({
                    handle: (/**
                     * @return {?}
                     */
                    function () { return res$; }),
                })));
                return chain.handle(req).pipe(delay(config.delay));
            }
        }
        return res$.pipe(delay(config.delay));
    };
    MockInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MockInterceptor.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return MockInterceptor;
}());
export { MockInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9tb2NrLyIsInNvdXJjZXMiOlsic3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBS2pCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpEO0lBQ0Usb0NBQW9CLElBQWlCLEVBQVUsV0FBNEI7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFHLENBQUM7Ozs7O0lBRS9FLDJDQUFNOzs7O0lBQU4sVUFBTyxHQUFxQjtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7OztJQUxhLDBDQUF5Qjs7Ozs7SUFBRSxpREFBb0M7O0FBTzdFO0lBRUUseUJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7Ozs7SUFFMUMsbUNBQVM7Ozs7O0lBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCOztZQUMxQyxH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QUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUV6RSxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTs7Z0JBQzdCLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7O2dCQUN2RCxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7b0JBQ3pCLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7OztnQkFBQyxVQUFDLEtBQUssRUFBRSxZQUFZLElBQUssT0FBQSxJQUFJLDBCQUEwQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBbkQsQ0FBbUQsR0FBRSxtQkFBQTtvQkFDdkgsTUFBTTs7O29CQUFFLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFBO2lCQUNuQixFQUFlLENBQUM7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQS9GRixVQUFVOzs7O2dCQWpCVSxRQUFROztJQWlIN0Isc0JBQUM7Q0FBQSxBQWhHRCxJQWdHQztTQS9GWSxlQUFlOzs7Ozs7SUFDZCxtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwQmFja2VuZCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFJlc3BvbnNlQmFzZSxcbiAgSFRUUF9JTlRFUkNFUFRPUlMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUGl4ZWxtb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJy4vc3RhdHVzLmVycm9yJztcblxuY2xhc3MgSHR0cE1vY2tJbnRlcmNlcHRvckhhbmRsZXIgaW1wbGVtZW50cyBIdHRwSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV4dDogSHR0cEhhbmRsZXIsIHByaXZhdGUgaW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvcikge31cblxuICBoYW5kbGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmludGVyY2VwdG9yLmludGVyY2VwdChyZXEsIHRoaXMubmV4dCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IHNyYyA9IHRoaXMuaW5qZWN0b3IuZ2V0PE1vY2tTZXJ2aWNlPihNb2NrU2VydmljZSk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZGVsYXk6IDMwMCxcbiAgICAgIGZvcmNlOiBmYWxzZSxcbiAgICAgIGxvZzogdHJ1ZSxcbiAgICAgIGV4ZWN1dGVPdGhlckludGVyY2VwdG9yczogdHJ1ZSxcbiAgICAgIC4uLnRoaXMuaW5qZWN0b3IuZ2V0PFBpeGVsbW9uTW9ja0NvbmZpZz4oUGl4ZWxtb25Nb2NrQ29uZmlnKSxcbiAgICB9O1xuICAgIGNvbnN0IHJ1bGUgPSBzcmMuZ2V0UnVsZShyZXEubWV0aG9kLCByZXEudXJsLnNwbGl0KCc/JylbMF0pO1xuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBhbnk7XG4gICAgc3dpdGNoICh0eXBlb2YgcnVsZSEuY2FsbGJhY2spIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgY29uc3QgbW9ja1JlcXVlc3Q6IE1vY2tSZXF1ZXN0ID0ge1xuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXG4gICAgICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICAgICAgcXVlcnlTdHJpbmc6IHt9LFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIHBhcmFtczogcnVsZSEucGFyYW1zLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSByZXEudXJsLnNwbGl0KCc/Jyk7XG4gICAgICAgIGlmICh1cmxQYXJhbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHVybFBhcmFtc1sxXS5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQXJyID0gaXRlbS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaXRlbUFyclswXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbUFyclsxXTtcbiAgICAgICAgICAgIC8vIGlzIGFycmF5XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobW9ja1JlcXVlc3QucXVlcnlTdHJpbmcpLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IFttb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlcS5wYXJhbXMua2V5cygpLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gcmVxLnBhcmFtcy5nZXQoa2V5KSkpO1xuICAgICAgICByZXEuaGVhZGVycy5rZXlzKCkuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LmhlYWRlcnNba2V5XSA9IHJlcS5oZWFkZXJzLmdldChrZXkpKSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBydWxlIS5jYWxsYmFjay5jYWxsKHRoaXMsIG1vY2tSZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogZS5zdGF0dXNUZXh0IHx8ICdVbmtub3duIEVycm9yJyxcbiAgICAgICAgICAgIGVycm9yOiBlLmVycm9yLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ja1N0YXR1c0Vycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzID0gZS5zdGF0dXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gcnVsZSEuY2FsbGJhY2s7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghKHJlcyBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZUJhc2UpKSB7XG4gICAgICByZXMgPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgYm9keTogcmVzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0ke3JlcS5tZXRob2R9LT4ke3JlcS51cmx9LT5yZXF1ZXN0YCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgcmVxKTtcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0ke3JlcS5tZXRob2R9LT4ke3JlcS51cmx9LT5yZXNwb25zZWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzJCA9IHJlcyBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlID8gdGhyb3dFcnJvcihyZXMpIDogb2YocmVzKTtcblxuICAgIGlmIChjb25maWcuZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSB0aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SUywgW10pO1xuICAgICAgY29uc3QgbGFzdEludGVyY2VwdG9ycyA9IGludGVyY2VwdG9ycy5zbGljZShpbnRlcmNlcHRvcnMuaW5kZXhPZih0aGlzKSArIDEpO1xuICAgICAgaWYgKGxhc3RJbnRlcmNlcHRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjaGFpbiA9IGxhc3RJbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoKF9uZXh0LCBfaW50ZXJjZXB0b3IpID0+IG5ldyBIdHRwTW9ja0ludGVyY2VwdG9ySGFuZGxlcihfbmV4dCwgX2ludGVyY2VwdG9yKSwge1xuICAgICAgICAgIGhhbmRsZTogKCkgPT4gcmVzJCxcbiAgICAgICAgfSBhcyBIdHRwQmFja2VuZCk7XG4gICAgICAgIHJldHVybiBjaGFpbi5oYW5kbGUocmVxKS5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXMkLnBpcGUoZGVsYXkoY29uZmlnLmRlbGF5KSk7XG4gIH1cbn1cbiJdfQ==