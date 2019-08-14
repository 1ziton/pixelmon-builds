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
    // <GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    // <GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    /**
     * @protected
     * @return {?}
     */
    MindEditorComponent.prototype.render = 
    // <GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vZ2dlZGl0b3IvIiwic291cmNlcyI6WyJzcmMvbWluZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7O0lBR3ZCLFNBQVMsR0FBRyxVQUFVO0FBRTVCO0lBQUE7UUFRYSxVQUFLLEdBQWM7WUFDeEIsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztTQUMxQixDQUFDO0lBcUROLENBQUM7SUEvQ0csdUZBQXVGOzs7Ozs7SUFFN0UsNENBQWM7Ozs7OztJQUF4Qjs7WUFDVSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBUyxJQUFJLENBQUMsU0FBUyxnQkFBYSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFUyxzQ0FBUTs7OztJQUFsQjtRQUVRLElBQUEsdUJBQUs7UUFFVCxPQUFPO1lBQ0gsS0FBSyxPQUFBO1NBQ1IsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sdUNBQVM7Ozs7SUFBakI7UUFDSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhO0lBQ2IsNkRBQTZEO0lBQzdELGNBQWM7Ozs7Ozs7O0lBRUosb0NBQU07Ozs7Ozs7O0lBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7O2dCQUNaLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyx1QkFBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEVBQUUsQ0FBQztZQUMzRixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUNuRjtJQUNMLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUdELHlDQUFXOzs7SUFBWDtJQUNBLENBQUM7O2dCQTlESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSw0RUFFWjtpQkFDRDs7O3VCQUVJLEtBQUs7d0JBQ0wsS0FBSzttQ0FHTCxLQUFLOzBCQUNMLEtBQUs7O0lBbURWLDBCQUFDO0NBQUEsQUEvREQsSUErREM7U0F6RFksbUJBQW1COzs7SUFDNUIsbUNBQXlCOztJQUN6QixvQ0FFRTs7SUFDRiwrQ0FBa0M7O0lBQ2xDLHNDQUF5Qjs7SUFFekIsd0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yOiBnaXNjYWZlciAsaHR0cHM6Ly9naXRodWIuY29tL2dpc2NhZmVyXG4gKiBAZGF0ZTogMjAxOS0wOC0xNCAxNTo0NzoxNVxuICogQGRlc2NyaXB0aW9uOiDmgJ3nu7Tlr7zlm75cbiAqL1xuXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgR0dFZGl0b3IsIHsgTWluZCB9IGZyb20gJ2dnLWVkaXRvcic7XG5pbXBvcnQgKiBhcyBpbnZhcmlhbnRfIGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCB7IE1pbmRQcm9wcywgRmxvd1N0eWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jb25zdCBpbnZhcmlhbnQgPSBpbnZhcmlhbnRfO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnZWRpdG9yLW1pbmQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbaWRdPVwicm9vdERvbUlEXCIgY2xhc3M9XCJnZ2VkaXRvci1taW5kLWNvbnRhaW5lclwiPjwvZGl2PlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBNaW5kRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgZGF0YTogTWluZFByb3BzO1xuICAgIEBJbnB1dCgpIHN0eWxlOiBGbG93U3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiA1MDAsIGhlaWdodDogNTAwXG4gICAgfTtcbiAgICBASW5wdXQoKSBvbkxvYWRpbmdDaGFuZ2VkPzogKGFueSk7XG4gICAgQElucHV0KCkgb25FcnJvcj86IChhbnkpO1xuXG4gICAgcm9vdERvbUlEOiBzdHJpbmc7XG5cbiAgICAvLyBjb25zdHJ1Y3RvcihASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIHByb3RlY3RlZCBnZXRSb290RG9tTm9kZSgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdERvbUlEKTtcbiAgICAgICAgaW52YXJpYW50KG5vZGUsIGBOb2RlICcke3RoaXMucm9vdERvbUlEfSBub3QgZm91bmQhYCk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRQcm9wcygpOiBNaW5kUHJvcHMge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICByb290cyxcbiAgICAgICAgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvb3RzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNNb3VudGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLnJvb3REb21JRDtcbiAgICB9XG5cbiAgICAvLyA8R0dFZGl0b3I+XG4gICAgLy8gICA8TWluZCBzdHlsZT17eyB3aWR0aDogNTAwLCBoZWlnaHQ6IDUwMCB9fSBkYXRhPXtkYXRhfSAvPlxuICAgIC8vIDwvR0dFZGl0b3I+XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgICAgICAgY29uc3QgbWluZCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWluZCwgeyBkYXRhOiB0aGlzLmdldFByb3BzKCksIHN0eWxlOiB7IC4uLnRoaXMuc3R5bGUgfSB9KTtcbiAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEdHRWRpdG9yLCB7fSwgbWluZCksIHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb290RG9tSUQgPSB1dWlkLnYxKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgfVxufVxuIl19