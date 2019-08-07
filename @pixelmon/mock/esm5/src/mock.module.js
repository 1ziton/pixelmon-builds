/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PixelmonMockConfig } from './mock.config';
import { MockInterceptor } from './mock.interceptor';
import { MockService } from './mock.service';
var PixelmonMockModule = /** @class */ (function () {
    function PixelmonMockModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    PixelmonMockModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: PixelmonMockModule,
            providers: [
                MockService,
                { provide: PixelmonMockConfig, useValue: config },
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
            ],
        };
    };
    /**
     * @return {?}
     */
    PixelmonMockModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PixelmonMockModule,
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
        };
    };
    PixelmonMockModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return PixelmonMockModule;
}());
export { PixelmonMockModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vbW9jay8iLCJzb3VyY2VzIjpbInNyYy9tb2NrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFBQTtJQW1CQSxDQUFDOzs7OztJQWpCUSwwQkFBTzs7OztJQUFkLFVBQWUsTUFBMEI7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDakQsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQ3ZFO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSwyQkFBUTs7O0lBQWY7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNwRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFFBQVEsU0FBQyxFQUFFOztJQW1CWix5QkFBQztDQUFBLEFBbkJELElBbUJDO1NBbEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGl4ZWxtb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrSW50ZXJjZXB0b3IgfSBmcm9tICcuL21vY2suaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuL21vY2suc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBQaXhlbG1vbk1vY2tNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFBpeGVsbW9uTW9ja0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUGl4ZWxtb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1vY2tTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IFBpeGVsbW9uTW9ja0NvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUGl4ZWxtb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1vY2tJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfV0sXG4gICAgfTtcbiAgfVxufVxuIl19