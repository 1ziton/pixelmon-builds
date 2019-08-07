/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, NgModule } from '@angular/core';
export class FilterPipe {
    /**
     * @param {?} value
     * @param {?} rule
     * @return {?}
     */
    transform(value, rule) {
        if (!Array.isArray(value)) {
            return [];
        }
        if (!rule) {
            return value;
        }
        return value.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => rule(item)));
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'filter',
            },] }
];
export class FilterPipeModule {
}
FilterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FilterPipe],
                exports: [FilterPipe],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGl4ZWxtb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvcGlwZXMvZmlsdGVyL2ZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsTUFBTSxPQUFPLFVBQVU7Ozs7OztJQUNyQixTQUFTLENBQUMsS0FBWSxFQUFFLElBQStCO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQzFDLENBQUM7OztZQVpGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsUUFBUTthQUNmOztBQWlCRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFKNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueVtdLCBydWxlOiAoZWxlbWVudDogYW55KSA9PiBib29sZWFuKTogYW55W10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKCFydWxlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoaXRlbSA9PiBydWxlKGl0ZW0pKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGaWx0ZXJQaXBlXSxcbiAgZXhwb3J0czogW0ZpbHRlclBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlTW9kdWxlIHt9XG4iXX0=