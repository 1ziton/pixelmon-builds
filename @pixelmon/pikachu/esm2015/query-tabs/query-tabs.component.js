/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 用于展示当前查询条件
 * @Author: zomixi
 * @Date: 2019-05-15 14:42:17
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export class QueryTabsComponent {
    constructor() {
        this.tabs = [];
        this.lexicon = []; // 词典
        // 词典
        this.tabsChange = new EventEmitter();
        this.queryChange = new EventEmitter();
        this.closeTab = new EventEmitter();
        // 过滤规则
        this.filterRule = (/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            /** @type {?} */
            const searchValue = tab.searchValue;
            // 有默认值且搜索值和默认值相等
            if (tab.hasOwnProperty('defaultValue') && searchValue === tab.defaultValue) {
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
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.columns) {
            this.updateQuery();
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    onClose(tab) {
        // 有默认值恢复默认值，没有则置为null
        tab.searchValue = tab.hasOwnProperty('defaultValue') ? tab.defaultValue : null;
        this.closeTab.emit(tab);
        this.tabs = [...this.tabs];
        this.tabsChange.emit(this.tabs);
    }
    // 组件内更新查询值
    /**
     * @return {?}
     */
    updateQuery() {
        /** @type {?} */
        const query = {};
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            if (tab.showFilter) {
                query[tab.field] = tab.searchValue;
            }
        }));
        this.queryChange.emit(query);
    }
}
QueryTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'p-queryTabs',
                template: "<nz-tabset nzType=\"card\">\n  <ng-container *ngFor=\"let tab of tabs | filter: filterRule\">\n    <nz-tab [nzTitle]=\"titleTemplate\">\n      <ng-template #titleTemplate>\n        <div class=\"flex\">\n          <span class=\"label\">{{ tab.title + '\uFF1A' }}</span>\n          <ng-container *ngIf=\"(tab.searchValue | translate: tab.lexicon || lexicon)?.length > 10; else textTemplate\">\n            <div nz-popover nzTrigger=\"hover\" [nzContent]=\"textTemplate\" nzPlacement=\"bottom\">\n              <span class=\"value text-ellipsis\">\n                {{ tab.displayValue || tab.searchValue | translate: tab.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-container>\n\n          <ng-template #textTemplate>\n            <div>\n              <span class=\"value\">\n                {{ tab.displayValue || tab.searchValue | translate: tab.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-template>\n\n          <div>\n            <i nz-icon nzType=\"close\" class=\"ant-tabs-close-x\" (click)=\"onClose(tab)\"></i>\n          </div>\n        </div>\n      </ng-template>\n    </nz-tab>\n  </ng-container>\n</nz-tabset>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".text-ellipsis{display:inline-block;max-width:180px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:top}.flex{display:flex;align-items:center;justify-content:center}.label{color:#515151}.value{color:#1890ff}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar{margin:0 0 2px;border:none}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab{height:30px;margin:0 2px 0 0;padding:0 16px;line-height:28px;background:#fafafa;border:1px solid #e8e8e8!important;border-radius:4px;transition:.3s cubic-bezier(.645,.045,.355,1)}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-nav-container{height:31px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab-active{font-weight:400}"]
            }] }
];
/** @nocollapse */
QueryTabsComponent.ctorParameters = () => [];
QueryTabsComponent.propDecorators = {
    tabs: [{ type: Input }],
    lexicon: [{ type: Input }],
    tabsChange: [{ type: Output }],
    queryChange: [{ type: Output }],
    closeTab: [{ type: Output }],
    filterRule: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    QueryTabsComponent.prototype.tabs;
    /** @type {?} */
    QueryTabsComponent.prototype.lexicon;
    /** @type {?} */
    QueryTabsComponent.prototype.tabsChange;
    /** @type {?} */
    QueryTabsComponent.prototype.queryChange;
    /** @type {?} */
    QueryTabsComponent.prototype.closeTab;
    /** @type {?} */
    QueryTabsComponent.prototype.filterRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS8iLCJzb3VyY2VzIjpbInF1ZXJ5LXRhYnMvcXVlcnktdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTbEksTUFBTSxPQUFPLGtCQUFrQjtJQTRCN0I7UUEzQlMsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQW9DLEVBQUUsQ0FBQyxDQUFDLEtBQUs7O1FBRW5ELGVBQVUsR0FBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZELGFBQVEsR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFHdkQsZUFBVTs7OztRQUErQixHQUFHLENBQUMsRUFBRTs7a0JBQ2hELFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVztZQUVuQyxpQkFBaUI7WUFDakIsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLFdBQVcsS0FBSyxHQUFHLENBQUMsWUFBWSxFQUFFO2dCQUMxRSxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsV0FBVztZQUNYLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDL0MsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE1BQU07WUFDTixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUNyRCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsY0FBYztZQUNkLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDO0lBRWEsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQWE7UUFDbkIsc0JBQXNCO1FBQ3RCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRS9FLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxXQUFXOztjQUNILEtBQUssR0FBRyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixzckNBQTBDO2dCQUUxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7O21CQUVFLEtBQUs7c0JBQ0wsS0FBSzt5QkFFTCxNQUFNOzBCQUNOLE1BQU07dUJBQ04sTUFBTTt5QkFHTixLQUFLOzs7O0lBUk4sa0NBQStCOztJQUMvQixxQ0FBdUQ7O0lBRXZELHdDQUFvRTs7SUFDcEUseUNBQWlFOztJQUNqRSxzQ0FBZ0U7O0lBR2hFLHdDQWlCRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDnlKjkuo7lsZXnpLrlvZPliY3mn6Xor6LmnaHku7ZcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDUtMTUgMTQ6NDI6MTdcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRdWVyeVRhYiB9IGZyb20gJy4vcXVlcnktdGFicy5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLXF1ZXJ5VGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVyeS10YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcXVlcnktdGFicy5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUXVlcnlUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0YWJzOiBRdWVyeVRhYltdID0gW107XG4gIEBJbnB1dCgpIGxleGljb246IHsgdmFsdWU6IGFueTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXTsgLy8g6K+N5YW4XG5cbiAgQE91dHB1dCgpIHRhYnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxRdWVyeVRhYltdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHF1ZXJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8b2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlVGFiOiBFdmVudEVtaXR0ZXI8UXVlcnlUYWI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIOi/h+a7pOinhOWImVxuICBASW5wdXQoKSBmaWx0ZXJSdWxlOiAodGFiOiBRdWVyeVRhYikgPT4gYm9vbGVhbiA9IHRhYiA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSB0YWIuc2VhcmNoVmFsdWU7XG5cbiAgICAvLyDmnInpu5jorqTlgLzkuJTmkJzntKLlgLzlkozpu5jorqTlgLznm7jnrYlcbiAgICBpZiAodGFiLmhhc093blByb3BlcnR5KCdkZWZhdWx0VmFsdWUnKSAmJiBzZWFyY2hWYWx1ZSA9PT0gdGFiLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDpnZ7ms5Xln7rnoYDmlbDmja7nsbvlnotcbiAgICBpZiAoW3VuZGVmaW5lZCwgbnVsbCwgJyddLmluY2x1ZGVzKHNlYXJjaFZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDnqbrmlbDnu4RcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hWYWx1ZSkgJiYgIXNlYXJjaFZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDpgJrov4fmoKHpqozvvIzov5Tlm550cnVlXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UodGFiOiBRdWVyeVRhYik6IHZvaWQge1xuICAgIC8vIOaciem7mOiupOWAvOaBouWkjem7mOiupOWAvO+8jOayoeacieWImee9ruS4um51bGxcbiAgICB0YWIuc2VhcmNoVmFsdWUgPSB0YWIuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRWYWx1ZScpID8gdGFiLmRlZmF1bHRWYWx1ZSA6IG51bGw7XG5cbiAgICB0aGlzLmNsb3NlVGFiLmVtaXQodGFiKTtcbiAgICB0aGlzLnRhYnMgPSBbLi4udGhpcy50YWJzXTtcbiAgICB0aGlzLnRhYnNDaGFuZ2UuZW1pdCh0aGlzLnRhYnMpO1xuICB9XG5cbiAgLy8g57uE5Lu25YaF5pu05paw5p+l6K+i5YC8XG4gIHVwZGF0ZVF1ZXJ5KCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge307XG4gICAgdGhpcy50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgIGlmICh0YWIuc2hvd0ZpbHRlcikge1xuICAgICAgICBxdWVyeVt0YWIuZmllbGRdID0gdGFiLnNlYXJjaFZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucXVlcnlDaGFuZ2UuZW1pdChxdWVyeSk7XG4gIH1cbn1cbiJdfQ==