/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-08-14 15:47:15
 * 流程图右键菜单
 */
import { NodeMenu, EdgeMenu, GroupMenu, MultiMenu, CanvasMenu, ContextMenu } from 'gg-editor';
import gmenu from './MenuItem';
import * as React from 'react';
/** @type {?} */
const FlowContextMenu = (/**
 * @return {?}
 */
() => {
    /** @type {?} */
    const NodeMenuEl = React.createElement(NodeMenu, { key: 'nodemenu' }, [gmenu({ command: 'copy' }), gmenu({ command: 'delete' })]);
    /** @type {?} */
    const EdgeMenuEl = React.createElement(EdgeMenu, { key: 'edgemenu' }, gmenu({ command: 'delete' }));
    /** @type {?} */
    const GroupMenuEl = React.createElement(GroupMenu, { key: 'groupmenu' }, [
        gmenu({ command: 'copy' }),
        gmenu({ command: 'delete' }),
        gmenu({ command: 'unGroup', text: 'Ungroup', icon: 'ungroup' }),
    ]);
    /** @type {?} */
    const MultiMenuEl = React.createElement(MultiMenu, { key: 'multimenu' }, [
        gmenu({ command: 'copy' }),
        gmenu({ command: 'paste' }),
        gmenu({ command: 'delete' }),
        gmenu({ command: 'unGroup', text: 'Ungroup', icon: 'ungroup' }),
    ]);
    /** @type {?} */
    const CanvasMenuEl = React.createElement(CanvasMenu, { key: 'canvasmenu' }, [
        gmenu({ command: 'undo' }),
        gmenu({ command: 'redo' }),
        gmenu({ command: 'pasteHere', text: 'Paste Here', icon: 'paste' }),
    ]);
    return React.createElement(ContextMenu, { className: 'context-menu', key: 'context-menu' }, [
        NodeMenuEl,
        EdgeMenuEl,
        GroupMenuEl,
        MultiMenuEl,
        CanvasMenuEl,
    ]);
});
const ɵ0 = FlowContextMenu;
export default FlowContextMenu;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvd0NvbnRleHRNZW51LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL2dnZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2VkaXRvci9jb21wb25lbnRzL0VkaXRvckNvbnRleHRNZW51L0Zsb3dDb250ZXh0TWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUYsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDOztNQUV6QixlQUFlOzs7QUFBRyxHQUFHLEVBQUU7O1VBQ3JCLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1VBQzNILFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzs7VUFDN0YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFO1FBQ3ZFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztLQUNoRSxDQUFDOztVQUNJLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUN2RSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUM1QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO0tBQ2hFLENBQUM7O1VBQ0ksWUFBWSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxFQUFFO1FBQzFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztLQUNuRSxDQUFDO0lBQ0YsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFFO1FBQzFGLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO0tBQ2IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBOztBQUVELGVBQWUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yOiBnaXNjYWZlciAsaHR0cHM6Ly9naXRodWIuY29tL2dpc2NhZmVyXG4gKiBAZGF0ZTogMjAxOS0wOC0xNCAxNTo0NzoxNVxuICog5rWB56iL5Zu+5Y+z6ZSu6I+c5Y2VXG4gKi9cblxuaW1wb3J0IHsgTm9kZU1lbnUsIEVkZ2VNZW51LCBHcm91cE1lbnUsIE11bHRpTWVudSwgQ2FudmFzTWVudSwgQ29udGV4dE1lbnUgfSBmcm9tICdnZy1lZGl0b3InO1xuaW1wb3J0IGdtZW51IGZyb20gJy4vTWVudUl0ZW0nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGbG93Q29udGV4dE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IE5vZGVNZW51RWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KE5vZGVNZW51LCB7IGtleTogJ25vZGVtZW51JyB9LCBbZ21lbnUoeyBjb21tYW5kOiAnY29weScgfSksIGdtZW51KHsgY29tbWFuZDogJ2RlbGV0ZScgfSldKTtcbiAgY29uc3QgRWRnZU1lbnVFbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRnZU1lbnUsIHsga2V5OiAnZWRnZW1lbnUnIH0sIGdtZW51KHsgY29tbWFuZDogJ2RlbGV0ZScgfSkpO1xuICBjb25zdCBHcm91cE1lbnVFbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JvdXBNZW51LCB7IGtleTogJ2dyb3VwbWVudScgfSwgW1xuICAgIGdtZW51KHsgY29tbWFuZDogJ2NvcHknIH0pLFxuICAgIGdtZW51KHsgY29tbWFuZDogJ2RlbGV0ZScgfSksXG4gICAgZ21lbnUoeyBjb21tYW5kOiAndW5Hcm91cCcsIHRleHQ6ICdVbmdyb3VwJywgaWNvbjogJ3VuZ3JvdXAnIH0pLFxuICBdKTtcbiAgY29uc3QgTXVsdGlNZW51RWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KE11bHRpTWVudSwgeyBrZXk6ICdtdWx0aW1lbnUnIH0sIFtcbiAgICBnbWVudSh7IGNvbW1hbmQ6ICdjb3B5JyB9KSxcbiAgICBnbWVudSh7IGNvbW1hbmQ6ICdwYXN0ZScgfSksXG4gICAgZ21lbnUoeyBjb21tYW5kOiAnZGVsZXRlJyB9KSxcbiAgICBnbWVudSh7IGNvbW1hbmQ6ICd1bkdyb3VwJywgdGV4dDogJ1VuZ3JvdXAnLCBpY29uOiAndW5ncm91cCcgfSksXG4gIF0pO1xuICBjb25zdCBDYW52YXNNZW51RWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KENhbnZhc01lbnUsIHsga2V5OiAnY2FudmFzbWVudScgfSwgW1xuICAgIGdtZW51KHsgY29tbWFuZDogJ3VuZG8nIH0pLFxuICAgIGdtZW51KHsgY29tbWFuZDogJ3JlZG8nIH0pLFxuICAgIGdtZW51KHsgY29tbWFuZDogJ3Bhc3RlSGVyZScsIHRleHQ6ICdQYXN0ZSBIZXJlJywgaWNvbjogJ3Bhc3RlJyB9KSxcbiAgXSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRNZW51LCB7IGNsYXNzTmFtZTogJ2NvbnRleHQtbWVudScsIGtleTogJ2NvbnRleHQtbWVudScgfSwgW1xuICAgIE5vZGVNZW51RWwsXG4gICAgRWRnZU1lbnVFbCxcbiAgICBHcm91cE1lbnVFbCxcbiAgICBNdWx0aU1lbnVFbCxcbiAgICBDYW52YXNNZW51RWwsXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvd0NvbnRleHRNZW51O1xuIl19