/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from 'gg-editor';
import React from 'react';
import IconFont from '../../common/IconFont';
/** @type {?} */
const menuItemGenerate = (/**
 * @param {?} __0
 * @return {?}
 */
({ command, text, icon, key }) => {
    /** @type {?} */
    const spanText = text || command;
    /** @type {?} */
    const spanNode = React.createElement('span', { key: 'span' }, spanText);
    /** @type {?} */
    const divNode = React.createElement('div', { className: 'menu-item' }, [
        React.createElement(IconFont, { type: `icon-${icon || command}`, key: 'icon' }),
        spanNode,
    ]);
    return React.createElement(Command, { name: command, key: key || command }, divNode);
});
const ɵ0 = menuItemGenerate;
export default menuItemGenerate;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vZ2dlZGl0b3IvIiwic291cmNlcyI6WyJzcmMvZWRpdG9yL2NvbXBvbmVudHMvRWRpdG9yQ29udGV4dE1lbnUvTWVudUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLHVCQUF1QixDQUFDOztNQUd2QyxnQkFBZ0I7Ozs7QUFBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFnQixFQUFFLEVBQUU7O1VBQ2hFLFFBQVEsR0FBRyxJQUFJLElBQUksT0FBTzs7VUFDMUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsQ0FBQzs7VUFDakUsT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxFQUFFO1FBQ3JFLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsSUFBSSxJQUFJLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUMvRSxRQUFRO0tBQ1QsQ0FBQztJQUNGLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkYsQ0FBQyxDQUFBOztBQUVELGVBQWUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZ2ctZWRpdG9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkZvbnQgZnJvbSAnLi4vLi4vY29tbW9uL0ljb25Gb250JztcbmltcG9ydCB7IENvbW1hbmRQcm9wcyB9IGZyb20gJy4uLy4uL2VkaXRvci1pbnRlcmZhY2UnO1xuXG5jb25zdCBtZW51SXRlbUdlbmVyYXRlID0gKHsgY29tbWFuZCwgdGV4dCwgaWNvbiwga2V5IH06IENvbW1hbmRQcm9wcykgPT4ge1xuICBjb25zdCBzcGFuVGV4dCA9IHRleHQgfHwgY29tbWFuZDtcbiAgY29uc3Qgc3Bhbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBrZXk6ICdzcGFuJyB9LCBzcGFuVGV4dCk7XG4gIGNvbnN0IGRpdk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ21lbnUtaXRlbScgfSwgW1xuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkZvbnQsIHsgdHlwZTogYGljb24tJHtpY29uIHx8IGNvbW1hbmR9YCwga2V5OiAnaWNvbicgfSksXG4gICAgc3Bhbk5vZGUsXG4gIF0pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21tYW5kLCB7IG5hbWU6IGNvbW1hbmQsIGtleToga2V5IHx8IGNvbW1hbmQgfSwgZGl2Tm9kZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51SXRlbUdlbmVyYXRlO1xuIl19