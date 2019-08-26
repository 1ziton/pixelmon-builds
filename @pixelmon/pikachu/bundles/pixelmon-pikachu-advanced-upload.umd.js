/**
 * @license ng-alain(cipchk@qq.com) v0.1.4
 * (c) 2019 giscafer(giscafer@outlook.com)
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('@angular/forms'), require('@pixelmon/util'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/advanced-upload', ['exports', '@angular/core', '@angular/common', 'rxjs', '@angular/forms', '@pixelmon/util', 'ng-zorro-antd'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu['advanced-upload'] = {}), global.ng.core, global.ng.common, global.rxjs, global.ng.forms, global.util, global.ngZorroAntd));
}(this, function (exports, core, common, rxjs, forms, util, ngZorroAntd) { 'use strict';

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
     * @Description: 上传组件，默认使用百度baidubce的对象存储bos上传
     * Web端直传实践：https://cloud.baidu.com/doc/BOS/s/9jwvys8y7/
     * @Author: zomixi
     * @Date: 2019-07-22 15:44:37
     */
    /**
     * @record
     */
    function BosConfig() { }
    if (false) {
        /** @type {?} */
        BosConfig.prototype.endpoint;
        /** @type {?} */
        BosConfig.prototype.ak;
        /** @type {?} */
        BosConfig.prototype.sk;
        /** @type {?} */
        BosConfig.prototype.sessionToken;
    }
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    UploadServiceToken = /** @class */ (function () {
        function UploadServiceToken() {
        }
        return UploadServiceToken;
    }());
    if (false) {
        /** @type {?} */
        UploadServiceToken.prototype.bosConfig;
        /** @type {?} */
        UploadServiceToken.prototype.workerUrl;
        /**
         * @abstract
         * @return {?}
         */
        UploadServiceToken.prototype.getConfig = function () { };
    }
    var AdvancedUploadComponent = /** @class */ (function () {
        function AdvancedUploadComponent(_cdr, _uploadSrv) {
            var _this = this;
            this._cdr = _cdr;
            this._uploadSrv = _uploadSrv;
            this.accept = 'image/png,image/jpeg,image/gif,image/bmp'; // 接受上传的文件类型, 详见https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
            // 接受上传的文件类型, 详见https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
            this.action = ''; // 上传的地址
            // 上传的地址
            this.directory = false; // 是否支持上传文件夹
            // 是否支持上传文件夹
            this.disabled = false; // 是否禁用
            // 是否禁用
            this.limit = 9; // 限制单次最多上传数量，nzMultiple 打开时有效；0 表示不限
            // 限制单次最多上传数量，nzMultiple 打开时有效；0 表示不限
            this.size = 0; // 限制文件大小，单位：KB；0 表示不限
            // 限制文件大小，单位：KB；0 表示不限
            this.fileType = 'image/png,image/jpeg,image/gif,image/bmp'; // 限制文件类型，例如：image/png,image/jpeg,image/gif,image/bmp
            // 限制文件类型，例如：image/png,image/jpeg,image/gif,image/bmp
            this.listType = 'picture-card'; // 上传列表的内建样式，支持三种基本样式
            // 上传列表的内建样式，支持三种基本样式
            this.multiple = true; // 是否支持多选文件，ie10+ 支持
            // 是否支持多选文件，ie10+ 支持
            this.showButton = true; // 是否展示上传按钮
            // 是否展示上传按钮
            this.placeholder = '上传'; // 占位提示语
            // 自定义content
            this.maxLength = Infinity; // 最多上传数
            // 最多上传数
            this.bucket = 'bucket'; // 百度BOS上的命名空间
            // 百度BOS上的命名空间
            this.fastUpload = true; // 是否使用快传
            // 是否使用快传
            this.filter = [
                {
                    name: 'maxLength',
                    fn: (/**
                     * @param {?} fileList
                     * @return {?}
                     */
                    function (fileList) {
                        // 限制最大上传数量
                        return fileList.slice(0, _this.maxLength - _this.fileList.length);
                    }),
                },
            ];
            // 是否显示预览图标和删除图标
            this.showUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                hidePreviewIconInNonImage: true,
            };
            this.bosClient = null; // 百度上传客户端
            // 百度上传客户端
            this.isSupportWorker = false; // 浏览器是否支持Worker
            // 浏览器是否支持Worker
            this.isLoading = false; // 百度上传客户端初始化中
            // 百度上传客户端初始化中
            this.fileList = []; // 文件列表，绑定ControlValueAccessor
            // 文件列表改变，绑定ControlValueAccessor
            // 预览modal参数对象
            this.previewModal = {
                visible: false,
                // 是否显示预览modal
                image: '',
            };
            // 点击文件链接或预览图标时的回调；注意：务必使用 => 定义处理方法
            this.preview = (/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.previewModal.image = (/** @type {?} */ (file.url)) || (/** @type {?} */ (file.thumbUrl));
                _this.previewModal.visible = true;
                _this._cdr.detectChanges();
            });
            // 通过覆盖默认的上传行为，可以自定义自己的上传实现；注意：务必使用 => 定义处理方法
            this.customRequest = (/**
             * @param {?} uploadSubject
             * @return {?}
             */
            function (uploadSubject) {
                /** @type {?} */
                var uploadFile = uploadSubject.file;
                // uploadKey用于标识文件唯一性，如果重复Put同一个key的Object，之前上传的数据将被覆盖
                _this.getUploadKey(uploadFile).then((/**
                 * @param {?} uploadKey
                 * @return {?}
                 */
                function (uploadKey) {
                    // 尝试秒传
                    if (_this.isSupportWorker && _this.fastUpload) {
                        // 先用HEAD请求根据key判断是否已上传过该文件
                        _this.bosClient
                            .getObjectMetadata(_this.bucket, uploadKey)
                            .then((/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) {
                            // 上传过了，直接回显
                            uploadFile.url = _this.bosClient.config.endpoint + "/v1/" + _this.bucket + "/" + uploadKey;
                            (/** @type {?} */ (uploadSubject.onSuccess))('上传成功', uploadFile, event);
                        }))
                            .catch((
                        // 没有上传过，使用百度bos直传
                        // 没有上传过，使用百度bos直传
                        /**
                         * @return {?}
                         */
                        function () { return _this.bosUpload(uploadSubject, _this.bucket, uploadKey, uploadFile); }));
                    }
                    else {
                        // 百度bos直传
                        _this.bosUpload(uploadSubject, _this.bucket, uploadKey, uploadFile);
                    }
                }));
                // ZORRO要求返回一个Subscription
                return new rxjs.Subscription();
            });
            this.initBosClient();
        }
        Object.defineProperty(AdvancedUploadComponent.prototype, "showPreviewIcon", {
            // 是否显示预览图标
            set: 
            // 是否显示预览图标
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.showUploadList = __assign({}, this.showUploadList, { showPreviewIcon: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdvancedUploadComponent.prototype, "showRemoveIcon", {
            // 是否显示删除图标
            set: 
            // 是否显示删除图标
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.showUploadList = __assign({}, this.showUploadList, { showPreviewIcon: value });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AdvancedUploadComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // 判断是否支持Worker
            if (typeof Worker !== 'undefined') {
                this.isSupportWorker = true;
            }
            else {
                if (this.fastUpload) {
                    console.error('浏览器不支持Worker，无法使用快传！');
                }
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AdvancedUploadComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fileList = value || [];
            this.fileList.forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                file.uid = file.uid || util.uid();
            }));
            this._cdr.detectChanges(); // for issue：https://github.com/angular/angular/issues/10816
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        AdvancedUploadComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.fileListChange = fn;
        };
        /**
         * @return {?}
         */
        AdvancedUploadComponent.prototype.registerOnTouched = /**
         * @return {?}
         */
        function () { };
        // 初始化百度上传客户端
        // 初始化百度上传客户端
        /**
         * @return {?}
         */
        AdvancedUploadComponent.prototype.initBosClient = 
        // 初始化百度上传客户端
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._uploadSrv.getConfig()) {
                this.isLoading = true;
                (/** @type {?} */ (this._uploadSrv.getConfig())).subscribe((/**
                 * @param {?} config
                 * @return {?}
                 */
                function (config) {
                    _this.bosClient = new baidubce.sdk.BosClient({
                        endpoint: config.endpoint,
                        credentials: {
                            ak: config.ak,
                            sk: config.sk,
                        },
                        sessionToken: config.sessionToken,
                    });
                    _this.isLoading = false;
                    _this._cdr.detectChanges();
                }));
            }
        };
        /**
         * @param {?} file
         * @return {?}
         */
        AdvancedUploadComponent.prototype.getUploadKey = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                // 使用Worker
                if (_this.isSupportWorker && _this.fastUpload) {
                    /** @type {?} */
                    var worker_1 = new Worker(_this._uploadSrv.workerUrl);
                    worker_1.onerror = (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        console.error('Worker异常，已关闭！', error);
                        worker_1.terminate();
                    });
                    worker_1.postMessage(file);
                    worker_1.onmessage = (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) {
                        // 使用文件md5+最后修改时间+文件大小+文件名来保证唯一性，同时相同的文件的key也会相同,用于秒传
                        /** @type {?} */
                        var key = "" + event.data + file.lastModified + file.size + file.name;
                        resolve(key);
                        worker_1.terminate();
                    });
                }
                else {
                    // 不使用Worker
                    // 使用当前时间+四位随机码+最后修改时间+文件大小+文件名来保证唯一性，此时因为相同文件key也会不同，故实现不了秒传
                    /** @type {?} */
                    var random = "" + new Date().getTime() + (Math.random() * 10000).toFixed(0);
                    /** @type {?} */
                    var key = "" + random + file.lastModified + file.size + file.name;
                    resolve(key);
                }
            }));
        };
        // 使用百度bos直传
        // 使用百度bos直传
        /**
         * @param {?} uploadSubject
         * @param {?} bucket
         * @param {?} uploadKey
         * @param {?} uploadFile
         * @return {?}
         */
        AdvancedUploadComponent.prototype.bosUpload = 
        // 使用百度bos直传
        /**
         * @param {?} uploadSubject
         * @param {?} bucket
         * @param {?} uploadKey
         * @param {?} uploadFile
         * @return {?}
         */
        function (uploadSubject, bucket, uploadKey, uploadFile) {
            var _this = this;
            this.bosClient
                .putObjectFromBlob(bucket, uploadKey, uploadFile)
                .then((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                uploadFile.url = _this.bosClient.config.endpoint + "/v1/" + bucket + "/" + uploadKey;
                (/** @type {?} */ (uploadSubject.onSuccess))('上传成功', uploadFile, event);
            }))
                .catch((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                (/** @type {?} */ (uploadSubject.onError))(event, uploadFile);
            }));
        };
        /**
         * @return {?}
         */
        AdvancedUploadComponent.prototype.onFileListChange = /**
         * @return {?}
         */
        function () {
            // 去除缩略图，因为缩略图太大,要是外部不处理会影响Http请求速度
            this.fileListChange(this.fileList.map((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return (__assign({}, file, { thumbUrl: '' })); })));
            this._cdr.detectChanges();
        };
        /**
         * @return {?}
         */
        AdvancedUploadComponent.prototype.onChange = /**
         * @return {?}
         */
        function () {
            // 赋值url
            this.fileList.forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                file.url = file.url || (file.originFileObj && ((/** @type {?} */ (file.originFileObj))).url);
            }));
            this.onFileListChange();
        };
        AdvancedUploadComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-advancedUpload',
                        template: "<nz-upload\n  [nzAction]=\"action\"\n  [nzAccept]=\"accept\"\n  [nzListType]=\"listType\"\n  [(nzFileList)]=\"fileList\"\n  [nzShowButton]=\"showButton && fileList.length < maxLength\"\n  [nzFileType]=\"fileType\"\n  [nzShowUploadList]=\"showUploadList\"\n  [nzDirectory]=\"directory\"\n  [nzLimit]=\"limit\"\n  [nzSize]=\"size\"\n  [nzDisabled]=\"disabled || isLoading\"\n  [nzMultiple]=\"multiple\"\n  [nzPreview]=\"preview\"\n  [nzRemove]=\"remove\"\n  [nzFilter]=\"filter\"\n  [nzBeforeUpload]=\"beforeUpload\"\n  [nzCustomRequest]=\"customRequest\"\n  (nzFileListChange)=\"onFileListChange()\"\n  (nzChange)=\"onChange()\"\n>\n  <!-- \u81EA\u5B9A\u4E49content -->\n  <ng-template [ngIf]=\"customContent\" [ngIfElse]=\"defaultContent\">\n    <ng-container [ngTemplateOutlet]=\"customContent\"></ng-container>\n  </ng-template>\n\n  <!-- \u9ED8\u8BA4content -->\n  <ng-template #defaultContent>\n    <ng-container [ngSwitch]=\"listType\">\n      <ng-container *ngSwitchCase=\"'picture-card'\">\n        <i nz-icon nzType=\"plus\" class=\"upload-icon\"></i>\n        <div class=\"upload-text\">{{ placeholder }}</div>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button nz-button>\n          <i nz-icon nzType=\"upload\"></i>\n          <span>{{ placeholder }}</span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</nz-upload>\n\n<!-- \u9884\u89C8\u5F39\u6846 -->\n<nz-modal [(nzVisible)]=\"previewModal.visible\" [nzFooter]=\"null\" (nzOnCancel)=\"previewModal.visible = false\">\n  <img [src]=\"previewModal.image\" width=\"100%\" />\n</nz-modal>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: AdvancedUploadComponent,
                                multi: true,
                            },
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".upload-icon{color:#999;font-size:32px}.upload-text{margin-top:8px;color:#666}"]
                    }] }
        ];
        /** @nocollapse */
        AdvancedUploadComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: UploadServiceToken }
        ]; };
        AdvancedUploadComponent.propDecorators = {
            accept: [{ type: core.Input }],
            action: [{ type: core.Input }],
            directory: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            size: [{ type: core.Input }],
            fileType: [{ type: core.Input }],
            listType: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            showButton: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            customContent: [{ type: core.Input }],
            maxLength: [{ type: core.Input }],
            bucket: [{ type: core.Input }],
            fastUpload: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            showPreviewIcon: [{ type: core.Input }],
            showRemoveIcon: [{ type: core.Input }],
            beforeUpload: [{ type: core.Input }],
            remove: [{ type: core.Input }],
            preview: [{ type: core.Input }],
            customRequest: [{ type: core.Input }]
        };
        return AdvancedUploadComponent;
    }());
    if (false) {
        /** @type {?} */
        AdvancedUploadComponent.prototype.accept;
        /** @type {?} */
        AdvancedUploadComponent.prototype.action;
        /** @type {?} */
        AdvancedUploadComponent.prototype.directory;
        /** @type {?} */
        AdvancedUploadComponent.prototype.disabled;
        /** @type {?} */
        AdvancedUploadComponent.prototype.limit;
        /** @type {?} */
        AdvancedUploadComponent.prototype.size;
        /** @type {?} */
        AdvancedUploadComponent.prototype.fileType;
        /** @type {?} */
        AdvancedUploadComponent.prototype.listType;
        /** @type {?} */
        AdvancedUploadComponent.prototype.multiple;
        /** @type {?} */
        AdvancedUploadComponent.prototype.showButton;
        /** @type {?} */
        AdvancedUploadComponent.prototype.placeholder;
        /** @type {?} */
        AdvancedUploadComponent.prototype.customContent;
        /** @type {?} */
        AdvancedUploadComponent.prototype.maxLength;
        /** @type {?} */
        AdvancedUploadComponent.prototype.bucket;
        /** @type {?} */
        AdvancedUploadComponent.prototype.fastUpload;
        /** @type {?} */
        AdvancedUploadComponent.prototype.filter;
        /** @type {?} */
        AdvancedUploadComponent.prototype.showUploadList;
        /**
         * @type {?}
         * @private
         */
        AdvancedUploadComponent.prototype.bosClient;
        /**
         * @type {?}
         * @private
         */
        AdvancedUploadComponent.prototype.isSupportWorker;
        /** @type {?} */
        AdvancedUploadComponent.prototype.isLoading;
        /** @type {?} */
        AdvancedUploadComponent.prototype.fileList;
        /** @type {?} */
        AdvancedUploadComponent.prototype.fileListChange;
        /** @type {?} */
        AdvancedUploadComponent.prototype.previewModal;
        /** @type {?} */
        AdvancedUploadComponent.prototype.beforeUpload;
        /** @type {?} */
        AdvancedUploadComponent.prototype.remove;
        /** @type {?} */
        AdvancedUploadComponent.prototype.preview;
        /** @type {?} */
        AdvancedUploadComponent.prototype.customRequest;
        /**
         * @type {?}
         * @private
         */
        AdvancedUploadComponent.prototype._cdr;
        /**
         * @type {?}
         * @private
         */
        AdvancedUploadComponent.prototype._uploadSrv;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AdvancedUploadModule = /** @class */ (function () {
        function AdvancedUploadModule() {
        }
        AdvancedUploadModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AdvancedUploadComponent],
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule],
                        exports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule, AdvancedUploadComponent]
                    },] }
        ];
        return AdvancedUploadModule;
    }());

    exports.AdvancedUploadModule = AdvancedUploadModule;
    exports.ɵa = UploadServiceToken;
    exports.ɵb = AdvancedUploadComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pixelmon-pikachu-advanced-upload.umd.js.map
