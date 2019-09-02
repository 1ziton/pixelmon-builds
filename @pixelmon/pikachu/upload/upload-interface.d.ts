import { Observable } from 'rxjs';
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
