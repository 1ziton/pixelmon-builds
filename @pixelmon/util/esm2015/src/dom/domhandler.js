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
export class DomHandler {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9taGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2RvbS9kb21oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBU2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFZLEVBQUUsU0FBaUI7UUFDcEQsSUFBSSxPQUFPLENBQUMsU0FBUztZQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztZQUNuRCxPQUFPLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQVksRUFBRSxTQUFpQjtRQUM5RCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7O2tCQUNmLE1BQU0sR0FBYSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM3QyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7U0FDRjthQUFNOztrQkFDQyxNQUFNLEdBQWEsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDN0MsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQzthQUNsQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFZLEVBQUUsU0FBaUI7UUFDdkQsSUFBSSxPQUFPLENBQUMsU0FBUztZQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztZQUN0RCxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFD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L0QsQ0FBQzs7QUEvZ0JhLGlCQUFNLEdBQVcsSUFBSSxDQUFDOzs7SUFBcEMsa0JBQW9DOzs7OztJQUVwQyxvQ0FBZ0Q7Ozs7O0lBRWhELHFDQUFpRDs7Ozs7SUFFakQsbUJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yOiBnaXNjYWZlciAsaHR0cHM6Ly9naXRodWIuY29tL2dpc2NhZmVyXG4gKiBAZGF0ZTogMjAxOS0wOS0wNSAxMDo1Nzo0NFxuICogQGRlc2NyaXB0aW9uOiBET03mk43kvZzlt6XlhbfnsbtcbiAqIGNvcHkgZm9ybSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZWZhY2VzL3ByaW1lbmcvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2RvbS9kb21oYW5kbGVyLnNwZWMudHNcbiAqL1xuXG5leHBvcnQgY2xhc3MgRG9tSGFuZGxlciB7XG4gIHB1YmxpYyBzdGF0aWMgemluZGV4OiBudW1iZXIgPSAxMDAwO1xuXG4gIHByaXZhdGUgc3RhdGljIGNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aDogbnVtYmVyO1xuXG4gIHByaXZhdGUgc3RhdGljIGNhbGN1bGF0ZWRTY3JvbGxiYXJIZWlnaHQ6IG51bWJlcjtcblxuICBwcml2YXRlIHN0YXRpYyBicm93c2VyOiBhbnk7XG5cbiAgcHVibGljIHN0YXRpYyBhZGRDbGFzcyhlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbHNlIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkTXVsdGlwbGVDbGFzc2VzKGVsZW1lbnQ6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgIGNvbnN0IHN0eWxlczogc3RyaW5nW10gPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgIGZvciAoY29uc3Qgc3R5bGUgb2Ygc3R5bGVzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlczogc3RyaW5nW10gPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgIGZvciAoY29uc3Qgc3R5bGUgb2Ygc3R5bGVzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIHN0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlQ2xhc3MoZWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgZWxzZSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaGFzQ2xhc3MoZWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgZWxzZSByZXR1cm4gbmV3IFJlZ0V4cCgnKF58ICknICsgY2xhc3NOYW1lICsgJyggfCQpJywgJ2dpJykudGVzdChlbGVtZW50LmNsYXNzTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNpYmxpbmdzKGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjaGlsZCAhPT0gZWxlbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmluZChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZpbmRTaW5nbGUoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbmRleChlbGVtZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgbGV0IG51bSA9IDA7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBlbGVtZW50KSByZXR1cm4gbnVtO1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVUeXBlID09PSAxKSBudW0rKztcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbmRleFdpdGhpbkdyb3VwKGVsZW1lbnQ6IGFueSwgYXR0cmlidXRlTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgIGxldCBudW0gPSAwO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gZWxlbWVudCkgcmV0dXJuIG51bTtcbiAgICAgIGlmIChjaGlsZHJlbltpXS5hdHRyaWJ1dGVzICYmIGNoaWxkcmVuW2ldLmF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gJiYgY2hpbGRyZW5baV0ubm9kZVR5cGUgPT09IDEpIG51bSsrO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlbGF0aXZlUG9zaXRpb24oZWxlbWVudDogYW55LCB0YXJnZXQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnREaW1lbnNpb25zID0gZWxlbWVudC5vZmZzZXRQYXJlbnRcbiAgICAgID8geyB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCB9XG4gICAgICA6IHRoaXMuZ2V0SGlkZGVuRWxlbWVudERpbWVuc2lvbnMoZWxlbWVudCk7XG4gICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB0YXJnZXRPZmZzZXQgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLmdldFZpZXdwb3J0KCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXG4gICAgbGV0IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXI7XG5cbiAgICBpZiAodGFyZ2V0T2Zmc2V0LnRvcCArIHRhcmdldEhlaWdodCArIGVsZW1lbnREaW1lbnNpb25zLmhlaWdodCA+IHZpZXdwb3J0LmhlaWdodCkge1xuICAgICAgdG9wID0gLTEgKiBlbGVtZW50RGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICBpZiAodGFyZ2V0T2Zmc2V0LnRvcCArIHRvcCA8IDApIHtcbiAgICAgICAgdG9wID0gLTEgKiB0YXJnZXRPZmZzZXQudG9wO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSB0YXJnZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnREaW1lbnNpb25zLndpZHRoID4gdmlld3BvcnQud2lkdGgpIHtcbiAgICAgIC8vIGVsZW1lbnQgd2lkZXIgdGhlbiB2aWV3cG9ydCBhbmQgY2Fubm90IGZpdCBvbiBzY3JlZW4gKGFsaWduIGF0IGxlZnQgc2lkZSBvZiB2aWV3cG9ydClcbiAgICAgIGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAqIC0xO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0T2Zmc2V0LmxlZnQgKyBlbGVtZW50RGltZW5zaW9ucy53aWR0aCA+IHZpZXdwb3J0LndpZHRoKSB7XG4gICAgICAvLyBlbGVtZW50IHdpZGVyIHRoZW4gdmlld3BvcnQgYnV0IGNhbiBiZSBmaXQgb24gc2NyZWVuIChhbGlnbiBhdCByaWdodCBzaWRlIG9mIHZpZXdwb3J0KVxuICAgICAgbGVmdCA9ICh0YXJnZXRPZmZzZXQubGVmdCArIGVsZW1lbnREaW1lbnNpb25zLndpZHRoIC0gdmlld3BvcnQud2lkdGgpICogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsZW1lbnQgZml0cyBvbiBzY3JlZW4gKGFsaWduIHdpdGggdGFyZ2V0KVxuICAgICAgbGVmdCA9IDA7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhYnNvbHV0ZVBvc2l0aW9uKGVsZW1lbnQ6IGFueSwgdGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50RGltZW5zaW9ucyA9IGVsZW1lbnQub2Zmc2V0UGFyZW50XG4gICAgICA/IHsgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgfVxuICAgICAgOiB0aGlzLmdldEhpZGRlbkVsZW1lbnREaW1lbnNpb25zKGVsZW1lbnQpO1xuICAgIGNvbnN0IGVsZW1lbnRPdXRlckhlaWdodCA9IGVsZW1lbnREaW1lbnNpb25zLmhlaWdodDtcbiAgICBjb25zdCBlbGVtZW50T3V0ZXJXaWR0aCA9IGVsZW1lbnREaW1lbnNpb25zLndpZHRoO1xuICAgIGNvbnN0IHRhcmdldE91dGVySGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB0YXJnZXRPdXRlcldpZHRoID0gdGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHRhcmdldE9mZnNldCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW5kb3dTY3JvbGxUb3AgPSB0aGlzLmdldFdpbmRvd1Njcm9sbFRvcCgpO1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbExlZnQgPSB0aGlzLmdldFdpbmRvd1Njcm9sbExlZnQoKTtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuZ2V0Vmlld3BvcnQoKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cbiAgICBsZXQgdG9wLCBsZWZ0O1xuXG4gICAgaWYgKHRhcmdldE9mZnNldC50b3AgKyB0YXJnZXRPdXRlckhlaWdodCArIGVsZW1lbnRPdXRlckhlaWdodCA+IHZpZXdwb3J0LmhlaWdodCkge1xuICAgICAgdG9wID0gdGFyZ2V0T2Zmc2V0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCAtIGVsZW1lbnRPdXRlckhlaWdodDtcbiAgICAgIGlmICh0b3AgPCAwKSB7XG4gICAgICAgIHRvcCA9IHdpbmRvd1Njcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gdGFyZ2V0T3V0ZXJIZWlnaHQgKyB0YXJnZXRPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRPZmZzZXQubGVmdCArIGVsZW1lbnRPdXRlcldpZHRoID4gdmlld3BvcnQud2lkdGgpXG4gICAgICBsZWZ0ID0gTWF0aC5tYXgoMCwgdGFyZ2V0T2Zmc2V0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0ICsgdGFyZ2V0T3V0ZXJXaWR0aCAtIGVsZW1lbnRPdXRlcldpZHRoKTtcbiAgICBlbHNlIGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbExlZnQ7XG5cbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEhpZGRlbkVsZW1lbnRPdXRlckhlaWdodChlbGVtZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICByZXR1cm4gZWxlbWVudEhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SGlkZGVuRWxlbWVudE91dGVyV2lkdGgoZWxlbWVudDogYW55KTogbnVtYmVyIHtcbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgIHJldHVybiBlbGVtZW50V2lkdGg7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEhpZGRlbkVsZW1lbnREaW1lbnNpb25zKGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgZGltZW5zaW9uczogYW55ID0ge307XG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkaW1lbnNpb25zLndpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBkaW1lbnNpb25zLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICByZXR1cm4gZGltZW5zaW9ucztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2Nyb2xsSW5WaWV3KGNvbnRhaW5lciwgaXRlbSkge1xuICAgIGNvbnN0IGJvcmRlclRvcFZhbHVlOiBzdHJpbmcgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyVG9wV2lkdGgnKTtcbiAgICBjb25zdCBib3JkZXJUb3A6IG51bWJlciA9IGJvcmRlclRvcFZhbHVlID8gcGFyc2VGbG9hdChib3JkZXJUb3BWYWx1ZSkgOiAwO1xuICAgIGNvbnN0IHBhZGRpbmdUb3BWYWx1ZTogc3RyaW5nID0gZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmdUb3AnKTtcbiAgICBjb25zdCBwYWRkaW5nVG9wOiBudW1iZXIgPSBwYWRkaW5nVG9wVmFsdWUgPyBwYXJzZUZsb2F0KHBhZGRpbmdUb3BWYWx1ZSkgOiAwO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgaXRlbVJlY3QgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG9mZnNldCA9IGl0ZW1SZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIC0gKGNvbnRhaW5lclJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIC0gYm9yZGVyVG9wIC0gcGFkZGluZ1RvcDtcbiAgICBjb25zdCBzY3JvbGwgPSBjb250YWluZXIuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSB0aGlzLmdldE91dGVySGVpZ2h0KGl0ZW0pO1xuXG4gICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzY3JvbGwgKyBvZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChvZmZzZXQgKyBpdGVtSGVpZ2h0ID4gZWxlbWVudEhlaWdodCkge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbCArIG9mZnNldCAtIGVsZW1lbnRIZWlnaHQgKyBpdGVtSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmFkZUluKGVsZW1lbnQsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgbGV0IGxhc3QgPSArbmV3IERhdGUoKTtcbiAgICBsZXQgb3BhY2l0eSA9IDA7XG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgIG9wYWNpdHkgPSArZWxlbWVudC5zdHlsZS5vcGFjaXR5LnJlcGxhY2UoJywnLCAnLicpICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdCkgLyBkdXJhdGlvbjtcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICBsYXN0ID0gK25ldyBEYXRlKCk7XG5cbiAgICAgIGlmICgrb3BhY2l0eSA8IDEpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgICAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaykpIHx8IHNldFRpbWVvdXQodGljaywgMTYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aWNrKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZhZGVPdXQoZWxlbWVudCwgbXMpIHtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSA1MDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IG1zO1xuICAgIGNvbnN0IGdhcCA9IGludGVydmFsIC8gZHVyYXRpb247XG5cbiAgICBjb25zdCBmYWRpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBvcGFjaXR5ID0gb3BhY2l0eSAtIGdhcDtcblxuICAgICAgaWYgKG9wYWNpdHkgPD0gMCkge1xuICAgICAgICBvcGFjaXR5ID0gMDtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRpbmcpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIH0sIGludGVydmFsKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0V2luZG93U2Nyb2xsVG9wKCk6IG51bWJlciB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHJldHVybiAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFdpbmRvd1Njcm9sbExlZnQoKTogbnVtYmVyIHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jLnNjcm9sbExlZnQpIC0gKGRvYy5jbGllbnRMZWZ0IHx8IDApO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBwOiBhbnkgPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgICBjb25zdCBmID1cbiAgICAgIHAubWF0Y2hlcyB8fFxuICAgICAgcC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgIHAubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICBwLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICBmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBbXS5pbmRleE9mLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzKSwgdGhpcykgIT09IC0xO1xuICAgICAgfTtcbiAgICByZXR1cm4gZi5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0T3V0ZXJXaWR0aChlbCwgbWFyZ2luPykge1xuICAgIGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKG1hcmdpbikge1xuICAgICAgY29uc3Qgc3R5bGU6IGFueSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5MZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luUmlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SG9yaXpvbnRhbFBhZGRpbmcoZWwpIHtcbiAgICBjb25zdCBzdHlsZTogYW55ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nUmlnaHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRIb3Jpem9udGFsTWFyZ2luKGVsKSB7XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkxlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5SaWdodCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlubmVyV2lkdGgoZWwpIHtcbiAgICBsZXQgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBzdHlsZTogYW55ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICB3aWR0aCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHdpZHRoKGVsKSB7XG4gICAgbGV0IHdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgd2lkdGggLT0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbm5lckhlaWdodChlbCkge1xuICAgIGxldCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldE91dGVySGVpZ2h0KGVsLCBtYXJnaW4/KSB7XG4gICAgbGV0IGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcblxuICAgIGlmIChtYXJnaW4pIHtcbiAgICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgIGhlaWdodCArPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SGVpZ2h0KGVsKTogbnVtYmVyIHtcbiAgICBsZXQgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgIGhlaWdodCAtPVxuICAgICAgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArXG4gICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pICtcbiAgICAgIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpICtcbiAgICAgIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0V2lkdGgoZWwpOiBudW1iZXIge1xuICAgIGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgIHdpZHRoIC09XG4gICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSArXG4gICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCkgK1xuICAgICAgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICtcbiAgICAgIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFZpZXdwb3J0KCk6IGFueSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXG4gICAgY29uc3Qgd2luID0gd2luZG93LFxuICAgICAgZCA9IGRvY3VtZW50LFxuICAgICAgZSA9IGQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgZyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSxcbiAgICAgIHcgPSB3aW4uaW5uZXJXaWR0aCB8fCBlLmNsaWVudFdpZHRoIHx8IGcuY2xpZW50V2lkdGgsXG4gICAgICBoID0gd2luLmlubmVySGVpZ2h0IHx8IGUuY2xpZW50SGVpZ2h0IHx8IGcuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIHsgd2lkdGg6IHcsIGhlaWdodDogaCB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRPZmZzZXQoZWwpIHtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlcGxhY2VFbGVtZW50V2l0aChlbGVtZW50OiBhbnksIHJlcGxhY2VtZW50RWxlbWVudDogYW55KTogYW55IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGlmICghcGFyZW50Tm9kZSkgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZXBsYWNlIGVsZW1lbnRgKTtcbiAgICByZXR1cm4gcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnRFbGVtZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VXNlckFnZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSUUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpO1xuICAgIGlmIChtc2llID4gMCkge1xuICAgICAgLy8gSUUgMTAgb3Igb2xkZXIgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmlkZW50ID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcbiAgICBpZiAodHJpZGVudCA+IDApIHtcbiAgICAgIC8vIElFIDExID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgLy8gICBjb25zdCBydiA9IHVhLmluZGV4T2YoJ3J2OicpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgZWRnZSA9IHVhLmluZGV4T2YoJ0VkZ2UvJyk7XG4gICAgaWYgKGVkZ2UgPiAwKSB7XG4gICAgICAvLyBFZGdlIChJRSAxMispID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gb3RoZXIgYnJvd3NlclxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gLyhhbmRyb2lkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFwcGVuZENoaWxkKGVsZW1lbnQ6IGFueSwgdGFyZ2V0OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc0VsZW1lbnQodGFyZ2V0KSkgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGVsc2UgaWYgKHRhcmdldC5lbCAmJiB0YXJnZXQuZWwubmF0aXZlRWxlbWVudCkgdGFyZ2V0LmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhcHBlbmQgJyArIHRhcmdldCArICcgdG8gJyArIGVsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZW1vdmVDaGlsZChlbGVtZW50OiBhbnksIHRhcmdldDogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50KHRhcmdldCkpIHRhcmdldC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICBlbHNlIGlmICh0YXJnZXQuZWwgJiYgdGFyZ2V0LmVsLm5hdGl2ZUVsZW1lbnQpIHRhcmdldC5lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVtb3ZlICcgKyBlbGVtZW50ICsgJyBmcm9tICcgKyB0YXJnZXQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0VsZW1lbnQob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0J1xuICAgICAgPyBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgOiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIG9iai5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygb2JqLm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlU2Nyb2xsYmFyV2lkdGgoZWw/OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBzdHlsZTogYW55ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkgfHwge307XG4gICAgICByZXR1cm4gZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aCAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aCB8fCB0aGlzLmNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVkU2Nyb2xsYmFyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9ICd1aS1zY3JvbGxiYXItbWVhc3VyZSc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG5cbiAgICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuXG4gICAgICB0aGlzLmNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aCA9IHNjcm9sbGJhcldpZHRoO1xuXG4gICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjYWxjdWxhdGVTY3JvbGxiYXJIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jYWxjdWxhdGVkU2Nyb2xsYmFySGVpZ2h0IHx8IHRoaXMuY2FsY3VsYXRlZFNjcm9sbGJhckhlaWdodCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlZFNjcm9sbGJhckhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gJ3VpLXNjcm9sbGJhci1tZWFzdXJlJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG5cbiAgICBjb25zdCBzY3JvbGxiYXJIZWlnaHQgPSBzY3JvbGxEaXYub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRGl2LmNsaWVudEhlaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cbiAgICB0aGlzLmNhbGN1bGF0ZWRTY3JvbGxiYXJXaWR0aCA9IHNjcm9sbGJhckhlaWdodDtcblxuICAgIHJldHVybiBzY3JvbGxiYXJIZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGludm9rZUVsZW1lbnRNZXRob2QoZWxlbWVudDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M/OiBhbnlbXSk6IHZvaWQge1xuICAgIChlbGVtZW50IGFzIGFueSlbbWV0aG9kTmFtZV0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGlvbjEgPSAoZG9jdW1lbnQgYXMgYW55KS5zZWxlY3Rpb247XG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbjogYW55ID0gd2luZG93LmdldFNlbGVjdGlvbigpIHx8IHt9O1xuICAgICAgaWYgKHNlbGVjdGlvbi5lbXB0eSkge1xuICAgICAgICBzZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcyAmJiBzZWxlY3Rpb24ucmFuZ2VDb3VudCA+IDAgJiYgc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uMS5zZWxlY3Rpb24gJiYgc2VsZWN0aW9uMS5lbXB0eSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZWN0aW9uMS5lbXB0eSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gaWdub3JlIElFIGJ1Z1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QnJvd3NlcigpIHtcbiAgICBpZiAoIXRoaXMuYnJvd3Nlcikge1xuICAgICAgY29uc3QgbWF0Y2hlZCA9IHRoaXMucmVzb2x2ZVVzZXJBZ2VudCgpO1xuICAgICAgdGhpcy5icm93c2VyID0ge307XG5cbiAgICAgIGlmIChtYXRjaGVkLmJyb3dzZXIpIHtcbiAgICAgICAgdGhpcy5icm93c2VyW21hdGNoZWQuYnJvd3Nlcl0gPSB0cnVlO1xuICAgICAgICB0aGlzLmJyb3dzZXIudmVyc2lvbiA9IG1hdGNoZWQudmVyc2lvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYnJvd3Nlci5jaHJvbWUpIHtcbiAgICAgICAgdGhpcy5icm93c2VyLndlYmtpdCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYnJvd3Nlci53ZWJraXQpIHtcbiAgICAgICAgdGhpcy5icm93c2VyLnNhZmFyaSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYnJvd3NlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzb2x2ZVVzZXJBZ2VudCgpIHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBtYXRjaCA9XG4gICAgICAvKGNocm9tZSlbIFxcL10oW1xcdy5dKykvLmV4ZWModWEpIHx8XG4gICAgICAvKHdlYmtpdClbIFxcL10oW1xcdy5dKykvLmV4ZWModWEpIHx8XG4gICAgICAvKG9wZXJhKSg/Oi4qdmVyc2lvbnwpWyBcXC9dKFtcXHcuXSspLy5leGVjKHVhKSB8fFxuICAgICAgLyhtc2llKSAoW1xcdy5dKykvLmV4ZWModWEpIHx8XG4gICAgICAodWEuaW5kZXhPZignY29tcGF0aWJsZScpIDwgMCAmJiAvKG1vemlsbGEpKD86Lio/IHJ2OihbXFx3Ll0rKXwpLy5leGVjKHVhKSkgfHxcbiAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXI6IG1hdGNoWzFdIHx8ICcnLFxuICAgICAgdmVyc2lvbjogbWF0Y2hbMl0gfHwgJzAnLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0hpZGRlbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNzc1N0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY3NzU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsICYmIHBvc2l0aW9uICE9PSAnZml4ZWQnO1xuICB9XG59XG4iXX0=