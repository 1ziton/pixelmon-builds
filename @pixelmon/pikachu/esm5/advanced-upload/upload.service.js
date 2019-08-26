/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadServiceToken } from './advanced-upload.component';
import * as i0 from "@angular/core";
var UploadService = /** @class */ (function (_super) {
    tslib_1.__extends(UploadService, _super);
    function UploadService() {
        var _this = _super.call(this) || this;
        _this.workerUrl = '/assets/js/getFileMd5.js';
        return _this;
    }
    /**
     * @return {?}
     */
    UploadService.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.getBosConfig().then((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                observer.next(config);
                observer.complete();
            }));
        }));
    };
    /**
     * @return {?}
     */
    UploadService.prototype.getBosConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.bosConfig) {
                resolve(_this.bosConfig);
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.bosConfig = {
                        endpoint: 'https://yztfile.gz.bcebos.com',
                        ak: 'd1f34f5cac2211e9ba0643cb6446d1e6',
                        sk: 'ce5c4d711a17438ca5d6f891b4d3d907',
                        sessionToken: '',
                    };
                    resolve(_this.bosConfig);
                }));
            }
        }));
    };
    UploadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UploadService.ctorParameters = function () { return []; };
    /** @nocollapse */ UploadService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UploadService_Factory() { return new UploadService(); }, token: UploadService, providedIn: "root" });
    return UploadService;
}(UploadServiceToken));
export { UploadService };
if (false) {
    /** @type {?} */
    UploadService.prototype.workerUrl;
    /** @type {?} */
    UploadService.prototype.bosConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbImFkdmFuY2VkLXVwbG9hZC91cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQWEsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFNUU7SUFHbUMseUNBQWtCO0lBSW5EO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBTEQsZUFBUyxHQUFHLDBCQUEwQixDQUFDOztJQUt2QyxDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksVUFBVTs7OztRQUFZLFVBQUEsUUFBUTtZQUN2QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsTUFBTTtnQkFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0NBQVk7OztJQUFaO1FBQUEsaUJBZ0JDO1FBZkMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDeEIsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixPQUFPLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLFVBQVU7OztnQkFBQztvQkFDVCxLQUFJLENBQUMsU0FBUyxHQUFHO3dCQUNmLFFBQVEsRUFBRSwrQkFBK0I7d0JBQ3pDLEVBQUUsRUFBRSxrQ0FBa0M7d0JBQ3RDLEVBQUUsRUFBRSxrQ0FBa0M7d0JBQ3RDLFlBQVksRUFBRSxFQUFFO3FCQUNqQixDQUFDO29CQUNGLE9BQU8sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXBDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt3QkFORDtDQXlDQyxBQXJDRCxDQUdtQyxrQkFBa0IsR0FrQ3BEO1NBbENZLGFBQWE7OztJQUN4QixrQ0FBdUM7O0lBQ3ZDLGtDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVwbG9hZFNlcnZpY2VUb2tlbiwgQm9zQ29uZmlnIH0gZnJvbSAnLi9hZHZhbmNlZC11cGxvYWQuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2UgZXh0ZW5kcyBVcGxvYWRTZXJ2aWNlVG9rZW4ge1xuICB3b3JrZXJVcmwgPSAnL2Fzc2V0cy9qcy9nZXRGaWxlTWQ1LmpzJztcbiAgYm9zQ29uZmlnOiBCb3NDb25maWc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBPYnNlcnZhYmxlPEJvc0NvbmZpZz4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxCb3NDb25maWc+KG9ic2VydmVyID0+IHtcbiAgICAgIHRoaXMuZ2V0Qm9zQ29uZmlnKCkudGhlbihjb25maWcgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGNvbmZpZyk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEJvc0NvbmZpZygpOiBQcm9taXNlPEJvc0NvbmZpZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmJvc0NvbmZpZykge1xuICAgICAgICByZXNvbHZlKHRoaXMuYm9zQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYm9zQ29uZmlnID0ge1xuICAgICAgICAgICAgZW5kcG9pbnQ6ICdodHRwczovL3l6dGZpbGUuZ3ouYmNlYm9zLmNvbScsXG4gICAgICAgICAgICBhazogJ2QxZjM0ZjVjYWMyMjExZTliYTA2NDNjYjY0NDZkMWU2JyxcbiAgICAgICAgICAgIHNrOiAnY2U1YzRkNzExYTE3NDM4Y2E1ZDZmODkxYjRkM2Q5MDcnLFxuICAgICAgICAgICAgc2Vzc2lvblRva2VuOiAnJyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlc29sdmUodGhpcy5ib3NDb25maWcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19