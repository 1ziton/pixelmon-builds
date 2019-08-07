import { OnDestroy } from '@angular/core';
import { MockCachedRule, MockRule } from './interface';
import { PixelmonMockConfig } from './mock.config';
export declare class MockService implements OnDestroy {
    private config;
    private cached;
    constructor(config: PixelmonMockConfig);
    private applyMock;
    private realApplyMock;
    private genRule;
    private outputError;
    getRule(method: string, url: string): MockRule | null;
    clearCache(): void;
    readonly rules: MockCachedRule[];
    ngOnDestroy(): void;
}
