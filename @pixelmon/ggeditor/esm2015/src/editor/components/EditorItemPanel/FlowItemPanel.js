/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import React from 'react';
import { Card } from 'antd';
import { ItemPanel, Item } from 'gg-editor';
// import styles from './index.less';
/** @type {?} */
const FlowItemPanel = (/**
 * @return {?}
 */
() => {
    return React.createElement(ItemPanel, { className: 'item-panel' }, React.createElement(Card, { bordered: false, key: 'item-panel-card' }, [
        React.createElement(Item, {
            type: 'node',
            size: '72*72',
            shape: 'flow-circle',
            model: { color: '#FA8C16', lable: 'Start' },
            key: 'circle',
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIzNiIgY3k9IjM2IiByPSIzNiIvPjxmaWx0ZXIgeD0iLTkuNyUiIHk9Ii02LjklIiB3aWR0aD0iMTE5LjQlIiBoZWlnaHQ9IjExOS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRkZGMkU4IiB4bGluazpocmVmPSIjYiIvPjxjaXJjbGUgc3Ryb2tlPSIjRkZDMDY5IiBjeD0iMzYiIGN5PSIzNiIgcj0iMzUuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyMyIgeT0iNDEiPlN0YXJ0PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
        }),
        React.createElement(Item, {
            type: 'node',
            size: '80*48',
            shape: 'flow-rect',
            model: { color: '#1890FF', lable: 'Normal' },
            key: 'rect',
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSI0Ii8+PGZpbHRlciB4PSItOC44JSIgeT0iLTEwLjQlIiB3aWR0aD0iMTE3LjUlIiBoZWlnaHQ9IjEyOS4yJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPjxyZWN0IHN0cm9rZT0iIzE4OTBGRiIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzkiIGhlaWdodD0iNDciIHJ4PSI0Ii8+PC9nPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHRzcGFuIHg9IjIxIiB5PSIyOSI+Tm9ybWFsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
        }),
        React.createElement(Item, {
            type: 'node',
            size: '80*72',
            shape: 'flow-rhombus',
            model: { color: '#1890FF', lable: 'Decision' },
            key: 'rhombus',
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00Mi42NyAxLjY3bDM0Ljk2NSAzMS4zNTJhNCA0IDAgMCAxIDAgNS45NTZMNDIuNjcgNzAuMzNhNCA0IDAgMCAxLTUuMzQgMEwyLjM2NSAzOC45NzhhNCA0IDAgMCAxIDAtNS45NTZMMzcuMzMgMS42N2E0IDQgMCAwIDEgNS4zNCAweiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii04LjglIiB5PSItNi45JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMTkuNCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAxKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0U2RkZGQiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiM1Q0RCRDMiIGQ9Ik00Mi4zMzcgMi4wNDJhMy41IDMuNSAwIDAgMC00LjY3NCAwTDIuNjk4IDMzLjM5NGEzLjUgMy41IDAgMCAwIDAgNS4yMTJsMzQuOTY1IDMxLjM1MmEzLjUgMy41IDAgMCAwIDQuNjc0IDBsMzQuOTY1LTMxLjM1MmEzLjUgMy41IDAgMCAwIDAtNS4yMTJMNDIuMzM3IDIuMDQyeiIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMSkiPjx0c3BhbiB4PSIxOCIgeT0iNDIiPkRlY2lzaW9uPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
        }),
        React.createElement(Item, {
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
const ɵ0 = FlowItemPanel;
export default FlowItemPanel;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvd0l0ZW1QYW5lbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9nZ2VkaXRvci8iLCJzb3VyY2VzIjpbInNyYy9lZGl0b3IvY29tcG9uZW50cy9FZGl0b3JJdGVtUGFuZWwvRmxvd0l0ZW1QYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7OztNQUd0QyxhQUFhOzs7QUFBRyxHQUFHLEVBQUU7SUFDekIsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUN4QixTQUFTLEVBQ1QsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEVBQzNCLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsRUFBRTtRQUNyRSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtZQUN4QixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLGFBQWE7WUFDcEIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1lBQzNDLEdBQUcsRUFBRSxRQUFRO1lBQ2IsR0FBRyxFQUNELG8xQ0FBbzFDO1NBQ3YxQyxDQUFDO1FBQ0YsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUM1QyxHQUFHLEVBQUUsTUFBTTtZQUNYLEdBQUcsRUFDRCxvNENBQW80QztTQUN2NEMsQ0FBQztRQUNGLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ3hCLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsY0FBYztZQUNyQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7WUFDOUMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQ0QsZ3FEQUFncUQ7U0FDbnFELENBQUM7UUFDRixLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtZQUN4QixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLGNBQWM7WUFDckIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1lBQzNDLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUNELHc0Q0FBdzRDO1NBQzM0QyxDQUFDO0tBQ0gsQ0FBQyxDQUNILENBQUM7SUFDRixhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHEyQ0FBcTJDO0lBQ3IyQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixxNUNBQXE1QztJQUNyNUMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsaXJEQUFpckQ7SUFDanJELGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHk1Q0FBeTVDO0lBQ3o1QyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixPQUFPO0FBQ1QsQ0FBQyxDQUFBOztBQUVELGVBQWUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEl0ZW1QYW5lbCwgSXRlbSB9IGZyb20gJ2dnLWVkaXRvcic7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubGVzcyc7XG5cbmNvbnN0IEZsb3dJdGVtUGFuZWwgPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIEl0ZW1QYW5lbCxcbiAgICB7IGNsYXNzTmFtZTogJ2l0ZW0tcGFuZWwnIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7IGJvcmRlcmVkOiBmYWxzZSwga2V5OiAnaXRlbS1wYW5lbC1jYXJkJyB9LCBbXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIHtcbiAgICAgICAgdHlwZTogJ25vZGUnLFxuICAgICAgICBzaXplOiAnNzIqNzInLFxuICAgICAgICBzaGFwZTogJ2Zsb3ctY2lyY2xlJyxcbiAgICAgICAgbW9kZWw6IHsgY29sb3I6ICcjRkE4QzE2JywgbGFibGU6ICdTdGFydCcgfSxcbiAgICAgICAga2V5OiAnY2lyY2xlJyxcbiAgICAgICAgc3JjOlxuICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPREFpSUdobGFXZG9kRDBpT0RBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanhqYVhKamJHVWdhV1E5SW1JaUlHTjRQU0l6TmlJZ1kzazlJak0ySWlCeVBTSXpOaUl2UGp4bWFXeDBaWElnZUQwaUxUa3VOeVVpSUhrOUlpMDJMamtsSWlCM2FXUjBhRDBpTVRFNUxqUWxJaUJvWldsbmFIUTlJakV4T1M0MEpTSWdabWxzZEdWeVZXNXBkSE05SW05aWFtVmpkRUp2ZFc1a2FXNW5RbTk0SWlCcFpEMGlZU0krUEdabFQyWm1jMlYwSUdSNVBTSXlJaUJwYmowaVUyOTFjbU5sUVd4d2FHRWlJSEpsYzNWc2REMGljMmhoWkc5M1QyWm1jMlYwVDNWMFpYSXhJaTgrUEdabFIyRjFjM05wWVc1Q2JIVnlJSE4wWkVSbGRtbGhkR2x2YmowaU1pSWdhVzQ5SW5Ob1lXUnZkMDltWm5ObGRFOTFkR1Z5TVNJZ2NtVnpkV3gwUFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWk4K1BHWmxRMjl0Y0c5emFYUmxJR2x1UFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWlCcGJqSTlJbE52ZFhKalpVRnNjR2hoSWlCdmNHVnlZWFJ2Y2owaWIzVjBJaUJ5WlhOMWJIUTlJbk5vWVdSdmQwSnNkWEpQZFhSbGNqRWlMejQ4Wm1WRGIyeHZjazFoZEhKcGVDQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQXVNRFFnTUNJZ2FXNDlJbk5vWVdSdmQwSnNkWEpQZFhSbGNqRWlMejQ4TDJacGJIUmxjajQ4TDJSbFpuTStQR2NnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNDhaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnMElESXBJajQ4ZFhObElHWnBiR3c5SWlNd01EQWlJR1pwYkhSbGNqMGlkWEpzS0NOaEtTSWdlR3hwYm1zNmFISmxaajBpSTJJaUx6NDhkWE5sSUdacGJHd3RiM0JoWTJsMGVUMGlMamt5SWlCbWFXeHNQU0lqUmtaR01rVTRJaUI0YkdsdWF6cG9jbVZtUFNJallpSXZQanhqYVhKamJHVWdjM1J5YjJ0bFBTSWpSa1pETURZNUlpQmplRDBpTXpZaUlHTjVQU0l6TmlJZ2NqMGlNelV1TlNJdlBqd3ZaejQ4ZEdWNGRDQm1iMjUwTFdaaGJXbHNlVDBpVUdsdVowWmhibWRUUXkxU1pXZDFiR0Z5TENCUWFXNW5SbUZ1WnlCVFF5SWdabTl1ZEMxemFYcGxQU0l4TWlJZ1ptbHNiRDBpSXpBd01DSWdabWxzYkMxdmNHRmphWFI1UFNJdU5qVWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RRZ01pa2lQangwYzNCaGJpQjRQU0l5TXlJZ2VUMGlOREVpUGxOMFlYSjBQQzkwYzNCaGJqNDhMM1JsZUhRK1BDOW5Qand2YzNablBnPT0nLFxuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIHtcbiAgICAgICAgdHlwZTogJ25vZGUnLFxuICAgICAgICBzaXplOiAnODAqNDgnLFxuICAgICAgICBzaGFwZTogJ2Zsb3ctcmVjdCcsXG4gICAgICAgIG1vZGVsOiB7IGNvbG9yOiAnIzE4OTBGRicsIGxhYmxlOiAnTm9ybWFsJyB9LFxuICAgICAgICBrZXk6ICdyZWN0JyxcbiAgICAgICAgc3JjOlxuICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRGdpSUdobGFXZG9kRDBpTlRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh5WldOMElHbGtQU0ppSWlCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU9EQWlJR2hsYVdkb2REMGlORGdpSUhKNFBTSTBJaTgrUEdacGJIUmxjaUI0UFNJdE9DNDRKU0lnZVQwaUxURXdMalFsSWlCM2FXUjBhRDBpTVRFM0xqVWxJaUJvWldsbmFIUTlJakV5T1M0eUpTSWdabWxzZEdWeVZXNXBkSE05SW05aWFtVmpkRUp2ZFc1a2FXNW5RbTk0SWlCcFpEMGlZU0krUEdabFQyWm1jMlYwSUdSNVBTSXlJaUJwYmowaVUyOTFjbU5sUVd4d2FHRWlJSEpsYzNWc2REMGljMmhoWkc5M1QyWm1jMlYwVDNWMFpYSXhJaTgrUEdabFIyRjFjM05wWVc1Q2JIVnlJSE4wWkVSbGRtbGhkR2x2YmowaU1pSWdhVzQ5SW5Ob1lXUnZkMDltWm5ObGRFOTFkR1Z5TVNJZ2NtVnpkV3gwUFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWk4K1BHWmxRMjl0Y0c5emFYUmxJR2x1UFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWlCcGJqSTlJbE52ZFhKalpVRnNjR2hoSWlCdmNHVnlZWFJ2Y2owaWIzVjBJaUJ5WlhOMWJIUTlJbk5vWVdSdmQwSnNkWEpQZFhSbGNqRWlMejQ4Wm1WRGIyeHZjazFoZEhKcGVDQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQXVNRFFnTUNJZ2FXNDlJbk5vWVdSdmQwSnNkWEpQZFhSbGNqRWlMejQ4TDJacGJIUmxjajQ4TDJSbFpuTStQR2NnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNDhaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnMElESXBJajQ4ZFhObElHWnBiR3c5SWlNd01EQWlJR1pwYkhSbGNqMGlkWEpzS0NOaEtTSWdlR3hwYm1zNmFISmxaajBpSTJJaUx6NDhkWE5sSUdacGJHd3RiM0JoWTJsMGVUMGlMamt5SWlCbWFXeHNQU0lqUlRaR04wWkdJaUI0YkdsdWF6cG9jbVZtUFNJallpSXZQanh5WldOMElITjBjbTlyWlQwaUl6RTRPVEJHUmlJZ2VEMGlMalVpSUhrOUlpNDFJaUIzYVdSMGFEMGlOemtpSUdobGFXZG9kRDBpTkRjaUlISjRQU0kwSWk4K1BDOW5QangwWlhoMElHWnZiblF0Wm1GdGFXeDVQU0pRYVc1blJtRnVaMU5ETFZKbFozVnNZWElzSUZCcGJtZEdZVzVuSUZORElpQm1iMjUwTFhOcGVtVTlJakV5SWlCbWFXeHNQU0lqTURBd0lpQm1hV3hzTFc5d1lXTnBkSGs5SWk0Mk5TSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTkNBeUtTSStQSFJ6Y0dGdUlIZzlJakl4SWlCNVBTSXlPU0krVG05eWJXRnNQQzkwYzNCaGJqNDhMM1JsZUhRK1BDOW5Qand2YzNablBnPT0nLFxuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIHtcbiAgICAgICAgdHlwZTogJ25vZGUnLFxuICAgICAgICBzaXplOiAnODAqNzInLFxuICAgICAgICBzaGFwZTogJ2Zsb3ctcmhvbWJ1cycsXG4gICAgICAgIG1vZGVsOiB7IGNvbG9yOiAnIzE4OTBGRicsIGxhYmxlOiAnRGVjaXNpb24nIH0sXG4gICAgICAgIGtleTogJ3Job21idXMnLFxuICAgICAgICBzcmM6XG4gICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9EWWlJR2hsYVdkb2REMGlOemdpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQanhrWldaelBqeHdZWFJvSUdROUlrMDBNaTQyTnlBeExqWTNiRE0wTGprMk5TQXpNUzR6TlRKaE5DQTBJREFnTUNBeElEQWdOUzQ1TlRaTU5ESXVOamNnTnpBdU16TmhOQ0EwSURBZ01DQXhMVFV1TXpRZ01Fd3lMak0yTlNBek9DNDVOemhoTkNBMElEQWdNQ0F4SURBdE5TNDVOVFpNTXpjdU16TWdNUzQyTjJFMElEUWdNQ0F3SURFZ05TNHpOQ0F3ZWlJZ2FXUTlJbUlpTHo0OFptbHNkR1Z5SUhnOUlpMDRMamdsSWlCNVBTSXROaTQ1SlNJZ2QybGtkR2c5SWpFeE55NDFKU0lnYUdWcFoyaDBQU0l4TVRrdU5DVWlJR1pwYkhSbGNsVnVhWFJ6UFNKdlltcGxZM1JDYjNWdVpHbHVaMEp2ZUNJZ2FXUTlJbUVpUGp4bVpVOW1abk5sZENCa2VUMGlNaUlnYVc0OUlsTnZkWEpqWlVGc2NHaGhJaUJ5WlhOMWJIUTlJbk5vWVdSdmQwOW1abk5sZEU5MWRHVnlNU0l2UGp4bVpVZGhkWE56YVdGdVFteDFjaUJ6ZEdSRVpYWnBZWFJwYjI0OUlqSWlJR2x1UFNKemFHRmtiM2RQWm1aelpYUlBkWFJsY2pFaUlISmxjM1ZzZEQwaWMyaGhaRzkzUW14MWNrOTFkR1Z5TVNJdlBqeG1aVU52YlhCdmMybDBaU0JwYmowaWMyaGhaRzkzUW14MWNrOTFkR1Z5TVNJZ2FXNHlQU0pUYjNWeVkyVkJiSEJvWVNJZ2IzQmxjbUYwYjNJOUltOTFkQ0lnY21WemRXeDBQU0p6YUdGa2IzZENiSFZ5VDNWMFpYSXhJaTgrUEdabFEyOXNiM0pOWVhSeWFYZ2dkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdMakEwSURBaUlHbHVQU0p6YUdGa2IzZENiSFZ5VDNWMFpYSXhJaTgrUEM5bWFXeDBaWEkrUEM5a1pXWnpQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb015QXhLU0krUEhWelpTQm1hV3hzUFNJak1EQXdJaUJtYVd4MFpYSTlJblZ5YkNnallTa2lJSGhzYVc1ck9taHlaV1k5SWlOaUlpOCtQSFZ6WlNCbWFXeHNMVzl3WVdOcGRIazlJaTQ1TWlJZ1ptbHNiRDBpSTBVMlJrWkdRaUlnZUd4cGJtczZhSEpsWmowaUkySWlMejQ4Y0dGMGFDQnpkSEp2YTJVOUlpTTFRMFJDUkRNaUlHUTlJazAwTWk0ek16Y2dNaTR3TkRKaE15NDFJRE11TlNBd0lEQWdNQzAwTGpZM05DQXdUREl1TmprNElETXpMak01TkdFekxqVWdNeTQxSURBZ01DQXdJREFnTlM0eU1USnNNelF1T1RZMUlETXhMak0xTW1FekxqVWdNeTQxSURBZ01DQXdJRFF1TmpjMElEQnNNelF1T1RZMUxUTXhMak0xTW1FekxqVWdNeTQxSURBZ01DQXdJREF0TlM0eU1USk1OREl1TXpNM0lESXVNRFF5ZWlJdlBqd3ZaejQ4ZEdWNGRDQm1iMjUwTFdaaGJXbHNlVDBpVUdsdVowWmhibWRUUXkxU1pXZDFiR0Z5TENCUWFXNW5SbUZ1WnlCVFF5SWdabTl1ZEMxemFYcGxQU0l4TWlJZ1ptbHNiRDBpSXpBd01DSWdabWxzYkMxdmNHRmphWFI1UFNJdU5qVWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RNZ01Ta2lQangwYzNCaGJpQjRQU0l4T0NJZ2VUMGlORElpUGtSbFkybHphVzl1UEM5MGMzQmhiajQ4TDNSbGVIUStQQzluUGp3dmMzWm5QZz09JyxcbiAgICAgIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7XG4gICAgICAgIHR5cGU6ICdub2RlJyxcbiAgICAgICAgc2l6ZTogJzgwKjQ4JyxcbiAgICAgICAgc2hhcGU6ICdmbG93LWNhcHN1bGUnLFxuICAgICAgICBtb2RlbDogeyBjb2xvcjogJyM3MjJFRDEnLCBsYWJsZTogJ01vZGVsJyB9LFxuICAgICAgICBrZXk6ICdjYXBzdWxlJyxcbiAgICAgICAgc3JjOlxuICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRGdpSUdobGFXZG9kRDBpTlRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh5WldOMElHbGtQU0ppSWlCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU9EQWlJR2hsYVdkb2REMGlORGdpSUhKNFBTSXlOQ0l2UGp4bWFXeDBaWElnZUQwaUxUZ3VPQ1VpSUhrOUlpMHhNQzQwSlNJZ2QybGtkR2c5SWpFeE55NDFKU0lnYUdWcFoyaDBQU0l4TWprdU1pVWlJR1pwYkhSbGNsVnVhWFJ6UFNKdlltcGxZM1JDYjNWdVpHbHVaMEp2ZUNJZ2FXUTlJbUVpUGp4bVpVOW1abk5sZENCa2VUMGlNaUlnYVc0OUlsTnZkWEpqWlVGc2NHaGhJaUJ5WlhOMWJIUTlJbk5vWVdSdmQwOW1abk5sZEU5MWRHVnlNU0l2UGp4bVpVZGhkWE56YVdGdVFteDFjaUJ6ZEdSRVpYWnBZWFJwYjI0OUlqSWlJR2x1UFNKemFHRmtiM2RQWm1aelpYUlBkWFJsY2pFaUlISmxjM1ZzZEQwaWMyaGhaRzkzUW14MWNrOTFkR1Z5TVNJdlBqeG1aVU52YlhCdmMybDBaU0JwYmowaWMyaGhaRzkzUW14MWNrOTFkR1Z5TVNJZ2FXNHlQU0pUYjNWeVkyVkJiSEJvWVNJZ2IzQmxjbUYwYjNJOUltOTFkQ0lnY21WemRXeDBQU0p6YUdGa2IzZENiSFZ5VDNWMFpYSXhJaTgrUEdabFEyOXNiM0pOWVhSeWFYZ2dkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdMakEwSURBaUlHbHVQU0p6YUdGa2IzZENiSFZ5VDNWMFpYSXhJaTgrUEM5bWFXeDBaWEkrUEM5a1pXWnpQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb05DQXlLU0krUEhWelpTQm1hV3hzUFNJak1EQXdJaUJtYVd4MFpYSTlJblZ5YkNnallTa2lJSGhzYVc1ck9taHlaV1k5SWlOaUlpOCtQSFZ6WlNCbWFXeHNMVzl3WVdOcGRIazlJaTQ1TWlJZ1ptbHNiRDBpSTBZNVJqQkdSaUlnZUd4cGJtczZhSEpsWmowaUkySWlMejQ4Y21WamRDQnpkSEp2YTJVOUlpTkNNemRHUlVJaUlIZzlJaTQxSWlCNVBTSXVOU0lnZDJsa2RHZzlJamM1SWlCb1pXbG5hSFE5SWpRM0lpQnllRDBpTWpNdU5TSXZQand2Wno0OGRHVjRkQ0JtYjI1MExXWmhiV2xzZVQwaVVHbHVaMFpoYm1kVFF5MVNaV2QxYkdGeUxDQlFhVzVuUm1GdVp5QlRReUlnWm05dWRDMXphWHBsUFNJeE1pSWdabWxzYkQwaUl6QXdNQ0lnWm1sc2JDMXZjR0ZqYVhSNVBTSXVOalVpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEUWdNaWtpUGp4MGMzQmhiaUI0UFNJeU5DSWdlVDBpTWpraVBrMXZaR1ZzUEM5MGMzQmhiajQ4TDNSbGVIUStQQzluUGp3dmMzWm5QZz09JyxcbiAgICAgIH0pLFxuICAgIF0pLFxuICApO1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8SXRlbVBhbmVsIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1QYW5lbH0+XG4gIC8vICAgICAgIDxDYXJkIGJvcmRlcmVkPXtmYWxzZX0+XG4gIC8vICAgICAgICAgPEl0ZW1cbiAgLy8gICAgICAgICAgIHR5cGU9XCJub2RlXCJcbiAgLy8gICAgICAgICAgIHNpemU9XCI3Mio3MlwiXG4gIC8vICAgICAgICAgICBzaGFwZT1cImZsb3ctY2lyY2xlXCJcbiAgLy8gICAgICAgICAgIG1vZGVsPXt7XG4gIC8vICAgICAgICAgICAgIGNvbG9yOiAnI0ZBOEMxNicsXG4gIC8vICAgICAgICAgICAgIGxhYmVsOiAnU3RhcnQnLFxuICAvLyAgICAgICAgICAgfX1cbiAgLy8gICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9EQWlJR2hsYVdkb2REMGlPREFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQanhrWldaelBqeGphWEpqYkdVZ2FXUTlJbUlpSUdONFBTSXpOaUlnWTNrOUlqTTJJaUJ5UFNJek5pSXZQanhtYVd4MFpYSWdlRDBpTFRrdU55VWlJSGs5SWkwMkxqa2xJaUIzYVdSMGFEMGlNVEU1TGpRbElpQm9aV2xuYUhROUlqRXhPUzQwSlNJZ1ptbHNkR1Z5Vlc1cGRITTlJbTlpYW1WamRFSnZkVzVrYVc1blFtOTRJaUJwWkQwaVlTSStQR1psVDJabWMyVjBJR1I1UFNJeUlpQnBiajBpVTI5MWNtTmxRV3h3YUdFaUlISmxjM1ZzZEQwaWMyaGhaRzkzVDJabWMyVjBUM1YwWlhJeElpOCtQR1psUjJGMWMzTnBZVzVDYkhWeUlITjBaRVJsZG1saGRHbHZiajBpTWlJZ2FXNDlJbk5vWVdSdmQwOW1abk5sZEU5MWRHVnlNU0lnY21WemRXeDBQU0p6YUdGa2IzZENiSFZ5VDNWMFpYSXhJaTgrUEdabFEyOXRjRzl6YVhSbElHbHVQU0p6YUdGa2IzZENiSFZ5VDNWMFpYSXhJaUJwYmpJOUlsTnZkWEpqWlVGc2NHaGhJaUJ2Y0dWeVlYUnZjajBpYjNWMElpQnlaWE4xYkhROUluTm9ZV1J2ZDBKc2RYSlBkWFJsY2pFaUx6NDhabVZEYjJ4dmNrMWhkSEpwZUNCMllXeDFaWE05SWpBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBdU1EUWdNQ0lnYVc0OUluTm9ZV1J2ZDBKc2RYSlBkWFJsY2pFaUx6NDhMMlpwYkhSbGNqNDhMMlJsWm5NK1BHY2dabWxzYkQwaWJtOXVaU0lnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWo0OFp5QjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2cwSURJcElqNDhkWE5sSUdacGJHdzlJaU13TURBaUlHWnBiSFJsY2owaWRYSnNLQ05oS1NJZ2VHeHBibXM2YUhKbFpqMGlJMklpTHo0OGRYTmxJR1pwYkd3dGIzQmhZMmwwZVQwaUxqa3lJaUJtYVd4c1BTSWpSa1pHTWtVNElpQjRiR2x1YXpwb2NtVm1QU0lqWWlJdlBqeGphWEpqYkdVZ2MzUnliMnRsUFNJalJrWkRNRFk1SWlCamVEMGlNellpSUdONVBTSXpOaUlnY2owaU16VXVOU0l2UGp3dlp6NDhkR1Y0ZENCbWIyNTBMV1poYldsc2VUMGlVR2x1WjBaaGJtZFRReTFTWldkMWJHRnlMQ0JRYVc1blJtRnVaeUJUUXlJZ1ptOXVkQzF6YVhwbFBTSXhNaUlnWm1sc2JEMGlJekF3TUNJZ1ptbHNiQzF2Y0dGamFYUjVQU0l1TmpVaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRFFnTWlraVBqeDBjM0JoYmlCNFBTSXlNeUlnZVQwaU5ERWlQbE4wWVhKMFBDOTBjM0JoYmo0OEwzUmxlSFErUEM5blBqd3ZjM1puUGc9PVwiXG4gIC8vICAgICAgICAgLz5cbiAgLy8gICAgICAgICA8SXRlbVxuICAvLyAgICAgICAgICAgdHlwZT1cIm5vZGVcIlxuICAvLyAgICAgICAgICAgc2l6ZT1cIjgwKjQ4XCJcbiAgLy8gICAgICAgICAgIHNoYXBlPVwiZmxvdy1yZWN0XCJcbiAgLy8gICAgICAgICAgIG1vZGVsPXt7XG4gIC8vICAgICAgICAgICAgIGNvbG9yOiAnIzE4OTBGRicsXG4gIC8vICAgICAgICAgICAgIGxhYmVsOiAnTm9ybWFsJyxcbiAgLy8gICAgICAgICAgIH19XG4gIC8vICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRGdpSUdobGFXZG9kRDBpTlRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh5WldOMElHbGtQU0ppSWlCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU9EQWlJR2hsYVdkb2REMGlORGdpSUhKNFBTSTBJaTgrUEdacGJIUmxjaUI0UFNJdE9DNDRKU0lnZVQwaUxURXdMalFsSWlCM2FXUjBhRDBpTVRFM0xqVWxJaUJvWldsbmFIUTlJakV5T1M0eUpTSWdabWxzZEdWeVZXNXBkSE05SW05aWFtVmpkRUp2ZFc1a2FXNW5RbTk0SWlCcFpEMGlZU0krUEdabFQyWm1jMlYwSUdSNVBTSXlJaUJwYmowaVUyOTFjbU5sUVd4d2FHRWlJSEpsYzNWc2REMGljMmhoWkc5M1QyWm1jMlYwVDNWMFpYSXhJaTgrUEdabFIyRjFjM05wWVc1Q2JIVnlJSE4wWkVSbGRtbGhkR2x2YmowaU1pSWdhVzQ5SW5Ob1lXUnZkMDltWm5ObGRFOTFkR1Z5TVNJZ2NtVnpkV3gwUFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWk4K1BHWmxRMjl0Y0c5emFYUmxJR2x1UFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWlCcGJqSTlJbE52ZFhKalpVRnNjR2hoSWlCdmNHVnlZWFJ2Y2owaWIzVjBJaUJ5WlhOMWJIUTlJbk5vWVdSdmQwSnNkWEpQZFhSbGNqRWlMejQ4Wm1WRGIyeHZjazFoZEhKcGVDQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQXVNRFFnTUNJZ2FXNDlJbk5vWVdSdmQwSnNkWEpQZFhSbGNqRWlMejQ4TDJacGJIUmxjajQ4TDJSbFpuTStQR2NnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNDhaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnMElESXBJajQ4ZFhObElHWnBiR3c5SWlNd01EQWlJR1pwYkhSbGNqMGlkWEpzS0NOaEtTSWdlR3hwYm1zNmFISmxaajBpSTJJaUx6NDhkWE5sSUdacGJHd3RiM0JoWTJsMGVUMGlMamt5SWlCbWFXeHNQU0lqUlRaR04wWkdJaUI0YkdsdWF6cG9jbVZtUFNJallpSXZQanh5WldOMElITjBjbTlyWlQwaUl6RTRPVEJHUmlJZ2VEMGlMalVpSUhrOUlpNDFJaUIzYVdSMGFEMGlOemtpSUdobGFXZG9kRDBpTkRjaUlISjRQU0kwSWk4K1BDOW5QangwWlhoMElHWnZiblF0Wm1GdGFXeDVQU0pRYVc1blJtRnVaMU5ETFZKbFozVnNZWElzSUZCcGJtZEdZVzVuSUZORElpQm1iMjUwTFhOcGVtVTlJakV5SWlCbWFXeHNQU0lqTURBd0lpQm1hV3hzTFc5d1lXTnBkSGs5SWk0Mk5TSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTkNBeUtTSStQSFJ6Y0dGdUlIZzlJakl4SWlCNVBTSXlPU0krVG05eWJXRnNQQzkwYzNCaGJqNDhMM1JsZUhRK1BDOW5Qand2YzNablBnPT1cIlxuICAvLyAgICAgICAgIC8+XG4gIC8vICAgICAgICAgPEl0ZW1cbiAgLy8gICAgICAgICAgIHR5cGU9XCJub2RlXCJcbiAgLy8gICAgICAgICAgIHNpemU9XCI4MCo3MlwiXG4gIC8vICAgICAgICAgICBzaGFwZT1cImZsb3ctcmhvbWJ1c1wiXG4gIC8vICAgICAgICAgICBtb2RlbD17e1xuICAvLyAgICAgICAgICAgICBjb2xvcjogJyMxM0MyQzInLFxuICAvLyAgICAgICAgICAgICBsYWJlbDogJ0RlY2lzaW9uJyxcbiAgLy8gICAgICAgICAgIH19XG4gIC8vICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRFlpSUdobGFXZG9kRDBpTnpnaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh3WVhSb0lHUTlJazAwTWk0Mk55QXhMalkzYkRNMExqazJOU0F6TVM0ek5USmhOQ0EwSURBZ01DQXhJREFnTlM0NU5UWk1OREl1TmpjZ056QXVNek5oTkNBMElEQWdNQ0F4TFRVdU16UWdNRXd5TGpNMk5TQXpPQzQ1TnpoaE5DQTBJREFnTUNBeElEQXROUzQ1TlRaTU16Y3VNek1nTVM0Mk4yRTBJRFFnTUNBd0lERWdOUzR6TkNBd2VpSWdhV1E5SW1JaUx6NDhabWxzZEdWeUlIZzlJaTA0TGpnbElpQjVQU0l0Tmk0NUpTSWdkMmxrZEdnOUlqRXhOeTQxSlNJZ2FHVnBaMmgwUFNJeE1Ua3VOQ1VpSUdacGJIUmxjbFZ1YVhSelBTSnZZbXBsWTNSQ2IzVnVaR2x1WjBKdmVDSWdhV1E5SW1FaVBqeG1aVTltWm5ObGRDQmtlVDBpTWlJZ2FXNDlJbE52ZFhKalpVRnNjR2hoSWlCeVpYTjFiSFE5SW5Ob1lXUnZkMDltWm5ObGRFOTFkR1Z5TVNJdlBqeG1aVWRoZFhOemFXRnVRbXgxY2lCemRHUkVaWFpwWVhScGIyNDlJaklpSUdsdVBTSnphR0ZrYjNkUFptWnpaWFJQZFhSbGNqRWlJSEpsYzNWc2REMGljMmhoWkc5M1FteDFjazkxZEdWeU1TSXZQanhtWlVOdmJYQnZjMmwwWlNCcGJqMGljMmhoWkc5M1FteDFjazkxZEdWeU1TSWdhVzR5UFNKVGIzVnlZMlZCYkhCb1lTSWdiM0JsY21GMGIzSTlJbTkxZENJZ2NtVnpkV3gwUFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWk4K1BHWmxRMjlzYjNKTllYUnlhWGdnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3TGpBMElEQWlJR2x1UFNKemFHRmtiM2RDYkhWeVQzVjBaWEl4SWk4K1BDOW1hV3gwWlhJK1BDOWtaV1p6UGp4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krUEdjZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NeUF4S1NJK1BIVnpaU0JtYVd4c1BTSWpNREF3SWlCbWFXeDBaWEk5SW5WeWJDZ2pZU2tpSUhoc2FXNXJPbWh5WldZOUlpTmlJaTgrUEhWelpTQm1hV3hzTFc5d1lXTnBkSGs5SWk0NU1pSWdabWxzYkQwaUkwVTJSa1pHUWlJZ2VHeHBibXM2YUhKbFpqMGlJMklpTHo0OGNHRjBhQ0J6ZEhKdmEyVTlJaU0xUTBSQ1JETWlJR1E5SWswME1pNHpNemNnTWk0d05ESmhNeTQxSURNdU5TQXdJREFnTUMwMExqWTNOQ0F3VERJdU5qazRJRE16TGpNNU5HRXpMalVnTXk0MUlEQWdNQ0F3SURBZ05TNHlNVEpzTXpRdU9UWTFJRE14TGpNMU1tRXpMalVnTXk0MUlEQWdNQ0F3SURRdU5qYzBJREJzTXpRdU9UWTFMVE14TGpNMU1tRXpMalVnTXk0MUlEQWdNQ0F3SURBdE5TNHlNVEpNTkRJdU16TTNJREl1TURReWVpSXZQand2Wno0OGRHVjRkQ0JtYjI1MExXWmhiV2xzZVQwaVVHbHVaMFpoYm1kVFF5MVNaV2QxYkdGeUxDQlFhVzVuUm1GdVp5QlRReUlnWm05dWRDMXphWHBsUFNJeE1pSWdabWxzYkQwaUl6QXdNQ0lnWm1sc2JDMXZjR0ZqYVhSNVBTSXVOalVpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtETWdNU2tpUGp4MGMzQmhiaUI0UFNJeE9DSWdlVDBpTkRJaVBrUmxZMmx6YVc5dVBDOTBjM0JoYmo0OEwzUmxlSFErUEM5blBqd3ZjM1puUGc9PVwiXG4gIC8vICAgICAgICAgLz5cbiAgLy8gICAgICAgICA8SXRlbVxuICAvLyAgICAgICAgICAgdHlwZT1cIm5vZGVcIlxuICAvLyAgICAgICAgICAgc2l6ZT1cIjgwKjQ4XCJcbiAgLy8gICAgICAgICAgIHNoYXBlPVwiZmxvdy1jYXBzdWxlXCJcbiAgLy8gICAgICAgICAgIG1vZGVsPXt7XG4gIC8vICAgICAgICAgICAgIGNvbG9yOiAnIzcyMkVEMScsXG4gIC8vICAgICAgICAgICAgIGxhYmVsOiAnTW9kZWwnLFxuICAvLyAgICAgICAgICAgfX1cbiAgLy8gICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9EZ2lJR2hsYVdkb2REMGlOVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQanhrWldaelBqeHlaV04wSUdsa1BTSmlJaUI0UFNJd0lpQjVQU0l3SWlCM2FXUjBhRDBpT0RBaUlHaGxhV2RvZEQwaU5EZ2lJSEo0UFNJeU5DSXZQanhtYVd4MFpYSWdlRDBpTFRndU9DVWlJSGs5SWkweE1DNDBKU0lnZDJsa2RHZzlJakV4Tnk0MUpTSWdhR1ZwWjJoMFBTSXhNamt1TWlVaUlHWnBiSFJsY2xWdWFYUnpQU0p2WW1wbFkzUkNiM1Z1WkdsdVowSnZlQ0lnYVdROUltRWlQanhtWlU5bVpuTmxkQ0JrZVQwaU1pSWdhVzQ5SWxOdmRYSmpaVUZzY0doaElpQnlaWE4xYkhROUluTm9ZV1J2ZDA5bVpuTmxkRTkxZEdWeU1TSXZQanhtWlVkaGRYTnphV0Z1UW14MWNpQnpkR1JFWlhacFlYUnBiMjQ5SWpJaUlHbHVQU0p6YUdGa2IzZFBabVp6WlhSUGRYUmxjakVpSUhKbGMzVnNkRDBpYzJoaFpHOTNRbXgxY2s5MWRHVnlNU0l2UGp4bVpVTnZiWEJ2YzJsMFpTQnBiajBpYzJoaFpHOTNRbXgxY2s5MWRHVnlNU0lnYVc0eVBTSlRiM1Z5WTJWQmJIQm9ZU0lnYjNCbGNtRjBiM0k5SW05MWRDSWdjbVZ6ZFd4MFBTSnphR0ZrYjNkQ2JIVnlUM1YwWlhJeElpOCtQR1psUTI5c2IzSk5ZWFJ5YVhnZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0xqQTBJREFpSUdsdVBTSnphR0ZrYjNkQ2JIVnlUM1YwWlhJeElpOCtQQzltYVd4MFpYSStQQzlrWldaelBqeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTkNBeUtTSStQSFZ6WlNCbWFXeHNQU0lqTURBd0lpQm1hV3gwWlhJOUluVnliQ2dqWVNraUlIaHNhVzVyT21oeVpXWTlJaU5pSWk4K1BIVnpaU0JtYVd4c0xXOXdZV05wZEhrOUlpNDVNaUlnWm1sc2JEMGlJMFk1UmpCR1JpSWdlR3hwYm1zNmFISmxaajBpSTJJaUx6NDhjbVZqZENCemRISnZhMlU5SWlOQ016ZEdSVUlpSUhnOUlpNDFJaUI1UFNJdU5TSWdkMmxrZEdnOUlqYzVJaUJvWldsbmFIUTlJalEzSWlCeWVEMGlNak11TlNJdlBqd3ZaejQ4ZEdWNGRDQm1iMjUwTFdaaGJXbHNlVDBpVUdsdVowWmhibWRUUXkxU1pXZDFiR0Z5TENCUWFXNW5SbUZ1WnlCVFF5SWdabTl1ZEMxemFYcGxQU0l4TWlJZ1ptbHNiRDBpSXpBd01DSWdabWxzYkMxdmNHRmphWFI1UFNJdU5qVWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RRZ01pa2lQangwYzNCaGJpQjRQU0l5TkNJZ2VUMGlNamtpUGsxdlpHVnNQQzkwYzNCaGJqNDhMM1JsZUhRK1BDOW5Qand2YzNablBnPT1cIlxuICAvLyAgICAgICAgIC8+XG4gIC8vICAgICAgIDwvQ2FyZD5cbiAgLy8gICAgIDwvSXRlbVBhbmVsPlxuICAvLyAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbG93SXRlbVBhbmVsO1xuIl19