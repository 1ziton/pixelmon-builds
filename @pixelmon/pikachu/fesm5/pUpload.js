import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __assign } from 'tslib';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { uuidv1 } from '@pixelmon/util';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var  /**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadComponent = /** @class */ (function () {
    function UploadComponent(_cdr, _uploadSrv) {
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
            return new Subscription();
        });
        this.initBosClient();
    }
    Object.defineProperty(UploadComponent.prototype, "showPreviewIcon", {
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
    Object.defineProperty(UploadComponent.prototype, "showRemoveIcon", {
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
    UploadComponent.prototype.ngOnInit = /**
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
    UploadComponent.prototype.writeValue = /**
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
            file.uid = file.uid || uuidv1();
        }));
        this._cdr.detectChanges(); // for issue：https://github.com/angular/angular/issues/10816
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UploadComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.fileListChange = fn;
    };
    /**
     * @return {?}
     */
    UploadComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    // 初始化百度上传客户端
    // 初始化百度上传客户端
    /**
     * @return {?}
     */
    UploadComponent.prototype.initBosClient = 
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
    UploadComponent.prototype.getUploadKey = /**
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
    UploadComponent.prototype.bosUpload = 
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
    UploadComponent.prototype.onFileListChange = /**
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
    UploadComponent.prototype.onChange = /**
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
    UploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-upload',
                    exportAs: 'pUpload',
                    template: "<nz-upload\n  [nzAction]=\"action\"\n  [nzAccept]=\"accept\"\n  [nzListType]=\"listType\"\n  [(nzFileList)]=\"fileList\"\n  [nzShowButton]=\"showButton && fileList.length < maxLength\"\n  [nzFileType]=\"fileType\"\n  [nzShowUploadList]=\"showUploadList\"\n  [nzDirectory]=\"directory\"\n  [nzLimit]=\"limit\"\n  [nzSize]=\"size\"\n  [nzDisabled]=\"disabled || isLoading\"\n  [nzMultiple]=\"multiple\"\n  [nzPreview]=\"preview\"\n  [nzRemove]=\"remove\"\n  [nzFilter]=\"filter\"\n  [nzBeforeUpload]=\"beforeUpload\"\n  [nzCustomRequest]=\"customRequest\"\n  (nzFileListChange)=\"onFileListChange()\"\n  (nzChange)=\"onChange()\"\n>\n  <!-- \u81EA\u5B9A\u4E49content -->\n  <ng-template [ngIf]=\"customContent\" [ngIfElse]=\"defaultContent\">\n    <ng-container [ngTemplateOutlet]=\"customContent\"></ng-container>\n  </ng-template>\n\n  <!-- \u9ED8\u8BA4content -->\n  <ng-template #defaultContent>\n    <ng-container [ngSwitch]=\"listType\">\n      <ng-container *ngSwitchCase=\"'picture-card'\">\n        <i nz-icon nzType=\"plus\" class=\"upload-icon\"></i>\n        <div class=\"upload-text\">{{ placeholder }}</div>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button nz-button>\n          <i nz-icon nzType=\"upload\"></i>\n          <span>{{ placeholder }}</span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</nz-upload>\n\n<!-- \u9884\u89C8\u5F39\u6846 -->\n<nz-modal [(nzVisible)]=\"previewModal.visible\" [nzFooter]=\"null\" (nzOnCancel)=\"previewModal.visible = false\">\n  <img [src]=\"previewModal.image\" width=\"100%\" />\n</nz-modal>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: UploadComponent,
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".upload-icon{color:#999;font-size:32px}.upload-text{margin-top:8px;color:#666}"]
                }] }
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: UploadServiceToken }
    ]; };
    UploadComponent.propDecorators = {
        accept: [{ type: Input }],
        action: [{ type: Input }],
        directory: [{ type: Input }],
        disabled: [{ type: Input }],
        limit: [{ type: Input }],
        size: [{ type: Input }],
        fileType: [{ type: Input }],
        listType: [{ type: Input }],
        multiple: [{ type: Input }],
        showButton: [{ type: Input }],
        placeholder: [{ type: Input }],
        customContent: [{ type: Input }],
        maxLength: [{ type: Input }],
        bucket: [{ type: Input }],
        fastUpload: [{ type: Input }],
        filter: [{ type: Input }],
        showPreviewIcon: [{ type: Input }],
        showRemoveIcon: [{ type: Input }],
        beforeUpload: [{ type: Input }],
        remove: [{ type: Input }],
        preview: [{ type: Input }],
        customRequest: [{ type: Input }]
    };
    return UploadComponent;
}());
if (false) {
    /** @type {?} */
    UploadComponent.prototype.accept;
    /** @type {?} */
    UploadComponent.prototype.action;
    /** @type {?} */
    UploadComponent.prototype.directory;
    /** @type {?} */
    UploadComponent.prototype.disabled;
    /** @type {?} */
    UploadComponent.prototype.limit;
    /** @type {?} */
    UploadComponent.prototype.size;
    /** @type {?} */
    UploadComponent.prototype.fileType;
    /** @type {?} */
    UploadComponent.prototype.listType;
    /** @type {?} */
    UploadComponent.prototype.multiple;
    /** @type {?} */
    UploadComponent.prototype.showButton;
    /** @type {?} */
    UploadComponent.prototype.placeholder;
    /** @type {?} */
    UploadComponent.prototype.customContent;
    /** @type {?} */
    UploadComponent.prototype.maxLength;
    /** @type {?} */
    UploadComponent.prototype.bucket;
    /** @type {?} */
    UploadComponent.prototype.fastUpload;
    /** @type {?} */
    UploadComponent.prototype.filter;
    /** @type {?} */
    UploadComponent.prototype.showUploadList;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype.bosClient;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype.isSupportWorker;
    /** @type {?} */
    UploadComponent.prototype.isLoading;
    /** @type {?} */
    UploadComponent.prototype.fileList;
    /** @type {?} */
    UploadComponent.prototype.fileListChange;
    /** @type {?} */
    UploadComponent.prototype.previewModal;
    /** @type {?} */
    UploadComponent.prototype.beforeUpload;
    /** @type {?} */
    UploadComponent.prototype.remove;
    /** @type {?} */
    UploadComponent.prototype.preview;
    /** @type {?} */
    UploadComponent.prototype.customRequest;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype._cdr;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype._uploadSrv;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UploadComponent],
                    imports: [CommonModule, NzUploadModule, NzModalModule, NzSpinModule, NzButtonModule],
                    exports: [UploadComponent],
                },] }
    ];
    return UploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UploadModule, UploadServiceToken, UploadComponent as ɵa };
//# sourceMappingURL=pUpload.js.map
