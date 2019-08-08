/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @Description: 用于展示当前查询条件
 * @Author: zomixi
 * @Date: 2019-05-15 14:42:17
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var QueryDisplayComponent = /** @class */ (function () {
    function QueryDisplayComponent() {
        this.columns = [];
        this.lexicon = []; // 词典
        // 词典
        this.columnsChange = new EventEmitter();
        this.queryChange = new EventEmitter();
        this.close = new EventEmitter();
        // 过滤规则
        this.filterRule = (/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var searchValue = element.searchValue;
            // 有默认值且搜索值和默认值相等
            if (element.hasOwnProperty('defaultValue') && searchValue === element.defaultValue) {
                return false;
            }
            // 非法基础数据类型
            if ([undefined, null, ''].includes(searchValue)) {
                return false;
            }
            // 空数组
            if (Array.isArray(searchValue) && !searchValue.length) {
                return false;
            }
            // 通过校验，返回true
            return true;
        });
    }
    /**
     * @return {?}
     */
    QueryDisplayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    QueryDisplayComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.columns) {
            this.updateQuery();
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    QueryDisplayComponent.prototype.onClose = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        // 有默认值恢复默认值，没有则置为null
        column.searchValue = column.hasOwnProperty('defaultValue') ? column.defaultValue : null;
        this.close.emit(column);
        this.columns = tslib_1.__spread(this.columns);
        this.columnsChange.emit(this.columns);
    };
    // 组件内更新查询值
    // 组件内更新查询值
    /**
     * @return {?}
     */
    QueryDisplayComponent.prototype.updateQuery = 
    // 组件内更新查询值
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var query = {};
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.showFilter) {
                query[column.field] = column.searchValue;
            }
        }));
        this.queryChange.emit(query);
    };
    /**
     * @param {?} column
     * @return {?}
     */
    QueryDisplayComponent.prototype.closeTab = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        console.log(column);
    };
    QueryDisplayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'query-display',
                    template: "<nz-tabset nzType=\"card\">\n  <ng-container *ngFor=\"let column of columns | filter: filterRule\">\n    <nz-tab [nzTitle]=\"titleTemplate\">\n      <ng-template #titleTemplate>\n        <div class=\"flex\">\n          <span class=\"label\">{{ column.title + '\uFF1A' }}</span>\n          <ng-container\n            *ngIf=\"(column.searchValue | translate: column.lexicon || lexicon)?.length > 10; else textTemplate\"\n          >\n            <div nz-popover nzTrigger=\"hover\" [nzContent]=\"textTemplate\" nzPlacement=\"bottom\">\n              <span class=\"value text-ellipsis\">\n                {{ column.displayValue || column.searchValue | translate: column.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-container>\n\n          <ng-template #textTemplate>\n            <div>\n              <span class=\"value\">\n                {{ column.displayValue || column.searchValue | translate: column.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-template>\n\n          <div>\n            <i nz-icon type=\"close\" class=\"ant-tabs-close-x\" (click)=\"closeTab(column)\"></i>\n          </div>\n        </div>\n      </ng-template>\n    </nz-tab>\n  </ng-container>\n</nz-tabset>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".text-ellipsis{display:inline-block;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:top}.flex{display:flex;justify-content:center;align-items:center}.label{color:#515151}.value{color:#1890ff}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar{border:none;margin:0 0 2px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab{margin:0 2px 0 0;border:1px solid #e8e8e8!important;border-radius:4px;background:#fafafa;padding:0 16px;transition:.3s cubic-bezier(.645,.045,.355,1);line-height:28px;height:30px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-nav-container{height:31px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab-active{font-weight:400}"]
                }] }
    ];
    /** @nocollapse */
    QueryDisplayComponent.ctorParameters = function () { return []; };
    QueryDisplayComponent.propDecorators = {
        columns: [{ type: Input }],
        lexicon: [{ type: Input }],
        columnsChange: [{ type: Output }],
        queryChange: [{ type: Output }],
        close: [{ type: Output }],
        filterRule: [{ type: Input }]
    };
    return QueryDisplayComponent;
}());
export { QueryDisplayComponent };
if (false) {
    /** @type {?} */
    QueryDisplayComponent.prototype.columns;
    /** @type {?} */
    QueryDisplayComponent.prototype.lexicon;
    /** @type {?} */
    QueryDisplayComponent.prototype.columnsChange;
    /** @type {?} */
    QueryDisplayComponent.prototype.queryChange;
    /** @type {?} */
    QueryDisplayComponent.prototype.close;
    /** @type {?} */
    QueryDisplayComponent.prototype.filterRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbImFkdmFuY2VkLXRhYmxlL3F1ZXJ5LWRpc3BsYXkvcXVlcnktZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2xJO0lBa0NFO1FBM0JTLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsWUFBTyxHQUFvQyxFQUFFLENBQUMsQ0FBQyxLQUFLOztRQUVuRCxrQkFBYSxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNELGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQsVUFBSyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUdsRCxlQUFVOzs7O1FBQThCLFVBQUEsT0FBTzs7Z0JBQ2hELFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVztZQUV2QyxpQkFBaUI7WUFDakIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLFdBQVcsS0FBSyxPQUFPLENBQUMsWUFBWSxFQUFFO2dCQUNsRixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsV0FBVztZQUNYLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDL0MsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE1BQU07WUFDTixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUNyRCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsY0FBYztZQUNkLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDO0lBRWEsQ0FBQzs7OztJQUVoQix3Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUViLDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1Q0FBTzs7OztJQUFQLFVBQVEsTUFBYztRQUNwQixzQkFBc0I7UUFDdEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFeEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sb0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVzs7Ozs7SUFDWCwyQ0FBVzs7Ozs7SUFBWDs7WUFDUSxLQUFLLEdBQUcsRUFBRTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE1BQU07WUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDMUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLE1BQU07UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGt2Q0FBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7OzBCQUVFLEtBQUs7MEJBQ0wsS0FBSztnQ0FFTCxNQUFNOzhCQUNOLE1BQU07d0JBQ04sTUFBTTs2QkFHTixLQUFLOztJQW9EUiw0QkFBQztDQUFBLEFBbkVELElBbUVDO1NBN0RZLHFCQUFxQjs7O0lBQ2hDLHdDQUFnQzs7SUFDaEMsd0NBQXVEOztJQUV2RCw4Q0FBcUU7O0lBQ3JFLDRDQUFpRTs7SUFDakUsc0NBQTJEOztJQUczRCwyQ0FpQkUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog55So5LqO5bGV56S65b2T5YmN5p+l6K+i5p2h5Lu2XG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA1LTE1IDE0OjQyOjE3XG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vYWR2YW5jZWQtdGFibGUubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXVlcnktZGlzcGxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVyeS1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcXVlcnktZGlzcGxheS5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUXVlcnlEaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb2x1bW5zOiBDb2x1bW5bXSA9IFtdO1xuICBASW5wdXQoKSBsZXhpY29uOiB7IHZhbHVlOiBhbnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW107IC8vIOivjeWFuFxuXG4gIEBPdXRwdXQoKSBjb2x1bW5zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29sdW1uW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcXVlcnlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxvYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIOi/h+a7pOinhOWImVxuICBASW5wdXQoKSBmaWx0ZXJSdWxlOiAoZWxlbWVudDogYW55KSA9PiBib29sZWFuID0gZWxlbWVudCA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBlbGVtZW50LnNlYXJjaFZhbHVlO1xuXG4gICAgLy8g5pyJ6buY6K6k5YC85LiU5pCc57Si5YC85ZKM6buY6K6k5YC855u4562JXG4gICAgaWYgKGVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRWYWx1ZScpICYmIHNlYXJjaFZhbHVlID09PSBlbGVtZW50LmRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDpnZ7ms5Xln7rnoYDmlbDmja7nsbvlnotcbiAgICBpZiAoW3VuZGVmaW5lZCwgbnVsbCwgJyddLmluY2x1ZGVzKHNlYXJjaFZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDnqbrmlbDnu4RcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hWYWx1ZSkgJiYgIXNlYXJjaFZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDpgJrov4fmoKHpqozvvIzov5Tlm550cnVlXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoY29sdW1uOiBDb2x1bW4pOiB2b2lkIHtcbiAgICAvLyDmnInpu5jorqTlgLzmgaLlpI3pu5jorqTlgLzvvIzmsqHmnInliJnnva7kuLpudWxsXG4gICAgY29sdW1uLnNlYXJjaFZhbHVlID0gY29sdW1uLmhhc093blByb3BlcnR5KCdkZWZhdWx0VmFsdWUnKSA/IGNvbHVtbi5kZWZhdWx0VmFsdWUgOiBudWxsO1xuXG4gICAgdGhpcy5jbG9zZS5lbWl0KGNvbHVtbik7XG4gICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc107XG4gICAgdGhpcy5jb2x1bW5zQ2hhbmdlLmVtaXQodGhpcy5jb2x1bW5zKTtcbiAgfVxuXG4gIC8vIOe7hOS7tuWGheabtOaWsOafpeivouWAvFxuICB1cGRhdGVRdWVyeSgpIHtcbiAgICBjb25zdCBxdWVyeSA9IHt9O1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBpZiAoY29sdW1uLnNob3dGaWx0ZXIpIHtcbiAgICAgICAgcXVlcnlbY29sdW1uLmZpZWxkXSA9IGNvbHVtbi5zZWFyY2hWYWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnF1ZXJ5Q2hhbmdlLmVtaXQocXVlcnkpO1xuICB9XG5cbiAgY2xvc2VUYWIoY29sdW1uKSB7XG4gICAgY29uc29sZS5sb2coY29sdW1uKTtcbiAgfVxufVxuIl19