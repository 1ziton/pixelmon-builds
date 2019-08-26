import { Observable } from 'rxjs';
import { UploadServiceToken, BosConfig } from './advanced-upload.component';
export declare class UploadService extends UploadServiceToken {
    workerUrl: string;
    bosConfig: BosConfig;
    constructor();
    getConfig(): Observable<BosConfig>;
    getBosConfig(): Promise<BosConfig>;
}
