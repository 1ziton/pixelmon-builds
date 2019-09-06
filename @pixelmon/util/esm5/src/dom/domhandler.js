/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                for (var styles_1 = tslib_1.__values(styles), styles_1_1 = styles_1.next(); !styles_1_1.done; styles_1_1 = styles_1.next()) {
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
                for (var styles_2 = tslib_1.__values(styles), styles_2_1 = styles_2.next(); !styles_2_1.done; styles_2_1 = styles_2.next()) {
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
export { DomHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9taGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2RvbS9kb21oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0E7SUFBQTtJQWloQkEsQ0FBQzs7Ozs7O0lBeGdCZSxtQkFBUTs7Ozs7SUFBdEIsVUFBdUIsT0FBWSxFQUFFLFNBQWlCO1FBQ3BELElBQUksT0FBTyxDQUFDLFNBQVM7WUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7WUFDbkQsT0FBTyxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVhLDZCQUFrQjs7Ozs7SUFBaEMsVUFBaUMsT0FBWSxFQUFFLFNBQWlCOztRQUM5RCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O2dCQUNmLE1BQU0sR0FBYSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQzdDLEtBQW9CLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7b0JBQXZCLElBQU0sS0FBSyxtQkFBQTtvQkFDZCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDOUI7Ozs7Ozs7OztTQUNGO2FBQU07O2dCQUNDLE1BQU0sR0FBYSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQzdDLEtBQW9CLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7b0JBQXZCLElBQU0sS0FBSyxtQkFBQTtvQkFDZCxPQUFPLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7aUJBQ2xDOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVhLHNCQUFXOzs7OztJQUF6QixVQUEwQixPQUFZLEVBQUUsU0FBaUI7UUFDdkQsSUFBSSxPQUFPLENBQUMsU0FBUztZ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Q0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7UUFDdkQsT0FBTyxPQUFPLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssT0FBTyxDQUFDO0lBQy9ELENBQUM7SUEvZ0JhLGlCQUFNLEdBQVcsSUFBSSxDQUFDO0lBZ2hCdEMsaUJBQUM7Q0FBQSxBQWpoQkQsSUFpaEJDO1NBamhCWSxVQUFVOzs7SUFDckIsa0JBQW9DOzs7OztJQUVwQyxvQ0FBZ0Q7Ozs7O0lBRWhELHFDQUFpRDs7Ozs7SUFFakQsbUJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yOiBnaXNjYWZlciAsaHR0cHM6Ly9naXRodWIuY29tL2dpc2NhZmVyXG4gKiBAZGF0ZTogMjAxOS0wOS0wNSAxMDo1Nzo0NFxuICogQGRlc2NyaXB0aW9uOiBET03mk43kvZzlt6XlhbfnsbtcbiAqIGNvcHkgZm9ybSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZWZhY2VzL3ByaW1lbmcvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2RvbS9kb21oYW5kbGVyLnNwZWMudHNcbiAqL1xuXG5leHBvcnQgY2xhc3MgRG9tSGFuZGxlciB7XG4gIHB1YmxpYyBzdGF0aWMgemluZGV4OiBudW1iZXIgPSAxMDAwO1xuXG4gIHByaXZhdGUgc3RhdGljIGNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aDogbnVtYmVyO1xuXG4gIHByaXZhdGUgc3RhdGljIGNhbGN1bGF0ZWRTY3JvbGxiYXJIZWlnaHQ6IG51bWJlcjtcblxuICBwcml2YXRlIHN0YXRpYyBicm93c2VyOiBhbnk7XG5cbiAgcHVibGljIHN0YXRpYyBhZGRDbGFzcyhlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbHNlIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkTXVsdGlwbGVDbGFzc2VzKGVsZW1lbnQ6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgIGNvbnN0IHN0eWxlczogc3RyaW5nW10gPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgIGZvciAoY29uc3Qgc3R5bGUgb2Ygc3R5bGVzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlczogc3RyaW5nW10gPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgIGZvciAoY29uc3Qgc3R5bGUgb2Ygc3R5bGVzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIHN0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlQ2xhc3MoZWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgZWxzZSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaGFzQ2xhc3MoZWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgZWxzZSByZXR1cm4gbmV3IFJlZ0V4cCgnKF58ICknICsgY2xhc3NOYW1lICsgJyggfCQpJywgJ2dpJykudGVzdChlbGVtZW50LmNsYXNzTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNpYmxpbmdzKGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjaGlsZCAhPT0gZWxlbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmluZChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZpbmRTaW5nbGUoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbmRleChlbGVtZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgbGV0IG51bSA9IDA7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBlbGVtZW50KSByZXR1cm4gbnVtO1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVUeXBlID09PSAxKSBudW0rKztcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbmRleFdpdGhpbkdyb3VwKGVsZW1lbnQ6IGFueSwgYXR0cmlidXRlTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgIGxldCBudW0gPSAwO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gZWxlbWVudCkgcmV0dXJuIG51bTtcbiAgICAgIGlmIChjaGlsZHJlbltpXS5hdHRyaWJ1dGVzICYmIGNoaWxkcmVuW2ldLmF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gJiYgY2hpbGRyZW5baV0ubm9kZVR5cGUgPT09IDEpIG51bSsrO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlbGF0aXZlUG9zaXRpb24oZWxlbWVudDogYW55LCB0YXJnZXQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnREaW1lbnNpb25zID0gZWxlbWVudC5vZmZzZXRQYXJlbnRcbiAgICAgID8geyB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCB9XG4gICAgICA6IHRoaXMuZ2V0SGlkZGVuRWxlbWVudERpbWVuc2lvbnMoZWxlbWVudCk7XG4gICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB0YXJnZXRPZmZzZXQgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLmdldFZpZXdwb3J0KCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXG4gICAgbGV0IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXI7XG5cbiAgICBpZiAodGFyZ2V0T2Zmc2V0LnRvcCArIHRhcmdldEhlaWdodCArIGVsZW1lbnREaW1lbnNpb25zLmhlaWdodCA+IHZpZXdwb3J0LmhlaWdodCkge1xuICAgICAgdG9wID0gLTEgKiBlbGVtZW50RGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICBpZiAodGFyZ2V0T2Zmc2V0LnRvcCArIHRvcCA8IDApIHtcbiAgICAgICAgdG9wID0gLTEgKiB0YXJnZXRPZmZzZXQudG9wO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSB0YXJnZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnREaW1lbnNpb25zLndpZHRoID4gdmlld3BvcnQud2lkdGgpIHtcbiAgICAgIC8vIGVsZW1lbnQgd2lkZXIgdGhlbiB2aWV3cG9ydCBhbmQgY2Fubm90IGZpdCBvbiBzY3JlZW4gKGFsaWduIGF0IGxlZnQgc2lkZSBvZiB2aWV3cG9ydClcbiAgICAgIGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAqIC0xO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0T2Zmc2V0LmxlZnQgKyBlbGVtZW50RGltZW5zaW9ucy53aWR0aCA+IHZpZXdwb3J0LndpZHRoKSB7XG4gICAgICAvLyBlbGVtZW50IHdpZGVyIHRoZW4gdmlld3BvcnQgYnV0IGNhbiBiZSBmaXQgb24gc2NyZWVuIChhbGlnbiBhdCByaWdodCBzaWRlIG9mIHZpZXdwb3J0KVxuICAgICAgbGVmdCA9ICh0YXJnZXRPZmZzZXQubGVmdCArIGVsZW1lbnREaW1lbnNpb25zLndpZHRoIC0gdmlld3BvcnQud2lkdGgpICogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsZW1lbnQgZml0cyBvbiBzY3JlZW4gKGFsaWduIHdpdGggdGFyZ2V0KVxuICAgICAgbGVmdCA9IDA7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhYnNvbHV0ZVBvc2l0aW9uKGVsZW1lbnQ6IGFueSwgdGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50RGltZW5zaW9ucyA9IGVsZW1lbnQub2Zmc2V0UGFyZW50XG4gICAgICA/IHsgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgfVxuICAgICAgOiB0aGlzLmdldEhpZGRlbkVsZW1lbnREaW1lbnNpb25zKGVsZW1lbnQpO1xuICAgIGNvbnN0IGVsZW1lbnRPdXRlckhlaWdodCA9IGVsZW1lbnREaW1lbnNpb25zLmhlaWdodDtcbiAgICBjb25zdCBlbGVtZW50T3V0ZXJXaWR0aCA9IGVsZW1lbnREaW1lbnNpb25zLndpZHRoO1xuICAgIGNvbnN0IHRhcmdldE91dGVySGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB0YXJnZXRPdXRlcldpZHRoID0gdGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHRhcmdldE9mZnNldCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW5kb3dTY3JvbGxUb3AgPSB0aGlzLmdldFdpbmRvd1Njcm9sbFRvcCgpO1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbExlZnQgPSB0aGlzLmdldFdpbmRvd1Njcm9sbExlZnQoKTtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuZ2V0Vmlld3BvcnQoKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cbiAgICBsZXQgdG9wLCBsZWZ0O1xuXG4gICAgaWYgKHRhcmdldE9mZnNldC50b3AgKyB0YXJnZXRPdXRlckhlaWdodCArIGVsZW1lbnRPdXRlckhlaWdodCA+IHZpZXdwb3J0LmhlaWdodCkge1xuICAgICAgdG9wID0gdGFyZ2V0T2Zmc2V0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCAtIGVsZW1lbnRPdXRlckhlaWdodDtcbiAgICAgIGlmICh0b3AgPCAwKSB7XG4gICAgICAgIHRvcCA9IHdpbmRvd1Njcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gdGFyZ2V0T3V0ZXJIZWlnaHQgKyB0YXJnZXRPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRPZmZzZXQubGVmdCArIGVsZW1lbnRPdXRlcldpZHRoID4gdmlld3BvcnQud2lkdGgpXG4gICAgICBsZWZ0ID0gTWF0aC5tYXgoMCwgdGFyZ2V0T2Zmc2V0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0ICsgdGFyZ2V0T3V0ZXJXaWR0aCAtIGVsZW1lbnRPdXRlcldpZHRoKTtcbiAgICBlbHNlIGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbExlZnQ7XG5cbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEhpZGRlbkVsZW1lbnRPdXRlckhlaWdodChlbGVtZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICByZXR1cm4gZWxlbWVudEhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SGlkZGVuRWxlbWVudE91dGVyV2lkdGgoZWxlbWVudDogYW55KTogbnVtYmVyIHtcbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgIHJldHVybiBlbGVtZW50V2lkdGg7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEhpZGRlbkVsZW1lbnREaW1lbnNpb25zKGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgZGltZW5zaW9uczogYW55ID0ge307XG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkaW1lbnNpb25zLndpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBkaW1lbnNpb25zLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICByZXR1cm4gZGltZW5zaW9ucztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2Nyb2xsSW5WaWV3KGNvbnRhaW5lciwgaXRlbSkge1xuICAgIGNvbnN0IGJvcmRlclRvcFZhbHVlOiBzdHJpbmcgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyVG9wV2lkdGgnKTtcbiAgICBjb25zdCBib3JkZXJUb3A6IG51bWJlciA9IGJvcmRlclRvcFZhbHVlID8gcGFyc2VGbG9hdChib3JkZXJUb3BWYWx1ZSkgOiAwO1xuICAgIGNvbnN0IHBhZGRpbmdUb3BWYWx1ZTogc3RyaW5nID0gZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmdUb3AnKTtcbiAgICBjb25zdCBwYWRkaW5nVG9wOiBudW1iZXIgPSBwYWRkaW5nVG9wVmFsdWUgPyBwYXJzZUZsb2F0KHBhZGRpbmdUb3BWYWx1ZSkgOiAwO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgaXRlbVJlY3QgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG9mZnNldCA9IGl0ZW1SZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIC0gKGNvbnRhaW5lclJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIC0gYm9yZGVyVG9wIC0gcGFkZGluZ1RvcDtcbiAgICBjb25zdCBzY3JvbGwgPSBjb250YWluZXIuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSB0aGlzLmdldE91dGVySGVpZ2h0KGl0ZW0pO1xuXG4gICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzY3JvbGwgKyBvZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChvZmZzZXQgKyBpdGVtSGVpZ2h0ID4gZWxlbWVudEhlaWdodCkge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbCArIG9mZnNldCAtIGVsZW1lbnRIZWlnaHQgKyBpdGVtSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmFkZUluKGVsZW1lbnQsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgbGV0IGxhc3QgPSArbmV3IERhdGUoKTtcbiAgICBsZXQgb3BhY2l0eSA9IDA7XG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgIG9wYWNpdHkgPSArZWxlbWVudC5zdHlsZS5vcGFjaXR5LnJlcGxhY2UoJywnLCAnLicpICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdCkgLyBkdXJhdGlvbjtcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICBsYXN0ID0gK25ldyBEYXRlKCk7XG5cbiAgICAgIGlmICgrb3BhY2l0eSA8IDEpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgICAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaykpIHx8IHNldFRpbWVvdXQodGljaywgMTYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZhZGVPdXQoZWxlbWVudCwgbXMpIHtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSA1MDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IG1zO1xuICAgIGNvbnN0IGdhcCA9IGludGVydmFsIC8gZHVyYXRpb247XG5cbiAgICBjb25zdCBmYWRpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBvcGFjaXR5ID0gb3BhY2l0eSAtIGdhcDtcblxuICAgICAgaWYgKG9wYWNpdHkgPD0gMCkge1xuICAgICAgICBvcGFjaXR5ID0gMDtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRpbmcpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIH0sIGludGVydmFsKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0V2luZG93U2Nyb2xsVG9wKCk6IG51bWJlciB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHJldHVybiAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFdpbmRvd1Njcm9sbExlZnQoKTogbnVtYmVyIHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jLnNjcm9sbExlZnQpIC0gKGRvYy5jbGllbnRMZWZ0IHx8IDApO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBwOiBhbnkgPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgICBjb25zdCBmID1cbiAgICAgIHAubWF0Y2hlcyB8fFxuICAgICAgcC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgIHAubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICBwLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICBmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBbXS5pbmRleE9mLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzKSwgdGhpcykgIT09IC0xO1xuICAgICAgfTtcbiAgICByZXR1cm4gZi5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0T3V0ZXJXaWR0aChlbCwgbWFyZ2luPykge1xuICAgIGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKG1hcmdpbikge1xuICAgICAgY29uc3Qgc3R5bGU6IGFueSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5MZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luUmlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SG9yaXpvbnRhbFBhZGRpbmcoZWwpIHtcbiAgICBjb25zdCBzdHlsZTogYW55ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nUmlnaHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRIb3Jpem9udGFsTWFyZ2luKGVsKSB7XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkxlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5SaWdodCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlubmVyV2lkdGgoZWwpIHtcbiAgICBsZXQgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBzdHlsZTogYW55ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICB3aWR0aCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHdpZHRoKGVsKSB7XG4gICAgbGV0IHdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgd2lkdGggLT0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbm5lckhlaWdodChlbCkge1xuICAgIGxldCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldE91dGVySGVpZ2h0KGVsLCBtYXJnaW4/KSB7XG4gICAgbGV0IGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcblxuICAgIGlmIChtYXJnaW4pIHtcbiAgICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgIGhlaWdodCArPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SGVpZ2h0KGVsKTogbnVtYmVyIHtcbiAgICBsZXQgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgIGhlaWdodCAtPVxuICAgICAgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArXG4gICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pICtcbiAgICAgIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpICtcbiAgICAgIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0V2lkdGgoZWwpOiBudW1iZXIge1xuICAgIGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgIHdpZHRoIC09XG4gICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSArXG4gICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCkgK1xuICAgICAgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICtcbiAgICAgIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFZpZXdwb3J0KCk6IGFueSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXG4gICAgY29uc3Qgd2luID0gd2luZG93LFxuICAgICAgZCA9IGRvY3VtZW50LFxuICAgICAgZSA9IGQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgZyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSxcbiAgICAgIHcgPSB3aW4uaW5uZXJXaWR0aCB8fCBlLmNsaWVudFdpZHRoIHx8IGcuY2xpZW50V2lkdGgsXG4gICAgICBoID0gd2luLmlubmVySGVpZ2h0IHx8IGUuY2xpZW50SGVpZ2h0IHx8IGcuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIHsgd2lkdGg6IHcsIGhlaWdodDogaCB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRPZmZzZXQoZWwpIHtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlcGxhY2VFbGVtZW50V2l0aChlbGVtZW50OiBhbnksIHJlcGxhY2VtZW50RWxlbWVudDogYW55KTogYW55IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGlmICghcGFyZW50Tm9kZSkgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZXBsYWNlIGVsZW1lbnRgKTtcbiAgICByZXR1cm4gcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnRFbGVtZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VXNlckFnZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSUUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpO1xuICAgIGlmIChtc2llID4gMCkge1xuICAgICAgLy8gSUUgMTAgb3Igb2xkZXIgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmlkZW50ID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcbiAgICBpZiAodHJpZGVudCA+IDApIHtcbiAgICAgIC8vIElFIDExID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgLy8gICBjb25zdCBydiA9IHVhLmluZGV4T2YoJ3J2OicpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgZWRnZSA9IHVhLmluZGV4T2YoJ0VkZ2UvJyk7XG4gICAgaWYgKGVkZ2UgPiAwKSB7XG4gICAgICAvLyBFZGdlIChJRSAxMispID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gb3RoZXIgYnJvd3NlclxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gLyhhbmRyb2lkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFwcGVuZENoaWxkKGVsZW1lbnQ6IGFueSwgdGFyZ2V0OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc0VsZW1lbnQodGFyZ2V0KSkgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGVsc2UgaWYgKHRhcmdldC5lbCAmJiB0YXJnZXQuZWwubmF0aXZlRWxlbWVudCkgdGFyZ2V0LmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhcHBlbmQgJyArIHRhcmdldCArICcgdG8gJyArIGVsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZW1vdmVDaGlsZChlbGVtZW50OiBhbnksIHRhcmdldDogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50KHRhcmdldCkpIHRhcmdldC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICBlbHNlIGlmICh0YXJnZXQuZWwgJiYgdGFyZ2V0LmVsLm5hdGl2ZUVsZW1lbnQpIHRhcmdldC5lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVtb3ZlICcgKyBlbGVtZW50ICsgJyBmcm9tICcgKyB0YXJnZXQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0VsZW1lbnQob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0J1xuICAgICAgPyBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgOiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIG9iai5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygb2JqLm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlU2Nyb2xsYmFyV2lkdGgoZWw/OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBzdHlsZTogYW55ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkgfHwge307XG4gICAgICByZXR1cm4gZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aCAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aCB8fCB0aGlzLmNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVkU2Nyb2xsYmFyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9ICd1aS1zY3JvbGxiYXItbWVhc3VyZSc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG5cbiAgICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuXG4gICAgICB0aGlzLmNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aCA9IHNjcm9sbGJhcldpZHRoO1xuXG4gICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjYWxjdWxhdGVTY3JvbGxiYXJIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jYWxjdWxhdGVkU2Nyb2xsYmFySGVpZ2h0IHx8IHRoaXMuY2FsY3VsYXRlZFNjcm9sbGJhckhlaWdodCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlZFNjcm9sbGJhckhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gJ3VpLXNjcm9sbGJhci1tZWFzdXJlJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG5cbiAgICBjb25zdCBzY3JvbGxiYXJIZWlnaHQgPSBzY3JvbGxEaXYub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRGl2LmNsaWVudEhlaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cbiAgICB0aGlzLmNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aCA9IHNjcm9sbGJhckhlaWdodDtcblxuICAgIHJldHVybiBzY3JvbGxiYXJIZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGludm9rZUVsZW1lbnRNZXRob2QoZWxlbWVudDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M/OiBhbnlbXSk6IHZvaWQge1xuICAgIChlbGVtZW50IGFzIGFueSlbbWV0aG9kTmFtZV0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGlvbjEgPSAoZG9jdW1lbnQgYXMgYW55KS5zZWxlY3Rpb247XG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbjogYW55ID0gd2luZG93LmdldFNlbGVjdGlvbigpIHx8IHt9O1xuICAgICAgaWYgKHNlbGVjdGlvbi5lbXB0eSkge1xuICAgICAgICBzZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcyAmJiBzZWxlY3Rpb24ucmFuZ2VDb3VudCA+IDAgJiYgc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uMS5zZWxlY3Rpb24gJiYgc2VsZWN0aW9uMS5lbXB0eSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZWN0aW9uMS5lbXB0eSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gaWdub3JlIElFIGJ1Z1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QnJvd3NlcigpIHtcbiAgICBpZiAoIXRoaXMuYnJvd3Nlcikge1xuICAgICAgY29uc3QgbWF0Y2hlZCA9IHRoaXMucmVzb2x2ZVVzZXJBZ2VudCgpO1xuICAgICAgdGhpcy5icm93c2VyID0ge307XG5cbiAgICAgIGlmIChtYXRjaGVkLmJyb3dzZXIpIHtcbiAgICAgICAgdGhpcy5icm93c2VyW21hdGNoZWQuYnJvd3Nlcl0gPSB0cnVlO1xuICAgICAgICB0aGlzLmJyb3dzZXIudmVyc2lvbiA9IG1hdGNoZWQudmVyc2lvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYnJvd3Nlci5jaHJvbWUpIHtcbiAgICAgICAgdGhpcy5icm93c2VyLndlYmtpdCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYnJvd3Nlci53ZWJraXQpIHtcbiAgICAgICAgdGhpcy5icm93c2VyLnNhZmFyaSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYnJvd3NlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzb2x2ZVVzZXJBZ2VudCgpIHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBtYXRjaCA9XG4gICAgICAvKGNocm9tZSlbIFxcL10oW1xcdy5dKykvLmV4ZWModWEpIHx8XG4gICAgICAvKHdlYmtpdClbIFxcL10oW1xcdy5dKykvLmV4ZWModWEpIHx8XG4gICAgICAvKG9wZXJhKSg/Oi4qdmVyc2lvbnwpWyBcXC9dKFtcXHcuXSspLy5leGVjKHVhKSB8fFxuICAgICAgLyhtc2llKSAoW1xcdy5dKykvLmV4ZWModWEpIHx8XG4gICAgICAodWEuaW5kZXhPZignY29tcGF0aWJsZScpIDwgMCAmJiAvKG1vemlsbGEpKD86Lio/IHJ2OihbXFx3Ll0rKXwpLy5leGVjKHVhKSkgfHxcbiAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXI6IG1hdGNoWzFdIHx8ICcnLFxuICAgICAgdmVyc2lvbjogbWF0Y2hbMl0gfHwgJzAnLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0hpZGRlbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNzc1N0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY3NzU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIHBvc2l0aW9uICE9PSAnZml4ZWQnO1xuICB9XG59XG4iXX0=