/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const invariant = invariant_;
export class MindEditorComponent {
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
        const { roots, } = this.data;
        return {
            roots,
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
    //   <Mind style={{ width: 500, height: 500 }} data={data} />
    //</GGEditor>
    /**
     * @protected
     * @return {?}
     */
    render() {
        if (this.isMounted()) {
            /** @type {?} */
            const mind = React.createElement(Mind, { data: this.getProps(), style: Object.assign({}, this.style) });
            ReactDOM.render(React.createElement(GGEditor, {}, mind), this.getRootDomNode());
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
MindEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ggeditor-mind',
                template: `
    <div [id]="rootDomID" class="ggeditor-mind-container"></div>
	`
            }] }
];
MindEditorComponent.propDecorators = {
    data: [{ type: Input }],
    style: [{ type: Input }],
    onLoadingChanged: [{ type: Input }],
    onError: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vZ2dlZGl0b3IvIiwic291cmNlcyI6WyJzcmMvbWluZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsQ0FBQztBQUN4QyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7TUFHdkIsU0FBUyxHQUFHLFVBQVU7QUFRNUIsTUFBTSxPQUFPLG1CQUFtQjtJQU5oQztRQVFhLFVBQUssR0FBYztZQUN4QixLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO1NBQzFCLENBQUM7SUFpRU4sQ0FBQzs7Ozs7O0lBekRhLGNBQWM7O2NBQ2QsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLFNBQVMsYUFBYSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFUyxRQUFRO2NBQ1IsRUFDRixLQUFLLEdBQ1IsR0FBRyxJQUFJLENBQUMsSUFBSTtRQUNiLE9BQU87WUFDSCxLQUFLO1NBQ1IsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUIsQ0FBQzs7Ozs7Ozs7SUFNUyxNQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7O2tCQUNaLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxvQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFFLEVBQUUsQ0FBQztZQUMzRixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUNuRjtJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUdELFdBQVc7SUFDWCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2QsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyx3Q0FBd0M7UUFDeEMsNENBQTRDO1FBQzVDLEtBQUs7SUFDVCxDQUFDOzs7O0lBRUQsZ0NBQWdDO1FBQzVCLGlFQUFpRTtJQUNyRSxDQUFDOzs7WUExRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7O0VBRVo7YUFDRDs7O21CQUVJLEtBQUs7b0JBQ0wsS0FBSzsrQkFHTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFMTixtQ0FBeUI7O0lBQ3pCLG9DQUVFOztJQUNGLCtDQUFrQzs7SUFDbEMsc0NBQXlCOztJQUV6Qix3Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3I6IGdpc2NhZmVyICxodHRwczovL2dpdGh1Yi5jb20vZ2lzY2FmZXJcbiAqIEBkYXRlOiAyMDE5LTA4LTE0IDE1OjQ3OjE1XG4gKiBAZGVzY3JpcHRpb246IOaAnee7tOWvvOWbvlxuICovXG5cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBHR0VkaXRvciwgeyBNaW5kIH0gZnJvbSAnZ2ctZWRpdG9yJztcbmltcG9ydCAqIGFzIGludmFyaWFudF8gZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgTWluZFByb3BzLCBGbG93U3R5bGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNvbnN0IGludmFyaWFudCA9IGludmFyaWFudF87XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2dlZGl0b3ItbWluZCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtpZF09XCJyb290RG9tSURcIiBjbGFzcz1cImdnZWRpdG9yLW1pbmQtY29udGFpbmVyXCI+PC9kaXY+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE1pbmRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBkYXRhOiBNaW5kUHJvcHM7XG4gICAgQElucHV0KCkgc3R5bGU6IEZsb3dTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IDUwMCwgaGVpZ2h0OiA1MDBcbiAgICB9O1xuICAgIEBJbnB1dCgpIG9uTG9hZGluZ0NoYW5nZWQ/OiAoYW55KTtcbiAgICBASW5wdXQoKSBvbkVycm9yPzogKGFueSk7XG5cbiAgICByb290RG9tSUQ6IHN0cmluZztcblxuICAgIC8vIGNvbnN0cnVjdG9yKEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgcHJvdGVjdGVkIGdldFJvb3REb21Ob2RlKCkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5yb290RG9tSUQpO1xuICAgICAgICBpbnZhcmlhbnQobm9kZSwgYE5vZGUgJyR7dGhpcy5yb290RG9tSUR9IG5vdCBmb3VuZCFgKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFByb3BzKCk6IE1pbmRQcm9wcyB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHJvb3RzLFxuICAgICAgICB9ID0gdGhpcy5kYXRhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm9vdHMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc01vdW50ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucm9vdERvbUlEO1xuICAgIH1cblxuICAgIC8vPEdHRWRpdG9yPlxuICAgIC8vICAgPE1pbmQgc3R5bGU9e3sgd2lkdGg6IDUwMCwgaGVpZ2h0OiA1MDAgfX0gZGF0YT17ZGF0YX0gLz5cbiAgICAvLzwvR0dFZGl0b3I+XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgICAgICAgY29uc3QgbWluZCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWluZCwgeyBkYXRhOiB0aGlzLmdldFByb3BzKCksIHN0eWxlOiB7IC4uLnRoaXMuc3R5bGUgfSB9KTtcbiAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEdHRWRpdG9yLCB7fSwgbWluZCksIHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb290RG9tSUQgPSB1dWlkLnYxKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICAvLyBlLm9uKCdtZXNzYWdlJywgbWVzc2FnZSA9PiB7XG4gICAgICAgIC8vICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZS50ZXh0XG4gICAgICAgIC8vICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKClcbiAgICAgICAgLy8gICB0aGlzLnJldHVybk1lc3NhZ2VUb1JlYWN0V2hlblJlY2VpdmVkKClcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICByZXR1cm5NZXNzYWdlVG9SZWFjdFdoZW5SZWNlaXZlZCgpIHtcbiAgICAgICAgLy8gZS5lbWl0KCdyZWNlaXZlZCcsIHsgdGV4dDogJ1dvb2hvbyEgSGVsbG8gZnJvbSBBbmd1bGFyISDwn46JJyB9KVxuICAgIH1cbn1cbiJdfQ==