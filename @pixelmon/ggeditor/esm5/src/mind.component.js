/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-08-14 15:47:15
 * @description: 思维导图
 */
import { Component, Input } from '@angular/core';
import GGEditor, { Mind } from 'gg-editor';
import * as invariant_ from 'invariant';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
/** @type {?} */
var invariant = invariant_;
var MindEditorComponent = /** @class */ (function () {
    function MindEditorComponent() {
        this.style = {
            width: 500, height: 500
        };
    }
    // constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}
    // constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}
    /**
     * @protected
     * @return {?}
     */
    MindEditorComponent.prototype.getRootDomNode = 
    // constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var node = document.getElementById(this.rootDomID);
        invariant(node, "Node '" + this.rootDomID + " not found!");
        return node;
    };
    /**
     * @protected
     * @return {?}
     */
    MindEditorComponent.prototype.getProps = /**
     * @protected
     * @return {?}
     */
    function () {
        var roots = this.data.roots;
        return {
            roots: roots,
        };
    };
    /**
     * @private
     * @return {?}
     */
    MindEditorComponent.prototype.isMounted = /**
     * @private
     * @return {?}
     */
    function () {
        return !!this.rootDomID;
    };
    //<GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    //</GGEditor>
    //<GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    //</GGEditor>
    /**
     * @protected
     * @return {?}
     */
    MindEditorComponent.prototype.render = 
    //<GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    //</GGEditor>
    /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isMounted()) {
            /** @type {?} */
            var mind = React.createElement(Mind, { data: this.getProps(), style: tslib_1.__assign({}, this.style) });
            ReactDOM.render(React.createElement(GGEditor, {}, mind), this.getRootDomNode());
        }
    };
    /**
     * @return {?}
     */
    MindEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rootDomID = uuid.v1();
    };
    /**
     * @return {?}
     */
    MindEditorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.render();
    };
    /**
     * @return {?}
     */
    MindEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.render();
    };
    /**
     * @return {?}
     */
    MindEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    MindEditorComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // e.on('message', message => {
        //   this.message = message.text
        //   this.changeDetector.detectChanges()
        //   this.returnMessageToReactWhenReceived()
        // })
    };
    /**
     * @return {?}
     */
    MindEditorComponent.prototype.returnMessageToReactWhenReceived = /**
     * @return {?}
     */
    function () {
        // e.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
    };
    MindEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ggeditor-mind',
                    template: "\n    <div [id]=\"rootDomID\" class=\"ggeditor-mind-container\"></div>\n\t"
                }] }
    ];
    MindEditorComponent.propDecorators = {
        data: [{ type: Input }],
        style: [{ type: Input }],
        onLoadingChanged: [{ type: Input }],
        onError: [{ type: Input }]
    };
    return MindEditorComponent;
}());
export { MindEditorComponent };
if (false) {
    /** @type {?} */
    MindEditorComponent.prototype.data;
    /** @type {?} */
    MindEditorComponent.prototype.style;
    /** @type {?} */
    MindEditorComponent.prototype.onLoadingChanged;
    /** @type {?} */
    MindEditorComponent.prototype.onError;
    /** @type {?} */
    MindEditorComponent.prototype.rootDomID;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vZ2dlZGl0b3IvIiwic291cmNlcyI6WyJzcmMvbWluZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7O0lBR3ZCLFNBQVMsR0FBRyxVQUFVO0FBRTVCO0lBQUE7UUFRYSxVQUFLLEdBQWM7WUFDeEIsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztTQUMxQixDQUFDO0lBaUVOLENBQUM7SUEzREcsdUZBQXVGOzs7Ozs7SUFFN0UsNENBQWM7Ozs7OztJQUF4Qjs7WUFDVSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBUyxJQUFJLENBQUMsU0FBUyxnQkFBYSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFUyxzQ0FBUTs7OztJQUFsQjtRQUVRLElBQUEsdUJBQUs7UUFFVCxPQUFPO1lBQ0gsS0FBSyxPQUFBO1NBQ1IsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sdUNBQVM7Ozs7SUFBakI7UUFDSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZO0lBQ1osNkRBQTZEO0lBQzdELGFBQWE7Ozs7Ozs7O0lBRUgsb0NBQU07Ozs7Ozs7O0lBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7O2dCQUNaLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyx1QkFBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEVBQUUsQ0FBQztZQUMzRixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUNuRjtJQUNMLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUdELHlDQUFXOzs7SUFBWDtJQUNBLENBQUM7Ozs7SUFFRCxnREFBa0I7OztJQUFsQjtRQUNJLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsd0NBQXdDO1FBQ3hDLDRDQUE0QztRQUM1QyxLQUFLO0lBQ1QsQ0FBQzs7OztJQUVELDhEQUFnQzs7O0lBQWhDO1FBQ0ksaUVBQWlFO0lBQ3JFLENBQUM7O2dCQTFFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSw0RUFFWjtpQkFDRDs7O3VCQUVJLEtBQUs7d0JBQ0wsS0FBSzttQ0FHTCxLQUFLOzBCQUNMLEtBQUs7O0lBK0RWLDBCQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0FyRVksbUJBQW1COzs7SUFDNUIsbUNBQXlCOztJQUN6QixvQ0FFRTs7SUFDRiwrQ0FBa0M7O0lBQ2xDLHNDQUF5Qjs7SUFFekIsd0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yOiBnaXNjYWZlciAsaHR0cHM6Ly9naXRodWIuY29tL2dpc2NhZmVyXG4gKiBAZGF0ZTogMjAxOS0wOC0xNCAxNTo0NzoxNVxuICogQGRlc2NyaXB0aW9uOiDmgJ3nu7Tlr7zlm75cbiAqL1xuXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgR0dFZGl0b3IsIHsgTWluZCB9IGZyb20gJ2dnLWVkaXRvcic7XG5pbXBvcnQgKiBhcyBpbnZhcmlhbnRfIGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCB7IE1pbmRQcm9wcywgRmxvd1N0eWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jb25zdCBpbnZhcmlhbnQgPSBpbnZhcmlhbnRfO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnZWRpdG9yLW1pbmQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbaWRdPVwicm9vdERvbUlEXCIgY2xhc3M9XCJnZ2VkaXRvci1taW5kLWNvbnRhaW5lclwiPjwvZGl2PlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBNaW5kRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgZGF0YTogTWluZFByb3BzO1xuICAgIEBJbnB1dCgpIHN0eWxlOiBGbG93U3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiA1MDAsIGhlaWdodDogNTAwXG4gICAgfTtcbiAgICBASW5wdXQoKSBvbkxvYWRpbmdDaGFuZ2VkPzogKGFueSk7XG4gICAgQElucHV0KCkgb25FcnJvcj86IChhbnkpO1xuXG4gICAgcm9vdERvbUlEOiBzdHJpbmc7XG5cbiAgICAvLyBjb25zdHJ1Y3RvcihASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIHByb3RlY3RlZCBnZXRSb290RG9tTm9kZSgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdERvbUlEKTtcbiAgICAgICAgaW52YXJpYW50KG5vZGUsIGBOb2RlICcke3RoaXMucm9vdERvbUlEfSBub3QgZm91bmQhYCk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRQcm9wcygpOiBNaW5kUHJvcHMge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICByb290cyxcbiAgICAgICAgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvb3RzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNNb3VudGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLnJvb3REb21JRDtcbiAgICB9XG5cbiAgICAvLzxHR0VkaXRvcj5cbiAgICAvLyAgIDxNaW5kIHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogNTAwIH19IGRhdGE9e2RhdGF9IC8+XG4gICAgLy88L0dHRWRpdG9yPlxuXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbmQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KE1pbmQsIHsgZGF0YTogdGhpcy5nZXRQcm9wcygpLCBzdHlsZTogeyAuLi50aGlzLnN0eWxlIH0gfSk7XG4gICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChHR0VkaXRvciwge30sIG1pbmQpLCB0aGlzLmdldFJvb3REb21Ob2RlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm9vdERvbUlEID0gdXVpZC52MSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgLy8gZS5vbignbWVzc2FnZScsIG1lc3NhZ2UgPT4ge1xuICAgICAgICAvLyAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UudGV4dFxuICAgICAgICAvLyAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpXG4gICAgICAgIC8vICAgdGhpcy5yZXR1cm5NZXNzYWdlVG9SZWFjdFdoZW5SZWNlaXZlZCgpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuTWVzc2FnZVRvUmVhY3RXaGVuUmVjZWl2ZWQoKSB7XG4gICAgICAgIC8vIGUuZW1pdCgncmVjZWl2ZWQnLCB7IHRleHQ6ICdXb29ob28hIEhlbGxvIGZyb20gQW5ndWxhciEg8J+OiScgfSlcbiAgICB9XG59XG4iXX0=