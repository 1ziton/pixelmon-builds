import { CurrencyPipe } from '@angular/common';
/**
 * @see http://fex.1ziton.com/pixelmon/theme/currency
 */
export declare class CNCurrencyPipe extends CurrencyPipe {
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | boolean, digits?: string): string | null;
}
