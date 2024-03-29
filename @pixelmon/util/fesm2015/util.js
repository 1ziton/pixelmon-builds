import { TemplateRef, Directive, ViewContainerRef, Input, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import extend from 'extend';
import v1 from 'uuid/v1';
import v3 from 'uuid/v3';
import v4 from 'uuid/v4';
import v5 from 'uuid/v5';
import addDays from 'date-fns/add_days';
import endOfDay from 'date-fns/end_of_day';
import endOfMonth from 'date-fns/end_of_month';
import endOfWeek from 'date-fns/end_of_week';
import endOfYear from 'date-fns/end_of_year';
import parse from 'date-fns/parse';
import startOfDay from 'date-fns/start_of_day';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import subMonths from 'date-fns/sub_months';
import subWeeks from 'date-fns/sub_weeks';
import subYears from 'date-fns/sub_years';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { share, filter } from 'rxjs/operators';
import { NzTreeNode } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringTemplateOutletDirective {
    /**
     * @param {?} viewContainer
     * @param {?} defaultTemplate
     */
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set stringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
        this.updateView();
    }
    /**
     * @return {?}
     */
    updateView() {
        if (!this.isTemplate) {
            // use default template when input is string
            if (!this.defaultViewRef) {
                this.viewContainer.clear();
                this.inputViewRef = null;
                this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
            }
        }
        else {
            // clear previous view if any.
            if (this.inputViewRef) {
                this.inputViewRef = null;
            }
            // use input template when input is templateRef
            this.viewContainer.clear();
            this.defaultViewRef = null;
            this.inputViewRef = this.viewContainer.createEmbeddedView((/** @type {?} */ (this.inputTemplate)));
        }
    }
}
StringTemplateOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[stringTemplateOutlet]',
            },] }
];
/** @nocollapse */
StringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
StringTemplateOutletDirective.propDecorators = {
    stringTemplateOutlet: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.defaultViewRef;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.defaultTemplate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param {?} obj 数据源，无效时直接返回 `defaultValue` 值
 * @param {?} path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param {?=} defaultValue 默认值
 * @return {?}
 */
function deepGet(obj, path, defaultValue) {
    if (!obj || path == null || path.length === 0)
        return defaultValue;
    if (!Array.isArray(path)) {
        path = ~path.indexOf('.') ? path.split('.') : [path];
    }
    if (path.length === 1) {
        /** @type {?} */
        const checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    /** @type {?} */
    const res = path.reduce((/**
     * @param {?} o
     * @param {?} k
     * @return {?}
     */
    (o, k) => (o || {})[k]), obj);
    return typeof res === 'undefined' ? defaultValue : res;
}
/**
 * @param {?} obj
 * @return {?}
 */
function deepCopy(obj) {
    /** @type {?} */
    const result = extend(true, {}, { _: obj });
    return result._;
}
/**
 * 复制内容至剪贴板
 * @param {?} value
 * @return {?}
 */
function copy(value) {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    (resolve) => {
        /** @type {?} */
        let copyTextArea = null;
        try {
            copyTextArea = document.createElement('textarea');
            copyTextArea.style.height = '0px';
            copyTextArea.style.opacity = '0';
            copyTextArea.style.width = '0px';
            document.body.appendChild(copyTextArea);
            copyTextArea.value = value;
            copyTextArea.select();
            document.execCommand('copy');
            resolve(value);
        }
        finally {
            if (copyTextArea && copyTextArea.parentNode) {
                copyTextArea.parentNode.removeChild(copyTextArea);
            }
        }
    }));
}
/**
 * @param {?} original
 * @param {?} ingoreArray
 * @param {...?} objects
 * @return {?}
 */
function deepMergeKey(original, ingoreArray, ...objects) {
    if (Array.isArray(original) || typeof original !== 'object')
        return original;
    /** @type {?} */
    const isObject = (/**
     * @param {?} v
     * @return {?}
     */
    (v) => typeof v === 'object' || typeof v === 'function');
    /** @type {?} */
    const merge = (/**
     * @param {?} target
     * @param {?} obj
     * @return {?}
     */
    (target, obj) => {
        Object.keys(obj)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        key => key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key)))
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const oldValue = obj[key];
            /** @type {?} */
            const newValue = target[key];
            if (Array.isArray(newValue)) {
                target[key] = ingoreArray ? oldValue : [...newValue, ...oldValue];
            }
            else if (oldValue != null && isObject(oldValue) && newValue != null && isObject(newValue)) {
                target[key] = merge(newValue, oldValue);
            }
            else {
                target[key] = deepCopy(oldValue);
            }
        }));
        return target;
    });
    objects.filter((/**
     * @param {?} v
     * @return {?}
     */
    v => v != null && isObject(v))).forEach((/**
     * @param {?} v
     * @return {?}
     */
    v => merge(original, v)));
    return original;
}
/**
 * @param {?} original
 * @param {...?} objects
 * @return {?}
 */
function deepMerge(original, ...objects) {
    return deepMergeKey(original, false, ...objects);
}
/**
 * val值为空字符，null，undefined
 * @type {?}
 */
const isEmptyVal = (/**
 * @param {?} val
 * @return {?}
 */
val => {
    /** @type {?} */
    const arr = [undefined, null, ''];
    return arr.includes(val);
});
/**
 * 有效的值
 * @type {?}
 */
const isValidVal = (/**
 * @param {?} val
 * @return {?}
 */
val => {
    return !isEmptyVal(val) && !['null', 'undefined'].includes(val);
});
/**
 * 深克隆
 * \@param obj
 * @type {?}
 */
const deepClone = (/**
 * @param {?} obj
 * @return {?}
 */
obj => {
    /** @type {?} */
    const clone = Object.assign({}, obj);
    Object.keys(clone).forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])));
    return Array.isArray(obj) && obj.length ? (clone.length = obj.length) && Array.from(clone) : Array.isArray(obj) ? Array.from(obj) : clone;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 * @param {?} str
 * @param {?} obj
 * @param {?=} needDeepGet
 * @return {?}
 */
function format(str, obj, needDeepGet = false) {
    return (str || '').replace(/\${([^}]+)}/g, (/**
     * @param {?} _work
     * @param {?} key
     * @return {?}
     */
    (_work, key) => needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || ''));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * toFixed 解决js精度问题，使用方式：toFixed(value)
 * \@param <Number | String> value
 * \@param <Number> precision 精度，默认2位小数，需要取整则传0
 * 该方法会处理好以下这些问题：
 * 1.12*100=112.00000000000001
 * 1.13*100=112.9999999999999
 * '0.015'.toFixed(2)结果为0.01
 * 1121.1/100 = 11.210999999999999
 * @type {?}
 */
const toFixed = (/**
 * @param {?} value
 * @param {?=} precision
 * @return {?}
 */
(value, precision = 2) => {
    /** @type {?} */
    const num = Number(value);
    if (Number.isNaN(num)) {
        return 0;
    }
    if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
        return 0;
    }
    // console.log(num, precision)
    if (precision < 0 || typeof precision !== 'number') {
        return value;
    }
    else if (precision > 0) {
        return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
    }
    return Math.round(num);
});
/**
 * 单位为元数值转为分
 * \@param <Number> value
 * @type {?}
 */
const toCentNumber = (/**
 * @param {?} value
 * @return {?}
 */
value => {
    /** @type {?} */
    const num = Number(value);
    if (Number.isNaN(num)) {
        return 0;
    }
    return toFixed(num * 100, 0);
});
/**
 * 分数值数值转为元
 * \@param <Number> centval 分为单位
 * \@param <Number> precision 精度，默认2位小数
 * @type {?}
 */
const toYuanNumber = (/**
 * @param {?} centval
 * @param {?=} precision
 * @return {?}
 */
(centval, precision = 2) => {
    /** @type {?} */
    const num = Number(centval);
    if (Number.isNaN(num)) {
        return 0;
    }
    return toFixed(num / 100, precision);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const uuid = v4;
uuid.v1 = v1;
uuid.v3 = v3;
uuid.v4 = v4;
uuid.v5 = v5;
/** @type {?} */
const uuidv1 = v1;
/** @type {?} */
const uuidv3 = v3;
/** @type {?} */
const uuidv4 = v4;
/** @type {?} */
const uuidv5 = v5;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-09-05 10:57:44
 * @description: DOM操作工具类
 * copy form : https://github.com/primefaces/primeng/blob/master/src/app/components/dom/domhandler.spec.ts
 */
class DomHandler {
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    static addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    static addMultipleClasses(element, className) {
        if (element.classList) {
            /** @type {?} */
            const styles = className.split(' ');
            for (const style of styles) {
                element.classList.add(style);
            }
        }
        else {
            /** @type {?} */
            const styles = className.split(' ');
            for (const style of styles) {
                element.className += ' ' + style;
            }
        }
    }
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    static removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    static hasClass(element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static siblings(element) {
        return Array.prototype.filter.call(element.parentNode.children, (/**
         * @param {?} child
         * @return {?}
         */
        child => {
            return child !== element;
        }));
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    static find(element, selector) {
        return Array.from(element.querySelectorAll(selector));
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    static findSingle(element, selector) {
        if (element) {
            return element.querySelector(selector);
        }
        return null;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static index(element) {
        /** @type {?} */
        const children = element.parentNode.childNodes;
        /** @type {?} */
        let num = 0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < children.length; i++) {
            if (children[i] === element)
                return num;
            if (children[i].nodeType === 1)
                num++;
        }
        return -1;
    }
    /**
     * @param {?} element
     * @param {?} attributeName
     * @return {?}
     */
    static indexWithinGroup(element, attributeName) {
        /** @type {?} */
        const children = element.parentNode.childNodes;
        /** @type {?} */
        let num = 0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < children.length; i++) {
            if (children[i] === element)
                return num;
            if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType === 1)
                num++;
        }
        return -1;
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    static relativePosition(element, target) {
        /** @type {?} */
        const elementDimensions = element.offsetParent
            ? { width: element.offsetWidth, height: element.offsetHeight }
            : this.getHiddenElementDimensions(element);
        /** @type {?} */
        const targetHeight = target.offsetHeight;
        /** @type {?} */
        const targetOffset = target.getBoundingClientRect();
        /** @type {?} */
        const viewport = this.getViewport();
        // tslint:disable-next-line: one-variable-per-declaration
        /** @type {?} */
        let top;
        /** @type {?} */
        let left;
        if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
            top = -1 * elementDimensions.height;
            if (targetOffset.top + top < 0) {
                top = -1 * targetOffset.top;
            }
        }
        else {
            top = targetHeight;
        }
        if (elementDimensions.width > viewport.width) {
            // element wider then viewport and cannot fit on screen (align at left side of viewport)
            left = targetOffset.left * -1;
        }
        else if (targetOffset.left + elementDimensions.width > viewport.width) {
            // element wider then viewport but can be fit on screen (align at right side of viewport)
            left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        }
        else {
            // element fits on screen (align with target)
            left = 0;
        }
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    static absolutePosition(element, target) {
        /** @type {?} */
        const elementDimensions = element.offsetParent
            ? { width: element.offsetWidth, height: element.offsetHeight }
            : this.getHiddenElementDimensions(element);
        /** @type {?} */
        const elementOuterHeight = elementDimensions.height;
        /** @type {?} */
        const elementOuterWidth = elementDimensions.width;
        /** @type {?} */
        const targetOuterHeight = target.offsetHeight;
        /** @type {?} */
        const targetOuterWidth = target.offsetWidth;
        /** @type {?} */
        const targetOffset = target.getBoundingClientRect();
        /** @type {?} */
        const windowScrollTop = this.getWindowScrollTop();
        /** @type {?} */
        const windowScrollLeft = this.getWindowScrollLeft();
        /** @type {?} */
        const viewport = this.getViewport();
        // tslint:disable-next-line: one-variable-per-declaration
        /** @type {?} */
        let top;
        /** @type {?} */
        let left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            if (top < 0) {
                top = windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }
        if (targetOffset.left + elementOuterWidth > viewport.width)
            left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
            left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static getHiddenElementOuterHeight(element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        /** @type {?} */
        const elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static getHiddenElementOuterWidth(element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        /** @type {?} */
        const elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static getHiddenElementDimensions(element) {
        /** @type {?} */
        const dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return dimensions;
    }
    /**
     * @param {?} container
     * @param {?} item
     * @return {?}
     */
    static scrollInView(container, item) {
        /** @type {?} */
        const borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        /** @type {?} */
        const borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        /** @type {?} */
        const paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        /** @type {?} */
        const paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        /** @type {?} */
        const containerRect = container.getBoundingClientRect();
        /** @type {?} */
        const itemRect = item.getBoundingClientRect();
        /** @type {?} */
        const offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        /** @type {?} */
        const scroll = container.scrollTop;
        /** @type {?} */
        const elementHeight = container.clientHeight;
        /** @type {?} */
        const itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if (offset + itemHeight > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    }
    /**
     * @param {?} element
     * @param {?} duration
     * @return {?}
     */
    static fadeIn(element, duration) {
        element.style.opacity = 0;
        /** @type {?} */
        let last = +new Date();
        /** @type {?} */
        let opacity = 0;
        /** @type {?} */
        const tick = (/**
         * @return {?}
         */
        () => {
            opacity = +element.style.opacity.replace(',', '.') + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();
            if (+opacity < 1) {
                // tslint:disable-next-line: no-unused-expression
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        });
        tick();
    }
    /**
     * @param {?} element
     * @param {?} ms
     * @return {?}
     */
    static fadeOut(element, ms) {
        /** @type {?} */
        let opacity = 1;
        /** @type {?} */
        const interval = 50;
        /** @type {?} */
        const duration = ms;
        /** @type {?} */
        const gap = interval / duration;
        /** @type {?} */
        const fading = setInterval((/**
         * @return {?}
         */
        () => {
            opacity = opacity - gap;
            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }
            element.style.opacity = opacity;
        }), interval);
    }
    /**
     * @return {?}
     */
    static getWindowScrollTop() {
        /** @type {?} */
        const doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
    /**
     * @return {?}
     */
    static getWindowScrollLeft() {
        /** @type {?} */
        const doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    static matches(element, selector) {
        /** @type {?} */
        const p = Element.prototype;
        /** @type {?} */
        const f = p.matches ||
            p.webkitMatchesSelector ||
            p.mozMatchesSelector ||
            p.msMatchesSelector ||
            (/**
             * @param {?} s
             * @return {?}
             */
            function (s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            });
        return f.call(element, selector);
    }
    /**
     * @param {?} el
     * @param {?=} margin
     * @return {?}
     */
    static getOuterWidth(el, margin) {
        /** @type {?} */
        let width = el.offsetWidth;
        if (margin) {
            /** @type {?} */
            const style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    static getHorizontalPadding(el) {
        /** @type {?} */
        const style = getComputedStyle(el);
        return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    }
    /**
     * @param {?} el
     * @return {?}
     */
    static getHorizontalMargin(el) {
        /** @type {?} */
        const style = getComputedStyle(el);
        return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }
    /**
     * @param {?} el
     * @return {?}
     */
    static innerWidth(el) {
        /** @type {?} */
        let width = el.offsetWidth;
        /** @type {?} */
        const style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    static width(el) {
        /** @type {?} */
        let width = el.offsetWidth;
        /** @type {?} */
        const style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    static getInnerHeight(el) {
        /** @type {?} */
        let height = el.offsetHeight;
        /** @type {?} */
        const style = getComputedStyle(el);
        height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return height;
    }
    /**
     * @param {?} el
     * @param {?=} margin
     * @return {?}
     */
    static getOuterHeight(el, margin) {
        /** @type {?} */
        let height = el.offsetHeight;
        if (margin) {
            /** @type {?} */
            const style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    static getHeight(el) {
        /** @type {?} */
        let height = el.offsetHeight;
        /** @type {?} */
        const style = getComputedStyle(el);
        height -=
            parseFloat(style.paddingTop) +
                parseFloat(style.paddingBottom) +
                parseFloat(style.borderTopWidth) +
                parseFloat(style.borderBottomWidth);
        return height;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    static getWidth(el) {
        /** @type {?} */
        let width = el.offsetWidth;
        /** @type {?} */
        const style = getComputedStyle(el);
        width -=
            parseFloat(style.paddingLeft) +
                parseFloat(style.paddingRight) +
                parseFloat(style.borderLeftWidth) +
                parseFloat(style.borderRightWidth);
        return width;
    }
    /**
     * @return {?}
     */
    static getViewport() {
        // tslint:disable-next-line: one-variable-per-declaration
        /** @type {?} */
        const win = window;
        /** @type {?} */
        const d = document;
        /** @type {?} */
        const e = d.documentElement;
        /** @type {?} */
        const g = d.getElementsByTagName('body')[0];
        /** @type {?} */
        const w = win.innerWidth || e.clientWidth || g.clientWidth;
        /** @type {?} */
        const h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    }
    /**
     * @param {?} el
     * @return {?}
     */
    static getOffset(el) {
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft,
        };
    }
    /**
     * @param {?} element
     * @param {?} replacementElement
     * @return {?}
     */
    static replaceElementWith(element, replacementElement) {
        /** @type {?} */
        const parentNode = element.parentNode;
        if (!parentNode)
            throw new Error(`Can't replace element`);
        return parentNode.replaceChild(replacementElement, element);
    }
    /**
     * @return {?}
     */
    static getUserAgent() {
        return navigator.userAgent;
    }
    /**
     * @return {?}
     */
    static isIE() {
        /** @type {?} */
        const ua = window.navigator.userAgent;
        /** @type {?} */
        const msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
        }
        /** @type {?} */
        const trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            //   const rv = ua.indexOf('rv:');
            return true;
        }
        /** @type {?} */
        const edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
        }
        // other browser
        return false;
    }
    /**
     * @return {?}
     */
    static isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !((/** @type {?} */ (window))).MSStream;
    }
    /**
     * @return {?}
     */
    static isAndroid() {
        return /(android)/i.test(navigator.userAgent);
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    static appendChild(element, target) {
        if (this.isElement(target))
            target.appendChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.appendChild(element);
        else
            throw new Error('Cannot append ' + target + ' to ' + element);
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    static removeChild(element, target) {
        if (this.isElement(target))
            target.removeChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.removeChild(element);
        else
            throw new Error('Cannot remove ' + element + ' from ' + target);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    static isElement(obj) {
        return typeof HTMLElement === 'object'
            ? obj instanceof HTMLElement
            : obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    }
    /**
     * @param {?=} el
     * @return {?}
     */
    static calculateScrollbarWidth(el) {
        if (el) {
            /** @type {?} */
            const style = getComputedStyle(el) || {};
            return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
        }
        else {
            if (this.calculatedScrollbarWidth || this.calculatedScrollbarWidth === 0) {
                return this.calculatedScrollbarWidth;
            }
            /** @type {?} */
            const scrollDiv = document.createElement('div');
            scrollDiv.className = 'ui-scrollbar-measure';
            document.body.appendChild(scrollDiv);
            /** @type {?} */
            const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            this.calculatedScrollbarWidth = scrollbarWidth;
            return scrollbarWidth;
        }
    }
    /**
     * @return {?}
     */
    static calculateScrollbarHeight() {
        if (this.calculatedScrollbarHeight || this.calculatedScrollbarHeight === 0) {
            return this.calculatedScrollbarHeight;
        }
        /** @type {?} */
        const scrollDiv = document.createElement('div');
        scrollDiv.className = 'ui-scrollbar-measure';
        document.body.appendChild(scrollDiv);
        /** @type {?} */
        const scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarHeight;
        return scrollbarHeight;
    }
    /**
     * @param {?} element
     * @param {?} methodName
     * @param {?=} args
     * @return {?}
     */
    static invokeElementMethod(element, methodName, args) {
        ((/** @type {?} */ (element)))[methodName].apply(element, args);
    }
    /**
     * @return {?}
     */
    static clearSelection() {
        /** @type {?} */
        const selection1 = ((/** @type {?} */ (document))).selection;
        if (window.getSelection) {
            /** @type {?} */
            const selection = window.getSelection() || {};
            if (selection.empty) {
                selection.empty();
            }
            else if (selection.removeAllRanges && selection.rangeCount > 0 && selection.getRangeAt(0).getClientRects().length > 0) {
                selection().removeAllRanges();
            }
        }
        else if (selection1.selection && selection1.empty) {
            try {
                selection1.empty();
            }
            catch (error) {
                // ignore IE bug
            }
        }
    }
    /**
     * @return {?}
     */
    static getBrowser() {
        if (!this.browser) {
            /** @type {?} */
            const matched = this.resolveUserAgent();
            this.browser = {};
            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser.version = matched.version;
            }
            if (this.browser.chrome) {
                this.browser.webkit = true;
            }
            else if (this.browser.webkit) {
                this.browser.safari = true;
            }
        }
        return this.browser;
    }
    /**
     * @return {?}
     */
    static resolveUserAgent() {
        /** @type {?} */
        const ua = navigator.userAgent.toLowerCase();
        /** @type {?} */
        const match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
            [];
        return {
            browser: match[1] || '',
            version: match[2] || '0',
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static isInteger(value) {
        if (Number.isInteger) {
            return Number.isInteger(value);
        }
        else {
            return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static isHidden(element) {
        /** @type {?} */
        const cssStyles = window.getComputedStyle(element);
        /** @type {?} */
        const position = cssStyles.getPropertyValue('position');
        return element.offsetParent === null && position !== 'fixed';
    }
}
DomHandler.zindex = 1000;
if (false) {
    /** @type {?} */
    DomHandler.zindex;
    /**
     * @type {?}
     * @private
     */
    DomHandler.calculatedScrollbarWidth;
    /**
     * @type {?}
     * @private
     */
    DomHandler.calculatedScrollbarHeight;
    /**
     * @type {?}
     * @private
     */
    DomHandler.browser;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 获取时间范围
 * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param {?=} time 开始时间
 * @return {?}
 */
function getTimeDistance(type, time) {
    time = parse(time || new Date());
    /** @type {?} */
    const options = { weekStartsOn: 1 };
    /** @type {?} */
    let res;
    switch (type) {
        case 'today':
            res = [time, time];
            break;
        case '-today':
            res = [addDays(time, -1), time];
            break;
        case 'yesterday':
            res = [addDays(time, -1), addDays(time, -1)];
            break;
        case 'week':
            res = [startOfWeek(time, options), endOfWeek(time, options)];
            break;
        case '-week':
            res = [startOfWeek(subWeeks(time, 1), options), endOfWeek(subWeeks(time, 1), options)];
            break;
        case 'month':
            res = [startOfMonth(time), endOfMonth(time)];
            break;
        case '-month':
            res = [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
            break;
        case 'year':
            res = [startOfYear(time), endOfYear(time)];
            break;
        case '-year':
            res = [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
            break;
        default:
            res = type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
            break;
    }
    return fixEndTimeOfRange(res);
}
/**
 * fix time is the most, big value
 * @param {?} dates
 * @return {?}
 */
function fixEndTimeOfRange(dates) {
    return [startOfDay(dates[0]), endOfDay(dates[1])];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LazyResult() { }
if (false) {
    /** @type {?} */
    LazyResult.prototype.path;
    /** @type {?} */
    LazyResult.prototype.loaded;
    /** @type {?} */
    LazyResult.prototype.status;
    /** @type {?|undefined} */
    LazyResult.prototype.error;
}
class LazyService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get change() {
        return this._notify.asObservable().pipe(share(), filter((/**
         * @param {?} ls
         * @return {?}
         */
        ls => ls.length !== 0)));
    }
    /**
     * @return {?}
     */
    clear() {
        this.list = {};
        this.cached = {};
    }
    /**
     * @param {?} paths
     * @return {?}
     */
    load(paths) {
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        /** @type {?} */
        const promises = [];
        paths.forEach((/**
         * @param {?} path
         * @return {?}
         */
        path => {
            if (path.endsWith('.js')) {
                promises.push(this.loadScript(path));
            }
            else {
                promises.push(this.loadStyle(path));
            }
        }));
        return Promise.all(promises).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this._notify.next(res);
            return Promise.resolve(res);
        }));
    }
    /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    loadScript(path, innerContent) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const onSuccess = (/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                this.cached[path] = item;
                resolve(item);
            });
            /** @type {?} */
            const node = (/** @type {?} */ (this.doc.createElement('script')));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if (node.readyState) {
                // IE
                node.onreadystatechange = (/**
                 * @return {?}
                 */
                () => {
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        onSuccess({
                            path,
                            loaded: true,
                            status: 'ok',
                        });
                    }
                });
            }
            else {
                node.onload = (/**
                 * @return {?}
                 */
                () => onSuccess({
                    path,
                    loaded: true,
                    status: 'ok',
                }));
            }
            node.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => onSuccess({
                path,
                loaded: false,
                status: 'error',
                error,
            }));
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        }));
    }
    /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    loadStyle(path, rel = 'stylesheet', innerContent) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const node = (/** @type {?} */ (this.doc.createElement('link')));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            const item = {
                path,
                loaded: true,
                status: 'ok',
            };
            this.cached[path] = item;
            resolve(item);
        }));
    }
}
LazyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LazyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ LazyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LazyService_Factory() { return new LazyService(ɵɵinject(DOCUMENT)); }, token: LazyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.list;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.cached;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype._notify;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 是否为数字
 * @param {?} value
 * @return {?}
 */
function isNum(value) {
    return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}
/**
 * 是否为整数
 * @param {?} value
 * @return {?}
 */
function isInt(value) {
    // tslint:disable-next-line:triple-equals
    return isNum(value) && parseInt(value.toString(), 10) == value;
}
/**
 * 是否为小数
 * @param {?} value
 * @return {?}
 */
function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/**
 * 是否为身份证
 * @param {?} value
 * @return {?}
 */
function isIdCard(value) {
    return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
}
/**
 * 是否为手机号
 * @param {?} value
 * @return {?}
 */
function isMobile(value) {
    return typeof value === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
}
/**
 * 是否为手机号/座机/或有特殊符号分隔的电话号码
 * @param {?=} which
 * @param {?=} value
 * @return {?}
 */
function isTelPhone(which = 'phone', value) {
    /** @type {?} */
    const _regex = {
        phone: /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/,
        tel: /^[0]\d{2,3}-\d{7,8}$/,
        // 标准座机没分号
        multFormat: /^\d[\s+-\/,，0-9]{0,34}$/,
    };
    return _regex[which].test(value);
}
/**
 * 是否URL地址
 * @param {?} url
 * @return {?}
 */
function isUrl(url) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(url);
}
/**
 * 是否base64编码
 * @param {?} value
 * @return {?}
 */
function isBase64(value) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i.test(value);
}
/**
 * 是否银行卡格式
 * @param {?} value
 * @return {?}
 */
function isCreditCard(value) {
    /** @type {?} */
    const sanitized = value.replace(/[^0-9]+/g, '');
    return /^(?:[1-9]{1})(?:\d{15}|\d{18})$/.test(sanitized);
}
/**
 * 是否email
 * @param {?} value
 * @return {?}
 */
function isEmail(value) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
}
/**
 * 是否uuid
 * @param {?} value
 * @return {?}
 */
function isUUID(value) {
    return /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i.test(value);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
class _Validators {
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    static num(control) {
        return isNum(control.value) ? null : { num: true };
    }
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    static int(control) {
        return isInt(control.value) ? null : { int: true };
    }
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    static decimal(control) {
        return isDecimal(control.value) ? null : { decimal: true };
    }
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    static idCard(control) {
        return isIdCard(control.value) ? null : { idCard: true };
    }
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    static mobile(control) {
        return isMobile(control.value) ? null : { mobile: true };
    }
    /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param {?=} which 号码类型
     * @return {?}
     */
    static telPhone(which) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            return isTelPhone(which, control.value) ? null : { telPhone: true };
        });
    }
    /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    static url(control) {
        return isUrl(control.value) ? null : { url: true };
    }
    /**
     * 是否base64编码
     * @param {?} control
     * @return {?}
     */
    static base64(control) {
        return isBase64(control.value) ? null : { base64: true };
    }
    /**
     * 是否银行卡
     * @param {?} control
     * @return {?}
     */
    static creditCard(control) {
        return isCreditCard(control.value) ? null : { creditCard: true };
    }
    /**
     * 是否email
     * @param {?} control
     * @return {?}
     */
    static email(control) {
        return isEmail(control.value) ? null : { email: true };
    }
    /**
     * 是否全等
     * @param {?} val
     * @return {?}
     */
    static equal(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return val === v ? null : { equal: true };
        });
    }
    /**
     * 是否大于某个数
     * @param {?} val
     * @return {?}
     */
    static gt(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v > +val ? null : { gt: true };
        });
    }
    /**
     * 是否大于等于某个数
     * @param {?} val
     * @return {?}
     */
    static gte(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v >= +val ? null : { gte: true };
        });
    }
    /**
     * 是否小于某个数
     * @param {?} val
     * @return {?}
     */
    static lt(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v < +val ? null : { lt: true };
        });
    }
    /**
     * 是否小于等于某个数
     * @param {?} val
     * @return {?}
     */
    static lte(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v <= +val ? null : { lte: true };
        });
    }
    /**
     * 是否在指定区间内
     * @param {?} val
     * @return {?}
     */
    static range(val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const v = control.value;
            return +v >= val[0] && +v <= val[1] ? null : { range: true };
        });
    }
    /**
     * 是否uuid
     * @param {?} control
     * @return {?}
     */
    static uuid(control) {
        return isUUID(control.value) ? null : { uuid: true };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function isEmpty(element) {
    /** @type {?} */
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        /** @type {?} */
        const node = nodes.item(i);
        if (node.nodeType === 1 && ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            return false;
        }
        else if (node.nodeType === 3 && (/** @type {?} */ (node.textContent)).toString().trim().length !== 0) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @param {?=} allowUndefined
 * @return {?}
 */
function toBoolean(value, allowUndefined = false) {
    return allowUndefined && typeof value === 'undefined' ? undefined : value != null && `${value}` !== 'false' || value === '';
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 * \@example
 * ```typescript
 * \@Input() \@InputBoolean() visible: boolean = false; / \@InputBoolean(null) visible: boolean = false;
 * ```
 * @param {?=} allowUndefined
 * @return {?}
 */
function InputBoolean(allowUndefined = false) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        const privatePropName = `$$__${name}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputBoolean decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        Object.defineProperty(target, name, {
            /**
             * @return {?}
             */
            get() {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                this[privatePropName] = toBoolean(value, allowUndefined); // tslint:disable-line:no-invalid-this
            },
        });
    });
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function toNumber(value, fallbackValue = 0) {
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 * \@example
 * ```typescript
 * \@Input() \@InputNumber() visible: number = 1; / \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} fallback
 * @return {?}
 */
function InputNumber(fallback = 0) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        const privatePropName = `$$__${name}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputNumber decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        Object.defineProperty(target, name, {
            /**
             * @return {?}
             */
            get() {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                this[privatePropName] = toNumber(value, fallback); // tslint:disable-line:no-invalid-this
            },
        });
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 模拟lodash _.pick
 * @param {?} o
 * @param {?} props
 * @return {?}
 */
function pick(o, props) {
    return Object.assign({}, ...props.map((/**
     * @param {?} prop
     * @return {?}
     */
    prop => ({ [prop]: o[prop] }))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function removeClass(el, classMap, renderer) {
    // tslint:disable-next-line: forin
    for (const i in classMap) {
        renderer.removeClass(el, i);
    }
}
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function addClass(el, classMap, renderer) {
    for (const i in classMap) {
        if (classMap[i]) {
            renderer.addClass(el, i);
        }
    }
}
/**
 * 更新宿主组件样式 `class`，例如：
 *
 * ```ts
 * updateHostClass(
 *  this.el.nativeElement,
 *  this.renderer,
 *  {
 *    [ 'classname' ]: true,
 *    [ 'classname' ]: this.type === '1',
 *    [ this.cls ]: true,
 *    [ `a-${this.cls}` ]: true
 *  })
 * ```
 *
 * @param {?} el
 * @param {?} renderer
 * @param {?} classMap
 * @param {?=} cleanAll
 * @return {?}
 */
function updateHostClass(el, renderer, classMap, cleanAll = false) {
    if (cleanAll === true) {
        renderer.removeAttribute(el, 'class');
    }
    else {
        removeClass(el, classMap, renderer);
    }
    classMap = Object.assign({}, classMap);
    addClass(el, classMap, renderer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ArrayConfig() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.parentMapName;
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.parentIdMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.childrenMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.titleMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.disabledMapname;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PixelmonUtilConfig {
}
PixelmonUtilConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ PixelmonUtilConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function PixelmonUtilConfig_Factory() { return new PixelmonUtilConfig(); }, token: PixelmonUtilConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    PixelmonUtilConfig.prototype.array;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ArrayServiceTreeToArrOptions() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.parentMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.childrenMapName;
    /**
     * 是否移除 `children` 节点，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.clearChildren;
    /**
     * 转换成数组结构时回调
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.cb;
}
/**
 * @record
 */
function ArrayServiceArrToTreeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.parentIdMapName;
    /**
     * 子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.childrenMapName;
    /**
     * 转换成树数据时回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.cb;
}
/**
 * @record
 */
function ArrayServiceArrToTreeNodeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.parentIdMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.titleMapName;
    /**
     * 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点，默认：`'isLeaf'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.isLeafMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.disabledMapname;
    /**
     * 转换成树数据后，执行的递归回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.cb;
}
/**
 * @record
 */
function ArrayServiceGetKeysByTreeNodeOptions() { }
if (false) {
    /**
     * 是否包含半选状态的值，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.includeHalfChecked;
    /**
     * 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.keyMapName;
    /**
     * 回调，返回一个值 `key` 值，优先级高于其他
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.cb;
}
class ArrayService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.c = Object.assign({ deepMapName: 'deep', parentMapName: 'parent', idMapName: 'id', parentIdMapName: 'parent_id', childrenMapName: 'children', titleMapName: 'title', checkedMapname: 'checked', selectedMapname: 'selected', expandedMapname: 'expanded', disabledMapname: 'disabled' }, (cog && cog.array));
    }
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    treeToArr(tree, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options)));
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const inFn = (/**
         * @param {?} list
         * @param {?} parent
         * @param {?=} deep
         * @return {?}
         */
        (list, parent, deep = 0) => {
            for (const i of list) {
                i[(/** @type {?} */ (opt.deepMapName))] = deep;
                i[(/** @type {?} */ (opt.parentMapName))] = parent;
                if (opt.cb) {
                    opt.cb(i, parent, deep);
                }
                result.push(i);
                /** @type {?} */
                const children = i[(/** @type {?} */ (opt.childrenMapName))];
                if (children != null && Array.isArray(children) && children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (opt.clearChildren) {
                    delete i[(/** @type {?} */ (opt.childrenMapName))];
                }
            }
        });
        inFn(tree, 1);
        return result;
    }
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTree(arr, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
        /** @type {?} */
        const tree = [];
        /** @type {?} */
        const childrenOf = {};
        for (const item of arr) {
            /** @type {?} */
            const id = item[(/** @type {?} */ (opt.idMapName))];
            /** @type {?} */
            const pid = item[(/** @type {?} */ (opt.parentIdMapName))];
            childrenOf[id] = childrenOf[id] || [];
            item[(/** @type {?} */ (opt.childrenMapName))] = childrenOf[id];
            if (opt.cb) {
                opt.cb(item);
            }
            if (pid) {
                childrenOf[pid] = childrenOf[pid] || [];
                childrenOf[pid].push(item);
            }
            else {
                tree.push(item);
            }
        }
        return tree;
    }
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTreeNode(arr, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options)));
        /** @type {?} */
        const tree = this.arrToTree(arr, {
            idMapName: opt.idMapName,
            parentIdMapName: opt.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (item, parent, deep) => {
            item.key = item[(/** @type {?} */ (opt.idMapName))];
            item.title = item[(/** @type {?} */ (opt.titleMapName))];
            item.checked = item[(/** @type {?} */ (opt.checkedMapname))];
            item.selected = item[(/** @type {?} */ (opt.selectedMapname))];
            item.expanded = item[(/** @type {?} */ (opt.expandedMapname))];
            item.disabled = item[(/** @type {?} */ (opt.disabledMapname))];
            if (item[(/** @type {?} */ (opt.isLeafMapName))] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[(/** @type {?} */ (opt.isLeafMapName))];
            }
            if (opt.cb) {
                opt.cb(item, parent, deep);
            }
        }));
        return tree.map((/**
         * @param {?} node
         * @return {?}
         */
        node => new NzTreeNode(node)));
    }
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    visitTree(tree, cb, options) {
        options = Object.assign({ childrenMapName: this.c.childrenMapName }, options);
        /** @type {?} */
        const inFn = (/**
         * @param {?} data
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (data, parent, deep) => {
            for (const item of data) {
                cb(item, parent, deep);
                /** @type {?} */
                const childrenVal = item[(/** @type {?} */ ((/** @type {?} */ (options)).childrenMapName))];
                if (childrenVal && childrenVal.length > 0) {
                    inFn(childrenVal, item, deep + 1);
                }
            }
        });
        inFn(tree, null, 1);
    }
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    getKeysByTreeNode(tree, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ includeHalfChecked: true }, options)));
        /** @type {?} */
        const keys = [];
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (item, parent, deep) => {
            if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
            }
        }));
        return keys;
    }
}
ArrayService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ArrayService.ctorParameters = () => [
    { type: PixelmonUtilConfig }
];
/** @nocollapse */ ArrayService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(ɵɵinject(PixelmonUtilConfig)); }, token: ArrayService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayService.prototype.c;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PixelmonUtilModule {
}
PixelmonUtilModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [StringTemplateOutletDirective],
                exports: [StringTemplateOutletDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ArrayService, DomHandler, InputBoolean, InputNumber, LazyService, PixelmonUtilConfig, PixelmonUtilModule, StringTemplateOutletDirective, _Validators, copy, deepClone, deepCopy, deepGet, deepMerge, deepMergeKey, fixEndTimeOfRange, format, getTimeDistance, isBase64, isCreditCard, isDecimal, isEmail, isEmpty, isEmptyVal, isIdCard, isInt, isMobile, isNum, isTelPhone, isUUID, isUrl, isValidVal, pick, toBoolean, toCentNumber, toFixed, toNumber, toYuanNumber, updateHostClass, uuidv1, uuidv3, uuidv4, uuidv5 };
//# sourceMappingURL=util.js.map
