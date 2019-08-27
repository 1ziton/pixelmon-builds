/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @Description: 上传组件，默认使用百度baidubce的对象存储bos上传
 * Web端直传实践：https://cloud.baidu.com/doc/BOS/s/9jwvys8y7/
 * @Author: zomixi
 * @Date: 2019-07-22 15:44:37
 */
/**
 * @record
 */
export function BosConfig() { }
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
var /**
 * @abstract
 */
UploadServiceToken = /** @class */ (function () {
    function UploadServiceToken() {
    }
    return UploadServiceToken;
}());
/**
 * @abstract
 */
export { UploadServiceToken };
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
import { Component, Input, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { uuidv1 } from '@pixelmon/util';
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
            return new Subscription();
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
            this.showUploadList = tslib_1.__assign({}, this.showUploadList, { showPreviewIcon: value });
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
            this.showUploadList = tslib_1.__assign({}, this.showUploadList, { showPreviewIcon: value });
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
            file.uid = file.uid || uuidv1();
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
        function (file) { return (tslib_1.__assign({}, file, { thumbUrl: '' })); })));
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
        { type: Component, args: [{
                    selector: 'p-advancedUpload',
                    template: "<nz-upload\n  [nzAction]=\"action\"\n  [nzAccept]=\"accept\"\n  [nzListType]=\"listType\"\n  [(nzFileList)]=\"fileList\"\n  [nzShowButton]=\"showButton && fileList.length < maxLength\"\n  [nzFileType]=\"fileType\"\n  [nzShowUploadList]=\"showUploadList\"\n  [nzDirectory]=\"directory\"\n  [nzLimit]=\"limit\"\n  [nzSize]=\"size\"\n  [nzDisabled]=\"disabled || isLoading\"\n  [nzMultiple]=\"multiple\"\n  [nzPreview]=\"preview\"\n  [nzRemove]=\"remove\"\n  [nzFilter]=\"filter\"\n  [nzBeforeUpload]=\"beforeUpload\"\n  [nzCustomRequest]=\"customRequest\"\n  (nzFileListChange)=\"onFileListChange()\"\n  (nzChange)=\"onChange()\"\n>\n  <!-- \u81EA\u5B9A\u4E49content -->\n  <ng-template [ngIf]=\"customContent\" [ngIfElse]=\"defaultContent\">\n    <ng-container [ngTemplateOutlet]=\"customContent\"></ng-container>\n  </ng-template>\n\n  <!-- \u9ED8\u8BA4content -->\n  <ng-template #defaultContent>\n    <ng-container [ngSwitch]=\"listType\">\n      <ng-container *ngSwitchCase=\"'picture-card'\">\n        <i nz-icon nzType=\"plus\" class=\"upload-icon\"></i>\n        <div class=\"upload-text\">{{ placeholder }}</div>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button nz-button>\n          <i nz-icon nzType=\"upload\"></i>\n          <span>{{ placeholder }}</span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</nz-upload>\n\n<!-- \u9884\u89C8\u5F39\u6846 -->\n<nz-modal [(nzVisible)]=\"previewModal.visible\" [nzFooter]=\"null\" (nzOnCancel)=\"previewModal.visible = false\">\n  <img [src]=\"previewModal.image\" width=\"100%\" />\n</nz-modal>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: AdvancedUploadComponent,
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".upload-icon{color:#999;font-size:32px}.upload-text{margin-top:8px;color:#666}"]
                }] }
    ];
    /** @nocollapse */
    AdvancedUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: UploadServiceToken }
    ]; };
    AdvancedUploadComponent.propDecorators = {
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
    return AdvancedUploadComponent;
}());
export { AdvancedUploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1LyIsInNvdXJjZXMiOlsiYWR2YW5jZWQtdXBsb2FkL2FkdmFuY2VkLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQSwrQkFLQzs7O0lBSkMsNkJBQWlCOztJQUNqQix1QkFBVzs7SUFDWCx1QkFBVzs7SUFDWCxpQ0FBcUI7Ozs7O0FBR3ZCOzs7O0lBQUE7SUFJQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLHVDQUE4Qjs7SUFDOUIsdUNBQTJCOzs7OztJQUMzQix5REFBNEM7O0FBRzlDLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEM7SUFrSEUsaUNBQW9CLElBQXVCLEVBQVUsVUFBOEI7UUFBbkYsaUJBRUM7UUFGbUIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQXBHMUUsV0FBTSxHQUFHLDBDQUEwQyxDQUFDLENBQUMsMkZBQTJGOztRQUNoSixXQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUTs7UUFDckIsY0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLFlBQVk7O1FBQy9CLGFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPOztRQUN6QixVQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMscUNBQXFDOztRQUNoRCxTQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsc0JB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dUJBQXVCOzRCQUNwQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQXJCd0UsaUJBQWlCO2dCQTJIdkIsa0JBQWtCOzs7eUJBcEdsRixLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUVMLEtBQUs7NkJBQ0wsS0FBSzt5QkFFTCxLQUFLO2tDQVdMLEtBQUs7aUNBS0wsS0FBSzsrQkF5QkwsS0FBSzt5QkFHTCxLQUFLOzBCQUdMLEtBQUs7Z0NBT0wsS0FBSzs7SUFvSVIsOEJBQUM7Q0FBQSxBQXpORCxJQXlOQztTQTVNWSx1QkFBdUI7OztJQUNsQyx5Q0FBNkQ7O0lBQzdELHlDQUFxQjs7SUFDckIsNENBQTJCOztJQUMzQiwyQ0FBMEI7O0lBQzFCLHdDQUFtQjs7SUFDbkIsdUNBQWtCOztJQUNsQiwyQ0FBK0Q7O0lBQy9ELDJDQUF3RTs7SUFDeEUsMkNBQXlCOztJQUN6Qiw2Q0FBMkI7O0lBQzNCLDhDQUE0Qjs7SUFDNUIsZ0RBQXlDOztJQUN6Qyw0Q0FBOEI7O0lBRTlCLHlDQUEyQjs7SUFDM0IsNkNBQTJCOztJQUUzQix5Q0FRRTs7SUFhRixpREFJRTs7Ozs7SUFFRiw0Q0FBOEI7Ozs7O0lBQzlCLGtEQUFnQzs7SUFFaEMsNENBQWtCOztJQUNsQiwyQ0FBNEI7O0lBQzVCLGlEQUE4Qzs7SUFHOUMsK0NBR0U7O0lBR0YsK0NBQW1HOztJQUduRyx5Q0FBcUU7O0lBR3JFLDBDQUlFOztJQUdGLGdEQTJCRTs7Ozs7SUFFVSx1Q0FBK0I7Ozs7O0lBQUUsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBARGVzY3JpcHRpb246IOS4iuS8oOe7hOS7tu+8jOm7mOiupOS9v+eUqOeZvuW6pmJhaWR1YmNl55qE5a+56LGh5a2Y5YKoYm9z5LiK5LygXG4gKiBXZWLnq6/nm7TkvKDlrp7ot7XvvJpodHRwczovL2Nsb3VkLmJhaWR1LmNvbS9kb2MvQk9TL3MvOWp3dnlzOHk3L1xuICogQEF1dGhvcjogem9taXhpXG4gKiBARGF0ZTogMjAxOS0wNy0yMiAxNTo0NDozN1xuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9zQ29uZmlnIHtcbiAgZW5kcG9pbnQ6IHN0cmluZzsgLy8gQk9T5pyN5Yqh5Zmo55qE5Zyw5Z2AXG4gIGFrOiBzdHJpbmc7IC8vIFNUU+acjeWKoeWZqOS4i+WPkeeahOS4tOaXtmFrXG4gIHNrOiBzdHJpbmc7IC8vIFNUU+acjeWKoeWZqOS4i+WPkeeahOS4tOaXtnNrXG4gIHNlc3Npb25Ub2tlbjogc3RyaW5nOyAvLyBTVFPmnI3liqHlmajkuIvlj5HnmoRzZXNzaW9uVG9rZW5cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVwbG9hZFNlcnZpY2VUb2tlbiB7XG4gIGFic3RyYWN0IGJvc0NvbmZpZzogQm9zQ29uZmlnOyAvLyDnmb7luqZib3PkuIrkvKDnmoTorr7nva7lj4LmlbBcbiAgYWJzdHJhY3Qgd29ya2VyVXJsOiBzdHJpbmc7IC8vIFdvcmtlcueahOWcsOWdgFxuICBhYnN0cmFjdCBnZXRDb25maWcoKTogT2JzZXJ2YWJsZTxCb3NDb25maWc+OyAvLyDojrflj5Z0b2tlbueahOmAu+i+kVxufVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVwbG9hZEZpbGUsIFVwbG9hZFhIUkFyZ3MsIFVwbG9hZEZpbHRlciB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdXVpZHYxIH0gZnJvbSAnQHBpeGVsbW9uL3V0aWwnO1xuXG5kZWNsYXJlIGNvbnN0IGJhaWR1YmNlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtYWR2YW5jZWRVcGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWR2YW5jZWQtdXBsb2FkLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IEFkdmFuY2VkVXBsb2FkQ29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGFjY2VwdCA9ICdpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYsaW1hZ2UvYm1wJzsgLy8g5o6l5Y+X5LiK5Lyg55qE5paH5Lu257G75Z6LLCDor6bop4FodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQvZmlsZSNhY2NlcHRcbiAgQElucHV0KCkgYWN0aW9uID0gJyc7IC8vIOS4iuS8oOeahOWcsOWdgFxuICBASW5wdXQoKSBkaXJlY3RvcnkgPSBmYWxzZTsgLy8g5piv5ZCm5pSv5oyB5LiK5Lyg5paH5Lu25aS5XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7IC8vIOaYr+WQpuemgeeUqFxuICBASW5wdXQoKSBsaW1pdCA9IDk7IC8vIOmZkOWItuWNleasoeacgOWkmuS4iuS8oOaVsOmHj++8jG56TXVsdGlwbGUg5omT5byA5pe25pyJ5pWI77ybMCDooajnpLrkuI3pmZBcbiAgQElucHV0KCkgc2l6ZSA9IDA7IC8vIOmZkOWItuaWh+S7tuWkp+Wwj++8jOWNleS9je+8mktC77ybMCDooajnpLrkuI3pmZBcbiAgQElucHV0KCkgZmlsZVR5cGUgPSAnaW1hZ2UvcG5nLGltYWdlL2pwZWcsaW1hZ2UvZ2lmLGltYWdlL2JtcCc7IC8vIOmZkOWItuaWh+S7tuexu+Wei++8jOS+i+Wmgu+8mmltYWdlL3BuZyxpbWFnZS9qcGVnLGltYWdlL2dpZixpbWFnZS9ibXBcbiAgQElucHV0KCkgbGlzdFR5cGU6ICd0ZXh0JyB8ICdwaWN0dXJlJyB8ICdwaWN0dXJlLWNhcmQnID0gJ3BpY3R1cmUtY2FyZCc7IC8vIOS4iuS8oOWIl+ihqOeahOWGheW7uuagt+W8j++8jOaUr+aMgeS4ieenjeWfuuacrOagt+W8j1xuICBASW5wdXQoKSBtdWx0aXBsZSA9IHRydWU7IC8vIOaYr+WQpuaUr+aMgeWkmumAieaWh+S7tu+8jGllMTArIOaUr+aMgVxuICBASW5wdXQoKSBzaG93QnV0dG9uID0gdHJ1ZTsgLy8g5piv5ZCm5bGV56S65LiK5Lyg5oyJ6ZKuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ+S4iuS8oCc7IC8vIOWNoOS9jeaPkOekuuivrVxuICBASW5wdXQoKSBjdXN0b21Db250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+OyAvLyDoh6rlrprkuYljb250ZW50XG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IEluZmluaXR5OyAvLyDmnIDlpJrkuIrkvKDmlbBcblxuICBASW5wdXQoKSBidWNrZXQgPSAnYnVja2V0JzsgLy8g55m+5bqmQk9T5LiK55qE5ZG95ZCN56m66Ze0XG4gIEBJbnB1dCgpIGZhc3RVcGxvYWQgPSB0cnVlOyAvLyDmmK/lkKbkvb/nlKjlv6vkvKBcblxuICBASW5wdXQoKSBmaWx0ZXI6IFVwbG9hZEZpbHRlcltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdtYXhMZW5ndGgnLFxuICAgICAgZm46IGZpbGVMaXN0ID0+IHtcbiAgICAgICAgLy8g6ZmQ5Yi25pyA5aSn5LiK5Lyg5pWw6YePXG4gICAgICAgIHJldHVybiBmaWxlTGlzdC5zbGljZSgwLCB0aGlzLm1heExlbmd0aCAtIHRoaXMuZmlsZUxpc3QubGVuZ3RoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICAvLyDmmK/lkKbmmL7npLrpooTop4jlm77moIdcbiAgQElucHV0KCkgc2V0IHNob3dQcmV2aWV3SWNvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd1VwbG9hZExpc3QgPSB7IC4uLnRoaXMuc2hvd1VwbG9hZExpc3QsIHNob3dQcmV2aWV3SWNvbjogdmFsdWUgfTtcbiAgfVxuXG4gIC8vIOaYr+WQpuaYvuekuuWIoOmZpOWbvuagh1xuICBASW5wdXQoKSBzZXQgc2hvd1JlbW92ZUljb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dVcGxvYWRMaXN0ID0geyAuLi50aGlzLnNob3dVcGxvYWRMaXN0LCBzaG93UHJldmlld0ljb246IHZhbHVlIH07XG4gIH1cblxuICAvLyDmmK/lkKbmmL7npLrpooTop4jlm77moIflkozliKDpmaTlm77moIdcbiAgc2hvd1VwbG9hZExpc3QgPSB7XG4gICAgc2hvd1ByZXZpZXdJY29uOiB0cnVlLFxuICAgIHNob3dSZW1vdmVJY29uOiB0cnVlLFxuICAgIGhpZGVQcmV2aWV3SWNvbkluTm9uSW1hZ2U6IHRydWUsIC8vIOS4jeaYr+WbvueJh+aXtumakOiXj+mihOiniOWbvuagh1xuICB9O1xuXG4gIHByaXZhdGUgYm9zQ2xpZW50OiBhbnkgPSBudWxsOyAvLyDnmb7luqbkuIrkvKDlrqLmiLfnq69cbiAgcHJpdmF0ZSBpc1N1cHBvcnRXb3JrZXIgPSBmYWxzZTsgLy8g5rWP6KeI5Zmo5piv5ZCm5pSv5oyBV29ya2VyXG5cbiAgaXNMb2FkaW5nID0gZmFsc2U7IC8vIOeZvuW6puS4iuS8oOWuouaIt+err+WIneWni+WMluS4rVxuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107IC8vIOaWh+S7tuWIl+ihqO+8jOe7keWumkNvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gIGZpbGVMaXN0Q2hhbmdlOiAoZmlsZXM6IFVwbG9hZEZpbGVbXSkgPT4gdm9pZDsgLy8g5paH5Lu25YiX6KGo5pS55Y+Y77yM57uR5a6aQ29udHJvbFZhbHVlQWNjZXNzb3JcblxuICAvLyDpooTop4htb2RhbOWPguaVsOWvueixoVxuICBwcmV2aWV3TW9kYWwgPSB7XG4gICAgdmlzaWJsZTogZmFsc2UsIC8vIOaYr+WQpuaYvuekuumihOiniG1vZGFsXG4gICAgaW1hZ2U6ICcnLCAvLyDpooTop4jlm77niYdcbiAgfTtcblxuICAvLyDkuIrkvKDmlofku7bkuYvliY3nmoTpkqnlrZAs6Iul6L+U5ZueIGZhbHNlIOWImeWBnOatouS4iuS8oOOAguazqOaEj++8muWKoeW/heS9v+eUqCA9PiDlrprkuYnlpITnkIbmlrnms5VcbiAgQElucHV0KCkgYmVmb3JlVXBsb2FkOiAoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLy8g54K55Ye756e76Zmk5paH5Lu25pe255qE5Zue6LCD77yM6L+U5Zue5YC85Li6IGZhbHNlIOaXtuS4jeenu+mZpOOAguazqOaEj++8muWKoeW/heS9v+eUqCA9PiDlrprkuYnlpITnkIbmlrnms5XjgIJcbiAgQElucHV0KCkgcmVtb3ZlOiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLy8g54K55Ye75paH5Lu26ZO+5o6l5oiW6aKE6KeI5Zu+5qCH5pe255qE5Zue6LCD77yb5rOo5oSP77ya5Yqh5b+F5L2/55SoID0+IOWumuS5ieWkhOeQhuaWueazlVxuICBASW5wdXQoKSBwcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZCA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgdGhpcy5wcmV2aWV3TW9kYWwuaW1hZ2UgPSBmaWxlLnVybCEgfHwgZmlsZS50aHVtYlVybCE7XG4gICAgdGhpcy5wcmV2aWV3TW9kYWwudmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfTtcblxuICAvLyDpgJrov4fopobnm5bpu5jorqTnmoTkuIrkvKDooYzkuLrvvIzlj6/ku6Xoh6rlrprkuYnoh6rlt7HnmoTkuIrkvKDlrp7njrDvvJvms6jmhI/vvJrliqHlv4Xkvb/nlKggPT4g5a6a5LmJ5aSE55CG5pa55rOVXG4gIEBJbnB1dCgpIGN1c3RvbVJlcXVlc3Q6IChzdWJqZWN0OiBVcGxvYWRYSFJBcmdzKSA9PiBTdWJzY3JpcHRpb24gPSB1cGxvYWRTdWJqZWN0ID0+IHtcbiAgICBjb25zdCB1cGxvYWRGaWxlID0gdXBsb2FkU3ViamVjdC5maWxlO1xuXG4gICAgLy8gdXBsb2FkS2V555So5LqO5qCH6K+G5paH5Lu25ZSv5LiA5oCn77yM5aaC5p6c6YeN5aSNUHV05ZCM5LiA5Liqa2V555qET2JqZWN077yM5LmL5YmN5LiK5Lyg55qE5pWw5o2u5bCG6KKr6KaG55uWXG4gICAgdGhpcy5nZXRVcGxvYWRLZXkodXBsb2FkRmlsZSkudGhlbih1cGxvYWRLZXkgPT4ge1xuICAgICAgLy8g5bCd6K+V56eS5LygXG4gICAgICBpZiAodGhpcy5pc1N1cHBvcnRXb3JrZXIgJiYgdGhpcy5mYXN0VXBsb2FkKSB7XG4gICAgICAgIC8vIOWFiOeUqEhFQUTor7fmsYLmoLnmja5rZXnliKTmlq3mmK/lkKblt7LkuIrkvKDov4for6Xmlofku7ZcbiAgICAgICAgdGhpcy5ib3NDbGllbnRcbiAgICAgICAgICAuZ2V0T2JqZWN0TWV0YWRhdGEodGhpcy5idWNrZXQsIHVwbG9hZEtleSlcbiAgICAgICAgICAudGhlbihldmVudCA9PiB7XG4gICAgICAgICAgICAvLyDkuIrkvKDov4fkuobvvIznm7TmjqXlm57mmL5cbiAgICAgICAgICAgIHVwbG9hZEZpbGUudXJsID0gYCR7dGhpcy5ib3NDbGllbnQuY29uZmlnLmVuZHBvaW50fS92MS8ke3RoaXMuYnVja2V0fS8ke3VwbG9hZEtleX1gO1xuICAgICAgICAgICAgdXBsb2FkU3ViamVjdC5vblN1Y2Nlc3MhKCfkuIrkvKDmiJDlip8nLCB1cGxvYWRGaWxlLCBldmVudCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICAvLyDmsqHmnInkuIrkvKDov4fvvIzkvb/nlKjnmb7luqZib3Pnm7TkvKBcbiAgICAgICAgICAgICgpID0+IHRoaXMuYm9zVXBsb2FkKHVwbG9hZFN1YmplY3QsIHRoaXMuYnVja2V0LCB1cGxvYWRLZXksIHVwbG9hZEZpbGUpLFxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDnmb7luqZib3Pnm7TkvKBcbiAgICAgICAgdGhpcy5ib3NVcGxvYWQodXBsb2FkU3ViamVjdCwgdGhpcy5idWNrZXQsIHVwbG9hZEtleSwgdXBsb2FkRmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBaT1JST+imgeaxgui/lOWbnuS4gOS4qlN1YnNjcmlwdGlvblxuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfdXBsb2FkU3J2OiBVcGxvYWRTZXJ2aWNlVG9rZW4pIHtcbiAgICB0aGlzLmluaXRCb3NDbGllbnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIOWIpOaWreaYr+WQpuaUr+aMgVdvcmtlclxuICAgIGlmICh0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5pc1N1cHBvcnRXb3JrZXIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5mYXN0VXBsb2FkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+a1j+iniOWZqOS4jeaUr+aMgVdvcmtlcu+8jOaXoOazleS9v+eUqOW/q+S8oO+8gScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmZpbGVMaXN0ID0gdmFsdWUgfHwgW107XG4gICAgdGhpcy5maWxlTGlzdC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS51aWQgPSBmaWxlLnVpZCB8fCB1dWlkdjEoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpOyAvLyBmb3IgaXNzdWXvvJpodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDgxNlxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5maWxlTGlzdENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoKSB7fVxuXG4gIC8vIOWIneWni+WMlueZvuW6puS4iuS8oOWuouaIt+err1xuICBpbml0Qm9zQ2xpZW50KCkge1xuICAgIGlmICh0aGlzLl91cGxvYWRTcnYuZ2V0Q29uZmlnKCkpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3VwbG9hZFNydi5nZXRDb25maWcoKSEuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG4gICAgICAgIHRoaXMuYm9zQ2xpZW50ID0gbmV3IGJhaWR1YmNlLnNkay5Cb3NDbGllbnQoe1xuICAgICAgICAgIGVuZHBvaW50OiBjb25maWcuZW5kcG9pbnQsXG4gICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgIGFrOiBjb25maWcuYWssXG4gICAgICAgICAgICBzazogY29uZmlnLnNrLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Vzc2lvblRva2VuOiBjb25maWcuc2Vzc2lvblRva2VuLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFVwbG9hZEtleShmaWxlOiBVcGxvYWRGaWxlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAvLyDkvb/nlKhXb3JrZXJcbiAgICAgIGlmICh0aGlzLmlzU3VwcG9ydFdvcmtlciAmJiB0aGlzLmZhc3RVcGxvYWQpIHtcbiAgICAgICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcih0aGlzLl91cGxvYWRTcnYud29ya2VyVXJsKTtcblxuICAgICAgICB3b3JrZXIub25lcnJvciA9IGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdXb3JrZXLlvILluLjvvIzlt7LlhbPpl63vvIEnLCBlcnJvcik7XG4gICAgICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShmaWxlKTtcblxuICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gZXZlbnQgPT4ge1xuICAgICAgICAgIC8vIOS9v+eUqOaWh+S7tm1kNSvmnIDlkI7kv67mlLnml7bpl7Qr5paH5Lu25aSn5bCPK+aWh+S7tuWQjeadpeS/neivgeWUr+S4gOaAp++8jOWQjOaXtuebuOWQjOeahOaWh+S7tueahGtleeS5n+S8muebuOWQjCznlKjkuo7np5LkvKBcbiAgICAgICAgICBjb25zdCBrZXkgPSBgJHtldmVudC5kYXRhfSR7ZmlsZS5sYXN0TW9kaWZpZWR9JHtmaWxlLnNpemV9JHtmaWxlLm5hbWV9YDtcbiAgICAgICAgICByZXNvbHZlKGtleSk7XG4gICAgICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5LiN5L2/55SoV29ya2VyXG4gICAgICAgIC8vIOS9v+eUqOW9k+WJjeaXtumXtCvlm5vkvY3pmo/mnLrnoIEr5pyA5ZCO5L+u5pS55pe26Ze0K+aWh+S7tuWkp+Wwjyvmlofku7blkI3mnaXkv53or4HllK/kuIDmgKfvvIzmraTml7blm6DkuLrnm7jlkIzmlofku7ZrZXnkuZ/kvJrkuI3lkIzvvIzmlYXlrp7njrDkuI3kuobnp5LkvKBcbiAgICAgICAgY29uc3QgcmFuZG9tID0gYCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9JHsoTWF0aC5yYW5kb20oKSAqIDEwMDAwKS50b0ZpeGVkKDApfWA7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3JhbmRvbX0ke2ZpbGUubGFzdE1vZGlmaWVkfSR7ZmlsZS5zaXplfSR7ZmlsZS5uYW1lfWA7XG4gICAgICAgIHJlc29sdmUoa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIOS9v+eUqOeZvuW6pmJvc+ebtOS8oFxuICBib3NVcGxvYWQodXBsb2FkU3ViamVjdDogVXBsb2FkWEhSQXJncywgYnVja2V0OiBzdHJpbmcsIHVwbG9hZEtleTogc3RyaW5nLCB1cGxvYWRGaWxlOiBVcGxvYWRGaWxlKSB7XG4gICAgdGhpcy5ib3NDbGllbnRcbiAgICAgIC5wdXRPYmplY3RGcm9tQmxvYihidWNrZXQsIHVwbG9hZEtleSwgdXBsb2FkRmlsZSlcbiAgICAgIC50aGVuKChldmVudDogSHR0cFJlc3BvbnNlPHt9PikgPT4ge1xuICAgICAgICB1cGxvYWRGaWxlLnVybCA9IGAke3RoaXMuYm9zQ2xpZW50LmNvbmZpZy5lbmRwb2ludH0vdjEvJHtidWNrZXR9LyR7dXBsb2FkS2V5fWA7XG4gICAgICAgIHVwbG9hZFN1YmplY3Qub25TdWNjZXNzISgn5LiK5Lyg5oiQ5YqfJywgdXBsb2FkRmlsZSwgZXZlbnQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXZlbnQ6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHVwbG9hZFN1YmplY3Qub25FcnJvciEoZXZlbnQsIHVwbG9hZEZpbGUpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkZpbGVMaXN0Q2hhbmdlKCkge1xuICAgIC8vIOWOu+mZpOe8qeeVpeWbvu+8jOWboOS4uue8qeeVpeWbvuWkquWkpyzopoHmmK/lpJbpg6jkuI3lpITnkIbkvJrlvbHlk41IdHRw6K+35rGC6YCf5bqmXG4gICAgdGhpcy5maWxlTGlzdENoYW5nZSh0aGlzLmZpbGVMaXN0Lm1hcChmaWxlID0+ICh7IC4uLmZpbGUsIHRodW1iVXJsOiAnJyB9KSkpO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICAvLyDotYvlgLx1cmxcbiAgICB0aGlzLmZpbGVMaXN0LmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBmaWxlLnVybCA9IGZpbGUudXJsIHx8IChmaWxlLm9yaWdpbkZpbGVPYmogJiYgKGZpbGUub3JpZ2luRmlsZU9iaiBhcyBhbnkpLnVybCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbkZpbGVMaXN0Q2hhbmdlKCk7XG4gIH1cbn1cbiJdfQ==