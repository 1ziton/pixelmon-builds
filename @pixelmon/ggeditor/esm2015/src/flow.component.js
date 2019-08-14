/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const invariant = invariant_;
export class FlowEditorComponent {
    constructor() {
        this.style = {
            width: 500, height: 500
        };
    }
    // constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}
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
        const { nodes, edges } = this.data;
        return {
            nodes,
            edges
        };
    }
    /**
     * @private
     * @return {?}
     */
    isMounted() {
        return !!this.rootDomID;
    }
    //<GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    /**
     * @protected
     * @return {?}
     */
    render() {
        if (this.isMounted()) {
            console.log(this.rootDomID);
            /** @type {?} */
            const flow = React.createElement(Flow, { data: this.getProps(), style: Object.assign({}, this.style) });
            ReactDOM.render(React.createElement(GGEditor, {}, flow), this.getRootDomNode());
        }
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
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // e.on('message', message => {
        //   this.message = message.text
        //   this.changeDetector.detectChanges()
        //   this.returnMessageToReactWhenReceived()
        // })
    }
    /**
     * @return {?}
     */
    returnMessageToReactWhenReceived() {
        // e.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
    }
}
FlowEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ggeditor-flow',
                template: `
    <div [id]="rootDomID" class="ggeditor-flow-container"></div>
	`
            }] }
];
FlowEditorComponent.propDecorators = {
    data: [{ type: Input }],
    style: [{ type: Input }],
    onLoadingChanged: [{ type: Input }],
    onError: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vZ2dlZGl0b3IvIiwic291cmNlcyI6WyJzcmMvZmxvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsQ0FBQztBQUN4QyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7TUFHdkIsU0FBUyxHQUFHLFVBQVU7QUFTNUIsTUFBTSxPQUFPLG1CQUFtQjtJQU5oQztRQVFhLFVBQUssR0FBYztZQUN4QixLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO1NBQzFCLENBQUM7SUFvRU4sQ0FBQzs7Ozs7O0lBNURhLGNBQWM7O2NBQ2QsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLFNBQVMsYUFBYSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFUyxRQUFRO2NBQ1IsRUFDRixLQUFLLEVBQ0wsS0FBSyxFQUNSLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDYixPQUFPO1lBQ0gsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7OztJQU1TLE1BQU07UUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTs7a0JBQ3JCLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxvQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEVBQUUsQ0FBQztZQUMzRixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUNuRjtJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUdELFdBQVc7SUFDWCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2QsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyx3Q0FBd0M7UUFDeEMsNENBQTRDO1FBQzVDLEtBQUs7SUFDVCxDQUFDOzs7O0lBRUQsZ0NBQWdDO1FBQzVCLGlFQUFpRTtJQUNyRSxDQUFDOzs7WUE3RUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7O0VBRVo7YUFDRDs7O21CQUVJLEtBQUs7b0JBQ0wsS0FBSzsrQkFHTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFMTixtQ0FBeUI7O0lBQ3pCLG9DQUVFOztJQUNGLCtDQUFrQzs7SUFDbEMsc0NBQXlCOztJQUV6Qix3Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3I6IGdpc2NhZmVyICxodHRwczovL2dpdGh1Yi5jb20vZ2lzY2FmZXJcbiAqIEBkYXRlOiAyMDE5LTA4LTE0IDE1OjQ3OjE1XG4gKiBAZGVzY3JpcHRpb246IOa1geeoi+WbvlxuICovXG5cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBHR0VkaXRvciwgeyBGbG93IH0gZnJvbSAnZ2ctZWRpdG9yJztcbmltcG9ydCAqIGFzIGludmFyaWFudF8gZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgRmxvd1Byb3BzLCBGbG93U3R5bGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNvbnN0IGludmFyaWFudCA9IGludmFyaWFudF87XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZ2VkaXRvci1mbG93JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2lkXT1cInJvb3REb21JRFwiIGNsYXNzPVwiZ2dlZGl0b3ItZmxvdy1jb250YWluZXJcIj48L2Rpdj5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgRmxvd0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIGRhdGE6IEZsb3dQcm9wcztcbiAgICBASW5wdXQoKSBzdHlsZTogRmxvd1N0eWxlID0ge1xuICAgICAgICB3aWR0aDogNTAwLCBoZWlnaHQ6IDUwMFxuICAgIH07XG4gICAgQElucHV0KCkgb25Mb2FkaW5nQ2hhbmdlZD86IChhbnkpO1xuICAgIEBJbnB1dCgpIG9uRXJyb3I/OiAoYW55KTtcblxuICAgIHJvb3REb21JRDogc3RyaW5nO1xuXG4gICAgLy8gY29uc3RydWN0b3IoQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Um9vdERvbU5vZGUoKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnJvb3REb21JRCk7XG4gICAgICAgIGludmFyaWFudChub2RlLCBgTm9kZSAnJHt0aGlzLnJvb3REb21JRH0gbm90IGZvdW5kIWApO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UHJvcHMoKTogRmxvd1Byb3BzIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbm9kZXMsXG4gICAgICAgICAgICBlZGdlc1xuICAgICAgICB9ID0gdGhpcy5kYXRhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZXMsXG4gICAgICAgICAgICBlZGdlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNNb3VudGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLnJvb3REb21JRDtcbiAgICB9XG5cbiAgICAvLzxHR0VkaXRvcj5cbiAgICAvLyAgIDxGbG93IHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogNTAwIH19IGRhdGE9e2RhdGF9IC8+XG4gICAgLy8gPC9HR0VkaXRvcj5cblxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb3REb21JRClcbiAgICAgICAgICAgIGNvbnN0IGZsb3cgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZsb3csIHsgZGF0YTogdGhpcy5nZXRQcm9wcygpLCBzdHlsZTogeyAuLi50aGlzLnN0eWxlIH0gfSk7XG4gICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChHR0VkaXRvciwge30sIGZsb3cpLCB0aGlzLmdldFJvb3REb21Ob2RlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm9vdERvbUlEID0gdXVpZC52MSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgLy8gZS5vbignbWVzc2FnZScsIG1lc3NhZ2UgPT4ge1xuICAgICAgICAvLyAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UudGV4dFxuICAgICAgICAvLyAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpXG4gICAgICAgIC8vICAgdGhpcy5yZXR1cm5NZXNzYWdlVG9SZWFjdFdoZW5SZWNlaXZlZCgpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuTWVzc2FnZVRvUmVhY3RXaGVuUmVjZWl2ZWQoKSB7XG4gICAgICAgIC8vIGUuZW1pdCgncmVjZWl2ZWQnLCB7IHRleHQ6ICdXb29ob28hIEhlbGxvIGZyb20gQW5ndWxhciEg8J+OiScgfSlcbiAgICB9XG59XG4iXX0=