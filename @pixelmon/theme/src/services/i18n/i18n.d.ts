import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
export interface PixelmonI18NService {
    [key: string]: any;
    /**
     * 调用 `use` 触发变更通知
     */
    readonly change: Observable<string>;
    /**
     * 变更语言
     * @param lang 语言代码
     * @param emit 是否触发 `change`，默认：true
     */
    use(lang: string, emit?: boolean): void;
    /**
     * 返回当前语言列表
     */
    getLangs(): any[];
    /**
     * 翻译
     * - `params` 模板所需要的参数对象
     * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
     */
    fanyi(key: string, params?: {}, isSafe?: boolean): string;
}
export declare const PIXELMON_I18N_TOKEN: InjectionToken<PixelmonI18NService>;
export declare function PIXELMON_I18N_TOKEN_FACTORY(): PixelmonI18NServiceFake;
export declare class PixelmonI18NServiceFake implements PixelmonI18NService {
    private change$;
    readonly change: Observable<string>;
    use(lang: string): void;
    getLangs(): any[];
    fanyi(key: string): string;
}
