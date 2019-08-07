/**
 * @Description: 切割文本
 * @Author: zomixi
 * @Date: 2019-07-08 11:18:59
 */
import { PipeTransform } from '@angular/core';
export declare class ShortcutPipe implements PipeTransform {
    /**
     *
     * @param value 源文本
     * @param maxLength 最大长度，默认20
     * @param tail 切割后显示的尾部，默认...
     */
    transform(value: string, maxLength?: number, tail?: string): any;
}
export declare class ShortcutPipeModule {
}
