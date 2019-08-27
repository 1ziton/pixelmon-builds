/**
 * @Based on delon(cipchk@qq.com) v0.1.5
 * (c) 2019 giscafer(giscafer@outlook.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@pixelmon/pikachu/viewer'), require('ng-zorro-antd'), require('rxjs'), require('rxjs/operators'), require('@pixelmon/pikachu/smart-text')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/advanced-table', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@pixelmon/pikachu/viewer', 'ng-zorro-antd', 'rxjs', 'rxjs/operators', '@pixelmon/pikachu/smart-text'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu['advanced-table'] = {}), global.ng.common, global.ng.core, global.ng.forms, global.pixelmon.pikachu.viewer, global.ngZorroAntd, global.rxjs, global.rxjs.operators, global.pixelmon.pikachu['smart-text']));
}(this, function (exports, common, core, forms, viewer, ngZorroAntd, rxjs, operators, smartText) { 'use strict';

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
    var AdvancedCellComponent = /** @class */ (function () {
        function AdvancedCellComponent() {
            this.field = ''; // 对应域
        }
        /**
         * @return {?}
         */
        AdvancedCellComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        AdvancedCellComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-advancedCell',
                        template: '<ng-content> </ng-content>'
                    }] }
        ];
        /** @nocollapse */
        AdvancedCellComponent.ctorParameters = function () { return []; };
        AdvancedCellComponent.propDecorators = {
            field: [{ type: core.Input }],
            templateRef: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }]
        };
        return AdvancedCellComponent;
    }());
    if (false) {
        /** @type {?} */
        AdvancedCellComponent.prototype.field;
        /** @type {?} */
        AdvancedCellComponent.prototype.templateRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AdvancedFilterComponent = /** @class */ (function () {
        function AdvancedFilterComponent() {
            this.field = ''; // 对应域
        }
        /**
         * @return {?}
         */
        AdvancedFilterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        AdvancedFilterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-advancedFilter',
                        template: '<ng-content> </ng-content>'
                    }] }
        ];
        /** @nocollapse */
        AdvancedFilterComponent.ctorParameters = function () { return []; };
        AdvancedFilterComponent.propDecorators = {
            field: [{ type: core.Input }],
            templateRef: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }]
        };
        return AdvancedFilterComponent;
    }());
    if (false) {
        /** @type {?} */
        AdvancedFilterComponent.prototype.field;
        /** @type {?} */
        AdvancedFilterComponent.prototype.templateRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AdvancedTableComponent = /** @class */ (function () {
        function AdvancedTableComponent(_elementRef, _renderer2) {
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
            this.size = 'middle'; // 表格size
            // 表格size
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
        AdvancedTableComponent.prototype.ngOnChanges = /**
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
                changes.columns.currentValue.forEach((/**
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
        AdvancedTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /* tslint:disable */
            this.load$.pipe(operators.debounceTime(20)).subscribe((/**
             * @return {?}
             */
            function () {
                // 清空selections
                _this.selections = [];
                _this.selectionsChange.emit(_this.selections);
                // 发出load事件
                _this.load.emit({ page: _this.pageIndex, size: _this.pageSize });
            }));
        };
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            // 页面初始化完成后自动load一次
            this.load$.next();
            if (this.fixedPagination) {
                this.toFixedPagination();
            }
        };
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.ngAfterContentInit = /**
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
        AdvancedTableComponent.prototype.ngOnDestroy = /**
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
        AdvancedTableComponent.prototype.currentPageDataChange = /**
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
        AdvancedTableComponent.prototype.singleCheckChange = /**
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
        AdvancedTableComponent.prototype.allCheckChange = /**
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
        AdvancedTableComponent.prototype.updateSelectionsByChecked = /**
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
        AdvancedTableComponent.prototype.updateCheckedBySelections = /**
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
        AdvancedTableComponent.prototype.pageIndexChange = /**
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
        AdvancedTableComponent.prototype.pageSizeChange = /**
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
        AdvancedTableComponent.prototype.onSort = /**
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
        AdvancedTableComponent.prototype.onRangePickerOpenChange = /**
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
        AdvancedTableComponent.prototype.onFilterConfim = /**
         * 查询确认回调
         * @param {?} dropdown
         * @return {?}
         */
        function (dropdown) {
            dropdown.setVisibleStateWhen(false);
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
        AdvancedTableComponent.prototype.toFixedPagination = /**
         * 固定分页
         * @return {?}
         */
        function () {
            var _this = this;
            // 没有滚动条时和有滚动条时tableBody会不一样，故先给上滚动条
            this.scroll = { y: '0px' };
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
                var pagination = _this._elementRef.nativeElement.querySelector('nz-pagination');
                /** @type {?} */
                var tableBodyTop = tableBody.getBoundingClientRect().top;
                /** @type {?} */
                var scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight - 8 + 'px';
                _this.scroll = __assign({}, _this.scroll, { y: scrollHeight });
                _this._renderer2.setStyle(tableBody, 'height', scrollHeight);
            }));
        };
        /**
         * @param {?} field
         * @param {?} rowData
         * @return {?}
         */
        AdvancedTableComponent.prototype.onlinkClick = /**
         * @param {?} field
         * @param {?} rowData
         * @return {?}
         */
        function (field, rowData) {
            this.linkClick.emit({ field: field, rowData: rowData });
        };
        AdvancedTableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-advancedTable',
                        template: "<nz-table\n  class=\"advanced-table\"\n  [nzData]=\"data?.data || []\"\n  [nzLoading]=\"loading\"\n  [nzTitle]=\"titleTemplate || null\"\n  [nzScroll]=\"scroll\"\n  [nzFrontPagination]=\"frontPagination\"\n  [nzSize]=\"size\"\n  [nzShowPagination]=\"showPagination\"\n  [(nzPageIndex)]=\"pageIndex\"\n  [(nzPageSize)]=\"pageSize\"\n  [nzShowSizeChanger]=\"showSizeChanger\"\n  [nzPageSizeOptions]=\"pageSizeOptions\"\n  [nzTotal]=\"data?.totalSize || 0\"\n  [nzShowTotal]=\"totalTemplate\"\n  (nzPageIndexChange)=\"pageIndexChange()\"\n  (nzPageSizeChange)=\"pageSizeChange()\"\n  (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n  [class.fixed-pagination]=\"fixedPagination\"\n>\n  <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n    <tr>\n      <th\n        *ngIf=\"showCheckbox\"\n        nzLeft=\"0px\"\n        nzWidth=\"40px\"\n        nzShowCheckbox\n        [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n        [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n        (nzCheckedChange)=\"allCheckChange($event)\"\n      ></th>\n      <th\n        *ngFor=\"let column of columns\"\n        [nzLeft]=\"column.left\"\n        [nzRight]=\"column.right\"\n        [nzWidth]=\"column.width || '120px'\"\n        [nzShowSort]=\"column.showSort\"\n        [nzSortKey]=\"column.field\"\n        [nzCustomFilter]=\"column.showFilter\"\n      >\n        {{ column.title }}\n        <nz-dropdown *ngIf=\"column.showFilter\" nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter #dropdown>\n          <i nz-icon nzType=\"search\" class=\"ant-table-filter-icon\" [class.ant-table-filter-open]=\"dropdown.nzVisible\" nz-dropdown></i>\n          <div class=\"advanced-table-filter-panel\">\n            <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n            <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n              <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n            </ng-template>\n            <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n            <ng-template #defaultFilterTemplate>\n              <ng-container [ngSwitch]=\"column.filterType\">\n                <!-- select -->\n                <ng-template ngSwitchCase=\"select\">\n                  <nz-select\n                    nzAllowClear\n                    nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n                    [(ngModel)]=\"column.searchValue\"\n                    [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n                    [style.width]=\"column.filterWidth || '180px'\"\n                  >\n                    <nz-option\n                      *ngFor=\"let option of column.filterOptions || []\"\n                      [nzValue]=\"option.value\"\n                      [nzLabel]=\"option.label\"\n                    ></nz-option>\n                  </nz-select>\n                </ng-template>\n                <!-- range-picker -->\n                <ng-template ngSwitchCase=\"rangePicker\">\n                  <nz-range-picker\n                    nzAllowClear\n                    [(ngModel)]=\"column.searchValue\"\n                    [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n                    (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n                  ></nz-range-picker>\n                </ng-template>\n                <!-- input -->\n                <ng-template ngSwitchDefault>\n                  <nz-input-group [nzSuffix]=\"suffixTemplate\">\n                    <input\n                      #input\n                      nz-input\n                      placeholder=\"\u8BF7\u8F93\u5165\"\n                      [(ngModel)]=\"column.searchValue\"\n                      [style.width]=\"column.filterWidth || '180px'\"\n                      (keydown.enter)=\"onFilterConfim(dropdown)\"\n                    />\n                  </nz-input-group>\n                  <ng-template #suffixTemplate>\n                    <i\n                      nz-icon\n                      nz-tooltip\n                      class=\"clear-icon\"\n                      nzTheme=\"fill\"\n                      nzType=\"close-circle\"\n                      *ngIf=\"column.searchValue\"\n                      (click)=\"column.searchValue = null; input.focus()\"\n                    ></i>\n                  </ng-template>\n                </ng-template>\n              </ng-container>\n            </ng-template>\n            <!-- \u6309\u94AE -->\n            <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"advanced-table-filter-button\">\n              <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                \u786E\u8BA4\n              </button>\n            </div>\n          </div>\n        </nz-dropdown>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let row of displayData\">\n      <tr>\n        <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n        <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n          <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n          <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n            <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n          </ng-template>\n          <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n          <ng-template #defaultCellTemplate>\n            <ng-container [ngSwitch]=\"column.type\">\n              <!-- link -->\n              <ng-template ngSwitchCase=\"link\">\n                <a (click)=\"onlinkClick(column['field'], row)\">\n                  <smart-text [text]=\"row[column['field']]\"></smart-text>\n                </a>\n              </ng-template>\n              <!-- thumbnail -->\n              <ng-template ngSwitchCase=\"thumbnail\">\n                <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n                <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n                  <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n                  <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n                    <nz-badge [nzCount]=\"row[column['field']]?.length\">\n                      <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n                    </nz-badge>\n                  </ng-template>\n                  <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n                  <ng-template #noBadgeTemplate>\n                    <img\n                      viewerImg\n                      height=\"24px\"\n                      width=\"24px\"\n                      *ngFor=\"let url of row[column['field']] || []\"\n                      [lazyLoadSrc]=\"url\"\n                      style=\"cursor: zoom-in\"\n                    />\n                  </ng-template>\n                </div>\n              </ng-template>\n              <!-- default -->\n              <ng-template ngSwitchDefault>\n                <smart-text [text]=\"row[column['field']]\"></smart-text>\n              </ng-template>\n            </ng-container>\n          </ng-template>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n\n  <!-- total\u6A21\u677F -->\n  <ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n</nz-table>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host ::ng-deep .ant-table-scroll{position:relative}:host ::ng-deep .fixed-pagination .ant-table-placeholder{position:absolute;bottom:0;width:100%}td{word-break:break-all}.clear-icon{color:rgba(0,0,0,.25);font-size:12px;vertical-align:top;cursor:pointer;transition:color .3s}.clear-icon:hover{color:rgba(0,0,0,.45)}"]
                    }] }
        ];
        /** @nocollapse */
        AdvancedTableComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        AdvancedTableComponent.propDecorators = {
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
            size: [{ type: core.Input }],
            pageSizeOptions: [{ type: core.Input }],
            showCheckbox: [{ type: core.Input }],
            titleTemplate: [{ type: core.Input }],
            columnsChange: [{ type: core.Output }],
            selectionsChange: [{ type: core.Output }],
            load: [{ type: core.Output }],
            sort: [{ type: core.Output }],
            linkClick: [{ type: core.Output }],
            customCells: [{ type: core.ContentChildren, args: [AdvancedCellComponent,] }],
            customFilters: [{ type: core.ContentChildren, args: [AdvancedFilterComponent,] }]
        };
        return AdvancedTableComponent;
    }());
    if (false) {
        /** @type {?} */
        AdvancedTableComponent.prototype.columns;
        /** @type {?} */
        AdvancedTableComponent.prototype.data;
        /** @type {?} */
        AdvancedTableComponent.prototype.selections;
        /** @type {?} */
        AdvancedTableComponent.prototype.scroll;
        /** @type {?} */
        AdvancedTableComponent.prototype.loading;
        /** @type {?} */
        AdvancedTableComponent.prototype.pageSize;
        /** @type {?} */
        AdvancedTableComponent.prototype.frontPagination;
        /** @type {?} */
        AdvancedTableComponent.prototype.showPagination;
        /** @type {?} */
        AdvancedTableComponent.prototype.fixedPagination;
        /** @type {?} */
        AdvancedTableComponent.prototype.showSizeChanger;
        /** @type {?} */
        AdvancedTableComponent.prototype.size;
        /** @type {?} */
        AdvancedTableComponent.prototype.pageSizeOptions;
        /** @type {?} */
        AdvancedTableComponent.prototype.showCheckbox;
        /** @type {?} */
        AdvancedTableComponent.prototype.titleTemplate;
        /** @type {?} */
        AdvancedTableComponent.prototype.columnsChange;
        /** @type {?} */
        AdvancedTableComponent.prototype.selectionsChange;
        /** @type {?} */
        AdvancedTableComponent.prototype.load;
        /** @type {?} */
        AdvancedTableComponent.prototype.sort;
        /** @type {?} */
        AdvancedTableComponent.prototype.linkClick;
        /** @type {?} */
        AdvancedTableComponent.prototype.customCells;
        /** @type {?} */
        AdvancedTableComponent.prototype.customFilters;
        /** @type {?} */
        AdvancedTableComponent.prototype.load$;
        /** @type {?} */
        AdvancedTableComponent.prototype.displayData;
        /** @type {?} */
        AdvancedTableComponent.prototype.pageIndex;
        /** @type {?} */
        AdvancedTableComponent.prototype.sortParams;
        /**
         * @type {?}
         * @private
         */
        AdvancedTableComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        AdvancedTableComponent.prototype._renderer2;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENT = [AdvancedTableComponent, AdvancedCellComponent, AdvancedFilterComponent];
    /** @type {?} */
    var MODULE = [common.CommonModule, forms.FormsModule, ngZorroAntd.NgZorroAntdModule, smartText.SmartTextModule, viewer.ViewerDirectiveModule];
    var AdvancedTableModule = /** @class */ (function () {
        function AdvancedTableModule() {
        }
        AdvancedTableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: __spread(COMPONENT),
                        imports: __spread(MODULE),
                        exports: __spread(MODULE, COMPONENT),
                    },] }
        ];
        return AdvancedTableModule;
    }());
    /**
     * @record
     */
    function AdvancedTableColumn() { }
    if (false) {
        /** @type {?} */
        AdvancedTableColumn.prototype.title;
        /** @type {?} */
        AdvancedTableColumn.prototype.field;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.width;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.left;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.right;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.type;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.customCell;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.showSort;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.sortValue;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.customSort;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.showFilter;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.filterType;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.filterOptions;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.filterWidth;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.filterMultiple;
        /** @type {?|undefined} */
        AdvancedTableColumn.prototype.customFilter;
    }
    /**
     * @record
     */
    function AdvancedTableRow() { }
    if (false) {
        /** @type {?} */
        AdvancedTableRow.prototype.isChecked;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function PageParams() { }
    if (false) {
        /** @type {?} */
        PageParams.prototype.page;
        /** @type {?} */
        PageParams.prototype.size;
    }

    exports.AdvancedTableModule = AdvancedTableModule;
    exports.ɵa = AdvancedTableComponent;
    exports.ɵb = AdvancedCellComponent;
    exports.ɵc = AdvancedFilterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pixelmon-pikachu-advanced-table.umd.js.map
