/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-08-14 15:47:15
 * @description: 流程图
 */
import { Component, Input } from '@angular/core';
import GGEditor, { Flow } from 'gg-editor';
import * as invariant_ from 'invariant';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
/** @type {?} */
var invariant = invariant_;
var FlowEditorComponent = /** @class */ (function () {
    function FlowEditorComponent() {
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
    FlowEditorComponent.prototype.getRootDomNode = 
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
    FlowEditorComponent.prototype.getProps = /**
     * @protected
     * @return {?}
     */
    function () {
        var _a = this.data, nodes = _a.nodes, edges = _a.edges;
        return {
            nodes: nodes,
            edges: edges
        };
    };
    /**
     * @private
     * @return {?}
     */
    FlowEditorComponent.prototype.isMounted = /**
     * @private
     * @return {?}
     */
    function () {
        return !!this.rootDomID;
    };
    //<GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    //<GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    /**
     * @protected
     * @return {?}
     */
    FlowEditorComponent.prototype.render = 
    //<GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isMounted()) {
            console.log(this.rootDomID);
            /** @type {?} */
            var flow = React.createElement(Flow, { data: this.getProps(), style: tslib_1.__assign({}, this.style) });
            ReactDOM.render(React.createElement(GGEditor, {}, flow), this.getRootDomNode());
        }
    };
    /**
     * @return {?}
     */
    FlowEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rootDomID = uuid.v1();
    };
    /**
     * @return {?}
     */
    FlowEditorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.render();
    };
    /**
     * @return {?}
     */
    FlowEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.render();
    };
    /**
     * @return {?}
     */
    FlowEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FlowEditorComponent.prototype.ngAfterContentInit = /**
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
    FlowEditorComponent.prototype.returnMessageToReactWhenReceived = /**
     * @return {?}
     */
    function () {
        // e.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
    };
    FlowEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ggeditor-flow',
                    template: "\n    <div [id]=\"rootDomID\" class=\"ggeditor-flow-container\"></div>\n\t"
                }] }
    ];
    FlowEditorComponent.propDecorators = {
        data: [{ type: Input }],
        style: [{ type: Input }],
        onLoadingChanged: [{ type: Input }],
        onError: [{ type: Input }]
    };
    return FlowEditorComponent;
}());
export { FlowEditorComponent };
if (false) {
    /** @type {?} */
    FlowEditorComponent.prototype.data;
    /** @type {?} */
    FlowEditorComponent.prototype.style;
    /** @type {?} */
    FlowEditorComponent.prototype.onLoadingChanged;
    /** @type {?} */
    FlowEditorComponent.prototype.onError;
    /** @type {?} */
    FlowEditorComponent.prototype.rootDomID;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vZ2dlZGl0b3IvIiwic291cmNlcyI6WyJzcmMvZmxvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7O0lBR3ZCLFNBQVMsR0FBRyxVQUFVO0FBRzVCO0lBQUE7UUFRYSxVQUFLLEdBQWM7WUFDeEIsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztTQUMxQixDQUFDO0lBb0VOLENBQUM7SUE5REcsdUZBQXVGOzs7Ozs7SUFFN0UsNENBQWM7Ozs7OztJQUF4Qjs7WUFDVSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBUyxJQUFJLENBQUMsU0FBUyxnQkFBYSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFUyxzQ0FBUTs7OztJQUFsQjtRQUNVLElBQUEsY0FHTyxFQUZULGdCQUFLLEVBQ0wsZ0JBQ1M7UUFDYixPQUFPO1lBQ0gsS0FBSyxPQUFBO1lBQ0wsS0FBSyxPQUFBO1NBQ1IsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sdUNBQVM7Ozs7SUFBakI7UUFDSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZO0lBQ1osNkRBQTZEO0lBQzdELGNBQWM7Ozs7Ozs7O0lBRUosb0NBQU07Ozs7Ozs7O0lBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7O2dCQUNyQixJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssdUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxFQUFFLENBQUM7WUFDM0YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDbkY7SUFDTCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFHRCx5Q0FBVzs7O0lBQVg7SUFDQSxDQUFDOzs7O0lBRUQsZ0RBQWtCOzs7SUFBbEI7UUFDSSwrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLHdDQUF3QztRQUN4Qyw0Q0FBNEM7UUFDNUMsS0FBSztJQUNULENBQUM7Ozs7SUFFRCw4REFBZ0M7OztJQUFoQztRQUNJLGlFQUFpRTtJQUNyRSxDQUFDOztnQkE3RUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsNEVBRVo7aUJBQ0Q7Ozt1QkFFSSxLQUFLO3dCQUNMLEtBQUs7bUNBR0wsS0FBSzswQkFDTCxLQUFLOztJQWtFViwwQkFBQztDQUFBLEFBOUVELElBOEVDO1NBeEVZLG1CQUFtQjs7O0lBQzVCLG1DQUF5Qjs7SUFDekIsb0NBRUU7O0lBQ0YsK0NBQWtDOztJQUNsQyxzQ0FBeUI7O0lBRXpCLHdDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvcjogZ2lzY2FmZXIgLGh0dHBzOi8vZ2l0aHViLmNvbS9naXNjYWZlclxuICogQGRhdGU6IDIwMTktMDgtMTQgMTU6NDc6MTVcbiAqIEBkZXNjcmlwdGlvbjog5rWB56iL5Zu+XG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEdHRWRpdG9yLCB7IEZsb3cgfSBmcm9tICdnZy1lZGl0b3InO1xuaW1wb3J0ICogYXMgaW52YXJpYW50XyBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBGbG93UHJvcHMsIEZsb3dTdHlsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuY29uc3QgaW52YXJpYW50ID0gaW52YXJpYW50XztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dnZWRpdG9yLWZsb3cnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbaWRdPVwicm9vdERvbUlEXCIgY2xhc3M9XCJnZ2VkaXRvci1mbG93LWNvbnRhaW5lclwiPjwvZGl2PlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBGbG93RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgZGF0YTogRmxvd1Byb3BzO1xuICAgIEBJbnB1dCgpIHN0eWxlOiBGbG93U3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiA1MDAsIGhlaWdodDogNTAwXG4gICAgfTtcbiAgICBASW5wdXQoKSBvbkxvYWRpbmdDaGFuZ2VkPzogKGFueSk7XG4gICAgQElucHV0KCkgb25FcnJvcj86IChhbnkpO1xuXG4gICAgcm9vdERvbUlEOiBzdHJpbmc7XG5cbiAgICAvLyBjb25zdHJ1Y3RvcihASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIHByb3RlY3RlZCBnZXRSb290RG9tTm9kZSgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdERvbUlEKTtcbiAgICAgICAgaW52YXJpYW50KG5vZGUsIGBOb2RlICcke3RoaXMucm9vdERvbUlEfSBub3QgZm91bmQhYCk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRQcm9wcygpOiBGbG93UHJvcHMge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBub2RlcyxcbiAgICAgICAgICAgIGVkZ2VzXG4gICAgICAgIH0gPSB0aGlzLmRhdGE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub2RlcyxcbiAgICAgICAgICAgIGVkZ2VzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc01vdW50ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucm9vdERvbUlEO1xuICAgIH1cblxuICAgIC8vPEdHRWRpdG9yPlxuICAgIC8vICAgPEZsb3cgc3R5bGU9e3sgd2lkdGg6IDUwMCwgaGVpZ2h0OiA1MDAgfX0gZGF0YT17ZGF0YX0gLz5cbiAgICAvLyA8L0dHRWRpdG9yPlxuXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9vdERvbUlEKVxuICAgICAgICAgICAgY29uc3QgZmxvdyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxvdywgeyBkYXRhOiB0aGlzLmdldFByb3BzKCksIHN0eWxlOiB7IC4uLnRoaXMuc3R5bGUgfSB9KTtcbiAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEdHRWRpdG9yLCB7fSwgZmxvdyksIHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb290RG9tSUQgPSB1dWlkLnYxKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICAvLyBlLm9uKCdtZXNzYWdlJywgbWVzc2FnZSA9PiB7XG4gICAgICAgIC8vICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZS50ZXh0XG4gICAgICAgIC8vICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKClcbiAgICAgICAgLy8gICB0aGlzLnJldHVybk1lc3NhZ2VUb1JlYWN0V2hlblJlY2VpdmVkKClcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICByZXR1cm5NZXNzYWdlVG9SZWFjdFdoZW5SZWNlaXZlZCgpIHtcbiAgICAgICAgLy8gZS5lbWl0KCdyZWNlaXZlZCcsIHsgdGV4dDogJ1dvb2hvbyEgSGVsbG8gZnJvbSBBbmd1bGFyISDwn46JJyB9KVxuICAgIH1cbn1cbiJdfQ==