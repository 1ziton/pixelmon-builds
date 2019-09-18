/**
 * @Based on pixelmon(cipchk@qq.com) v0.1.9
 * (c) 2019 developer(developer@1ziton.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@pixelmon/pikachu/pagination'), require('@pixelmon/pikachu/smart-text'), require('@pixelmon/pikachu/viewer'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/button'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/select'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/table'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/table', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@pixelmon/pikachu/pagination', '@pixelmon/pikachu/smart-text', '@pixelmon/pikachu/viewer', 'ng-zorro-antd/badge', 'ng-zorro-antd/button', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/select', 'ng-zorro-antd/spin', 'ng-zorro-antd/table', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu.table = {}), global.ng.common, global.ng.core, global.ng.forms, global.pixelmon.pikachu.pagination, global.pixelmon.pikachu['smart-text'], global.pixelmon.pikachu.viewer, global['ng-zorro-antd/badge'], global['ng-zorro-antd/button'], global['ng-zorro-antd/date-picker'], global['ng-zorro-antd/dropdown'], global['ng-zorro-antd/grid'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/input'], global['ng-zorro-antd/select'], global['ng-zorro-antd/spin'], global['ng-zorro-antd/table'], global.rxjs, global.rxjs.operators));
}(this, function (exports, common, core, forms, pagination, smartText, viewer, badge, button, datePicker, dropdown, grid, icon, input, select, spin, table, rxjs, operators) { 'use strict';

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
    /**
     * @record
     */
    function TableData() { }
    if (false) {
        /** @type {?} */
        TableData.prototype.data;
        /** @type {?} */
        TableData.prototype.totalSize;
    }
    /**
     * @record
     */
    function TableColumn() { }
    if (false) {
        /** @type {?} */
        TableColumn.prototype.title;
        /** @type {?} */
        TableColumn.prototype.field;
        /** @type {?|undefined} */
        TableColumn.prototype.width;
        /** @type {?|undefined} */
        TableColumn.prototype.left;
        /** @type {?|undefined} */
        TableColumn.prototype.right;
        /** @type {?|undefined} */
        TableColumn.prototype.type;
        /** @type {?|undefined} */
        TableColumn.prototype.customCell;
        /** @type {?|undefined} */
        TableColumn.prototype.showSort;
        /** @type {?|undefined} */
        TableColumn.prototype.sortValue;
        /** @type {?|undefined} */
        TableColumn.prototype.customSort;
        /** @type {?|undefined} */
        TableColumn.prototype.showFilter;
        /** @type {?|undefined} */
        TableColumn.prototype.filterType;
        /** @type {?|undefined} */
        TableColumn.prototype.filterOptions;
        /** @type {?|undefined} */
        TableColumn.prototype.filterWidth;
        /** @type {?|undefined} */
        TableColumn.prototype.filterMultiple;
        /** @type {?|undefined} */
        TableColumn.prototype.customFilter;
    }
    /**
     * @record
     */
    function TableRow() { }
    if (false) {
        /** @type {?|undefined} */
        TableRow.prototype.isChecked;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function TablePage() { }
    if (false) {
        /** @type {?} */
        TablePage.prototype.page;
        /** @type {?} */
        TablePage.prototype.size;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableCellComponent = /** @class */ (function () {
        function TableCellComponent() {
            this.field = ''; // 对应域
        }
        /**
         * @return {?}
         */
        TableCellComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        TableCellComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-tableCell',
                        template: '<ng-content> </ng-content>'
                    }] }
        ];
        /** @nocollapse */
        TableCellComponent.ctorParameters = function () { return []; };
        TableCellComponent.propDecorators = {
            field: [{ type: core.Input }],
            templateRef: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }]
        };
        return TableCellComponent;
    }());
    if (false) {
        /** @type {?} */
        TableCellComponent.prototype.field;
        /** @type {?} */
        TableCellComponent.prototype.templateRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableFilterComponent = /** @class */ (function () {
        function TableFilterComponent() {
            this.field = ''; // 对应域
        }
        /**
         * @return {?}
         */
        TableFilterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        TableFilterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-tableFilter',
                        template: '<ng-content> </ng-content>'
                    }] }
        ];
        /** @nocollapse */
        TableFilterComponent.ctorParameters = function () { return []; };
        TableFilterComponent.propDecorators = {
            field: [{ type: core.Input }],
            templateRef: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }]
        };
        return TableFilterComponent;
    }());
    if (false) {
        /** @type {?} */
        TableFilterComponent.prototype.field;
        /** @type {?} */
        TableFilterComponent.prototype.templateRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent(_elementRef, _renderer2) {
            this._elementRef = _elementRef;
            this._renderer2 = _renderer2;
            this.columns = []; // 列数据
            // 列数据
            this.data = { data: [], totalSize: 0 }; // 表格数据
            // 表格数据
            this.selections = []; // 已选项
            // 固定表头，滚动
            this.loading = false; // 表格loading
            // 表格loading
            this.pageSize = 10; // 显示条数
            // 显示条数
            this.frontPagination = false; // 是否前端分页
            // 是否前端分页
            this.showPagination = true; // 是否显示分页器
            // 是否显示分页器
            this.fixedPagination = false; // 是否固定分页器
            // 是否固定分页器
            this.showSizeChanger = true; // 是否显示条数切换器
            // 是否显示条数切换器
            this.showQuickJumper = true; // 是否显示快速跳转器
            // 是否显示快速跳转器
            this.size = 'middle'; // 表格size
            // 表格size
            this.paginationSize = 'default'; // 分页size
            // 分页size
            this.pageSizeOptions = [10, 30, 50, 100]; // 页数选择器可选值
            // 页数选择器可选值
            this.showCheckbox = false; // 是否显示复选框
            // title模板
            this.columnsChange = new core.EventEmitter(); // 列数据改变事件 用于双向绑定
            // 列数据改变事件 用于双向绑定
            this.selectionsChange = new core.EventEmitter(); // 已选项改变事件 用于双向绑定
            // 已选项改变事件 用于双向绑定
            this.load = new core.EventEmitter(); // load事件
            // load事件
            this.sort = new core.EventEmitter(); // 排序事件
            // 排序事件
            this.linkClick = new core.EventEmitter(); // 链接点击事件
            // 自定义搜索组件
            this.load$ = new rxjs.Subject(); // load流
            // load流
            this.displayData = []; // 当前显示数据
            // 当前显示数据
            this.pageIndex = 1; // 当前页码
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        TableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.data) {
                // 重走sort
                if (this.sortParams && this.sortParams.key && this.sortParams.value) {
                    this.onSort(this.sortParams);
                }
            }
            if (changes.columns) {
                // 是下拉选择的自动添加词典
                this.columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    if (column.showFilter && column.filterType === 'select' && Array.isArray(column.filterOptions)) {
                        column.lexicon = column.lexicon ? __spread(column.lexicon, column.filterOptions) : column.filterOptions;
                    }
                }));
            }
            if (changes.selections) {
                this.updateCheckedBySelections();
            }
        };
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /* tslint:disable */
            this.load$.pipe(operators.debounceTime(20)).subscribe((/**
             * @return {?}
             */
            function () {
                // 发出load事件
                _this.load.emit({ page: _this.pageIndex, size: _this.pageSize });
            }));
        };
        /**
         * @return {?}
         */
        TableComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            // 页面初始化完成后自动load一次
            this.load$.next();
            if (this.showPagination && this.fixedPagination) {
                this.toFixedPagination();
            }
        };
        /**
         * @return {?}
         */
        TableComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // 赋值自定义单元格
            this.customCells.forEach((/**
             * @param {?} customCell
             * @return {?}
             */
            function (customCell) {
                /** @type {?} */
                var findedColumn = _this.columns.find((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) { return column.field === customCell.field; }));
                if (findedColumn)
                    findedColumn.customCell = customCell.templateRef;
            }));
            // 赋值自定义搜索组件
            this.customFilters.forEach((/**
             * @param {?} customFilter
             * @return {?}
             */
            function (customFilter) {
                /** @type {?} */
                var findedColumn = _this.columns.find((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) { return column.field === customFilter.field; }));
                if (findedColumn) {
                    findedColumn.showFilter = true;
                    findedColumn.customFilter = customFilter.templateRef;
                }
            }));
        };
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // 不使用takeUntil是因为直接unsubscribe性能更好
            this.load$.unsubscribe();
        };
        /**
         * 表格当前显示数据改变回调
         * @param currentData 当前页显示数据
         */
        /**
         * 表格当前显示数据改变回调
         * @param {?} currentData 当前页显示数据
         * @return {?}
         */
        TableComponent.prototype.currentPageDataChange = /**
         * 表格当前显示数据改变回调
         * @param {?} currentData 当前页显示数据
         * @return {?}
         */
        function (currentData) {
            this.displayData = currentData;
        };
        /**
         * 单选改变回调
         */
        /**
         * 单选改变回调
         * @return {?}
         */
        TableComponent.prototype.singleCheckChange = /**
         * 单选改变回调
         * @return {?}
         */
        function () {
            this.updateSelectionsByChecked();
        };
        /**
         * 全选复选框改变回调
         * @param isChecked 是否全选
         */
        /**
         * 全选复选框改变回调
         * @param {?} isChecked 是否全选
         * @return {?}
         */
        TableComponent.prototype.allCheckChange = /**
         * 全选复选框改变回调
         * @param {?} isChecked 是否全选
         * @return {?}
         */
        function (isChecked) {
            this.displayData.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return (row.isChecked = isChecked); }));
            this.updateSelectionsByChecked();
        };
        /**
         * 根据checked更新selections
         */
        /**
         * 根据checked更新selections
         * @return {?}
         */
        TableComponent.prototype.updateSelectionsByChecked = /**
         * 根据checked更新selections
         * @return {?}
         */
        function () {
            this.selections = this.displayData.filter((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return row.isChecked; }));
            this.selectionsChange.emit(this.selections);
        };
        /**
         * 根据selections更新checked
         */
        /**
         * 根据selections更新checked
         * @return {?}
         */
        TableComponent.prototype.updateCheckedBySelections = /**
         * 根据selections更新checked
         * @return {?}
         */
        function () {
            var _this = this;
            this.displayData.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return (row.isChecked = _this.selections.includes(row)); }));
        };
        /**
         * 页码改变回调
         */
        /**
         * 页码改变回调
         * @return {?}
         */
        TableComponent.prototype.pageIndexChange = /**
         * 页码改变回调
         * @return {?}
         */
        function () {
            this.load$.next();
        };
        /**
         * 显示条数改变回调
         */
        /**
         * 显示条数改变回调
         * @return {?}
         */
        TableComponent.prototype.pageSizeChange = /**
         * 显示条数改变回调
         * @return {?}
         */
        function () {
            // 显示条数改变时回到首页
            this.pageIndex = 1;
            this.load$.next();
        };
        /**
         * 排序改变
         * @param sortParams 排序参数
         */
        /**
         * 排序改变
         * @param {?} sortParams 排序参数
         * @return {?}
         */
        TableComponent.prototype.onSort = /**
         * 排序改变
         * @param {?} sortParams 排序参数
         * @return {?}
         */
        function (sortParams) {
            // 保存排序参数，用于下次数据进来再进行排序
            this.sortParams = sortParams;
            // 查找正在排序的列
            /** @type {?} */
            var sortColumn = this.columns.find((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.field === sortParams.key; }));
            // 如果没有自定义排序，自动前端排序
            if (sortColumn && !sortColumn.customSort) {
                this.data.data.sort((/**
                 * @param {?} previous
                 * @param {?} further
                 * @return {?}
                 */
                function (previous, further) {
                    return sortParams.value === 'descend'
                        ? further[sortParams.key] > previous[sortParams.key]
                            ? 1
                            : -1
                        : previous[sortParams.key] > further[sortParams.key]
                            ? 1
                            : -1;
                }));
                this.data.data = __spread(this.data.data);
            }
            this.sort.emit(sortParams);
        };
        /**
         * 日期改变回调
         * @param isOpen 是否打开
         * @param column 当前列模型数据
         */
        /**
         * 日期改变回调
         * @param {?} isOpen 是否打开
         * @param {?} column 当前列模型数据
         * @return {?}
         */
        TableComponent.prototype.onRangePickerOpenChange = /**
         * 日期改变回调
         * @param {?} isOpen 是否打开
         * @param {?} column 当前列模型数据
         * @return {?}
         */
        function (isOpen, column) {
            if (isOpen === false) {
                /** @type {?} */
                var date = column.searchValue;
                if (date && Array.isArray(date) && date.length === 2) {
                    column.searchValue = [common.formatDate(date[0], 'yyyy-MM-dd 00:00:00', 'zh_CN'), common.formatDate(date[1], 'yyyy-MM-dd 23:59:59', 'zh_CN')];
                    column.displayValue = [common.formatDate(date[0], 'yyyy-MM-dd', 'zh_CN'), common.formatDate(date[1], 'yyyy-MM-dd', 'zh_CN')];
                }
            }
        };
        /**
         * 查询确认回调
         */
        /**
         * 查询确认回调
         * @param {?} dropdown
         * @return {?}
         */
        TableComponent.prototype.onFilterConfim = /**
         * 查询确认回调
         * @param {?} dropdown
         * @return {?}
         */
        function (dropdown) {
            dropdown.nzDropdownMenu.setVisibleStateWhen(false);
            this.columns = __spread(this.columns);
            this.columnsChange.emit(this.columns);
        };
        /**
         * 固定分页
         */
        /**
         * 固定分页
         * @return {?}
         */
        TableComponent.prototype.toFixedPagination = /**
         * 固定分页
         * @return {?}
         */
        function () {
            var _this = this;
            // 没有滚动条时和有滚动条时tableBody会不一样，故先给上滚动条
            this.scroll = __assign({}, this.scroll, { y: '0px' });
            // 等待滚动条更新
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var windowHeight = document.documentElement.clientHeight;
                /** @type {?} */
                var tableBody = _this._elementRef.nativeElement.querySelector('.ant-table-body');
                /** @type {?} */
                var pagination = _this._elementRef.nativeElement.querySelector('.p-table-pagination-container');
                /** @type {?} */
                var tableBodyTop = tableBody.getBoundingClientRect().top;
                /** @type {?} */
                var scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight + 'px';
                // 设scroll 实际上是设了max-height
                _this.scroll = __assign({}, _this.scroll, { y: scrollHeight });
                // 设height
                _this._renderer2.setStyle(tableBody, 'height', scrollHeight);
            }));
        };
        /**
         * @param {?} field
         * @param {?} rowData
         * @return {?}
         */
        TableComponent.prototype.onlinkClick = /**
         * @param {?} field
         * @param {?} rowData
         * @return {?}
         */
        function (field, rowData) {
            this.linkClick.emit({ field: field, rowData: rowData });
        };
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-table',
                        exportAs: 'pTable',
                        template: "<nz-spin [nzTip]=\"'\u52A0\u8F7D\u4E2D...'\" [nzSpinning]=\"loading\">\n  <nz-table\n    #nzTable\n    class=\"p-table\"\n    [nzData]=\"data?.data || []\"\n    [nzTitle]=\"titleTemplate || null\"\n    [nzScroll]=\"scroll\"\n    [nzFrontPagination]=\"frontPagination\"\n    [nzSize]=\"size\"\n    [nzShowPagination]=\"false\"\n    (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n    [class.fixed-pagination]=\"fixedPagination\"\n  >\n    <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n      <tr>\n        <th\n          *ngIf=\"showCheckbox\"\n          nzLeft=\"0px\"\n          nzWidth=\"40px\"\n          nzShowCheckbox\n          [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n          [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n          (nzCheckedChange)=\"allCheckChange($event)\"\n        ></th>\n        <th\n          *ngFor=\"let column of columns\"\n          [nzLeft]=\"column.left\"\n          [nzRight]=\"column.right\"\n          [nzWidth]=\"column.width || '120px'\"\n          [nzShowSort]=\"column.showSort\"\n          [nzSortKey]=\"column.field\"\n          [nzCustomFilter]=\"column.showFilter\"\n        >\n          {{ column.title }}\n          <!-- \u641C\u7D22 -->\n          <ng-container *ngIf=\"column.showFilter\">\n            <i\n              nz-icon\n              nz-dropdown\n              [nzDropdownMenu]=\"dropdownMenu\"\n              nzType=\"search\"\n              class=\"ant-table-filter-icon\"\n              [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n              nzTrigger=\"click\"\n              nzPlacement=\"bottomRight\"\n              [nzClickHide]=\"false\"\n              nzTableFilter\n              #dropdown=\"nzDropdown\"\n            ></i>\n            <nz-dropdown-menu #dropdownMenu=\"nzDropdownMenu\">\n              <div class=\"p-table-filter-panel\">\n                <!-- \u641C\u7D22\u7EC4\u4EF6 -->\n                <ng-container\n                  [ngTemplateOutlet]=\"filterTemplate\"\n                  [ngTemplateOutletContext]=\"{ $implicit: column, dropdown: dropdown }\"\n                ></ng-container>\n                <!-- \u641C\u7D22\u786E\u8BA4\u6309\u94AE -->\n                <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"p-table-filter-button\">\n                  <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                    \u786E\u8BA4\n                  </button>\n                </div>\n              </div>\n            </nz-dropdown-menu>\n          </ng-container>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let row of displayData\">\n        <tr>\n          <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n          <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n            <!-- \u5355\u5143\u683C -->\n            <ng-container [ngTemplateOutlet]=\"cellTemplate\" [ngTemplateOutletContext]=\"{ $implicit: column, row: row }\"></ng-container>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </nz-table>\n\n  <div class=\"p-table-pagination-container\">\n    <p-pagination\n      *ngIf=\"fixedPagination ? showPagination : showPagination && data?.totalSize\"\n      [nzSize]=\"paginationSize\"\n      [nzShowQuickJumper]=\"showQuickJumper\"\n      [(nzPageIndex)]=\"pageIndex\"\n      [(nzPageSize)]=\"pageSize\"\n      [nzShowSizeChanger]=\"showSizeChanger\"\n      [nzPageSizeOptions]=\"pageSizeOptions\"\n      [nzTotal]=\"data?.totalSize || 0\"\n      [nzShowTotal]=\"totalTemplate\"\n      (nzPageIndexChange)=\"pageIndexChange()\"\n      (nzPageSizeChange)=\"pageSizeChange()\"\n    ></p-pagination>\n  </div>\n</nz-spin>\n\n<!-- total\u6A21\u677F -->\n<ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n\n<!-- \u641C\u7D22\u7EC4\u4EF6\u6A21\u677F -->\n<ng-template #filterTemplate let-column let-dropdown=\"dropdown\">\n  <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n  <ng-template #defaultFilterTemplate>\n    <ng-container [ngSwitch]=\"column.filterType\">\n      <!-- select -->\n      <ng-template ngSwitchCase=\"select\">\n        <nz-select\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          [(ngModel)]=\"column.searchValue\"\n          [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n          [style.width]=\"column.filterWidth || '180px'\"\n        >\n          <nz-option *ngFor=\"let option of column.filterOptions || []\" [nzValue]=\"option.value\" [nzLabel]=\"option.label\"></nz-option>\n        </nz-select>\n      </ng-template>\n      <!-- range-picker -->\n      <ng-template ngSwitchCase=\"rangePicker\">\n        <nz-range-picker\n          nzAllowClear\n          [(ngModel)]=\"column.searchValue\"\n          [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n          (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n        ></nz-range-picker>\n      </ng-template>\n      <!-- input -->\n      <ng-template ngSwitchDefault>\n        <nz-input-group [nzSuffix]=\"suffixTemplate\">\n          <input\n            #input\n            nz-input\n            placeholder=\"\u8BF7\u8F93\u5165\"\n            [(ngModel)]=\"column.searchValue\"\n            [style.width]=\"column.filterWidth || '180px'\"\n            (keydown.enter)=\"onFilterConfim(dropdown)\"\n          />\n        </nz-input-group>\n        <ng-template #suffixTemplate>\n          <i\n            nz-icon\n            nz-tooltip\n            class=\"p-table-clear-icon\"\n            nzTheme=\"fill\"\n            nzType=\"close-circle\"\n            *ngIf=\"column.searchValue\"\n            (click)=\"column.searchValue = null; input.focus()\"\n          ></i>\n        </ng-template>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n\n<!-- \u5355\u5143\u683C\u6A21\u677F -->\n<ng-template #cellTemplate let-column let-row=\"row\">\n  <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n  <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n    <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n  </ng-template>\n  <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n  <ng-template #defaultCellTemplate>\n    <ng-container [ngSwitch]=\"column.type\">\n      <!-- link -->\n      <ng-template ngSwitchCase=\"link\">\n        <a (click)=\"onlinkClick(column['field'], row)\">\n          <smart-text [text]=\"row[column['field']]\"></smart-text>\n        </a>\n      </ng-template>\n      <!-- thumbnail -->\n      <ng-template ngSwitchCase=\"thumbnail\">\n        <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n        <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n          <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n          <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n            <nz-badge [nzCount]=\"row[column['field']]?.length\">\n              <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n            </nz-badge>\n          </ng-template>\n          <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n          <ng-template #noBadgeTemplate>\n            <img\n              viewerImg\n              height=\"24px\"\n              width=\"24px\"\n              *ngFor=\"let url of row[column['field']] || []\"\n              [lazyLoadSrc]=\"url\"\n              style=\"cursor: zoom-in\"\n            />\n          </ng-template>\n        </div>\n      </ng-template>\n      <!-- default -->\n      <ng-template ngSwitchDefault>\n        <smart-text [text]=\"row[column['field']]\"></smart-text>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        TableComponent.propDecorators = {
            columns: [{ type: core.Input }],
            data: [{ type: core.Input }],
            selections: [{ type: core.Input }],
            scroll: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            pageSize: [{ type: core.Input }],
            frontPagination: [{ type: core.Input }],
            showPagination: [{ type: core.Input }],
            fixedPagination: [{ type: core.Input }],
            showSizeChanger: [{ type: core.Input }],
            showQuickJumper: [{ type: core.Input }],
            size: [{ type: core.Input }],
            paginationSize: [{ type: core.Input }],
            pageSizeOptions: [{ type: core.Input }],
            showCheckbox: [{ type: core.Input }],
            titleTemplate: [{ type: core.Input }],
            columnsChange: [{ type: core.Output }],
            selectionsChange: [{ type: core.Output }],
            load: [{ type: core.Output }],
            sort: [{ type: core.Output }],
            linkClick: [{ type: core.Output }],
            customCells: [{ type: core.ContentChildren, args: [TableCellComponent,] }],
            customFilters: [{ type: core.ContentChildren, args: [TableFilterComponent,] }]
        };
        return TableComponent;
    }());
    if (false) {
        /** @type {?} */
        TableComponent.prototype.columns;
        /** @type {?} */
        TableComponent.prototype.data;
        /** @type {?} */
        TableComponent.prototype.selections;
        /** @type {?} */
        TableComponent.prototype.scroll;
        /** @type {?} */
        TableComponent.prototype.loading;
        /** @type {?} */
        TableComponent.prototype.pageSize;
        /** @type {?} */
        TableComponent.prototype.frontPagination;
        /** @type {?} */
        TableComponent.prototype.showPagination;
        /** @type {?} */
        TableComponent.prototype.fixedPagination;
        /** @type {?} */
        TableComponent.prototype.showSizeChanger;
        /** @type {?} */
        TableComponent.prototype.showQuickJumper;
        /** @type {?} */
        TableComponent.prototype.size;
        /** @type {?} */
        TableComponent.prototype.paginationSize;
        /** @type {?} */
        TableComponent.prototype.pageSizeOptions;
        /** @type {?} */
        TableComponent.prototype.showCheckbox;
        /** @type {?} */
        TableComponent.prototype.titleTemplate;
        /** @type {?} */
        TableComponent.prototype.columnsChange;
        /** @type {?} */
        TableComponent.prototype.selectionsChange;
        /** @type {?} */
        TableComponent.prototype.load;
        /** @type {?} */
        TableComponent.prototype.sort;
        /** @type {?} */
        TableComponent.prototype.linkClick;
        /** @type {?} */
        TableComponent.prototype.customCells;
        /** @type {?} */
        TableComponent.prototype.customFilters;
        /** @type {?} */
        TableComponent.prototype.load$;
        /** @type {?} */
        TableComponent.prototype.displayData;
        /** @type {?} */
        TableComponent.prototype.pageIndex;
        /** @type {?} */
        TableComponent.prototype.sortParams;
        /**
         * @type {?}
         * @private
         */
        TableComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TableComponent.prototype._renderer2;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENT = [TableComponent, TableCellComponent, TableFilterComponent];
    /** @type {?} */
    var MODULE = [
        common.CommonModule,
        forms.FormsModule,
        table.NzTableModule,
        dropdown.NzDropDownModule,
        icon.NzIconModule,
        button.NzButtonModule,
        input.NzInputModule,
        grid.NzGridModule,
        badge.NzBadgeModule,
        select.NzSelectModule,
        datePicker.NzDatePickerModule,
        spin.NzSpinModule,
        smartText.SmartTextModule,
        viewer.ViewerDirectiveModule,
        pagination.PaginationModule,
    ];
    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: __spread(COMPONENT),
                        imports: __spread(MODULE),
                        exports: __spread(COMPONENT),
                    },] }
        ];
        return TableModule;
    }());

    exports.TableCellComponent = TableCellComponent;
    exports.TableComponent = TableComponent;
    exports.TableFilterComponent = TableFilterComponent;
    exports.TableModule = TableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pTable.umd.js.map
