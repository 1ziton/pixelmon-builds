/** 是否为数字 */
export declare function isNum(value: string | number): boolean;
/** 是否为整数 */
export declare function isInt(value: string | number): boolean;
/** 是否为小数 */
export declare function isDecimal(value: string | number): boolean;
/** 是否为身份证 */
export declare function isIdCard(value: string): boolean;
/** 是否为手机号 */
export declare function isMobile(value: string): boolean;
/** 是否为手机号/座机/或有特殊符号分隔的电话号码 */
export declare function isTelPhone(which: string | undefined, value: string): boolean;
/** 是否URL地址 */
export declare function isUrl(url: string): boolean;
/** 是否base64编码 */
export declare function isBase64(value: string): boolean;
/** 是否银行卡格式 */
export declare function isCreditCard(value: string): boolean;
/** 是否email */
export declare function isEmail(value: string): boolean;
/** 是否uuid */
export declare function isUUID(value: string): boolean;
