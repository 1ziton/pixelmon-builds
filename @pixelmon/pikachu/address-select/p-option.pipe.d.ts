import { PipeTransform } from '@angular/core';
import { AddrOption } from './interface';
export declare type TFilterOption = (input: string, option: AddrOption) => boolean;
export declare class AddrFilterOptionPipe implements PipeTransform {
    transform(options: AddrOption[], searchValue: string, filterOption: TFilterOption, serverSearch: boolean): AddrOption[];
}
export declare function defaultAddrFilterOption(searchValue: string, option: AddrOption): boolean;
export declare function defaultLevelLabelsFilterOption(level?: number): AddrOption[];
export declare class AddrLevelFilterPipe implements PipeTransform {
    transform(level: number): any[];
}
