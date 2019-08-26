/**
 * @Description: 上传组件，默认使用百度baidubce的对象存储bos上传
 * Web端直传实践：https://cloud.baidu.com/doc/BOS/s/9jwvys8y7/
 * @Author: zomixi
 * @Date: 2019-07-22 15:44:37
 */
export interface BosConfig {
    endpoint: string;
    ak: string;
    sk: string;
    sessionToken: string;
}
export declare abstract class UploadServiceToken {
    abstract bosConfig: BosConfig;
    abstract workerUrl: string;
    abstract getConfig(): Observable<BosConfig>;
}
import { OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { UploadFile, UploadXHRArgs, UploadFilter } from 'ng-zorro-antd';
import { Observable, Subscription } from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';
export declare class AdvancedUploadComponent implements OnInit, ControlValueAccessor {
    private _cdr;
    private _uploadSrv;
    accept: string;
    action: string;
    directory: boolean;
    disabled: boolean;
    limit: number;
    size: number;
    fileType: string;
    listType: 'text' | 'picture' | 'picture-card';
    multiple: boolean;
    showButton: boolean;
    placeholder: string;
    customContent: TemplateRef<any>;
    maxLength: number;
    bucket: string;
    fastUpload: boolean;
    filter: UploadFilter[];
    showPreviewIcon: boolean;
    showRemoveIcon: boolean;
    showUploadList: {
        showPreviewIcon: boolean;
        showRemoveIcon: boolean;
        hidePreviewIconInNonImage: boolean;
    };
    private bosClient;
    private isSupportWorker;
    isLoading: boolean;
    fileList: UploadFile[];
    fileListChange: (files: UploadFile[]) => void;
    previewModal: {
        visible: boolean;
        image: string;
    };
    beforeUpload: (file: UploadFile, fileList: UploadFile[]) => boolean | Observable<boolean>;
    remove: (file: UploadFile) => boolean | Observable<boolean>;
    preview: (file: UploadFile) => void;
    customRequest: (subject: UploadXHRArgs) => Subscription;
    constructor(_cdr: ChangeDetectorRef, _uploadSrv: UploadServiceToken);
    ngOnInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    initBosClient(): void;
    getUploadKey(file: UploadFile): Promise<string>;
    bosUpload(uploadSubject: UploadXHRArgs, bucket: string, uploadKey: string, uploadFile: UploadFile): void;
    onFileListChange(): void;
    onChange(): void;
}
