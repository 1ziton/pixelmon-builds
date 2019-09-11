/**
 * @Based on pixelmon(cipchk@qq.com) v0.1.7
 * (c) 2019 developer(developer@1ziton.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@pixelmon/util'), require('gg-editor'), require('react'), require('react-dom'), require('antd')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/ggeditor', ['exports', '@angular/common', '@angular/core', '@pixelmon/util', 'gg-editor', 'react', 'react-dom', 'antd'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.ggeditor = {}), global.ng.common, global.ng.core, global.pixelmon.util, global.GGEditor, global.React, global.ReactDOM, global.antd));
}(this, function (exports, common, core, util, GGEditor, React__default, reactDom, antd) { 'use strict';

    var GGEditor__default = 'default' in GGEditor ? GGEditor['default'] : GGEditor;
    var React__default__default = 'default' in React__default ? React__default['default'] : React__default;

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function FlowNode() { }
    if (false) {
        /** @type {?} */
        FlowNode.prototype.type;
        /** @type {?} */
        FlowNode.prototype.size;
        /** @type {?} */
        FlowNode.prototype.shape;
        /** @type {?} */
        FlowNode.prototype.color;
        /** @type {?} */
        FlowNode.prototype.label;
        /** @type {?} */
        FlowNode.prototype.x;
        /** @type {?} */
        FlowNode.prototype.y;
        /** @type {?} */
        FlowNode.prototype.id;
        /** @type {?} */
        FlowNode.prototype.index;
    }
    /**
     * @record
     */
    function FlowEdge() { }
    if (false) {
        /** @type {?} */
        FlowEdge.prototype.source;
        /** @type {?} */
        FlowEdge.prototype.sourceAnchor;
        /** @type {?} */
        FlowEdge.prototype.target;
        /** @type {?} */
        FlowEdge.prototype.targetAnchor;
        /** @type {?} */
        FlowEdge.prototype.id;
        /** @type {?} */
        FlowEdge.prototype.index;
    }
    /**
     * @record
     */
    function FlowProps() { }
    if (false) {
        /** @type {?} */
        FlowProps.prototype.nodes;
        /** @type {?} */
        FlowProps.prototype.edges;
    }
    /**
     * @record
     */
    function FlowStyle() { }
    if (false) {
        /** @type {?} */
        FlowStyle.prototype.height;
        /** @type {?|undefined} */
        FlowStyle.prototype.width;
    }
    /**
     * @record
     */
    function MindNode() { }
    if (false) {
        /** @type {?} */
        MindNode.prototype.label;
        /** @type {?|undefined} */
        MindNode.prototype.children;
    }
    /**
     * @record
     */
    function MindProps() { }
    if (false) {
        /** @type {?} */
        MindProps.prototype.roots;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EditorMinimap = (/**
     * @return {?}
     */
    function () {
        return React__default__default.createElement(antd.Card, { type: "inner", size: "small", title: "Minimap", bordered: false, key: 'minimap-panel' }, React__default__default.createElement(GGEditor.Minimap, { height: 200 }));
        //   return (
        //     <Card type="inner" size="small" title="Minimap" bordered={false}>
        //       <Minimap height={200} />
        //     </Card>
        //   );
    });
    var ɵ0 = EditorMinimap;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var IconFont = antd.Icon.createFromIconfontCN({
        scriptUrl: 'https://at.alicdn.com/t/font_1101588_01zniftxm9yp.js',
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var menuItemGenerate = (/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var command = _a.command, text = _a.text, icon = _a.icon, key = _a.key;
        /** @type {?} */
        var spanText = text || command;
        /** @type {?} */
        var spanNode = React__default__default.createElement('span', { key: 'span' }, spanText);
        /** @type {?} */
        var divNode = React__default__default.createElement('div', { className: 'menu-item' }, [
            React__default__default.createElement(IconFont, { type: "icon-" + (icon || command), key: 'icon' }),
            spanNode,
        ]);
        return React__default__default.createElement(GGEditor.Command, { name: command, key: key || command }, divNode);
    });
    var ɵ0$1 = menuItemGenerate;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FlowContextMenu = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var NodeMenuEl = React__default.createElement(GGEditor.NodeMenu, { key: 'nodemenu' }, [menuItemGenerate({ command: 'copy' }), menuItemGenerate({ command: 'delete' })]);
        /** @type {?} */
        var EdgeMenuEl = React__default.createElement(GGEditor.EdgeMenu, { key: 'edgemenu' }, menuItemGenerate({ command: 'delete' }));
        /** @type {?} */
        var GroupMenuEl = React__default.createElement(GGEditor.GroupMenu, { key: 'groupmenu' }, [
            menuItemGenerate({ command: 'copy' }),
            menuItemGenerate({ command: 'delete' }),
            menuItemGenerate({ command: 'unGroup', text: 'Ungroup', icon: 'ungroup' }),
        ]);
        /** @type {?} */
        var MultiMenuEl = React__default.createElement(GGEditor.MultiMenu, { key: 'multimenu' }, [
            menuItemGenerate({ command: 'copy' }),
            menuItemGenerate({ command: 'paste' }),
            menuItemGenerate({ command: 'delete' }),
            menuItemGenerate({ command: 'unGroup', text: 'Ungroup', icon: 'ungroup' }),
        ]);
        /** @type {?} */
        var CanvasMenuEl = React__default.createElement(GGEditor.CanvasMenu, { key: 'canvasmenu' }, [
            menuItemGenerate({ command: 'undo' }),
            menuItemGenerate({ command: 'redo' }),
            menuItemGenerate({ command: 'pasteHere', text: 'Paste Here', icon: 'paste' }),
        ]);
        return React__default.createElement(GGEditor.ContextMenu, { className: 'context-menu', key: 'context-menu' }, [
            NodeMenuEl,
            EdgeMenuEl,
            GroupMenuEl,
            MultiMenuEl,
            CanvasMenuEl,
        ]);
    });
    var ɵ0$2 = FlowContextMenu;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import styles from './index.less';
    /** @type {?} */
    var ToolbarButton = (/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var command = _a.command, text = _a.text, icon = _a.icon, key = _a.key;
        return React__default__default.createElement(GGEditor.Command, { name: command, key: key || command }, React__default__default.createElement(antd.Tooltip, { title: text, placement: 'bottom', overlayClassName: 'tooltip' }, React__default__default.createElement(IconFont, { type: "icon-" + (icon || command) })));
        //   return (
        //     <Command name={command}>
        //       <Tooltip
        //         title={text || upperFirst(command)}
        //         placement="bottom"
        //         overlayClassName={styles.tooltip}
        //       >
        //         <IconFont type={`icon-${icon || command}`} />
        //       </Tooltip>
        //     </Command>
        //   );
    });
    var ɵ0$3 = ToolbarButton;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import styles from './index.less';
    //
    /** @type {?} */
    var FlowToolbar = (/**
     * @return {?}
     */
    function () {
        return React__default__default.createElement(GGEditor.Toolbar, { className: 'toolbar' }, [
            ToolbarButton({ command: 'undo', key: 'undo1' }),
            ToolbarButton({ command: 'redo', key: 'redo2' }),
            React__default__default.createElement(antd.Divider, { type: 'vertical', key: 'vertical1' }),
            ToolbarButton({ command: 'copy', key: 'copy' }),
            ToolbarButton({ command: 'paste', key: 'paste' }),
            ToolbarButton({ command: 'delete', key: 'delete' }),
            React__default__default.createElement(antd.Divider, { type: 'vertical', key: 'vertical4' }),
            ToolbarButton({ command: 'zoomIn', icon: 'zoom-in', text: 'Zoom In', key: 'zoomIn' }),
            ToolbarButton({ command: 'zoomOut', icon: 'zoom-out', text: 'Zoom Out', key: 'zoomOut' }),
            ToolbarButton({ command: 'autoZoom', icon: 'fit-map', text: 'Auto Zoom', key: 'autoZoom' }),
            ToolbarButton({ command: 'resetZoom', icon: 'actual-size', text: 'Actual Size', key: 'resetZoom' }),
            React__default__default.createElement(antd.Divider, { type: 'vertical', key: 'vertical2' }),
            ToolbarButton({ command: 'toBack', icon: 'to-back', text: 'To Back', key: 'toBack' }),
            ToolbarButton({ command: 'toFront', icon: 'to-front', text: 'To Front', key: 'toFront' }),
            React__default__default.createElement(antd.Divider, { type: 'vertical', key: 'vertical3' }),
            ToolbarButton({ command: 'multiSelect', icon: 'multi-select', text: 'Multi Select', key: 'multiSelect' }),
            ToolbarButton({ command: 'addGroup', icon: 'group', text: 'Add Group', key: 'addGroup' }),
            ToolbarButton({ command: 'unGroup', icon: 'ungroup', text: 'Ungroup', key: 'unGroup' }),
        ]);
        //   return (
        //     <Toolbar className={styles.toolbar}>
        //       <ToolbarButton command="undo" />
        //       <ToolbarButton command="redo" />
        //       <Divider type="vertical" />
        //       <ToolbarButton command="copy" />
        //       <ToolbarButton command="paste" />
        //       <ToolbarButton command="delete" />
        //       <Divider type="vertical" />
        //       <ToolbarButton command="zoomIn" icon="zoom-in" text="Zoom In" />
        //       <ToolbarButton command="zoomOut" icon="zoom-out" text="Zoom Out" />
        //       <ToolbarButton command="autoZoom" icon="fit-map" text="Fit Map" />
        //       <ToolbarButton command="resetZoom" icon="actual-size" text="Actual Size" />
        //       <Divider type="vertical" />
        //       <ToolbarButton command="toBack" icon="to-back" text="To Back" />
        //       <ToolbarButton command="toFront" icon="to-front" text="To Front" />
        //       <Divider type="vertical" />
        //       <ToolbarButton command="multiSelect" icon="multi-select" text="Multi Select" />
        //       <ToolbarButton command="addGroup" icon="group" text="Add Group" />
        //       <ToolbarButton command="unGroup" icon="ungroup" text="Ungroup" />
        //     </Toolbar>
        //   );
    });
    var ɵ0$4 = FlowToolbar;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import styles from './index.less';
    /** @type {?} */
    var FlowItemPanel = (/**
     * @return {?}
     */
    function () {
        return React__default__default.createElement(GGEditor.ItemPanel, { className: 'item-panel' }, React__default__default.createElement(antd.Card, { bordered: false, key: 'item-panel-card' }, [
            React__default__default.createElement(GGEditor.Item, {
                type: 'node',
                size: '72*72',
                shape: 'flow-circle',
                model: { color: '#FA8C16', lable: 'Start' },
                key: 'circle',
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIzNiIgY3k9IjM2IiByPSIzNiIvPjxmaWx0ZXIgeD0iLTkuNyUiIHk9Ii02LjklIiB3aWR0aD0iMTE5LjQlIiBoZWlnaHQ9IjExOS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRkZGMkU4IiB4bGluazpocmVmPSIjYiIvPjxjaXJjbGUgc3Ryb2tlPSIjRkZDMDY5IiBjeD0iMzYiIGN5PSIzNiIgcj0iMzUuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyMyIgeT0iNDEiPlN0YXJ0PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
            }),
            React__default__default.createElement(GGEditor.Item, {
                type: 'node',
                size: '80*48',
                shape: 'flow-rect',
                model: { color: '#1890FF', lable: 'Normal' },
                key: 'rect',
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSI0Ii8+PGZpbHRlciB4PSItOC44JSIgeT0iLTEwLjQlIiB3aWR0aD0iMTE3LjUlIiBoZWlnaHQ9IjEyOS4yJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPjxyZWN0IHN0cm9rZT0iIzE4OTBGRiIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzkiIGhlaWdodD0iNDciIHJ4PSI0Ii8+PC9nPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHRzcGFuIHg9IjIxIiB5PSIyOSI+Tm9ybWFsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
            }),
            React__default__default.createElement(GGEditor.Item, {
                type: 'node',
                size: '80*72',
                shape: 'flow-rhombus',
                model: { color: '#1890FF', lable: 'Decision' },
                key: 'rhombus',
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00Mi42NyAxLjY3bDM0Ljk2NSAzMS4zNTJhNCA0IDAgMCAxIDAgNS45NTZMNDIuNjcgNzAuMzNhNCA0IDAgMCAxLTUuMzQgMEwyLjM2NSAzOC45NzhhNCA0IDAgMCAxIDAtNS45NTZMMzcuMzMgMS42N2E0IDQgMCAwIDEgNS4zNCAweiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii04LjglIiB5PSItNi45JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMTkuNCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAxKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0U2RkZGQiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiM1Q0RCRDMiIGQ9Ik00Mi4zMzcgMi4wNDJhMy41IDMuNSAwIDAgMC00LjY3NCAwTDIuNjk4IDMzLjM5NGEzLjUgMy41IDAgMCAwIDAgNS4yMTJsMzQuOTY1IDMxLjM1MmEzLjUgMy41IDAgMCAwIDQuNjc0IDBsMzQuOTY1LTMxLjM1MmEzLjUgMy41IDAgMCAwIDAtNS4yMTJMNDIuMzM3IDIuMDQyeiIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMSkiPjx0c3BhbiB4PSIxOCIgeT0iNDIiPkRlY2lzaW9uPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
            }),
            React__default__default.createElement(GGEditor.Item, {
                type: 'node',
                size: '80*48',
                shape: 'flow-capsule',
                model: { color: '#722ED1', lable: 'Model' },
                key: 'capsule',
                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSIyNCIvPjxmaWx0ZXIgeD0iLTguOCUiIHk9Ii0xMC40JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMjkuMiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0Y5RjBGRiIgeGxpbms6aHJlZj0iI2IiLz48cmVjdCBzdHJva2U9IiNCMzdGRUIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9Ijc5IiBoZWlnaHQ9IjQ3IiByeD0iMjMuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyNCIgeT0iMjkiPk1vZGVsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
            }),
        ]));
        //   return (
        //     <ItemPanel className={styles.itemPanel}>
        //       <Card bordered={false}>
        //         <Item
        //           type="node"
        //           size="72*72"
        //           shape="flow-circle"
        //           model={{
        //             color: '#FA8C16',
        //             label: 'Start',
        //           }}
        //           src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIzNiIgY3k9IjM2IiByPSIzNiIvPjxmaWx0ZXIgeD0iLTkuNyUiIHk9Ii02LjklIiB3aWR0aD0iMTE5LjQlIiBoZWlnaHQ9IjExOS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRkZGMkU4IiB4bGluazpocmVmPSIjYiIvPjxjaXJjbGUgc3Ryb2tlPSIjRkZDMDY5IiBjeD0iMzYiIGN5PSIzNiIgcj0iMzUuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyMyIgeT0iNDEiPlN0YXJ0PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="
        //         />
        //         <Item
        //           type="node"
        //           size="80*48"
        //           shape="flow-rect"
        //           model={{
        //             color: '#1890FF',
        //             label: 'Normal',
        //           }}
        //           src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSI0Ii8+PGZpbHRlciB4PSItOC44JSIgeT0iLTEwLjQlIiB3aWR0aD0iMTE3LjUlIiBoZWlnaHQ9IjEyOS4yJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPjxyZWN0IHN0cm9rZT0iIzE4OTBGRiIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzkiIGhlaWdodD0iNDciIHJ4PSI0Ii8+PC9nPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHRzcGFuIHg9IjIxIiB5PSIyOSI+Tm9ybWFsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="
        //         />
        //         <Item
        //           type="node"
        //           size="80*72"
        //           shape="flow-rhombus"
        //           model={{
        //             color: '#13C2C2',
        //             label: 'Decision',
        //           }}
        //           src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00Mi42NyAxLjY3bDM0Ljk2NSAzMS4zNTJhNCA0IDAgMCAxIDAgNS45NTZMNDIuNjcgNzAuMzNhNCA0IDAgMCAxLTUuMzQgMEwyLjM2NSAzOC45NzhhNCA0IDAgMCAxIDAtNS45NTZMMzcuMzMgMS42N2E0IDQgMCAwIDEgNS4zNCAweiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii04LjglIiB5PSItNi45JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMTkuNCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAxKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0U2RkZGQiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiM1Q0RCRDMiIGQ9Ik00Mi4zMzcgMi4wNDJhMy41IDMuNSAwIDAgMC00LjY3NCAwTDIuNjk4IDMzLjM5NGEzLjUgMy41IDAgMCAwIDAgNS4yMTJsMzQuOTY1IDMxLjM1MmEzLjUgMy41IDAgMCAwIDQuNjc0IDBsMzQuOTY1LTMxLjM1MmEzLjUgMy41IDAgMCAwIDAtNS4yMTJMNDIuMzM3IDIuMDQyeiIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMSkiPjx0c3BhbiB4PSIxOCIgeT0iNDIiPkRlY2lzaW9uPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="
        //         />
        //         <Item
        //           type="node"
        //           size="80*48"
        //           shape="flow-capsule"
        //           model={{
        //             color: '#722ED1',
        //             label: 'Model',
        //           }}
        //           src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSIyNCIvPjxmaWx0ZXIgeD0iLTguOCUiIHk9Ii0xMC40JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMjkuMiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0Y5RjBGRiIgeGxpbms6aHJlZj0iI2IiLz48cmVjdCBzdHJva2U9IiNCMzdGRUIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9Ijc5IiBoZWlnaHQ9IjQ3IiByeD0iMjMuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyNCIgeT0iMjkiPk1vZGVsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="
        //         />
        //       </Card>
        //     </ItemPanel>
        //   );
    });
    var ɵ0$5 = FlowItemPanel;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Item = antd.Form.Item;
    var Option = antd.Select.Option;
    /** @type {?} */
    var inlineFormItemLayout = {
        labelCol: {
            sm: { span: 8 },
        },
        wrapperCol: {
            sm: { span: 16 },
        },
    };
    var DetailForm = /** @class */ (function (_super) {
        __extends(DetailForm, _super);
        function DetailForm() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleSubmit = (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (e && e.preventDefault) {
                    e.preventDefault();
                }
                var _a = (/** @type {?} */ (_this.props)), form = _a.form, propsAPI = _a.propsAPI;
                var getSelected = propsAPI.getSelected, executeCommand = propsAPI.executeCommand, update = propsAPI.update;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    form.validateFieldsAndScroll((/**
                     * @param {?} err
                     * @param {?} values
                     * @return {?}
                     */
                    function (err, values) {
                        if (err) {
                            return;
                        }
                        /** @type {?} */
                        var item = getSelected()[0];
                        if (!item) {
                            return;
                        }
                        executeCommand((/**
                         * @return {?}
                         */
                        function () {
                            update(item, __assign({}, values));
                        }));
                    }));
                }), 0);
            });
            _this.renderEdgeShapeSelect = (/**
             * @return {?}
             */
            function () {
                return React__default__default.createElement(antd.Select, { onChange: _this.handleSubmit, key: 'edgeshapselect' }, [
                    React__default__default.createElement(Option, { value: 'flow-smooth', key: 'smooth' }, 'Smooth'),
                    React__default__default.createElement(Option, { value: 'flow-polyline', key: 'polyline' }, 'Polyline'),
                    React__default__default.createElement(Option, { value: 'flow-polyline-round', key: 'pround' }, 'Polyline Round'),
                ]);
                // return (
                //   <Select onChange={this.handleSubmit}>
                //     <Option value="flow-smooth">Smooth</Option>
                //     <Option value="flow-polyline">Polyline</Option>
                //     <Option value="flow-polyline-round">Polyline Round</Option>
                //   </Select>
                // );
            });
            _this.renderNodeDetail = (/**
             * @return {?}
             */
            function () {
                var form = (/** @type {?} */ (_this.props)).form;
                var label = _this.item.getModel().label;
                return React__default__default.createElement((/** @type {?} */ (Item)), __assign({ label: 'Label' }, inlineFormItemLayout, { key: 'nodedetailitem' }), form.getFieldDecorator('label', {
                    initialValue: label,
                    key: 'nodedetaillabel',
                })(React__default__default.createElement(antd.Input, { onBlur: _this.handleSubmit, key: 'nodedetaillabel-input' })));
                // return (
                //   <Item label= "Label" {...inlineFormItemLayout }>
                //     {
                //       form.getFieldDecorator('label', {
                //         initialValue: label,
                //       })(<Input onBlur={ this.handleSubmit } />)
                //     }
                //     < /Item>
                // );
            });
            _this.shapeItem = (/**
             * @return {?}
             */
            function () {
                var form = (/** @type {?} */ (_this.props)).form;
                var _a = _this.item.getModel().shape, shape = _a === void 0 ? 'flow-smooth' : _a;
                return React__default__default.createElement((/** @type {?} */ (Item)), __assign({ label: 'Shape' }, inlineFormItemLayout, { key: 'shapitem' }), form.getFieldDecorator('shape', {
                    initialValue: shape,
                    key: 'shapedetaillabel',
                })(_this.renderEdgeShapeSelect()));
            });
            _this.renderEdgeDetail = (/**
             * @return {?}
             */
            function () {
                // const { form } = this.props as any;
                // const { label = '', shape = 'flow-smooth' } = this.item.getModel();
                return React__default__default.createElement((/** @type {?} */ (React__default.Fragment)), { key: 'fagment' }, [_this.renderNodeDetail(), _this.shapeItem()]);
                // return (
                //   <Fragment>
                //   <Item label= "Label" {...inlineFormItemLayout }>
                //     {
                //       form.getFieldDecorator('label', {
                //         initialValue: label,
                //       })(<Input onBlur={ this.handleSubmit } />)
                //     }
                //     < /Item>
                //     < Item label = "Shape" {...inlineFormItemLayout }>
                //       {
                //         form.getFieldDecorator('shape', {
                //           initialValue: shape,
                //         })(this.renderEdgeShapeSelect())
                //       }
                //       < /Item>
                //       < /Fragment>
                // );
            });
            _this.renderGroupDetail = (/**
             * @return {?}
             */
            function () {
                var form = (/** @type {?} */ (_this.props)).form;
                var _a = _this.item.getModel().label, label = _a === void 0 ? '新建分组' : _a;
                return React__default__default.createElement((/** @type {?} */ (Item)), __assign({ label: 'Label' }, inlineFormItemLayout), [
                    form.getFieldDecorator('label', {
                        initialValue: label,
                        key: 'groupdetailitem',
                    }),
                    React__default__default.createElement(antd.Input, { onBlur: _this.handleSubmit, key: 'input' }),
                ]);
                // return (
                //   <Item label= "Label" {...inlineFormItemLayout }>
                //     {
                //       form.getFieldDecorator('label', {
                //         initialValue: label,
                //       })(<Input onBlur={ this.handleSubmit } />)
                //     }
                //     < /Item>
                // );
            });
            return _this;
        }
        Object.defineProperty(DetailForm.prototype, "item", {
            get: /**
             * @return {?}
             */
            function () {
                var propsAPI = (/** @type {?} */ (this.props)).propsAPI;
                return propsAPI.getSelected()[0];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DetailForm.prototype.render = /**
         * @return {?}
         */
        function () {
            var type = (/** @type {?} */ (this.props)).type;
            if (!this.item) {
                return null;
            }
            /** @type {?} */
            var detailNode;
            if (type === 'node') {
                detailNode = this.renderNodeDetail();
            }
            else if (type === 'edge') {
                detailNode = this.renderEdgeDetail();
            }
            else if (type === 'group') {
                detailNode = this.renderGroupDetail();
            }
            return React__default__default.createElement(antd.Card, { type: 'inner', size: 'small', title: type, bordered: false }, React__default__default.createElement(antd.Form, { onSubmit: this.handleSubmit }, detailNode));
            // return (
            //   <Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
            //     <Form onSubmit={this.handleSubmit}>
            //       {type === 'node' && this.renderNodeDetail()}
            //       {type === 'edge' && this.renderEdgeDetail()}
            //       {type === 'group' && this.renderGroupDetail()}
            //     </Form>
            //   </Card>
            // );
        };
        return DetailForm;
    }(React__default__default.Component));
    if (false) {
        /** @type {?} */
        DetailForm.prototype.handleSubmit;
        /** @type {?} */
        DetailForm.prototype.renderEdgeShapeSelect;
        /** @type {?} */
        DetailForm.prototype.renderNodeDetail;
        /** @type {?} */
        DetailForm.prototype.shapeItem;
        /** @type {?} */
        DetailForm.prototype.renderEdgeDetail;
        /** @type {?} */
        DetailForm.prototype.renderGroupDetail;
    }
    var DetailForm$1 = antd.Form.create()(GGEditor.withPropsAPI(DetailForm));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import styles from '../../styles/index.less';
    /** @type {?} */
    var FlowDetailPanel = (/**
     * @return {?}
     */
    function () {
        return React__default__default.createElement(GGEditor.DetailPanel, { className: 'detail-panel', key: 'detail-panel' }, [
            React__default__default.createElement(GGEditor.NodePanel, { key: 'node' }, React__default__default.createElement((/** @type {?} */ (DetailForm$1)), { type: 'node' })),
            React__default__default.createElement(GGEditor.EdgePanel, { key: 'edge' }, React__default__default.createElement((/** @type {?} */ (DetailForm$1)), { type: 'edge' })),
            React__default__default.createElement(GGEditor.GroupPanel, { key: 'group' }, React__default__default.createElement((/** @type {?} */ (DetailForm$1)), { type: 'group' })),
            React__default__default.createElement(GGEditor.MultiPanel, { key: 'multiinner' }, React__default__default.createElement(antd.Card, { type: 'inner' })),
            React__default__default.createElement(GGEditor.CanvasPanel, { key: 'canvasinner' }, React__default__default.createElement(antd.Card, { type: 'inner' })),
        ]);
        //   return (
        //     <DetailPanel className={styles.detailPanel}>
        //       <NodePanel>
        //         <DetailForm type="node" />
        //       </NodePanel>
        //       <EdgePanel>
        //         <DetailForm type="edge" />
        //       </EdgePanel>
        //       <GroupPanel>
        //         <DetailForm type="group" />
        //       </GroupPanel>
        //       <MultiPanel>
        //         <Card type="inner" size="small" title="Multi Select" bordered={false} />
        //       </MultiPanel>
        //       <CanvasPanel>
        //         <Card type="inner" size="small" title="Canvas" bordered={false} />
        //       </CanvasPanel>
        //     </DetailPanel>
        //   );
    });
    var ɵ0$6 = FlowDetailPanel;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import styles from './index.less';
    /** @type {?} */
    var FlowPage = (/**
     * @param {?} props
     * @return {?}
     */
    function (props) {
        var data = props.data;
        return React__default__default.createElement(GGEditor__default, { className: 'editor' }, [
            React__default__default.createElement(antd.Row, { type: 'flex', className: 'editorHd', key: 'editorHd' }, React__default__default.createElement(antd.Col, { span: 24 }, FlowToolbar())),
            React__default__default.createElement(antd.Row, { type: 'flex', className: 'editorBd', key: 'editorBd' }, [
                React__default__default.createElement(antd.Col, { span: 4, className: 'editorSidebar', key: 'editorSidebar' }, FlowItemPanel()),
                React__default__default.createElement(antd.Col, { span: 16, className: 'editorContent', key: 'editorContent' }, React__default__default.createElement(GGEditor.Flow, { data: data, style: { width: '100%', height: '100%' } })),
                React__default__default.createElement(antd.Col, { span: 4, className: 'minimap', key: 'minimap' }, [FlowDetailPanel(), EditorMinimap()]),
            ]),
            FlowContextMenu(),
        ]);
        //   return (
        //     <GGEditor className={styles.editor}>
        //       <Row type="flex" className={styles.editorHd}>
        //         <Col span={24}>
        //           <FlowToolbar />
        //         </Col>
        //       </Row>
        //       <Row type="flex" className={styles.editorBd}>
        //         <Col span={4} className={styles.editorSidebar}>
        //           <FlowItemPanel />
        //         </Col>
        //         <Col span={16} className={styles.editorContent}>
        //           <Flow className={styles.flow} />
        //         </Col>
        //         <Col span={4} className={styles.editorSidebar}>
        //           <FlowDetailPanel />
        //           <EditorMinimap />
        //         </Col>
        //       </Row>
        //       <FlowContextMenu />
        //     </GGEditor>
        //   );
    });
    var ɵ0$7 = FlowPage;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            return __assign({}, this.data);
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
            var flow = React__default.createElement(GGEditor.Flow, { data: this.getProps(), style: __assign({}, this.style) });
            reactDom.render(React__default.createElement(GGEditor__default, {}, flow), this.getRootDomNode());
        };
        /**
         * @return {?}
         */
        GGEditorComponent.prototype.renderFlowEditor = /**
         * @return {?}
         */
        function () {
            reactDom.render(React__default.createElement(FlowPage, { data: this.getProps() }), this.getRootDomNode());
        };
        /**
         * @return {?}
         */
        GGEditorComponent.prototype.renderMind = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var mind = React__default.createElement(GGEditor.Mind, { data: this.getProps(), style: __assign({}, this.style) });
            reactDom.render(React__default.createElement(GGEditor__default, {}, mind), this.getRootDomNode());
        };
        /**
         * @return {?}
         */
        GGEditorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.rootDomID = util.uuidv1();
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
            { type: core.Component, args: [{
                        selector: 'p-ggeditor',
                        template: "\n    <div [id]=\"rootDomID\" class=\"ggeditor-flowpage\"></div>\n  ",
                        styles: [".ggeditor-flowpage{width:100%;height:100%}.ggeditor-flowpage .editor{display:flex;flex:1;flex-direction:column;width:100%;height:100%;background:#fff}.ggeditor-flowpage .editor .context-menu{display:none;overflow:hidden;background:#fff;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.15)}.ggeditor-flowpage .editor .context-menu .menu-item{display:flex;align-items:center;padding:5px 12px;cursor:pointer;transition:.3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ggeditor-flowpage .editor .context-menu .menu-item:hover{background:#e6f7ff}.ggeditor-flowpage .editor .context-menu .menu-item i{margin-right:8px}.ggeditor-flowpage .editor .context-menu ::ng-deep .disable .item{color:rgba(0,0,0,.25);cursor:auto}.ggeditor-flowpage .editor .context-menu ::ng-deep .disable .item:hover{background:#fff}.ggeditor-flowpage .editor .toolbar{display:flex;align-items:center}.ggeditor-flowpage .editor .toolbar .command i{display:inline-block;width:27px;height:27px;margin:0 6px;padding-top:6px;text-align:center;border:1px solid #fff;cursor:pointer}.ggeditor-flowpage .editor .toolbar .command i:hover{border:1px solid #e6e9ed}.ggeditor-flowpage .editor .toolbar .disable i{color:rgba(0,0,0,.25);cursor:auto}.ggeditor-flowpage .editor .toolbar .disable i:hover{border:1px solid #fff}.ggeditor-flowpage .editor .tooltip .ant-tooltip-inner{font-size:12px;border-radius:0}.ggeditor-flowpage .editor .item-panel{flex:1;background:#fafafa}.ggeditor-flowpage .editor .item-panel .ant-card{background:#fafafa}.ggeditor-flowpage .editor .item-panel .ant-card-body{display:flex;flex-direction:column;align-items:center}.ggeditor-flowpage .editor .item-panel .ant-card-body>div{margin-bottom:16px}.ggeditor-flowpage .editor .detail-panel{flex:1;background:#fafafa}.ggeditor-flowpage .editor .detail-panel .ant-card{background:#fafafa}.ggeditor-flowpage .editorHd{padding:8px;border:1px solid #e6e9ed}.ggeditor-flowpage .editorBd{flex:1}.ggeditor-flowpage .editorContent,.ggeditor-flowpage .editorSidebar{display:flex;flex-direction:column}.ggeditor-flowpage .editorContent .graph-container,.ggeditor-flowpage .editorSidebar .graph-container{width:100%;height:100%}.ggeditor-flowpage .editorSidebar{background:#fafafa}.ggeditor-flowpage .editorSidebar:first-child{border-right:1px solid #e6e9ed}.ggeditor-flowpage .editorSidebar:last-child{border-left:1px solid #e6e9ed}.ggeditor-flowpage .flow,.ggeditor-flowpage .koni,.ggeditor-flowpage .mind{flex:1;height:0}"]
                    }] }
        ];
        GGEditorComponent.propDecorators = {
            data: [{ type: core.Input }],
            style: [{ type: core.Input }],
            type: [{ type: core.Input }],
            enableEditor: [{ type: core.Input }],
            onLoadingChanged: [{ type: core.Input }],
            onError: [{ type: core.Input }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], GGEditorComponent.prototype, "enableEditor", void 0);
        return GGEditorComponent;
    }());
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
                        declarations: [GGEditorComponent],
                        exports: [GGEditorComponent],
                    },] }
        ];
        return PixelmonGGEditorModule;
    }());

    exports.PixelmonGGEditorModule = PixelmonGGEditorModule;
    exports.ɵa = GGEditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ggeditor.umd.js.map
