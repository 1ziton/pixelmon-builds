/**
 * @license ng-alain(cipchk@qq.com) v0.1.2
 * (c) 2019 giscafer(giscafer@outlook.com)
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@pixelmon/util'), require('@pixelmon/theme'), require('@angular/cdk/observers'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/view', ['exports', '@angular/core', '@pixelmon/util', '@pixelmon/theme', '@angular/cdk/observers', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu.view = {}), global.ng.core, global.pixelmon.util, global.pixelmon.theme, global.ng.cdk.observers, global.ng.common, global['ng-zorro-antd/icon'], global['ng-zorro-antd/tooltip']));
}(this, function (exports, core, util, theme, observers, common, icon, tooltip) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SVConfig = /** @class */ (function () {
        function SVConfig() {
            /**
             * 间距，默认：`32`
             */
            this.gutter = 32;
            /**
             * 布局，默认：`horizontal`
             */
            this.layout = 'horizontal';
            /**
             * 列数，默认：`3`
             */
            this.col = 3;
            /**
             * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
             */
            this.default = true;
            /**
             * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
             */
            this.labelWidth = null;
        }
        SVConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ SVConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SVConfig_Factory() { return new SVConfig(); }, token: SVConfig, providedIn: "root" });
        return SVConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var prefixCls = "sv";
    var SVContainerComponent = /** @class */ (function () {
        // #endregion
        function SVContainerComponent(el, ren, cog) {
            this.ren = ren;
            this.el = el.nativeElement;
            Object.assign(this, __assign({}, new SVConfig(), cog));
        }
        /**
         * @private
         * @return {?}
         */
        SVContainerComponent.prototype.setClass = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            var _b = this, el = _b.el, ren = _b.ren, size = _b.size, layout = _b.layout;
            util.updateHostClass(el, ren, (_a = {},
                _a[prefixCls + "__container"] = true,
                _a[prefixCls + "__" + size] = true,
                _a[prefixCls + "__" + layout] = true,
                _a["clearfix"] = true,
                _a));
        };
        /**
         * @return {?}
         */
        SVContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        /**
         * @return {?}
         */
        SVContainerComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        SVContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sv-container, [sv-container]',
                        exportAs: 'svContainer',
                        template: "<div class=\"ant-row\"\n     [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SVContainerComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: SVConfig }
        ]; };
        SVContainerComponent.propDecorators = {
            title: [{ type: core.Input }],
            size: [{ type: core.Input }],
            gutter: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            labelWidth: [{ type: core.Input }],
            col: [{ type: core.Input }],
            default: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], SVContainerComponent.prototype, "gutter", void 0);
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SVContainerComponent.prototype, "labelWidth", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], SVContainerComponent.prototype, "col", void 0);
        return SVContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SVTitleComponent = /** @class */ (function () {
        function SVTitleComponent(el, parent, ren) {
            this.parent = parent;
            this.ren = ren;
            if (parent == null) {
                throw new Error("[sv-title] must include 'sv-container' component");
            }
            this.el = el.nativeElement;
        }
        /**
         * @private
         * @return {?}
         */
        SVTitleComponent.prototype.setClass = /**
         * @private
         * @return {?}
         */
        function () {
            var gutter = this.parent.gutter;
            var el = this.el;
            this.ren.setStyle(el, 'padding-left', gutter / 2 + "px");
            this.ren.setStyle(el, 'padding-right', gutter / 2 + "px");
        };
        /**
         * @return {?}
         */
        SVTitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        SVTitleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sv-title, [sv-title]',
                        exportAs: 'svTitle',
                        template: '<ng-content></ng-content>',
                        host: {
                            '[class.sv__title]': 'true',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SVTitleComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: SVContainerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
            { type: core.Renderer2 }
        ]; };
        return SVTitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var prefixCls$1 = "sv";
    var SVComponent = /** @class */ (function () {
        function SVComponent(el, parent, rep, ren) {
            this.parent = parent;
            this.rep = rep;
            this.ren = ren;
            this.clsMap = [];
            if (parent == null) {
                throw new Error("[sv] must include 'sv-container' component");
            }
            this.el = el.nativeElement;
        }
        Object.defineProperty(SVComponent.prototype, "paddingValue", {
            // #endregion
            get: 
            // #endregion
            /**
             * @return {?}
             */
            function () {
                return this.parent && this.parent.gutter / 2;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        SVComponent.prototype.setClass = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, el = _a.el, ren = _a.ren, col = _a.col, clsMap = _a.clsMap, type = _a.type, rep = _a.rep;
            clsMap.forEach((/**
             * @param {?} cls
             * @return {?}
             */
            function (cls) { return ren.removeClass(el, cls); }));
            clsMap.length = 0;
            clsMap.push.apply(clsMap, __spread(rep.genCls(col != null ? col : this.parent.col)));
            clsMap.push(prefixCls$1 + "__item");
            if (this.parent.labelWidth)
                clsMap.push(prefixCls$1 + "__item-fixed");
            if (type)
                clsMap.push(prefixCls$1 + "__type-" + type);
            clsMap.forEach((/**
             * @param {?} cls
             * @return {?}
             */
            function (cls) { return ren.addClass(el, cls); }));
        };
        /**
         * @return {?}
         */
        SVComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.setClass();
            this.checkContent();
        };
        /**
         * @return {?}
         */
        SVComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        /**
         * @return {?}
         */
        SVComponent.prototype.checkContent = /**
         * @return {?}
         */
        function () {
            var conEl = this.conEl;
            /** @type {?} */
            var def = this.default;
            if (!(def != null ? def : this.parent.default))
                return;
            /** @type {?} */
            var el = (/** @type {?} */ (conEl.nativeElement));
            /** @type {?} */
            var cls = "sv__default";
            if (el.classList.contains(cls)) {
                el.classList.remove(cls);
            }
            if (util.isEmpty(el)) {
                el.classList.add(cls);
            }
        };
        SVComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sv, [sv]',
                        exportAs: 'sv',
                        template: "<div class=\"sv__label\"\n     [class.sv__label-empty]=\"!label\"\n     [style.width.px]=\"parent.labelWidth\">\n  <ng-container *stringTemplateOutlet=\"label\">{{label}}</ng-container>\n  <span class=\"sv__label-optional\">\n    {{ optional }}\n    <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\n      <i nz-tooltip nz-icon nzType=\"question-circle\"></i>\n    </nz-tooltip>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\"\n        #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *stringTemplateOutlet=\"unit\">{{unit}}</span>\n  </ng-container>\n</div>\n",
                        host: {
                            '[style.padding-left.px]': 'paddingValue',
                            '[style.padding-right.px]': 'paddingValue',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SVComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: SVContainerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
            { type: theme.ResponsiveService },
            { type: core.Renderer2 }
        ]; };
        SVComponent.propDecorators = {
            conEl: [{ type: core.ViewChild, args: ['conEl', { static: false },] }],
            optional: [{ type: core.Input }],
            optionalHelp: [{ type: core.Input }],
            label: [{ type: core.Input }],
            unit: [{ type: core.Input }],
            col: [{ type: core.Input }],
            default: [{ type: core.Input }],
            type: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SVComponent.prototype, "col", void 0);
        __decorate([
            util.InputBoolean(null),
            __metadata("design:type", Boolean)
        ], SVComponent.prototype, "default", void 0);
        return SVComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];
    var SVModule = /** @class */ (function () {
        function SVModule() {
        }
        SVModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, observers.ObserversModule, util.PixelmonUtilModule, tooltip.NzToolTipModule, icon.NzIconModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return SVModule;
    }());

    exports.SVComponent = SVComponent;
    exports.SVConfig = SVConfig;
    exports.SVContainerComponent = SVContainerComponent;
    exports.SVModule = SVModule;
    exports.SVTitleComponent = SVTitleComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=view.umd.js.map