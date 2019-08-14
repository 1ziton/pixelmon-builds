import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { __assign } from 'tslib';
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
    // <GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    // <GGEditor>
    //   <Flow style={{ width: 500, height: 500 }} data={data} />
    // </GGEditor>
    /**
     * @protected
     * @return {?}
     */
    FlowEditorComponent.prototype.render = 
    // <GGEditor>
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
            var flow = createElement(Flow, { data: this.getProps(), style: __assign({}, this.style) });
            render(createElement(GGEditor, {}, flow), this.getRootDomNode());
        }
    };
    /**
     * @return {?}
     */
    FlowEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rootDomID = v1();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var invariant$1 = invariant_;
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
        invariant$1(node, "Node '" + this.rootDomID + " not found!");
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
            var mind = createElement(Mind, { data: this.getProps(), style: __assign({}, this.style) });
            render(createElement(GGEditor, {}, mind), this.getRootDomNode());
        }
    };
    /**
     * @return {?}
     */
    MindEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rootDomID = v1();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PixelmonGGEditorModule = /** @class */ (function () {
    function PixelmonGGEditorModule() {
    }
    PixelmonGGEditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [FlowEditorComponent, MindEditorComponent],
                    exports: [FlowEditorComponent, MindEditorComponent]
                },] }
    ];
    return PixelmonGGEditorModule;
}());

export { PixelmonGGEditorModule, FlowEditorComponent as ɵa, MindEditorComponent as ɵb };
//# sourceMappingURL=ggeditor.js.map
