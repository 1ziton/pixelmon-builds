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
import { Component, Input, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { uuidv1 } from '@pixelmon/util';
import { UploadServiceToken } from './upload-interface';
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
            this.showUploadList = tslib_1.__assign({}, this.showUploadList, { showPreviewIcon: value });
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
            this.showUploadList = tslib_1.__assign({}, this.showUploadList, { showPreviewIcon: value });
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
        function (file) { return (tslib_1.__assign({}, file, { thumbUrl: '' })); })));
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
export { UploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L3VwbG9hZC8iLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEgsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXhEO0lBbUhFLHlCQUFvQixJQUF1QixFQUFVLFVBQThCO1FBQW5GLGlCQUVDO1FBRm1CLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFwRzFFLFdBQU0sR0FBRywwQ0FBMEMsQ0FBQyxDQUFDLDJGQUEyRjs7UUFDaEosV0FBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVE7O1FBQ3JCLGNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxZQUFZOztRQUMvQixhQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTzs7UUFDekIsVUFBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFDQUFxQzs7UUFDaEQsU0FBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjs7UUFDaEMsYUFBUSxHQUFHLDBDQUEwQyxDQUFDLENBQUMscURBQXFEOztRQUM1RyxhQUFRLEdBQXdDLGNBQWMsQ0FBQyxDQUFDLHFCQUFxQjs7UUFDckYsYUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLG9CQUFvQjs7UUFDckMsZUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLFdB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NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUVMLEtBQUs7NkJBQ0wsS0FBSzt5QkFFTCxLQUFLO2tDQVdMLEtBQUs7aUNBS0wsS0FBSzsrQkF5QkwsS0FBSzt5QkFHTCxLQUFLOzBCQUdMLEtBQUs7Z0NBT0wsS0FBSzs7SUFvSVIsc0JBQUM7Q0FBQSxBQTFORCxJQTBOQztTQTVNWSxlQUFlOzs7SUFDMUIsaUNBQTZEOztJQUM3RCxpQ0FBcUI7O0lBQ3JCLG9DQUEyQjs7SUFDM0IsbUNBQTBCOztJQUMxQixnQ0FBbUI7O0lBQ25CLCtCQUFrQjs7SUFDbEIsbUNBQStEOztJQUMvRCxtQ0FBd0U7O0lBQ3hFLG1DQUF5Qjs7SUFDekIscUNBQTJCOztJQUMzQixzQ0FBNEI7O0lBQzVCLHdDQUF5Qzs7SUFDekMsb0NBQThCOztJQUU5QixpQ0FBMkI7O0lBQzNCLHFDQUEyQjs7SUFFM0IsaUNBUUU7O0lBYUYseUNBSUU7Ozs7O0lBRUYsb0NBQThCOzs7OztJQUM5QiwwQ0FBZ0M7O0lBRWhDLG9DQUFrQjs7SUFDbEIsbUNBQTRCOztJQUM1Qix5Q0FBOEM7O0lBRzlDLHVDQUdFOztJQUdGLHVDQUFtRzs7SUFHbkcsaUNBQXFFOztJQUdyRSxrQ0FJRTs7SUFHRix3Q0EyQkU7Ozs7O0lBRVUsK0JBQStCOzs7OztJQUFFLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlc2NyaXB0aW9uOiDkuIrkvKDnu4Tku7bvvIzpu5jorqTkvb/nlKjnmb7luqZiYWlkdWJjZeeahOWvueixoeWtmOWCqGJvc+S4iuS8oFxuICogV2Vi56uv55u05Lyg5a6e6Le177yaaHR0cHM6Ly9jbG91ZC5iYWlkdS5jb20vZG9jL0JPUy9zLzlqd3Z5czh5Ny9cbiAqIEBBdXRob3I6IHpvbWl4aVxuICogQERhdGU6IDIwMTktMDctMjIgMTU6NDQ6MzdcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVwbG9hZEZpbGUsIFVwbG9hZFhIUkFyZ3MsIFVwbG9hZEZpbHRlciB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdXVpZHYxIH0gZnJvbSAnQHBpeGVsbW9uL3V0aWwnO1xuaW1wb3J0IHsgVXBsb2FkU2VydmljZVRva2VuIH0gZnJvbSAnLi91cGxvYWQtaW50ZXJmYWNlJztcblxuZGVjbGFyZSBjb25zdCBiYWlkdWJjZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLXVwbG9hZCcsXG4gIGV4cG9ydEFzOiAncFVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogVXBsb2FkQ29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSBhY2NlcHQgPSAnaW1hZ2UvcG5nLGltYWdlL2pwZWcsaW1hZ2UvZ2lmLGltYWdlL2JtcCc7IC8vIOaOpeWPl+S4iuS8oOeahOaWh+S7tuexu+Weiywg6K+m6KeBaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0L2ZpbGUjYWNjZXB0XG4gIEBJbnB1dCgpIGFjdGlvbiA9ICcnOyAvLyDkuIrkvKDnmoTlnLDlnYBcbiAgQElucHV0KCkgZGlyZWN0b3J5ID0gZmFsc2U7IC8vIOaYr+WQpuaUr+aMgeS4iuS8oOaWh+S7tuWkuVxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlOyAvLyDmmK/lkKbnpoHnlKhcbiAgQElucHV0KCkgbGltaXQgPSA5OyAvLyDpmZDliLbljZXmrKHmnIDlpJrkuIrkvKDmlbDph4/vvIxuek11bHRpcGxlIOaJk+W8gOaXtuacieaViO+8mzAg6KGo56S65LiN6ZmQXG4gIEBJbnB1dCgpIHNpemUgPSAwOyAvLyDpmZDliLbmlofku7blpKflsI/vvIzljZXkvY3vvJpLQu+8mzAg6KGo56S65LiN6ZmQXG4gIEBJbnB1dCgpIGZpbGVUeXBlID0gJ2ltYWdlL3BuZyxpbWFnZS9qcGVnLGltYWdlL2dpZixpbWFnZS9ibXAnOyAvLyDpmZDliLbmlofku7bnsbvlnovvvIzkvovlpoLvvJppbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYsaW1hZ2UvYm1wXG4gIEBJbnB1dCgpIGxpc3RUeXBlOiAndGV4dCcgfCAncGljdHVyZScgfCAncGljdHVyZS1jYXJkJyA9ICdwaWN0dXJlLWNhcmQnOyAvLyDkuIrkvKDliJfooajnmoTlhoXlu7rmoLflvI/vvIzmlK/mjIHkuInnp43ln7rmnKzmoLflvI9cbiAgQElucHV0KCkgbXVsdGlwbGUgPSB0cnVlOyAvLyDmmK/lkKbmlK/mjIHlpJrpgInmlofku7bvvIxpZTEwKyDmlK/mjIFcbiAgQElucHV0KCkgc2hvd0J1dHRvbiA9IHRydWU7IC8vIOaYr+WQpuWxleekuuS4iuS8oOaMiemSrlxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICfkuIrkvKAnOyAvLyDljaDkvY3mj5DnpLror61cbiAgQElucHV0KCkgY3VzdG9tQ29udGVudDogVGVtcGxhdGVSZWY8YW55PjsgLy8g6Ieq5a6a5LmJY29udGVudFxuICBASW5wdXQoKSBtYXhMZW5ndGggPSBJbmZpbml0eTsgLy8g5pyA5aSa5LiK5Lyg5pWwXG5cbiAgQElucHV0KCkgYnVja2V0ID0gJ2J1Y2tldCc7IC8vIOeZvuW6pkJPU+S4iueahOWRveWQjeepuumXtFxuICBASW5wdXQoKSBmYXN0VXBsb2FkID0gdHJ1ZTsgLy8g5piv5ZCm5L2/55So5b+r5LygXG5cbiAgQElucHV0KCkgZmlsdGVyOiBVcGxvYWRGaWx0ZXJbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnbWF4TGVuZ3RoJyxcbiAgICAgIGZuOiBmaWxlTGlzdCA9PiB7XG4gICAgICAgIC8vIOmZkOWItuacgOWkp+S4iuS8oOaVsOmHj1xuICAgICAgICByZXR1cm4gZmlsZUxpc3Quc2xpY2UoMCwgdGhpcy5tYXhMZW5ndGggLSB0aGlzLmZpbGVMaXN0Lmxlbmd0aCk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgLy8g5piv5ZCm5pi+56S66aKE6KeI5Zu+5qCHXG4gIEBJbnB1dCgpIHNldCBzaG93UHJldmlld0ljb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dVcGxvYWRMaXN0ID0geyAuLi50aGlzLnNob3dVcGxvYWRMaXN0LCBzaG93UHJldmlld0ljb246IHZhbHVlIH07XG4gIH1cblxuICAvLyDmmK/lkKbmmL7npLrliKDpmaTlm77moIdcbiAgQElucHV0KCkgc2V0IHNob3dSZW1vdmVJY29uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93VXBsb2FkTGlzdCA9IHsgLi4udGhpcy5zaG93VXBsb2FkTGlzdCwgc2hvd1ByZXZpZXdJY29uOiB2YWx1ZSB9O1xuICB9XG5cbiAgLy8g5piv5ZCm5pi+56S66aKE6KeI5Zu+5qCH5ZKM5Yig6Zmk5Zu+5qCHXG4gIHNob3dVcGxvYWRMaXN0ID0ge1xuICAgIHNob3dQcmV2aWV3SWNvbjogdHJ1ZSxcbiAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcbiAgICBoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlOiB0cnVlLCAvLyDkuI3mmK/lm77niYfml7bpmpDol4/pooTop4jlm77moIdcbiAgfTtcblxuICBwcml2YXRlIGJvc0NsaWVudDogYW55ID0gbnVsbDsgLy8g55m+5bqm5LiK5Lyg5a6i5oi356uvXG4gIHByaXZhdGUgaXNTdXBwb3J0V29ya2VyID0gZmFsc2U7IC8vIOa1j+iniOWZqOaYr+WQpuaUr+aMgVdvcmtlclxuXG4gIGlzTG9hZGluZyA9IGZhbHNlOyAvLyDnmb7luqbkuIrkvKDlrqLmiLfnq6/liJ3lp4vljJbkuK1cbiAgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdOyAvLyDmlofku7bliJfooajvvIznu5HlrppDb250cm9sVmFsdWVBY2Nlc3NvclxuICBmaWxlTGlzdENoYW5nZTogKGZpbGVzOiBVcGxvYWRGaWxlW10pID0+IHZvaWQ7IC8vIOaWh+S7tuWIl+ihqOaUueWPmO+8jOe7keWumkNvbnRyb2xWYWx1ZUFjY2Vzc29yXG5cbiAgLy8g6aKE6KeIbW9kYWzlj4LmlbDlr7nosaFcbiAgcHJldmlld01vZGFsID0ge1xuICAgIHZpc2libGU6IGZhbHNlLCAvLyDmmK/lkKbmmL7npLrpooTop4htb2RhbFxuICAgIGltYWdlOiAnJywgLy8g6aKE6KeI5Zu+54mHXG4gIH07XG5cbiAgLy8g5LiK5Lyg5paH5Lu25LmL5YmN55qE6ZKp5a2QLOiLpei/lOWbniBmYWxzZSDliJnlgZzmraLkuIrkvKDjgILms6jmhI/vvJrliqHlv4Xkvb/nlKggPT4g5a6a5LmJ5aSE55CG5pa55rOVXG4gIEBJbnB1dCgpIGJlZm9yZVVwbG9hZDogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8vIOeCueWHu+enu+mZpOaWh+S7tuaXtueahOWbnuiwg++8jOi/lOWbnuWAvOS4uiBmYWxzZSDml7bkuI3np7vpmaTjgILms6jmhI/vvJrliqHlv4Xkvb/nlKggPT4g5a6a5LmJ5aSE55CG5pa55rOV44CCXG4gIEBJbnB1dCgpIHJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8vIOeCueWHu+aWh+S7tumTvuaOpeaIlumihOiniOWbvuagh+aXtueahOWbnuiwg++8m+azqOaEj++8muWKoeW/heS9v+eUqCA9PiDlrprkuYnlpITnkIbmlrnms5VcbiAgQElucHV0KCkgcHJldmlldzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQgPSAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xuICAgIHRoaXMucHJldmlld01vZGFsLmltYWdlID0gZmlsZS51cmwhIHx8IGZpbGUudGh1bWJVcmwhO1xuICAgIHRoaXMucHJldmlld01vZGFsLnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH07XG5cbiAgLy8g6YCa6L+H6KaG55uW6buY6K6k55qE5LiK5Lyg6KGM5Li677yM5Y+v5Lul6Ieq5a6a5LmJ6Ieq5bex55qE5LiK5Lyg5a6e546w77yb5rOo5oSP77ya5Yqh5b+F5L2/55SoID0+IOWumuS5ieWkhOeQhuaWueazlVxuICBASW5wdXQoKSBjdXN0b21SZXF1ZXN0OiAoc3ViamVjdDogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uID0gdXBsb2FkU3ViamVjdCA9PiB7XG4gICAgY29uc3QgdXBsb2FkRmlsZSA9IHVwbG9hZFN1YmplY3QuZmlsZTtcblxuICAgIC8vIHVwbG9hZEtleeeUqOS6juagh+ivhuaWh+S7tuWUr+S4gOaAp++8jOWmguaenOmHjeWkjVB1dOWQjOS4gOS4qmtleeeahE9iamVjdO+8jOS5i+WJjeS4iuS8oOeahOaVsOaNruWwhuiiq+imhuebllxuICAgIHRoaXMuZ2V0VXBsb2FkS2V5KHVwbG9hZEZpbGUpLnRoZW4odXBsb2FkS2V5ID0+IHtcbiAgICAgIC8vIOWwneivleenkuS8oFxuICAgICAgaWYgKHRoaXMuaXNTdXBwb3J0V29ya2VyICYmIHRoaXMuZmFzdFVwbG9hZCkge1xuICAgICAgICAvLyDlhYjnlKhIRUFE6K+35rGC5qC55o2ua2V55Yik5pat5piv5ZCm5bey5LiK5Lyg6L+H6K+l5paH5Lu2XG4gICAgICAgIHRoaXMuYm9zQ2xpZW50XG4gICAgICAgICAgLmdldE9iamVjdE1ldGFkYXRhKHRoaXMuYnVja2V0LCB1cGxvYWRLZXkpXG4gICAgICAgICAgLnRoZW4oZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8g5LiK5Lyg6L+H5LqG77yM55u05o6l5Zue5pi+XG4gICAgICAgICAgICB1cGxvYWRGaWxlLnVybCA9IGAke3RoaXMuYm9zQ2xpZW50LmNvbmZpZy5lbmRwb2ludH0vdjEvJHt0aGlzLmJ1Y2tldH0vJHt1cGxvYWRLZXl9YDtcbiAgICAgICAgICAgIHVwbG9hZFN1YmplY3Qub25TdWNjZXNzISgn5LiK5Lyg5oiQ5YqfJywgdXBsb2FkRmlsZSwgZXZlbnQpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgLy8g5rKh5pyJ5LiK5Lyg6L+H77yM5L2/55So55m+5bqmYm9z55u05LygXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmJvc1VwbG9hZCh1cGxvYWRTdWJqZWN0LCB0aGlzLmJ1Y2tldCwgdXBsb2FkS2V5LCB1cGxvYWRGaWxlKSxcbiAgICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g55m+5bqmYm9z55u05LygXG4gICAgICAgIHRoaXMuYm9zVXBsb2FkKHVwbG9hZFN1YmplY3QsIHRoaXMuYnVja2V0LCB1cGxvYWRLZXksIHVwbG9hZEZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gWk9SUk/opoHmsYLov5Tlm57kuIDkuKpTdWJzY3JpcHRpb25cbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbigpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX3VwbG9hZFNydjogVXBsb2FkU2VydmljZVRva2VuKSB7XG4gICAgdGhpcy5pbml0Qm9zQ2xpZW50KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyDliKTmlq3mmK/lkKbmlK/mjIFXb3JrZXJcbiAgICBpZiAodHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuaXNTdXBwb3J0V29ya2VyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZmFzdFVwbG9hZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfmtY/op4jlmajkuI3mlK/mjIFXb3JrZXLvvIzml6Dms5Xkvb/nlKjlv6vkvKDvvIEnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5maWxlTGlzdCA9IHZhbHVlIHx8IFtdO1xuICAgIHRoaXMuZmlsZUxpc3QuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgIGZpbGUudWlkID0gZmlsZS51aWQgfHwgdXVpZHYxKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTsgLy8gZm9yIGlzc3Vl77yaaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4MTZcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMuZmlsZUxpc3RDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKCkge31cblxuICAvLyDliJ3lp4vljJbnmb7luqbkuIrkvKDlrqLmiLfnq69cbiAgaW5pdEJvc0NsaWVudCgpIHtcbiAgICBpZiAodGhpcy5fdXBsb2FkU3J2LmdldENvbmZpZygpKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl91cGxvYWRTcnYuZ2V0Q29uZmlnKCkhLnN1YnNjcmliZShjb25maWcgPT4ge1xuICAgICAgICB0aGlzLmJvc0NsaWVudCA9IG5ldyBiYWlkdWJjZS5zZGsuQm9zQ2xpZW50KHtcbiAgICAgICAgICBlbmRwb2ludDogY29uZmlnLmVuZHBvaW50LFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICBhazogY29uZmlnLmFrLFxuICAgICAgICAgICAgc2s6IGNvbmZpZy5zayxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlc3Npb25Ub2tlbjogY29uZmlnLnNlc3Npb25Ub2tlbixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRVcGxvYWRLZXkoZmlsZTogVXBsb2FkRmlsZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgLy8g5L2/55SoV29ya2VyXG4gICAgICBpZiAodGhpcy5pc1N1cHBvcnRXb3JrZXIgJiYgdGhpcy5mYXN0VXBsb2FkKSB7XG4gICAgICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIodGhpcy5fdXBsb2FkU3J2LndvcmtlclVybCk7XG5cbiAgICAgICAgd29ya2VyLm9uZXJyb3IgPSBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignV29ya2Vy5byC5bi477yM5bey5YWz6Zet77yBJywgZXJyb3IpO1xuICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZmlsZSk7XG5cbiAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAvLyDkvb/nlKjmlofku7ZtZDUr5pyA5ZCO5L+u5pS55pe26Ze0K+aWh+S7tuWkp+Wwjyvmlofku7blkI3mnaXkv53or4HllK/kuIDmgKfvvIzlkIzml7bnm7jlkIznmoTmlofku7bnmoRrZXnkuZ/kvJrnm7jlkIws55So5LqO56eS5LygXG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7ZXZlbnQuZGF0YX0ke2ZpbGUubGFzdE1vZGlmaWVkfSR7ZmlsZS5zaXplfSR7ZmlsZS5uYW1lfWA7XG4gICAgICAgICAgcmVzb2x2ZShrZXkpO1xuICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOS4jeS9v+eUqFdvcmtlclxuICAgICAgICAvLyDkvb/nlKjlvZPliY3ml7bpl7Qr5Zub5L2N6ZqP5py656CBK+acgOWQjuS/ruaUueaXtumXtCvmlofku7blpKflsI8r5paH5Lu25ZCN5p2l5L+d6K+B5ZSv5LiA5oCn77yM5q2k5pe25Zug5Li655u45ZCM5paH5Lu2a2V55Lmf5Lya5LiN5ZCM77yM5pWF5a6e546w5LiN5LqG56eS5LygXG4gICAgICAgIGNvbnN0IHJhbmRvbSA9IGAke25ldyBEYXRlKCkuZ2V0VGltZSgpfSR7KE1hdGgucmFuZG9tKCkgKiAxMDAwMCkudG9GaXhlZCgwKX1gO1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtyYW5kb219JHtmaWxlLmxhc3RNb2RpZmllZH0ke2ZpbGUuc2l6ZX0ke2ZpbGUubmFtZX1gO1xuICAgICAgICByZXNvbHZlKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyDkvb/nlKjnmb7luqZib3Pnm7TkvKBcbiAgYm9zVXBsb2FkKHVwbG9hZFN1YmplY3Q6IFVwbG9hZFhIUkFyZ3MsIGJ1Y2tldDogc3RyaW5nLCB1cGxvYWRLZXk6IHN0cmluZywgdXBsb2FkRmlsZTogVXBsb2FkRmlsZSkge1xuICAgIHRoaXMuYm9zQ2xpZW50XG4gICAgICAucHV0T2JqZWN0RnJvbUJsb2IoYnVja2V0LCB1cGxvYWRLZXksIHVwbG9hZEZpbGUpXG4gICAgICAudGhlbigoZXZlbnQ6IEh0dHBSZXNwb25zZTx7fT4pID0+IHtcbiAgICAgICAgdXBsb2FkRmlsZS51cmwgPSBgJHt0aGlzLmJvc0NsaWVudC5jb25maWcuZW5kcG9pbnR9L3YxLyR7YnVja2V0fS8ke3VwbG9hZEtleX1gO1xuICAgICAgICB1cGxvYWRTdWJqZWN0Lm9uU3VjY2VzcyEoJ+S4iuS8oOaIkOWKnycsIHVwbG9hZEZpbGUsIGV2ZW50KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGV2ZW50OiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB1cGxvYWRTdWJqZWN0Lm9uRXJyb3IhKGV2ZW50LCB1cGxvYWRGaWxlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25GaWxlTGlzdENoYW5nZSgpIHtcbiAgICAvLyDljrvpmaTnvKnnlaXlm77vvIzlm6DkuLrnvKnnlaXlm77lpKrlpKcs6KaB5piv5aSW6YOo5LiN5aSE55CG5Lya5b2x5ZONSHR0cOivt+axgumAn+W6plxuICAgIHRoaXMuZmlsZUxpc3RDaGFuZ2UodGhpcy5maWxlTGlzdC5tYXAoZmlsZSA9PiAoeyAuLi5maWxlLCB0aHVtYlVybDogJycgfSkpKTtcbiAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgb25DaGFuZ2UoKSB7XG4gICAgLy8g6LWL5YC8dXJsXG4gICAgdGhpcy5maWxlTGlzdC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS51cmwgPSBmaWxlLnVybCB8fCAoZmlsZS5vcmlnaW5GaWxlT2JqICYmIChmaWxlLm9yaWdpbkZpbGVPYmogYXMgYW55KS51cmwpO1xuICAgIH0pO1xuICAgIHRoaXMub25GaWxlTGlzdENoYW5nZSgpO1xuICB9XG59XG4iXX0=