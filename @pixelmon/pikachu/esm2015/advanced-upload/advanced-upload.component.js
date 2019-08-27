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
export class UploadServiceToken {
}
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
export class AdvancedUploadComponent {
    /**
     * @param {?} _cdr
     * @param {?} _uploadSrv
     */
    constructor(_cdr, _uploadSrv) {
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
                fileList => {
                    // 限制最大上传数量
                    return fileList.slice(0, this.maxLength - this.fileList.length);
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
        (file) => {
            this.previewModal.image = (/** @type {?} */ (file.url)) || (/** @type {?} */ (file.thumbUrl));
            this.previewModal.visible = true;
            this._cdr.detectChanges();
        });
        // 通过覆盖默认的上传行为，可以自定义自己的上传实现；注意：务必使用 => 定义处理方法
        this.customRequest = (/**
         * @param {?} uploadSubject
         * @return {?}
         */
        uploadSubject => {
            /** @type {?} */
            const uploadFile = uploadSubject.file;
            // uploadKey用于标识文件唯一性，如果重复Put同一个key的Object，之前上传的数据将被覆盖
            this.getUploadKey(uploadFile).then((/**
             * @param {?} uploadKey
             * @return {?}
             */
            uploadKey => {
                // 尝试秒传
                if (this.isSupportWorker && this.fastUpload) {
                    // 先用HEAD请求根据key判断是否已上传过该文件
                    this.bosClient
                        .getObjectMetadata(this.bucket, uploadKey)
                        .then((/**
                     * @param {?} event
                     * @return {?}
                     */
                    event => {
                        // 上传过了，直接回显
                        uploadFile.url = `${this.bosClient.config.endpoint}/v1/${this.bucket}/${uploadKey}`;
                        (/** @type {?} */ (uploadSubject.onSuccess))('上传成功', uploadFile, event);
                    }))
                        .catch((
                    // 没有上传过，使用百度bos直传
                    /**
                     * @return {?}
                     */
                    () => this.bosUpload(uploadSubject, this.bucket, uploadKey, uploadFile)));
                }
                else {
                    // 百度bos直传
                    this.bosUpload(uploadSubject, this.bucket, uploadKey, uploadFile);
                }
            }));
            // ZORRO要求返回一个Subscription
            return new Subscription();
        });
        this.initBosClient();
    }
    // 是否显示预览图标
    /**
     * @param {?} value
     * @return {?}
     */
    set showPreviewIcon(value) {
        this.showUploadList = Object.assign({}, this.showUploadList, { showPreviewIcon: value });
    }
    // 是否显示删除图标
    /**
     * @param {?} value
     * @return {?}
     */
    set showRemoveIcon(value) {
        this.showUploadList = Object.assign({}, this.showUploadList, { showPreviewIcon: value });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // 判断是否支持Worker
        if (typeof Worker !== 'undefined') {
            this.isSupportWorker = true;
        }
        else {
            if (this.fastUpload) {
                console.error('浏览器不支持Worker，无法使用快传！');
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.fileList = value || [];
        this.fileList.forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.uid = file.uid || uuidv1();
        }));
        this._cdr.detectChanges(); // for issue：https://github.com/angular/angular/issues/10816
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.fileListChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    // 初始化百度上传客户端
    /**
     * @return {?}
     */
    initBosClient() {
        if (this._uploadSrv.getConfig()) {
            this.isLoading = true;
            (/** @type {?} */ (this._uploadSrv.getConfig())).subscribe((/**
             * @param {?} config
             * @return {?}
             */
            config => {
                this.bosClient = new baidubce.sdk.BosClient({
                    endpoint: config.endpoint,
                    credentials: {
                        ak: config.ak,
                        sk: config.sk,
                    },
                    sessionToken: config.sessionToken,
                });
                this.isLoading = false;
                this._cdr.detectChanges();
            }));
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getUploadKey(file) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            // 使用Worker
            if (this.isSupportWorker && this.fastUpload) {
                /** @type {?} */
                const worker = new Worker(this._uploadSrv.workerUrl);
                worker.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    console.error('Worker异常，已关闭！', error);
                    worker.terminate();
                });
                worker.postMessage(file);
                worker.onmessage = (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    // 使用文件md5+最后修改时间+文件大小+文件名来保证唯一性，同时相同的文件的key也会相同,用于秒传
                    /** @type {?} */
                    const key = `${event.data}${file.lastModified}${file.size}${file.name}`;
                    resolve(key);
                    worker.terminate();
                });
            }
            else {
                // 不使用Worker
                // 使用当前时间+四位随机码+最后修改时间+文件大小+文件名来保证唯一性，此时因为相同文件key也会不同，故实现不了秒传
                /** @type {?} */
                const random = `${new Date().getTime()}${(Math.random() * 10000).toFixed(0)}`;
                /** @type {?} */
                const key = `${random}${file.lastModified}${file.size}${file.name}`;
                resolve(key);
            }
        }));
    }
    // 使用百度bos直传
    /**
     * @param {?} uploadSubject
     * @param {?} bucket
     * @param {?} uploadKey
     * @param {?} uploadFile
     * @return {?}
     */
    bosUpload(uploadSubject, bucket, uploadKey, uploadFile) {
        this.bosClient
            .putObjectFromBlob(bucket, uploadKey, uploadFile)
            .then((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            uploadFile.url = `${this.bosClient.config.endpoint}/v1/${bucket}/${uploadKey}`;
            (/** @type {?} */ (uploadSubject.onSuccess))('上传成功', uploadFile, event);
        }))
            .catch((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            (/** @type {?} */ (uploadSubject.onError))(event, uploadFile);
        }));
    }
    /**
     * @return {?}
     */
    onFileListChange() {
        // 去除缩略图，因为缩略图太大,要是外部不处理会影响Http请求速度
        this.fileListChange(this.fileList.map((/**
         * @param {?} file
         * @return {?}
         */
        file => (Object.assign({}, file, { thumbUrl: '' })))));
        this._cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    onChange() {
        // 赋值url
        this.fileList.forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.url = file.url || (file.originFileObj && ((/** @type {?} */ (file.originFileObj))).url);
        }));
        this.onFileListChange();
    }
}
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
AdvancedUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: UploadServiceToken }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1LyIsInNvdXJjZXMiOlsiYWR2YW5jZWQtdXBsb2FkL2FkdmFuY2VkLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BLCtCQUtDOzs7SUFKQyw2QkFBaUI7O0lBQ2pCLHVCQUFXOztJQUNYLHVCQUFXOztJQUNYLGlDQUFxQjs7Ozs7QUFHdkIsTUFBTSxPQUFnQixrQkFBa0I7Q0FJdkM7OztJQUhDLHVDQUE4Qjs7SUFDOUIsdUNBQTJCOzs7OztJQUMzQix5REFBNEM7O0FBRzlDLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFpQnhDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBcUdsQyxZQUFvQixJQUF1QixFQUFVLFVBQThCO1FBQS9ELFNBQUksR0FBSixJQUFJLENBQW1CO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFwRzFFLFdBQU0sR0FBRywwQ0FBMEMsQ0FBQyxDQUFDLDJGQUEyRjs7UUFDaEosV0FBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVE7O1FBQ3JCLGNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxZQUFZOztRQUMvQixhQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTzs7UUFDekIsVUFBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFDQUFxQzs7UUFDaEQsU0FBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjs7UUFDaEMsYUFBUSxHQUFH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S0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBRUwsS0FBSzt5QkFDTCxLQUFLO3FCQUVMLEtBQUs7OEJBV0wsS0FBSzs2QkFLTCxLQUFLOzJCQXlCTCxLQUFLO3FCQUdMLEtBQUs7c0JBR0wsS0FBSzs0QkFPTCxLQUFLOzs7O0lBdkVOLHlDQUE2RDs7SUFDN0QseUNBQXFCOztJQUNyQiw0Q0FBMkI7O0lBQzNCLDJDQUEwQjs7SUFDMUIsd0NBQW1COztJQUNuQix1Q0FBa0I7O0lBQ2xCLDJDQUErRDs7SUFDL0QsMkNBQXdFOztJQUN4RSwyQ0FBeUI7O0lBQ3pCLDZDQUEyQjs7SUFDM0IsOENBQTRCOztJQUM1QixnREFBeUM7O0lBQ3pDLDRDQUE4Qjs7SUFFOUIseUNBQTJCOztJQUMzQiw2Q0FBMkI7O0lBRTNCLHlDQVFFOztJQWFGLGlEQUlFOzs7OztJQUVGLDRDQUE4Qjs7Ozs7SUFDOUIsa0RBQWdDOztJQUVoQyw0Q0FBa0I7O0lBQ2xCLDJDQUE0Qjs7SUFDNUIsaURBQThDOztJQUc5QywrQ0FHRTs7SUFHRiwrQ0FBbUc7O0lBR25HLHlDQUFxRTs7SUFHckUsMENBSUU7O0lBR0YsZ0RBMkJFOzs7OztJQUVVLHVDQUErQjs7Ozs7SUFBRSw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5LiK5Lyg57uE5Lu277yM6buY6K6k5L2/55So55m+5bqmYmFpZHViY2XnmoTlr7nosaHlrZjlgqhib3PkuIrkvKBcbiAqIFdlYuerr+ebtOS8oOWunui3te+8mmh0dHBzOi8vY2xvdWQuYmFpZHUuY29tL2RvYy9CT1Mvcy85and2eXM4eTcvXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTIyIDE1OjQ0OjM3XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBCb3NDb25maWcge1xuICBlbmRwb2ludDogc3RyaW5nOyAvLyBCT1PmnI3liqHlmajnmoTlnLDlnYBcbiAgYWs6IHN0cmluZzsgLy8gU1RT5pyN5Yqh5Zmo5LiL5Y+R55qE5Li05pe2YWtcbiAgc2s6IHN0cmluZzsgLy8gU1RT5pyN5Yqh5Zmo5LiL5Y+R55qE5Li05pe2c2tcbiAgc2Vzc2lvblRva2VuOiBzdHJpbmc7IC8vIFNUU+acjeWKoeWZqOS4i+WPkeeahHNlc3Npb25Ub2tlblxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXBsb2FkU2VydmljZVRva2VuIHtcbiAgYWJzdHJhY3QgYm9zQ29uZmlnOiBCb3NDb25maWc7IC8vIOeZvuW6pmJvc+S4iuS8oOeahOiuvue9ruWPguaVsFxuICBhYnN0cmFjdCB3b3JrZXJVcmw6IHN0cmluZzsgLy8gV29ya2Vy55qE5Zyw5Z2AXG4gIGFic3RyYWN0IGdldENvbmZpZygpOiBPYnNlcnZhYmxlPEJvc0NvbmZpZz47IC8vIOiOt+WPlnRva2Vu55qE6YC76L6RXG59XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJncywgVXBsb2FkRmlsdGVyIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB1dWlkdjEgfSBmcm9tICdAcGl4ZWxtb24vdXRpbCc7XG5cbmRlY2xhcmUgY29uc3QgYmFpZHViY2U6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1hZHZhbmNlZFVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZHZhbmNlZC11cGxvYWQuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogQWR2YW5jZWRVcGxvYWRDb21wb25lbnQsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgYWNjZXB0ID0gJ2ltYWdlL3BuZyxpbWFnZS9qcGVnLGltYWdlL2dpZixpbWFnZS9ibXAnOyAvLyDmjqXlj5fkuIrkvKDnmoTmlofku7bnsbvlnossIOivpuingWh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dC9maWxlI2FjY2VwdFxuICBASW5wdXQoKSBhY3Rpb24gPSAnJzsgLy8g5LiK5Lyg55qE5Zyw5Z2AXG4gIEBJbnB1dCgpIGRpcmVjdG9yeSA9IGZhbHNlOyAvLyDmmK/lkKbmlK/mjIHkuIrkvKDmlofku7blpLlcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTsgLy8g5piv5ZCm56aB55SoXG4gIEBJbnB1dCgpIGxpbWl0ID0gOTsgLy8g6ZmQ5Yi25Y2V5qyh5pyA5aSa5LiK5Lyg5pWw6YeP77yMbnpNdWx0aXBsZSDmiZPlvIDml7bmnInmlYjvvJswIOihqOekuuS4jemZkFxuICBASW5wdXQoKSBzaXplID0gMDsgLy8g6ZmQ5Yi25paH5Lu25aSn5bCP77yM5Y2V5L2N77yaS0LvvJswIOihqOekuuS4jemZkFxuICBASW5wdXQoKSBmaWxlVHlwZSA9ICdpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYsaW1hZ2UvYm1wJzsgLy8g6ZmQ5Yi25paH5Lu257G75Z6L77yM5L6L5aaC77yaaW1hZ2UvcG5nLGltYWdlL2pwZWcsaW1hZ2UvZ2lmLGltYWdlL2JtcFxuICBASW5wdXQoKSBsaXN0VHlwZTogJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCcgPSAncGljdHVyZS1jYXJkJzsgLy8g5LiK5Lyg5YiX6KGo55qE5YaF5bu65qC35byP77yM5pSv5oyB5LiJ56eN5Z+65pys5qC35byPXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTsgLy8g5piv5ZCm5pSv5oyB5aSa6YCJ5paH5Lu277yMaWUxMCsg5pSv5oyBXG4gIEBJbnB1dCgpIHNob3dCdXR0b24gPSB0cnVlOyAvLyDmmK/lkKblsZXnpLrkuIrkvKDmjInpkq5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAn5LiK5LygJzsgLy8g5Y2g5L2N5o+Q56S66K+tXG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47IC8vIOiHquWumuS5iWNvbnRlbnRcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gSW5maW5pdHk7IC8vIOacgOWkmuS4iuS8oOaVsFxuXG4gIEBJbnB1dCgpIGJ1Y2tldCA9ICdidWNrZXQnOyAvLyDnmb7luqZCT1PkuIrnmoTlkb3lkI3nqbrpl7RcbiAgQElucHV0KCkgZmFzdFVwbG9hZCA9IHRydWU7IC8vIOaYr+WQpuS9v+eUqOW/q+S8oFxuXG4gIEBJbnB1dCgpIGZpbHRlcjogVXBsb2FkRmlsdGVyW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ21heExlbmd0aCcsXG4gICAgICBmbjogZmlsZUxpc3QgPT4ge1xuICAgICAgICAvLyDpmZDliLbmnIDlpKfkuIrkvKDmlbDph49cbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0LnNsaWNlKDAsIHRoaXMubWF4TGVuZ3RoIC0gdGhpcy5maWxlTGlzdC5sZW5ndGgpO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIC8vIOaYr+WQpuaYvuekuumihOiniOWbvuagh1xuICBASW5wdXQoKSBzZXQgc2hvd1ByZXZpZXdJY29uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93VXBsb2FkTGlzdCA9IHsgLi4udGhpcy5zaG93VXBsb2FkTGlzdCwgc2hvd1ByZXZpZXdJY29uOiB2YWx1ZSB9O1xuICB9XG5cbiAgLy8g5piv5ZCm5pi+56S65Yig6Zmk5Zu+5qCHXG4gIEBJbnB1dCgpIHNldCBzaG93UmVtb3ZlSWNvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd1VwbG9hZExpc3QgPSB7IC4uLnRoaXMuc2hvd1VwbG9hZExpc3QsIHNob3dQcmV2aWV3SWNvbjogdmFsdWUgfTtcbiAgfVxuXG4gIC8vIOaYr+WQpuaYvuekuumihOiniOWbvuagh+WSjOWIoOmZpOWbvuagh1xuICBzaG93VXBsb2FkTGlzdCA9IHtcbiAgICBzaG93UHJldmlld0ljb246IHRydWUsXG4gICAgc2hvd1JlbW92ZUljb246IHRydWUsXG4gICAgaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZTogdHJ1ZSwgLy8g5LiN5piv5Zu+54mH5pe26ZqQ6JeP6aKE6KeI5Zu+5qCHXG4gIH07XG5cbiAgcHJpdmF0ZSBib3NDbGllbnQ6IGFueSA9IG51bGw7IC8vIOeZvuW6puS4iuS8oOWuouaIt+err1xuICBwcml2YXRlIGlzU3VwcG9ydFdvcmtlciA9IGZhbHNlOyAvLyDmtY/op4jlmajmmK/lkKbmlK/mjIFXb3JrZXJcblxuICBpc0xvYWRpbmcgPSBmYWxzZTsgLy8g55m+5bqm5LiK5Lyg5a6i5oi356uv5Yid5aeL5YyW5LitXG4gIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTsgLy8g5paH5Lu25YiX6KGo77yM57uR5a6aQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgZmlsZUxpc3RDaGFuZ2U6IChmaWxlczogVXBsb2FkRmlsZVtdKSA9PiB2b2lkOyAvLyDmlofku7bliJfooajmlLnlj5jvvIznu5HlrppDb250cm9sVmFsdWVBY2Nlc3NvclxuXG4gIC8vIOmihOiniG1vZGFs5Y+C5pWw5a+56LGhXG4gIHByZXZpZXdNb2RhbCA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZSwgLy8g5piv5ZCm5pi+56S66aKE6KeIbW9kYWxcbiAgICBpbWFnZTogJycsIC8vIOmihOiniOWbvueJh1xuICB9O1xuXG4gIC8vIOS4iuS8oOaWh+S7tuS5i+WJjeeahOmSqeWtkCzoi6Xov5Tlm54gZmFsc2Ug5YiZ5YGc5q2i5LiK5Lyg44CC5rOo5oSP77ya5Yqh5b+F5L2/55SoID0+IOWumuS5ieWkhOeQhuaWueazlVxuICBASW5wdXQoKSBiZWZvcmVVcGxvYWQ6IChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvLyDngrnlh7vnp7vpmaTmlofku7bml7bnmoTlm57osIPvvIzov5Tlm57lgLzkuLogZmFsc2Ug5pe25LiN56e76Zmk44CC5rOo5oSP77ya5Yqh5b+F5L2/55SoID0+IOWumuS5ieWkhOeQhuaWueazleOAglxuICBASW5wdXQoKSByZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvLyDngrnlh7vmlofku7bpk77mjqXmiJbpooTop4jlm77moIfml7bnmoTlm57osIPvvJvms6jmhI/vvJrliqHlv4Xkvb/nlKggPT4g5a6a5LmJ5aSE55CG5pa55rOVXG4gIEBJbnB1dCgpIHByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICB0aGlzLnByZXZpZXdNb2RhbC5pbWFnZSA9IGZpbGUudXJsISB8fCBmaWxlLnRodW1iVXJsITtcbiAgICB0aGlzLnByZXZpZXdNb2RhbC52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9O1xuXG4gIC8vIOmAmui/h+imhueblum7mOiupOeahOS4iuS8oOihjOS4uu+8jOWPr+S7peiHquWumuS5ieiHquW3seeahOS4iuS8oOWunueOsO+8m+azqOaEj++8muWKoeW/heS9v+eUqCA9PiDlrprkuYnlpITnkIbmlrnms5VcbiAgQElucHV0KCkgY3VzdG9tUmVxdWVzdDogKHN1YmplY3Q6IFVwbG9hZFhIUkFyZ3MpID0+IFN1YnNjcmlwdGlvbiA9IHVwbG9hZFN1YmplY3QgPT4ge1xuICAgIGNvbnN0IHVwbG9hZEZpbGUgPSB1cGxvYWRTdWJqZWN0LmZpbGU7XG5cbiAgICAvLyB1cGxvYWRLZXnnlKjkuo7moIfor4bmlofku7bllK/kuIDmgKfvvIzlpoLmnpzph43lpI1QdXTlkIzkuIDkuKprZXnnmoRPYmplY3TvvIzkuYvliY3kuIrkvKDnmoTmlbDmja7lsIbooqvopobnm5ZcbiAgICB0aGlzLmdldFVwbG9hZEtleSh1cGxvYWRGaWxlKS50aGVuKHVwbG9hZEtleSA9PiB7XG4gICAgICAvLyDlsJ3or5Xnp5LkvKBcbiAgICAgIGlmICh0aGlzLmlzU3VwcG9ydFdvcmtlciAmJiB0aGlzLmZhc3RVcGxvYWQpIHtcbiAgICAgICAgLy8g5YWI55SoSEVBROivt+axguagueaNrmtleeWIpOaWreaYr+WQpuW3suS4iuS8oOi/h+ivpeaWh+S7tlxuICAgICAgICB0aGlzLmJvc0NsaWVudFxuICAgICAgICAgIC5nZXRPYmplY3RNZXRhZGF0YSh0aGlzLmJ1Y2tldCwgdXBsb2FkS2V5KVxuICAgICAgICAgIC50aGVuKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIOS4iuS8oOi/h+S6hu+8jOebtOaOpeWbnuaYvlxuICAgICAgICAgICAgdXBsb2FkRmlsZS51cmwgPSBgJHt0aGlzLmJvc0NsaWVudC5jb25maWcuZW5kcG9pbnR9L3YxLyR7dGhpcy5idWNrZXR9LyR7dXBsb2FkS2V5fWA7XG4gICAgICAgICAgICB1cGxvYWRTdWJqZWN0Lm9uU3VjY2VzcyEoJ+S4iuS8oOaIkOWKnycsIHVwbG9hZEZpbGUsIGV2ZW50KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIC8vIOayoeacieS4iuS8oOi/h++8jOS9v+eUqOeZvuW6pmJvc+ebtOS8oFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5ib3NVcGxvYWQodXBsb2FkU3ViamVjdCwgdGhpcy5idWNrZXQsIHVwbG9hZEtleSwgdXBsb2FkRmlsZSksXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOeZvuW6pmJvc+ebtOS8oFxuICAgICAgICB0aGlzLmJvc1VwbG9hZCh1cGxvYWRTdWJqZWN0LCB0aGlzLmJ1Y2tldCwgdXBsb2FkS2V5LCB1cGxvYWRGaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFpPUlJP6KaB5rGC6L+U5Zue5LiA5LiqU3Vic2NyaXB0aW9uXG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIF91cGxvYWRTcnY6IFVwbG9hZFNlcnZpY2VUb2tlbikge1xuICAgIHRoaXMuaW5pdEJvc0NsaWVudCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8g5Yik5pat5piv5ZCm5pSv5oyBV29ya2VyXG4gICAgaWYgKHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmlzU3VwcG9ydFdvcmtlciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmZhc3RVcGxvYWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign5rWP6KeI5Zmo5LiN5pSv5oyBV29ya2Vy77yM5peg5rOV5L2/55So5b+r5Lyg77yBJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuZmlsZUxpc3QgPSB2YWx1ZSB8fCBbXTtcbiAgICB0aGlzLmZpbGVMaXN0LmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBmaWxlLnVpZCA9IGZpbGUudWlkIHx8IHV1aWR2MSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7IC8vIGZvciBpc3N1Ze+8mmh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODE2XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLmZpbGVMaXN0Q2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZCgpIHt9XG5cbiAgLy8g5Yid5aeL5YyW55m+5bqm5LiK5Lyg5a6i5oi356uvXG4gIGluaXRCb3NDbGllbnQoKSB7XG4gICAgaWYgKHRoaXMuX3VwbG9hZFNydi5nZXRDb25maWcoKSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fdXBsb2FkU3J2LmdldENvbmZpZygpIS5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgICAgdGhpcy5ib3NDbGllbnQgPSBuZXcgYmFpZHViY2Uuc2RrLkJvc0NsaWVudCh7XG4gICAgICAgICAgZW5kcG9pbnQ6IGNvbmZpZy5lbmRwb2ludCxcbiAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgYWs6IGNvbmZpZy5hayxcbiAgICAgICAgICAgIHNrOiBjb25maWcuc2ssXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXNzaW9uVG9rZW46IGNvbmZpZy5zZXNzaW9uVG9rZW4sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VXBsb2FkS2V5KGZpbGU6IFVwbG9hZEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIC8vIOS9v+eUqFdvcmtlclxuICAgICAgaWYgKHRoaXMuaXNTdXBwb3J0V29ya2VyICYmIHRoaXMuZmFzdFVwbG9hZCkge1xuICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKHRoaXMuX3VwbG9hZFNydi53b3JrZXJVcmwpO1xuXG4gICAgICAgIHdvcmtlci5vbmVycm9yID0gZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dvcmtlcuW8guW4uO+8jOW3suWFs+mXre+8gScsIGVycm9yKTtcbiAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGZpbGUpO1xuXG4gICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBldmVudCA9PiB7XG4gICAgICAgICAgLy8g5L2/55So5paH5Lu2bWQ1K+acgOWQjuS/ruaUueaXtumXtCvmlofku7blpKflsI8r5paH5Lu25ZCN5p2l5L+d6K+B5ZSv5LiA5oCn77yM5ZCM5pe255u45ZCM55qE5paH5Lu255qEa2V55Lmf5Lya55u45ZCMLOeUqOS6juenkuS8oFxuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V2ZW50LmRhdGF9JHtmaWxlLmxhc3RNb2RpZmllZH0ke2ZpbGUuc2l6ZX0ke2ZpbGUubmFtZX1gO1xuICAgICAgICAgIHJlc29sdmUoa2V5KTtcbiAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDkuI3kvb/nlKhXb3JrZXJcbiAgICAgICAgLy8g5L2/55So5b2T5YmN5pe26Ze0K+Wbm+S9jemaj+acuueggSvmnIDlkI7kv67mlLnml7bpl7Qr5paH5Lu25aSn5bCPK+aWh+S7tuWQjeadpeS/neivgeWUr+S4gOaAp++8jOatpOaXtuWboOS4uuebuOWQjOaWh+S7tmtleeS5n+S8muS4jeWQjO+8jOaVheWunueOsOS4jeS6huenkuS8oFxuICAgICAgICBjb25zdCByYW5kb20gPSBgJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0keyhNYXRoLnJhbmRvbSgpICogMTAwMDApLnRvRml4ZWQoMCl9YDtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7cmFuZG9tfSR7ZmlsZS5sYXN0TW9kaWZpZWR9JHtmaWxlLnNpemV9JHtmaWxlLm5hbWV9YDtcbiAgICAgICAgcmVzb2x2ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8g5L2/55So55m+5bqmYm9z55u05LygXG4gIGJvc1VwbG9hZCh1cGxvYWRTdWJqZWN0OiBVcGxvYWRYSFJBcmdzLCBidWNrZXQ6IHN0cmluZywgdXBsb2FkS2V5OiBzdHJpbmcsIHVwbG9hZEZpbGU6IFVwbG9hZEZpbGUpIHtcbiAgICB0aGlzLmJvc0NsaWVudFxuICAgICAgLnB1dE9iamVjdEZyb21CbG9iKGJ1Y2tldCwgdXBsb2FkS2V5LCB1cGxvYWRGaWxlKVxuICAgICAgLnRoZW4oKGV2ZW50OiBIdHRwUmVzcG9uc2U8e30+KSA9PiB7XG4gICAgICAgIHVwbG9hZEZpbGUudXJsID0gYCR7dGhpcy5ib3NDbGllbnQuY29uZmlnLmVuZHBvaW50fS92MS8ke2J1Y2tldH0vJHt1cGxvYWRLZXl9YDtcbiAgICAgICAgdXBsb2FkU3ViamVjdC5vblN1Y2Nlc3MhKCfkuIrkvKDmiJDlip8nLCB1cGxvYWRGaWxlLCBldmVudCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChldmVudDogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdXBsb2FkU3ViamVjdC5vbkVycm9yIShldmVudCwgdXBsb2FkRmlsZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRmlsZUxpc3RDaGFuZ2UoKSB7XG4gICAgLy8g5Y676Zmk57yp55Wl5Zu+77yM5Zug5Li657yp55Wl5Zu+5aSq5aSnLOimgeaYr+WklumDqOS4jeWkhOeQhuS8muW9seWTjUh0dHDor7fmsYLpgJ/luqZcbiAgICB0aGlzLmZpbGVMaXN0Q2hhbmdlKHRoaXMuZmlsZUxpc3QubWFwKGZpbGUgPT4gKHsgLi4uZmlsZSwgdGh1bWJVcmw6ICcnIH0pKSk7XG4gICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIC8vIOi1i+WAvHVybFxuICAgIHRoaXMuZmlsZUxpc3QuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgIGZpbGUudXJsID0gZmlsZS51cmwgfHwgKGZpbGUub3JpZ2luRmlsZU9iaiAmJiAoZmlsZS5vcmlnaW5GaWxlT2JqIGFzIGFueSkudXJsKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uRmlsZUxpc3RDaGFuZ2UoKTtcbiAgfVxufVxuIl19