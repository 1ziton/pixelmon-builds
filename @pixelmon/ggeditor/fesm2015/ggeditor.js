import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import GGEditor, { Flow, Mind } from 'gg-editor';
import * as invariant_ from 'invariant';
import { createElement } from 'react';
import { render } from 'react-dom';
import { v1 } from 'uuid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const invariant = invariant_;
class FlowEditorComponent {
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
            const flow = createElement(Flow, { data: this.getProps(), style: Object.assign({}, this.style) });
            render(createElement(GGEditor, {}, flow), this.getRootDomNode());
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rootDomID = v1();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const invariant$1 = invariant_;
class MindEditorComponent {
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
        invariant$1(node, `Node '${this.rootDomID} not found!`);
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
            const mind = createElement(Mind, { data: this.getProps(), style: Object.assign({}, this.style) });
            render(createElement(GGEditor, {}, mind), this.getRootDomNode());
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rootDomID = v1();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PixelmonGGEditorModule {
}
PixelmonGGEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [FlowEditorComponent, MindEditorComponent],
                exports: [FlowEditorComponent, MindEditorComponent]
            },] }
];

export { PixelmonGGEditorModule, FlowEditorComponent as ɵa, MindEditorComponent as ɵb };
//# sourceMappingURL=ggeditor.js.map
