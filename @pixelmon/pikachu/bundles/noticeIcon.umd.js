/**
 * @license ng-alain(cipchk@qq.com) v0.1.2
 * (c) 2019 giscafer(giscafer@outlook.com)
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@pixelmon/theme'), require('@pixelmon/util'), require('@angular/common'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/list'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tag')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu/notice-icon', ['exports', '@angular/core', '@pixelmon/theme', '@pixelmon/util', '@angular/common', 'ng-zorro-antd/badge', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/list', 'ng-zorro-antd/spin', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tag'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = global.pixelmon.pikachu || {}, global.pixelmon.pikachu['notice-icon'] = {}), global.ng.core, global.pixelmon.theme, global.pixelmon.util, global.ng.common, global['ng-zorro-antd/badge'], global['ng-zorro-antd/dropdown'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/list'], global['ng-zorro-antd/spin'], global['ng-zorro-antd/tabs'], global['ng-zorro-antd/tag']));
}(this, function (exports, core, theme, util, common, badge, dropdown, icon, list, spin, tabs, tag) { 'use strict';

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
    var NoticeIconTabComponent = /** @class */ (function () {
        function NoticeIconTabComponent() {
            this.locale = {};
            this.select = new core.EventEmitter();
            this.clear = new core.EventEmitter();
        }
        /**
         * @param {?} item
         * @return {?}
         */
        NoticeIconTabComponent.prototype.onClick = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.select.emit({ title: this.data.title, item: item });
        };
        /**
         * @return {?}
         */
        NoticeIconTabComponent.prototype.onClear = /**
         * @return {?}
         */
        function () {
            this.clear.emit(this.data.title);
        };
        NoticeIconTabComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'notice-icon-tab',
                        exportAs: 'noticeIconTab',
                        template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{data.emptyImage}}\" alt=\"not found\" />\n  <p>{{data.emptyText || locale.emptyText}}</p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{'notice-icon__item-read': item.read}\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            {{item.title}}\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{item.extra}}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{item.description}}</div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{item.datetime}}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        NoticeIconTabComponent.propDecorators = {
            locale: [{ type: core.Input }],
            data: [{ type: core.Input }],
            select: [{ type: core.Output }],
            clear: [{ type: core.Output }]
        };
        return NoticeIconTabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NoticeIconComponent = /** @class */ (function () {
        function NoticeIconComponent(i18n, cdr) {
            this.i18n = i18n;
            this.cdr = cdr;
            this.locale = {};
            this.data = [];
            this.loading = false;
            this.popoverVisible = false;
            this.btnClass = '';
            this.btnIconClass = '';
            this.select = new core.EventEmitter();
            this.clear = new core.EventEmitter();
            this.popoverVisibleChange = new core.EventEmitter();
        }
        /**
         * @param {?} result
         * @return {?}
         */
        NoticeIconComponent.prototype.onVisibleChange = /**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            this.popoverVisibleChange.emit(result);
        };
        /**
         * @param {?} i
         * @return {?}
         */
        NoticeIconComponent.prototype.onSelect = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            this.select.emit(i);
        };
        /**
         * @param {?} title
         * @return {?}
         */
        NoticeIconComponent.prototype.onClear = /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this.clear.emit(title);
        };
        /**
         * @return {?}
         */
        NoticeIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n$ = this.i18n.change.subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getData('noticeIcon');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NoticeIconComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NoticeIconComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.i18n$.unsubscribe();
        };
        NoticeIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'notice-icon',
                        exportAs: 'noticeIcon',
                        template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data?.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div *ngIf=\"data?.length > 0\" nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"['header-dropdown', 'notice-icon']\"\n    [nzDropdownMenu]=\"noticeMenu\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\"></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n",
                        host: { '[class.notice-icon__btn]': 'true' },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        NoticeIconComponent.ctorParameters = function () { return [
            { type: theme.PixelmonLocaleService },
            { type: core.ChangeDetectorRef }
        ]; };
        NoticeIconComponent.propDecorators = {
            data: [{ type: core.Input }],
            count: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            popoverVisible: [{ type: core.Input }],
            btnClass: [{ type: core.Input }],
            btnIconClass: [{ type: core.Input }],
            select: [{ type: core.Output }],
            clear: [{ type: core.Output }],
            popoverVisibleChange: [{ type: core.Output }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], NoticeIconComponent.prototype, "count", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], NoticeIconComponent.prototype, "loading", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], NoticeIconComponent.prototype, "popoverVisible", void 0);
        return NoticeIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [NoticeIconComponent];
    var NoticeIconModule = /** @class */ (function () {
        function NoticeIconModule() {
        }
        NoticeIconModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            theme.PixelmonLocaleModule,
                            badge.NzBadgeModule,
                            dropdown.NzDropDownModule,
                            icon.NzIconModule,
                            list.NzListModule,
                            spin.NzSpinModule,
                            tabs.NzTabsModule,
                            tag.NzTagModule,
                        ],
                        declarations: __spread(COMPONENTS, [NoticeIconTabComponent]),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return NoticeIconModule;
    }());

    exports.NoticeIconComponent = NoticeIconComponent;
    exports.NoticeIconModule = NoticeIconModule;
    exports.NoticeIconTabComponent = NoticeIconTabComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=noticeIcon.umd.js.map