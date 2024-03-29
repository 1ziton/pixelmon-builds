/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param obj 数据源，无效时直接返回 `defaultValue` 值
 * @param path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param defaultValue 默认值
 */
export declare function deepGet(obj: any | null, path: string | string[] | null | undefined, defaultValue?: any): any;
export declare function deepCopy(obj: any): any;
/** 复制内容至剪贴板 */
export declare function copy(value: string): Promise<string>;
export declare function deepMergeKey(original: any, ingoreArray: boolean, ...objects: any[]): any;
export declare function deepMerge(original: any, ...objects: any[]): any;
/**
 * val值为空字符，null，undefined
 */
export declare const isEmptyVal: (val: any) => boolean;
/**
 * 有效的值
 */
export declare const isValidVal: (val: any) => boolean;
/**
 * 深克隆
 * @param obj
 */
export declare const deepClone: (obj: any) => any;
