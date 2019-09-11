import { PipeTransform } from '@angular/core';
import { POption } from './interface';
export declare type TFilterOption = (input: string, option: POption) => boolean;
export declare class PanelFilterOptionPipe implements PipeTransform {
    transform(options: POption[], searchValue: string, filterOption: TFilterOption, serverSearch: boolean): POption[];
}
export declare function defaultFilterOption(searchValue: string, option: POption): boolean;
