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
import { Component, Input, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { uuidv1 } from '@pixelmon/util';
import { UploadServiceToken } from './upload-interface';
export class UploadComponent {
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
UploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: UploadServiceToken }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9waWthY2h1L3VwbG9hZC8iLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFrQnhELE1BQU0sT0FBTyxlQUFlOzs7OztJQXFHMUIsWUFBb0IsSUFBdUIsRUFBVSxVQUE4QjtRQUEvRCxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBcEcxRSxXQUFNLEdBQUcsMENBQTBDLENBQUMsQ0FBQywyRkFBMkY7O1FBQ2hKLFdBQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFROztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsWUFBWTs7UUFDL0IsYUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU87O1FBQ3pCLFVBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7O1FBQ2hELFNBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7O1FBQ2hDLGFBQVEsR0FBRywwQ0FBMEMsQ0FBQyxDQUFDLHFEQUFxRDs7UUFDNUcsYUFBUSxHQUF3QyxjQUFjLENBQUMsQ0FBQyxxQkFBcUI7O1FBQ3JGLGFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxvQkFBb0I7O1FBQ3JDLGVBQVUsR0FBRyxJQUFJLENBQUMs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O3dCQUNMLEtBQUs7cUJBRUwsS0FBSzt5QkFDTCxLQUFLO3FCQUVMLEtBQUs7OEJBV0wsS0FBSzs2QkFLTCxLQUFLOzJCQXlCTCxLQUFLO3FCQUdMLEtBQUs7c0JBR0wsS0FBSzs0QkFPTCxLQUFLOzs7O0lBdkVOLGlDQUE2RDs7SUFDN0QsaUNBQXFCOztJQUNyQixvQ0FBMkI7O0lBQzNCLG1DQUEwQjs7SUFDMUIsZ0NBQW1COztJQUNuQiwrQkFBa0I7O0lBQ2xCLG1DQUErRDs7SUFDL0QsbUNBQXdFOztJQUN4RSxtQ0FBeUI7O0lBQ3pCLHFDQUEyQjs7SUFDM0Isc0NBQTRCOztJQUM1Qix3Q0FBeUM7O0lBQ3pDLG9DQUE4Qjs7SUFFOUIsaUNBQTJCOztJQUMzQixxQ0FBMkI7O0lBRTNCLGlDQVFFOztJQWFGLHlDQUlFOzs7OztJQUVGLG9DQUE4Qjs7Ozs7SUFDOUIsMENBQWdDOztJQUVoQyxvQ0FBa0I7O0lBQ2xCLG1DQUE0Qjs7SUFDNUIseUNBQThDOztJQUc5Qyx1Q0FHRTs7SUFHRix1Q0FBbUc7O0lBR25HLGlDQUFxRTs7SUFHckUsa0NBSUU7O0lBR0Ysd0NBMkJFOzs7OztJQUVVLCtCQUErQjs7Ozs7SUFBRSxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBEZXNjcmlwdGlvbjog5LiK5Lyg57uE5Lu277yM6buY6K6k5L2/55So55m+5bqmYmFpZHViY2XnmoTlr7nosaHlrZjlgqhib3PkuIrkvKBcbiAqIFdlYuerr+ebtOS8oOWunui3te+8mmh0dHBzOi8vY2xvdWQuYmFpZHUuY29tL2RvYy9CT1Mvcy85and2eXM4eTcvXG4gKiBAQXV0aG9yOiB6b21peGlcbiAqIEBEYXRlOiAyMDE5LTA3LTIyIDE1OjQ0OjM3XG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRYSFJBcmdzLCBVcGxvYWRGaWx0ZXIgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHV1aWR2MSB9IGZyb20gJ0BwaXhlbG1vbi91dGlsJztcbmltcG9ydCB7IFVwbG9hZFNlcnZpY2VUb2tlbiB9IGZyb20gJy4vdXBsb2FkLWludGVyZmFjZSc7XG5cbmRlY2xhcmUgY29uc3QgYmFpZHViY2U6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC11cGxvYWQnLFxuICBleHBvcnRBczogJ3BVcGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IFVwbG9hZENvbXBvbmVudCxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgYWNjZXB0ID0gJ2ltYWdlL3BuZyxpbWFnZS9qcGVnLGltYWdlL2dpZixpbWFnZS9ibXAnOyAvLyDmjqXlj5fkuIrkvKDnmoTmlofku7bnsbvlnossIOivpuingWh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dC9maWxlI2FjY2VwdFxuICBASW5wdXQoKSBhY3Rpb24gPSAnJzsgLy8g5LiK5Lyg55qE5Zyw5Z2AXG4gIEBJbnB1dCgpIGRpcmVjdG9yeSA9IGZhbHNlOyAvLyDmmK/lkKbmlK/mjIHkuIrkvKDmlofku7blpLlcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTsgLy8g5piv5ZCm56aB55SoXG4gIEBJbnB1dCgpIGxpbWl0ID0gOTsgLy8g6ZmQ5Yi25Y2V5qyh5pyA5aSa5LiK5Lyg5pWw6YeP77yMbnpNdWx0aXBsZSDmiZPlvIDml7bmnInmlYjvvJswIOihqOekuuS4jemZkFxuICBASW5wdXQoKSBzaXplID0gMDsgLy8g6ZmQ5Yi25paH5Lu25aSn5bCP77yM5Y2V5L2N77yaS0LvvJswIOihqOekuuS4jemZkFxuICBASW5wdXQoKSBmaWxlVHlwZSA9ICdpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYsaW1hZ2UvYm1wJzsgLy8g6ZmQ5Yi25paH5Lu257G75Z6L77yM5L6L5aaC77yaaW1hZ2UvcG5nLGltYWdlL2pwZWcsaW1hZ2UvZ2lmLGltYWdlL2JtcFxuICBASW5wdXQoKSBsaXN0VHlwZTogJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCcgPSAncGljdHVyZS1jYXJkJzsgLy8g5LiK5Lyg5YiX6KGo55qE5YaF5bu65qC35byP77yM5pSv5oyB5LiJ56eN5Z+65pys5qC35byPXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTsgLy8g5piv5ZCm5pSv5oyB5aSa6YCJ5paH5Lu277yMaWUxMCsg5pSv5oyBXG4gIEBJbnB1dCgpIHNob3dCdXR0b24gPSB0cnVlOyAvLyDmmK/lkKblsZXnpLrkuIrkvKDmjInpkq5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAn5LiK5LygJzsgLy8g5Y2g5L2N5o+Q56S66K+tXG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47IC8vIOiHquWumuS5iWNvbnRlbnRcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gSW5maW5pdHk7IC8vIOacgOWkmuS4iuS8oOaVsFxuXG4gIEBJbnB1dCgpIGJ1Y2tldCA9ICdidWNrZXQnOyAvLyDnmb7luqZCT1PkuIrnmoTlkb3lkI3nqbrpl7RcbiAgQElucHV0KCkgZmFzdFVwbG9hZCA9IHRydWU7IC8vIOaYr+WQpuS9v+eUqOW/q+S8oFxuXG4gIEBJbnB1dCgpIGZpbHRlcjogVXBsb2FkRmlsdGVyW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ21heExlbmd0aCcsXG4gICAgICBmbjogZmlsZUxpc3QgPT4ge1xuICAgICAgICAvLyDpmZDliLbmnIDlpKfkuIrkvKDmlbDph49cbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0LnNsaWNlKDAsIHRoaXMubWF4TGVuZ3RoIC0gdGhpcy5maWxlTGlzdC5sZW5ndGgpO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIC8vIOaYr+WQpuaYvuekuumihOiniOWbvuagh1xuICBASW5wdXQoKSBzZXQgc2hvd1ByZXZpZXdJY29uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93VXBsb2FkTGlzdCA9IHsgLi4udGhpcy5zaG93VXBsb2FkTGlzdCwgc2hvd1ByZXZpZXdJY29uOiB2YWx1ZSB9O1xuICB9XG5cbiAgLy8g5piv5ZCm5pi+56S65Yig6Zmk5Zu+5qCHXG4gIEBJbnB1dCgpIHNldCBzaG93UmVtb3ZlSWNvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd1VwbG9hZExpc3QgPSB7IC4uLnRoaXMuc2hvd1VwbG9hZExpc3QsIHNob3dQcmV2aWV3SWNvbjogdmFsdWUgfTtcbiAgfVxuXG4gIC8vIOaYr+WQpuaYvuekuumihOiniOWbvuagh+WSjOWIoOmZpOWbvuagh1xuICBzaG93VXBsb2FkTGlzdCA9IHtcbiAgICBzaG93UHJldmlld0ljb246IHRydWUsXG4gICAgc2hvd1JlbW92ZUljb246IHRydWUsXG4gICAgaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZTogdHJ1ZSwgLy8g5LiN5piv5Zu+54mH5pe26ZqQ6JeP6aKE6KeI5Zu+5qCHXG4gIH07XG5cbiAgcHJpdmF0ZSBib3NDbGllbnQ6IGFueSA9IG51bGw7IC8vIOeZvuW6puS4iuS8oOWuouaIt+err1xuICBwcml2YXRlIGlzU3VwcG9ydFdvcmtlciA9IGZhbHNlOyAvLyDmtY/op4jlmajmmK/lkKbmlK/mjIFXb3JrZXJcblxuICBpc0xvYWRpbmcgPSBmYWxzZTsgLy8g55m+5bqm5LiK5Lyg5a6i5oi356uv5Yid5aeL5YyW5LitXG4gIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTsgLy8g5paH5Lu25YiX6KGo77yM57uR5a6aQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgZmlsZUxpc3RDaGFuZ2U6IChmaWxlczogVXBsb2FkRmlsZVtdKSA9PiB2b2lkOyAvLyDmlofku7bliJfooajmlLnlj5jvvIznu5HlrppDb250cm9sVmFsdWVBY2Nlc3NvclxuXG4gIC8vIOmihOiniG1vZGFs5Y+C5pWw5a+56LGhXG4gIHByZXZpZXdNb2RhbCA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZSwgLy8g5piv5ZCm5pi+56S66aKE6KeIbW9kYWxcbiAgICBpbWFnZTogJycsIC8vIOmihOiniOWbvueJh1xuICB9O1xuXG4gIC8vIOS4iuS8oOaWh+S7tuS5i+WJjeeahOmSqeWtkCzoi6Xov5Tlm54gZmFsc2Ug5YiZ5YGc5q2i5LiK5Lyg44CC5rOo5oSP77ya5Yqh5b+F5L2/55SoID0+IOWumuS5ieWkhOeQhuaWueazlVxuICBASW5wdXQoKSBiZWZvcmVVcGxvYWQ6IChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvLyDngrnlh7vnp7vpmaTmlofku7bml7bnmoTlm57osIPvvIzov5Tlm57lgLzkuLogZmFsc2Ug5pe25LiN56e76Zmk44CC5rOo5oSP77ya5Yqh5b+F5L2/55SoID0+IOWumuS5ieWkhOeQhuaWueazleOAglxuICBASW5wdXQoKSByZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvLyDngrnlh7vmlofku7bpk77mjqXmiJbpooTop4jlm77moIfml7bnmoTlm57osIPvvJvms6jmhI/vvJrliqHlv4Xkvb/nlKggPT4g5a6a5LmJ5aSE55CG5pa55rOVXG4gIEBJbnB1dCgpIHByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICB0aGlzLnByZXZpZXdNb2RhbC5pbWFnZSA9IGZpbGUudXJsISB8fCBmaWxlLnRodW1iVXJsITtcbiAgICB0aGlzLnByZXZpZXdNb2RhbC52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9O1xuXG4gIC8vIOmAmui/h+imhueblum7mOiupOeahOS4iuS8oOihjOS4uu+8jOWPr+S7peiHquWumuS5ieiHquW3seeahOS4iuS8oOWunueOsO+8m+azqOaEj++8muWKoeW/heS9v+eUqCA9PiDlrprkuYnlpITnkIbmlrnms5VcbiAgQElucHV0KCkgY3VzdG9tUmVxdWVzdDogKHN1YmplY3Q6IFVwbG9hZFhIUkFyZ3MpID0+IFN1YnNjcmlwdGlvbiA9IHVwbG9hZFN1YmplY3QgPT4ge1xuICAgIGNvbnN0IHVwbG9hZEZpbGUgPSB1cGxvYWRTdWJqZWN0LmZpbGU7XG5cbiAgICAvLyB1cGxvYWRLZXnnlKjkuo7moIfor4bmlofku7bllK/kuIDmgKfvvIzlpoLmnpzph43lpI1QdXTlkIzkuIDkuKprZXnnmoRPYmplY3TvvIzkuYvliY3kuIrkvKDnmoTmlbDmja7lsIbooqvopobnm5ZcbiAgICB0aGlzLmdldFVwbG9hZEtleSh1cGxvYWRGaWxlKS50aGVuKHVwbG9hZEtleSA9PiB7XG4gICAgICAvLyDlsJ3or5Xnp5LkvKBcbiAgICAgIGlmICh0aGlzLmlzU3VwcG9ydFdvcmtlciAmJiB0aGlzLmZhc3RVcGxvYWQpIHtcbiAgICAgICAgLy8g5YWI55SoSEVBROivt+axguagueaNrmtleeWIpOaWreaYr+WQpuW3suS4iuS8oOi/h+ivpeaWh+S7tlxuICAgICAgICB0aGlzLmJvc0NsaWVudFxuICAgICAgICAgIC5nZXRPYmplY3RNZXRhZGF0YSh0aGlzLmJ1Y2tldCwgdXBsb2FkS2V5KVxuICAgICAgICAgIC50aGVuKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIOS4iuS8oOi/h+S6hu+8jOebtOaOpeWbnuaYvlxuICAgICAgICAgICAgdXBsb2FkRmlsZS51cmwgPSBgJHt0aGlzLmJvc0NsaWVudC5jb25maWcuZW5kcG9pbnR9L3YxLyR7dGhpcy5idWNrZXR9LyR7dXBsb2FkS2V5fWA7XG4gICAgICAgICAgICB1cGxvYWRTdWJqZWN0Lm9uU3VjY2VzcyEoJ+S4iuS8oOaIkOWKnycsIHVwbG9hZEZpbGUsIGV2ZW50KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIC8vIOayoeacieS4iuS8oOi/h++8jOS9v+eUqOeZvuW6pmJvc+ebtOS8oFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5ib3NVcGxvYWQodXBsb2FkU3ViamVjdCwgdGhpcy5idWNrZXQsIHVwbG9hZEtleSwgdXBsb2FkRmlsZSksXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOeZvuW6pmJvc+ebtOS8oFxuICAgICAgICB0aGlzLmJvc1VwbG9hZCh1cGxvYWRTdWJqZWN0LCB0aGlzLmJ1Y2tldCwgdXBsb2FkS2V5LCB1cGxvYWRGaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFpPUlJP6KaB5rGC6L+U5Zue5LiA5LiqU3Vic2NyaXB0aW9uXG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIF91cGxvYWRTcnY6IFVwbG9hZFNlcnZpY2VUb2tlbikge1xuICAgIHRoaXMuaW5pdEJvc0NsaWVudCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8g5Yik5pat5piv5ZCm5pSv5oyBV29ya2VyXG4gICAgaWYgKHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmlzU3VwcG9ydFdvcmtlciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmZhc3RVcGxvYWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign5rWP6KeI5Zmo5LiN5pSv5oyBV29ya2Vy77yM5peg5rOV5L2/55So5b+r5Lyg77yBJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuZmlsZUxpc3QgPSB2YWx1ZSB8fCBbXTtcbiAgICB0aGlzLmZpbGVMaXN0LmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBmaWxlLnVpZCA9IGZpbGUudWlkIHx8IHV1aWR2MSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7IC8vIGZvciBpc3N1Ze+8mmh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODE2XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLmZpbGVMaXN0Q2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZCgpIHt9XG5cbiAgLy8g5Yid5aeL5YyW55m+5bqm5LiK5Lyg5a6i5oi356uvXG4gIGluaXRCb3NDbGllbnQoKSB7XG4gICAgaWYgKHRoaXMuX3VwbG9hZFNydi5nZXRDb25maWcoKSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fdXBsb2FkU3J2LmdldENvbmZpZygpIS5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgICAgdGhpcy5ib3NDbGllbnQgPSBuZXcgYmFpZHViY2Uuc2RrLkJvc0NsaWVudCh7XG4gICAgICAgICAgZW5kcG9pbnQ6IGNvbmZpZy5lbmRwb2ludCxcbiAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgYWs6IGNvbmZpZy5hayxcbiAgICAgICAgICAgIHNrOiBjb25maWcuc2ssXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXNzaW9uVG9rZW46IGNvbmZpZy5zZXNzaW9uVG9rZW4sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VXBsb2FkS2V5KGZpbGU6IFVwbG9hZEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIC8vIOS9v+eUqFdvcmtlclxuICAgICAgaWYgKHRoaXMuaXNTdXBwb3J0V29ya2VyICYmIHRoaXMuZmFzdFVwbG9hZCkge1xuICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKHRoaXMuX3VwbG9hZFNydi53b3JrZXJVcmwpO1xuXG4gICAgICAgIHdvcmtlci5vbmVycm9yID0gZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dvcmtlcuW8guW4uO+8jOW3suWFs+mXre+8gScsIGVycm9yKTtcbiAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGZpbGUpO1xuXG4gICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBldmVudCA9PiB7XG4gICAgICAgICAgLy8g5L2/55So5paH5Lu2bWQ1K+acgOWQjuS/ruaUueaXtumXtCvmlofku7blpKflsI8r5paH5Lu25ZCN5p2l5L+d6K+B5ZSv5LiA5oCn77yM5ZCM5pe255u45ZCM55qE5paH5Lu255qEa2V55Lmf5Lya55u45ZCMLOeUqOS6juenkuS8oFxuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V2ZW50LmRhdGF9JHtmaWxlLmxhc3RNb2RpZmllZH0ke2ZpbGUuc2l6ZX0ke2ZpbGUubmFtZX1gO1xuICAgICAgICAgIHJlc29sdmUoa2V5KTtcbiAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDkuI3kvb/nlKhXb3JrZXJcbiAgICAgICAgLy8g5L2/55So5b2T5YmN5pe26Ze0K+Wbm+S9jemaj+acuueggSvmnIDlkI7kv67mlLnml7bpl7Qr5paH5Lu25aSn5bCPK+aWh+S7tuWQjeadpeS/neivgeWUr+S4gOaAp++8jOatpOaXtuWboOS4uuebuOWQjOaWh+S7tmtleeS5n+S8muS4jeWQjO+8jOaVheWunueOsOS4jeS6huenkuS8oFxuICAgICAgICBjb25zdCByYW5kb20gPSBgJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0keyhNYXRoLnJhbmRvbSgpICogMTAwMDApLnRvRml4ZWQoMCl9YDtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7cmFuZG9tfSR7ZmlsZS5sYXN0TW9kaWZpZWR9JHtmaWxlLnNpemV9JHtmaWxlLm5hbWV9YDtcbiAgICAgICAgcmVzb2x2ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8g5L2/55So55m+5bqmYm9z55u05LygXG4gIGJvc1VwbG9hZCh1cGxvYWRTdWJqZWN0OiBVcGxvYWRYSFJBcmdzLCBidWNrZXQ6IHN0cmluZywgdXBsb2FkS2V5OiBzdHJpbmcsIHVwbG9hZEZpbGU6IFVwbG9hZEZpbGUpIHtcbiAgICB0aGlzLmJvc0NsaWVudFxuICAgICAgLnB1dE9iamVjdEZyb21CbG9iKGJ1Y2tldCwgdXBsb2FkS2V5LCB1cGxvYWRGaWxlKVxuICAgICAgLnRoZW4oKGV2ZW50OiBIdHRwUmVzcG9uc2U8e30+KSA9PiB7XG4gICAgICAgIHVwbG9hZEZpbGUudXJsID0gYCR7dGhpcy5ib3NDbGllbnQuY29uZmlnLmVuZHBvaW50fS92MS8ke2J1Y2tldH0vJHt1cGxvYWRLZXl9YDtcbiAgICAgICAgdXBsb2FkU3ViamVjdC5vblN1Y2Nlc3MhKCfkuIrkvKDmiJDlip8nLCB1cGxvYWRGaWxlLCBldmVudCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChldmVudDogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdXBsb2FkU3ViamVjdC5vbkVycm9yIShldmVudCwgdXBsb2FkRmlsZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRmlsZUxpc3RDaGFuZ2UoKSB7XG4gICAgLy8g5Y676Zmk57yp55Wl5Zu+77yM5Zug5Li657yp55Wl5Zu+5aSq5aSnLOimgeaYr+WklumDqOS4jeWkhOeQhuS8muW9seWTjUh0dHDor7fmsYLpgJ/luqZcbiAgICB0aGlzLmZpbGVMaXN0Q2hhbmdlKHRoaXMuZmlsZUxpc3QubWFwKGZpbGUgPT4gKHsgLi4uZmlsZSwgdGh1bWJVcmw6ICcnIH0pKSk7XG4gICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIC8vIOi1i+WAvHVybFxuICAgIHRoaXMuZmlsZUxpc3QuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgIGZpbGUudXJsID0gZmlsZS51cmwgfHwgKGZpbGUub3JpZ2luRmlsZU9iaiAmJiAoZmlsZS5vcmlnaW5GaWxlT2JqIGFzIGFueSkudXJsKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uRmlsZUxpc3RDaGFuZ2UoKTtcbiAgfVxufVxuIl19