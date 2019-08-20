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
var FlowDetailPanel = (/**
 * @return {?}
 */
function () {
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
var ɵ0 = FlowDetailPanel;
export default FlowDetailPanel;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvd0RldGFpbFBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL2dnZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2VkaXRvci9jb21wb25lbnRzL0VkaXRvckRldGFpbFBhbmVsL0Zsb3dEZXRhaWxQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuRyxPQUFPLFVBQVUsTUFBTSxjQUFjLENBQUM7OztJQUdoQyxlQUFlOzs7QUFBRztJQUN0QixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEVBQUU7UUFDMUYsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBQSxVQUFVLEVBQU8sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3pHLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQUEsVUFBVSxFQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6RyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFBLFVBQVUsRUFBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDNUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNwRyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZHLENBQUMsQ0FBQztJQUVILGFBQWE7SUFDYixtREFBbUQ7SUFDbkQsb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1GQUFtRjtJQUNuRixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDZFQUE2RTtJQUM3RSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLE9BQU87QUFDVCxDQUFDLENBQUE7O0FBRUQsZUFBZSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgTm9kZVBhbmVsLCBFZGdlUGFuZWwsIEdyb3VwUGFuZWwsIE11bHRpUGFuZWwsIENhbnZhc1BhbmVsLCBEZXRhaWxQYW5lbCB9IGZyb20gJ2dnLWVkaXRvcic7XG5pbXBvcnQgRGV0YWlsRm9ybSBmcm9tICcuL0RldGFpbEZvcm0nO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvaW5kZXgubGVzcyc7XG5cbmNvbnN0IEZsb3dEZXRhaWxQYW5lbCA9ICgpID0+IHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGV0YWlsUGFuZWwsIHsgY2xhc3NOYW1lOiAnZGV0YWlsLXBhbmVsJywga2V5OiAnZGV0YWlsLXBhbmVsJyB9LCBbXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChOb2RlUGFuZWwsIHsga2V5OiAnbm9kZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChEZXRhaWxGb3JtIGFzIGFueSwgeyB0eXBlOiAnbm9kZScgfSkpLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRnZVBhbmVsLCB7IGtleTogJ2VkZ2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGV0YWlsRm9ybSBhcyBhbnksIHsgdHlwZTogJ2VkZ2UnIH0pKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyb3VwUGFuZWwsIHsga2V5OiAnZ3JvdXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGV0YWlsRm9ybSBhcyBhbnksIHsgdHlwZTogJ2dyb3VwJyB9KSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChNdWx0aVBhbmVsLCB7IGtleTogJ211bHRpaW5uZXInIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgeyB0eXBlOiAnaW5uZXInIH0pKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhbnZhc1BhbmVsLCB7IGtleTogJ2NhbnZhc2lubmVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIHsgdHlwZTogJ2lubmVyJyB9KSksXG4gIF0pO1xuXG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxEZXRhaWxQYW5lbCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxQYW5lbH0+XG4gIC8vICAgICAgIDxOb2RlUGFuZWw+XG4gIC8vICAgICAgICAgPERldGFpbEZvcm0gdHlwZT1cIm5vZGVcIiAvPlxuICAvLyAgICAgICA8L05vZGVQYW5lbD5cbiAgLy8gICAgICAgPEVkZ2VQYW5lbD5cbiAgLy8gICAgICAgICA8RGV0YWlsRm9ybSB0eXBlPVwiZWRnZVwiIC8+XG4gIC8vICAgICAgIDwvRWRnZVBhbmVsPlxuICAvLyAgICAgICA8R3JvdXBQYW5lbD5cbiAgLy8gICAgICAgICA8RGV0YWlsRm9ybSB0eXBlPVwiZ3JvdXBcIiAvPlxuICAvLyAgICAgICA8L0dyb3VwUGFuZWw+XG4gIC8vICAgICAgIDxNdWx0aVBhbmVsPlxuICAvLyAgICAgICAgIDxDYXJkIHR5cGU9XCJpbm5lclwiIHNpemU9XCJzbWFsbFwiIHRpdGxlPVwiTXVsdGkgU2VsZWN0XCIgYm9yZGVyZWQ9e2ZhbHNlfSAvPlxuICAvLyAgICAgICA8L011bHRpUGFuZWw+XG4gIC8vICAgICAgIDxDYW52YXNQYW5lbD5cbiAgLy8gICAgICAgICA8Q2FyZCB0eXBlPVwiaW5uZXJcIiBzaXplPVwic21hbGxcIiB0aXRsZT1cIkNhbnZhc1wiIGJvcmRlcmVkPXtmYWxzZX0gLz5cbiAgLy8gICAgICAgPC9DYW52YXNQYW5lbD5cbiAgLy8gICAgIDwvRGV0YWlsUGFuZWw+XG4gIC8vICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dEZXRhaWxQYW5lbDtcbiJdfQ==