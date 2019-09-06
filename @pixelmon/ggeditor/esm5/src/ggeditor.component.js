/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-08-14 15:47:15
 * @description: ggeditor angular component
 */
import { Component, Input } from '@angular/core';
import { InputBoolean, uuidv1 } from '@pixelmon/util';
import GGEditor, { Flow, Mind } from 'gg-editor';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FlowPage from './editor/flow/FlowPage';
var GGEditorComponent = /** @class */ (function () {
    function GGEditorComponent() {
        this.style = {
            width: 500,
            height: 500,
        };
        this.type = 'flow';
        this.enableEditor = false;
    }
    /**
     * @protected
     * @return {?}
     */
    GGEditorComponent.prototype.getRootDomNode = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var node = document.getElementById(this.rootDomID);
        if (!node) {
            throw new Error("Node '" + this.rootDomID + " not found!");
        }
        return node;
    };
    /**
     * @protected
     * @return {?}
     */
    GGEditorComponent.prototype.getProps = /**
     * @protected
     * @return {?}
     */
    function () {
        return tslib_1.__assign({}, this.data);
    };
    /**
     * @private
     * @return {?}
     */
    GGEditorComponent.prototype.isMounted = /**
     * @private
     * @return {?}
     */
    function () {
        return !!this.rootDomID;
    };
    // <GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    // <GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    // <GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    // <GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    /**
     * @protected
     * @return {?}
     */
    GGEditorComponent.prototype.render = 
    // <GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    // <GGEditor>
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isMounted()) {
            //   console.log(this.rootDomID);
            if (this.type === 'flow') {
                if (this.enableEditor) {
                    return this.renderFlowEditor();
                }
                return this.renderFlow();
            }
            if (this.type === 'mind') {
                return this.renderMind();
            }
        }
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.renderFlow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var flow = React.createElement(Flow, { data: this.getProps(), style: tslib_1.__assign({}, this.style) });
        ReactDOM.render(React.createElement(GGEditor, {}, flow), this.getRootDomNode());
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.renderFlowEditor = /**
     * @return {?}
     */
    function () {
        ReactDOM.render(React.createElement(FlowPage, { data: this.getProps() }), this.getRootDomNode());
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.renderMind = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mind = React.createElement(Mind, { data: this.getProps(), style: tslib_1.__assign({}, this.style) });
        ReactDOM.render(React.createElement(GGEditor, {}, mind), this.getRootDomNode());
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rootDomID = uuidv1();
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.render();
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.render();
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    GGEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-ggeditor',
                    template: "\n    <div [id]=\"rootDomID\" class=\"ggeditor-flowpage\"></div>\n  ",
                    styles: [".ggeditor-flowpage{width:100%;height:100%}.ggeditor-flowpage .editor{display:flex;flex:1;flex-direction:column;width:100%;height:100%;background:#fff}.ggeditor-flowpage .editor .context-menu{display:none;overflow:hidden;background:#fff;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.15)}.ggeditor-flowpage .editor .context-menu .menu-item{display:flex;align-items:center;padding:5px 12px;cursor:pointer;transition:.3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ggeditor-flowpage .editor .context-menu .menu-item:hover{background:#e6f7ff}.ggeditor-flowpage .editor .context-menu .menu-item i{margin-right:8px}.ggeditor-flowpage .editor .context-menu ::ng-deep .disable .item{color:rgba(0,0,0,.25);cursor:auto}.ggeditor-flowpage .editor .context-menu ::ng-deep .disable .item:hover{background:#fff}.ggeditor-flowpage .editor .toolbar{display:flex;align-items:center}.ggeditor-flowpage .editor .toolbar .command i{display:inline-block;width:27px;height:27px;margin:0 6px;padding-top:6px;text-align:center;border:1px solid #fff;cursor:pointer}.ggeditor-flowpage .editor .toolbar .command i:hover{border:1px solid #e6e9ed}.ggeditor-flowpage .editor .toolbar .disable i{color:rgba(0,0,0,.25);cursor:auto}.ggeditor-flowpage .editor .toolbar .disable i:hover{border:1px solid #fff}.ggeditor-flowpage .editor .tooltip .ant-tooltip-inner{font-size:12px;border-radius:0}.ggeditor-flowpage .editor .item-panel{flex:1;background:#fafafa}.ggeditor-flowpage .editor .item-panel .ant-card{background:#fafafa}.ggeditor-flowpage .editor .item-panel .ant-card-body{display:flex;flex-direction:column;align-items:center}.ggeditor-flowpage .editor .item-panel .ant-card-body>div{margin-bottom:16px}.ggeditor-flowpage .editor .detail-panel{flex:1;background:#fafafa}.ggeditor-flowpage .editor .detail-panel .ant-card{background:#fafafa}.ggeditor-flowpage .editorHd{padding:8px;border:1px solid #e6e9ed}.ggeditor-flowpage .editorBd{flex:1}.ggeditor-flowpage .editorContent,.ggeditor-flowpage .editorSidebar{display:flex;flex-direction:column}.ggeditor-flowpage .editorContent .graph-container,.ggeditor-flowpage .editorSidebar .graph-container{width:100%;height:100%}.ggeditor-flowpage .editorSidebar{background:#fafafa}.ggeditor-flowpage .editorSidebar:first-child{border-right:1px solid #e6e9ed}.ggeditor-flowpage .editorSidebar:last-child{border-left:1px solid #e6e9ed}.ggeditor-flowpage .flow,.ggeditor-flowpage .koni,.ggeditor-flowpage .mind{flex:1;height:0}"]
                }] }
    ];
    GGEditorComponent.propDecorators = {
        data: [{ type: Input }],
        style: [{ type: Input }],
        type: [{ type: Input }],
        enableEditor: [{ type: Input }],
        onLoadingChanged: [{ type: Input }],
        onError: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], GGEditorComponent.prototype, "enableEditor", void 0);
    return GGEditorComponent;
}());
export { GGEditorComponent };
if (false) {
    /** @type {?} */
    GGEditorComponent.prototype.data;
    /** @type {?} */
    GGEditorComponent.prototype.style;
    /** @type {?} */
    GGEditorComponent.prototype.type;
    /** @type {?} */
    GGEditorComponent.prototype.enableEditor;
    /** @type {?} */
    GGEditorComponent.prototype.onLoadingChanged;
    /** @type {?} */
    GGEditorComponent.prototype.onError;
    /** @type {?} */
    GGEditorComponent.prototype.rootDomID;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2dlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL2dnZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2dnZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBYSxNQUFNLFdBQVcsQ0FBQztBQUM1RCxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUc5QztJQUFBO1FBU1csVUFBSyxHQUFjO1lBQzFCLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7U0FDWixDQUFDO1FBQ08sU0FBSSxHQUFjLE1BQU0sQ0FBQztRQUNULGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBMEVoRCxDQUFDOzs7OztJQXBFVywwQ0FBYzs7OztJQUF4Qjs7WUFDUSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVMsSUFBSSxDQUFDLFNBQVMsZ0JBQWEsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVTLG9DQUFROzs7O0lBQWxCO1FBQ0UsNEJBQ0ssSUFBSSxDQUFDLElBQUksRUFDWjtJQUNKLENBQUM7Ozs7O0lBRU8scUNBQVM7Ozs7SUFBakI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhO0lBQ2IsNkRBQTZEO0lBQzdELGNBQWM7SUFFZCxhQUFhO0lBQ2IsNkRBQTZEO0lBQzdELGNBQWM7Ozs7Ozs7Ozs7O0lBRUosa0NBQU07Ozs7Ozs7Ozs7O0lBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsaUNBQWlDO1lBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDaEM7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDMUI7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVjs7WUFDUSxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssdUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxFQUFFLENBQUM7UUFDM0YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7OztJQUVELDRDQUFnQjs7O0lBQWhCO1FBQ0UsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ25HLENBQUM7Ozs7SUFFRCxzQ0FBVTs7O0lBQVY7O1lBQ1EsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLHVCQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsRUFBRSxDQUFDO1FBQzNGLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDJDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYLGNBQWUsQ0FBQzs7Z0JBdkZqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxzRUFFVDs7aUJBRUY7Ozt1QkFFRSxLQUFLO3dCQUNMLEtBQUs7dUJBSUwsS0FBSzsrQkFDTCxLQUFLO21DQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFGbUI7UUFBZixZQUFZLEVBQUU7OzJEQUFzQjtJQTBFaEQsd0JBQUM7Q0FBQSxBQXhGRCxJQXdGQztTQWpGWSxpQkFBaUI7OztJQUM1QixpQ0FBeUI7O0lBQ3pCLGtDQUdFOztJQUNGLGlDQUFrQzs7SUFDbEMseUNBQThDOztJQUM5Qyw2Q0FBZ0M7O0lBQ2hDLG9DQUF1Qjs7SUFFdkIsc0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yOiBnaXNjYWZlciAsaHR0cHM6Ly9naXRodWIuY29tL2dpc2NhZmVyXG4gKiBAZGF0ZTogMjAxOS0wOC0xNCAxNTo0NzoxNVxuICogQGRlc2NyaXB0aW9uOiBnZ2VkaXRvciBhbmd1bGFyIGNvbXBvbmVudFxuICovXG5cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdXVpZHYxIH0gZnJvbSAnQHBpeGVsbW9uL3V0aWwnO1xuaW1wb3J0IEdHRWRpdG9yLCB7IEZsb3csIE1pbmQsIE1pbmRQcm9wcyB9IGZyb20gJ2dnLWVkaXRvcic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEZsb3dQYWdlIGZyb20gJy4vZWRpdG9yL2Zsb3cvRmxvd1BhZ2UnO1xuaW1wb3J0IHsgRmxvd1Byb3BzLCBGbG93U3R5bGUsIEdyYXBoVHlwZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1nZ2VkaXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbaWRdPVwicm9vdERvbUlEXCIgY2xhc3M9XCJnZ2VkaXRvci1mbG93cGFnZVwiPjwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3Ivc3R5bGVzL2luZGV4Lmxlc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR0dFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZGF0YTogRmxvd1Byb3BzO1xuICBASW5wdXQoKSBzdHlsZTogRmxvd1N0eWxlID0ge1xuICAgIHdpZHRoOiA1MDAsXG4gICAgaGVpZ2h0OiA1MDAsXG4gIH07XG4gIEBJbnB1dCgpIHR5cGU6IEdyYXBoVHlwZSA9ICdmbG93JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVuYWJsZUVkaXRvciA9IGZhbHNlO1xuICBASW5wdXQoKSBvbkxvYWRpbmdDaGFuZ2VkPzogYW55O1xuICBASW5wdXQoKSBvbkVycm9yPzogYW55O1xuXG4gIHJvb3REb21JRDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBnZXRSb290RG9tTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5yb290RG9tSUQpO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb2RlICcke3RoaXMucm9vdERvbUlEfSBub3QgZm91bmQhYCk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFByb3BzKCk6IEZsb3dQcm9wcyB8IE1pbmRQcm9wcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBpc01vdW50ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5yb290RG9tSUQ7XG4gIH1cblxuICAvLyA8R0dFZGl0b3I+XG4gIC8vICAgPEZsb3cgc3R5bGU9e3sgd2lkdGg6IDUwMCwgaGVpZ2h0OiA1MDAgfX0gZGF0YT17ZGF0YX0gLz5cbiAgLy8gPC9HR0VkaXRvcj5cblxuICAvLyA8R0dFZGl0b3I+XG4gIC8vICAgPE1pbmQgc3R5bGU9e3sgd2lkdGg6IDUwMCwgaGVpZ2h0OiA1MDAgfX0gZGF0YT17ZGF0YX0gLz5cbiAgLy8gPC9HR0VkaXRvcj5cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucm9vdERvbUlEKTtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdmbG93Jykge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVFZGl0b3IpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJGbG93RWRpdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRmxvdygpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ21pbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlck1pbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJGbG93KCkge1xuICAgIGNvbnN0IGZsb3cgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZsb3csIHsgZGF0YTogdGhpcy5nZXRQcm9wcygpLCBzdHlsZTogeyAuLi50aGlzLnN0eWxlIH0gfSk7XG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoR0dFZGl0b3IsIHt9LCBmbG93KSwgdGhpcy5nZXRSb290RG9tTm9kZSgpKTtcbiAgfVxuXG4gIHJlbmRlckZsb3dFZGl0b3IoKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxvd1BhZ2UsIHsgZGF0YTogdGhpcy5nZXRQcm9wcygpIH0pLCB0aGlzLmdldFJvb3REb21Ob2RlKCkpO1xuICB9XG5cbiAgcmVuZGVyTWluZCgpIHtcbiAgICBjb25zdCBtaW5kID0gUmVhY3QuY3JlYXRlRWxlbWVudChNaW5kLCB7IGRhdGE6IHRoaXMuZ2V0UHJvcHMoKSwgc3R5bGU6IHsgLi4udGhpcy5zdHlsZSB9IH0pO1xuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEdHRWRpdG9yLCB7fSwgbWluZCksIHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvb3REb21JRCA9IHV1aWR2MSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxufVxuIl19