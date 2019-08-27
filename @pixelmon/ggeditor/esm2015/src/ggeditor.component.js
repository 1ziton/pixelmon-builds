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
import * as invariant_ from 'invariant';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
        this.rootDomID = uuidv1();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2dlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL2dnZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2dnZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBYSxNQUFNLFdBQVcsQ0FBQztBQUM1RCxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsQ0FBQztBQUN4QyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQzs7TUFHeEMsU0FBUyxHQUFHLFVBQVU7QUFTNUIsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVNXLFVBQUssR0FBYztZQUMxQixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNPLFNBQUksR0FBYyxNQUFNLENBQUM7UUFDVCxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQXdFaEQsQ0FBQzs7Ozs7SUFsRVcsY0FBYzs7Y0FDaEIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLFNBQVMsYUFBYSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVTLFFBQVE7UUFDaEIseUJBQ0ssSUFBSSxDQUFDLElBQUksRUFDWjtJQUNKLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7SUFVUyxNQUFNO1FBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsaUNBQWlDO1lBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDaEM7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDMUI7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0YsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLG9CQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsRUFBRSxDQUFDO1FBQzNGLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0YsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLG9CQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsRUFBRSxDQUFDO1FBQzNGLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVyxLQUFJLENBQUM7OztZQXJGakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7O0dBRVQ7O2FBRUY7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7bUJBSUwsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7QUFGbUI7SUFBZixZQUFZLEVBQUU7O3VEQUFzQjs7O0lBTjlDLGlDQUF5Qjs7SUFDekIsa0NBR0U7O0lBQ0YsaUNBQWtDOztJQUNsQyx5Q0FBOEM7O0lBQzlDLDZDQUFnQzs7SUFDaEMsb0NBQXVCOztJQUV2QixzQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3I6IGdpc2NhZmVyICxodHRwczovL2dpdGh1Yi5jb20vZ2lzY2FmZXJcbiAqIEBkYXRlOiAyMDE5LTA4LTE0IDE1OjQ3OjE1XG4gKiBAZGVzY3JpcHRpb246IGdnZWRpdG9yIGFuZ3VsYXIgY29tcG9uZW50XG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB1dWlkdjEgfSBmcm9tICdAcGl4ZWxtb24vdXRpbCc7XG5pbXBvcnQgR0dFZGl0b3IsIHsgRmxvdywgTWluZCwgTWluZFByb3BzIH0gZnJvbSAnZ2ctZWRpdG9yJztcbmltcG9ydCAqIGFzIGludmFyaWFudF8gZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRmxvd1BhZ2UgZnJvbSAnLi9lZGl0b3IvZmxvdy9GbG93UGFnZSc7XG5pbXBvcnQgeyBGbG93UHJvcHMsIEZsb3dTdHlsZSwgR3JhcGhUeXBlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jb25zdCBpbnZhcmlhbnQgPSBpbnZhcmlhbnRfO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLWdnZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtpZF09XCJyb290RG9tSURcIiBjbGFzcz1cImdnZWRpdG9yLWZsb3dwYWdlXCI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci9zdHlsZXMvaW5kZXgubGVzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHR0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBkYXRhOiBGbG93UHJvcHM7XG4gIEBJbnB1dCgpIHN0eWxlOiBGbG93U3R5bGUgPSB7XG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDUwMCxcbiAgfTtcbiAgQElucHV0KCkgdHlwZTogR3JhcGhUeXBlID0gJ2Zsb3cnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZW5hYmxlRWRpdG9yID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9uTG9hZGluZ0NoYW5nZWQ/OiBhbnk7XG4gIEBJbnB1dCgpIG9uRXJyb3I/OiBhbnk7XG5cbiAgcm9vdERvbUlEOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIGdldFJvb3REb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnJvb3REb21JRCk7XG4gICAgaW52YXJpYW50KG5vZGUsIGBOb2RlICcke3RoaXMucm9vdERvbUlEfSBub3QgZm91bmQhYCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UHJvcHMoKTogRmxvd1Byb3BzIHwgTWluZFByb3BzIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5kYXRhLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGlzTW91bnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnJvb3REb21JRDtcbiAgfVxuXG4gIC8vIDxHR0VkaXRvcj5cbiAgLy8gICA8RmxvdyBzdHlsZT17eyB3aWR0aDogNTAwLCBoZWlnaHQ6IDUwMCB9fSBkYXRhPXtkYXRhfSAvPlxuICAvLyA8L0dHRWRpdG9yPlxuXG4gIC8vIDxHR0VkaXRvcj5cbiAgLy8gICA8TWluZCBzdHlsZT17eyB3aWR0aDogNTAwLCBoZWlnaHQ6IDUwMCB9fSBkYXRhPXtkYXRhfSAvPlxuICAvLyA8L0dHRWRpdG9yPlxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2codGhpcy5yb290RG9tSUQpO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Zsb3cnKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUVkaXRvcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckZsb3dFZGl0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJGbG93KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50eXBlID09PSAnbWluZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTWluZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZsb3coKSB7XG4gICAgY29uc3QgZmxvdyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxvdywgeyBkYXRhOiB0aGlzLmdldFByb3BzKCksIHN0eWxlOiB7IC4uLnRoaXMuc3R5bGUgfSB9KTtcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChHR0VkaXRvciwge30sIGZsb3cpLCB0aGlzLmdldFJvb3REb21Ob2RlKCkpO1xuICB9XG5cbiAgcmVuZGVyRmxvd0VkaXRvcigpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChGbG93UGFnZSwgeyBkYXRhOiB0aGlzLmdldFByb3BzKCkgfSksIHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gIH1cblxuICByZW5kZXJNaW5kKCkge1xuICAgIGNvbnN0IG1pbmQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KE1pbmQsIHsgZGF0YTogdGhpcy5nZXRQcm9wcygpLCBzdHlsZTogeyAuLi50aGlzLnN0eWxlIH0gfSk7XG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoR0dFZGl0b3IsIHt9LCBtaW5kKSwgdGhpcy5nZXRSb290RG9tTm9kZSgpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm9vdERvbUlEID0gdXVpZHYxKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG59XG4iXX0=