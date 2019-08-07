/**
 * @Description: 主要用于把英文枚举转成中文
 * @Author: zomixi
 * @Date: 2019-05-15 14:39:06
 */
import { PipeTransform } from '@angular/core';
export declare class TranslatePipe implements PipeTransform {
    transform(rawValue: any, _lexicon: {
        value: any;
        label: string;
    }[]): any;
}
export declare class TranslatePipeModule {
}
