import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PixelmonThemeConfig } from '../../theme.config';
export declare type _HttpHeaders = HttpHeaders | {
    [header: string]: string | string[];
};
export declare type HttpObserve = 'body' | 'events' | 'response';
/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
export declare class _HttpClient {
    private http;
    private cog;
    constructor(http: HttpClient, cog: PixelmonThemeConfig);
    private _loading;
    /** 是否正在加载中 */
    readonly loading: boolean;
    parseParams(params: {}): HttpParams;
    appliedUrl(url: string, params?: {}): string;
    begin(): void;
    end(): void;
    /**
     * GET：返回一个 `string` 类型
     */
    get(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * GET：返回一个 `HttpEvent<T>` 类型
     */
    get<T>(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'events';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * GET：返回一个 `HttpResponse<any>` 类型
     */
    get(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<any>>;
    /**
     * GET：返回一个 `HttpResponse<T>` 类型
     */
    get<T>(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * GET：返回一个 `any` 类型
     */
    get(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * GET：返回一个泛类型
     */
    get<T>(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'body';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * POST：返回一个 `string` 类型
     */
    post(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * POST：返回一个 `HttpEvent<T>` 类型
     */
    post<T>(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'events';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * POST：返回一个 `HttpResponse<JSON>` 类型
     */
    post(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<any>>;
    /**
     * POST：返回一个 `any` 类型
     */
    post(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * POST：返回一个 `JSON` 类型
     */
    post<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * DELETE：返回一个 `string` 类型
     */
    delete(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * DELETE：返回一个 `JSON` 类型
     */
    delete(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<{}>>;
    /**
     * DELETE：返回一个 `any` 类型
     */
    delete(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * DELETE：返回一个泛类型
     */
    delete<T>(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * `jsonp` 请求
     *
     * @param url URL地址
     * @param params 请求参数
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    jsonp(url: string, params?: any, callbackParam?: string): Observable<any>;
    /**
     * PATCH：返回一个 `string` 类型
     */
    patch(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * PATCH：返回一个 `HttpResponse<JSON>` 类型
     */
    patch(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<{}>>;
    /**
     * PATCH：返回一个 `any` 类型
     */
    patch(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * PATCH：返回一个 `JSON` 类型
     */
    patch<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * PUT：返回一个 `string` 类型
     */
    put(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * PUT：返回一个 `HttpResponse<JSON>` 类型
     */
    put(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<{}>>;
    /**
     * PUT：返回一个 `any` 类型
     */
    put(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * PUT：返回一个 `JSON` 类型
     */
    put<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /** 返回一个 `arraybuffer` 类型 */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'events';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<any>>;
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'events';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<R>>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'response';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'response';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<R>>;
    request(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<Object>;
    request<R>(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<R>;
    request(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: HttpObserve;
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
}
