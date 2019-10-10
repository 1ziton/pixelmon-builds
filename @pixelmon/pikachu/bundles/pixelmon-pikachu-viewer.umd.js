/**
 * @Based on pixelmon(cipchk@qq.com) v0.2.1
 * (c) 2019 developer(developer@1ziton.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/viewer', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu.viewer = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

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
    var ViewerImgDirective = /** @class */ (function () {
        function ViewerImgDirective(_elementRef) {
            this._elementRef = _elementRef;
            this.lazyLoadSrc = ''; // 懒加载图片url
            // 懒加载图片url
            this.thumbnailSrc = "data:img/jpg;base64,\n  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"; // 懒加载缩略图url
            this.nativeElement = this._elementRef.nativeElement;
        }
        /**
         * @return {?}
         */
        ViewerImgDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // 懒加载时赋值url
            if (this.lazyLoadSrc) {
                this.nativeElement.src = this.thumbnailSrc;
                this.nativeElement.dataset.lazyLoadSrc = this.lazyLoadSrc;
            }
        };
        ViewerImgDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[viewerImg]',
                    },] }
        ];
        /** @nocollapse */
        ViewerImgDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ViewerImgDirective.propDecorators = {
            lazyLoadSrc: [{ type: core.Input }],
            thumbnailSrc: [{ type: core.Input }]
        };
        return ViewerImgDirective;
    }());
    if (false) {
        /** @type {?} */
        ViewerImgDirective.prototype.lazyLoadSrc;
        /** @type {?} */
        ViewerImgDirective.prototype.thumbnailSrc;
        /** @type {?} */
        ViewerImgDirective.prototype.nativeElement;
        /**
         * @type {?}
         * @private
         */
        ViewerImgDirective.prototype._elementRef;
    }
    var ViewerDirective = /** @class */ (function () {
        function ViewerDirective(_elementRef) {
            this._elementRef = _elementRef;
            // 用于unsubscribe
            this.isLazyLoad = false; // 是否懒加载图片
        }
        /**
         * @return {?}
         */
        ViewerDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.updateViewer();
            this._subscription = this.viewerImgs.changes.subscribe((/**
             * @return {?}
             */
            function () {
                // 等待DOM更新
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.updateViewer();
                }));
            }));
        };
        /**
         * @return {?}
         */
        ViewerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
        };
        /**
         * @return {?}
         */
        ViewerDirective.prototype.updateViewer = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.viewer = new Viewer(this._elementRef.nativeElement, {
                ready: (/**
                 * @return {?}
                 */
                function () {
                    var e_1, _a;
                    if (!_this.isLazyLoad) {
                        return;
                    }
                    // 给src赋值懒加载url
                    /** @type {?} */
                    var imgElements = _this.viewer.images || [];
                    try {
                        for (var imgElements_1 = __values(imgElements), imgElements_1_1 = imgElements_1.next(); !imgElements_1_1.done; imgElements_1_1 = imgElements_1.next()) {
                            var element = imgElements_1_1.value;
                            element.src = (/** @type {?} */ (element.dataset.lazyLoadSrc));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (imgElements_1_1 && !imgElements_1_1.done && (_a = imgElements_1.return)) _a.call(imgElements_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }),
            });
        };
        ViewerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[viewer]',
                    },] }
        ];
        /** @nocollapse */
        ViewerDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ViewerDirective.propDecorators = {
            isLazyLoad: [{ type: core.Input }],
            viewerImgs: [{ type: core.ContentChildren, args: [ViewerImgDirective, { descendants: true },] }]
        };
        return ViewerDirective;
    }());
    if (false) {
        /** @type {?} */
        ViewerDirective.prototype.viewer;
        /**
         * @type {?}
         * @private
         */
        ViewerDirective.prototype._subscription;
        /** @type {?} */
        ViewerDirective.prototype.isLazyLoad;
        /** @type {?} */
        ViewerDirective.prototype.viewerImgs;
        /**
         * @type {?}
         * @private
         */
        ViewerDirective.prototype._elementRef;
    }
    var ViewerDirectiveModule = /** @class */ (function () {
        function ViewerDirectiveModule() {
        }
        ViewerDirectiveModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ViewerDirective, ViewerImgDirective],
                        exports: [ViewerDirective, ViewerImgDirective],
                    },] }
        ];
        return ViewerDirectiveModule;
    }());

    exports.ViewerDirective = ViewerDirective;
    exports.ViewerDirectiveModule = ViewerDirectiveModule;
    exports.ViewerImgDirective = ViewerImgDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pixelmon-pikachu-viewer.umd.js.map
