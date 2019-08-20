/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from 'gg-editor';
import React from 'react';
import IconFont from '../../common/IconFont';
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
    var spanNode = React.createElement('span', { key: 'span' }, spanText);
    /** @type {?} */
    var divNode = React.createElement('div', { className: 'menu-item' }, [
        React.createElement(IconFont, { type: "icon-" + (icon || command), key: 'icon' }),
        spanNode,
    ]);
    return React.createElement(Command, { name: command, key: key || command }, divNode);
});
var ɵ0 = menuItemGenerate;
export default menuItemGenerate;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vZ2dlZGl0b3IvIiwic291cmNlcyI6WyJzcmMvZWRpdG9yL2NvbXBvbmVudHMvRWRpdG9yQ29udGV4dE1lbnUvTWVudUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLHVCQUF1QixDQUFDOztJQUd2QyxnQkFBZ0I7Ozs7QUFBRyxVQUFDLEVBQTBDO1FBQXhDLG9CQUFPLEVBQUUsY0FBSSxFQUFFLGNBQUksRUFBRSxZQUFHOztRQUM1QyxRQUFRLEdBQUcsSUFBSSxJQUFJLE9BQU87O1FBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLENBQUM7O1FBQ2pFLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUNyRSxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFRLElBQUksSUFBSSxPQUFPLENBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDL0UsUUFBUTtLQUNULENBQUM7SUFDRixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZGLENBQUMsQ0FBQTs7QUFFRCxlQUFlLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2dnLWVkaXRvcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25Gb250IGZyb20gJy4uLy4uL2NvbW1vbi9JY29uRm9udCc7XG5pbXBvcnQgeyBDb21tYW5kUHJvcHMgfSBmcm9tICcuLi8uLi9lZGl0b3ItaW50ZXJmYWNlJztcblxuY29uc3QgbWVudUl0ZW1HZW5lcmF0ZSA9ICh7IGNvbW1hbmQsIHRleHQsIGljb24sIGtleSB9OiBDb21tYW5kUHJvcHMpID0+IHtcbiAgY29uc3Qgc3BhblRleHQgPSB0ZXh0IHx8IGNvbW1hbmQ7XG4gIGNvbnN0IHNwYW5Ob2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsga2V5OiAnc3BhbicgfSwgc3BhblRleHQpO1xuICBjb25zdCBkaXZOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdtZW51LWl0ZW0nIH0sIFtcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25Gb250LCB7IHR5cGU6IGBpY29uLSR7aWNvbiB8fCBjb21tYW5kfWAsIGtleTogJ2ljb24nIH0pLFxuICAgIHNwYW5Ob2RlLFxuICBdKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWFuZCwgeyBuYW1lOiBjb21tYW5kLCBrZXk6IGtleSB8fCBjb21tYW5kIH0sIGRpdk5vZGUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUl0ZW1HZW5lcmF0ZTtcbiJdfQ==