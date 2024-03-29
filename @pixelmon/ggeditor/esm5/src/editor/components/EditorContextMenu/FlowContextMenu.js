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
var FlowContextMenu = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    var NodeMenuEl = React.createElement(NodeMenu, { key: 'nodemenu' }, [gmenu({ command: 'copy' }), gmenu({ command: 'delete' })]);
    /** @type {?} */
    var EdgeMenuEl = React.createElement(EdgeMenu, { key: 'edgemenu' }, gmenu({ command: 'delete' }));
    /** @type {?} */
    var GroupMenuEl = React.createElement(GroupMenu, { key: 'groupmenu' }, [
        gmenu({ command: 'copy' }),
        gmenu({ command: 'delete' }),
        gmenu({ command: 'unGroup', text: 'Ungroup', icon: 'ungroup' }),
    ]);
    /** @type {?} */
    var MultiMenuEl = React.createElement(MultiMenu, { key: 'multimenu' }, [
        gmenu({ command: 'copy' }),
        gmenu({ command: 'paste' }),
        gmenu({ command: 'delete' }),
        gmenu({ command: 'unGroup', text: 'Ungroup', icon: 'ungroup' }),
    ]);
    /** @type {?} */
    var CanvasMenuEl = React.createElement(CanvasMenu, { key: 'canvasmenu' }, [
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
var ɵ0 = FlowContextMenu;
export default FlowContextMenu;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvd0NvbnRleHRNZW51LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL2dnZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2VkaXRvci9jb21wb25lbnRzL0VkaXRvckNvbnRleHRNZW51L0Zsb3dDb250ZXh0TWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUYsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDOztJQUV6QixlQUFlOzs7QUFBRzs7UUFDaEIsVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFDM0gsVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDOztRQUM3RixXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUU7UUFDdkUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUM1QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO0tBQ2hFLENBQUM7O1FBQ0ksV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFO1FBQ3ZFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDM0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzVCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7S0FDaEUsQ0FBQzs7UUFDSSxZQUFZLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUU7UUFDMUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0tBQ25FLENBQUM7SUFDRixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEVBQUU7UUFDMUYsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7S0FDYixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUE7O0FBRUQsZUFBZSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3I6IGdpc2NhZmVyICxodHRwczovL2dpdGh1Yi5jb20vZ2lzY2FmZXJcbiAqIEBkYXRlOiAyMDE5LTA4LTE0IDE1OjQ3OjE1XG4gKiDmtYHnqIvlm77lj7PplK7oj5zljZVcbiAqL1xuXG5pbXBvcnQgeyBOb2RlTWVudSwgRWRnZU1lbnUsIEdyb3VwTWVudSwgTXVsdGlNZW51LCBDYW52YXNNZW51LCBDb250ZXh0TWVudSB9IGZyb20gJ2dnLWVkaXRvcic7XG5pbXBvcnQgZ21lbnUgZnJvbSAnLi9NZW51SXRlbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZsb3dDb250ZXh0TWVudSA9ICgpID0+IHtcbiAgY29uc3QgTm9kZU1lbnVFbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm9kZU1lbnUsIHsga2V5OiAnbm9kZW1lbnUnIH0sIFtnbWVudSh7IGNvbW1hbmQ6ICdjb3B5JyB9KSwgZ21lbnUoeyBjb21tYW5kOiAnZGVsZXRlJyB9KV0pO1xuICBjb25zdCBFZGdlTWVudUVsID0gUmVhY3QuY3JlYXRlRWxlbWVudChFZGdlTWVudSwgeyBrZXk6ICdlZGdlbWVudScgfSwgZ21lbnUoeyBjb21tYW5kOiAnZGVsZXRlJyB9KSk7XG4gIGNvbnN0IEdyb3VwTWVudUVsID0gUmVhY3QuY3JlYXRlRWxlbWVudChHcm91cE1lbnUsIHsga2V5OiAnZ3JvdXBtZW51JyB9LCBbXG4gICAgZ21lbnUoeyBjb21tYW5kOiAnY29weScgfSksXG4gICAgZ21lbnUoeyBjb21tYW5kOiAnZGVsZXRlJyB9KSxcbiAgICBnbWVudSh7IGNvbW1hbmQ6ICd1bkdyb3VwJywgdGV4dDogJ1VuZ3JvdXAnLCBpY29uOiAndW5ncm91cCcgfSksXG4gIF0pO1xuICBjb25zdCBNdWx0aU1lbnVFbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXVsdGlNZW51LCB7IGtleTogJ211bHRpbWVudScgfSwgW1xuICAgIGdtZW51KHsgY29tbWFuZDogJ2NvcHknIH0pLFxuICAgIGdtZW51KHsgY29tbWFuZDogJ3Bhc3RlJyB9KSxcbiAgICBnbWVudSh7IGNvbW1hbmQ6ICdkZWxldGUnIH0pLFxuICAgIGdtZW51KHsgY29tbWFuZDogJ3VuR3JvdXAnLCB0ZXh0OiAnVW5ncm91cCcsIGljb246ICd1bmdyb3VwJyB9KSxcbiAgXSk7XG4gIGNvbnN0IENhbnZhc01lbnVFbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FudmFzTWVudSwgeyBrZXk6ICdjYW52YXNtZW51JyB9LCBbXG4gICAgZ21lbnUoeyBjb21tYW5kOiAndW5kbycgfSksXG4gICAgZ21lbnUoeyBjb21tYW5kOiAncmVkbycgfSksXG4gICAgZ21lbnUoeyBjb21tYW5kOiAncGFzdGVIZXJlJywgdGV4dDogJ1Bhc3RlIEhlcmUnLCBpY29uOiAncGFzdGUnIH0pLFxuICBdKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dE1lbnUsIHsgY2xhc3NOYW1lOiAnY29udGV4dC1tZW51Jywga2V5OiAnY29udGV4dC1tZW51JyB9LCBbXG4gICAgTm9kZU1lbnVFbCxcbiAgICBFZGdlTWVudUVsLFxuICAgIEdyb3VwTWVudUVsLFxuICAgIE11bHRpTWVudUVsLFxuICAgIENhbnZhc01lbnVFbCxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbG93Q29udGV4dE1lbnU7XG4iXX0=