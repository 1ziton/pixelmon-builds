/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import React, { Fragment } from 'react';
import { Card, Form, Input, Select } from 'antd';
import { withPropsAPI } from 'gg-editor';
const { Item } = Form;
const { Option } = Select;
/** @type {?} */
const inlineFormItemLayout = {
    labelCol: {
        sm: { span: 8 },
    },
    wrapperCol: {
        sm: { span: 16 },
    },
};
class DetailForm extends React.Component {
    constructor() {
        super(...arguments);
        this.handleSubmit = (/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            const { form, propsAPI } = (/** @type {?} */ (this.props));
            const { getSelected, executeCommand, update } = propsAPI;
            setTimeout((/**
             * @return {?}
             */
            () => {
                form.validateFieldsAndScroll((/**
                 * @param {?} err
                 * @param {?} values
                 * @return {?}
                 */
                (err, values) => {
                    if (err) {
                        return;
                    }
                    /** @type {?} */
                    const item = getSelected()[0];
                    if (!item) {
                        return;
                    }
                    executeCommand((/**
                     * @return {?}
                     */
                    () => {
                        update(item, Object.assign({}, values));
                    }));
                }));
            }), 0);
        });
        this.renderEdgeShapeSelect = (/**
         * @return {?}
         */
        () => {
            return React.createElement(Select, { onChange: this.handleSubmit, key: 'edgeshapselect' }, [
                React.createElement(Option, { value: 'flow-smooth', key: 'smooth' }, 'Smooth'),
                React.createElement(Option, { value: 'flow-polyline', key: 'polyline' }, 'Polyline'),
                React.createElement(Option, { value: 'flow-polyline-round', key: 'pround' }, 'Polyline Round'),
            ]);
            // return (
            //   <Select onChange={this.handleSubmit}>
            //     <Option value="flow-smooth">Smooth</Option>
            //     <Option value="flow-polyline">Polyline</Option>
            //     <Option value="flow-polyline-round">Polyline Round</Option>
            //   </Select>
            // );
        });
        this.renderNodeDetail = (/**
         * @return {?}
         */
        () => {
            const { form } = (/** @type {?} */ (this.props));
            const { label } = this.item.getModel();
            return React.createElement((/** @type {?} */ (Item)), Object.assign({ label: 'Label' }, inlineFormItemLayout, { key: 'nodedetailitem' }), form.getFieldDecorator('label', {
                initialValue: label,
                key: 'nodedetaillabel',
            })(React.createElement(Input, { onBlur: this.handleSubmit, key: 'nodedetaillabel-input' })));
            // return (
            //   <Item label= "Label" {...inlineFormItemLayout }>
            //     {
            //       form.getFieldDecorator('label', {
            //         initialValue: label,
            //       })(<Input onBlur={ this.handleSubmit } />)
            //     }
            //     < /Item>
            // );
        });
        this.shapeItem = (/**
         * @return {?}
         */
        () => {
            const { form } = (/** @type {?} */ (this.props));
            const { shape = 'flow-smooth' } = this.item.getModel();
            return React.createElement((/** @type {?} */ (Item)), Object.assign({ label: 'Shape' }, inlineFormItemLayout, { key: 'shapitem' }), form.getFieldDecorator('shape', {
                initialValue: shape,
                key: 'shapedetaillabel',
            })(this.renderEdgeShapeSelect()));
        });
        this.renderEdgeDetail = (/**
         * @return {?}
         */
        () => {
            // const { form } = this.props as any;
            // const { label = '', shape = 'flow-smooth' } = this.item.getModel();
            return React.createElement((/** @type {?} */ (Fragment)), { key: 'fagment' }, [this.renderNodeDetail(), this.shapeItem()]);
            // return (
            //   <Fragment>
            //   <Item label= "Label" {...inlineFormItemLayout }>
            //     {
            //       form.getFieldDecorator('label', {
            //         initialValue: label,
            //       })(<Input onBlur={ this.handleSubmit } />)
            //     }
            //     < /Item>
            //     < Item label = "Shape" {...inlineFormItemLayout }>
            //       {
            //         form.getFieldDecorator('shape', {
            //           initialValue: shape,
            //         })(this.renderEdgeShapeSelect())
            //       }
            //       < /Item>
            //       < /Fragment>
            // );
        });
        this.renderGroupDetail = (/**
         * @return {?}
         */
        () => {
            const { form } = (/** @type {?} */ (this.props));
            const { label = '新建分组' } = this.item.getModel();
            return React.createElement((/** @type {?} */ (Item)), Object.assign({ label: 'Label' }, inlineFormItemLayout), [
                form.getFieldDecorator('label', {
                    initialValue: label,
                    key: 'groupdetailitem',
                }),
                React.createElement(Input, { onBlur: this.handleSubmit, key: 'input' }),
            ]);
            // return (
            //   <Item label= "Label" {...inlineFormItemLayout }>
            //     {
            //       form.getFieldDecorator('label', {
            //         initialValue: label,
            //       })(<Input onBlur={ this.handleSubmit } />)
            //     }
            //     < /Item>
            // );
        });
    }
    /**
     * @return {?}
     */
    get item() {
        const { propsAPI } = (/** @type {?} */ (this.props));
        return propsAPI.getSelected()[0];
    }
    /**
     * @return {?}
     */
    render() {
        const { type } = (/** @type {?} */ (this.props));
        if (!this.item) {
            return null;
        }
        /** @type {?} */
        let detailNode;
        if (type === 'node') {
            detailNode = this.renderNodeDetail();
        }
        else if (type === 'edge') {
            detailNode = this.renderEdgeDetail();
        }
        else if (type === 'group') {
            detailNode = this.renderGroupDetail();
        }
        return React.createElement(Card, { type: 'inner', size: 'small', title: type, bordered: false }, React.createElement(Form, { onSubmit: this.handleSubmit }, detailNode));
        // return (
        //   <Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
        //     <Form onSubmit={this.handleSubmit}>
        //       {type === 'node' && this.renderNodeDetail()}
        //       {type === 'edge' && this.renderEdgeDetail()}
        //       {type === 'group' && this.renderGroupDetail()}
        //     </Form>
        //   </Card>
        // );
    }
}
if (false) {
    /** @type {?} */
    DetailForm.prototype.handleSubmit;
    /** @type {?} */
    DetailForm.prototype.renderEdgeShapeSelect;
    /** @type {?} */
    DetailForm.prototype.renderNodeDetail;
    /** @type {?} */
    DetailForm.prototype.shapeItem;
    /** @type {?} */
    DetailForm.prototype.renderEdgeDetail;
    /** @type {?} */
    DetailForm.prototype.renderGroupDetail;
}
export default Form.create()(withPropsAPI(DetailForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0YWlsRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9nZ2VkaXRvci8iLCJzb3VyY2VzIjpbInNyYy9lZGl0b3IvY29tcG9uZW50cy9FZGl0b3JEZXRhaWxQYW5lbC9EZXRhaWxGb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7TUFFbkMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJO01BQ2YsRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNOztNQUVuQixvQkFBb0IsR0FBRztJQUMzQixRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0tBQ2hCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtLQUNqQjtDQUNGO0FBRUQsTUFBTSxVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQVM7SUFBeEM7O1FBT0UsaUJBQVk7Ozs7UUFBRyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFO2dCQUN6QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDcEI7a0JBRUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBTztrQkFDdEMsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVE7WUFFeEQsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyx1QkFBdUI7Ozs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO29CQUMzQyxJQUFJLEdBQUcsRUFBRTt3QkFDUCxPQUFPO3FCQUNSOzswQkFFSyxJQUFJLEdBQUcsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUU3QixJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNULE9BQU87cUJBQ1I7b0JBRUQsY0FBYzs7O29CQUFDLEdBQUcsRUFBRTt3QkFDbEIsTUFBTSxDQUFDLElBQUksb0JBQ04sTUFBTSxFQUNULENBQUM7b0JBQ0wsQ0FBQyxFQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDLEVBQUM7UUFFRiwwQkFBcUI7OztRQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEVBQUU7Z0JBQ3pGLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUM5RSxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLFVBQVUsQ0FBQztnQkFDcEYsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLGdCQUFnQixDQUFDO2FBQy9GLENBQUMsQ0FBQztZQUNILFdBQVc7WUFDWCwwQ0FBMEM7WUFDMUMsa0RBQWtEO1lBQ2xELHNEQUFzRDtZQUN0RCxrRUFBa0U7WUFDbEUsY0FBYztZQUNkLEtBQUs7UUFDUCxDQUFDLEVBQUM7UUFFRixxQkFBZ0I7OztRQUFHLEdBQUcsRUFBRTtrQkFDaEIsRUFBRSxJQUFJLEVBQUUsR0FBRyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFPO2tCQUM1QixFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBRXRDLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FDeEIsbUJBQUEsSUFBSSxFQUFPLGtCQUNULEtBQUssRUFBRSxPQUFPLElBQUssb0JBQW9CLElBQUUsR0FBRyxFQUFFLGdCQUFnQixLQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFO2dCQUM5QixZQUFZLEVBQUUsS0FBSztnQkFDbkIsR0FBRyxFQUFFLGlCQUFpQjthQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQzVGLENBQUM7WUFDRixXQUFXO1lBQ1gscURBQXFEO1lBQ3JELFFBQVE7WUFDUiwwQ0FBMEM7WUFDMUMsK0JBQStCO1lBQy9CLG1EQUFtRDtZQUNuRCxRQUFRO1lBQ1IsZUFBZTtZQUNmLEtBQUs7UUFDUCxDQUFDLEVBQUM7UUFFRixjQUFTOzs7UUFBRyxHQUFHLEVBQUU7a0JBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFPO2tCQUM1QixFQUFFLEtBQUssR0FBRyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUV0RCxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQ3hCLG1CQUFBLElBQUksRUFBTyxrQkFDVCxLQUFLLEVBQUUsT0FBTyxJQUFLLG9CQUFvQixJQUFFLEdBQUcsRUFBRSxVQUFVLEtBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLFlBQVksRUFBRSxLQUFLO2dCQUNuQixHQUFHLEVBQUUsa0JBQWtCO2FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUNqQyxDQUFDO1FBQ0osQ0FBQyxFQUFDO1FBRUYscUJBQWdCOzs7UUFBRyxHQUFHLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLHNFQUFzRTtZQUV0RSxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQUEsUUFBUSxFQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTdHLFdBQVc7WUFDWCxlQUFlO1lBQ2YscURBQXFEO1lBQ3JELFFBQVE7WUFDUiwwQ0FBMEM7WUFDMUMsK0JBQStCO1lBQy9CLG1EQUFtRDtZQUNuRCxRQUFRO1lBQ1IsZUFBZTtZQUNmLHlEQUF5RDtZQUN6RCxVQUFVO1lBQ1YsNENBQTRDO1lBQzVDLGlDQUFpQztZQUNqQywyQ0FBMkM7WUFDM0MsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsS0FBSztRQUNQLENBQUMsRUFBQztRQUVGLHNCQUFpQjs7O1FBQUcsR0FBRyxFQUFFO2tCQUNqQixFQUFFLElBQUksRUFBRSxHQUFHLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQU87a0JBQzVCLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBRS9DLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sa0JBQUksS0FBSyxFQUFFLE9BQU8sSUFBSyxvQkFBb0IsR0FBSTtnQkFDbkYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtvQkFDOUIsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLEdBQUcsRUFBRSxpQkFBaUI7aUJBQ3ZCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDeEUsQ0FBQyxDQUFDO1lBRUgsV0FBVztZQUNYLHFEQUFxRDtZQUNyRCxRQUFRO1lBQ1IsMENBQTBDO1lBQzFDLCtCQUErQjtZQUMvQixtREFBbUQ7WUFDbkQsUUFBUTtZQUNSLGVBQWU7WUFDZixLQUFLO1FBQ1AsQ0FBQyxFQUFDO0lBa0NKLENBQUM7Ozs7SUF4S0MsSUFBSSxJQUFJO2NBQ0EsRUFBRSxRQUFRLEVBQUUsR0FBRyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFPO1FBRXRDLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFvSUQsTUFBTTtjQUNFLEVBQUUsSUFBSSxFQUFFLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBTztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBQ0csVUFBVTtRQUNkLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUNuQixVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdEM7YUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzNCLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN2QztRQUVELE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FDeEIsSUFBSSxFQUNKLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUU5RCxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQ3ZFLENBQUM7UUFFRixXQUFXO1FBQ1gsK0VBQStFO1FBQy9FLDBDQUEwQztRQUMxQyxxREFBcUQ7UUFDckQscURBQXFEO1FBQ3JELHVEQUF1RDtRQUN2RCxjQUFjO1FBQ2QsWUFBWTtRQUNaLEtBQUs7SUFDUCxDQUFDO0NBQ0Y7OztJQWxLQyxrQ0EyQkU7O0lBRUYsMkNBYUU7O0lBRUYsc0NBcUJFOztJQUVGLCtCQVlFOztJQUVGLHNDQXdCRTs7SUFFRix1Q0FxQkU7O0FBb0NKLGVBQWUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgRm9ybSwgSW5wdXQsIFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgd2l0aFByb3BzQVBJIH0gZnJvbSAnZ2ctZWRpdG9yJztcblxuY29uc3QgeyBJdGVtIH0gPSBGb3JtO1xuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcblxuY29uc3QgaW5saW5lRm9ybUl0ZW1MYXlvdXQgPSB7XG4gIGxhYmVsQ29sOiB7XG4gICAgc206IHsgc3BhbjogOCB9LFxuICB9LFxuICB3cmFwcGVyQ29sOiB7XG4gICAgc206IHsgc3BhbjogMTYgfSxcbiAgfSxcbn07XG5cbmNsYXNzIERldGFpbEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXQgaXRlbSgpIHtcbiAgICBjb25zdCB7IHByb3BzQVBJIH0gPSB0aGlzLnByb3BzIGFzIGFueTtcblxuICAgIHJldHVybiBwcm9wc0FQSS5nZXRTZWxlY3RlZCgpWzBdO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgaWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZm9ybSwgcHJvcHNBUEkgfSA9IHRoaXMucHJvcHMgYXMgYW55O1xuICAgIGNvbnN0IHsgZ2V0U2VsZWN0ZWQsIGV4ZWN1dGVDb21tYW5kLCB1cGRhdGUgfSA9IHByb3BzQVBJO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtLnZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IGdldFNlbGVjdGVkKClbMF07XG5cbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhlY3V0ZUNvbW1hbmQoKCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZShpdGVtLCB7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgcmVuZGVyRWRnZVNoYXBlU2VsZWN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyBvbkNoYW5nZTogdGhpcy5oYW5kbGVTdWJtaXQsIGtleTogJ2VkZ2VzaGFwc2VsZWN0JyB9LCBbXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogJ2Zsb3ctc21vb3RoJywga2V5OiAnc21vb3RoJyB9LCAnU21vb3RoJyksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogJ2Zsb3ctcG9seWxpbmUnLCBrZXk6ICdwb2x5bGluZScgfSwgJ1BvbHlsaW5lJyksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgeyB2YWx1ZTogJ2Zsb3ctcG9seWxpbmUtcm91bmQnLCBrZXk6ICdwcm91bmQnIH0sICdQb2x5bGluZSBSb3VuZCcpLFxuICAgIF0pO1xuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8U2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgLy8gICAgIDxPcHRpb24gdmFsdWU9XCJmbG93LXNtb290aFwiPlNtb290aDwvT3B0aW9uPlxuICAgIC8vICAgICA8T3B0aW9uIHZhbHVlPVwiZmxvdy1wb2x5bGluZVwiPlBvbHlsaW5lPC9PcHRpb24+XG4gICAgLy8gICAgIDxPcHRpb24gdmFsdWU9XCJmbG93LXBvbHlsaW5lLXJvdW5kXCI+UG9seWxpbmUgUm91bmQ8L09wdGlvbj5cbiAgICAvLyAgIDwvU2VsZWN0PlxuICAgIC8vICk7XG4gIH07XG5cbiAgcmVuZGVyTm9kZURldGFpbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMucHJvcHMgYXMgYW55O1xuICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMuaXRlbS5nZXRNb2RlbCgpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBJdGVtIGFzIGFueSxcbiAgICAgIHsgbGFiZWw6ICdMYWJlbCcsIC4uLmlubGluZUZvcm1JdGVtTGF5b3V0LCBrZXk6ICdub2RlZGV0YWlsaXRlbScgfSxcbiAgICAgIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoJ2xhYmVsJywge1xuICAgICAgICBpbml0aWFsVmFsdWU6IGxhYmVsLFxuICAgICAgICBrZXk6ICdub2RlZGV0YWlsbGFiZWwnLFxuICAgICAgfSkoUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBvbkJsdXI6IHRoaXMuaGFuZGxlU3VibWl0LCBrZXk6ICdub2RlZGV0YWlsbGFiZWwtaW5wdXQnIH0pKSxcbiAgICApO1xuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8SXRlbSBsYWJlbD0gXCJMYWJlbFwiIHsuLi5pbmxpbmVGb3JtSXRlbUxheW91dCB9PlxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgZm9ybS5nZXRGaWVsZERlY29yYXRvcignbGFiZWwnLCB7XG4gICAgLy8gICAgICAgICBpbml0aWFsVmFsdWU6IGxhYmVsLFxuICAgIC8vICAgICAgIH0pKDxJbnB1dCBvbkJsdXI9eyB0aGlzLmhhbmRsZVN1Ym1pdCB9IC8+KVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIDwgL0l0ZW0+XG4gICAgLy8gKTtcbiAgfTtcblxuICBzaGFwZUl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnByb3BzIGFzIGFueTtcbiAgICBjb25zdCB7IHNoYXBlID0gJ2Zsb3ctc21vb3RoJyB9ID0gdGhpcy5pdGVtLmdldE1vZGVsKCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIEl0ZW0gYXMgYW55LFxuICAgICAgeyBsYWJlbDogJ1NoYXBlJywgLi4uaW5saW5lRm9ybUl0ZW1MYXlvdXQsIGtleTogJ3NoYXBpdGVtJyB9LFxuICAgICAgZm9ybS5nZXRGaWVsZERlY29yYXRvcignc2hhcGUnLCB7XG4gICAgICAgIGluaXRpYWxWYWx1ZTogc2hhcGUsXG4gICAgICAgIGtleTogJ3NoYXBlZGV0YWlsbGFiZWwnLFxuICAgICAgfSkodGhpcy5yZW5kZXJFZGdlU2hhcGVTZWxlY3QoKSksXG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJFZGdlRGV0YWlsID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcyBhcyBhbnk7XG4gICAgLy8gY29uc3QgeyBsYWJlbCA9ICcnLCBzaGFwZSA9ICdmbG93LXNtb290aCcgfSA9IHRoaXMuaXRlbS5nZXRNb2RlbCgpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQgYXMgYW55LCB7IGtleTogJ2ZhZ21lbnQnIH0sIFt0aGlzLnJlbmRlck5vZGVEZXRhaWwoKSwgdGhpcy5zaGFwZUl0ZW0oKV0pO1xuXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgIDxGcmFnbWVudD5cbiAgICAvLyAgIDxJdGVtIGxhYmVsPSBcIkxhYmVsXCIgey4uLmlubGluZUZvcm1JdGVtTGF5b3V0IH0+XG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCdsYWJlbCcsIHtcbiAgICAvLyAgICAgICAgIGluaXRpYWxWYWx1ZTogbGFiZWwsXG4gICAgLy8gICAgICAgfSkoPElucHV0IG9uQmx1cj17IHRoaXMuaGFuZGxlU3VibWl0IH0gLz4pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgPCAvSXRlbT5cbiAgICAvLyAgICAgPCBJdGVtIGxhYmVsID0gXCJTaGFwZVwiIHsuLi5pbmxpbmVGb3JtSXRlbUxheW91dCB9PlxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoJ3NoYXBlJywge1xuICAgIC8vICAgICAgICAgICBpbml0aWFsVmFsdWU6IHNoYXBlLFxuICAgIC8vICAgICAgICAgfSkodGhpcy5yZW5kZXJFZGdlU2hhcGVTZWxlY3QoKSlcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgPCAvSXRlbT5cbiAgICAvLyAgICAgICA8IC9GcmFnbWVudD5cbiAgICAvLyApO1xuICB9O1xuXG4gIHJlbmRlckdyb3VwRGV0YWlsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcyBhcyBhbnk7XG4gICAgY29uc3QgeyBsYWJlbCA9ICfmlrDlu7rliIbnu4QnIH0gPSB0aGlzLml0ZW0uZ2V0TW9kZWwoKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0gYXMgYW55LCB7IGxhYmVsOiAnTGFiZWwnLCAuLi5pbmxpbmVGb3JtSXRlbUxheW91dCB9LCBbXG4gICAgICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCdsYWJlbCcsIHtcbiAgICAgICAgaW5pdGlhbFZhbHVlOiBsYWJlbCxcbiAgICAgICAga2V5OiAnZ3JvdXBkZXRhaWxpdGVtJyxcbiAgICAgIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBvbkJsdXI6IHRoaXMuaGFuZGxlU3VibWl0LCBrZXk6ICdpbnB1dCcgfSksXG4gICAgXSk7XG5cbiAgICAvLyByZXR1cm4gKFxuICAgIC8vICAgPEl0ZW0gbGFiZWw9IFwiTGFiZWxcIiB7Li4uaW5saW5lRm9ybUl0ZW1MYXlvdXQgfT5cbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoJ2xhYmVsJywge1xuICAgIC8vICAgICAgICAgaW5pdGlhbFZhbHVlOiBsYWJlbCxcbiAgICAvLyAgICAgICB9KSg8SW5wdXQgb25CbHVyPXsgdGhpcy5oYW5kbGVTdWJtaXQgfSAvPilcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICA8IC9JdGVtPlxuICAgIC8vICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5wcm9wcyBhcyBhbnk7XG5cbiAgICBpZiAoIXRoaXMuaXRlbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBkZXRhaWxOb2RlO1xuICAgIGlmICh0eXBlID09PSAnbm9kZScpIHtcbiAgICAgIGRldGFpbE5vZGUgPSB0aGlzLnJlbmRlck5vZGVEZXRhaWwoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlZGdlJykge1xuICAgICAgZGV0YWlsTm9kZSA9IHRoaXMucmVuZGVyRWRnZURldGFpbCgpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgZGV0YWlsTm9kZSA9IHRoaXMucmVuZGVyR3JvdXBEZXRhaWwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIENhcmQsXG4gICAgICB7IHR5cGU6ICdpbm5lcicsIHNpemU6ICdzbWFsbCcsIHRpdGxlOiB0eXBlLCBib3JkZXJlZDogZmFsc2UgfSxcblxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCB7IG9uU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdCB9LCBkZXRhaWxOb2RlKSxcbiAgICApO1xuXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgIDxDYXJkIHR5cGU9XCJpbm5lclwiIHNpemU9XCJzbWFsbFwiIHRpdGxlPXt1cHBlckZpcnN0KHR5cGUpfSBib3JkZXJlZD17ZmFsc2V9PlxuICAgIC8vICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgIC8vICAgICAgIHt0eXBlID09PSAnbm9kZScgJiYgdGhpcy5yZW5kZXJOb2RlRGV0YWlsKCl9XG4gICAgLy8gICAgICAge3R5cGUgPT09ICdlZGdlJyAmJiB0aGlzLnJlbmRlckVkZ2VEZXRhaWwoKX1cbiAgICAvLyAgICAgICB7dHlwZSA9PT0gJ2dyb3VwJyAmJiB0aGlzLnJlbmRlckdyb3VwRGV0YWlsKCl9XG4gICAgLy8gICAgIDwvRm9ybT5cbiAgICAvLyAgIDwvQ2FyZD5cbiAgICAvLyApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm0uY3JlYXRlKCkod2l0aFByb3BzQVBJKERldGFpbEZvcm0pKTtcbiJdfQ==