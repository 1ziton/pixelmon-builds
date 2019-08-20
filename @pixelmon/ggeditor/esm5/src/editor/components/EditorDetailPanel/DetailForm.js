/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import { Card, Form, Input, Select } from 'antd';
import { withPropsAPI } from 'gg-editor';
var Item = Form.Item;
var Option = Select.Option;
/** @type {?} */
var inlineFormItemLayout = {
    labelCol: {
        sm: { span: 8 },
    },
    wrapperCol: {
        sm: { span: 16 },
    },
};
var DetailForm = /** @class */ (function (_super) {
    tslib_1.__extends(DetailForm, _super);
    function DetailForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            var _a = (/** @type {?} */ (_this.props)), form = _a.form, propsAPI = _a.propsAPI;
            var getSelected = propsAPI.getSelected, executeCommand = propsAPI.executeCommand, update = propsAPI.update;
            setTimeout((/**
             * @return {?}
             */
            function () {
                form.validateFieldsAndScroll((/**
                 * @param {?} err
                 * @param {?} values
                 * @return {?}
                 */
                function (err, values) {
                    if (err) {
                        return;
                    }
                    /** @type {?} */
                    var item = getSelected()[0];
                    if (!item) {
                        return;
                    }
                    executeCommand((/**
                     * @return {?}
                     */
                    function () {
                        update(item, tslib_1.__assign({}, values));
                    }));
                }));
            }), 0);
        });
        _this.renderEdgeShapeSelect = (/**
         * @return {?}
         */
        function () {
            return React.createElement(Select, { onChange: _this.handleSubmit, key: 'edgeshapselect' }, [
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
        _this.renderNodeDetail = (/**
         * @return {?}
         */
        function () {
            var form = (/** @type {?} */ (_this.props)).form;
            var label = _this.item.getModel().label;
            return React.createElement((/** @type {?} */ (Item)), tslib_1.__assign({ label: 'Label' }, inlineFormItemLayout, { key: 'nodedetailitem' }), form.getFieldDecorator('label', {
                initialValue: label,
                key: 'nodedetaillabel',
            })(React.createElement(Input, { onBlur: _this.handleSubmit, key: 'nodedetaillabel-input' })));
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
        _this.shapeItem = (/**
         * @return {?}
         */
        function () {
            var form = (/** @type {?} */ (_this.props)).form;
            var _a = _this.item.getModel().shape, shape = _a === void 0 ? 'flow-smooth' : _a;
            return React.createElement((/** @type {?} */ (Item)), tslib_1.__assign({ label: 'Shape' }, inlineFormItemLayout, { key: 'shapitem' }), form.getFieldDecorator('shape', {
                initialValue: shape,
                key: 'shapedetaillabel',
            })(_this.renderEdgeShapeSelect()));
        });
        _this.renderEdgeDetail = (/**
         * @return {?}
         */
        function () {
            // const { form } = this.props as any;
            // const { label = '', shape = 'flow-smooth' } = this.item.getModel();
            return React.createElement((/** @type {?} */ (Fragment)), { key: 'fagment' }, [_this.renderNodeDetail(), _this.shapeItem()]);
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
        _this.renderGroupDetail = (/**
         * @return {?}
         */
        function () {
            var form = (/** @type {?} */ (_this.props)).form;
            var _a = _this.item.getModel().label, label = _a === void 0 ? '新建分组' : _a;
            return React.createElement((/** @type {?} */ (Item)), tslib_1.__assign({ label: 'Label' }, inlineFormItemLayout), [
                form.getFieldDecorator('label', {
                    initialValue: label,
                    key: 'groupdetailitem',
                }),
                React.createElement(Input, { onBlur: _this.handleSubmit, key: 'input' }),
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
        return _this;
    }
    Object.defineProperty(DetailForm.prototype, "item", {
        get: /**
         * @return {?}
         */
        function () {
            var propsAPI = (/** @type {?} */ (this.props)).propsAPI;
            return propsAPI.getSelected()[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DetailForm.prototype.render = /**
     * @return {?}
     */
    function () {
        var type = (/** @type {?} */ (this.props)).type;
        if (!this.item) {
            return null;
        }
        /** @type {?} */
        var detailNode;
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
    };
    return DetailForm;
}(React.Component));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0YWlsRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9nZ2VkaXRvci8iLCJzb3VyY2VzIjpbInNyYy9lZGl0b3IvY29tcG9uZW50cy9FZGl0b3JEZXRhaWxQYW5lbC9EZXRhaWxGb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDeEMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWpDLElBQUEsZ0JBQUk7QUFDSixJQUFBLHNCQUFNOztJQUVSLG9CQUFvQixHQUFHO0lBQzNCLFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7S0FDaEI7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0tBQ2pCO0NBQ0Y7QUFFRDtJQUF5QixzQ0FBZTtJQUF4QztRQUFBLHFFQXlLQztRQWxLQyxrQkFBWTs7OztRQUFHLFVBQUEsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNwQjtZQUVLLElBQUEscUNBQXNDLEVBQXBDLGNBQUksRUFBRSxzQkFBOEI7WUFDcEMsSUFBQSxrQ0FBVyxFQUFFLHdDQUFjLEVBQUUsd0JBQU07WUFFM0MsVUFBVTs7O1lBQUM7Z0JBQ1QsSUFBSSxDQUFDLHVCQUF1Qjs7Ozs7Z0JBQUMsVUFBQyxHQUFHLEVBQUUsTUFBTTtvQkFDdkMsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsT0FBTztxQkFDUjs7d0JBRUssSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFN0IsSUFBSSxD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QztTQUN0QzthQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMxQixVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdEM7YUFBTSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDM0IsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUN4QixJQUFJLEVBQ0osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBRTlELEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FDdkUsQ0FBQztRQUVGLFdBQVc7UUFDWCwrRUFBK0U7UUFDL0UsMENBQTBDO1FBQzFDLHFEQUFxRDtRQUNyRCxxREFBcUQ7UUFDckQsdURBQXVEO1FBQ3ZELGNBQWM7UUFDZCxZQUFZO1FBQ1osS0FBSztJQUNQLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF6S0QsQ0FBeUIsS0FBSyxDQUFDLFNBQVMsR0F5S3ZDOzs7SUFsS0Msa0NBMkJFOztJQUVGLDJDQWFFOztJQUVGLHNDQXFCRTs7SUFFRiwrQkFZRTs7SUFFRixzQ0F3QkU7O0lBRUYsdUNBcUJFOztBQW9DSixlQUFlLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEZvcm0sIElucHV0LCBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHdpdGhQcm9wc0FQSSB9IGZyb20gJ2dnLWVkaXRvcic7XG5cbmNvbnN0IHsgSXRlbSB9ID0gRm9ybTtcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5cbmNvbnN0IGlubGluZUZvcm1JdGVtTGF5b3V0ID0ge1xuICBsYWJlbENvbDoge1xuICAgIHNtOiB7IHNwYW46IDggfSxcbiAgfSxcbiAgd3JhcHBlckNvbDoge1xuICAgIHNtOiB7IHNwYW46IDE2IH0sXG4gIH0sXG59O1xuXG5jbGFzcyBEZXRhaWxGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0IGl0ZW0oKSB7XG4gICAgY29uc3QgeyBwcm9wc0FQSSB9ID0gdGhpcy5wcm9wcyBhcyBhbnk7XG5cbiAgICByZXR1cm4gcHJvcHNBUEkuZ2V0U2VsZWN0ZWQoKVswXTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGZvcm0sIHByb3BzQVBJIH0gPSB0aGlzLnByb3BzIGFzIGFueTtcbiAgICBjb25zdCB7IGdldFNlbGVjdGVkLCBleGVjdXRlQ29tbWFuZCwgdXBkYXRlIH0gPSBwcm9wc0FQSTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybS52YWxpZGF0ZUZpZWxkc0FuZFNjcm9sbCgoZXJyLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBnZXRTZWxlY3RlZCgpWzBdO1xuXG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWN1dGVDb21tYW5kKCgpID0+IHtcbiAgICAgICAgICB1cGRhdGUoaXRlbSwge1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIHJlbmRlckVkZ2VTaGFwZVNlbGVjdCA9ICgpID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgb25DaGFuZ2U6IHRoaXMuaGFuZGxlU3VibWl0LCBrZXk6ICdlZGdlc2hhcHNlbGVjdCcgfSwgW1xuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6ICdmbG93LXNtb290aCcsIGtleTogJ3Ntb290aCcgfSwgJ1Ntb290aCcpLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6ICdmbG93LXBvbHlsaW5lJywga2V5OiAncG9seWxpbmUnIH0sICdQb2x5bGluZScpLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIHsgdmFsdWU6ICdmbG93LXBvbHlsaW5lLXJvdW5kJywga2V5OiAncHJvdW5kJyB9LCAnUG9seWxpbmUgUm91bmQnKSxcbiAgICBdKTtcbiAgICAvLyByZXR1cm4gKFxuICAgIC8vICAgPFNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgIC8vICAgICA8T3B0aW9uIHZhbHVlPVwiZmxvdy1zbW9vdGhcIj5TbW9vdGg8L09wdGlvbj5cbiAgICAvLyAgICAgPE9wdGlvbiB2YWx1ZT1cImZsb3ctcG9seWxpbmVcIj5Qb2x5bGluZTwvT3B0aW9uPlxuICAgIC8vICAgICA8T3B0aW9uIHZhbHVlPVwiZmxvdy1wb2x5bGluZS1yb3VuZFwiPlBvbHlsaW5lIFJvdW5kPC9PcHRpb24+XG4gICAgLy8gICA8L1NlbGVjdD5cbiAgICAvLyApO1xuICB9O1xuXG4gIHJlbmRlck5vZGVEZXRhaWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnByb3BzIGFzIGFueTtcbiAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLml0ZW0uZ2V0TW9kZWwoKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgSXRlbSBhcyBhbnksXG4gICAgICB7IGxhYmVsOiAnTGFiZWwnLCAuLi5pbmxpbmVGb3JtSXRlbUxheW91dCwga2V5OiAnbm9kZWRldGFpbGl0ZW0nIH0sXG4gICAgICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCdsYWJlbCcsIHtcbiAgICAgICAgaW5pdGlhbFZhbHVlOiBsYWJlbCxcbiAgICAgICAga2V5OiAnbm9kZWRldGFpbGxhYmVsJyxcbiAgICAgIH0pKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgb25CbHVyOiB0aGlzLmhhbmRsZVN1Ym1pdCwga2V5OiAnbm9kZWRldGFpbGxhYmVsLWlucHV0JyB9KSksXG4gICAgKTtcbiAgICAvLyByZXR1cm4gKFxuICAgIC8vICAgPEl0ZW0gbGFiZWw9IFwiTGFiZWxcIiB7Li4uaW5saW5lRm9ybUl0ZW1MYXlvdXQgfT5cbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoJ2xhYmVsJywge1xuICAgIC8vICAgICAgICAgaW5pdGlhbFZhbHVlOiBsYWJlbCxcbiAgICAvLyAgICAgICB9KSg8SW5wdXQgb25CbHVyPXsgdGhpcy5oYW5kbGVTdWJtaXQgfSAvPilcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICA8IC9JdGVtPlxuICAgIC8vICk7XG4gIH07XG5cbiAgc2hhcGVJdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcyBhcyBhbnk7XG4gICAgY29uc3QgeyBzaGFwZSA9ICdmbG93LXNtb290aCcgfSA9IHRoaXMuaXRlbS5nZXRNb2RlbCgpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBJdGVtIGFzIGFueSxcbiAgICAgIHsgbGFiZWw6ICdTaGFwZScsIC4uLmlubGluZUZvcm1JdGVtTGF5b3V0LCBrZXk6ICdzaGFwaXRlbScgfSxcbiAgICAgIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoJ3NoYXBlJywge1xuICAgICAgICBpbml0aWFsVmFsdWU6IHNoYXBlLFxuICAgICAgICBrZXk6ICdzaGFwZWRldGFpbGxhYmVsJyxcbiAgICAgIH0pKHRoaXMucmVuZGVyRWRnZVNoYXBlU2VsZWN0KCkpLFxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyRWRnZURldGFpbCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCB7IGZvcm0gfSA9IHRoaXMucHJvcHMgYXMgYW55O1xuICAgIC8vIGNvbnN0IHsgbGFiZWwgPSAnJywgc2hhcGUgPSAnZmxvdy1zbW9vdGgnIH0gPSB0aGlzLml0ZW0uZ2V0TW9kZWwoKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50IGFzIGFueSwgeyBrZXk6ICdmYWdtZW50JyB9LCBbdGhpcy5yZW5kZXJOb2RlRGV0YWlsKCksIHRoaXMuc2hhcGVJdGVtKCldKTtcblxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8RnJhZ21lbnQ+XG4gICAgLy8gICA8SXRlbSBsYWJlbD0gXCJMYWJlbFwiIHsuLi5pbmxpbmVGb3JtSXRlbUxheW91dCB9PlxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgZm9ybS5nZXRGaWVsZERlY29yYXRvcignbGFiZWwnLCB7XG4gICAgLy8gICAgICAgICBpbml0aWFsVmFsdWU6IGxhYmVsLFxuICAgIC8vICAgICAgIH0pKDxJbnB1dCBvbkJsdXI9eyB0aGlzLmhhbmRsZVN1Ym1pdCB9IC8+KVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIDwgL0l0ZW0+XG4gICAgLy8gICAgIDwgSXRlbSBsYWJlbCA9IFwiU2hhcGVcIiB7Li4uaW5saW5lRm9ybUl0ZW1MYXlvdXQgfT5cbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCdzaGFwZScsIHtcbiAgICAvLyAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBzaGFwZSxcbiAgICAvLyAgICAgICAgIH0pKHRoaXMucmVuZGVyRWRnZVNoYXBlU2VsZWN0KCkpXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICAgIDwgL0l0ZW0+XG4gICAgLy8gICAgICAgPCAvRnJhZ21lbnQ+XG4gICAgLy8gKTtcbiAgfTtcblxuICByZW5kZXJHcm91cERldGFpbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMucHJvcHMgYXMgYW55O1xuICAgIGNvbnN0IHsgbGFiZWwgPSAn5paw5bu65YiG57uEJyB9ID0gdGhpcy5pdGVtLmdldE1vZGVsKCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtIGFzIGFueSwgeyBsYWJlbDogJ0xhYmVsJywgLi4uaW5saW5lRm9ybUl0ZW1MYXlvdXQgfSwgW1xuICAgICAgZm9ybS5nZXRGaWVsZERlY29yYXRvcignbGFiZWwnLCB7XG4gICAgICAgIGluaXRpYWxWYWx1ZTogbGFiZWwsXG4gICAgICAgIGtleTogJ2dyb3VwZGV0YWlsaXRlbScsXG4gICAgICB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgb25CbHVyOiB0aGlzLmhhbmRsZVN1Ym1pdCwga2V5OiAnaW5wdXQnIH0pLFxuICAgIF0pO1xuXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgIDxJdGVtIGxhYmVsPSBcIkxhYmVsXCIgey4uLmlubGluZUZvcm1JdGVtTGF5b3V0IH0+XG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCdsYWJlbCcsIHtcbiAgICAvLyAgICAgICAgIGluaXRpYWxWYWx1ZTogbGFiZWwsXG4gICAgLy8gICAgICAgfSkoPElucHV0IG9uQmx1cj17IHRoaXMuaGFuZGxlU3VibWl0IH0gLz4pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgPCAvSXRlbT5cbiAgICAvLyApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHMgYXMgYW55O1xuXG4gICAgaWYgKCF0aGlzLml0ZW0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgZGV0YWlsTm9kZTtcbiAgICBpZiAodHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICBkZXRhaWxOb2RlID0gdGhpcy5yZW5kZXJOb2RlRGV0YWlsKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZWRnZScpIHtcbiAgICAgIGRldGFpbE5vZGUgPSB0aGlzLnJlbmRlckVkZ2VEZXRhaWwoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgIGRldGFpbE5vZGUgPSB0aGlzLnJlbmRlckdyb3VwRGV0YWlsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDYXJkLFxuICAgICAgeyB0eXBlOiAnaW5uZXInLCBzaXplOiAnc21hbGwnLCB0aXRsZTogdHlwZSwgYm9yZGVyZWQ6IGZhbHNlIH0sXG5cbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybSwgeyBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQgfSwgZGV0YWlsTm9kZSksXG4gICAgKTtcblxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8Q2FyZCB0eXBlPVwiaW5uZXJcIiBzaXplPVwic21hbGxcIiB0aXRsZT17dXBwZXJGaXJzdCh0eXBlKX0gYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAvLyAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAvLyAgICAgICB7dHlwZSA9PT0gJ25vZGUnICYmIHRoaXMucmVuZGVyTm9kZURldGFpbCgpfVxuICAgIC8vICAgICAgIHt0eXBlID09PSAnZWRnZScgJiYgdGhpcy5yZW5kZXJFZGdlRGV0YWlsKCl9XG4gICAgLy8gICAgICAge3R5cGUgPT09ICdncm91cCcgJiYgdGhpcy5yZW5kZXJHcm91cERldGFpbCgpfVxuICAgIC8vICAgICA8L0Zvcm0+XG4gICAgLy8gICA8L0NhcmQ+XG4gICAgLy8gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtLmNyZWF0ZSgpKHdpdGhQcm9wc0FQSShEZXRhaWxGb3JtKSk7XG4iXX0=