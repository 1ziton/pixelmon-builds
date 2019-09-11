/**
 * @Based on pixelmon(cipchk@qq.com) v0.1.7
 * (c) 2019 developer(developer@1ziton.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/keycodes'), require('@angular/common'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/dropdown-panel', ['exports', '@angular/cdk/a11y', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/cdk/keycodes', '@angular/common', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu['dropdown-panel'] = {}), global.ng.cdk.a11y, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.core, global.ng.forms, global.core$1, global.rxjs, global.rxjs.operators, global.ng.cdk.keycodes, global.ng.common, global.empty, global.icon));
}(this, function (exports, a11y, overlay, platform, core, forms, core$1, rxjs, operators, keycodes, common, empty, icon) { 'use strict';

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
    var PanelFilterOptionPipe = /** @class */ (function () {
        function PanelFilterOptionPipe() {
        }
        /**
         * @param {?} options
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        PanelFilterOptionPipe.prototype.transform = /**
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
                return ((/** @type {?} */ (options))).filter((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return filterOption(searchValue, o); }));
            }
        };
        PanelFilterOptionPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'pFilterOption' },] }
        ];
        return PanelFilterOptionPipe;
    }());
    /**
     * @param {?} searchValue
     * @param {?} option
     * @return {?}
     */
    function defaultFilterOption(searchValue, option) {
        if (option && option.label) {
            return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownPanelService = /** @class */ (function () {
        function DropdownPanelService() {
            var _this = this;
            // Input params
            this.autoClearSearchValue = true;
            this.serverSearch = false;
            this.filterOption = defaultFilterOption;
            this.mode = 'default';
            this.maxMultipleCount = Infinity;
            this.disabled = false;
            // selectedValueChanged should emit ngModelChange or not
            // tslint:disable-next-line:no-any
            this.listOfSelectedValueWithEmit$ = new rxjs.BehaviorSubject({
                value: [],
                emit: false,
            });
            // Data Change
            this.mapOfTemplateOption$ = new rxjs.BehaviorSubject({
                listOfPOption: [],
            });
            // searchValue Change
            this.searchValueRaw$ = new rxjs.BehaviorSubject('');
            this.listOfFilteredOption = [];
            this.openRaw$ = new rxjs.Subject();
            this.checkRaw$ = new rxjs.Subject();
            this.open = false;
            this.clearInput$ = new rxjs.Subject();
            this.searchValue = '';
            this.isShowNotFound = false;
            // open
            this.open$ = this.openRaw$.pipe(operators.distinctUntilChanged());
            this.activatedOption$ = new rxjs.ReplaySubject(1);
            this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.value; })));
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
                /** @type {?} */
                var modelValue = null;
                if (_this.isSingleMode) {
                    if (selectedList.length) {
                        modelValue = selectedList[0];
                    }
                }
                else {
                    modelValue = selectedList;
                }
                return modelValue;
            })));
            this.searchValue$ = this.searchValueRaw$.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.share(), operators.tap((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.searchValue = value;
                if (value) {
                    _this.updateActivatedOption(_this.listOfFilteredOption[0]);
                }
                _this.updateListOfFilteredOption();
            })));
            // tslint:disable-next-line:no-any
            this.listOfSelectedValue = [];
            // data
            this.listOfPOption = [];
            this.listOfCachedSelectedOption = [];
            // selected value or Data change
            this.valueOrOption$ = rxjs.combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(operators.tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.listOfSelectedValue = data[0];
                _this.listOfPOption = data[1].listOfPOption;
                // console.log(JSON.stringify(this.listOfPOption));
                _this.updateListOfFilteredOption();
                _this.resetActivatedOptionIfNeeded();
                _this.updateListOfCachedOption();
            })), operators.share());
            this.check$ = rxjs.merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(operators.share());
            // tslint:disable-next-line:no-any
            this.compareWith = (/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            function (o1, o2) { return o1 === o2; });
        }
        /**
         * @param {?} option
         * @return {?}
         */
        DropdownPanelService.prototype.clickOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ */
            if (!option.disabled) {
                this.updateActivatedOption(option);
                this.listOfPOption.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    item.checked = false;
                }));
                option.checked = true;
                /** @type {?} */
                var listOfSelectedValue = __spread(this.listOfSelectedValue);
                if (!this.compareWith(listOfSelectedValue[0], option.value)) {
                    listOfSelectedValue = [option.value];
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                if (this.isSingleMode) {
                    this.setOpenState(false);
                }
                else if (this.autoClearSearchValue) {
                    this.clearInput();
                }
            }
        };
        /**
         * @return {?}
         */
        DropdownPanelService.prototype.updateListOfCachedOption = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var selectedOption = this.listOfPOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return _this.compareWith(o.value, _this.listOfSelectedValue[0]); }));
            if (!core$1.isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        };
        /**
         * @return {?}
         */
        DropdownPanelService.prototype.updateListOfFilteredOption = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var listOfFilteredOption = new PanelFilterOptionPipe().transform(this.listOfPOption, this.searchValue, this.filterOption, this.serverSearch);
            this.listOfFilteredOption = __spread(listOfFilteredOption);
            this.isShowNotFound = !this.listOfFilteredOption.length;
        };
        /**
         * @return {?}
         */
        DropdownPanelService.prototype.clearInput = /**
         * @return {?}
         */
        function () {
            this.clearInput$.next();
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        DropdownPanelService.prototype.updateListOfSelectedValue = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        function (value, emit) {
            this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
        };
        /**
         * @param {?} option
         * @return {?}
         */
        DropdownPanelService.prototype.updateActivatedOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            this.activatedOption$.next(option);
            this.activatedOption = option;
        };
        /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        DropdownPanelService.prototype.includesSeparators = /**
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
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        DropdownPanelService.prototype.splitBySeparators = /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        function (str, separators) {
            /** @type {?} */
            var reg = new RegExp("[" + separators.join() + "]");
            /** @type {?} */
            var array = ((/** @type {?} */ (str))).split(reg).filter((/**
             * @param {?} token
             * @return {?}
             */
            function (token) { return token; }));
            return Array.from(new Set(array));
        };
        /**
         * @return {?}
         */
        DropdownPanelService.prototype.resetActivatedOptionIfNeeded = /**
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
                var activatedOption = _this.listOfFilteredOption.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item.value, _this.listOfSelectedValue[0]); }));
                _this.updateActivatedOption(activatedOption || null);
            });
            if (this.activatedOption) {
                if (!this.listOfFilteredOption.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item.value, (/** @type {?} */ (_this.activatedOption)).value); })) ||
                    !this.listOfSelectedValue.find((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.activatedOption)).value); }))) {
                    resetActivatedOption();
                }
            }
            else {
                resetActivatedOption();
            }
        };
        /**
         * @param {?} listOfPOption
         * @return {?}
         */
        DropdownPanelService.prototype.updateTemplateOption = /**
         * @param {?} listOfPOption
         * @return {?}
         */
        function (listOfPOption) {
            this.mapOfTemplateOption$.next({ listOfPOption: listOfPOption });
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DropdownPanelService.prototype.updateSearchValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.searchValueRaw$.next(value);
        };
        /**
         * @param {?} listOfLabel
         * @return {?}
         */
        DropdownPanelService.prototype.updateSelectedValueByLabelList = /**
         * @param {?} listOfLabel
         * @return {?}
         */
        function (listOfLabel) {
            var _this = this;
            /** @type {?} */
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            /** @type {?} */
            var listOfMatchOptionValue = this.listOfFilteredOption
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return listOfLabel.indexOf(item.label) !== -1; }))
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value; }))
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !core$1.isNotNil(_this.listOfSelectedValue.find((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return _this.compareWith(v, item); }))); }));
            /** @type {?} */
            var listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            function (label) { return _this.listOfFilteredOption.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.label; })).indexOf(label) === -1; }));
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        DropdownPanelService.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            if (this.disabled) {
                return;
            }
            /** @type {?} */
            var keyCode = e.keyCode;
            /** @type {?} */
            var listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !item.disabled; }));
            /** @type {?} */
            var activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item === _this.activatedOption; }));
            switch (keyCode) {
                case keycodes.UP_ARROW:
                    e.preventDefault();
                    /** @type {?} */
                    var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                    break;
                case keycodes.DOWN_ARROW:
                    e.preventDefault();
                    /** @type {?} */
                    var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.ENTER:
                    e.preventDefault();
                    if (this.open) {
                        if (this.activatedOption && !this.activatedOption.disabled) {
                            this.clickOption(this.activatedOption);
                        }
                    }
                    else {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.BACKSPACE:
                    break;
                case keycodes.SPACE:
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                        e.preventDefault();
                    }
                    break;
                case keycodes.TAB:
                    this.setOpenState(false);
                    break;
            }
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} option
         * @return {?}
         */
        DropdownPanelService.prototype.removeValueFormSelected = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            var _this = this;
            if (this.disabled || option.disabled) {
                return;
            }
            /** @type {?} */
            var listOfSelectedValue = this.listOfSelectedValue.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !_this.compareWith(item, option.value); }));
            this.updateListOfSelectedValue(listOfSelectedValue, true);
            this.clearInput();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DropdownPanelService.prototype.setOpenState = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.openRaw$.next(value);
            this.open = value;
        };
        /**
         * @return {?}
         */
        DropdownPanelService.prototype.check = /**
         * @return {?}
         */
        function () {
            this.checkRaw$.next();
        };
        Object.defineProperty(DropdownPanelService.prototype, "isSingleMode", {
            get: /**
             * @return {?}
             */
            function () {
                return this.mode === 'default';
            },
            enumerable: true,
            configurable: true
        });
        DropdownPanelService.decorators = [
            { type: core.Injectable }
        ];
        return DropdownPanelService;
    }());
    if (false) {
        /** @type {?} */
        DropdownPanelService.prototype.autoClearSearchValue;
        /** @type {?} */
        DropdownPanelService.prototype.serverSearch;
        /** @type {?} */
        DropdownPanelService.prototype.filterOption;
        /** @type {?} */
        DropdownPanelService.prototype.mode;
        /** @type {?} */
        DropdownPanelService.prototype.maxMultipleCount;
        /** @type {?} */
        DropdownPanelService.prototype.disabled;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelService.prototype.listOfSelectedValueWithEmit$;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelService.prototype.mapOfTemplateOption$;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelService.prototype.searchValueRaw$;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelService.prototype.listOfFilteredOption;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelService.prototype.openRaw$;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelService.prototype.checkRaw$;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelService.prototype.open;
        /** @type {?} */
        DropdownPanelService.prototype.clearInput$;
        /** @type {?} */
        DropdownPanelService.prototype.searchValue;
        /** @type {?} */
        DropdownPanelService.prototype.isShowNotFound;
        /** @type {?} */
        DropdownPanelService.prototype.open$;
        /** @type {?} */
        DropdownPanelService.prototype.activatedOption;
        /** @type {?} */
        DropdownPanelService.prototype.activatedOption$;
        /** @type {?} */
        DropdownPanelService.prototype.listOfSelectedValue$;
        /** @type {?} */
        DropdownPanelService.prototype.modelChange$;
        /** @type {?} */
        DropdownPanelService.prototype.searchValue$;
        /** @type {?} */
        DropdownPanelService.prototype.listOfSelectedValue;
        /** @type {?} */
        DropdownPanelService.prototype.listOfPOption;
        /** @type {?} */
        DropdownPanelService.prototype.listOfCachedSelectedOption;
        /** @type {?} */
        DropdownPanelService.prototype.valueOrOption$;
        /** @type {?} */
        DropdownPanelService.prototype.check$;
        /** @type {?} */
        DropdownPanelService.prototype.compareWith;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PanelSelectTopControlComponent = /** @class */ (function () {
        function PanelSelectTopControlComponent(dropPanelService, cdr, noAnimation) {
            this.dropPanelService = dropPanelService;
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
        PanelSelectTopControlComponent.prototype.onClearSelection = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            this.dropPanelService.updateListOfSelectedValue([], true);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        PanelSelectTopControlComponent.prototype.setInputValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 */
            if (this.inputElement && !value) {
                this.inputElement.nativeElement.value = value;
            }
            this.inputValue = value;
            this.dropPanelService.updateSearchValue(value);
        };
        Object.defineProperty(PanelSelectTopControlComponent.prototype, "placeHolderDisplay", {
            get: /**
             * @return {?}
             */
            function () {
                return this.inputValue || this.isComposing || this.dropPanelService.listOfSelectedValue.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelSelectTopControlComponent.prototype, "selectedValueStyle", {
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
        PanelSelectTopControlComponent.prototype.trackValue = 
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
        PanelSelectTopControlComponent.prototype.removeSelectedValue = /**
         * @param {?} option
         * @param {?} e
         * @return {?}
         */
        function (option, e) {
            this.dropPanelService.removeValueFormSelected(option);
            e.stopPropagation();
        };
        /**
         * @return {?}
         */
        PanelSelectTopControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dropPanelService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
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
            this.dropPanelService.clearInput$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.setInputValue('');
            }));
            this.dropPanelService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        PanelSelectTopControlComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        PanelSelectTopControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[p-panel-top-control]',
                        template: "\n<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"dropPanelService.disabled\"\n  />\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"placeHolder\" nz-select-unselectable [style.display]=\"placeHolderDisplay\" class=\"ant-select-selection__placeholder\">\n    {{ placeHolder }}\n  </div>\n\n  <!--single mode-->\n  <ng-container *ngIf=\"dropPanelService.isSingleMode\">\n    <!--selected label-->\n    <div\n      *ngIf=\"dropPanelService.listOfCachedSelectedOption.length && dropPanelService.listOfSelectedValue.length\"\n      class=\"ant-select-selection-selected-value\"\n      [attr.title]=\"dropPanelService.listOfCachedSelectedOption[0]?.label\"\n      [ngStyle]=\"selectedValueStyle\"\n    >\n      <ng-container>{{ dropPanelService.listOfCachedSelectedOption[0]?.label }}</ng-container>\n    </div>\n    <!--show search-->\n    <div *ngIf=\"showSearch\" class=\"ant-select-search ant-select-search--inline\" [style.display]=\"open ? 'block' : 'none'\">\n      <div class=\"ant-select-search__field__wrap\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n        <span class=\"ant-select-search__field__mirror\">{{ inputValue }}&nbsp;</span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<span\n  *ngIf=\"allowClear && dropPanelService.listOfSelectedValue.length\"\n  class=\"ant-select-selection__clear\"\n  nz-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\"\n>\n  <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!clearIcon; else clearIcon\" class=\"ant-select-close-icon\"></i>\n</span>\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"showArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"loading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!suffixIcon; else suffixIcon\"></i>\n  </ng-template>\n</span>\n",
                        exportAs: 'pPanelTopControl',
                        preserveWhitespaces: false,
                        animations: [core$1.zoomMotion],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        PanelSelectTopControlComponent.ctorParameters = function () { return [
            { type: DropdownPanelService },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        PanelSelectTopControlComponent.propDecorators = {
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
        return PanelSelectTopControlComponent;
    }());
    if (false) {
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.inputValue;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.isComposing;
        /**
         * @type {?}
         * @private
         */
        PanelSelectTopControlComponent.prototype.destroy$;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.inputElement;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.showSearch;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.placeHolder;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.open;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.allowClear;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.showArrow;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.loading;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.suffixIcon;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.clearIcon;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.removeIcon;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.dropPanelService;
        /**
         * @type {?}
         * @private
         */
        PanelSelectTopControlComponent.prototype.cdr;
        /** @type {?} */
        PanelSelectTopControlComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownPanelComponent = /** @class */ (function () {
        function DropdownPanelComponent(renderer, dropPanelService, cdr, focusMonitor, platform, elementRef, noAnimation) {
            this.renderer = renderer;
            this.dropPanelService = dropPanelService;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.platform = platform;
            this.noAnimation = noAnimation;
            this._open = false;
            this.dropDownPosition = 'bottom';
            this._data = [];
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
        Object.defineProperty(DropdownPanelComponent.prototype, "data", {
            set: /**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                var _this = this;
                this._data = d;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.dropPanelService.updateTemplateOption(_this._data);
                }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownPanelComponent.prototype, "autoClearSearchValue", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.dropPanelService.autoClearSearchValue = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownPanelComponent.prototype, "maxMultipleCount", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.dropPanelService.maxMultipleCount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownPanelComponent.prototype, "serverSearch", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.dropPanelService.serverSearch = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownPanelComponent.prototype, "mode", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.dropPanelService.mode = value;
                this.dropPanelService.check();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownPanelComponent.prototype, "filterOption", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.dropPanelService.filterOption = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownPanelComponent.prototype, "compareWith", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.dropPanelService.compareWith = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownPanelComponent.prototype, "autoFocus", {
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
        Object.defineProperty(DropdownPanelComponent.prototype, "open", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._open = value;
                this.dropPanelService.setOpenState(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownPanelComponent.prototype, "disabled", {
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
                this.dropPanelService.disabled = this._disabled;
                this.dropPanelService.check();
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
        DropdownPanelComponent.prototype.updateAutoFocus = /**
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
        DropdownPanelComponent.prototype.focus = /**
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
        DropdownPanelComponent.prototype.blur = /**
         * @return {?}
         */
        function () {
            if (this.panelTopControlComponent.inputElement) {
                this.panelTopControlComponent.inputElement.nativeElement.blur();
                this.pBlur.emit();
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DropdownPanelComponent.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.dropPanelService.onKeyDown(event);
        };
        /**
         * @return {?}
         */
        DropdownPanelComponent.prototype.toggleDropDown = /**
         * @return {?}
         */
        function () {
            if (!this.disabled) {
                this.dropPanelService.setOpenState(!this.open);
            }
        };
        /**
         * @return {?}
         */
        DropdownPanelComponent.prototype.closeDropDown = /**
         * @return {?}
         */
        function () {
            this.dropPanelService.setOpenState(false);
        };
        /**
         * @param {?} position
         * @return {?}
         */
        DropdownPanelComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        /**
         * @return {?}
         */
        DropdownPanelComponent.prototype.updateCdkConnectedOverlayStatus = /**
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
        DropdownPanelComponent.prototype.updateCdkConnectedOverlayPositions = /**
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
        /** update ngModel -> update listOfSelectedValue */
        // tslint:disable-next-line:no-any
        /**
         * update ngModel -> update listOfSelectedValue
         * @param {?} value
         * @return {?}
         */
        // tslint:disable-next-line:no-any
        DropdownPanelComponent.prototype.writeValue = /**
         * update ngModel -> update listOfSelectedValue
         * @param {?} value
         * @return {?}
         */
        // tslint:disable-next-line:no-any
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
            this.dropPanelService.updateListOfSelectedValue(listValue, false);
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        DropdownPanelComponent.prototype.registerOnChange = /**
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
        DropdownPanelComponent.prototype.registerOnTouched = /**
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
        DropdownPanelComponent.prototype.setDisabledState = /**
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
        DropdownPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dropPanelService.searchValue$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.onSearch.emit(data);
                _this.updateCdkConnectedOverlayPositions();
            }));
            this.dropPanelService.modelChange$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
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
            this.dropPanelService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
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
                _this.dropPanelService.clearInput();
            }));
            this.dropPanelService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        DropdownPanelComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.updateCdkConnectedOverlayStatus();
            this.isInit = true;
        };
        /**
         * @return {?}
         */
        DropdownPanelComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        DropdownPanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        DropdownPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-dropdown-panel',
                        exportAs: 'pDropdownPanel',
                        preserveWhitespaces: false,
                        providers: [
                            DropdownPanelService,
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return DropdownPanelComponent; })),
                                multi: true,
                            },
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        animations: [core$1.slideMotion],
                        template: "<div\n  cdkOverlayOrigin\n  p-panel-top-control\n  tabindex=\"0\"\n  class=\"ant-select-selection\"\n  [open]=\"_open\"\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n  [placeHolder]=\"placeHolder\"\n  [allowClear]=\"allowClear\"\n  [showArrow]=\"showArrow\"\n  [loading]=\"loading\"\n  [suffixIcon]=\"suffixIcon\"\n  [clearIcon]=\"clearIcon\"\n  [removeIcon]=\"removeIcon\"\n  [showSearch]=\"showSearch\"\n  [class.ant-select-selection--single]=\"dropPanelService.isSingleMode\"\n  (keydown)=\"onKeyDown($event)\"\n></div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"_open\"\n>\n  <div\n    class=\"ant-select-dropdown\"\n    [class.ant-select-dropdown--single]=\"dropPanelService.isSingleMode\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [nzClassListAdd]=\"[dropdownClassName]\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngStyle]=\"dropdownStyle\"\n  >\n    <div\n      p-panel-option-container\n      style=\"overflow: auto;transform: translateZ(0px);\"\n      (keydown)=\"onKeyDown($event)\"\n      [menuItemSelectedIcon]=\"menuItemSelectedIcon\"\n      [notFoundContent]=\"notFoundContent\"\n      (scrollToBottom)=\"scrollToBottom.emit()\"\n    ></div>\n  </div>\n\n  <!-- <div\n    p-panel-option-container\n    class=\"ant-select-dropdown\"\n    [ngStyle]=\"dropdownStyle\"\n    [@slideMotion]=\"dropDownPosition\"\n    [nzClassListAdd]=\"[dropdownClassName]\"\n    [class.ant-select-dropdown--single]=\"dropPanelService.isSingleMode\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    style=\"overflow: auto;transform: translateZ(0px);\"\n    (keydown)=\"onKeyDown($event)\"\n    [menuItemSelectedIcon]=\"menuItemSelectedIcon\"\n    [notFoundContent]=\"notFoundContent\"\n    (scrollToBottom)=\"scrollToBottom.emit()\"\n  ></div> -->\n</ng-template>\n",
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
        DropdownPanelComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: DropdownPanelService },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor },
            { type: platform.Platform },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        DropdownPanelComponent.propDecorators = {
            cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin, { static: false },] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
            panelTopControlComponent: [{ type: core.ViewChild, args: [PanelSelectTopControlComponent, { static: true },] }],
            onSearch: [{ type: core.Output }],
            scrollToBottom: [{ type: core.Output }],
            openChange: [{ type: core.Output }],
            pBlur: [{ type: core.Output }],
            pFocus: [{ type: core.Output }],
            size: [{ type: core.Input }],
            dropdownClassName: [{ type: core.Input }],
            dropdownMatchSelectWidth: [{ type: core.Input }],
            dropdownStyle: [{ type: core.Input }],
            notFoundContent: [{ type: core.Input }],
            allowClear: [{ type: core.Input }],
            showSearch: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            placeHolder: [{ type: core.Input }],
            maxTagCount: [{ type: core.Input }],
            suffixIcon: [{ type: core.Input }],
            clearIcon: [{ type: core.Input }],
            removeIcon: [{ type: core.Input }],
            menuItemSelectedIcon: [{ type: core.Input }],
            showArrow: [{ type: core.Input }],
            data: [{ type: core.Input }],
            autoClearSearchValue: [{ type: core.Input }],
            maxMultipleCount: [{ type: core.Input }],
            serverSearch: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            filterOption: [{ type: core.Input }],
            compareWith: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            open: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], DropdownPanelComponent.prototype, "allowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], DropdownPanelComponent.prototype, "showSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], DropdownPanelComponent.prototype, "loading", void 0);
        return DropdownPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        DropdownPanelComponent.prototype._open;
        /** @type {?} */
        DropdownPanelComponent.prototype.value;
        /** @type {?} */
        DropdownPanelComponent.prototype.dropDownPosition;
        /** @type {?} */
        DropdownPanelComponent.prototype.triggerWidth;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype._data;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype._disabled;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype._autoFocus;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype.isInit;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype.destroy$;
        /** @type {?} */
        DropdownPanelComponent.prototype.cdkOverlayOrigin;
        /** @type {?} */
        DropdownPanelComponent.prototype.cdkConnectedOverlay;
        /** @type {?} */
        DropdownPanelComponent.prototype.panelTopControlComponent;
        /**
         * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
         * @type {?}
         */
        DropdownPanelComponent.prototype.onSearch;
        /** @type {?} */
        DropdownPanelComponent.prototype.scrollToBottom;
        /** @type {?} */
        DropdownPanelComponent.prototype.openChange;
        /** @type {?} */
        DropdownPanelComponent.prototype.pBlur;
        /** @type {?} */
        DropdownPanelComponent.prototype.pFocus;
        /** @type {?} */
        DropdownPanelComponent.prototype.size;
        /** @type {?} */
        DropdownPanelComponent.prototype.dropdownClassName;
        /** @type {?} */
        DropdownPanelComponent.prototype.dropdownMatchSelectWidth;
        /** @type {?} */
        DropdownPanelComponent.prototype.dropdownStyle;
        /** @type {?} */
        DropdownPanelComponent.prototype.notFoundContent;
        /** @type {?} */
        DropdownPanelComponent.prototype.allowClear;
        /** @type {?} */
        DropdownPanelComponent.prototype.showSearch;
        /** @type {?} */
        DropdownPanelComponent.prototype.loading;
        /** @type {?} */
        DropdownPanelComponent.prototype.placeHolder;
        /** @type {?} */
        DropdownPanelComponent.prototype.maxTagCount;
        /** @type {?} */
        DropdownPanelComponent.prototype.suffixIcon;
        /** @type {?} */
        DropdownPanelComponent.prototype.clearIcon;
        /** @type {?} */
        DropdownPanelComponent.prototype.removeIcon;
        /** @type {?} */
        DropdownPanelComponent.prototype.menuItemSelectedIcon;
        /** @type {?} */
        DropdownPanelComponent.prototype.showArrow;
        /** @type {?} */
        DropdownPanelComponent.prototype.onChange;
        /** @type {?} */
        DropdownPanelComponent.prototype.onTouched;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype.renderer;
        /** @type {?} */
        DropdownPanelComponent.prototype.dropPanelService;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype.focusMonitor;
        /**
         * @type {?}
         * @private
         */
        DropdownPanelComponent.prototype.platform;
        /** @type {?} */
        DropdownPanelComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PanelOptionContainerComponent = /** @class */ (function () {
        function PanelOptionContainerComponent(dropPanelService, cdr, ngZone) {
            this.dropPanelService = dropPanelService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.destroy$ = new rxjs.Subject();
            this.lastScrollTop = 0;
            this.scrollToBottom = new core.EventEmitter();
        }
        /**
         * @param {?} option
         * @return {?}
         */
        PanelOptionContainerComponent.prototype.clickOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            this.dropPanelService.clickOption(option);
        };
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        PanelOptionContainerComponent.prototype.trackLabel = /**
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
        PanelOptionContainerComponent.prototype.trackValue = 
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
        PanelOptionContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dropPanelService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var ul = _this.dropdownUl.nativeElement;
                rxjs.fromEvent(ul, 'scroll')
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                        _this.lastScrollTop = ul.scrollTop;
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.scrollToBottom.emit();
                        }));
                    }
                }));
            }));
        };
        /**
         * @return {?}
         */
        PanelOptionContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        PanelOptionContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[p-panel-option-container]',
                        exportAs: 'pPanelOptionContainer',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        template: "<ul #dropdownUl class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\" role=\"menu\" tabindex=\"0\">\n  <li\n    *ngIf=\"dropPanelService.isShowNotFound\"\n    nz-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n  >\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n  </li>\n  <li\n    class=\"item ant-select-dropdown-menu-item\"\n    [class.ant-select-dropdown-menu-item-selected]=\"option.checked && !option.disabled\"\n    *ngFor=\"\n      let option of dropPanelService.listOfPOption\n        | pFilterOption: dropPanelService.searchValue:dropPanelService.filterOption:dropPanelService.serverSearch;\n      trackBy: trackValue\n    \"\n    (click)=\"clickOption(option)\"\n  >\n    {{ option.label }}\n    <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"option.checked && !option.disabled && !menuItemSelectedIcon\"></i>\n  </li>\n</ul>\n",
                        host: {
                            '[attr.unselectable]': '"unselectable"',
                            '[style.user-select]': '"none"',
                            '[style.padding]': '"10px"',
                            '(mousedown)': '$event.preventDefault()',
                        },
                        styles: ["\n      .item {\n        display: inline-block;\n        width: 120px;\n        padding: 5px 10px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        PanelOptionContainerComponent.ctorParameters = function () { return [
            { type: DropdownPanelService },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        PanelOptionContainerComponent.propDecorators = {
            dropdownUl: [{ type: core.ViewChild, args: ['dropdownUl', { static: true },] }],
            notFoundContent: [{ type: core.Input }],
            menuItemSelectedIcon: [{ type: core.Input }],
            scrollToBottom: [{ type: core.Output }]
        };
        return PanelOptionContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PanelOptionContainerComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        PanelOptionContainerComponent.prototype.lastScrollTop;
        /** @type {?} */
        PanelOptionContainerComponent.prototype.dropdownUl;
        /** @type {?} */
        PanelOptionContainerComponent.prototype.notFoundContent;
        /** @type {?} */
        PanelOptionContainerComponent.prototype.menuItemSelectedIcon;
        /** @type {?} */
        PanelOptionContainerComponent.prototype.scrollToBottom;
        /** @type {?} */
        PanelOptionContainerComponent.prototype.dropPanelService;
        /**
         * @type {?}
         * @private
         */
        PanelOptionContainerComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        PanelOptionContainerComponent.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownPanelModule = /** @class */ (function () {
        function DropdownPanelModule() {
        }
        DropdownPanelModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DropdownPanelComponent, PanelSelectTopControlComponent, PanelFilterOptionPipe, PanelOptionContainerComponent],
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
                        exports: [DropdownPanelComponent, PanelSelectTopControlComponent, PanelFilterOptionPipe, PanelOptionContainerComponent],
                    },] }
        ];
        return DropdownPanelModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function POption() { }
    if (false) {
        /** @type {?} */
        POption.prototype.label;
        /** @type {?} */
        POption.prototype.value;
        /** @type {?|undefined} */
        POption.prototype.disabled;
        /** @type {?|undefined} */
        POption.prototype.checked;
    }

    exports.DropdownPanelComponent = DropdownPanelComponent;
    exports.DropdownPanelModule = DropdownPanelModule;
    exports.DropdownPanelService = DropdownPanelService;
    exports.PanelFilterOptionPipe = PanelFilterOptionPipe;
    exports.PanelOptionContainerComponent = PanelOptionContainerComponent;
    exports.PanelSelectTopControlComponent = PanelSelectTopControlComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dropdown-panel.umd.js.map
