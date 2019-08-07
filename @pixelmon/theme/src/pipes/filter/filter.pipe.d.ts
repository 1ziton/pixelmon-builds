import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    transform(value: any[], rule: (element: any) => boolean): any[];
}
export declare class FilterPipeModule {
}
