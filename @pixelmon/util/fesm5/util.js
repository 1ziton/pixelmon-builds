import { TemplateRef, Directive, ViewContainerRef, Input, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { __spread, __assign, __values } from 'tslib';
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
var StringTemplateOutletDirective = /** @class */ (function () {
    function StringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
    }
    Object.defineProperty(StringTemplateOutletDirective.prototype, "stringTemplateOutlet", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StringTemplateOutletDirective.prototype.updateView = /**
     * @return {?}
     */
    function () {
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
    };
    StringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[stringTemplateOutlet]',
                },] }
    ];
    /** @nocollapse */
    StringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    StringTemplateOutletDirective.propDecorators = {
        stringTemplateOutlet: [{ type: Input }]
    };
    return StringTemplateOutletDirective;
}());
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
        var checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    /** @type {?} */
    var res = path.reduce((/**
     * @param {?} o
     * @param {?} k
     * @return {?}
     */
    function (o, k) { return (o || {})[k]; }), obj);
    return typeof res === 'undefined' ? defaultValue : res;
}
/**
 * @param {?} obj
 * @return {?}
 */
function deepCopy(obj) {
    /** @type {?} */
    var result = extend(true, {}, { _: obj });
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
    function (resolve) {
        /** @type {?} */
        var copyTextArea = null;
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
function deepMergeKey(original, ingoreArray) {
    var objects = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        objects[_i - 2] = arguments[_i];
    }
    if (Array.isArray(original) || typeof original !== 'object')
        return original;
    /** @type {?} */
    var isObject = (/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return typeof v === 'object' || typeof v === 'function'; });
    /** @type {?} */
    var merge = (/**
     * @param {?} target
     * @param {?} obj
     * @return {?}
     */
    function (target, obj) {
        Object.keys(obj)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key); }))
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var oldValue = obj[key];
            /** @type {?} */
            var newValue = target[key];
            if (Array.isArray(newValue)) {
                target[key] = ingoreArray ? oldValue : __spread(newValue, oldValue);
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
    function (v) { return v != null && isObject(v); })).forEach((/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return merge(original, v); }));
    return original;
}
/**
 * @param {?} original
 * @param {...?} objects
 * @return {?}
 */
function deepMerge(original) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    return deepMergeKey.apply(void 0, __spread([original, false], objects));
}
/**
 * val值为空字符，null，undefined
 * @type {?}
 */
var isEmptyVal = (/**
 * @param {?} val
 * @return {?}
 */
function (val) {
    /** @type {?} */
    var arr = [undefined, null, ''];
    return arr.includes(val);
});
/**
 * 有效的值
 * @type {?}
 */
var isValidVal = (/**
 * @param {?} val
 * @return {?}
 */
function (val) {
    return !isEmptyVal(val) && !['null', 'undefined'].includes(val);
});
/**
 * 深克隆
 * \@param obj
 * @type {?}
 */
var deepClone = (/**
 * @param {?} obj
 * @return {?}
 */
function (obj) {
    /** @type {?} */
    var clone = __assign({}, obj);
    Object.keys(clone).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]); }));
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
function format(str, obj, needDeepGet) {
    if (needDeepGet === void 0) { needDeepGet = false; }
    return (str || '').replace(/\${([^}]+)}/g, (/**
     * @param {?} _work
     * @param {?} key
     * @return {?}
     */
    function (_work, key) {
        return needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || '';
    }));
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
var toFixed = (/**
 * @param {?} value
 * @param {?=} precision
 * @return {?}
 */
function (value, precision) {
    if (precision === void 0) { precision = 2; }
    /** @type {?} */
    var num = Number(value);
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
var toCentNumber = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    /** @type {?} */
    var num = Number(value);
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
var toYuanNumber = (/**
 * @param {?} centval
 * @param {?=} precision
 * @return {?}
 */
function (centval, precision) {
    if (precision === void 0) { precision = 2; }
    /** @type {?} */
    var num = Number(centval);
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
var uuid = v4;
uuid.v1 = v1;
uuid.v3 = v3;
uuid.v4 = v4;
uuid.v5 = v5;
/** @type {?} */
var uuidv1 = v1;
/** @type {?} */
var uuidv3 = v3;
/** @type {?} */
var uuidv4 = v4;
/** @type {?} */
var uuidv5 = v5;

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
var DomHandler = /** @class */ (function () {
    function DomHandler() {
    }
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    DomHandler.addClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    DomHandler.addMultipleClasses = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) {
        var e_1, _a, e_2, _b;
        if (element.classList) {
            /** @type {?} */
            var styles = className.split(' ');
            try {
                for (var styles_1 = __values(styles), styles_1_1 = styles_1.next(); !styles_1_1.done; styles_1_1 = styles_1.next()) {
                    var style = styles_1_1.value;
                    element.classList.add(style);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (styles_1_1 && !styles_1_1.done && (_a = styles_1.return)) _a.call(styles_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            /** @type {?} */
            var styles = className.split(' ');
            try {
                for (var styles_2 = __values(styles), styles_2_1 = styles_2.next(); !styles_2_1.done; styles_2_1 = styles_2.next()) {
                    var style = styles_2_1.value;
                    element.className += ' ' + style;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (styles_2_1 && !styles_2_1.done && (_b = styles_2.return)) _b.call(styles_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    DomHandler.removeClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    DomHandler.hasClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomHandler.siblings = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return Array.prototype.filter.call(element.parentNode.children, (/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            return child !== element;
        }));
    };
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    DomHandler.find = /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    function (element, selector) {
        return Array.from(element.querySelectorAll(selector));
    };
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    DomHandler.findSingle = /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    function (element, selector) {
        if (element) {
            return element.querySelector(selector);
        }
        return null;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomHandler.index = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var children = element.parentNode.childNodes;
        /** @type {?} */
        var num = 0;
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < children.length; i++) {
            if (children[i] === element)
                return num;
            if (children[i].nodeType === 1)
                num++;
        }
        return -1;
    };
    /**
     * @param {?} element
     * @param {?} attributeName
     * @return {?}
     */
    DomHandler.indexWithinGroup = /**
     * @param {?} element
     * @param {?} attributeName
     * @return {?}
     */
    function (element, attributeName) {
        /** @type {?} */
        var children = element.parentNode.childNodes;
        /** @type {?} */
        var num = 0;
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < children.length; i++) {
            if (children[i] === element)
                return num;
            if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType === 1)
                num++;
        }
        return -1;
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    DomHandler.relativePosition = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elementDimensions = element.offsetParent
            ? { width: element.offsetWidth, height: element.offsetHeight }
            : this.getHiddenElementDimensions(element);
        /** @type {?} */
        var targetHeight = target.offsetHeight;
        /** @type {?} */
        var targetOffset = target.getBoundingClientRect();
        /** @type {?} */
        var viewport = this.getViewport();
        // tslint:disable-next-line: one-variable-per-declaration
        /** @type {?} */
        var top;
        /** @type {?} */
        var left;
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
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    DomHandler.absolutePosition = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elementDimensions = element.offsetParent
            ? { width: element.offsetWidth, height: element.offsetHeight }
            : this.getHiddenElementDimensions(element);
        /** @type {?} */
        var elementOuterHeight = elementDimensions.height;
        /** @type {?} */
        var elementOuterWidth = elementDimensions.width;
        /** @type {?} */
        var targetOuterHeight = target.offsetHeight;
        /** @type {?} */
        var targetOuterWidth = target.offsetWidth;
        /** @type {?} */
        var targetOffset = target.getBoundingClientRect();
        /** @type {?} */
        var windowScrollTop = this.getWindowScrollTop();
        /** @type {?} */
        var windowScrollLeft = this.getWindowScrollLeft();
        /** @type {?} */
        var viewport = this.getViewport();
        // tslint:disable-next-line: one-variable-per-declaration
        /** @type {?} */
        var top;
        /** @type {?} */
        var left;
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
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomHandler.getHiddenElementOuterHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        /** @type {?} */
        var elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomHandler.getHiddenElementOuterWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        /** @type {?} */
        var elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomHandler.getHiddenElementDimensions = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return dimensions;
    };
    /**
     * @param {?} container
     * @param {?} item
     * @return {?}
     */
    DomHandler.scrollInView = /**
     * @param {?} container
     * @param {?} item
     * @return {?}
     */
    function (container, item) {
        /** @type {?} */
        var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        /** @type {?} */
        var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        /** @type {?} */
        var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        /** @type {?} */
        var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        /** @type {?} */
        var containerRect = container.getBoundingClientRect();
        /** @type {?} */
        var itemRect = item.getBoundingClientRect();
        /** @type {?} */
        var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        /** @type {?} */
        var scroll = container.scrollTop;
        /** @type {?} */
        var elementHeight = container.clientHeight;
        /** @type {?} */
        var itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if (offset + itemHeight > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    };
    /**
     * @param {?} element
     * @param {?} duration
     * @return {?}
     */
    DomHandler.fadeIn = /**
     * @param {?} element
     * @param {?} duration
     * @return {?}
     */
    function (element, duration) {
        element.style.opacity = 0;
        /** @type {?} */
        var last = +new Date();
        /** @type {?} */
        var opacity = 0;
        /** @type {?} */
        var tick = (/**
         * @return {?}
         */
        function () {
            opacity = +element.style.opacity.replace(',', '.') + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();
            if (+opacity < 1) {
                // tslint:disable-next-line: no-unused-expression
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        });
        tick();
    };
    /**
     * @param {?} element
     * @param {?} ms
     * @return {?}
     */
    DomHandler.fadeOut = /**
     * @param {?} element
     * @param {?} ms
     * @return {?}
     */
    function (element, ms) {
        /** @type {?} */
        var opacity = 1;
        /** @type {?} */
        var interval = 50;
        /** @type {?} */
        var duration = ms;
        /** @type {?} */
        var gap = interval / duration;
        /** @type {?} */
        var fading = setInterval((/**
         * @return {?}
         */
        function () {
            opacity = opacity - gap;
            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }
            element.style.opacity = opacity;
        }), interval);
    };
    /**
     * @return {?}
     */
    DomHandler.getWindowScrollTop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    };
    /**
     * @return {?}
     */
    DomHandler.getWindowScrollLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    };
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    DomHandler.matches = /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    function (element, selector) {
        /** @type {?} */
        var p = Element.prototype;
        /** @type {?} */
        var f = p.matches ||
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
    };
    /**
     * @param {?} el
     * @param {?=} margin
     * @return {?}
     */
    DomHandler.getOuterWidth = /**
     * @param {?} el
     * @param {?=} margin
     * @return {?}
     */
    function (el, margin) {
        /** @type {?} */
        var width = el.offsetWidth;
        if (margin) {
            /** @type {?} */
            var style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DomHandler.getHorizontalPadding = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var style = getComputedStyle(el);
        return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DomHandler.getHorizontalMargin = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var style = getComputedStyle(el);
        return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DomHandler.innerWidth = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var width = el.offsetWidth;
        /** @type {?} */
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DomHandler.width = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var width = el.offsetWidth;
        /** @type {?} */
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DomHandler.getInnerHeight = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var height = el.offsetHeight;
        /** @type {?} */
        var style = getComputedStyle(el);
        height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return height;
    };
    /**
     * @param {?} el
     * @param {?=} margin
     * @return {?}
     */
    DomHandler.getOuterHeight = /**
     * @param {?} el
     * @param {?=} margin
     * @return {?}
     */
    function (el, margin) {
        /** @type {?} */
        var height = el.offsetHeight;
        if (margin) {
            /** @type {?} */
            var style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DomHandler.getHeight = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var height = el.offsetHeight;
        /** @type {?} */
        var style = getComputedStyle(el);
        height -=
            parseFloat(style.paddingTop) +
                parseFloat(style.paddingBottom) +
                parseFloat(style.borderTopWidth) +
                parseFloat(style.borderBottomWidth);
        return height;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DomHandler.getWidth = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var width = el.offsetWidth;
        /** @type {?} */
        var style = getComputedStyle(el);
        width -=
            parseFloat(style.paddingLeft) +
                parseFloat(style.paddingRight) +
                parseFloat(style.borderLeftWidth) +
                parseFloat(style.borderRightWidth);
        return width;
    };
    /**
     * @return {?}
     */
    DomHandler.getViewport = /**
     * @return {?}
     */
    function () {
        // tslint:disable-next-line: one-variable-per-declaration
        /** @type {?} */
        var win = window;
        /** @type {?} */
        var d = document;
        /** @type {?} */
        var e = d.documentElement;
        /** @type {?} */
        var g = d.getElementsByTagName('body')[0];
        /** @type {?} */
        var w = win.innerWidth || e.clientWidth || g.clientWidth;
        /** @type {?} */
        var h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DomHandler.getOffset = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft,
        };
    };
    /**
     * @param {?} element
     * @param {?} replacementElement
     * @return {?}
     */
    DomHandler.replaceElementWith = /**
     * @param {?} element
     * @param {?} replacementElement
     * @return {?}
     */
    function (element, replacementElement) {
        /** @type {?} */
        var parentNode = element.parentNode;
        if (!parentNode)
            throw new Error("Can't replace element");
        return parentNode.replaceChild(replacementElement, element);
    };
    /**
     * @return {?}
     */
    DomHandler.getUserAgent = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent;
    };
    /**
     * @return {?}
     */
    DomHandler.isIE = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ua = window.navigator.userAgent;
        /** @type {?} */
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
        }
        /** @type {?} */
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            //   const rv = ua.indexOf('rv:');
            return true;
        }
        /** @type {?} */
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
        }
        // other browser
        return false;
    };
    /**
     * @return {?}
     */
    DomHandler.isIOS = /**
     * @return {?}
     */
    function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !((/** @type {?} */ (window))).MSStream;
    };
    /**
     * @return {?}
     */
    DomHandler.isAndroid = /**
     * @return {?}
     */
    function () {
        return /(android)/i.test(navigator.userAgent);
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    DomHandler.appendChild = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        if (this.isElement(target))
            target.appendChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.appendChild(element);
        else
            throw new Error('Cannot append ' + target + ' to ' + element);
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    DomHandler.removeChild = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        if (this.isElement(target))
            target.removeChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.removeChild(element);
        else
            throw new Error('Cannot remove ' + element + ' from ' + target);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DomHandler.isElement = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return typeof HTMLElement === 'object'
            ? obj instanceof HTMLElement
            : obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    };
    /**
     * @param {?=} el
     * @return {?}
     */
    DomHandler.calculateScrollbarWidth = /**
     * @param {?=} el
     * @return {?}
     */
    function (el) {
        if (el) {
            /** @type {?} */
            var style = getComputedStyle(el) || {};
            return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
        }
        else {
            if (this.calculatedScrollbarWidth || this.calculatedScrollbarWidth === 0) {
                return this.calculatedScrollbarWidth;
            }
            /** @type {?} */
            var scrollDiv = document.createElement('div');
            scrollDiv.className = 'ui-scrollbar-measure';
            document.body.appendChild(scrollDiv);
            /** @type {?} */
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            this.calculatedScrollbarWidth = scrollbarWidth;
            return scrollbarWidth;
        }
    };
    /**
     * @return {?}
     */
    DomHandler.calculateScrollbarHeight = /**
     * @return {?}
     */
    function () {
        if (this.calculatedScrollbarHeight || this.calculatedScrollbarHeight === 0) {
            return this.calculatedScrollbarHeight;
        }
        /** @type {?} */
        var scrollDiv = document.createElement('div');
        scrollDiv.className = 'ui-scrollbar-measure';
        document.body.appendChild(scrollDiv);
        /** @type {?} */
        var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarHeight;
        return scrollbarHeight;
    };
    /**
     * @param {?} element
     * @param {?} methodName
     * @param {?=} args
     * @return {?}
     */
    DomHandler.invokeElementMethod = /**
     * @param {?} element
     * @param {?} methodName
     * @param {?=} args
     * @return {?}
     */
    function (element, methodName, args) {
        ((/** @type {?} */ (element)))[methodName].apply(element, args);
    };
    /**
     * @return {?}
     */
    DomHandler.clearSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection1 = ((/** @type {?} */ (document))).selection;
        if (window.getSelection) {
            /** @type {?} */
            var selection = window.getSelection() || {};
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
    };
    /**
     * @return {?}
     */
    DomHandler.getBrowser = /**
     * @return {?}
     */
    function () {
        if (!this.browser) {
            /** @type {?} */
            var matched = this.resolveUserAgent();
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
    };
    /**
     * @return {?}
     */
    DomHandler.resolveUserAgent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ua = navigator.userAgent.toLowerCase();
        /** @type {?} */
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
            [];
        return {
            browser: match[1] || '',
            version: match[2] || '0',
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DomHandler.isInteger = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Number.isInteger) {
            return Number.isInteger(value);
        }
        else {
            return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomHandler.isHidden = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var cssStyles = window.getComputedStyle(element);
        /** @type {?} */
        var position = cssStyles.getPropertyValue('position');
        return element.offsetParent === null && position !== 'fixed';
    };
    DomHandler.zindex = 1000;
    return DomHandler;
}());
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
    var options = { weekStartsOn: 1 };
    /** @type {?} */
    var res;
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
var LazyService = /** @class */ (function () {
    function LazyService(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    Object.defineProperty(LazyService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._notify.asObservable().pipe(share(), filter((/**
             * @param {?} ls
             * @return {?}
             */
            function (ls) { return ls.length !== 0; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LazyService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.list = {};
        this.cached = {};
    };
    /**
     * @param {?} paths
     * @return {?}
     */
    LazyService.prototype.load = /**
     * @param {?} paths
     * @return {?}
     */
    function (paths) {
        var _this = this;
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        /** @type {?} */
        var promises = [];
        paths.forEach((/**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            if (path.endsWith('.js')) {
                promises.push(_this.loadScript(path));
            }
            else {
                promises.push(_this.loadStyle(path));
            }
        }));
        return Promise.all(promises).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this._notify.next(res);
            return Promise.resolve(res);
        }));
    };
    /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    LazyService.prototype.loadScript = /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    function (path, innerContent) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var onSuccess = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.cached[path] = item;
                resolve(item);
            });
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('script')));
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
                function () {
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        onSuccess({
                            path: path,
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
                function () {
                    return onSuccess({
                        path: path,
                        loaded: true,
                        status: 'ok',
                    });
                });
            }
            node.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return onSuccess({
                    path: path,
                    loaded: false,
                    status: 'error',
                    error: error,
                });
            });
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
        }));
    };
    /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    LazyService.prototype.loadStyle = /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    function (path, rel, innerContent) {
        var _this = this;
        if (rel === void 0) { rel = 'stylesheet'; }
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('link')));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            var item = {
                path: path,
                loaded: true,
                status: 'ok',
            };
            _this.cached[path] = item;
            resolve(item);
        }));
    };
    LazyService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LazyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LazyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LazyService_Factory() { return new LazyService(ɵɵinject(DOCUMENT)); }, token: LazyService, providedIn: "root" });
    return LazyService;
}());
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
function isTelPhone(which, value) {
    if (which === void 0) { which = 'phone'; }
    /** @type {?} */
    var _regex = {
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
    var sanitized = value.replace(/[^0-9]+/g, '');
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
var  /**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
_Validators = /** @class */ (function () {
    function _Validators() {
    }
    /** 是否为数字 */
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    _Validators.num = /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isNum(control.value) ? null : { num: true };
    };
    /** 是否为整数 */
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    _Validators.int = /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isInt(control.value) ? null : { int: true };
    };
    /** 是否为小数 */
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    _Validators.decimal = /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isDecimal(control.value) ? null : { decimal: true };
    };
    /** 是否为身份证 */
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    _Validators.idCard = /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isIdCard(control.value) ? null : { idCard: true };
    };
    /** 是否为手机号 */
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    _Validators.mobile = /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isMobile(control.value) ? null : { mobile: true };
    };
    /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param which 号码类型
     */
    /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param {?=} which 号码类型
     * @return {?}
     */
    _Validators.telPhone = /**
     * 是否为手机号/座机/或有特殊符号分隔的电话号码
     * @param {?=} which 号码类型
     * @return {?}
     */
    function (which) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            return isTelPhone(which, control.value) ? null : { telPhone: true };
        });
    };
    /** 是否URL地址 */
    /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    _Validators.url = /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isUrl(control.value) ? null : { url: true };
    };
    /** 是否base64编码 */
    /**
     * 是否base64编码
     * @param {?} control
     * @return {?}
     */
    _Validators.base64 = /**
     * 是否base64编码
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isBase64(control.value) ? null : { base64: true };
    };
    /** 是否银行卡 */
    /**
     * 是否银行卡
     * @param {?} control
     * @return {?}
     */
    _Validators.creditCard = /**
     * 是否银行卡
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isCreditCard(control.value) ? null : { creditCard: true };
    };
    /** 是否email */
    /**
     * 是否email
     * @param {?} control
     * @return {?}
     */
    _Validators.email = /**
     * 是否email
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isEmail(control.value) ? null : { email: true };
    };
    /** 是否全等 */
    /**
     * 是否全等
     * @param {?} val
     * @return {?}
     */
    _Validators.equal = /**
     * 是否全等
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return val === v ? null : { equal: true };
        });
    };
    /** 是否大于某个数 */
    /**
     * 是否大于某个数
     * @param {?} val
     * @return {?}
     */
    _Validators.gt = /**
     * 是否大于某个数
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v > +val ? null : { gt: true };
        });
    };
    /** 是否大于等于某个数 */
    /**
     * 是否大于等于某个数
     * @param {?} val
     * @return {?}
     */
    _Validators.gte = /**
     * 是否大于等于某个数
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v >= +val ? null : { gte: true };
        });
    };
    /** 是否小于某个数 */
    /**
     * 是否小于某个数
     * @param {?} val
     * @return {?}
     */
    _Validators.lt = /**
     * 是否小于某个数
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v < +val ? null : { lt: true };
        });
    };
    /** 是否小于等于某个数 */
    /**
     * 是否小于等于某个数
     * @param {?} val
     * @return {?}
     */
    _Validators.lte = /**
     * 是否小于等于某个数
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v <= +val ? null : { lte: true };
        });
    };
    /** 是否在指定区间内 */
    /**
     * 是否在指定区间内
     * @param {?} val
     * @return {?}
     */
    _Validators.range = /**
     * 是否在指定区间内
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var v = control.value;
            return +v >= val[0] && +v <= val[1] ? null : { range: true };
        });
    };
    /** 是否uuid */
    /**
     * 是否uuid
     * @param {?} control
     * @return {?}
     */
    _Validators.uuid = /**
     * 是否uuid
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isUUID(control.value) ? null : { uuid: true };
    };
    return _Validators;
}());

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
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        /** @type {?} */
        var node = nodes.item(i);
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
function toBoolean(value, allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return allowUndefined && typeof value === 'undefined' ? undefined : value != null && "" + value !== 'false' || value === '';
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
function InputBoolean(allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputBoolean decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
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
function InputNumber(fallback) {
    if (fallback === void 0) { fallback = 0; }
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputNumber decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function removeClass(el, classMap, renderer) {
    // tslint:disable-next-line: forin
    for (var i in classMap) {
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
    for (var i in classMap) {
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
function updateHostClass(el, renderer, classMap, cleanAll) {
    if (cleanAll === void 0) { cleanAll = false; }
    if (cleanAll === true) {
        renderer.removeAttribute(el, 'class');
    }
    else {
        removeClass(el, classMap, renderer);
    }
    classMap = __assign({}, classMap);
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
var PixelmonUtilConfig = /** @class */ (function () {
    function PixelmonUtilConfig() {
    }
    PixelmonUtilConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ PixelmonUtilConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function PixelmonUtilConfig_Factory() { return new PixelmonUtilConfig(); }, token: PixelmonUtilConfig, providedIn: "root" });
    return PixelmonUtilConfig;
}());
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
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
        this.c = __assign({ deepMapName: 'deep', parentMapName: 'parent', idMapName: 'id', parentIdMapName: 'parent_id', childrenMapName: 'children', titleMapName: 'title', checkedMapname: 'checked', selectedMapname: 'selected', expandedMapname: 'expanded', disabledMapname: 'disabled' }, (cog && cog.array));
    }
    /**
     * 将树结构转换成数组结构
     */
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.treeToArr = /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options)));
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var inFn = (/**
         * @param {?} list
         * @param {?} parent
         * @param {?=} deep
         * @return {?}
         */
        function (list, parent, deep) {
            var e_1, _a;
            if (deep === void 0) { deep = 0; }
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var i = list_1_1.value;
                    i[(/** @type {?} */ (opt.deepMapName))] = deep;
                    i[(/** @type {?} */ (opt.parentMapName))] = parent;
                    if (opt.cb) {
                        opt.cb(i, parent, deep);
                    }
                    result.push(i);
                    /** @type {?} */
                    var children = i[(/** @type {?} */ (opt.childrenMapName))];
                    if (children != null && Array.isArray(children) && children.length > 0) {
                        inFn(children, i, deep + 1);
                    }
                    if (opt.clearChildren) {
                        delete i[(/** @type {?} */ (opt.childrenMapName))];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        inFn(tree, 1);
        return result;
    };
    /**
     * 数组转换成树数据
     */
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTree = /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        var e_2, _a;
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
        /** @type {?} */
        var tree = [];
        /** @type {?} */
        var childrenOf = {};
        try {
            for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                /** @type {?} */
                var id = item[(/** @type {?} */ (opt.idMapName))];
                /** @type {?} */
                var pid = item[(/** @type {?} */ (opt.parentIdMapName))];
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
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return tree;
    };
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTreeNode = /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options)));
        /** @type {?} */
        var tree = this.arrToTree(arr, {
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
        function (item, parent, deep) {
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
        function (node) { return new NzTreeNode(node); }));
    };
    /**
     * 递归访问整个树
     */
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.visitTree = /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    function (tree, cb, options) {
        options = __assign({ childrenMapName: this.c.childrenMapName }, options);
        /** @type {?} */
        var inFn = (/**
         * @param {?} data
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        function (data, parent, deep) {
            var e_3, _a;
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    cb(item, parent, deep);
                    /** @type {?} */
                    var childrenVal = item[(/** @type {?} */ ((/** @type {?} */ (options)).childrenMapName))];
                    if (childrenVal && childrenVal.length > 0) {
                        inFn(childrenVal, item, deep + 1);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        });
        inFn(tree, null, 1);
    };
    /**
     * 获取所有已经选中的 `key` 值
     */
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.getKeysByTreeNode = /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ includeHalfChecked: true }, options)));
        /** @type {?} */
        var keys = [];
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        function (item, parent, deep) {
            if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
            }
        }));
        return keys;
    };
    ArrayService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ArrayService.ctorParameters = function () { return [
        { type: PixelmonUtilConfig }
    ]; };
    /** @nocollapse */ ArrayService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(ɵɵinject(PixelmonUtilConfig)); }, token: ArrayService, providedIn: "root" });
    return ArrayService;
}());
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
var PixelmonUtilModule = /** @class */ (function () {
    function PixelmonUtilModule() {
    }
    PixelmonUtilModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StringTemplateOutletDirective],
                    exports: [StringTemplateOutletDirective],
                },] }
    ];
    return PixelmonUtilModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ArrayService, DomHandler, InputBoolean, InputNumber, LazyService, PixelmonUtilConfig, PixelmonUtilModule, StringTemplateOutletDirective, _Validators, copy, deepClone, deepCopy, deepGet, deepMerge, deepMergeKey, fixEndTimeOfRange, format, getTimeDistance, isBase64, isCreditCard, isDecimal, isEmail, isEmpty, isEmptyVal, isIdCard, isInt, isMobile, isNum, isTelPhone, isUUID, isUrl, isValidVal, toBoolean, toCentNumber, toFixed, toNumber, toYuanNumber, updateHostClass, uuidv1, uuidv3, uuidv4, uuidv5 };
//# sourceMappingURL=util.js.map
