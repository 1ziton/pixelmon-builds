/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Flow } from 'gg-editor';
import EditorMinimap from '../components/EditorMinimap/EditorMinimap';
import { FlowContextMenu } from '../components/EditorContextMenu';
import { FlowToolbar } from '../components/EditorToolbar';
import FlowItemPanel from '../components/EditorItemPanel/FlowItemPanel';
import { FlowDetailPanel } from '../components/EditorDetailPanel';
// import styles from './index.less';
/** @type {?} */
var FlowPage = (/**
 * @param {?} props
 * @return {?}
 */
function (props) {
    var data = props.data;
    return React.createElement(GGEditor, { className: 'editor' }, [
        React.createElement(Row, { type: 'flex', className: 'editorHd', key: 'editorHd' }, React.createElement(Col, { span: 24 }, FlowToolbar())),
        React.createElement(Row, { type: 'flex', className: 'editorBd', key: 'editorBd' }, [
            React.createElement(Col, { span: 4, className: 'editorSidebar', key: 'editorSidebar' }, FlowItemPanel()),
            React.createElement(Col, { span: 16, className: 'editorContent', key: 'editorContent' }, React.createElement(Flow, { data: data, style: { width: '100%', height: '100%' } })),
            React.createElement(Col, { span: 4, className: 'minimap', key: 'minimap' }, [FlowDetailPanel(), EditorMinimap()]),
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
var ɵ0 = FlowPage;
export default FlowPage;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvd1BhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vZ2dlZGl0b3IvIiwic291cmNlcyI6WyJzcmMvZWRpdG9yL2Zsb3cvRmxvd1BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLGFBQWEsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sYUFBYSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0lBRzVELFFBQVE7Ozs7QUFBRyxVQUFDLEtBQUs7SUFDYixJQUFBLGlCQUFJO0lBQ1osT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUM1RCxLQUFLLENBQUMsYUFBYSxDQUNqQixHQUFHLEVBQ0gsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUN4RCxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUN0RDtRQUNELEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUNqRixLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUM7WUFDeEcsS0FBSyxDQUFDLGFBQWEsQ0FDakIsR0FBRyxFQUNILEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsRUFDOUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQzlFO1lBQ0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNsSCxDQUFDO1FBQ0YsZUFBZSxFQUFFO0tBQ2xCLENBQUMsQ0FBQztJQUNILGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0Msc0RBQXNEO0lBQ3RELDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQsMERBQTBEO0lBQzFELDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsMkRBQTJEO0lBQzNELDZDQUE2QztJQUM3QyxpQkFBaUI7SUFDakIsMERBQTBEO0lBQzFELGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE9BQU87QUFDVCxDQUFDLENBQUE7O0FBRUQsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcbmltcG9ydCBHR0VkaXRvciwgeyBGbG93IH0gZnJvbSAnZ2ctZWRpdG9yJztcbmltcG9ydCBFZGl0b3JNaW5pbWFwIGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdG9yTWluaW1hcC9FZGl0b3JNaW5pbWFwJztcbmltcG9ydCB7IEZsb3dDb250ZXh0TWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdG9yQ29udGV4dE1lbnUnO1xuaW1wb3J0IHsgRmxvd1Rvb2xiYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRvclRvb2xiYXInO1xuaW1wb3J0IEZsb3dJdGVtUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9FZGl0b3JJdGVtUGFuZWwvRmxvd0l0ZW1QYW5lbCc7XG5pbXBvcnQgeyBGbG93RGV0YWlsUGFuZWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRvckRldGFpbFBhbmVsJztcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5sZXNzJztcblxuY29uc3QgRmxvd1BhZ2UgPSAocHJvcHMpOiBhbnkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChHR0VkaXRvciwgeyBjbGFzc05hbWU6ICdlZGl0b3InIH0sIFtcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgUm93LFxuICAgICAgeyB0eXBlOiAnZmxleCcsIGNsYXNzTmFtZTogJ2VkaXRvckhkJywga2V5OiAnZWRpdG9ySGQnIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBzcGFuOiAyNCB9LCBGbG93VG9vbGJhcigpKSxcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7IHR5cGU6ICdmbGV4JywgY2xhc3NOYW1lOiAnZWRpdG9yQmQnLCBrZXk6ICdlZGl0b3JCZCcgfSwgW1xuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2wsIHsgc3BhbjogNCwgY2xhc3NOYW1lOiAnZWRpdG9yU2lkZWJhcicsIGtleTogJ2VkaXRvclNpZGViYXInIH0sIEZsb3dJdGVtUGFuZWwoKSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb2wsXG4gICAgICAgIHsgc3BhbjogMTYsIGNsYXNzTmFtZTogJ2VkaXRvckNvbnRlbnQnLCBrZXk6ICdlZGl0b3JDb250ZW50JyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZsb3csIHsgZGF0YSwgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfSB9KSxcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbCwgeyBzcGFuOiA0LCBjbGFzc05hbWU6ICdtaW5pbWFwJywga2V5OiAnbWluaW1hcCcgfSwgW0Zsb3dEZXRhaWxQYW5lbCgpLCBFZGl0b3JNaW5pbWFwKCldKSxcbiAgICBdKSxcbiAgICBGbG93Q29udGV4dE1lbnUoKSxcbiAgXSk7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxHR0VkaXRvciBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3J9PlxuICAvLyAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9ySGR9PlxuICAvLyAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAvLyAgICAgICAgICAgPEZsb3dUb29sYmFyIC8+XG4gIC8vICAgICAgICAgPC9Db2w+XG4gIC8vICAgICAgIDwvUm93PlxuICAvLyAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yQmR9PlxuICAvLyAgICAgICAgIDxDb2wgc3Bhbj17NH0gY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yU2lkZWJhcn0+XG4gIC8vICAgICAgICAgICA8Rmxvd0l0ZW1QYW5lbCAvPlxuICAvLyAgICAgICAgIDwvQ29sPlxuICAvLyAgICAgICAgIDxDb2wgc3Bhbj17MTZ9IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvckNvbnRlbnR9PlxuICAvLyAgICAgICAgICAgPEZsb3cgY2xhc3NOYW1lPXtzdHlsZXMuZmxvd30gLz5cbiAgLy8gICAgICAgICA8L0NvbD5cbiAgLy8gICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvclNpZGViYXJ9PlxuICAvLyAgICAgICAgICAgPEZsb3dEZXRhaWxQYW5lbCAvPlxuICAvLyAgICAgICAgICAgPEVkaXRvck1pbmltYXAgLz5cbiAgLy8gICAgICAgICA8L0NvbD5cbiAgLy8gICAgICAgPC9Sb3c+XG4gIC8vICAgICAgIDxGbG93Q29udGV4dE1lbnUgLz5cbiAgLy8gICAgIDwvR0dFZGl0b3I+XG4gIC8vICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dQYWdlO1xuIl19