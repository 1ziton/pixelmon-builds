import { ModuleWithProviders } from '@angular/core';
import { PixelmonMockConfig } from './mock.config';
export declare class PixelmonMockModule {
    static forRoot(config: PixelmonMockConfig): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
