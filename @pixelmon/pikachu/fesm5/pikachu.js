import { LodopModule } from '@pixelmon/pikachu/lodop';
export { LodopConfig, LodopModule, LodopService } from '@pixelmon/pikachu/lodop';
import { ReuseTabService as ReuseTabService$1 } from '@pixelmon/pikachu/reuse-tab';
export { ReuseTabComponent, ReuseTabContextComponent, ReuseTabContextDirective, ReuseTabContextMenuComponent, ReuseTabContextService, ReuseTabMatchMode, ReuseTabModule, ReuseTabService, ReuseTabStrategy } from '@pixelmon/pikachu/reuse-tab';
export { NoticeIconComponent, NoticeIconModule, NoticeIconTabComponent } from '@pixelmon/pikachu/notice-icon';
export { SidebarNavComponent, SidebarNavModule } from '@pixelmon/pikachu/sidebar-nav';
export { SVComponent, SVConfig, SVContainerComponent, SVModule, SVTitleComponent } from '@pixelmon/pikachu/view';
export { PageHeaderComponent, PageHeaderConfig, PageHeaderModule } from '@pixelmon/pikachu/page-header';
export { AdvancedTableModule } from '@pixelmon/pikachu/advanced-table';
import { EventEmitter, Component, ViewEncapsulation, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, NgModule, Injectable, ɵɵdefineInjectable, TemplateRef, Renderer2, Optional, Inject, ViewChild, ElementRef, Directive, Injector, ɵɵinject, INJECTOR, NgZone, Host, ContentChild, ContentChildren } from '@angular/core';
import { __decorate, __metadata, __spread, __assign } from 'tslib';
import { PixelmonLocaleService, PixelmonLocaleModule, SettingsService, MenuService, PIXELMON_I18N_TOKEN, TitleService, ScrollService, WINDOW, ResponsiveService, TranslatePipeModule, FilterPipeModule, ShortcutPipeModule } from '@pixelmon/theme';
import { InputNumber, InputBoolean, isEmpty, PixelmonUtilModule, updateHostClass } from '@pixelmon/util';
import { CommonModule, DOCUMENT, formatDate } from '@angular/common';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NavigationEnd, Router, RouterModule, ActivatedRoute, ROUTER_CONFIGURATION, NavigationStart } from '@angular/router';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { Subject, merge, Subscription, BehaviorSubject } from 'rxjs';
import { takeUntil, filter, debounceTime } from 'rxjs/operators';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ConnectionPositionPair, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ObserversModule } from '@angular/cdk/observers';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { ViewerDirectiveModule } from '@pixelmon/pikachu/viewer';
import { SmartTextModule as SmartTextModule$1 } from '@pixelmon/pikachu/smart-text';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NoticeItem() { }
if (false) {
    /** @type {?} */
    NoticeItem.prototype.title;
    /** @type {?} */
    NoticeItem.prototype.list;
    /**
     * 空列表文本，默认：`无通知`
     * @type {?|undefined}
     */
    NoticeItem.prototype.emptyText;
    /**
     * 空列表图像
     * @type {?|undefined}
     */
    NoticeItem.prototype.emptyImage;
    /**
     * 清空文本，默认：`清空`
     * @type {?|undefined}
     */
    NoticeItem.prototype.clearText;
}
/**
 * @record
 */
function NoticeIconList() { }
if (false) {
    /**
     * 头像图片链接
     * @type {?|undefined}
     */
    NoticeIconList.prototype.avatar;
    /**
     * 标题
     * @type {?|undefined}
     */
    NoticeIconList.prototype.title;
    /**
     * 描述信息
     * @type {?|undefined}
     */
    NoticeIconList.prototype.description;
    /**
     * 时间戳
     * @type {?|undefined}
     */
    NoticeIconList.prototype.datetime;
    /**
     * 额外信息，在列表项右上角
     * @type {?|undefined}
     */
    NoticeIconList.prototype.extra;
    /**
     * 是否已读状态
     * @type {?|undefined}
     */
    NoticeIconList.prototype.read;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function NoticeIconSelect() { }
if (false) {
    /** @type {?} */
    NoticeIconSelect.prototype.title;
    /** @type {?} */
    NoticeIconSelect.prototype.item;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NoticeIconTabComponent = /** @class */ (function () {
    function NoticeIconTabComponent() {
        this.locale = {};
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'notice-icon-tab',
                    exportAs: 'noticeIconTab',
                    template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{data.emptyImage}}\" alt=\"not found\" />\n  <p>{{data.emptyText || locale.emptyText}}</p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{'notice-icon__item-read': item.read}\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            {{item.title}}\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{item.extra}}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{item.description}}</div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{item.datetime}}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    NoticeIconTabComponent.propDecorators = {
        locale: [{ type: Input }],
        data: [{ type: Input }],
        select: [{ type: Output }],
        clear: [{ type: Output }]
    };
    return NoticeIconTabComponent;
}());
if (false) {
    /** @type {?} */
    NoticeIconTabComponent.prototype.locale;
    /** @type {?} */
    NoticeIconTabComponent.prototype.data;
    /** @type {?} */
    NoticeIconTabComponent.prototype.select;
    /** @type {?} */
    NoticeIconTabComponent.prototype.clear;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
        this.popoverVisibleChange = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'notice-icon',
                    exportAs: 'noticeIcon',
                    template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data?.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div *ngIf=\"data?.length > 0\" nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"['header-dropdown', 'notice-icon']\"\n    [nzDropdownMenu]=\"noticeMenu\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\"></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n",
                    host: { '[class.notice-icon__btn]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NoticeIconComponent.ctorParameters = function () { return [
        { type: PixelmonLocaleService },
        { type: ChangeDetectorRef }
    ]; };
    NoticeIconComponent.propDecorators = {
        data: [{ type: Input }],
        count: [{ type: Input }],
        loading: [{ type: Input }],
        popoverVisible: [{ type: Input }],
        btnClass: [{ type: Input }],
        btnIconClass: [{ type: Input }],
        select: [{ type: Output }],
        clear: [{ type: Output }],
        popoverVisibleChange: [{ type: Output }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NoticeIconComponent.prototype, "count", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NoticeIconComponent.prototype, "loading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NoticeIconComponent.prototype, "popoverVisible", void 0);
    return NoticeIconComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NoticeIconComponent.prototype.i18n$;
    /** @type {?} */
    NoticeIconComponent.prototype.locale;
    /** @type {?} */
    NoticeIconComponent.prototype.data;
    /** @type {?} */
    NoticeIconComponent.prototype.count;
    /** @type {?} */
    NoticeIconComponent.prototype.loading;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisible;
    /** @type {?} */
    NoticeIconComponent.prototype.btnClass;
    /** @type {?} */
    NoticeIconComponent.prototype.btnIconClass;
    /** @type {?} */
    NoticeIconComponent.prototype.select;
    /** @type {?} */
    NoticeIconComponent.prototype.clear;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisibleChange;
    /**
     * @type {?}
     * @private
     */
    NoticeIconComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NoticeIconComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [NoticeIconComponent];
var NoticeIconModule = /** @class */ (function () {
    function NoticeIconModule() {
    }
    NoticeIconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        PixelmonLocaleModule,
                        NzBadgeModule,
                        NzDropDownModule,
                        NzIconModule,
                        NzListModule,
                        NzSpinModule,
                        NzTabsModule,
                        NzTagModule,
                    ],
                    declarations: __spread(COMPONENTS, [NoticeIconTabComponent]),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return NoticeIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageHeaderConfig = /** @class */ (function () {
    function PageHeaderConfig() {
        /**
         * 首页文本，若指定空表示不显示
         */
        this.home = '首页';
        /**
         * 首页链接
         */
        this.homeLink = '/';
        /**
         * 自动生成导航，以当前路由从主菜单中定位
         */
        this.autoBreadcrumb = true;
        /**
         * 自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         */
        this.recursiveBreadcrumb = false;
        /**
         * 自动生成标题，以当前路由从主菜单中定位
         */
        this.autoTitle = true;
        /**
         * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下
         */
        this.syncTitle = false;
        /**
         * 是否固定模式
         */
        this.fixed = false;
        /**
         * 固定偏移值
         */
        this.fixedOffsetTop = 64;
    }
    PageHeaderConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ PageHeaderConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function PageHeaderConfig_Factory() { return new PageHeaderConfig(); }, token: PageHeaderConfig, providedIn: "root" });
    return PageHeaderConfig;
}());
if (false) {
    /**
     * 首页文本，若指定空表示不显示
     * @type {?}
     */
    PageHeaderConfig.prototype.home;
    /**
     * 首页链接
     * @type {?}
     */
    PageHeaderConfig.prototype.homeLink;
    /**
     * 首页链接国际化参数
     * @type {?}
     */
    PageHeaderConfig.prototype.homeI18n;
    /**
     * 自动生成导航，以当前路由从主菜单中定位
     * @type {?}
     */
    PageHeaderConfig.prototype.autoBreadcrumb;
    /**
     * 自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @type {?}
     */
    PageHeaderConfig.prototype.recursiveBreadcrumb;
    /**
     * 自动生成标题，以当前路由从主菜单中定位
     * @type {?}
     */
    PageHeaderConfig.prototype.autoTitle;
    /**
     * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下
     * @type {?}
     */
    PageHeaderConfig.prototype.syncTitle;
    /**
     * 是否固定模式
     * @type {?}
     */
    PageHeaderConfig.prototype.fixed;
    /**
     * 固定偏移值
     * @type {?}
     */
    PageHeaderConfig.prototype.fixedOffsetTop;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PageHeaderPath() { }
if (false) {
    /** @type {?|undefined} */
    PageHeaderPath.prototype.title;
    /** @type {?|undefined} */
    PageHeaderPath.prototype.link;
}
var PageHeaderComponent = /** @class */ (function () {
    // #endregion
    function PageHeaderComponent(cog, settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv, cdr) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.titleSrv = titleSrv;
        this.reuseSrv = reuseSrv;
        this.cdr = cdr;
        this.inited = false;
        this.unsubscribe$ = new Subject();
        this._titleVal = '';
        this.paths = [];
        this.loading = false;
        this.wide = false;
        Object.assign(this, __assign({}, new PageHeaderConfig(), cog));
        settings.notify
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.affix.updatePosition((/** @type {?} */ ({}))); }));
        merge(menuSrv.change.pipe(filter((/**
         * @return {?}
         */
        function () { return _this.inited; }))), router.events.pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e instanceof NavigationEnd; }))), i18nSrv.change)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._menus = null;
            _this.refresh();
        }));
    }
    Object.defineProperty(PageHeaderComponent.prototype, "menus", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (this._menus) {
                return this._menus;
            }
            this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
            return this._menus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageHeaderComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
                this._titleVal = '';
            }
            else {
                this._title = value;
                this._titleVal = this._title;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.setTitle().genBreadcrumb();
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    PageHeaderComponent.prototype.genBreadcrumb = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
            this.paths = [];
            return;
        }
        /** @type {?} */
        var paths = [];
        this.menus.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            /** @type {?} */
            var title = item.text;
            if (item.i18n && _this.i18nSrv)
                title = _this.i18nSrv.fanyi(item.i18n);
            paths.push({ title: title, link: (/** @type {?} */ ((item.link && [item.link]))) });
        }));
        // add home
        if (this.home) {
            paths.splice(0, 0, {
                title: (this.homeI18n && this.i18nSrv && this.i18nSrv.fanyi(this.homeI18n)) || this.home,
                link: [this.homeLink],
            });
        }
        this.paths = paths;
        return this;
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    PageHeaderComponent.prototype.setTitle = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        if ((/** @type {?} */ (this))._title == null && (/** @type {?} */ (this))._titleTpl == null && (/** @type {?} */ (this)).autoTitle && (/** @type {?} */ (this)).menus.length > 0) {
            /** @type {?} */
            var item = (/** @type {?} */ (this)).menus[(/** @type {?} */ (this)).menus.length - 1];
            /** @type {?} */
            var title = item.text;
            if (item.i18n && (/** @type {?} */ (this)).i18nSrv)
                title = (/** @type {?} */ (this)).i18nSrv.fanyi(item.i18n);
            (/** @type {?} */ (this))._titleVal = (/** @type {?} */ (title));
        }
        if ((/** @type {?} */ (this))._titleVal && (/** @type {?} */ (this)).syncTitle) {
            if ((/** @type {?} */ (this)).titleSrv) {
                (/** @type {?} */ (this)).titleSrv.setTitle((/** @type {?} */ (this))._titleVal);
            }
            if ((/** @type {?} */ (this)).reuseSrv) {
                (/** @type {?} */ (this)).reuseSrv.title = (/** @type {?} */ (this))._titleVal;
            }
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.conTpl.nativeElement)) {
            this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
        }
        else {
            this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
        }
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.refresh();
        this.inited = true;
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited)
            this.refresh();
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    PageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-header',
                    exportAs: 'pageHeader',
                    template: "<nz-affix #affixEl\n          *ngIf=\"fixed;else phTpl\"\n          [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\"\n                   [nzTitle]=\"false\"\n                   [nzActive]=\"true\"\n                   [nzParagraph]=\"{rows: 3}\"\n                   [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\"\n               class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\"\n                  class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{_titleVal}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\"\n                   class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\"\n                   (cdkObserveContent)=\"checkContent()\"\n                   #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\"\n                   class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    PageHeaderComponent.ctorParameters = function () { return [
        { type: PageHeaderConfig },
        { type: SettingsService },
        { type: Renderer2 },
        { type: Router },
        { type: MenuService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PIXELMON_I18N_TOKEN,] }] },
        { type: TitleService, decorators: [{ type: Optional }, { type: Inject, args: [TitleService,] }] },
        { type: ReuseTabService$1, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService$1,] }] },
        { type: ChangeDetectorRef }
    ]; };
    PageHeaderComponent.propDecorators = {
        conTpl: [{ type: ViewChild, args: ['conTpl', { static: false },] }],
        affix: [{ type: ViewChild, args: ['affixEl', { static: false },] }],
        title: [{ type: Input }],
        loading: [{ type: Input }],
        wide: [{ type: Input }],
        home: [{ type: Input }],
        homeLink: [{ type: Input }],
        homeI18n: [{ type: Input }],
        autoBreadcrumb: [{ type: Input }],
        autoTitle: [{ type: Input }],
        syncTitle: [{ type: Input }],
        fixed: [{ type: Input }],
        fixedOffsetTop: [{ type: Input }],
        breadcrumb: [{ type: Input }],
        recursiveBreadcrumb: [{ type: Input }],
        logo: [{ type: Input }],
        action: [{ type: Input }],
        content: [{ type: Input }],
        extra: [{ type: Input }],
        tab: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PageHeaderComponent.prototype, "loading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PageHeaderComponent.prototype, "wide", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "autoBreadcrumb", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "autoTitle", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "syncTitle", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "fixed", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], PageHeaderComponent.prototype, "fixedOffsetTop", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "recursiveBreadcrumb", void 0);
    return PageHeaderComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.conTpl;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.affix;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype._menus;
    /** @type {?} */
    PageHeaderComponent.prototype._titleVal;
    /** @type {?} */
    PageHeaderComponent.prototype.paths;
    /** @type {?} */
    PageHeaderComponent.prototype._title;
    /** @type {?} */
    PageHeaderComponent.prototype._titleTpl;
    /** @type {?} */
    PageHeaderComponent.prototype.loading;
    /** @type {?} */
    PageHeaderComponent.prototype.wide;
    /** @type {?} */
    PageHeaderComponent.prototype.home;
    /** @type {?} */
    PageHeaderComponent.prototype.homeLink;
    /** @type {?} */
    PageHeaderComponent.prototype.homeI18n;
    /** @type {?} */
    PageHeaderComponent.prototype.autoBreadcrumb;
    /** @type {?} */
    PageHeaderComponent.prototype.autoTitle;
    /** @type {?} */
    PageHeaderComponent.prototype.syncTitle;
    /** @type {?} */
    PageHeaderComponent.prototype.fixed;
    /** @type {?} */
    PageHeaderComponent.prototype.fixedOffsetTop;
    /** @type {?} */
    PageHeaderComponent.prototype.breadcrumb;
    /** @type {?} */
    PageHeaderComponent.prototype.recursiveBreadcrumb;
    /** @type {?} */
    PageHeaderComponent.prototype.logo;
    /** @type {?} */
    PageHeaderComponent.prototype.action;
    /** @type {?} */
    PageHeaderComponent.prototype.content;
    /** @type {?} */
    PageHeaderComponent.prototype.extra;
    /** @type {?} */
    PageHeaderComponent.prototype.tab;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.menuSrv;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.titleSrv;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.reuseSrv;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS$1 = [PageHeaderComponent];
var PageHeaderModule = /** @class */ (function () {
    function PageHeaderModule() {
    }
    PageHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, PixelmonUtilModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule],
                    declarations: __spread(COMPONENTS$1),
                    exports: __spread(COMPONENTS$1),
                },] }
    ];
    return PageHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReuseTabContextMenuComponent = /** @class */ (function () {
    function ReuseTabContextMenuComponent(i18nSrv) {
        this.i18nSrv = i18nSrv;
        this.close = new EventEmitter();
    }
    Object.defineProperty(ReuseTabContextMenuComponent.prototype, "i18n", {
        get: /**
         * @return {?}
         */
        function () {
            return this._i18n;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._i18n = __assign({}, this.i18nSrv.getData('reuseTab'), value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabContextMenuComponent.prototype, "includeNonCloseable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.event.ctrlKey;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.notify = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.close.next({
            type: type,
            item: this.item,
            includeNonCloseable: this.includeNonCloseable,
        });
    };
    /**
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.includeNonCloseable)
            this.item.closable = true;
    };
    /**
     * @param {?} e
     * @param {?} type
     * @param {?=} custom
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.click = /**
     * @param {?} e
     * @param {?} type
     * @param {?=} custom
     * @return {?}
     */
    function (e, type, custom) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'close' && !this.item.closable)
            return;
        if (type === 'closeRight' && this.item.last)
            return;
        if (custom) {
            if (this.isDisabled(custom))
                return;
            custom.fn(this.item, custom);
        }
        this.notify(type);
    };
    /**
     * @param {?} custom
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.isDisabled = /**
     * @param {?} custom
     * @return {?}
     */
    function (custom) {
        return custom.disabled ? custom.disabled(this.item) : false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.closeMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.type === 'click' && event.button === 2)
            return;
        this.notify(null);
    };
    ReuseTabContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab-context-menu',
                    template: "<ul nz-menu>\n  <li nz-menu-item\n      (click)=\"click($event, 'close')\"\n      data-type=\"close\"\n      [nzDisabled]=\"!item.closable\"\n      [innerHTML]=\"i18n.close\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'closeOther')\"\n      data-type=\"closeOther\"\n      [innerHTML]=\"i18n.closeOther\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'closeRight')\"\n      data-type=\"closeRight\"\n      [nzDisabled]=\"item.last\"\n      [innerHTML]=\"i18n.closeRight\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'clear')\"\n      data-type=\"clear\"\n      [innerHTML]=\"i18n.clear\"></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li *ngFor=\"let i of customContextMenu\"\n        nz-menu-item\n        [attr.data-type]=\"i.id\"\n        [nzDisabled]=\"isDisabled(i)\"\n        (click)=\"click($event, 'custom', i)\"\n        [innerHTML]=\"i.title\"></li>\n  </ng-container>\n</ul>\n",
                    host: {
                        '(document:click)': 'closeMenu($event)',
                        '(document:contextmenu)': 'closeMenu($event)',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    ReuseTabContextMenuComponent.ctorParameters = function () { return [
        { type: PixelmonLocaleService }
    ]; };
    ReuseTabContextMenuComponent.propDecorators = {
        i18n: [{ type: Input }],
        item: [{ type: Input }],
        event: [{ type: Input }],
        customContextMenu: [{ type: Input }],
        close: [{ type: Output }]
    };
    return ReuseTabContextMenuComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextMenuComponent.prototype._i18n;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.item;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.event;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.customContextMenu;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.close;
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextMenuComponent.prototype.i18nSrv;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReuseTabContextService = /** @class */ (function () {
    function ReuseTabContextService(overlay) {
        this.overlay = overlay;
        this.show = new Subject();
        this.close = new Subject();
    }
    /**
     * @return {?}
     */
    ReuseTabContextService.prototype.remove = /**
     * @return {?}
     */
    function () {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    };
    /**
     * @param {?} context
     * @return {?}
     */
    ReuseTabContextService.prototype.open = /**
     * @param {?} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        this.remove();
        var event = context.event, item = context.item, customContextMenu = context.customContextMenu;
        /** @type {?} */
        var fakeElement = new ElementRef({
            getBoundingClientRect: (/**
             * @return {?}
             */
            function () { return ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }); }),
        });
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        /** @type {?} */
        var positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(fakeElement)
            .withPositions(positions);
        this.ref = this.overlay.create({
            positionStrategy: positionStrategy,
            panelClass: 'reuse-tab__cm',
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
        /** @type {?} */
        var comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
        /** @type {?} */
        var instance = comp.instance;
        instance.i18n = this.i18n;
        instance.item = __assign({}, item);
        instance.customContextMenu = (/** @type {?} */ (customContextMenu));
        instance.event = event;
        /** @type {?} */
        var sub$ = new Subscription();
        sub$.add(instance.close.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.close.next(res);
            _this.remove();
        })));
        comp.onDestroy((/**
         * @return {?}
         */
        function () { return sub$.unsubscribe(); }));
    };
    ReuseTabContextService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ReuseTabContextService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    return ReuseTabContextService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextService.prototype.ref;
    /** @type {?} */
    ReuseTabContextService.prototype.i18n;
    /** @type {?} */
    ReuseTabContextService.prototype.show;
    /** @type {?} */
    ReuseTabContextService.prototype.close;
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextService.prototype.overlay;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReuseTabContextComponent = /** @class */ (function () {
    function ReuseTabContextComponent(srv) {
        var _this = this;
        this.srv = srv;
        this.sub$ = new Subscription();
        this.change = new EventEmitter();
        this.sub$.add(srv.show.subscribe((/**
         * @param {?} context
         * @return {?}
         */
        function (context) { return _this.srv.open(context); })));
        this.sub$.add(srv.close.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.change.emit(res); })));
    }
    Object.defineProperty(ReuseTabContextComponent.prototype, "i18n", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.srv.i18n = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ReuseTabContextComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub$.unsubscribe();
    };
    ReuseTabContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab-context',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    ReuseTabContextComponent.ctorParameters = function () { return [
        { type: ReuseTabContextService }
    ]; };
    ReuseTabContextComponent.propDecorators = {
        i18n: [{ type: Input }],
        change: [{ type: Output }]
    };
    return ReuseTabContextComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextComponent.prototype.sub$;
    /** @type {?} */
    ReuseTabContextComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextComponent.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReuseTabContextDirective = /** @class */ (function () {
    function ReuseTabContextDirective(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ReuseTabContextDirective.prototype._onContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.srv.show.next({
            event: event,
            item: this.item,
            customContextMenu: this.customContextMenu,
        });
        event.preventDefault();
        event.stopPropagation();
    };
    ReuseTabContextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[reuse-tab-context-menu]',
                    exportAs: 'reuseTabContextMenu',
                    host: {
                        '(contextmenu)': '_onContextMenu($event)',
                    },
                },] }
    ];
    /** @nocollapse */
    ReuseTabContextDirective.ctorParameters = function () { return [
        { type: ReuseTabContextService }
    ]; };
    ReuseTabContextDirective.propDecorators = {
        item: [{ type: Input, args: ['reuse-tab-context-menu',] }],
        customContextMenu: [{ type: Input }]
    };
    return ReuseTabContextDirective;
}());
if (false) {
    /** @type {?} */
    ReuseTabContextDirective.prototype.item;
    /** @type {?} */
    ReuseTabContextDirective.prototype.customContextMenu;
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextDirective.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ReuseTabMatchMode = {
    /**
     * （推荐）按菜单 `Menu` 配置
     *
     * 可复用：
     * - `{ text:'Dashboard' }`
     * - `{ text:'Dashboard', reuse: true }`
     *
     * 不可复用：
     * - `{ text:'Dashboard', reuse: false }`
     */
    Menu: 0,
    /**
     * 按菜单 `Menu` 强制配置
     *
     * 可复用：
     * - `{ text:'Dashboard', reuse: true }`
     *
     * 不可复用：
     * - `{ text:'Dashboard' }`
     * - `{ text:'Dashboard', reuse: false }`
     */
    MenuForce: 1,
    /**
     * 对所有路由有效，可以配合 `excludes` 过滤无须复用路由
     */
    URL: 2,
};
ReuseTabMatchMode[ReuseTabMatchMode.Menu] = 'Menu';
ReuseTabMatchMode[ReuseTabMatchMode.MenuForce] = 'MenuForce';
ReuseTabMatchMode[ReuseTabMatchMode.URL] = 'URL';
/**
 * @record
 */
function ReuseTitle() { }
if (false) {
    /** @type {?} */
    ReuseTitle.prototype.text;
    /** @type {?|undefined} */
    ReuseTitle.prototype.i18n;
}
/**
 * @record
 */
function ReuseTabCached() { }
if (false) {
    /** @type {?} */
    ReuseTabCached.prototype.title;
    /** @type {?} */
    ReuseTabCached.prototype.url;
    /**
     * 是否允许关闭，默认：`true`
     * @type {?|undefined}
     */
    ReuseTabCached.prototype.closable;
    /**
     * 当前滚动条位置
     * @type {?|undefined}
     */
    ReuseTabCached.prototype.position;
    /** @type {?} */
    ReuseTabCached.prototype._snapshot;
    /** @type {?} */
    ReuseTabCached.prototype._handle;
}
/**
 * @record
 */
function ReuseTabNotify() { }
if (false) {
    /**
     * 事件类型
     * @type {?}
     */
    ReuseTabNotify.prototype.active;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function ReuseItem() { }
if (false) {
    /** @type {?} */
    ReuseItem.prototype.url;
    /** @type {?} */
    ReuseItem.prototype.title;
    /** @type {?} */
    ReuseItem.prototype.closable;
    /** @type {?} */
    ReuseItem.prototype.index;
    /** @type {?} */
    ReuseItem.prototype.active;
    /** @type {?} */
    ReuseItem.prototype.last;
}
/**
 * @record
 */
function ReuseContextEvent() { }
if (false) {
    /** @type {?} */
    ReuseContextEvent.prototype.event;
    /** @type {?} */
    ReuseContextEvent.prototype.item;
    /** @type {?|undefined} */
    ReuseContextEvent.prototype.comp;
    /** @type {?|undefined} */
    ReuseContextEvent.prototype.customContextMenu;
}
/**
 * @record
 */
function ReuseContextCloseEvent() { }
if (false) {
    /** @type {?} */
    ReuseContextCloseEvent.prototype.type;
    /** @type {?} */
    ReuseContextCloseEvent.prototype.item;
    /** @type {?} */
    ReuseContextCloseEvent.prototype.includeNonCloseable;
}
/**
 * @record
 */
function ReuseContextI18n() { }
if (false) {
    /** @type {?|undefined} */
    ReuseContextI18n.prototype.close;
    /** @type {?|undefined} */
    ReuseContextI18n.prototype.closeOther;
    /** @type {?|undefined} */
    ReuseContextI18n.prototype.closeRight;
    /** @type {?|undefined} */
    ReuseContextI18n.prototype.clear;
}
/**
 * @record
 */
function ReuseCustomContextMenu() { }
if (false) {
    /** @type {?} */
    ReuseCustomContextMenu.prototype.id;
    /** @type {?} */
    ReuseCustomContextMenu.prototype.title;
    /** @type {?} */
    ReuseCustomContextMenu.prototype.fn;
    /** @type {?|undefined} */
    ReuseCustomContextMenu.prototype.disabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
var ReuseTabService = /** @class */ (function () {
    // #endregion
    function ReuseTabService(injector, menuService) {
        this.injector = injector;
        this.menuService = menuService;
        this._inited = false;
        this._max = 10;
        this._keepingScroll = false;
        this._cachedChange = new BehaviorSubject(null);
        this._cached = [];
        this._titleCached = {};
        this._closableCached = {};
        this.positionBuffer = {};
        this.debug = false;
        this.mode = ReuseTabMatchMode.Menu;
        /**
         * 排除规则，限 `mode=URL`
         */
        this.excludes = [];
    }
    Object.defineProperty(ReuseTabService.prototype, "snapshot", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.injector.get(ActivatedRoute).snapshot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "inited", {
        // #region public
        get: 
        // #region public
        /**
         * @return {?}
         */
        function () {
            return this._inited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "curUrl", {
        /** 当前路由地址 */
        get: /**
         * 当前路由地址
         * @return {?}
         */
        function () {
            return this.getUrl(this.snapshot);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "max", {
        /** 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件 */
        set: /**
         * 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = Math.min(Math.max(value, 2), 100);
            for (var i = this._cached.length; i > this._max; i--) {
                this._cached.pop();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "keepingScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._keepingScroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._keepingScroll = value;
            this.initScroll();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "items", {
        /** 获取已缓存的路由 */
        get: /**
         * 获取已缓存的路由
         * @return {?}
         */
        function () {
            return this._cached;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "count", {
        /** 获取当前缓存的路由总数 */
        get: /**
         * 获取当前缓存的路由总数
         * @return {?}
         */
        function () {
            return this._cached.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "change", {
        /** 订阅缓存变更通知 */
        get: /**
         * 订阅缓存变更通知
         * @return {?}
         */
        function () {
            return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "title", {
        /** 自定义当前标题 */
        set: /**
         * 自定义当前标题
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var url = this.curUrl;
            if (typeof value === 'string')
                value = { text: value };
            this._titleCached[url] = value;
            this.di('update current tag title: ', value);
            this._cachedChange.next({
                active: 'title',
                title: value,
                list: this._cached,
            });
        },
        enumerable: true,
        configurable: true
    });
    /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
    /**
     * 获取指定路径缓存所在位置，`-1` 表示无缓存
     * @param {?} url
     * @return {?}
     */
    ReuseTabService.prototype.index = /**
     * 获取指定路径缓存所在位置，`-1` 表示无缓存
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._cached.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === url; }));
    };
    /** 获取指定路径缓存是否存在 */
    /**
     * 获取指定路径缓存是否存在
     * @param {?} url
     * @return {?}
     */
    ReuseTabService.prototype.exists = /**
     * 获取指定路径缓存是否存在
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.index(url) !== -1;
    };
    /** 获取指定路径缓存 */
    /**
     * 获取指定路径缓存
     * @param {?=} url
     * @return {?}
     */
    ReuseTabService.prototype.get = /**
     * 获取指定路径缓存
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        return url ? this._cached.find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === url; })) || null : null;
    };
    /**
     * @private
     * @param {?} url
     * @param {?} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.remove = /**
     * @private
     * @param {?} url
     * @param {?} includeNonCloseable
     * @return {?}
     */
    function (url, includeNonCloseable) {
        /** @type {?} */
        var idx = typeof url === 'string' ? this.index(url) : url;
        /** @type {?} */
        var item = idx !== -1 ? this._cached[idx] : null;
        if (!item || (!includeNonCloseable && !item.closable))
            return false;
        this.destroy(item._handle);
        this._cached.splice(idx, 1);
        delete this._titleCached[url];
        return true;
    };
    /**
     * 根据URL移除标签
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    /**
     * 根据URL移除标签
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.close = /**
     * 根据URL移除标签
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    function (url, includeNonCloseable) {
        if (includeNonCloseable === void 0) { includeNonCloseable = false; }
        this.removeUrlBuffer = url;
        this.remove(url, includeNonCloseable);
        this._cachedChange.next({ active: 'close', url: url, list: this._cached });
        this.di('close tag', url);
        return true;
    };
    /**
     * 清除右边
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    /**
     * 清除右边
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.closeRight = /**
     * 清除右边
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    function (url, includeNonCloseable) {
        if (includeNonCloseable === void 0) { includeNonCloseable = false; }
        /** @type {?} */
        var start = this.index(url);
        for (var i = this.count - 1; i > start; i--) {
            this.remove(i, includeNonCloseable);
        }
        this.removeUrlBuffer = null;
        this._cachedChange.next({ active: 'closeRight', url: url, list: this._cached });
        this.di('close right tages', url);
        return true;
    };
    /**
     * 清除所有缓存
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    /**
     * 清除所有缓存
     *
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.clear = /**
     * 清除所有缓存
     *
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    function (includeNonCloseable) {
        var _this = this;
        if (includeNonCloseable === void 0) { includeNonCloseable = false; }
        this._cached.forEach((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            if (!includeNonCloseable && w.closable)
                _this.destroy(w._handle);
        }));
        this._cached = this._cached.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !includeNonCloseable && !w.closable; }));
        this.removeUrlBuffer = null;
        this._cachedChange.next({ active: 'clear', list: this._cached });
        this.di('clear all catch');
    };
    /**
     * 移动缓存数据
     * @param url 要移动的URL地址
     * @param position 新位置，下标从 `0` 开始
     *
     * @example
     * ```
     * // source
     * [ '/a/1', '/a/2', '/a/3', '/a/4', '/a/5' ]
     * move('/a/1', 2);
     * // output
     * [ '/a/2', '/a/3', '/a/1', '/a/4', '/a/5' ]
     * move('/a/1', -1);
     * // output
     * [ '/a/2', '/a/3', '/a/4', '/a/5', '/a/1' ]
     * ```
     */
    /**
     * 移动缓存数据
     * \@example
     * ```
     * // source
     * [ '/a/1', '/a/2', '/a/3', '/a/4', '/a/5' ]
     * move('/a/1', 2);
     * // output
     * [ '/a/2', '/a/3', '/a/1', '/a/4', '/a/5' ]
     * move('/a/1', -1);
     * // output
     * [ '/a/2', '/a/3', '/a/4', '/a/5', '/a/1' ]
     * ```
     * @param {?} url 要移动的URL地址
     * @param {?} position 新位置，下标从 `0` 开始
     *
     * @return {?}
     */
    ReuseTabService.prototype.move = /**
     * 移动缓存数据
     * \@example
     * ```
     * // source
     * [ '/a/1', '/a/2', '/a/3', '/a/4', '/a/5' ]
     * move('/a/1', 2);
     * // output
     * [ '/a/2', '/a/3', '/a/1', '/a/4', '/a/5' ]
     * move('/a/1', -1);
     * // output
     * [ '/a/2', '/a/3', '/a/4', '/a/5', '/a/1' ]
     * ```
     * @param {?} url 要移动的URL地址
     * @param {?} position 新位置，下标从 `0` 开始
     *
     * @return {?}
     */
    function (url, position) {
        /** @type {?} */
        var start = this._cached.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === url; }));
        if (start === -1)
            return;
        /** @type {?} */
        var data = this._cached.slice();
        data.splice(position < 0 ? data.length + position : position, 0, data.splice(start, 1)[0]);
        this._cached = data;
        this._cachedChange.next({
            active: 'move',
            url: url,
            position: position,
            list: this._cached,
        });
    };
    /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     */
    /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     * @param {?} newUrl
     * @return {?}
     */
    ReuseTabService.prototype.replace = /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     * @param {?} newUrl
     * @return {?}
     */
    function (newUrl) {
        /** @type {?} */
        var url = this.curUrl;
        if (this.exists(url)) {
            this.close(url, true);
        }
        else {
            this.removeUrlBuffer = url;
        }
        this.injector.get(Router).navigateByUrl(newUrl);
    };
    /**
     * 获取标题，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
     * 2. 路由配置中 data 属性中包含 titleI18n > title
     * 3. 菜单数据中 text 属性
     *
     * @param url 指定URL
     * @param route 指定路由快照
     */
    /**
     * 获取标题，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
     * 2. 路由配置中 data 属性中包含 titleI18n > title
     * 3. 菜单数据中 text 属性
     *
     * @param {?} url 指定URL
     * @param {?=} route 指定路由快照
     * @return {?}
     */
    ReuseTabService.prototype.getTitle = /**
     * 获取标题，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
     * 2. 路由配置中 data 属性中包含 titleI18n > title
     * 3. 菜单数据中 text 属性
     *
     * @param {?} url 指定URL
     * @param {?=} route 指定路由快照
     * @return {?}
     */
    function (url, route) {
        if (this._titleCached[url])
            return this._titleCached[url];
        if (route && route.data && (route.data.titleI18n || route.data.title))
            return (/** @type {?} */ ({
                text: route.data.title,
                i18n: route.data.titleI18n,
            }));
        /** @type {?} */
        var menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        return menu ? { text: menu.text, i18n: menu.i18n } : { text: url };
    };
    /**
     * 清除标题缓存
     */
    /**
     * 清除标题缓存
     * @return {?}
     */
    ReuseTabService.prototype.clearTitleCached = /**
     * 清除标题缓存
     * @return {?}
     */
    function () {
        this._titleCached = {};
    };
    Object.defineProperty(ReuseTabService.prototype, "closable", {
        /** 自定义当前 `closable` 状态 */
        set: /**
         * 自定义当前 `closable` 状态
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var url = this.curUrl;
            this._closableCached[url] = value;
            this.di('update current tag closable: ', value);
            this._cachedChange.next({
                active: 'closable',
                closable: value,
                list: this._cached,
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取 `closable` 状态，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
     * 2. 路由配置中 data 属性中包含 `reuseClosable`
     * 3. 菜单数据中 `reuseClosable` 属性
     *
     * @param url 指定URL
     * @param route 指定路由快照
     */
    /**
     * 获取 `closable` 状态，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
     * 2. 路由配置中 data 属性中包含 `reuseClosable`
     * 3. 菜单数据中 `reuseClosable` 属性
     *
     * @param {?} url 指定URL
     * @param {?=} route 指定路由快照
     * @return {?}
     */
    ReuseTabService.prototype.getClosable = /**
     * 获取 `closable` 状态，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
     * 2. 路由配置中 data 属性中包含 `reuseClosable`
     * 3. 菜单数据中 `reuseClosable` 属性
     *
     * @param {?} url 指定URL
     * @param {?=} route 指定路由快照
     * @return {?}
     */
    function (url, route) {
        if (typeof this._closableCached[url] !== 'undefined')
            return this._closableCached[url];
        if (route && route.data && typeof route.data.reuseClosable === 'boolean')
            return route.data.reuseClosable;
        /** @type {?} */
        var menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.reuseClosable === 'boolean')
            return menu.reuseClosable;
        return true;
    };
    /**
     * 清空 `closable` 缓存
     */
    /**
     * 清空 `closable` 缓存
     * @return {?}
     */
    ReuseTabService.prototype.clearClosableCached = /**
     * 清空 `closable` 缓存
     * @return {?}
     */
    function () {
        this._closableCached = {};
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.getTruthRoute = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var next = route;
        while (next.firstChild)
            next = next.firstChild;
        return next;
    };
    /**
     * 根据快照获取URL地址
     */
    /**
     * 根据快照获取URL地址
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.getUrl = /**
     * 根据快照获取URL地址
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var next = this.getTruthRoute(route);
        /** @type {?} */
        var segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = (/** @type {?} */ (next.parent));
        }
        /** @type {?} */
        var url = '/' +
            segments
                .filter((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i; }))
                .reverse()
                .join('/');
        return url;
    };
    /**
     * 检查快照是否允许被复用
     */
    /**
     * 检查快照是否允许被复用
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.can = /**
     * 检查快照是否允许被复用
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var url = this.getUrl(route);
        if (url === this.removeUrlBuffer)
            return false;
        if (route.data && typeof route.data.reuse === 'boolean')
            return route.data.reuse;
        if (this.mode !== ReuseTabMatchMode.URL) {
            /** @type {?} */
            var menu = this.getMenu(url);
            if (!menu)
                return false;
            if (this.mode === ReuseTabMatchMode.Menu) {
                if (menu.reuse === false)
                    return false;
            }
            else {
                if (!menu.reuse || menu.reuse !== true)
                    return false;
            }
            return true;
        }
        return this.excludes.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r.test(url); })) === -1;
    };
    /**
     * 刷新，触发一个 refresh 类型事件
     */
    /**
     * 刷新，触发一个 refresh 类型事件
     * @param {?=} data
     * @return {?}
     */
    ReuseTabService.prototype.refresh = /**
     * 刷新，触发一个 refresh 类型事件
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        this._cachedChange.next({ active: 'refresh', data: data });
    };
    // #endregion
    // #region privates
    // #endregion
    // #region privates
    /**
     * @private
     * @param {?} _handle
     * @return {?}
     */
    ReuseTabService.prototype.destroy = 
    // #endregion
    // #region privates
    /**
     * @private
     * @param {?} _handle
     * @return {?}
     */
    function (_handle) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy)
            _handle.componentRef.destroy();
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    ReuseTabService.prototype.di = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.debug)
            return;
        // tslint:disable-next-line:no-console
        console.warn.apply(console, __spread(args));
    };
    /**
     * @return {?}
     */
    ReuseTabService.prototype.init = /**
     * @return {?}
     */
    function () {
        this.initScroll();
        this._inited = true;
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    ReuseTabService.prototype.getMenu = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var menus = this.menuService.getPathByUrl(url);
        if (!menus || menus.length === 0)
            return null;
        return menus.pop();
    };
    /**
     * @private
     * @param {?} method
     * @param {?} _url
     * @param {?} comp
     * @return {?}
     */
    ReuseTabService.prototype.runHook = /**
     * @private
     * @param {?} method
     * @param {?} _url
     * @param {?} comp
     * @return {?}
     */
    function (method, _url, comp) {
        if (comp.instance && typeof comp.instance[method] === 'function')
            comp.instance[method]();
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.hasInValidRoute = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return !route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children;
    };
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     */
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.shouldDetach = /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (this.hasInValidRoute(route))
            return false;
        this.di('#shouldDetach', this.can(route), this.getUrl(route));
        return this.can(route);
    };
    /**
     * 存储
     */
    /**
     * 存储
     * @param {?} _snapshot
     * @param {?} _handle
     * @return {?}
     */
    ReuseTabService.prototype.store = /**
     * 存储
     * @param {?} _snapshot
     * @param {?} _handle
     * @return {?}
     */
    function (_snapshot, _handle) {
        /** @type {?} */
        var url = this.getUrl(_snapshot);
        /** @type {?} */
        var idx = this.index(url);
        /** @type {?} */
        var item = {
            title: this.getTitle(url, _snapshot),
            closable: this.getClosable(url, _snapshot),
            position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
            url: url,
            _snapshot: _snapshot,
            _handle: _handle,
        };
        if (idx === -1) {
            if (this.count >= this._max) {
                // Get the oldest closable location
                /** @type {?} */
                var closeIdx = this._cached.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return (/** @type {?} */ (w.closable)); }));
                if (closeIdx !== -1)
                    this.remove(closeIdx, false);
            }
            this._cached.push(item);
        }
        else {
            this._cached[idx] = item;
        }
        this.removeUrlBuffer = null;
        this.di('#store', idx === -1 ? '[new]' : '[override]', url);
        if (_handle && _handle.componentRef) {
            this.runHook('_onReuseDestroy', url, _handle.componentRef);
        }
        this._cachedChange.next({ active: 'add', item: item, list: this._cached });
    };
    /**
     * 决定是否允许应用缓存数据
     */
    /**
     * 决定是否允许应用缓存数据
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.shouldAttach = /**
     * 决定是否允许应用缓存数据
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (this.hasInValidRoute(route))
            return false;
        /** @type {?} */
        var url = this.getUrl(route);
        /** @type {?} */
        var data = this.get(url);
        /** @type {?} */
        var ret = !!(data && data._handle);
        this.di('#shouldAttach', ret, url);
        if (ret && (/** @type {?} */ (data))._handle.componentRef) {
            this.runHook('_onReuseInit', url, (/** @type {?} */ (data))._handle.componentRef);
        }
        return ret;
    };
    /**
     * 提取复用数据
     */
    /**
     * 提取复用数据
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.retrieve = /**
     * 提取复用数据
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (this.hasInValidRoute(route))
            return null;
        /** @type {?} */
        var url = this.getUrl(route);
        /** @type {?} */
        var data = this.get(url);
        /** @type {?} */
        var ret = (data && data._handle) || null;
        this.di('#retrieve', url, ret);
        return ret;
    };
    /**
     * 决定是否应该进行复用路由处理
     */
    /**
     * 决定是否应该进行复用路由处理
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    ReuseTabService.prototype.shouldReuseRoute = /**
     * 决定是否应该进行复用路由处理
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        /** @type {?} */
        var ret = future.routeConfig === curr.routeConfig;
        if (!ret)
            return false;
        /** @type {?} */
        var path = (/** @type {?} */ (((future.routeConfig && future.routeConfig.path) || '')));
        if (path.length > 0 && ~path.indexOf(':')) {
            /** @type {?} */
            var futureUrl = this.getUrl(future);
            /** @type {?} */
            var currUrl = this.getUrl(curr);
            ret = futureUrl === currUrl;
        }
        this.di('=====================');
        this.di('#shouldReuseRoute', ret, this.getUrl(curr) + "=>" + this.getUrl(future), future, curr);
        return ret;
    };
    // #region scroll
    /**
     * 获取 `keepingScroll` 状态，顺序如下：
     *
     * 1. 路由配置中 data 属性中包含 `keepingScroll`
     * 2. 菜单数据中 `keepingScroll` 属性
     * 3. 组件 `keepingScroll` 值
     */
    // #region scroll
    /**
     * 获取 `keepingScroll` 状态，顺序如下：
     *
     * 1. 路由配置中 data 属性中包含 `keepingScroll`
     * 2. 菜单数据中 `keepingScroll` 属性
     * 3. 组件 `keepingScroll` 值
     * @param {?} url
     * @param {?=} route
     * @return {?}
     */
    ReuseTabService.prototype.getKeepingScroll = 
    // #region scroll
    /**
     * 获取 `keepingScroll` 状态，顺序如下：
     *
     * 1. 路由配置中 data 属性中包含 `keepingScroll`
     * 2. 菜单数据中 `keepingScroll` 属性
     * 3. 组件 `keepingScroll` 值
     * @param {?} url
     * @param {?=} route
     * @return {?}
     */
    function (url, route) {
        if (route && route.data && typeof route.data.keepingScroll === 'boolean')
            return route.data.keepingScroll;
        /** @type {?} */
        var menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.keepingScroll === 'boolean')
            return menu.keepingScroll;
        return this.keepingScroll;
    };
    Object.defineProperty(ReuseTabService.prototype, "isDisabledInRouter", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var routerConfig = this.injector.get(ROUTER_CONFIGURATION, (/** @type {?} */ ({})));
            return routerConfig.scrollPositionRestoration === 'disabled';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "ss", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.injector.get(ScrollService);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ReuseTabService.prototype.initScroll = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._router$) {
            this._router$.unsubscribe();
        }
        this._router$ = this.injector.get(Router).events.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e instanceof NavigationStart) {
                /** @type {?} */
                var url = _this.curUrl;
                if (_this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                    _this.positionBuffer[url] = _this.ss.getScrollPosition(_this.keepingScrollContainer);
                }
                else {
                    delete _this.positionBuffer[url];
                }
            }
            else if (e instanceof NavigationEnd) {
                /** @type {?} */
                var url = _this.curUrl;
                /** @type {?} */
                var item_1 = _this.get(url);
                if (item_1 && item_1.position && _this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                    if (_this.isDisabledInRouter) {
                        _this.ss.scrollToPosition(_this.keepingScrollContainer, item_1.position);
                    }
                    else {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () { return _this.ss.scrollToPosition(_this.keepingScrollContainer, (/** @type {?} */ (item_1.position))); }), 1);
                    }
                }
            }
        }));
    };
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    ReuseTabService.prototype.ngOnDestroy = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        var _a = this, _cachedChange = _a._cachedChange, _router$ = _a._router$;
        this.clear();
        this._cached = [];
        _cachedChange.complete();
        if (_router$) {
            _router$.unsubscribe();
        }
    };
    ReuseTabService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ReuseTabService.ctorParameters = function () { return [
        { type: Injector },
        { type: MenuService }
    ]; };
    /** @nocollapse */ ReuseTabService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(ɵɵinject(INJECTOR), ɵɵinject(MenuService)); }, token: ReuseTabService, providedIn: "root" });
    return ReuseTabService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._inited;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._max;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._keepingScroll;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._cachedChange;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._cached;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._titleCached;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._closableCached;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._router$;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype.removeUrlBuffer;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype.positionBuffer;
    /** @type {?} */
    ReuseTabService.prototype.debug;
    /** @type {?} */
    ReuseTabService.prototype.mode;
    /**
     * 排除规则，限 `mode=URL`
     * @type {?}
     */
    ReuseTabService.prototype.excludes;
    /** @type {?} */
    ReuseTabService.prototype.keepingScrollContainer;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype.menuService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReuseTabComponent = /** @class */ (function () {
    // #endregion
    function ReuseTabComponent(el, srv, cdr, router, route, render, i18nSrv, doc) {
        this.srv = srv;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.render = render;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.list = [];
        this.pos = 0;
        // #region fields
        this.mode = ReuseTabMatchMode.Menu;
        this.debug = false;
        this.allowClose = true;
        this.showCurrent = true;
        this.keepingScroll = false;
        this.customContextMenu = [];
        this.change = new EventEmitter();
        this.close = new EventEmitter();
        this.el = el.nativeElement;
    }
    Object.defineProperty(ReuseTabComponent.prototype, "keepingScrollContainer", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} title
     * @return {?}
     */
    ReuseTabComponent.prototype.genTit = /**
     * @private
     * @param {?} title
     * @return {?}
     */
    function (title) {
        return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : title.text;
    };
    /**
     * @private
     * @param {?=} notify
     * @return {?}
     */
    ReuseTabComponent.prototype.genList = /**
     * @private
     * @param {?=} notify
     * @return {?}
     */
    function (notify) {
        var _this = this;
        /** @type {?} */
        var isClosed = notify && notify.active === 'close';
        /** @type {?} */
        var beforeClosePos = isClosed ? this.list.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === (/** @type {?} */ (notify)).url; })) : -1;
        /** @type {?} */
        var ls = this.srv.items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            return (/** @type {?} */ ({
                url: item.url,
                title: _this.genTit(item.title),
                closable: _this.allowClose && item.closable && _this.srv.count > 0,
                index: index,
                active: false,
                last: false,
            }));
        }));
        if (this.showCurrent) {
            /** @type {?} */
            var snapshot = this.route.snapshot;
            /** @type {?} */
            var url_1 = this.srv.getUrl(snapshot);
            /** @type {?} */
            var idx = ls.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.url === url_1; }));
            // jump directly when the current exists in the list
            // or create a new current item and jump
            if (idx !== -1 || (isClosed && (/** @type {?} */ (notify)).url === url_1)) {
                this.pos = isClosed ? (idx >= beforeClosePos ? this.pos - 1 : this.pos) : idx;
            }
            else {
                /** @type {?} */
                var snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push((/** @type {?} */ ({
                    url: url_1,
                    title: this.genTit(this.srv.getTitle(url_1, snapshotTrue)),
                    closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url_1, snapshotTrue),
                    index: ls.length,
                    active: false,
                    last: false,
                })));
                this.pos = ls.length - 1;
            }
            // fix unabled close last item
            if (ls.length <= 1)
                ls[0].closable = false;
        }
        this.list = ls;
        if (ls.length && isClosed) {
            this.to(null, this.pos);
        }
        this.refStatus(false);
        this.visibility();
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    ReuseTabComponent.prototype.visibility = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
    };
    Object.defineProperty(ReuseTabComponent.prototype, "acitveIndex", {
        // #region UI
        get: 
        // #region UI
        /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.list.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.active; })))).index;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} res
     * @return {?}
     */
    ReuseTabComponent.prototype.cmChange = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        var _this = this;
        /** @type {?} */
        var fn = null;
        switch (res.type) {
            case 'close':
                this._close(null, res.item.index, res.includeNonCloseable);
                break;
            case 'closeRight':
                fn = (/**
                 * @return {?}
                 */
                function () {
                    _this.srv.closeRight(res.item.url, res.includeNonCloseable);
                    _this.close.emit(null);
                });
                break;
            case 'clear':
            case 'closeOther':
                fn = (/**
                 * @return {?}
                 */
                function () {
                    _this.srv.clear(res.includeNonCloseable);
                    _this.close.emit(null);
                });
                break;
        }
        if (!fn) {
            return;
        }
        if (!res.item.active && res.item.index <= this.acitveIndex) {
            this.to(null, res.item.index, fn);
        }
        else {
            fn();
        }
    };
    /**
     * @param {?=} dc
     * @return {?}
     */
    ReuseTabComponent.prototype.refStatus = /**
     * @param {?=} dc
     * @return {?}
     */
    function (dc) {
        var _this = this;
        if (dc === void 0) { dc = true; }
        if (this.list.length) {
            this.list[this.list.length - 1].last = true;
            this.list.forEach((/**
             * @param {?} i
             * @param {?} idx
             * @return {?}
             */
            function (i, idx) { return (i.active = _this.pos === idx); }));
        }
        if (dc)
            this.cdr.detectChanges();
    };
    /**
     * @param {?} e
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    ReuseTabComponent.prototype.to = /**
     * @param {?} e
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    function (e, index, cb) {
        var _this = this;
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        index = Math.max(0, Math.min(index, this.list.length - 1));
        /** @type {?} */
        var item = this.list[index];
        this.router.navigateByUrl(item.url).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!res)
                return;
            _this.pos = index;
            _this.item = item;
            _this.refStatus();
            _this.change.emit(item);
            if (cb) {
                cb();
            }
        }));
    };
    /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    ReuseTabComponent.prototype._close = /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    function (e, idx, includeNonCloseable) {
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        /** @type {?} */
        var item = this.list[idx];
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cdr.detectChanges();
        return false;
    };
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnInit = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.router.events
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) { return evt instanceof NavigationEnd; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.genList(); }));
        this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.genList((/** @type {?} */ (res))); }));
        this.i18nSrv.change
            .pipe(filter((/**
         * @return {?}
         */
        function () { return _this.srv.inited; })), takeUntil(this.unsubscribe$), debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.genList(); }));
        this.genList();
        this.srv.init();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.max)
            this.srv.max = this.max;
        if (changes.excludes)
            this.srv.excludes = this.excludes;
        if (changes.mode)
            this.srv.mode = this.mode;
        if (changes.keepingScroll) {
            this.srv.keepingScroll = this.keepingScroll;
            this.srv.keepingScrollContainer = this._keepingScrollContainer;
        }
        this.srv.debug = this.debug;
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    ReuseTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab',
                    exportAs: 'reuseTab',
                    template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" (click)=\"to($event, index)\" class=\"reuse-tab__name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
                    host: {
                        '[class.reuse-tab]': 'true',
                    },
                    providers: [ReuseTabContextService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    ReuseTabComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ReuseTabService },
        { type: ChangeDetectorRef },
        { type: Router },
        { type: ActivatedRoute },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PIXELMON_I18N_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ReuseTabComponent.propDecorators = {
        mode: [{ type: Input }],
        i18n: [{ type: Input }],
        debug: [{ type: Input }],
        max: [{ type: Input }],
        excludes: [{ type: Input }],
        allowClose: [{ type: Input }],
        showCurrent: [{ type: Input }],
        keepingScroll: [{ type: Input }],
        keepingScrollContainer: [{ type: Input }],
        customContextMenu: [{ type: Input }],
        tabBarExtraContent: [{ type: Input }],
        tabBarGutter: [{ type: Input }],
        tabBarStyle: [{ type: Input }],
        change: [{ type: Output }],
        close: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "debug", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], ReuseTabComponent.prototype, "max", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "allowClose", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "showCurrent", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "keepingScroll", void 0);
    return ReuseTabComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype._keepingScrollContainer;
    /** @type {?} */
    ReuseTabComponent.prototype.list;
    /** @type {?} */
    ReuseTabComponent.prototype.item;
    /** @type {?} */
    ReuseTabComponent.prototype.pos;
    /** @type {?} */
    ReuseTabComponent.prototype.mode;
    /** @type {?} */
    ReuseTabComponent.prototype.i18n;
    /** @type {?} */
    ReuseTabComponent.prototype.debug;
    /** @type {?} */
    ReuseTabComponent.prototype.max;
    /** @type {?} */
    ReuseTabComponent.prototype.excludes;
    /** @type {?} */
    ReuseTabComponent.prototype.allowClose;
    /** @type {?} */
    ReuseTabComponent.prototype.showCurrent;
    /** @type {?} */
    ReuseTabComponent.prototype.keepingScroll;
    /** @type {?} */
    ReuseTabComponent.prototype.customContextMenu;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarExtraContent;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarGutter;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarStyle;
    /** @type {?} */
    ReuseTabComponent.prototype.change;
    /** @type {?} */
    ReuseTabComponent.prototype.close;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.render;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReuseTabStrategy = /** @class */ (function () {
    function ReuseTabStrategy(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldDetach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.shouldDetach(route);
    };
    /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    ReuseTabStrategy.prototype.store = /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    function (route, handle) {
        this.srv.store(route, handle);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldAttach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.shouldAttach(route);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.retrieve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.retrieve(route);
    };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldReuseRoute = /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        return this.srv.shouldReuseRoute(future, curr);
    };
    return ReuseTabStrategy;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabStrategy.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS$2 = [ReuseTabComponent];
/** @type {?} */
var NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];
var ReuseTabModule = /** @class */ (function () {
    function ReuseTabModule() {
    }
    ReuseTabModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, PixelmonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule],
                    declarations: __spread(COMPONENTS$2, NOEXPORTS),
                    entryComponents: [ReuseTabContextMenuComponent],
                    exports: __spread(COMPONENTS$2),
                },] }
    ];
    return ReuseTabModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
var FLOATINGCLS = 'sidebar-nav__floating';
var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(menuSrv, settings, router, render, cdr, ngZone, doc, win) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.doc = doc;
        this.win = win;
        this.unsubscribe$ = new Subject();
        this.list = [];
        this.disabledAcl = false;
        this.autoCloseUnderPad = true;
        this.recursivePath = true;
        this.openStrictly = false;
        this.select = new EventEmitter();
    }
    Object.defineProperty(SidebarNavComponent.prototype, "collapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.settings.layout.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarNavComponent.prototype, "_d", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.menuSrv.menus;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SidebarNavComponent.prototype.floatingAreaClickHandle = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        /** @type {?} */
        var linkNode = (/** @type {?} */ (e.target));
        if (linkNode.nodeName !== 'A') {
            return false;
        }
        /** @type {?} */
        var id = +(/** @type {?} */ ((/** @type {?} */ (linkNode.dataset)).id));
        /** @type {?} */
        var item;
        this.menuSrv.visit(this._d, (/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (!item && i.__id === id) {
                item = i;
            }
        }));
        this.to((/** @type {?} */ (item)));
        this.hideAll();
        e.preventDefault();
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    SidebarNavComponent.prototype.clearFloatingContainer = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.floatingEl)
            return;
        this.floatingEl.removeEventListener('click', this.floatingAreaClickHandle.bind(this));
        // fix ie: https://github.com/1ziton/pixelmon/issues/52
        if (this.floatingEl.hasOwnProperty('remove')) {
            this.floatingEl.remove();
        }
        else if (this.floatingEl.parentNode) {
            this.floatingEl.parentNode.removeChild(this.floatingEl);
        }
    };
    /**
     * @private
     * @return {?}
     */
    SidebarNavComponent.prototype.genFloatingContainer = /**
     * @private
     * @return {?}
     */
    function () {
        this.clearFloatingContainer();
        this.floatingEl = this.render.createElement('div');
        this.floatingEl.classList.add(FLOATINGCLS + '-container');
        this.floatingEl.addEventListener('click', this.floatingAreaClickHandle.bind(this), false);
        this.bodyEl.appendChild(this.floatingEl);
    };
    /**
     * @private
     * @param {?} linkNode
     * @param {?} item
     * @return {?}
     */
    SidebarNavComponent.prototype.genSubNode = /**
     * @private
     * @param {?} linkNode
     * @param {?} item
     * @return {?}
     */
    function (linkNode, item) {
        /** @type {?} */
        var id = "_sidebar-nav-" + item.__id;
        /** @type {?} */
        var node = (/** @type {?} */ ((/** @type {?} */ (linkNode.nextElementSibling)).cloneNode(true)));
        node.id = id;
        node.classList.add(FLOATINGCLS);
        node.addEventListener('mouseleave', (/**
         * @return {?}
         */
        function () {
            node.classList.remove(SHOWCLS);
        }), false);
        this.floatingEl.appendChild(node);
        return node;
    };
    /**
     * @private
     * @return {?}
     */
    SidebarNavComponent.prototype.hideAll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < allNode.length; i++) {
            allNode[i].classList.remove(SHOWCLS);
        }
    };
    // calculate the node position values.
    // calculate the node position values.
    /**
     * @private
     * @param {?} linkNode
     * @param {?} node
     * @return {?}
     */
    SidebarNavComponent.prototype.calPos = 
    // calculate the node position values.
    /**
     * @private
     * @param {?} linkNode
     * @param {?} node
     * @return {?}
     */
    function (linkNode, node) {
        /** @type {?} */
        var rect = linkNode.getBoundingClientRect();
        // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
        /** @type {?} */
        var scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
        /** @type {?} */
        var docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
        /** @type {?} */
        var offsetHeight = 0;
        if (docHeight < rect.top + node.clientHeight) {
            offsetHeight = rect.top + node.clientHeight - docHeight;
        }
        node.style.top = rect.top + scrollTop - offsetHeight + "px";
        node.style.left = rect.right + 5 + "px";
    };
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    SidebarNavComponent.prototype.showSubMenu = /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    function (e, item) {
        var _this = this;
        if (this.collapsed !== true) {
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            e.preventDefault();
            /** @type {?} */
            var linkNode = (/** @type {?} */ (e.target));
            _this.genFloatingContainer();
            /** @type {?} */
            var subNode = _this.genSubNode((/** @type {?} */ (linkNode)), item);
            _this.hideAll();
            subNode.classList.add(SHOWCLS);
            _this.calPos((/** @type {?} */ (linkNode)), subNode);
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SidebarNavComponent.prototype.to = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        this.select.emit(item);
        if (item.disabled)
            return;
        if (item.externalLink) {
            if (item.target === '_blank') {
                this.win.open(item.externalLink);
            }
            else {
                this.win.location.href = item.externalLink;
            }
            return false;
        }
        this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.router.navigateByUrl((/** @type {?} */ (item.link))); }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SidebarNavComponent.prototype.toggleOpen = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this.openStrictly) {
            this.menuSrv.visit(this._d, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                if (i !== item)
                    i._open = false;
            }));
            /** @type {?} */
            var pItem = item.__parent;
            while (pItem) {
                pItem._open = true;
                pItem = pItem.__parent;
            }
        }
        item._open = !item._open;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    SidebarNavComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        if (this.isPad && this.collapsed) {
            this.openAside(false);
            this.hideAll();
        }
    };
    /**
     * @return {?}
     */
    SidebarNavComponent.prototype._docClick = /**
     * @return {?}
     */
    function () {
        this.hideAll();
    };
    /**
     * @return {?}
     */
    SidebarNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, doc = _a.doc, router = _a.router, unsubscribe$ = _a.unsubscribe$, menuSrv = _a.menuSrv, cdr = _a.cdr;
        this.bodyEl = doc.querySelector('body');
        menuSrv.openedByUrl(router.url, this.recursivePath);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.genFloatingContainer(); }));
        menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            menuSrv.visit(data, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                if (!i._aclResult) {
                    if (_this.disabledAcl) {
                        i.disabled = true;
                    }
                    else {
                        i._hidden = true;
                    }
                }
                if (_this.openStrictly) {
                    i._open = i.open != null ? i.open : false;
                }
            }));
            _this.list = menuSrv.menus;
            cdr.detectChanges();
        }));
        router.events.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e instanceof NavigationEnd) {
                _this.menuSrv.openedByUrl(e.urlAfterRedirects, _this.recursivePath);
                _this.underPad();
                _this.cdr.detectChanges();
            }
        }));
        this.underPad();
    };
    /**
     * @return {?}
     */
    SidebarNavComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
        this.clearFloatingContainer();
    };
    Object.defineProperty(SidebarNavComponent.prototype, "isPad", {
        // #region Under pad
        get: 
        // #region Under pad
        /**
         * @private
         * @return {?}
         */
        function () {
            return window.innerWidth < 768;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SidebarNavComponent.prototype.underPad = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.openAside(true); }));
        }
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    SidebarNavComponent.prototype.openAside = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.settings.setLayout('collapsed', status);
    };
    SidebarNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sidebar-nav',
                    exportAs: 'sidebarNav',
                    template: "<ng-template #icon\n             let-i>\n  <ng-container *ngIf=\"i\"\n                [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\"\n       class=\"sidebar-nav__item-icon\"\n       nz-icon\n       [nzType]=\"i.value\"\n       [nzTheme]=\"i.theme\"\n       [nzSpin]=\"i.spin\"\n       [nzTwotoneColor]=\"i.twoToneColor\"\n       [nzIconfont]=\"i.iconfont\"></i>\n    <i *ngSwitchCase=\"'iconfont'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\"\n         src=\"{{ i.value }}\"\n         class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault\n       class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\"\n          *ngIf=\"group.group\">\n        <span>{{ group.text }}</span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\"\n            class=\"sidebar-nav__item\"\n            [class.sidebar-nav__selected]=\"child1._selected\"\n            [class.sidebar-nav__open]=\"child1._open\">\n          <!-- link -->\n          <a *ngIf=\"child1._type <= 2\"\n             (click)=\"to(child1)\"\n             [attr.data-id]=\"child1.__id\"\n             class=\"sidebar-nav__item-link\"\n             [ngClass]=\"{'sidebar-nav__item-disabled': child1.disabled}\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\"\n                           [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\"\n                        nzPlacement=\"right\"\n                        [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\"\n                             [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- has children link -->\n          <a *ngIf=\"child1._type === 3\"\n             (click)=\"toggleOpen(child1)\"\n             (mouseenter)=\"showSubMenu($event, child1)\"\n             class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\"\n                         [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n          <!-- badge -->\n          <div *ngIf=\"child1.badge\"\n               title=\"{{child1.badge}}\"\n               class=\"badge badge-{{child1.badgeStatus}}\"\n               [class.badge-dot]=\"child1.badgeDot\">\n            <em>{{child1.badge}}</em>\n          </div>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\"\n              class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\"\n                  class=\"sidebar-nav__item\"\n                  [class.sidebar-nav__selected]=\"child2._selected\"\n                  [class.sidebar-nav__open]=\"child2._open\">\n                <!-- link -->\n                <a *ngIf=\"child2._type <= 2\"\n                   (click)=\"to(child2)\"\n                   [attr.data-id]=\"child2.__id\"\n                   class=\"sidebar-nav__item-link\"\n                   [ngClass]=\"{'sidebar-nav__item-disabled': child2.disabled}\">{{\n                  child2.text }}</a>\n                <!-- has children link -->\n                <a *ngIf=\"child2._type === 3\"\n                   (click)=\"toggleOpen(child2)\"\n                   class=\"sidebar-nav__item-link\">\n                  {{ child2.text }}\n                  <i class=\"sidebar-nav__sub-arrow\"></i>\n                </a>\n                <!-- badge -->\n                <div *ngIf=\"child2.badge\"\n                     title=\"{{child2.badge}}\"\n                     class=\"badge badge-{{child2.badgeStatus}}\"\n                     [class.badge-dot]=\"child2.badgeDot\">\n                  <em>{{child2.badge}}</em>\n                </div>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\"\n                    class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\"\n                        class=\"sidebar-nav__item\"\n                        [class.sidebar-nav__selected]=\"child3._selected\"\n                        [class.sidebar-nav__open]=\"child3._open\">\n                      <!-- link -->\n                      <a *ngIf=\"child3._type <= 2\"\n                         (click)=\"to(child3)\"\n                         [attr.data-id]=\"child3.__id\"\n                         class=\"sidebar-nav__item-link\"\n                         [ngClass]=\"{'sidebar-nav__item-disabled': child3.disabled}\">{{ child3.text }}</a>\n                      <!-- external link -->\n                      <a *ngIf=\"child3._type === 2\"\n                         href=\"{{ child3.externalLink }}\"\n                         target=\"{{ child3.target }}\"\n                         data-type=\"external\"\n                         class=\"sidebar-nav__item-link\">{{ child3.text }}</a>\n                      <!-- badge -->\n                      <div *ngIf=\"child3.badge\"\n                           title=\"{{child3.badge}}\"\n                           class=\"badge badge-{{child3.badgeStatus}}\"\n                           [class.badge-dot]=\"child3.badgeDot\">\n                        <em>{{child3.badge}}</em>\n                      </div>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
                    host: {
                        '(click)': '_click()',
                        '(document:click)': '_docClick()',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SidebarNavComponent.ctorParameters = function () { return [
        { type: MenuService },
        { type: SettingsService },
        { type: Router },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    SidebarNavComponent.propDecorators = {
        disabledAcl: [{ type: Input }],
        autoCloseUnderPad: [{ type: Input }],
        recursivePath: [{ type: Input }],
        openStrictly: [{ type: Input }],
        select: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "disabledAcl", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "recursivePath", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "openStrictly", void 0);
    return SidebarNavComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.bodyEl;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.floatingEl;
    /** @type {?} */
    SidebarNavComponent.prototype.list;
    /** @type {?} */
    SidebarNavComponent.prototype.disabledAcl;
    /** @type {?} */
    SidebarNavComponent.prototype.autoCloseUnderPad;
    /** @type {?} */
    SidebarNavComponent.prototype.recursivePath;
    /** @type {?} */
    SidebarNavComponent.prototype.openStrictly;
    /** @type {?} */
    SidebarNavComponent.prototype.select;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.menuSrv;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.render;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.win;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SidebarNavModule = /** @class */ (function () {
    function SidebarNavModule() {
    }
    SidebarNavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, NzIconModule, NzToolTipModule, PixelmonUtilModule],
                    declarations: [SidebarNavComponent],
                    exports: [SidebarNavComponent],
                },] }
    ];
    return SidebarNavModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ SVConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function SVConfig_Factory() { return new SVConfig(); }, token: SVConfig, providedIn: "root" });
    return SVConfig;
}());
if (false) {
    /**
     * 大小
     * @type {?}
     */
    SVConfig.prototype.size;
    /**
     * 间距，默认：`32`
     * @type {?}
     */
    SVConfig.prototype.gutter;
    /**
     * 布局，默认：`horizontal`
     * @type {?}
     */
    SVConfig.prototype.layout;
    /**
     * 列数，默认：`3`
     * @type {?}
     */
    SVConfig.prototype.col;
    /**
     * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
     * @type {?}
     */
    SVConfig.prototype.default;
    /**
     * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
     * @type {?}
     */
    SVConfig.prototype.labelWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        updateHostClass(el, ren, (_a = {},
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
        { type: Component, args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: "<div class=\"ant-row\"\n     [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SVContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: SVConfig }
    ]; };
    SVContainerComponent.propDecorators = {
        title: [{ type: Input }],
        size: [{ type: Input }],
        gutter: [{ type: Input }],
        layout: [{ type: Input }],
        labelWidth: [{ type: Input }],
        col: [{ type: Input }],
        default: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "gutter", void 0);
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "labelWidth", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "col", void 0);
    return SVContainerComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SVContainerComponent.prototype.el;
    /** @type {?} */
    SVContainerComponent.prototype.title;
    /** @type {?} */
    SVContainerComponent.prototype.size;
    /**
     * 列表项间距，单位为 `px`
     * @type {?}
     */
    SVContainerComponent.prototype.gutter;
    /** @type {?} */
    SVContainerComponent.prototype.layout;
    /** @type {?} */
    SVContainerComponent.prototype.labelWidth;
    /**
     * 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定
     * @type {?}
     */
    SVContainerComponent.prototype.col;
    /** @type {?} */
    SVContainerComponent.prototype.default;
    /**
     * @type {?}
     * @private
     */
    SVContainerComponent.prototype.ren;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'sv-title, [sv-title]',
                    exportAs: 'svTitle',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.sv__title]': 'true',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SVTitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: Renderer2 }
    ]; };
    return SVTitleComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SVTitleComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SVTitleComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    SVTitleComponent.prototype.ren;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    };
    SVComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv, [sv]',
                    exportAs: 'sv',
                    template: "<div class=\"sv__label\"\n     [class.sv__label-empty]=\"!label\"\n     [style.width.px]=\"parent.labelWidth\">\n  <ng-container *stringTemplateOutlet=\"label\">{{label}}</ng-container>\n  <span class=\"sv__label-optional\">\n    {{ optional }}\n    <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\n      <i nz-tooltip nz-icon nzType=\"question-circle\"></i>\n    </nz-tooltip>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\"\n        #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *stringTemplateOutlet=\"unit\">{{unit}}</span>\n  </ng-container>\n</div>\n",
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SVComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ResponsiveService },
        { type: Renderer2 }
    ]; };
    SVComponent.propDecorators = {
        conEl: [{ type: ViewChild, args: ['conEl', { static: false },] }],
        optional: [{ type: Input }],
        optionalHelp: [{ type: Input }],
        label: [{ type: Input }],
        unit: [{ type: Input }],
        col: [{ type: Input }],
        default: [{ type: Input }],
        type: [{ type: Input }]
    };
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SVComponent.prototype, "col", void 0);
    __decorate([
        InputBoolean(null),
        __metadata("design:type", Boolean)
    ], SVComponent.prototype, "default", void 0);
    return SVComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.conEl;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.clsMap;
    /** @type {?} */
    SVComponent.prototype.optional;
    /** @type {?} */
    SVComponent.prototype.optionalHelp;
    /** @type {?} */
    SVComponent.prototype.label;
    /** @type {?} */
    SVComponent.prototype.unit;
    /** @type {?} */
    SVComponent.prototype.col;
    /** @type {?} */
    SVComponent.prototype.default;
    /** @type {?} */
    SVComponent.prototype.type;
    /** @type {?} */
    SVComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.rep;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.ren;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS$3 = [SVContainerComponent, SVComponent, SVTitleComponent];
var SVModule = /** @class */ (function () {
    function SVModule() {
    }
    SVModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ObserversModule, PixelmonUtilModule, NzToolTipModule, NzIconModule],
                    declarations: __spread(COMPONENTS$3),
                    exports: __spread(COMPONENTS$3),
                },] }
    ];
    return SVModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QueryTabsComponent = /** @class */ (function () {
    function QueryTabsComponent() {
        this.tabs = [];
        this.lexicon = []; // 词典
        // 词典
        this.tabsChange = new EventEmitter();
        this.queryChange = new EventEmitter();
        this.closeTab = new EventEmitter();
        // 过滤规则
        this.filterRule = (/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            /** @type {?} */
            var searchValue = tab.searchValue;
            // 有默认值且搜索值和默认值相等
            if (tab.hasOwnProperty('defaultValue') && searchValue === tab.defaultValue) {
                return false;
            }
            // 非法基础数据类型
            if ([undefined, null, ''].includes(searchValue)) {
                return false;
            }
            // 空数组
            if (Array.isArray(searchValue) && !searchValue.length) {
                return false;
            }
            // 通过校验，返回true
            return true;
        });
    }
    /**
     * @return {?}
     */
    QueryTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    QueryTabsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.columns) {
            this.updateQuery();
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    QueryTabsComponent.prototype.onClose = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        // 有默认值恢复默认值，没有则置为null
        tab.searchValue = tab.hasOwnProperty('defaultValue') ? tab.defaultValue : null;
        this.closeTab.emit(tab);
        this.tabs = __spread(this.tabs);
        this.tabsChange.emit(this.tabs);
    };
    // 组件内更新查询值
    // 组件内更新查询值
    /**
     * @return {?}
     */
    QueryTabsComponent.prototype.updateQuery = 
    // 组件内更新查询值
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var query = {};
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            if (tab.showFilter) {
                query[tab.field] = tab.searchValue;
            }
        }));
        this.queryChange.emit(query);
    };
    QueryTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-queryTabs',
                    template: "<nz-tabset nzType=\"card\">\n  <ng-container *ngFor=\"let tab of tabs | filter: filterRule\">\n    <nz-tab [nzTitle]=\"titleTemplate\">\n      <ng-template #titleTemplate>\n        <div class=\"flex\">\n          <span class=\"label\">{{ tab.title + '\uFF1A' }}</span>\n          <ng-container *ngIf=\"(tab.searchValue | translate: tab.lexicon || lexicon)?.length > 10; else textTemplate\">\n            <div nz-popover nzTrigger=\"hover\" [nzContent]=\"textTemplate\" nzPlacement=\"bottom\">\n              <span class=\"value text-ellipsis\">\n                {{ tab.displayValue || tab.searchValue | translate: tab.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-container>\n\n          <ng-template #textTemplate>\n            <div>\n              <span class=\"value\">\n                {{ tab.displayValue || tab.searchValue | translate: tab.lexicon || lexicon }}\n              </span>\n            </div>\n          </ng-template>\n\n          <div>\n            <i nz-icon nzType=\"close\" class=\"ant-tabs-close-x\" (click)=\"onClose(tab)\"></i>\n          </div>\n        </div>\n      </ng-template>\n    </nz-tab>\n  </ng-container>\n</nz-tabset>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".text-ellipsis{display:inline-block;max-width:180px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:top}.flex{display:flex;align-items:center;justify-content:center}.label{color:#515151}.value{color:#1890ff}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar{margin:0 0 2px;border:none}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab{height:30px;margin:0 2px 0 0;padding:0 16px;line-height:28px;background:#fafafa;border:1px solid #e8e8e8!important;border-radius:4px;transition:.3s cubic-bezier(.645,.045,.355,1)}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-nav-container{height:31px}:host ::ng-deep .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab-active{font-weight:400}"]
                }] }
    ];
    /** @nocollapse */
    QueryTabsComponent.ctorParameters = function () { return []; };
    QueryTabsComponent.propDecorators = {
        tabs: [{ type: Input }],
        lexicon: [{ type: Input }],
        tabsChange: [{ type: Output }],
        queryChange: [{ type: Output }],
        closeTab: [{ type: Output }],
        filterRule: [{ type: Input }]
    };
    return QueryTabsComponent;
}());
if (false) {
    /** @type {?} */
    QueryTabsComponent.prototype.tabs;
    /** @type {?} */
    QueryTabsComponent.prototype.lexicon;
    /** @type {?} */
    QueryTabsComponent.prototype.tabsChange;
    /** @type {?} */
    QueryTabsComponent.prototype.queryChange;
    /** @type {?} */
    QueryTabsComponent.prototype.closeTab;
    /** @type {?} */
    QueryTabsComponent.prototype.filterRule;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QueryTabsModule = /** @class */ (function () {
    function QueryTabsModule() {
    }
    QueryTabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [QueryTabsComponent],
                    imports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule],
                    exports: [CommonModule, TranslatePipeModule, FilterPipeModule, NgZorroAntdModule, QueryTabsComponent],
                },] }
    ];
    return QueryTabsModule;
}());
/**
 * @record
 */
function QueryTab() { }
if (false) {
    /** @type {?} */
    QueryTab.prototype.title;
    /** @type {?} */
    QueryTab.prototype.field;
    /** @type {?|undefined} */
    QueryTab.prototype.showFilter;
    /** @type {?|undefined} */
    QueryTab.prototype.searchValue;
    /** @type {?|undefined} */
    QueryTab.prototype.defaultValue;
    /** @type {?|undefined} */
    QueryTab.prototype.displayValue;
    /** @type {?|undefined} */
    QueryTab.prototype.lexicon;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AdvancedCellComponent = /** @class */ (function () {
    function AdvancedCellComponent() {
        this.field = ''; // 对应域
    }
    /**
     * @return {?}
     */
    AdvancedCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    AdvancedCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-advancedCell',
                    template: '<ng-content> </ng-content>'
                }] }
    ];
    /** @nocollapse */
    AdvancedCellComponent.ctorParameters = function () { return []; };
    AdvancedCellComponent.propDecorators = {
        field: [{ type: Input }],
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return AdvancedCellComponent;
}());
if (false) {
    /** @type {?} */
    AdvancedCellComponent.prototype.field;
    /** @type {?} */
    AdvancedCellComponent.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AdvancedFilterComponent = /** @class */ (function () {
    function AdvancedFilterComponent() {
        this.field = ''; // 对应域
    }
    /**
     * @return {?}
     */
    AdvancedFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    AdvancedFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-advancedFilter',
                    template: '<ng-content> </ng-content>'
                }] }
    ];
    /** @nocollapse */
    AdvancedFilterComponent.ctorParameters = function () { return []; };
    AdvancedFilterComponent.propDecorators = {
        field: [{ type: Input }],
        templateRef: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return AdvancedFilterComponent;
}());
if (false) {
    /** @type {?} */
    AdvancedFilterComponent.prototype.field;
    /** @type {?} */
    AdvancedFilterComponent.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AdvancedTableComponent = /** @class */ (function () {
    function AdvancedTableComponent(_elementRef, _renderer2) {
        this._elementRef = _elementRef;
        this._renderer2 = _renderer2;
        this.columns = []; // 列数据
        // 列数据
        this.data = { data: [], totalSize: 0 }; // 表格数据
        // 表格数据
        this.selections = []; // 已选项
        // 固定表头，滚动
        this.loading = false; // 表格loading
        // 表格loading
        this.pageSize = 10; // 显示条数
        // 显示条数
        this.frontPagination = false; // 是否前端分页
        // 是否前端分页
        this.showPagination = true; // 是否显示分页器
        // 是否显示分页器
        this.fixedPagination = false; // 是否固定分页器
        // 是否固定分页器
        this.showSizeChanger = true; // 是否显示条数切换器
        // 是否显示条数切换器
        this.size = 'middle'; // 表格size
        // 表格size
        this.pageSizeOptions = [10, 30, 50, 100]; // 页数选择器可选值
        // 页数选择器可选值
        this.showCheckbox = false; // 是否显示复选框
        // title模板
        this.columnsChange = new EventEmitter(); // 列数据改变事件 用于双向绑定
        // 列数据改变事件 用于双向绑定
        this.selectionsChange = new EventEmitter(); // 已选项改变事件 用于双向绑定
        // 已选项改变事件 用于双向绑定
        this.load = new EventEmitter(); // load事件
        // load事件
        this.sort = new EventEmitter(); // 排序事件
        // 排序事件
        this.linkClick = new EventEmitter(); // 链接点击事件
        // 自定义搜索组件
        this.load$ = new Subject(); // load流
        // load流
        this.displayData = []; // 当前显示数据
        // 当前显示数据
        this.pageIndex = 1; // 当前页码
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.data) {
            // 重走sort
            if (this.sortParams && this.sortParams.key && this.sortParams.value) {
                this.onSort(this.sortParams);
            }
        }
        if (changes.columns) {
            // 是下拉选择的自动添加词典
            changes.columns.currentValue.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                if (column.showFilter && column.filterType === 'select' && Array.isArray(column.filterOptions)) {
                    column.lexicon = column.lexicon ? __spread(column.lexicon, column.filterOptions) : column.filterOptions;
                }
            }));
        }
        if (changes.selections) {
            this.updateCheckedBySelections();
        }
    };
    /**
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* tslint:disable */
        this.load$.pipe(debounceTime(20)).subscribe((/**
         * @return {?}
         */
        function () {
            // 清空selections
            _this.selections = [];
            _this.selectionsChange.emit(_this.selections);
            // 发出load事件
            _this.load.emit({ page: _this.pageIndex, size: _this.pageSize });
        }));
    };
    /**
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // 页面初始化完成后自动load一次
        this.load$.next();
        if (this.fixedPagination) {
            this.toFixedPagination();
        }
    };
    /**
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 赋值自定义单元格
        this.customCells.forEach((/**
         * @param {?} customCell
         * @return {?}
         */
        function (customCell) {
            /** @type {?} */
            var findedColumn = _this.columns.find((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.field === customCell.field; }));
            if (findedColumn)
                findedColumn.customCell = customCell.templateRef;
        }));
        // 赋值自定义搜索组件
        this.customFilters.forEach((/**
         * @param {?} customFilter
         * @return {?}
         */
        function (customFilter) {
            /** @type {?} */
            var findedColumn = _this.columns.find((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.field === customFilter.field; }));
            if (findedColumn) {
                findedColumn.showFilter = true;
                findedColumn.customFilter = customFilter.templateRef;
            }
        }));
    };
    /**
     * @return {?}
     */
    AdvancedTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // 不使用takeUntil是因为直接unsubscribe性能更好
        this.load$.unsubscribe();
    };
    /**
     * 表格当前显示数据改变回调
     * @param currentData 当前页显示数据
     */
    /**
     * 表格当前显示数据改变回调
     * @param {?} currentData 当前页显示数据
     * @return {?}
     */
    AdvancedTableComponent.prototype.currentPageDataChange = /**
     * 表格当前显示数据改变回调
     * @param {?} currentData 当前页显示数据
     * @return {?}
     */
    function (currentData) {
        this.displayData = currentData;
    };
    /**
     * 单选改变回调
     */
    /**
     * 单选改变回调
     * @return {?}
     */
    AdvancedTableComponent.prototype.singleCheckChange = /**
     * 单选改变回调
     * @return {?}
     */
    function () {
        this.updateSelectionsByChecked();
    };
    /**
     * 全选复选框改变回调
     * @param isChecked 是否全选
     */
    /**
     * 全选复选框改变回调
     * @param {?} isChecked 是否全选
     * @return {?}
     */
    AdvancedTableComponent.prototype.allCheckChange = /**
     * 全选复选框改变回调
     * @param {?} isChecked 是否全选
     * @return {?}
     */
    function (isChecked) {
        this.displayData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return (row.isChecked = isChecked); }));
        this.updateSelectionsByChecked();
    };
    /**
     * 根据checked更新selections
     */
    /**
     * 根据checked更新selections
     * @return {?}
     */
    AdvancedTableComponent.prototype.updateSelectionsByChecked = /**
     * 根据checked更新selections
     * @return {?}
     */
    function () {
        this.selections = this.displayData.filter((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return row.isChecked; }));
        this.selectionsChange.emit(this.selections);
    };
    /**
     * 根据selections更新checked
     */
    /**
     * 根据selections更新checked
     * @return {?}
     */
    AdvancedTableComponent.prototype.updateCheckedBySelections = /**
     * 根据selections更新checked
     * @return {?}
     */
    function () {
        var _this = this;
        this.displayData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return (row.isChecked = _this.selections.includes(row)); }));
    };
    /**
     * 页码改变回调
     */
    /**
     * 页码改变回调
     * @return {?}
     */
    AdvancedTableComponent.prototype.pageIndexChange = /**
     * 页码改变回调
     * @return {?}
     */
    function () {
        this.load$.next();
    };
    /**
     * 显示条数改变回调
     */
    /**
     * 显示条数改变回调
     * @return {?}
     */
    AdvancedTableComponent.prototype.pageSizeChange = /**
     * 显示条数改变回调
     * @return {?}
     */
    function () {
        // 显示条数改变时回到首页
        this.pageIndex = 1;
        this.load$.next();
    };
    /**
     * 排序改变
     * @param sortParams 排序参数
     */
    /**
     * 排序改变
     * @param {?} sortParams 排序参数
     * @return {?}
     */
    AdvancedTableComponent.prototype.onSort = /**
     * 排序改变
     * @param {?} sortParams 排序参数
     * @return {?}
     */
    function (sortParams) {
        // 保存排序参数，用于下次数据进来再进行排序
        this.sortParams = sortParams;
        // 查找正在排序的列
        /** @type {?} */
        var sortColumn = this.columns.find((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.field === sortParams.key; }));
        // 如果没有自定义排序，自动前端排序
        if (sortColumn && !sortColumn.customSort) {
            this.data.data.sort((/**
             * @param {?} previous
             * @param {?} further
             * @return {?}
             */
            function (previous, further) {
                return sortParams.value === 'descend'
                    ? further[sortParams.key] > previous[sortParams.key]
                        ? 1
                        : -1
                    : previous[sortParams.key] > further[sortParams.key]
                        ? 1
                        : -1;
            }));
            this.data.data = __spread(this.data.data);
        }
        this.sort.emit(sortParams);
    };
    /**
     * 日期改变回调
     * @param isOpen 是否打开
     * @param column 当前列模型数据
     */
    /**
     * 日期改变回调
     * @param {?} isOpen 是否打开
     * @param {?} column 当前列模型数据
     * @return {?}
     */
    AdvancedTableComponent.prototype.onRangePickerOpenChange = /**
     * 日期改变回调
     * @param {?} isOpen 是否打开
     * @param {?} column 当前列模型数据
     * @return {?}
     */
    function (isOpen, column) {
        if (isOpen === false) {
            /** @type {?} */
            var date = column.searchValue;
            if (date && Array.isArray(date) && date.length === 2) {
                column.searchValue = [formatDate(date[0], 'yyyy-MM-dd 00:00:00', 'zh_CN'), formatDate(date[1], 'yyyy-MM-dd 23:59:59', 'zh_CN')];
                column.displayValue = [formatDate(date[0], 'yyyy-MM-dd', 'zh_CN'), formatDate(date[1], 'yyyy-MM-dd', 'zh_CN')];
            }
        }
    };
    /**
     * 查询确认回调
     */
    /**
     * 查询确认回调
     * @param {?} dropdown
     * @return {?}
     */
    AdvancedTableComponent.prototype.onFilterConfim = /**
     * 查询确认回调
     * @param {?} dropdown
     * @return {?}
     */
    function (dropdown) {
        dropdown.setVisibleStateWhen(false);
        this.columns = __spread(this.columns);
        this.columnsChange.emit(this.columns);
    };
    /**
     * 固定分页
     */
    /**
     * 固定分页
     * @return {?}
     */
    AdvancedTableComponent.prototype.toFixedPagination = /**
     * 固定分页
     * @return {?}
     */
    function () {
        var _this = this;
        // 没有滚动条时和有滚动条时tableBody会不一样，故先给上滚动条
        this.scroll = { y: '0px' };
        // 等待滚动条更新
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var windowHeight = document.documentElement.clientHeight;
            /** @type {?} */
            var tableBody = _this._elementRef.nativeElement.querySelector('.ant-table-body');
            /** @type {?} */
            var pagination = _this._elementRef.nativeElement.querySelector('nz-pagination');
            /** @type {?} */
            var tableBodyTop = tableBody.getBoundingClientRect().top;
            /** @type {?} */
            var scrollHeight = windowHeight - tableBodyTop - pagination.clientHeight - 8 + 'px';
            _this.scroll = __assign({}, _this.scroll, { y: scrollHeight });
            _this._renderer2.setStyle(tableBody, 'height', scrollHeight);
        }));
    };
    /**
     * @param {?} field
     * @param {?} rowData
     * @return {?}
     */
    AdvancedTableComponent.prototype.onlinkClick = /**
     * @param {?} field
     * @param {?} rowData
     * @return {?}
     */
    function (field, rowData) {
        this.linkClick.emit({ field: field, rowData: rowData });
    };
    AdvancedTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'p-advancedTable',
                    template: "<nz-table\n  class=\"advanced-table\"\n  [nzData]=\"data?.data || []\"\n  [nzLoading]=\"loading\"\n  [nzTitle]=\"titleTemplate || null\"\n  [nzScroll]=\"scroll\"\n  [nzFrontPagination]=\"frontPagination\"\n  [nzSize]=\"size\"\n  [nzShowPagination]=\"showPagination\"\n  [(nzPageIndex)]=\"pageIndex\"\n  [(nzPageSize)]=\"pageSize\"\n  [nzShowSizeChanger]=\"showSizeChanger\"\n  [nzPageSizeOptions]=\"pageSizeOptions\"\n  [nzTotal]=\"data?.totalSize || 0\"\n  [nzShowTotal]=\"totalTemplate\"\n  (nzPageIndexChange)=\"pageIndexChange()\"\n  (nzPageSizeChange)=\"pageSizeChange()\"\n  (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n  [class.fixed-pagination]=\"fixedPagination\"\n>\n  <thead (nzSortChange)=\"onSort($event)\" nzSingleSort>\n    <tr>\n      <th\n        *ngIf=\"showCheckbox\"\n        nzLeft=\"0px\"\n        nzWidth=\"40px\"\n        nzShowCheckbox\n        [nzChecked]=\"selections.length > 0 && displayData.length === selections.length\"\n        [nzIndeterminate]=\"selections.length > 0 && displayData.length !== selections.length\"\n        (nzCheckedChange)=\"allCheckChange($event)\"\n      ></th>\n      <th\n        *ngFor=\"let column of columns\"\n        [nzLeft]=\"column.left\"\n        [nzRight]=\"column.right\"\n        [nzWidth]=\"column.width || '120px'\"\n        [nzShowSort]=\"column.showSort\"\n        [nzSortKey]=\"column.field\"\n        [nzCustomFilter]=\"column.showFilter\"\n      >\n        {{ column.title }}\n        <nz-dropdown *ngIf=\"column.showFilter\" nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter #dropdown>\n          <i nz-icon nzType=\"search\" class=\"ant-table-filter-icon\" [class.ant-table-filter-open]=\"dropdown.nzVisible\" nz-dropdown></i>\n          <div class=\"advanced-table-filter-panel\">\n            <!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u7EC4\u4EF6 -->\n            <ng-template [ngIf]=\"column.customFilter\" [ngIfElse]=\"defaultFilterTemplate\">\n              <ng-container [ngTemplateOutlet]=\"column.customFilter\" [ngTemplateOutletContext]=\"{ $implicit: column }\"></ng-container>\n            </ng-template>\n            <!-- \u9ED8\u8BA4\u641C\u7D22\u7EC4\u4EF6 -->\n            <ng-template #defaultFilterTemplate>\n              <ng-container [ngSwitch]=\"column.filterType\">\n                <!-- select -->\n                <ng-template ngSwitchCase=\"select\">\n                  <nz-select\n                    nzAllowClear\n                    nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n                    [(ngModel)]=\"column.searchValue\"\n                    [nzMode]=\"column.filterMultiple ? 'multiple' : 'default'\"\n                    [style.width]=\"column.filterWidth || '180px'\"\n                  >\n                    <nz-option\n                      *ngFor=\"let option of column.filterOptions || []\"\n                      [nzValue]=\"option.value\"\n                      [nzLabel]=\"option.label\"\n                    ></nz-option>\n                  </nz-select>\n                </ng-template>\n                <!-- range-picker -->\n                <ng-template ngSwitchCase=\"rangePicker\">\n                  <nz-range-picker\n                    nzAllowClear\n                    [(ngModel)]=\"column.searchValue\"\n                    [nzStyle]=\"{ width: column.filterWidth || '240px' }\"\n                    (nzOnOpenChange)=\"onRangePickerOpenChange($event, column)\"\n                  ></nz-range-picker>\n                </ng-template>\n                <!-- input -->\n                <ng-template ngSwitchDefault>\n                  <nz-input-group [nzSuffix]=\"suffixTemplate\">\n                    <input\n                      #input\n                      nz-input\n                      placeholder=\"\u8BF7\u8F93\u5165\"\n                      [(ngModel)]=\"column.searchValue\"\n                      [style.width]=\"column.filterWidth || '180px'\"\n                      (keydown.enter)=\"onFilterConfim(dropdown)\"\n                    />\n                  </nz-input-group>\n                  <ng-template #suffixTemplate>\n                    <i\n                      nz-icon\n                      nz-tooltip\n                      class=\"clear-icon\"\n                      nzTheme=\"fill\"\n                      nzType=\"close-circle\"\n                      *ngIf=\"column.searchValue\"\n                      (click)=\"column.searchValue = null; input.focus()\"\n                    ></i>\n                  </ng-template>\n                </ng-template>\n              </ng-container>\n            </ng-template>\n            <!-- \u6309\u94AE -->\n            <div nz-row nzType=\"flex\" nzJustify=\"end\" nzAlign=\"middle\" class=\"advanced-table-filter-button\">\n              <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"onFilterConfim(dropdown)\">\n                \u786E\u8BA4\n              </button>\n            </div>\n          </div>\n        </nz-dropdown>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let row of displayData\">\n      <tr>\n        <td *ngIf=\"showCheckbox\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"row.isChecked\" (nzCheckedChange)=\"singleCheckChange()\"></td>\n        <td [nzLeft]=\"column.left\" [nzRight]=\"column.right\" *ngFor=\"let column of columns\">\n          <!-- \u81EA\u5B9A\u4E49\u5355\u5143\u683C -->\n          <ng-template [ngIf]=\"column.customCell\" [ngIfElse]=\"defaultCellTemplate\">\n            <ng-container [ngTemplateOutlet]=\"column.customCell\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-container>\n          </ng-template>\n          <!-- \u9ED8\u8BA4\u5355\u5143\u683C -->\n          <ng-template #defaultCellTemplate>\n            <ng-container [ngSwitch]=\"column.type\">\n              <!-- link -->\n              <ng-template ngSwitchCase=\"link\">\n                <a (click)=\"onlinkClick(column['field'], row)\">\n                  <smart-text [text]=\"row[column['field']]\"></smart-text>\n                </a>\n              </ng-template>\n              <!-- thumbnail -->\n              <ng-template ngSwitchCase=\"thumbnail\">\n                <!-- \u65E0\u56FE\u7247\u4E0D\u521D\u59CB\u5316viewer -->\n                <div viewer [isLazyLoad]=\"true\" [maxShowNum]=\"1\" *ngIf=\"row[column['field']]?.length\">\n                  <!-- \u8D85\u8FC7\u4E00\u5F20\u56FE\u7247\u663E\u793Abadge -->\n                  <ng-template [ngIf]=\"row[column['field']]?.length > 1\" [ngIfElse]=\"noBadgeTemplate\">\n                    <nz-badge [nzCount]=\"row[column['field']]?.length\">\n                      <ng-container [ngTemplateOutlet]=\"noBadgeTemplate\"></ng-container>\n                    </nz-badge>\n                  </ng-template>\n                  <!-- \u53EA\u6709\u4E00\u5F20\u56FE\u7247\u4E0D\u663E\u793Abadge -->\n                  <ng-template #noBadgeTemplate>\n                    <img\n                      viewerImg\n                      height=\"24px\"\n                      width=\"24px\"\n                      *ngFor=\"let url of row[column['field']] || []\"\n                      [lazyLoadSrc]=\"url\"\n                      style=\"cursor: zoom-in\"\n                    />\n                  </ng-template>\n                </div>\n              </ng-template>\n              <!-- default -->\n              <ng-template ngSwitchDefault>\n                <smart-text [text]=\"row[column['field']]\"></smart-text>\n              </ng-template>\n            </ng-container>\n          </ng-template>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n\n  <!-- total\u6A21\u677F -->\n  <ng-template #totalTemplate let-total> \u603B {{ total }} \u6761\u6570\u636E </ng-template>\n</nz-table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host ::ng-deep .ant-table-scroll{position:relative}:host ::ng-deep .fixed-pagination .ant-table-placeholder{position:absolute;bottom:0;width:100%}td{word-break:break-all}.clear-icon{color:rgba(0,0,0,.25);font-size:12px;vertical-align:top;cursor:pointer;transition:color .3s}.clear-icon:hover{color:rgba(0,0,0,.45)}"]
                }] }
    ];
    /** @nocollapse */
    AdvancedTableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    AdvancedTableComponent.propDecorators = {
        columns: [{ type: Input }],
        data: [{ type: Input }],
        selections: [{ type: Input }],
        scroll: [{ type: Input }],
        loading: [{ type: Input }],
        pageSize: [{ type: Input }],
        frontPagination: [{ type: Input }],
        showPagination: [{ type: Input }],
        fixedPagination: [{ type: Input }],
        showSizeChanger: [{ type: Input }],
        size: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        showCheckbox: [{ type: Input }],
        titleTemplate: [{ type: Input }],
        columnsChange: [{ type: Output }],
        selectionsChange: [{ type: Output }],
        load: [{ type: Output }],
        sort: [{ type: Output }],
        linkClick: [{ type: Output }],
        customCells: [{ type: ContentChildren, args: [AdvancedCellComponent,] }],
        customFilters: [{ type: ContentChildren, args: [AdvancedFilterComponent,] }]
    };
    return AdvancedTableComponent;
}());
if (false) {
    /** @type {?} */
    AdvancedTableComponent.prototype.columns;
    /** @type {?} */
    AdvancedTableComponent.prototype.data;
    /** @type {?} */
    AdvancedTableComponent.prototype.selections;
    /** @type {?} */
    AdvancedTableComponent.prototype.scroll;
    /** @type {?} */
    AdvancedTableComponent.prototype.loading;
    /** @type {?} */
    AdvancedTableComponent.prototype.pageSize;
    /** @type {?} */
    AdvancedTableComponent.prototype.frontPagination;
    /** @type {?} */
    AdvancedTableComponent.prototype.showPagination;
    /** @type {?} */
    AdvancedTableComponent.prototype.fixedPagination;
    /** @type {?} */
    AdvancedTableComponent.prototype.showSizeChanger;
    /** @type {?} */
    AdvancedTableComponent.prototype.size;
    /** @type {?} */
    AdvancedTableComponent.prototype.pageSizeOptions;
    /** @type {?} */
    AdvancedTableComponent.prototype.showCheckbox;
    /** @type {?} */
    AdvancedTableComponent.prototype.titleTemplate;
    /** @type {?} */
    AdvancedTableComponent.prototype.columnsChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.selectionsChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.load;
    /** @type {?} */
    AdvancedTableComponent.prototype.sort;
    /** @type {?} */
    AdvancedTableComponent.prototype.linkClick;
    /** @type {?} */
    AdvancedTableComponent.prototype.customCells;
    /** @type {?} */
    AdvancedTableComponent.prototype.customFilters;
    /** @type {?} */
    AdvancedTableComponent.prototype.load$;
    /** @type {?} */
    AdvancedTableComponent.prototype.displayData;
    /** @type {?} */
    AdvancedTableComponent.prototype.pageIndex;
    /** @type {?} */
    AdvancedTableComponent.prototype.sortParams;
    /**
     * @type {?}
     * @private
     */
    AdvancedTableComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    AdvancedTableComponent.prototype._renderer2;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENT = [AdvancedTableComponent, AdvancedCellComponent, AdvancedFilterComponent];
/** @type {?} */
var MODULE = [CommonModule, FormsModule, NgZorroAntdModule, SmartTextModule$1, ViewerDirectiveModule];
var AdvancedTableModule = /** @class */ (function () {
    function AdvancedTableModule() {
    }
    AdvancedTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(COMPONENT),
                    imports: __spread(MODULE),
                    exports: __spread(MODULE, COMPONENT),
                },] }
    ];
    return AdvancedTableModule;
}());
/**
 * @record
 */
function AdvancedTableColumn() { }
if (false) {
    /** @type {?} */
    AdvancedTableColumn.prototype.title;
    /** @type {?} */
    AdvancedTableColumn.prototype.field;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.width;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.left;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.right;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.type;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.customCell;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.showSort;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.sortValue;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.customSort;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.showFilter;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.filterType;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.filterOptions;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.filterWidth;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.filterMultiple;
    /** @type {?|undefined} */
    AdvancedTableColumn.prototype.customFilter;
}
/**
 * @record
 */
function AdvancedTableRow() { }
if (false) {
    /** @type {?} */
    AdvancedTableRow.prototype.isChecked;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function PageParams() { }
if (false) {
    /** @type {?} */
    PageParams.prototype.page;
    /** @type {?} */
    PageParams.prototype.size;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmartTextComponent = /** @class */ (function () {
    function SmartTextComponent() {
        this.text = '';
        this.maxLength = 20;
        this.tail = '...';
    }
    SmartTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'smart-text',
                    template: "<!-- \u76F4\u63A5\u663E\u793A -->\n<ng-container *ngIf=\"text.length <= maxLength; else tooltipBlock\">\n  <span>{{ text }}</span>\n</ng-container>\n\n<!-- \u63D0\u793A\u6846\u663E\u793A -->\n<ng-template #tooltipBlock>\n  <span nz-tooltip [nzTitle]=\"text\">{{ text | shortcut: maxLength:tail }}</span>\n</ng-template>\n\n<ng-content></ng-content>\n"
                }] }
    ];
    SmartTextComponent.propDecorators = {
        text: [{ type: Input }],
        maxLength: [{ type: Input }],
        tail: [{ type: Input }]
    };
    return SmartTextComponent;
}());
if (false) {
    /** @type {?} */
    SmartTextComponent.prototype.text;
    /** @type {?} */
    SmartTextComponent.prototype.maxLength;
    /** @type {?} */
    SmartTextComponent.prototype.tail;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmartTextModule = /** @class */ (function () {
    function SmartTextModule() {
    }
    SmartTextModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ShortcutPipeModule, NzToolTipModule],
                    declarations: [SmartTextComponent],
                    exports: [CommonModule, SmartTextComponent],
                },] }
    ];
    return SmartTextModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULES = [
    AdvancedTableModule,
    QueryTabsModule,
    SmartTextModule,
    LodopModule,
    ReuseTabModule,
    NoticeIconModule,
    SidebarNavModule,
    SVModule,
    PageHeaderModule,
];
var PikachuModule = /** @class */ (function () {
    function PikachuModule() {
    }
    PikachuModule.decorators = [
        { type: NgModule, args: [{ exports: MODULES },] }
    ];
    return PikachuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PikachuModule, AdvancedTableModule as ɵa, QueryTabsModule as ɵb, SmartTextModule as ɵc, ReuseTabModule as ɵd, NoticeIconModule as ɵe, SidebarNavModule as ɵf, SVModule as ɵg, PageHeaderModule as ɵh };
//# sourceMappingURL=pikachu.js.map
