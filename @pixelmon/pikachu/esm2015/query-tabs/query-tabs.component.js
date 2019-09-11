/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @Description: 用于展示当前查询条件
 * @Author: zomixi
 * @Date: 2019-05-15 14:42:17
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, } from '@angular/core';
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
        if (changes.tabs) {
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
                exportAs: 'queryTabs',
                template: "<nz-tabset nzType=\"card\">\n  <ng-container *ngFor=\"let tab of tabs | filter: filterRule\">\n    <nz-tab [nzTitle]=\"titleTemplate\">\n      <ng-template #titleTemplate>\n        <div class=\"flex\">\n          <span class=\"label\">{{ tab.title + '\uFF1A' }}</span>\n          <ng-container *ngIf=\"(tab.searchValue | translate: tab.lexicon || lexicon)?.length > 10; else textTemplate\">\n            <div nz-popover nzTrigger=\"hover\" [nzContent]=\"textTemplate\" nzPlacement=\"bottom\">\n              <span class=\"value text-ellipsis\">\n                {{ tab.displayValue || tab.searchValue | translate: tab.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-container>\n\n          <ng-template #textTemplate>\n            <div>\n              <span class=\"value\">\n                {{ tab.displayValue || tab.searchValue | translate: tab.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-template>\n\n          <div>\n            <i nz-icon nzType=\"close\" class=\"ant-tabs-close-x\" (click)=\"onClose(tab)\"></i>\n          </div>\n        </div>\n      </ng-template>\n    </nz-tab>\n  </ng-container>\n</nz-tabset>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.Emulated,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vcGlrYWNodS9xdWVyeS10YWJzLyIsInNvdXJjZXMiOlsicXVlcnktdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBV3ZCLE1BQU0sT0FBTyxrQkFBa0I7SUE0QjdCO1FBM0JTLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFvQyxFQUFFLENBQUMsQ0FBQyxLQUFLOztRQUVuRCxlQUFVLEdBQTZCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxhQUFRLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBR3ZELGVBQVU7Ozs7UUFBK0IsR0FBRyxDQUFDLEVBQUU7O2tCQUNoRCxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVc7WUFFbkMsaUJBQWlCO1lBQ2pCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxXQUFXLEtBQUssR0FBRyxDQUFDLFlBQVksRUFBRTtnQkFDMUUsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELFdBQVc7WUFDWCxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9DLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxNQUFNO1lBQ04sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDckQsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELGNBQWM7WUFDZCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQztJQUVhLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxHQUFhO1FBQ25CLHNCQUFzQjtRQUN0QixHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUvRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR0QsV0FBVzs7Y0FDSCxLQUFLLEdBQUcsRUFBRTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUNwQztRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHNyQ0FBMEM7Z0JBRTFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDMUM7Ozs7O21CQUVFLEtBQUs7c0JBQ0wsS0FBSzt5QkFFTCxNQUFNOzBCQUNOLE1BQU07dUJBQ04sTUFBTTt5QkFHTixLQUFLOzs7O0lBUk4sa0NBQStCOztJQUMvQixxQ0FBdUQ7O0lBRXZELHdDQUFvRTs7SUFDcEUseUNBQWlFOztJQUNqRSxzQ0FBZ0U7O0lBR2hFLHdDQWlCRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDnlKjkuo7lsZXnpLrlvZPliY3mn6Xor6LmnaHku7ZcbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDUtMTUgMTQ6NDI6MTdcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRdWVyeVRhYiB9IGZyb20gJy4vcXVlcnktdGFicy1pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLXF1ZXJ5VGFicycsXG4gIGV4cG9ydEFzOiAncXVlcnlUYWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXJ5LXRhYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9xdWVyeS10YWJzLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgUXVlcnlUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0YWJzOiBRdWVyeVRhYltdID0gW107XG4gIEBJbnB1dCgpIGxleGljb246IHsgdmFsdWU6IGFueTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXTsgLy8g6K+N5YW4XG5cbiAgQE91dHB1dCgpIHRhYnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxRdWVyeVRhYltdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHF1ZXJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8b2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlVGFiOiBFdmVudEVtaXR0ZXI8UXVlcnlUYWI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIOi/h+a7pOinhOWImVxuICBASW5wdXQoKSBmaWx0ZXJSdWxlOiAodGFiOiBRdWVyeVRhYikgPT4gYm9vbGVhbiA9IHRhYiA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSB0YWIuc2VhcmNoVmFsdWU7XG5cbiAgICAvLyDmnInpu5jorqTlgLzkuJTmkJzntKLlgLzlkozpu5jorqTlgLznm7jnrYlcbiAgICBpZiAodGFiLmhhc093blByb3BlcnR5KCdkZWZhdWx0VmFsdWUnKSAmJiBzZWFyY2hWYWx1ZSA9PT0gdGFiLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDpnZ7ms5Xln7rnoYDmlbDmja7nsbvlnotcbiAgICBpZiAoW3VuZGVmaW5lZCwgbnVsbCwgJyddLmluY2x1ZGVzKHNlYXJjaFZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDnqbrmlbDnu4RcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hWYWx1ZSkgJiYgIXNlYXJjaFZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDpgJrov4fmoKHpqozvvIzov5Tlm550cnVlXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudGFicykge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UodGFiOiBRdWVyeVRhYik6IHZvaWQge1xuICAgIC8vIOaciem7mOiupOWAvOaBouWkjem7mOiupOWAvO+8jOayoeacieWImee9ruS4um51bGxcbiAgICB0YWIuc2VhcmNoVmFsdWUgPSB0YWIuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRWYWx1ZScpID8gdGFiLmRlZmF1bHRWYWx1ZSA6IG51bGw7XG5cbiAgICB0aGlzLmNsb3NlVGFiLmVtaXQodGFiKTtcbiAgICB0aGlzLnRhYnMgPSBbLi4udGhpcy50YWJzXTtcbiAgICB0aGlzLnRhYnNDaGFuZ2UuZW1pdCh0aGlzLnRhYnMpO1xuICB9XG5cbiAgLy8g57uE5Lu25YaF5pu05paw5p+l6K+i5YC8XG4gIHVwZGF0ZVF1ZXJ5KCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge307XG4gICAgdGhpcy50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgIGlmICh0YWIuc2hvd0ZpbHRlcikge1xuICAgICAgICBxdWVyeVt0YWIuZmllbGRdID0gdGFiLnNlYXJjaFZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucXVlcnlDaGFuZ2UuZW1pdChxdWVyeSk7XG4gIH1cbn1cbiJdfQ==