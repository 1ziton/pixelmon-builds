/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
import React from 'react';
import { Card } from 'antd';
import { NodePanel, EdgePanel, GroupPanel, MultiPanel, CanvasPanel, DetailPanel } from 'gg-editor';
import DetailForm from './DetailForm';
// import styles from '../../styles/index.less';
/** @type {?} */
const FlowDetailPanel = (/**
 * @return {?}
 */
() => {
    return React.createElement(DetailPanel, { className: 'detail-panel', key: 'detail-panel' }, [
        React.createElement(NodePanel, { key: 'node' }, React.createElement((/** @type {?} */ (DetailForm)), { type: 'node' })),
        React.createElement(EdgePanel, { key: 'edge' }, React.createElement((/** @type {?} */ (DetailForm)), { type: 'edge' })),
        React.createElement(GroupPanel, { key: 'group' }, React.createElement((/** @type {?} */ (DetailForm)), { type: 'group' })),
        React.createElement(MultiPanel, { key: 'multiinner' }, React.createElement(Card, { type: 'inner' })),
        React.createElement(CanvasPanel, { key: 'canvasinner' }, React.createElement(Card, { type: 'inner' })),
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
const ɵ0 = FlowDetailPanel;
export default FlowDetailPanel;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvd0RldGFpbFBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL2dnZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2VkaXRvci9jb21wb25lbnRzL0VkaXRvckRldGFpbFBhbmVsL0Zsb3dEZXRhaWxQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuRyxPQUFPLFVBQVUsTUFBTSxjQUFjLENBQUM7OztNQUdoQyxlQUFlOzs7QUFBRyxHQUFHLEVBQUU7SUFDM0IsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFFO1FBQzFGLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQUEsVUFBVSxFQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6RyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFBLFVBQVUsRUFBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDekcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBQSxVQUFVLEVBQU8sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVHLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDcEcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUN2RyxDQUFDLENBQUM7SUFFSCxhQUFhO0lBQ2IsbURBQW1EO0lBQ25ELG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtRkFBbUY7SUFDbkYsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qiw2RUFBNkU7SUFDN0UsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixPQUFPO0FBQ1QsQ0FBQyxDQUFBOztBQUVELGVBQWUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IE5vZGVQYW5lbCwgRWRnZVBhbmVsLCBHcm91cFBhbmVsLCBNdWx0aVBhbmVsLCBDYW52YXNQYW5lbCwgRGV0YWlsUGFuZWwgfSBmcm9tICdnZy1lZGl0b3InO1xuaW1wb3J0IERldGFpbEZvcm0gZnJvbSAnLi9EZXRhaWxGb3JtJztcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2luZGV4Lmxlc3MnO1xuXG5jb25zdCBGbG93RGV0YWlsUGFuZWwgPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERldGFpbFBhbmVsLCB7IGNsYXNzTmFtZTogJ2RldGFpbC1wYW5lbCcsIGtleTogJ2RldGFpbC1wYW5lbCcgfSwgW1xuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm9kZVBhbmVsLCB7IGtleTogJ25vZGUnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGV0YWlsRm9ybSBhcyBhbnksIHsgdHlwZTogJ25vZGUnIH0pKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkZ2VQYW5lbCwgeyBrZXk6ICdlZGdlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KERldGFpbEZvcm0gYXMgYW55LCB7IHR5cGU6ICdlZGdlJyB9KSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChHcm91cFBhbmVsLCB7IGtleTogJ2dyb3VwJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KERldGFpbEZvcm0gYXMgYW55LCB7IHR5cGU6ICdncm91cCcgfSkpLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXVsdGlQYW5lbCwgeyBrZXk6ICdtdWx0aWlubmVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIHsgdHlwZTogJ2lubmVyJyB9KSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYW52YXNQYW5lbCwgeyBrZXk6ICdjYW52YXNpbm5lcicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7IHR5cGU6ICdpbm5lcicgfSkpLFxuICBdKTtcblxuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8RGV0YWlsUGFuZWwgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsUGFuZWx9PlxuICAvLyAgICAgICA8Tm9kZVBhbmVsPlxuICAvLyAgICAgICAgIDxEZXRhaWxGb3JtIHR5cGU9XCJub2RlXCIgLz5cbiAgLy8gICAgICAgPC9Ob2RlUGFuZWw+XG4gIC8vICAgICAgIDxFZGdlUGFuZWw+XG4gIC8vICAgICAgICAgPERldGFpbEZvcm0gdHlwZT1cImVkZ2VcIiAvPlxuICAvLyAgICAgICA8L0VkZ2VQYW5lbD5cbiAgLy8gICAgICAgPEdyb3VwUGFuZWw+XG4gIC8vICAgICAgICAgPERldGFpbEZvcm0gdHlwZT1cImdyb3VwXCIgLz5cbiAgLy8gICAgICAgPC9Hcm91cFBhbmVsPlxuICAvLyAgICAgICA8TXVsdGlQYW5lbD5cbiAgLy8gICAgICAgICA8Q2FyZCB0eXBlPVwiaW5uZXJcIiBzaXplPVwic21hbGxcIiB0aXRsZT1cIk11bHRpIFNlbGVjdFwiIGJvcmRlcmVkPXtmYWxzZX0gLz5cbiAgLy8gICAgICAgPC9NdWx0aVBhbmVsPlxuICAvLyAgICAgICA8Q2FudmFzUGFuZWw+XG4gIC8vICAgICAgICAgPENhcmQgdHlwZT1cImlubmVyXCIgc2l6ZT1cInNtYWxsXCIgdGl0bGU9XCJDYW52YXNcIiBib3JkZXJlZD17ZmFsc2V9IC8+XG4gIC8vICAgICAgIDwvQ2FudmFzUGFuZWw+XG4gIC8vICAgICA8L0RldGFpbFBhbmVsPlxuICAvLyAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbG93RGV0YWlsUGFuZWw7XG4iXX0=