import { CommonModule } from '@angular/common';
import { Component, Input as Input$1, NgModule } from '@angular/core';
import { __extends, __assign, __decorate, __metadata } from 'tslib';
import { InputBoolean } from '@pixelmon/util';
import GGEditor, { Minimap, Command, NodeMenu, EdgeMenu, GroupMenu, MultiMenu, CanvasMenu, ContextMenu, Toolbar, ItemPanel, Item as Item$1, withPropsAPI, DetailPanel, NodePanel, EdgePanel, GroupPanel, MultiPanel, CanvasPanel, Flow, Mind } from 'gg-editor';
import * as invariant_ from 'invariant';
import React__default, { createElement, Fragment } from 'react';
import { render } from 'react-dom';
import { v1 } from 'uuid';
import { Card, Icon, Tooltip, Divider, Form, Select, Input, Row, Col } from 'antd';

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
    return React__default.createElement(Card, { type: "inner", size: "small", title: "Minimap", bordered: false, key: 'minimap-panel' }, React__default.createElement(Minimap, { height: 200 }));
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
var IconFont = Icon.createFromIconfontCN({
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
    var spanNode = React__default.createElement('span', { key: 'span' }, spanText);
    /** @type {?} */
    var divNode = React__default.createElement('div', { className: 'menu-item' }, [
        React__default.createElement(IconFont, { type: "icon-" + (icon || command), key: 'icon' }),
        spanNode,
    ]);
    return React__default.createElement(Command, { name: command, key: key || command }, divNode);
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
    var NodeMenuEl = createElement(NodeMenu, { key: 'nodemenu' }, [menuItemGenerate({ command: 'copy' }), menuItemGenerate({ command: 'delete' })]);
    /** @type {?} */
    var EdgeMenuEl = createElement(EdgeMenu, { key: 'edgemenu' }, menuItemGenerate({ command: 'delete' }));
    /** @type {?} */
    var GroupMenuEl = createElement(GroupMenu, { key: 'groupmenu' }, [
        menuItemGenerate({ command: 'copy' }),
        menuItemGenerate({ command: 'delete' }),
        menuItemGenerate({ command: 'unGroup', text: 'Ungroup', icon: 'ungroup' }),
    ]);
    /** @type {?} */
    var MultiMenuEl = createElement(MultiMenu, { key: 'multimenu' }, [
        menuItemGenerate({ command: 'copy' }),
        menuItemGenerate({ command: 'paste' }),
        menuItemGenerate({ command: 'delete' }),
        menuItemGenerate({ command: 'unGroup', text: 'Ungroup', icon: 'ungroup' }),
    ]);
    /** @type {?} */
    var CanvasMenuEl = createElement(CanvasMenu, { key: 'canvasmenu' }, [
        menuItemGenerate({ command: 'undo' }),
        menuItemGenerate({ command: 'redo' }),
        menuItemGenerate({ command: 'pasteHere', text: 'Paste Here', icon: 'paste' }),
    ]);
    return createElement(ContextMenu, { className: 'context-menu', key: 'context-menu' }, [
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
    return React__default.createElement(Command, { name: command, key: key || command }, React__default.createElement(Tooltip, { title: text, placement: 'bottom', overlayClassName: 'tooltip' }, React__default.createElement(IconFont, { type: "icon-" + (icon || command) })));
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
    return React__default.createElement(Toolbar, { className: 'toolbar' }, [
        ToolbarButton({ command: 'undo', key: 'undo1' }),
        ToolbarButton({ command: 'redo', key: 'redo2' }),
        React__default.createElement(Divider, { type: 'vertical', key: 'vertical1' }),
        ToolbarButton({ command: 'copy', key: 'copy' }),
        ToolbarButton({ command: 'paste', key: 'paste' }),
        ToolbarButton({ command: 'delete', key: 'delete' }),
        React__default.createElement(Divider, { type: 'vertical', key: 'vertical4' }),
        ToolbarButton({ command: 'zoomIn', icon: 'zoom-in', text: 'Zoom In', key: 'zoomIn' }),
        ToolbarButton({ command: 'zoomOut', icon: 'zoom-out', text: 'Zoom Out', key: 'zoomOut' }),
        ToolbarButton({ command: 'autoZoom', icon: 'fit-map', text: 'Auto Zoom', key: 'autoZoom' }),
        ToolbarButton({ command: 'resetZoom', icon: 'actual-size', text: 'Actual Size', key: 'resetZoom' }),
        React__default.createElement(Divider, { type: 'vertical', key: 'vertical2' }),
        ToolbarButton({ command: 'toBack', icon: 'to-back', text: 'To Back', key: 'toBack' }),
        ToolbarButton({ command: 'toFront', icon: 'to-front', text: 'To Front', key: 'toFront' }),
        React__default.createElement(Divider, { type: 'vertical', key: 'vertical3' }),
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
    return React__default.createElement(ItemPanel, { className: 'item-panel' }, React__default.createElement(Card, { bordered: false, key: 'item-panel-card' }, [
        React__default.createElement(Item$1, {
            type: 'node',
            size: '72*72',
            shape: 'flow-circle',
            model: { color: '#FA8C16', lable: 'Start' },
            key: 'circle',
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIzNiIgY3k9IjM2IiByPSIzNiIvPjxmaWx0ZXIgeD0iLTkuNyUiIHk9Ii02LjklIiB3aWR0aD0iMTE5LjQlIiBoZWlnaHQ9IjExOS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRkZGMkU4IiB4bGluazpocmVmPSIjYiIvPjxjaXJjbGUgc3Ryb2tlPSIjRkZDMDY5IiBjeD0iMzYiIGN5PSIzNiIgcj0iMzUuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyMyIgeT0iNDEiPlN0YXJ0PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
        }),
        React__default.createElement(Item$1, {
            type: 'node',
            size: '80*48',
            shape: 'flow-rect',
            model: { color: '#1890FF', lable: 'Normal' },
            key: 'rect',
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSI0Ii8+PGZpbHRlciB4PSItOC44JSIgeT0iLTEwLjQlIiB3aWR0aD0iMTE3LjUlIiBoZWlnaHQ9IjEyOS4yJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPjxyZWN0IHN0cm9rZT0iIzE4OTBGRiIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzkiIGhlaWdodD0iNDciIHJ4PSI0Ii8+PC9nPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHRzcGFuIHg9IjIxIiB5PSIyOSI+Tm9ybWFsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
        }),
        React__default.createElement(Item$1, {
            type: 'node',
            size: '80*72',
            shape: 'flow-rhombus',
            model: { color: '#1890FF', lable: 'Decision' },
            key: 'rhombus',
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00Mi42NyAxLjY3bDM0Ljk2NSAzMS4zNTJhNCA0IDAgMCAxIDAgNS45NTZMNDIuNjcgNzAuMzNhNCA0IDAgMCAxLTUuMzQgMEwyLjM2NSAzOC45NzhhNCA0IDAgMCAxIDAtNS45NTZMMzcuMzMgMS42N2E0IDQgMCAwIDEgNS4zNCAweiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii04LjglIiB5PSItNi45JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMTkuNCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAxKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0U2RkZGQiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiM1Q0RCRDMiIGQ9Ik00Mi4zMzcgMi4wNDJhMy41IDMuNSAwIDAgMC00LjY3NCAwTDIuNjk4IDMzLjM5NGEzLjUgMy41IDAgMCAwIDAgNS4yMTJsMzQuOTY1IDMxLjM1MmEzLjUgMy41IDAgMCAwIDQuNjc0IDBsMzQuOTY1LTMxLjM1MmEzLjUgMy41IDAgMCAwIDAtNS4yMTJMNDIuMzM3IDIuMDQyeiIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMSkiPjx0c3BhbiB4PSIxOCIgeT0iNDIiPkRlY2lzaW9uPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
        }),
        React__default.createElement(Item$1, {
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
var Item = Form.Item;
var Option = Select.Option;
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
            return React__default.createElement(Select, { onChange: _this.handleSubmit, key: 'edgeshapselect' }, [
                React__default.createElement(Option, { value: 'flow-smooth', key: 'smooth' }, 'Smooth'),
                React__default.createElement(Option, { value: 'flow-polyline', key: 'polyline' }, 'Polyline'),
                React__default.createElement(Option, { value: 'flow-polyline-round', key: 'pround' }, 'Polyline Round'),
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
            return React__default.createElement((/** @type {?} */ (Item)), __assign({ label: 'Label' }, inlineFormItemLayout, { key: 'nodedetailitem' }), form.getFieldDecorator('label', {
                initialValue: label,
                key: 'nodedetaillabel',
            })(React__default.createElement(Input, { onBlur: _this.handleSubmit, key: 'nodedetaillabel-input' })));
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
            return React__default.createElement((/** @type {?} */ (Item)), __assign({ label: 'Shape' }, inlineFormItemLayout, { key: 'shapitem' }), form.getFieldDecorator('shape', {
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
            return React__default.createElement((/** @type {?} */ (Fragment)), { key: 'fagment' }, [_this.renderNodeDetail(), _this.shapeItem()]);
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
            return React__default.createElement((/** @type {?} */ (Item)), __assign({ label: 'Label' }, inlineFormItemLayout), [
                form.getFieldDecorator('label', {
                    initialValue: label,
                    key: 'groupdetailitem',
                }),
                React__default.createElement(Input, { onBlur: _this.handleSubmit, key: 'input' }),
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
        return React__default.createElement(Card, { type: 'inner', size: 'small', title: type, bordered: false }, React__default.createElement(Form, { onSubmit: this.handleSubmit }, detailNode));
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
}(React__default.Component));
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
var DetailForm$1 = Form.create()(withPropsAPI(DetailForm));

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
    return React__default.createElement(DetailPanel, { className: 'detail-panel', key: 'detail-panel' }, [
        React__default.createElement(NodePanel, { key: 'node' }, React__default.createElement((/** @type {?} */ (DetailForm$1)), { type: 'node' })),
        React__default.createElement(EdgePanel, { key: 'edge' }, React__default.createElement((/** @type {?} */ (DetailForm$1)), { type: 'edge' })),
        React__default.createElement(GroupPanel, { key: 'group' }, React__default.createElement((/** @type {?} */ (DetailForm$1)), { type: 'group' })),
        React__default.createElement(MultiPanel, { key: 'multiinner' }, React__default.createElement(Card, { type: 'inner' })),
        React__default.createElement(CanvasPanel, { key: 'canvasinner' }, React__default.createElement(Card, { type: 'inner' })),
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
    return React__default.createElement(GGEditor, { className: 'editor' }, [
        React__default.createElement(Row, { type: 'flex', className: 'editorHd', key: 'editorHd' }, React__default.createElement(Col, { span: 24 }, FlowToolbar())),
        React__default.createElement(Row, { type: 'flex', className: 'editorBd', key: 'editorBd' }, [
            React__default.createElement(Col, { span: 4, className: 'editorSidebar', key: 'editorSidebar' }, FlowItemPanel()),
            React__default.createElement(Col, { span: 16, className: 'editorContent', key: 'editorContent' }, React__default.createElement(Flow, { data: data, style: { width: '100%', height: '100%' } })),
            React__default.createElement(Col, { span: 4, className: 'minimap', key: 'minimap' }, [FlowDetailPanel(), EditorMinimap()]),
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
/** @type {?} */
var invariant = invariant_;
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
        invariant(node, "Node '" + this.rootDomID + " not found!");
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
        var flow = createElement(Flow, { data: this.getProps(), style: __assign({}, this.style) });
        render(createElement(GGEditor, {}, flow), this.getRootDomNode());
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.renderFlowEditor = /**
     * @return {?}
     */
    function () {
        render(createElement(FlowPage, { data: this.getProps() }), this.getRootDomNode());
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.renderMind = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mind = createElement(Mind, { data: this.getProps(), style: __assign({}, this.style) });
        render(createElement(GGEditor, {}, mind), this.getRootDomNode());
    };
    /**
     * @return {?}
     */
    GGEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rootDomID = v1();
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
                    styles: [".ggeditor-flowpage{height:100%;width:100%}.ggeditor-flowpage .editor{display:flex;flex:1;flex-direction:column;width:100%;height:100%;background:#fff}.ggeditor-flowpage .editor .context-menu{display:none;overflow:hidden;background:#fff;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.15)}.ggeditor-flowpage .editor .context-menu .menu-item{display:flex;align-items:center;padding:5px 12px;cursor:pointer;transition:.3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ggeditor-flowpage .editor .context-menu .menu-item:hover{background:#e6f7ff}.ggeditor-flowpage .editor .context-menu .menu-item i{margin-right:8px}.ggeditor-flowpage .editor .context-menu ::ng-deep .disable .item{color:rgba(0,0,0,.25);cursor:auto}.ggeditor-flowpage .editor .context-menu ::ng-deep .disable .item:hover{background:#fff}.ggeditor-flowpage .editor .toolbar{display:flex;align-items:center}.ggeditor-flowpage .editor .toolbar .command i{display:inline-block;width:27px;height:27px;margin:0 6px;padding-top:6px;text-align:center;border:1px solid #fff;cursor:pointer}.ggeditor-flowpage .editor .toolbar .command i:hover{border:1px solid #e6e9ed}.ggeditor-flowpage .editor .toolbar .disable i{color:rgba(0,0,0,.25);cursor:auto}.ggeditor-flowpage .editor .toolbar .disable i:hover{border:1px solid #fff}.ggeditor-flowpage .editor .tooltip .ant-tooltip-inner{font-size:12px;border-radius:0}.ggeditor-flowpage .editor .item-panel{flex:1;background:#fafafa}.ggeditor-flowpage .editor .item-panel .ant-card{background:#fafafa}.ggeditor-flowpage .editor .item-panel .ant-card-body{display:flex;flex-direction:column;align-items:center}.ggeditor-flowpage .editor .item-panel .ant-card-body>div{margin-bottom:16px}.ggeditor-flowpage .editor .detail-panel{flex:1;background:#fafafa}.ggeditor-flowpage .editor .detail-panel .ant-card{background:#fafafa}.ggeditor-flowpage .editorHd{padding:8px;border:1px solid #e6e9ed}.ggeditor-flowpage .editorBd{flex:1}.ggeditor-flowpage .editorContent,.ggeditor-flowpage .editorSidebar{display:flex;flex-direction:column}.ggeditor-flowpage .editorContent .graph-container,.ggeditor-flowpage .editorSidebar .graph-container{width:100%;height:100%}.ggeditor-flowpage .editorSidebar{background:#fafafa}.ggeditor-flowpage .editorSidebar:first-child{border-right:1px solid #e6e9ed}.ggeditor-flowpage .editorSidebar:last-child{border-left:1px solid #e6e9ed}.ggeditor-flowpage .flow,.ggeditor-flowpage .koni,.ggeditor-flowpage .mind{flex:1;height:0}"]
                }] }
    ];
    GGEditorComponent.propDecorators = {
        data: [{ type: Input$1 }],
        style: [{ type: Input$1 }],
        type: [{ type: Input$1 }],
        enableEditor: [{ type: Input$1 }],
        onLoadingChanged: [{ type: Input$1 }],
        onError: [{ type: Input$1 }]
    };
    __decorate([
        InputBoolean(),
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [GGEditorComponent],
                    exports: [GGEditorComponent],
                },] }
    ];
    return PixelmonGGEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PixelmonGGEditorModule, GGEditorComponent as ɵa };
//# sourceMappingURL=ggeditor.js.map
