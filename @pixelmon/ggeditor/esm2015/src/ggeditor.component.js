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
import { InputBoolean } from '@pixelmon/util';
import GGEditor, { Flow, Mind } from 'gg-editor';
import * as invariant_ from 'invariant';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import FlowPage from './editor/flow/FlowPage';
/** @type {?} */
const invariant = invariant_;
export class GGEditorComponent {
    constructor() {
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
    getRootDomNode() {
        /** @type {?} */
        const node = document.getElementById(this.rootDomID);
        invariant(node, `Node '${this.rootDomID} not found!`);
        return node;
    }
    /**
     * @protected
     * @return {?}
     */
    getProps() {
        return Object.assign({}, this.data);
    }
    /**
     * @private
     * @return {?}
     */
    isMounted() {
        return !!this.rootDomID;
    }
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
    render() {
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
    }
    /**
     * @return {?}
     */
    renderFlow() {
        /** @type {?} */
        const flow = React.createElement(Flow, { data: this.getProps(), style: Object.assign({}, this.style) });
        ReactDOM.render(React.createElement(GGEditor, {}, flow), this.getRootDomNode());
    }
    /**
     * @return {?}
     */
    renderFlowEditor() {
        ReactDOM.render(React.createElement(FlowPage, { data: this.getProps() }), this.getRootDomNode());
    }
    /**
     * @return {?}
     */
    renderMind() {
        /** @type {?} */
        const mind = React.createElement(Mind, { data: this.getProps(), style: Object.assign({}, this.style) });
        ReactDOM.render(React.createElement(GGEditor, {}, mind), this.getRootDomNode());
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rootDomID = uuid.v1();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.render();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.render();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
GGEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'p-ggeditor',
                template: `
    <div [id]="rootDomID" class="ggeditor-flowpage"></div>
  `,
                styles: [".ggeditor-flowpage{height:100%;width:100%}.editor{display:flex;flex:1;flex-direction:column;width:100%;height:100%;background:#fff}.editor .context-menu{display:none;overflow:hidden;background:#fff;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.15)}.editor .context-menu .menu-item{display:flex;align-items:center;padding:5px 12px;cursor:pointer;transition:.3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.editor .context-menu .menu-item:hover{background:#e6f7ff}.editor .context-menu .menu-item i{margin-right:8px}.editor .context-menu ::ng-deep .disable .item{color:rgba(0,0,0,.25);cursor:auto}.editor .context-menu ::ng-deep .disable .item:hover{background:#fff}.editor .toolbar{display:flex;align-items:center}.editor .toolbar .command i{display:inline-block;width:27px;height:27px;margin:0 6px;padding-top:6px;text-align:center;border:1px solid #fff;cursor:pointer}.editor .toolbar .command i:hover{border:1px solid #e6e9ed}.editor .toolbar .disable i{color:rgba(0,0,0,.25);cursor:auto}.editor .toolbar .disable i:hover{border:1px solid #fff}.editor .tooltip .ant-tooltip-inner{font-size:12px;border-radius:0}.editor .item-panel{flex:1;background:#fafafa}.editor .item-panel .ant-card{background:#fafafa}.editor .item-panel .ant-card-body{display:flex;flex-direction:column;align-items:center}.editor .item-panel .ant-card-body>div{margin-bottom:16px}.editor .detail-panel{flex:1;background:#fafafa}.editor .detail-panel .ant-card{background:#fafafa}.editorHd{padding:8px;border:1px solid #e6e9ed}.editorBd{flex:1}.editorContent,.editorSidebar{display:flex;flex-direction:column}.editorContent .graph-container,.editorSidebar .graph-container{width:100%;height:100%}.editorSidebar{background:#fafafa}.editorSidebar:first-child{border-right:1px solid #e6e9ed}.editorSidebar:last-child{border-left:1px solid #e6e9ed}.flow,.koni,.mind{flex:1;height:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2dlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL2dnZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2dnZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFhLE1BQU0sV0FBVyxDQUFDO0FBQzVELE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDOztNQUd4QyxTQUFTLEdBQUcsVUFBVTtBQVM1QixNQUFNLE9BQU8saUJBQWlCO0lBUDlCO1FBU1csVUFBSyxHQUFjO1lBQzFCLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7U0FDWixDQUFDO1FBQ08sU0FBSSxHQUFjLE1BQU0sQ0FBQztRQUNULGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBd0VoRCxDQUFDOzs7OztJQWxFVyxjQUFjOztjQUNoQixJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsU0FBUyxhQUFhLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRVMsUUFBUTtRQUNoQix5QkFDSyxJQUFJLENBQUMsSUFBSSxFQUNaO0lBQ0osQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7Ozs7OztJQVVTLE1BQU07UUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNwQixpQ0FBaUM7WUFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUNoQztnQkFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTs7Y0FDRixJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssb0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxFQUFFLENBQUM7UUFDM0YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7O0lBRUQsVUFBVTs7Y0FDRixJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssb0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxFQUFFLENBQUM7UUFDM0YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVyxLQUFJLENBQUM7OztZQXJGakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7O0dBRVQ7O2FBRUY7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7bUJBSUwsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7QUFGbUI7SUFBZixZQUFZLEVBQUU7O3VEQUFzQjs7O0lBTjlDLGlDQUF5Qjs7SUFDekIsa0NBR0U7O0lBQ0YsaUNBQWtDOztJQUNsQyx5Q0FBOEM7O0lBQzlDLDZDQUFnQzs7SUFDaEMsb0NBQXVCOztJQUV2QixzQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3I6IGdpc2NhZmVyICxodHRwczovL2dpdGh1Yi5jb20vZ2lzY2FmZXJcbiAqIEBkYXRlOiAyMDE5LTA4LTE0IDE1OjQ3OjE1XG4gKiBAZGVzY3JpcHRpb246IGdnZWRpdG9yIGFuZ3VsYXIgY29tcG9uZW50XG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQHBpeGVsbW9uL3V0aWwnO1xuaW1wb3J0IEdHRWRpdG9yLCB7IEZsb3csIE1pbmQsIE1pbmRQcm9wcyB9IGZyb20gJ2dnLWVkaXRvcic7XG5pbXBvcnQgKiBhcyBpbnZhcmlhbnRfIGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCBGbG93UGFnZSBmcm9tICcuL2VkaXRvci9mbG93L0Zsb3dQYWdlJztcbmltcG9ydCB7IEZsb3dQcm9wcywgRmxvd1N0eWxlLCBHcmFwaFR5cGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNvbnN0IGludmFyaWFudCA9IGludmFyaWFudF87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtZ2dlZGl0b3InLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2lkXT1cInJvb3REb21JRFwiIGNsYXNzPVwiZ2dlZGl0b3ItZmxvd3BhZ2VcIj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdG9yL3N0eWxlcy9pbmRleC5sZXNzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdHRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IEZsb3dQcm9wcztcbiAgQElucHV0KCkgc3R5bGU6IEZsb3dTdHlsZSA9IHtcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogNTAwLFxuICB9O1xuICBASW5wdXQoKSB0eXBlOiBHcmFwaFR5cGUgPSAnZmxvdyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlbmFibGVFZGl0b3IgPSBmYWxzZTtcbiAgQElucHV0KCkgb25Mb2FkaW5nQ2hhbmdlZD86IGFueTtcbiAgQElucHV0KCkgb25FcnJvcj86IGFueTtcblxuICByb290RG9tSUQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgZ2V0Um9vdERvbU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdERvbUlEKTtcbiAgICBpbnZhcmlhbnQobm9kZSwgYE5vZGUgJyR7dGhpcy5yb290RG9tSUR9IG5vdCBmb3VuZCFgKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQcm9wcygpOiBGbG93UHJvcHMgfCBNaW5kUHJvcHMge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmRhdGEsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgaXNNb3VudGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMucm9vdERvbUlEO1xuICB9XG5cbiAgLy8gPEdHRWRpdG9yPlxuICAvLyAgIDxGbG93IHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogNTAwIH19IGRhdGE9e2RhdGF9IC8+XG4gIC8vIDwvR0dFZGl0b3I+XG5cbiAgLy8gPEdHRWRpdG9yPlxuICAvLyAgIDxNaW5kIHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogNTAwIH19IGRhdGE9e2RhdGF9IC8+XG4gIC8vIDwvR0dFZGl0b3I+XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnJvb3REb21JRCk7XG4gICAgICBpZiAodGhpcy50eXBlID09PSAnZmxvdycpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlRWRpdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRmxvd0VkaXRvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckZsb3coKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdtaW5kJykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJNaW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRmxvdygpIHtcbiAgICBjb25zdCBmbG93ID0gUmVhY3QuY3JlYXRlRWxlbWVudChGbG93LCB7IGRhdGE6IHRoaXMuZ2V0UHJvcHMoKSwgc3R5bGU6IHsgLi4udGhpcy5zdHlsZSB9IH0pO1xuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEdHRWRpdG9yLCB7fSwgZmxvdyksIHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gIH1cblxuICByZW5kZXJGbG93RWRpdG9yKCkge1xuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEZsb3dQYWdlLCB7IGRhdGE6IHRoaXMuZ2V0UHJvcHMoKSB9KSwgdGhpcy5nZXRSb290RG9tTm9kZSgpKTtcbiAgfVxuXG4gIHJlbmRlck1pbmQoKSB7XG4gICAgY29uc3QgbWluZCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWluZCwgeyBkYXRhOiB0aGlzLmdldFByb3BzKCksIHN0eWxlOiB7IC4uLnRoaXMuc3R5bGUgfSB9KTtcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChHR0VkaXRvciwge30sIG1pbmQpLCB0aGlzLmdldFJvb3REb21Ob2RlKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb290RG9tSUQgPSB1dWlkLnYxKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG59XG4iXX0=