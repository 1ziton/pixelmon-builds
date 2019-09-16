import { AbstractControl, ValidationErrors } from '@angular/forms';
/** 一套日常验证器 */
export declare class _Validators {
    /** 是否为数字 */
    static num(control: AbstractControl): ValidationErrors | null;
    /** 是否为整数 */
    static int(control: AbstractControl): ValidationErrors | null;
    /** 是否为小数 */
    static decimal(control: AbstractControl): ValidationErrors | null;
    /** 是否为身份证 */
    static idCard(control: AbstractControl): ValidationErrors | null;
    /** 是否为手机号 */
    static mobile(control: AbstractControl): ValidationErrors | null;
    /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param which 号码类型
     */
    static telPhone(which?: any): (control: AbstractControl) => ValidationErrors | null;
    /** 是否URL地址 */
    static url(control: AbstractControl): ValidationErrors | null;
    /** 是否base64编码 */
    static base64(control: AbstractControl): ValidationErrors | null;
    /** 是否银行卡 */
    static creditCard(control: AbstractControl): ValidationErrors | null;
    /** 是否email */
    static email(control: AbstractControl): ValidationErrors | null;
    /** 是否全等 */
    static equal(val: any): (control: AbstractControl) => ValidationErrors | null;
    /** 是否大于某个数 */
    static gt(val: number): (control: AbstractControl) => ValidationErrors | null;
    /** 是否大于等于某个数 */
    static gte(val: number): (control: AbstractControl) => ValidationErrors | null;
    /** 是否小于某个数 */
    static lt(val: number): (control: AbstractControl) => ValidationErrors | null;
    /** 是否小于等于某个数 */
    static lte(val: number): (control: AbstractControl) => ValidationErrors | null;
    /** 是否在指定区间内 */
    static range(val: Array<number>): (control: AbstractControl) => ValidationErrors | null;
    /** 是否uuid */
    static uuid(control: AbstractControl): ValidationErrors | null;
}
