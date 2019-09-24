import { ChangeDetectorRef, OnChanges } from '@angular/core';
import { PixelmonLocaleService } from '@pixelmon/theme';
export declare class G2MiniProgressComponent implements OnChanges {
    i18n: PixelmonLocaleService;
    private cdr;
    color: string;
    target: number;
    percent: number;
    strokeWidth: number;
    constructor(i18n: PixelmonLocaleService, cdr: ChangeDetectorRef);
    private fixNum;
    ngOnChanges(): void;
}
