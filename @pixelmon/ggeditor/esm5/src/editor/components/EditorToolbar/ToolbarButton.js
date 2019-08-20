/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Tooltip } from 'antd';
import { Command } from 'gg-editor';
import React from 'react';
import IconFont from '../../common/IconFont';
// import styles from './index.less';
/** @type {?} */
var ToolbarButton = (/**
 * @param {?} __0
 * @return {?}
 */
function (_a) {
    var command = _a.command, text = _a.text, icon = _a.icon, key = _a.key;
    return React.createElement(Command, { name: command, key: key || command }, React.createElement(Tooltip, { title: text, placement: 'bottom', overlayClassName: 'tooltip' }, React.createElement(IconFont, { type: "icon-" + (icon || command) })));
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
var ɵ0 = ToolbarButton;
export default ToolbarButton;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbGJhckJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9nZ2VkaXRvci8iLCJzb3VyY2VzIjpbInNyYy9lZGl0b3IvY29tcG9uZW50cy9FZGl0b3JUb29sYmFyL1Rvb2xiYXJCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxRQUFRLE1BQU0sdUJBQXVCLENBQUM7OztJQUl2QyxhQUFhOzs7O0FBQUcsVUFBQyxFQUEwQztRQUF4QyxvQkFBTyxFQUFFLGNBQUksRUFBRSxjQUFJLEVBQUUsWUFBRztJQUMvQyxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxFQUN4RSxLQUFLLENBQUMsYUFBYSxDQUNqQixPQUFPLEVBQ1AsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFDLEVBQ2hFLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVEsSUFBSSxJQUFJLE9BQU8sQ0FBRSxFQUFDLENBQUMsQ0FDbEUsQ0FBQyxDQUFDO0lBRUwsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsOENBQThDO0lBQzlDLDZCQUE2QjtJQUM3Qiw0Q0FBNEM7SUFDNUMsVUFBVTtJQUNWLHdEQUF3RDtJQUN4RCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLE9BQU87QUFDVCxDQUFDLENBQUE7O0FBRUQsZUFBZSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZ2ctZWRpdG9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkZvbnQgZnJvbSAnLi4vLi4vY29tbW9uL0ljb25Gb250JztcbmltcG9ydCB7IENvbW1hbmRQcm9wcyB9IGZyb20gJy4uLy4uL2VkaXRvci1pbnRlcmZhY2UnO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lmxlc3MnO1xuXG5jb25zdCBUb29sYmFyQnV0dG9uID0gKHsgY29tbWFuZCwgdGV4dCwgaWNvbiwga2V5IH06IENvbW1hbmRQcm9wcyk6IGFueSA9PiB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbW1hbmQsIHsgbmFtZTogY29tbWFuZCwga2V5OiBrZXkgfHwgY29tbWFuZCB9LCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgVG9vbHRpcCxcbiAgICAgIHsgdGl0bGU6IHRleHQsIHBsYWNlbWVudDogJ2JvdHRvbScsIG92ZXJsYXlDbGFzc05hbWU6ICd0b29sdGlwJ30sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25Gb250LCB7IHR5cGU6IGBpY29uLSR7aWNvbiB8fCBjb21tYW5kfWB9KSxcbiAgICApKTtcblxuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8Q29tbWFuZCBuYW1lPXtjb21tYW5kfT5cbiAgLy8gICAgICAgPFRvb2x0aXBcbiAgLy8gICAgICAgICB0aXRsZT17dGV4dCB8fCB1cHBlckZpcnN0KGNvbW1hbmQpfVxuICAvLyAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gIC8vICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT17c3R5bGVzLnRvb2x0aXB9XG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICA8SWNvbkZvbnQgdHlwZT17YGljb24tJHtpY29uIHx8IGNvbW1hbmR9YH0gLz5cbiAgLy8gICAgICAgPC9Ub29sdGlwPlxuICAvLyAgICAgPC9Db21tYW5kPlxuICAvLyAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyQnV0dG9uO1xuIl19