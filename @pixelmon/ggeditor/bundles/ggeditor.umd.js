/**
 * @license ng-alain(cipchk@qq.com) v0.1.3
 * (c) 2019 giscafer(giscafer@outlook.com)
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('gg-editor'), require('invariant'), require('react'), require('react-dom'), require('uuid')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/ggeditor', ['exports', '@angular/common', '@angular/core', 'gg-editor', 'invariant', 'react', 'react-dom', 'uuid'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.ggeditor = {}), global.ng.common, global.ng.core, global.GGEditor, global.invariant, global.React, global.ReactDOM, global.uuid));
}(this, function (exports, common, core, GGEditor, invariant_, react, reactDom, uuid) { 'use strict';

    var GGEditor__default = 'default' in GGEditor ? GGEditor['default'] : GGEditor;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
                var flow = react.createElement(GGEditor.Flow, { data: this.getProps(), style: __assign({}, this.style) });
                reactDom.render(react.createElement(GGEditor__default, {}, flow), this.getRootDomNode());
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
        FlowEditorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ggeditor-flow',
                        template: "\n    <div [id]=\"rootDomID\" class=\"ggeditor-flow-container\"></div>\n\t"
                    }] }
        ];
        FlowEditorComponent.propDecorators = {
            data: [{ type: core.Input }],
            style: [{ type: core.Input }],
            onLoadingChanged: [{ type: core.Input }],
            onError: [{ type: core.Input }]
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
                var mind = react.createElement(GGEditor.Mind, { data: this.getProps(), style: __assign({}, this.style) });
                reactDom.render(react.createElement(GGEditor__default, {}, mind), this.getRootDomNode());
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
            { type: core.Component, args: [{
                        selector: 'ggeditor-mind',
                        template: "\n    <div [id]=\"rootDomID\" class=\"ggeditor-mind-container\"></div>\n\t"
                    }] }
        ];
        MindEditorComponent.propDecorators = {
            data: [{ type: core.Input }],
            style: [{ type: core.Input }],
            onLoadingChanged: [{ type: core.Input }],
            onError: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [FlowEditorComponent, MindEditorComponent],
                        exports: [FlowEditorComponent, MindEditorComponent]
                    },] }
        ];
        return PixelmonGGEditorModule;
    }());

    exports.PixelmonGGEditorModule = PixelmonGGEditorModule;
    exports.ɵa = FlowEditorComponent;
    exports.ɵb = MindEditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ggeditor.umd.js.map
