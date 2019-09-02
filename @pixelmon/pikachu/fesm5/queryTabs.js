import { CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { TranslatePipeModule, FilterPipeModule } from '@pixelmon/theme';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { __spread } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QueryTabsComponent = /** @class */ (function () {
    function QueryTabsComponent() {
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
        function (tab) {
            /** @type {?} */
            var searchValue = tab.searchValue;
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
    QueryTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    QueryTabsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.tabs) {
            this.updateQuery();
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    QueryTabsComponent.prototype.onClose = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        // 有默认值恢复默认值，没有则置为null
        tab.searchValue = tab.hasOwnProperty('defaultValue') ? tab.defaultValue : null;
        this.closeTab.emit(tab);
        this.tabs = __spread(this.tabs);
        this.tabsChange.emit(this.tabs);
    };
    // 组件内更新查询值
    // 组件内更新查询值
    /**
     * @return {?}
     */
    QueryTabsComponent.prototype.updateQuery = 
    // 组件内更新查询值
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var query = {};
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            if (tab.showFilter) {
                query[tab.field] = tab.searchValue;
            }
        }));
        this.queryChange.emit(query);
    };
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
    QueryTabsComponent.ctorParameters = function () { return []; };
    QueryTabsComponent.propDecorators = {
        tabs: [{ type: Input }],
        lexicon: [{ type: Input }],
        tabsChange: [{ type: Output }],
        queryChange: [{ type: Output }],
        closeTab: [{ type: Output }],
        filterRule: [{ type: Input }]
    };
    return QueryTabsComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QueryTabsModule = /** @class */ (function () {
    function QueryTabsModule() {
    }
    QueryTabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QueryTabsComponent],
                    imports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule],
                    exports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule, QueryTabsComponent],
                },] }
    ];
    return QueryTabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function QueryTab() { }
if (false) {
    /** @type {?} */
    QueryTab.prototype.title;
    /** @type {?} */
    QueryTab.prototype.field;
    /** @type {?|undefined} */
    QueryTab.prototype.showFilter;
    /** @type {?|undefined} */
    QueryTab.prototype.searchValue;
    /** @type {?|undefined} */
    QueryTab.prototype.defaultValue;
    /** @type {?|undefined} */
    QueryTab.prototype.displayValue;
    /** @type {?|undefined} */
    QueryTab.prototype.lexicon;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { QueryTabsComponent, QueryTabsModule };
//# sourceMappingURL=queryTabs.js.map
