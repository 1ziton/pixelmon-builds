/**
 * toFixed 解决js精度问题，使用方式：toFixed(value)
 * @param <Number | String> value
 * @param <Number> precision 精度，默认2位小数，需要取整则传0
 * 该方法会处理好以下这些问题：
 * 1.12*100=112.00000000000001
 * 1.13*100=112.9999999999999
 * '0.015'.toFixed(2)结果为0.01
 * 1121.1/100 = 11.210999999999999
 */
export declare const toFixed: (value: any, precision?: number) => any;
/**
 * 单位为元数值转为分
 * @param <Number> value
 */
export declare const toCentNumber: (value: any) => any;
/**
 * 分数值数值转为元
 * @param <Number> centval 分为单位
 * @param <Number> precision 精度，默认2位小数
 */
export declare const toYuanNumber: (centval: any, precision?: number) => any;
