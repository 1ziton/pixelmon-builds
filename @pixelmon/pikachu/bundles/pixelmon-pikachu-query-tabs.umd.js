/**
 * @license ng-alain(cipchk@qq.com) v0.1.4
 * (c) 2019 giscafer(giscafer@outlook.com)
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@pixelmon/theme'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/query-tabs', ['exports', '@angular/common', '@angular/core', '@pixelmon/theme', 'ng-zorro-antd'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu['query-tabs'] = {}), global.ng.common, global.ng.core, global.theme, global.ngZorroAntd));
}(this, function (exports, common, core, theme, ngZorroAntd) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var QueryTabsComponent = /** @class */ (function () {
        function QueryTabsComponent() {
            this.tabs = [];
            this.lexicon = []; // 词典
            // 词典
            this.tabsChange = new core.EventEmitter();
            this.queryChange = new core.EventEmitter();
            this.closeTab = new core.EventEmitter();
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
            if (changes.columns) {
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
            { type: core.Component, args: [{
                        selector: 'p-queryTabs',
                        template: "<nz-tabset nzType=\"card\">\n  <ng-container *ngFor=\"let tab of tabs | filter: filterRule\">\n    <nz-tab [nzTitle]=\"titleTemplate\">\n      <ng-template #titleTemplate>\n        <div class=\"flex\">\n          <span class=\"label\">{{ tab.title + '\uFF1A' }}</span>\n          <ng-container *ngIf=\"(tab.searchValue | translate: tab.lexicon || lexicon)?.length > 10; else textTemplate\">\n            <div nz-popover nzTrigger=\"hover\" [nzContent]=\"textTemplate\" nzPlacement=\"bottom\">\n              <span class=\"value text-ellipsis\">\n                {{ tab.displayValue || tab.searchValue | translate: tab.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-container>\n\n          <ng-template #textTemplate>\n            <div>\n              <span class=\"value\">\n                {{ tab.displayValue || tab.searchValue | translate: tab.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-template>\n\n          <div>\n            <i nz-icon nzType=\"close\" class=\"ant-tabs-close-x\" (click)=\"onClose(tab)\"></i>\n          </div>\n        </div>\n      </ng-template>\n    </nz-tab>\n  </ng-container>\n</nz-tabset>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".text-ellipsis{display:inline-block;max-width:180px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:top}.flex{display:flex;align-items:center;justify-content:center}.label{color:#515151}.value{color:#1890ff}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar{margin:0 0 2px;border:none}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab{height:30px;margin:0 2px 0 0;padding:0 16px;line-height:28px;background:#fafafa;border:1px solid #e8e8e8!important;border-radius:4px;transition:.3s cubic-bezier(.645,.045,.355,1)}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-nav-container{height:31px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab-active{font-weight:400}"]
                    }] }
        ];
        /** @nocollapse */
        QueryTabsComponent.ctorParameters = function () { return []; };
        QueryTabsComponent.propDecorators = {
            tabs: [{ type: core.Input }],
            lexicon: [{ type: core.Input }],
            tabsChange: [{ type: core.Output }],
            queryChange: [{ type: core.Output }],
            closeTab: [{ type: core.Output }],
            filterRule: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [QueryTabsComponent],
                        imports: [common.CommonModule, theme.TranslatePipeModule, theme.FilterPipeModule, ngZorroAntd.NgZorroAntdModule],
                        exports: [common.CommonModule, theme.TranslatePipeModule, theme.FilterPipeModule, ngZorroAntd.NgZorroAntdModule, QueryTabsComponent],
                    },] }
        ];
        return QueryTabsModule;
    }());
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

    exports.QueryTabsModule = QueryTabsModule;
    exports.ɵa = QueryTabsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pixelmon-pikachu-query-tabs.umd.js.map
