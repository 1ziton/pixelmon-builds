import { PipeTransform } from '@angular/core';
/**
 * @see http://fex.1ziton.com/pixelmon/theme/keys
 */
export declare class KeysPipe implements PipeTransform {
    transform(value: any, keyIsNumber?: boolean): any[];
}
