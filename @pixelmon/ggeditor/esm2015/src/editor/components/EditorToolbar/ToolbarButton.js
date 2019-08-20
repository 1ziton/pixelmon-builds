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
const ToolbarButton = (/**
 * @param {?} __0
 * @return {?}
 */
({ command, text, icon, key }) => {
    return React.createElement(Command, { name: command, key: key || command }, React.createElement(Tooltip, { title: text, placement: 'bottom', overlayClassName: 'tooltip' }, React.createElement(IconFont, { type: `icon-${icon || command}` })));
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
const ɵ0 = ToolbarButton;
export default ToolbarButton;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbGJhckJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9nZ2VkaXRvci8iLCJzb3VyY2VzIjpbInNyYy9lZGl0b3IvY29tcG9uZW50cy9FZGl0b3JUb29sYmFyL1Rvb2xiYXJCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxRQUFRLE1BQU0sdUJBQXVCLENBQUM7OztNQUl2QyxhQUFhOzs7O0FBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBZ0IsRUFBTyxFQUFFO0lBQ3hFLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksT0FBTyxFQUFFLEVBQ3hFLEtBQUssQ0FBQyxhQUFhLENBQ2pCLE9BQU8sRUFDUCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUMsRUFDaEUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxJQUFJLElBQUksT0FBTyxFQUFFLEVBQUMsQ0FBQyxDQUNsRSxDQUFDLENBQUM7SUFFTCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQiw4Q0FBOEM7SUFDOUMsNkJBQTZCO0lBQzdCLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1Ysd0RBQXdEO0lBQ3hELG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsT0FBTztBQUNULENBQUMsQ0FBQTs7QUFFRCxlQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdnZy1lZGl0b3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uRm9udCBmcm9tICcuLi8uLi9jb21tb24vSWNvbkZvbnQnO1xuaW1wb3J0IHsgQ29tbWFuZFByb3BzIH0gZnJvbSAnLi4vLi4vZWRpdG9yLWludGVyZmFjZSc7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubGVzcyc7XG5cbmNvbnN0IFRvb2xiYXJCdXR0b24gPSAoeyBjb21tYW5kLCB0ZXh0LCBpY29uLCBrZXkgfTogQ29tbWFuZFByb3BzKTogYW55ID0+IHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWFuZCwgeyBuYW1lOiBjb21tYW5kLCBrZXk6IGtleSB8fCBjb21tYW5kIH0sIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUb29sdGlwLFxuICAgICAgeyB0aXRsZTogdGV4dCwgcGxhY2VtZW50OiAnYm90dG9tJywgb3ZlcmxheUNsYXNzTmFtZTogJ3Rvb2x0aXAnfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkZvbnQsIHsgdHlwZTogYGljb24tJHtpY29uIHx8IGNvbW1hbmR9YH0pLFxuICAgICkpO1xuXG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxDb21tYW5kIG5hbWU9e2NvbW1hbmR9PlxuICAvLyAgICAgICA8VG9vbHRpcFxuICAvLyAgICAgICAgIHRpdGxlPXt0ZXh0IHx8IHVwcGVyRmlyc3QoY29tbWFuZCl9XG4gIC8vICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgLy8gICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcH1cbiAgLy8gICAgICAgPlxuICAvLyAgICAgICAgIDxJY29uRm9udCB0eXBlPXtgaWNvbi0ke2ljb24gfHwgY29tbWFuZH1gfSAvPlxuICAvLyAgICAgICA8L1Rvb2x0aXA+XG4gIC8vICAgICA8L0NvbW1hbmQ+XG4gIC8vICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJCdXR0b247XG4iXX0=