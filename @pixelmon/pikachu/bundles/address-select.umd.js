/**
 * @Based on pixelmon(cipchk@qq.com) v0.2.1
 * (c) 2019 developer(developer@1ziton.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/address-select', ['exports', '@angular/cdk/a11y', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu['address-select'] = {}), global.ng.cdk.a11y, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.core, global.ng.forms, global.core$1, global.rxjs, global.rxjs.operators, global.ng.common, global.empty, global.icon));
}(this, function (exports, a11y, overlay, platform, core, forms, core$1, rxjs, operators, common, empty, icon) { 'use strict';

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
    function AddrOption() { }
    if (false) {
        /** @type {?} */
        AddrOption.prototype.label;
        /** @type {?} */
        AddrOption.prototype.value;
        /** @type {?|undefined} */
        AddrOption.prototype.disabled;
        /** @type {?|undefined} */
        AddrOption.prototype.checked;
        /** @type {?|undefined} */
        AddrOption.prototype.level;
    }
    /**
     * @record
     */
    function ResultOption() { }
    if (false) {
        /** @type {?} */
        ResultOption.prototype.label;
        /** @type {?} */
        ResultOption.prototype.value;
        /** @type {?|undefined} */
        ResultOption.prototype.mergeName;
        /** @type {?|undefined} */
        ResultOption.prototype.level;
    }
    /**
     * 抽象类，继承以便重写方法获取数据
     * @abstract
     */
    var   /**
     * 抽象类，继承以便重写方法获取数据
     * @abstract
     */
    AddressQueryService = /** @class */ (function () {
        function AddressQueryService() {
        }
        return AddressQueryService;
    }());
    if (false) {
        /**
         * @abstract
         * @param {?=} code
         * @return {?}
         */
        AddressQueryService.prototype.getListByCode = function (code) { };
        /**
         * @abstract
         * @param {?} code
         * @return {?}
         */
        AddressQueryService.prototype.getOptionByCode = function (code) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultAddressLevelOptions = [
        {
            label: '省',
            value: 'province',
            checked: true,
        },
        {
            label: '市',
            value: 'city',
        },
        {
            label: '区',
            value: 'distrinct',
        },
        {
            label: '街道',
            value: 'street',
        },
    ];
    var AddrFilterOptionPipe = /** @class */ (function () {
        function AddrFilterOptionPipe() {
        }
        /**
         * @param {?} options
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        AddrFilterOptionPipe.prototype.transform = /**
         * @param {?} options
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        function (options, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return options;
            }
            else {
                /** @type {?} */
                var result = ((/** @type {?} */ (options))).filter((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return filterOption(searchValue, o); }));
                console.log(result);
                return result;
            }
        };
        AddrFilterOptionPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'addrFilterOption' },] }
        ];
        return AddrFilterOptionPipe;
    }());
    /**
     * @param {?} searchValue
     * @param {?} option
     * @return {?}
     */
    function defaultAddrFilterOption(searchValue, option) {
        if (option && option.label) {
            return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?=} level
     * @return {?}
     */
    function defaultLevelLabelsFilterOption(level) {
        if (level === void 0) { level = 1; }
        /** @type {?} */
        var cloneArr = defaultAddressLevelOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return (__assign({}, o)); }));
        return cloneArr.slice(0, level);
    }
    var AddrLevelFilterPipe = /** @class */ (function () {
        function AddrLevelFilterPipe() {
        }
        /**
         * @param {?} level
         * @return {?}
         */
        AddrLevelFilterPipe.prototype.transform = /**
         * @param {?} level
         * @return {?}
         */
        function (level) {
            return defaultLevelLabelsFilterOption(level);
        };
        AddrLevelFilterPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'pAddrLevelFitler' },] }
        ];
        return AddrLevelFilterPipe;
    }());
    var AddrCheckedFilterPipe = /** @class */ (function () {
        function AddrCheckedFilterPipe() {
        }
        /**
         * @param {?} activedOption
         * @param {?} index
         * @param {?} option
         * @return {?}
         */
        AddrCheckedFilterPipe.prototype.transform = /**
         * @param {?} activedOption
         * @param {?} index
         * @param {?} option
         * @return {?}
         */
        function (activedOption, index, option) {
            if (activedOption && activedOption.length > 0) {
                if (!activedOption[index])
                    return false;
                return activedOption[index].value === option.value && !option.disabled;
            }
            return false;
        };
        AddrCheckedFilterPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'pAddrCheckedFitler' },] }
        ];
        return AddrCheckedFilterPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressSelectService = /** @class */ (function () {
        function AddressSelectService(addrQuerySrv) {
            var _this = this;
            this.addrQuerySrv = addrQuerySrv;
            // Input params
            this.autoClearSearchValue = true;
            this.serverSearch = false;
            this.filterOption = defaultAddrFilterOption;
            this.disabled = false;
            this.levelLabels = [];
            this.currentLevel = 1;
            this.maxLevel = 1;
            this.separator = '/';
            // selectedValueChanged should emit ngModelChange or not
            this.listOfSelectedValueWithEmit$ = new rxjs.BehaviorSubject({
                value: [],
                emit: false,
            });
            // searchValue Change
            this.searchValueRaw$ = new rxjs.BehaviorSubject('');
            this.listOfFilteredOption = [];
            this.openRaw$ = new rxjs.Subject();
            this.checkRaw$ = new rxjs.Subject();
            this.clearInput$ = new rxjs.Subject();
            this.searchValue = '';
            this.isShowNotFound = false;
            // open
            this.open$ = this.openRaw$.pipe(operators.distinctUntilChanged());
            this.listOfActivatedOption = [];
            this.listOfActivatedOption$ = new rxjs.ReplaySubject(1);
            this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(operators.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.emit; })), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var selectedList = data.value;
                var length = selectedList.length;
                /** @type {?} */
                var modelValue = null;
                if (length > 1) {
                    modelValue = selectedList[length - 1].value;
                }
                return modelValue;
            })));
            this.searchValue$ = this.searchValueRaw$.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.share(), operators.tap((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.searchValue = value;
                // if (value) {
                //   this.updateActivatedOption(this.listOfFilteredOption[0], this.currentLevel);
                // }
                _this.updateListOfFilteredOption();
            })));
            // address data
            this.listOfProvinceOptions = [];
            this.listOfCityOptions = [];
            this.listOfDistinctOptions = [];
            this.listOfStreetOptions = [];
            this.check$ = rxjs.merge(this.checkRaw$, this.searchValue$, this.listOfActivatedOption$, this.open$, this.modelChange$).pipe(operators.share());
            this.compareWith = (/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            function (o1, o2) { return o1 === o2; });
        }
        /**
         * @param {?=} code
         * @param {?=} level
         * @return {?}
         */
        AddressSelectService.prototype.getListByCode = /**
         * @param {?=} code
         * @param {?=} level
         * @return {?}
         */
        function (code, level) {
            var _this = this;
            if (level === void 0) { level = 0; }
            this.addrQuerySrv.getListByCode(code).subscribe((/**
             * @param {?} json
             * @return {?}
             */
            function (json) {
                if (level === 0) {
                    _this.listOfProvinceOptions = __spread(json);
                }
                else if (level === 1) {
                    _this.listOfCityOptions = __spread(json);
                }
                else if (level === 2) {
                    _this.listOfDistinctOptions = __spread(json);
                }
                else if (level === 3) {
                    _this.listOfStreetOptions = __spread(json);
                }
                _this.check();
            }));
        };
        /**
         * @param {?} index
         * @return {?}
         */
        AddressSelectService.prototype.toggleTab = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.currentLevel = index + 1;
            this.levelLabels.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            function (item, i) {
                if (i === index) {
                    item.checked = true;
                }
                else {
                    item.checked = false;
                }
            }));
        };
        /**
         * @return {?}
         */
        AddressSelectService.prototype.isMaxLevel = /**
         * @return {?}
         */
        function () {
            return this.maxLevel === this.currentLevel;
        };
        /**
         * @param {?} option
         * @return {?}
         */
        AddressSelectService.prototype.clickOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option.disabled) {
                return;
            }
            /** @type {?} */
            var level = ((/** @type {?} */ (option.level))) + 1;
            this.updateActivatedOption(option, level);
            // 设置值
            if (this.isMaxLevel()) {
                this.setOpenState(false);
                return;
            }
            if (this.autoClearSearchValue) {
                this.clearInput();
            }
            this.getListByCode(option.value, level);
            this.toggleTab(level);
        };
        /**
         * @param {?=} clean
         * @return {?}
         */
        AddressSelectService.prototype.updateSelectedOption = /**
         * @param {?=} clean
         * @return {?}
         */
        function (clean) {
            if (clean === void 0) { clean = false; }
            if (clean) {
                this.toggleTab(0);
                this.selectedOption = {
                    label: '',
                    value: '',
                    mergeName: '',
                };
                this.listOfActivatedOption = [];
                return;
            }
            /** @type {?} */
            var selectedOption = this.listOfActivatedOption.filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return o && o.value; }));
            var length = selectedOption.length;
            if (length > 0) {
                var _a = selectedOption[length - 1], label = _a.label, value = _a.value, level = _a.level;
                this.selectedOption = {
                    label: label,
                    value: value,
                    level: level,
                    mergeName: selectedOption.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) { return o.label; })).join(this.separator),
                };
            }
        };
        /**
         * @return {?}
         */
        AddressSelectService.prototype.updateListOfFilteredOption = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var filterOptionList = [];
            if (this.currentLevel === 1)
                filterOptionList = __spread(this.listOfProvinceOptions);
            if (this.currentLevel === 2)
                filterOptionList = __spread(this.listOfCityOptions);
            if (this.currentLevel === 3)
                filterOptionList = __spread(this.listOfDistinctOptions);
            if (this.currentLevel === 4)
                filterOptionList = __spread(this.listOfStreetOptions);
            /** @type {?} */
            var listOfFilteredOption = new AddrFilterOptionPipe().transform(filterOptionList, this.searchValue, this.filterOption, this.serverSearch);
            this.listOfFilteredOption = __spread(listOfFilteredOption);
            this.isShowNotFound = !this.listOfFilteredOption.length;
        };
        /**
         * @return {?}
         */
        AddressSelectService.prototype.clearInput = /**
         * @return {?}
         */
        function () {
            this.clearInput$.next();
        };
        /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        AddressSelectService.prototype.updateListOfSelectedValue = /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        function (value, emit) {
            this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
            this.updateSelectedOption(!value.length);
            this.check();
        };
        /**
         * @param {?} option
         * @param {?} level
         * @return {?}
         */
        AddressSelectService.prototype.updateActivatedOption = /**
         * @param {?} option
         * @param {?} level
         * @return {?}
         */
        function (option, level) {
            this.listOfActivatedOption$.next(option);
            this.listOfActivatedOption[level] = option;
            if (this.isMaxLevel()) {
                this.updateListOfSelectedValue(__spread(this.listOfActivatedOption), true);
            }
        };
        /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        AddressSelectService.prototype.includesSeparators = /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        function (str, separators) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        /**
         * @return {?}
         */
        AddressSelectService.prototype.resetActivatedOptionIfNeeded = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var resetActivatedOption = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var listOfActivatedOption = _this.listOfFilteredOption.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item.value, _this.selectedOption[0]); }));
                _this.updateActivatedOption(listOfActivatedOption || null, _this.currentLevel);
            });
            if (this.listOfActivatedOption) {
                if (!this.listOfFilteredOption.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item.value, (/** @type {?} */ (_this.listOfActivatedOption[_this.currentLevel])).value); })) ||
                    !this.listOfActivatedOption.find((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.listOfActivatedOption[_this.currentLevel])).value); }))) {
                    resetActivatedOption();
                }
            }
            else {
                resetActivatedOption();
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AddressSelectService.prototype.updateSearchValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.searchValueRaw$.next(value);
        };
        /**
         * @param {?} code
         * @return {?}
         */
        AddressSelectService.prototype.updateSelectedOptionByCode = /**
         * @param {?} code
         * @return {?}
         */
        function (code) {
            var _this = this;
            this.addrQuerySrv.getOptionByCode(code).subscribe((/**
             * @param {?} json
             * @return {?}
             */
            function (json) {
                if (json.code === code) {
                    _this.selectedOption = {
                        label: json.name,
                        value: json.code,
                        level: json.level,
                        mergeName: json.mergerName,
                    };
                    _this.check();
                }
            }));
        };
        /**
         * @param {?} option
         * @return {?}
         */
        AddressSelectService.prototype.removeValueFormSelected = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            var _this = this;
            if (this.disabled || option.disabled) {
                return;
            }
            /** @type {?} */
            var selectedOption = this.listOfActivatedOption.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !_this.compareWith(item, option.value); }));
            this.updateListOfSelectedValue(selectedOption, true);
            this.clearInput();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AddressSelectService.prototype.setOpenState = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.openRaw$.next(value);
            // this.open = value;
        };
        /**
         * @return {?}
         */
        AddressSelectService.prototype.check = /**
         * @return {?}
         */
        function () {
            this.checkRaw$.next();
        };
        AddressSelectService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AddressSelectService.ctorParameters = function () { return [
            { type: AddressQueryService }
        ]; };
        return AddressSelectService;
    }());
    if (false) {
        /** @type {?} */
        AddressSelectService.prototype.autoClearSearchValue;
        /** @type {?} */
        AddressSelectService.prototype.serverSearch;
        /** @type {?} */
        AddressSelectService.prototype.filterOption;
        /** @type {?} */
        AddressSelectService.prototype.disabled;
        /** @type {?} */
        AddressSelectService.prototype.levelLabels;
        /** @type {?} */
        AddressSelectService.prototype.currentLevel;
        /** @type {?} */
        AddressSelectService.prototype.maxLevel;
        /** @type {?} */
        AddressSelectService.prototype.separator;
        /**
         * @type {?}
         * @private
         */
        AddressSelectService.prototype.listOfSelectedValueWithEmit$;
        /**
         * @type {?}
         * @private
         */
        AddressSelectService.prototype.searchValueRaw$;
        /**
         * @type {?}
         * @private
         */
        AddressSelectService.prototype.listOfFilteredOption;
        /**
         * @type {?}
         * @private
         */
        AddressSelectService.prototype.openRaw$;
        /**
         * @type {?}
         * @private
         */
        AddressSelectService.prototype.checkRaw$;
        /** @type {?} */
        AddressSelectService.prototype.clearInput$;
        /** @type {?} */
        AddressSelectService.prototype.searchValue;
        /** @type {?} */
        AddressSelectService.prototype.isShowNotFound;
        /** @type {?} */
        AddressSelectService.prototype.open$;
        /** @type {?} */
        AddressSelectService.prototype.listOfActivatedOption;
        /** @type {?} */
        AddressSelectService.prototype.listOfActivatedOption$;
        /** @type {?} */
        AddressSelectService.prototype.selectedOption;
        /** @type {?} */
        AddressSelectService.prototype.modelChange$;
        /** @type {?} */
        AddressSelectService.prototype.searchValue$;
        /** @type {?} */
        AddressSelectService.prototype.listOfProvinceOptions;
        /** @type {?} */
        AddressSelectService.prototype.listOfCityOptions;
        /** @type {?} */
        AddressSelectService.prototype.listOfDistinctOptions;
        /** @type {?} */
        AddressSelectService.prototype.listOfStreetOptions;
        /** @type {?} */
        AddressSelectService.prototype.check$;
        /** @type {?} */
        AddressSelectService.prototype.compareWith;
        /**
         * @type {?}
         * @private
         */
        AddressSelectService.prototype.addrQuerySrv;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddrSelectTopControlComponent = /** @class */ (function () {
        function AddrSelectTopControlComponent(addrSelectService, cdr, noAnimation) {
            this.addrSelectService = addrSelectService;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.isComposing = false;
            this.destroy$ = new rxjs.Subject();
            this.showSearch = false;
            this.open = false;
            this.allowClear = false;
            this.showArrow = true;
            this.loading = false;
        }
        /**
         * @param {?} e
         * @return {?}
         */
        AddrSelectTopControlComponent.prototype.onClearSelection = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            this.addrSelectService.updateListOfSelectedValue([], true);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AddrSelectTopControlComponent.prototype.setInputValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 */
            if (this.inputElement && !value) {
                this.inputElement.nativeElement.value = value;
            }
            this.inputValue = value;
            this.addrSelectService.updateSearchValue(value);
        };
        Object.defineProperty(AddrSelectTopControlComponent.prototype, "placeHolderDisplay", {
            get: /**
             * @return {?}
             */
            function () {
                return this.inputValue || this.isComposing || this.addrSelectService.listOfActivatedOption.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddrSelectTopControlComponent.prototype, "selectedValueStyle", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var showSelectedValue = false;
                /** @type {?} */
                var opacity = 1;
                if (!this.showSearch) {
                    showSelectedValue = true;
                }
                else {
                    if (this.open) {
                        showSelectedValue = !(this.inputValue || this.isComposing);
                        if (showSelectedValue) {
                            opacity = 0.4;
                        }
                    }
                    else {
                        showSelectedValue = true;
                    }
                }
                return {
                    display: showSelectedValue ? 'block' : 'none',
                    opacity: "" + opacity,
                };
            },
            enumerable: true,
            configurable: true
        });
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        AddrSelectTopControlComponent.prototype.trackValue = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return option.value;
        };
        /**
         * @param {?} option
         * @param {?} e
         * @return {?}
         */
        AddrSelectTopControlComponent.prototype.removeSelectedValue = /**
         * @param {?} option
         * @param {?} e
         * @return {?}
         */
        function (option, e) {
            this.addrSelectService.removeValueFormSelected(option);
            e.stopPropagation();
        };
        /**
         * @return {?}
         */
        AddrSelectTopControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.addrSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} open
             * @return {?}
             */
            function (open) {
                if (_this.inputElement && open) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.inputElement.nativeElement.focus(); }));
                }
            }));
            this.addrSelectService.clearInput$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.setInputValue('');
            }));
            this.addrSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        AddrSelectTopControlComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        AddrSelectTopControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[p-select-top-control]',
                        template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"addrSelectService.disabled\"\n  />\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"placeHolder\" nz-select-unselectable [style.display]=\"placeHolderDisplay\" class=\"ant-select-selection__placeholder\">\n    {{ placeHolder }}\n  </div>\n  <!--selected label-->\n  <div\n    *ngIf=\"addrSelectService.selectedOption?.value\"\n    class=\"ant-select-selection-selected-value\"\n    [attr.title]=\"addrSelectService.selectedOption?.mergeName\"\n    [ngStyle]=\"selectedValueStyle\"\n  >\n    <ng-container>{{ addrSelectService.selectedOption?.mergeName }}</ng-container>\n  </div>\n  <!--show search-->\n  <div *ngIf=\"showSearch\" class=\"ant-select-search ant-select-search--inline\" [style.display]=\"open ? 'block' : 'none'\">\n    <div class=\"ant-select-search__field__wrap\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      <span class=\"ant-select-search__field__mirror\">{{ inputValue }}&nbsp;</span>\n    </div>\n  </div>\n</div>\n<span\n  *ngIf=\"allowClear && addrSelectService.selectedOption?.value\"\n  class=\"ant-select-selection__clear\"\n  nz-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\"\n>\n  <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!clearIcon; else clearIcon\" class=\"ant-select-close-icon\"></i>\n</span>\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"showArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"loading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!suffixIcon; else suffixIcon\"></i>\n  </ng-template>\n</span>\n",
                        exportAs: 'nzSelectTopControl',
                        preserveWhitespaces: false,
                        animations: [core$1.zoomMotion],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        AddrSelectTopControlComponent.ctorParameters = function () { return [
            { type: AddressSelectService },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        AddrSelectTopControlComponent.propDecorators = {
            inputElement: [{ type: core.ViewChild, args: ['inputElement', { static: false },] }],
            showSearch: [{ type: core.Input }],
            placeHolder: [{ type: core.Input }],
            open: [{ type: core.Input }],
            allowClear: [{ type: core.Input }],
            showArrow: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            suffixIcon: [{ type: core.Input }],
            clearIcon: [{ type: core.Input }],
            removeIcon: [{ type: core.Input }]
        };
        return AddrSelectTopControlComponent;
    }());
    if (false) {
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.inputValue;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.isComposing;
        /**
         * @type {?}
         * @private
         */
        AddrSelectTopControlComponent.prototype.destroy$;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.inputElement;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.showSearch;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.placeHolder;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.open;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.allowClear;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.showArrow;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.loading;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.suffixIcon;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.clearIcon;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.removeIcon;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.addrSelectService;
        /**
         * @type {?}
         * @private
         */
        AddrSelectTopControlComponent.prototype.cdr;
        /** @type {?} */
        AddrSelectTopControlComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressSelectComponent = /** @class */ (function () {
        function AddressSelectComponent(renderer, addrSelectService, cdr, focusMonitor, platform, elementRef, noAnimation) {
            this.renderer = renderer;
            this.addrSelectService = addrSelectService;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.platform = platform;
            this.noAnimation = noAnimation;
            this._open = false;
            this.dropDownPosition = 'bottom';
            this._disabled = false;
            this._autoFocus = false;
            this.isInit = false;
            this.destroy$ = new rxjs.Subject();
            // tslint:disable-next-line: jsdoc-format
            /**
             * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
             */
            // tslint:disable-next-line: no-output-on-prefix
            this.onSearch = new core.EventEmitter();
            this.scrollToBottom = new core.EventEmitter();
            this.openChange = new core.EventEmitter();
            this.pBlur = new core.EventEmitter();
            this.pFocus = new core.EventEmitter();
            this.size = 'default';
            this.level = 3;
            this.dropdownMatchSelectWidth = false;
            this.allowClear = true;
            this.showSearch = false;
            this.loading = false;
            this.showArrow = true;
            this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            renderer.addClass(elementRef.nativeElement, 'ant-select');
        }
        Object.defineProperty(AddressSelectComponent.prototype, "autoClearSearchValue", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.addrSelectService.autoClearSearchValue = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressSelectComponent.prototype, "serverSearch", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.addrSelectService.serverSearch = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressSelectComponent.prototype, "filterOption", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.addrSelectService.filterOption = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressSelectComponent.prototype, "separator", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.addrSelectService.separator = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressSelectComponent.prototype, "compareWith", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.addrSelectService.compareWith = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressSelectComponent.prototype, "autoFocus", {
            get: /**
             * @return {?}
             */
            function () {
                return this._autoFocus;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._autoFocus = core$1.toBoolean(value);
                this.updateAutoFocus();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressSelectComponent.prototype, "open", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._open = value;
                this.addrSelectService.setOpenState(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressSelectComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._disabled = core$1.toBoolean(value);
                this.addrSelectService.disabled = this._disabled;
                this.addrSelectService.check();
                if (this.disabled && this.isInit) {
                    this.closeDropDown();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.updateAutoFocus = /**
         * @return {?}
         */
        function () {
            if (this.panelTopControlComponent.inputElement) {
                if (this.autoFocus) {
                    this.renderer.setAttribute(this.panelTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
                }
                else {
                    this.renderer.removeAttribute(this.panelTopControlComponent.inputElement.nativeElement, 'autofocus');
                }
            }
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            if (this.panelTopControlComponent.inputElement) {
                this.focusMonitor.focusVia(this.panelTopControlComponent.inputElement, 'keyboard');
                this.pFocus.emit();
            }
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.blur = /**
         * @return {?}
         */
        function () {
            if (this.panelTopControlComponent.inputElement) {
                this.panelTopControlComponent.inputElement.nativeElement.blur();
                this.pBlur.emit();
            }
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.toggleDropDown = /**
         * @return {?}
         */
        function () {
            if (!this.disabled) {
                this.addrSelectService.setOpenState(!this.open);
            }
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.closeDropDown = /**
         * @return {?}
         */
        function () {
            this.addrSelectService.setOpenState(false);
        };
        /**
         * @param {?} position
         * @return {?}
         */
        AddressSelectComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
         * @return {?}
         */
        function () {
            if (this.platform.isBrowser) {
                /** @type {?} */
                var triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.triggerWidth = this.dropdownMatchSelectWidth ? triggerWidth : triggerWidth + 75;
            }
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            }));
        };
        /** update ngModel -> update selectedOption */
        /**
         * update ngModel -> update selectedOption
         * @param {?} value
         * @return {?}
         */
        AddressSelectComponent.prototype.writeValue = /**
         * update ngModel -> update selectedOption
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
            /** @type {?} */
            var listValue = [];
            if (core$1.isNotNil(value)) {
                if (Array.isArray(value)) {
                    listValue = value;
                }
                else {
                    listValue = [value];
                }
            }
            this.addrSelectService.updateListOfSelectedValue(listValue, false);
            if (value) {
                this.addrSelectService.updateSelectedOptionByCode(value);
            }
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        AddressSelectComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        AddressSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        AddressSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // 获取一级地址数据
            this.addrSelectService.getListByCode('', 0);
            this.addrSelectService.searchValue$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.onSearch.emit(data);
                _this.updateCdkConnectedOverlayPositions();
            }));
            this.addrSelectService.modelChange$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} modelValue
             * @return {?}
             */
            function (modelValue) {
                if (_this.value !== modelValue) {
                    _this.value = modelValue;
                    _this.onChange(_this.value);
                    _this.updateCdkConnectedOverlayPositions();
                    // this.cdr.detectChanges();
                }
            }));
            this.addrSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (_this.open !== value) {
                    _this.openChange.emit(value);
                }
                if (value) {
                    _this.focus();
                    _this.updateCdkConnectedOverlayStatus();
                }
                else {
                    _this.blur();
                    _this.onTouched();
                }
                _this.open = value;
                _this.addrSelectService.clearInput();
            }));
            this.addrSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.updateCdkConnectedOverlayStatus();
            this.isInit = true;
        };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        AddressSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        AddressSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-address-select',
                        exportAs: 'pAddressSelect',
                        preserveWhitespaces: false,
                        providers: [
                            AddressSelectService,
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return AddressSelectComponent; })),
                                multi: true,
                            },
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        animations: [core$1.slideMotion],
                        template: "<div\n  p-select-top-control\n  cdkOverlayOrigin\n  tabindex=\"0\"\n  class=\"ant-select-selection ant-select-selection--single\"\n  [open]=\"_open\"\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n  [placeHolder]=\"placeHolder\"\n  [allowClear]=\"allowClear\"\n  [showArrow]=\"showArrow\"\n  [loading]=\"loading\"\n  [suffixIcon]=\"suffixIcon\"\n  [clearIcon]=\"clearIcon\"\n  [removeIcon]=\"removeIcon\"\n  [showSearch]=\"showSearch\"\n></div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"_open\"\n>\n  <div\n    class=\"ant-select-dropdown ant-select-dropdown--single\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [nzClassListAdd]=\"[dropdownClassName]\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngStyle]=\"dropdownStyle\"\n  >\n    <div\n      p-option-container\n      style=\"overflow: auto;transform: translateZ(0px);\"\n      [level]=\"level\"\n      [menuItemSelectedIcon]=\"menuItemSelectedIcon\"\n      [notFoundContent]=\"notFoundContent\"\n      (scrollToBottom)=\"scrollToBottom.emit()\"\n    ></div>\n  </div>\n</ng-template>\n",
                        host: {
                            '[class.ant-select-lg]': 'size==="large"',
                            '[class.ant-select-sm]': 'size==="small"',
                            '[class.ant-select-enabled]': '!disabled',
                            '[class.ant-select-no-arrow]': '!showArrow',
                            '[class.ant-select-disabled]': 'disabled',
                            '[class.ant-select-allow-clear]': 'allowClear',
                            '[class.ant-select-open]': 'open',
                            '(click)': 'toggleDropDown()',
                        },
                        styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        AddressSelectComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: AddressSelectService },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor },
            { type: platform.Platform },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        AddressSelectComponent.propDecorators = {
            cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin, { static: false },] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
            panelTopControlComponent: [{ type: core.ViewChild, args: [AddrSelectTopControlComponent, { static: true },] }],
            onSearch: [{ type: core.Output }],
            scrollToBottom: [{ type: core.Output }],
            openChange: [{ type: core.Output }],
            pBlur: [{ type: core.Output }],
            pFocus: [{ type: core.Output }],
            size: [{ type: core.Input }],
            level: [{ type: core.Input }],
            dropdownClassName: [{ type: core.Input }],
            dropdownMatchSelectWidth: [{ type: core.Input }],
            dropdownStyle: [{ type: core.Input }],
            notFoundContent: [{ type: core.Input }],
            allowClear: [{ type: core.Input }],
            showSearch: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            placeHolder: [{ type: core.Input }],
            suffixIcon: [{ type: core.Input }],
            clearIcon: [{ type: core.Input }],
            removeIcon: [{ type: core.Input }],
            menuItemSelectedIcon: [{ type: core.Input }],
            showArrow: [{ type: core.Input }],
            autoClearSearchValue: [{ type: core.Input }],
            serverSearch: [{ type: core.Input }],
            filterOption: [{ type: core.Input }],
            separator: [{ type: core.Input }],
            compareWith: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            open: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], AddressSelectComponent.prototype, "allowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], AddressSelectComponent.prototype, "showSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], AddressSelectComponent.prototype, "loading", void 0);
        return AddressSelectComponent;
    }());
    if (false) {
        /** @type {?} */
        AddressSelectComponent.prototype._open;
        /** @type {?} */
        AddressSelectComponent.prototype.value;
        /** @type {?} */
        AddressSelectComponent.prototype.dropDownPosition;
        /** @type {?} */
        AddressSelectComponent.prototype.triggerWidth;
        /**
         * @type {?}
         * @private
         */
        AddressSelectComponent.prototype._disabled;
        /**
         * @type {?}
         * @private
         */
        AddressSelectComponent.prototype._autoFocus;
        /**
         * @type {?}
         * @private
         */
        AddressSelectComponent.prototype.isInit;
        /**
         * @type {?}
         * @private
         */
        AddressSelectComponent.prototype.destroy$;
        /** @type {?} */
        AddressSelectComponent.prototype.cdkOverlayOrigin;
        /** @type {?} */
        AddressSelectComponent.prototype.cdkConnectedOverlay;
        /** @type {?} */
        AddressSelectComponent.prototype.panelTopControlComponent;
        /**
         * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
         * @type {?}
         */
        AddressSelectComponent.prototype.onSearch;
        /** @type {?} */
        AddressSelectComponent.prototype.scrollToBottom;
        /** @type {?} */
        AddressSelectComponent.prototype.openChange;
        /** @type {?} */
        AddressSelectComponent.prototype.pBlur;
        /** @type {?} */
        AddressSelectComponent.prototype.pFocus;
        /** @type {?} */
        AddressSelectComponent.prototype.size;
        /** @type {?} */
        AddressSelectComponent.prototype.level;
        /** @type {?} */
        AddressSelectComponent.prototype.dropdownClassName;
        /** @type {?} */
        AddressSelectComponent.prototype.dropdownMatchSelectWidth;
        /** @type {?} */
        AddressSelectComponent.prototype.dropdownStyle;
        /** @type {?} */
        AddressSelectComponent.prototype.notFoundContent;
        /** @type {?} */
        AddressSelectComponent.prototype.allowClear;
        /** @type {?} */
        AddressSelectComponent.prototype.showSearch;
        /** @type {?} */
        AddressSelectComponent.prototype.loading;
        /** @type {?} */
        AddressSelectComponent.prototype.placeHolder;
        /** @type {?} */
        AddressSelectComponent.prototype.suffixIcon;
        /** @type {?} */
        AddressSelectComponent.prototype.clearIcon;
        /** @type {?} */
        AddressSelectComponent.prototype.removeIcon;
        /** @type {?} */
        AddressSelectComponent.prototype.menuItemSelectedIcon;
        /** @type {?} */
        AddressSelectComponent.prototype.showArrow;
        /** @type {?} */
        AddressSelectComponent.prototype.onChange;
        /** @type {?} */
        AddressSelectComponent.prototype.onTouched;
        /**
         * @type {?}
         * @private
         */
        AddressSelectComponent.prototype.renderer;
        /** @type {?} */
        AddressSelectComponent.prototype.addrSelectService;
        /**
         * @type {?}
         * @private
         */
        AddressSelectComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        AddressSelectComponent.prototype.focusMonitor;
        /**
         * @type {?}
         * @private
         */
        AddressSelectComponent.prototype.platform;
        /** @type {?} */
        AddressSelectComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddrOptionContainerComponent = /** @class */ (function () {
        function AddrOptionContainerComponent(addrSrv, cdr) {
            this.addrSrv = addrSrv;
            this.cdr = cdr;
            this.destroy$ = new rxjs.Subject();
            this.scrollToBottom = new core.EventEmitter();
        }
        Object.defineProperty(AddrOptionContainerComponent.prototype, "level", {
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                this.addrSrv.levelLabels = new AddrLevelFilterPipe().transform(v);
                this.addrSrv.maxLevel = v;
                this.addrSrv.currentLevel = 1;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} option
         * @return {?}
         */
        AddrOptionContainerComponent.prototype.clickOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            this.addrSrv.clickOption(option);
        };
        /**
         * @param {?} tab
         * @param {?} index
         * @return {?}
         */
        AddrOptionContainerComponent.prototype.toggleTabs = /**
         * @param {?} tab
         * @param {?} index
         * @return {?}
         */
        function (tab, index) {
            if (tab.checked)
                return;
            this.addrSrv.toggleTab(index);
            this.addrSrv.updateListOfFilteredOption();
        };
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        AddrOptionContainerComponent.prototype.trackLabel = /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return option.label;
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        AddrOptionContainerComponent.prototype.trackValue = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return option.value;
        };
        /**
         * @return {?}
         */
        AddrOptionContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.addrSrv.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        AddrOptionContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        AddrOptionContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[p-option-container]',
                        exportAs: 'pOptionContainer',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        template: "<div class=\"p-address-select-container\">\n  <div class=\"ant-tabs ant-tabs-card\">\n    <div class=\"ant-tabs-bar ant-tabs-card-bar ant-tabs-top-bar ant-tabs-default-bar\">\n      <span\n        class=\"ant-tabs-tab\"\n        [class.ant-tabs-tab-active]=\"item.checked\"\n        *ngFor=\"let item of addrSrv.levelLabels; let i = index\"\n        (click)=\"toggleTabs(item, i)\"\n        >{{ item.label }}</span\n      >\n    </div>\n  </div>\n  <!-- province -->\n  <ul\n    #provinceUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"0\"\n    [hidden]=\"addrSrv.levelLabels[0] && !addrSrv.levelLabels[0]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSrv.isShowNotFound && addrSrv.currentLevel === 1\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"addrSrv.listOfActivatedOption | pAddrCheckedFitler: 1:option\"\n      *ngFor=\"\n        let option of addrSrv.listOfProvinceOptions | addrFilterOption: addrSrv.searchValue:addrSrv.filterOption:addrSrv.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i\n        nz-icon\n        nzType=\"check\"\n        class=\"ant-select-selected-icon\"\n        *ngIf=\"(addrSrv.listOfActivatedOption | pAddrCheckedFitler: 1:option) && !menuItemSelectedIcon\"\n      ></i>\n    </li>\n  </ul>\n  <!-- city -->\n  <ul\n    #cityUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"1\"\n    [hidden]=\"addrSrv.levelLabels[1] && !addrSrv.levelLabels[1]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSrv.isShowNotFound && addrSrv.currentLevel === 2\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      *ngFor=\"\n        let option of addrSrv.listOfCityOptions | addrFilterOption: addrSrv.searchValue:addrSrv.filterOption:addrSrv.serverSearch;\n        trackBy: trackValue\n      \"\n      [class.ant-select-dropdown-menu-item-selected]=\"addrSrv.listOfActivatedOption | pAddrCheckedFitler: 2:option\"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i\n        nz-icon\n        nzType=\"check\"\n        class=\"ant-select-selected-icon\"\n        *ngIf=\"(addrSrv.listOfActivatedOption | pAddrCheckedFitler: 2:option) && !menuItemSelectedIcon\"\n      ></i>\n    </li>\n  </ul>\n  <!-- distinct -->\n  <ul\n    #distinctUl\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"2\"\n    [hidden]=\"addrSrv.levelLabels[2] && !addrSrv.levelLabels[2]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSrv.isShowNotFound && addrSrv.currentLevel === 3\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"addrSrv.listOfActivatedOption | pAddrCheckedFitler: 3:option\"\n      *ngFor=\"\n        let option of addrSrv.listOfDistinctOptions | addrFilterOption: addrSrv.searchValue:addrSrv.filterOption:addrSrv.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i\n        nz-icon\n        nzType=\"check\"\n        class=\"ant-select-selected-icon\"\n        *ngIf=\"(addrSrv.listOfActivatedOption | pAddrCheckedFitler: 3:option) && !menuItemSelectedIcon\"\n      ></i>\n    </li>\n  </ul>\n  <!-- street -->\n  <ul\n    class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n    role=\"menu\"\n    tabindex=\"3\"\n    [hidden]=\"addrSrv.levelLabels[3] && !addrSrv.levelLabels[3]['checked']\"\n  >\n    <li\n      *ngIf=\"addrSrv.isShowNotFound && addrSrv.currentLevel === 4\"\n      nz-select-unselectable\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n    >\n      <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n    </li>\n    <li\n      class=\"item ant-select-dropdown-menu-item\"\n      [class.ant-select-dropdown-menu-item-selected]=\"addrSrv.listOfActivatedOption | pAddrCheckedFitler: 4:option\"\n      *ngFor=\"\n        let option of addrSrv.listOfStreetOptions | addrFilterOption: addrSrv.searchValue:addrSrv.filterOption:addrSrv.serverSearch;\n        trackBy: trackValue\n      \"\n      (click)=\"clickOption(option)\"\n    >\n      {{ option.label }}\n      <i\n        nz-icon\n        nzType=\"check\"\n        class=\"ant-select-selected-icon\"\n        *ngIf=\"(addrSrv.listOfActivatedOption | pAddrCheckedFitler: 4:option) && !menuItemSelectedIcon\"\n      ></i>\n    </li>\n  </ul>\n</div>\n",
                        host: {
                            '[attr.unselectable]': '"unselectable"',
                            '[style.user-select]': '"none"',
                            '(mousedown)': '$event.preventDefault()',
                        },
                        styles: [".p-address-select-container .ant-tabs-bar{margin-bottom:10px;padding-left:10px;background:#e8e8e8;border-bottom:none!important}.p-address-select-container .ant-tabs-tab{display:inline-block;height:100%;background:0 0!important;cursor:pointer}.p-address-select-container .ant-tabs-tab-active{background:#fff!important}.p-address-select-container .ant-select-dropdown-menu-root{padding:0 10px 5px}.p-address-select-container .item{display:inline-block;width:120px;padding:5px 10px}"]
                    }] }
        ];
        /** @nocollapse */
        AddrOptionContainerComponent.ctorParameters = function () { return [
            { type: AddressSelectService },
            { type: core.ChangeDetectorRef }
        ]; };
        AddrOptionContainerComponent.propDecorators = {
            notFoundContent: [{ type: core.Input }],
            menuItemSelectedIcon: [{ type: core.Input }],
            scrollToBottom: [{ type: core.Output }],
            level: [{ type: core.Input }]
        };
        return AddrOptionContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AddrOptionContainerComponent.prototype.destroy$;
        /** @type {?} */
        AddrOptionContainerComponent.prototype.notFoundContent;
        /** @type {?} */
        AddrOptionContainerComponent.prototype.menuItemSelectedIcon;
        /** @type {?} */
        AddrOptionContainerComponent.prototype.scrollToBottom;
        /** @type {?} */
        AddrOptionContainerComponent.prototype.addrSrv;
        /**
         * @type {?}
         * @private
         */
        AddrOptionContainerComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddressSelectModule = /** @class */ (function () {
        function AddressSelectModule() {
        }
        AddressSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            AddressSelectComponent,
                            AddrSelectTopControlComponent,
                            AddrFilterOptionPipe,
                            AddrLevelFilterPipe,
                            AddrCheckedFilterPipe,
                            AddrOptionContainerComponent,
                        ],
                        imports: [
                            overlay.OverlayModule,
                            platform.PlatformModule,
                            forms.FormsModule,
                            common.CommonModule,
                            empty.NzEmptyModule,
                            icon.NzIconModule,
                            core$1.NzAddOnModule,
                            core$1.NzNoAnimationModule,
                            core$1.NzOverlayModule,
                        ],
                        exports: [
                            AddressSelectComponent,
                            AddrSelectTopControlComponent,
                            AddrFilterOptionPipe,
                            AddrLevelFilterPipe,
                            AddrCheckedFilterPipe,
                            AddrOptionContainerComponent,
                        ],
                    },] }
        ];
        return AddressSelectModule;
    }());

    exports.AddrCheckedFilterPipe = AddrCheckedFilterPipe;
    exports.AddrFilterOptionPipe = AddrFilterOptionPipe;
    exports.AddrLevelFilterPipe = AddrLevelFilterPipe;
    exports.AddrOptionContainerComponent = AddrOptionContainerComponent;
    exports.AddrSelectTopControlComponent = AddrSelectTopControlComponent;
    exports.AddressQueryService = AddressQueryService;
    exports.AddressSelectComponent = AddressSelectComponent;
    exports.AddressSelectModule = AddressSelectModule;
    exports.AddressSelectService = AddressSelectService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=address-select.umd.js.map
