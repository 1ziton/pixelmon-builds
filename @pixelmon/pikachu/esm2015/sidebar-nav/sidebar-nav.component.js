/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService, SettingsService, WINDOW } from '@pixelmon/theme';
import { InputBoolean } from '@pixelmon/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/** @type {?} */
const SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
const FLOATINGCLS = 'sidebar-nav__floating';
export class SidebarNavComponent {
    /**
     * @param {?} menuSrv
     * @param {?} settings
     * @param {?} router
     * @param {?} render
     * @param {?} cdr
     * @param {?} ngZone
     * @param {?} doc
     * @param {?} win
     */
    constructor(menuSrv, settings, router, render, cdr, ngZone, doc, win) {
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
    /**
     * @return {?}
     */
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    /**
     * @private
     * @return {?}
     */
    get _d() {
        return this.menuSrv.menus;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    floatingAreaClickHandle(e) {
        e.stopPropagation();
        /** @type {?} */
        const linkNode = (/** @type {?} */ (e.target));
        if (linkNode.nodeName !== 'A') {
            return false;
        }
        /** @type {?} */
        const id = +(/** @type {?} */ ((/** @type {?} */ (linkNode.dataset)).id));
        /** @type {?} */
        let item;
        this.menuSrv.visit(this._d, (/**
         * @param {?} i
         * @return {?}
         */
        i => {
            if (!item && i.__id === id) {
                item = i;
            }
        }));
        this.to((/** @type {?} */ (item)));
        this.hideAll();
        e.preventDefault();
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    clearFloatingContainer() {
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
    }
    /**
     * @private
     * @return {?}
     */
    genFloatingContainer() {
        this.clearFloatingContainer();
        this.floatingEl = this.render.createElement('div');
        this.floatingEl.classList.add(FLOATINGCLS + '-container');
        this.floatingEl.addEventListener('click', this.floatingAreaClickHandle.bind(this), false);
        this.bodyEl.appendChild(this.floatingEl);
    }
    /**
     * @private
     * @param {?} linkNode
     * @param {?} item
     * @return {?}
     */
    genSubNode(linkNode, item) {
        /** @type {?} */
        const id = `_sidebar-nav-${item.__id}`;
        /** @type {?} */
        const node = (/** @type {?} */ ((/** @type {?} */ (linkNode.nextElementSibling)).cloneNode(true)));
        node.id = id;
        node.classList.add(FLOATINGCLS);
        node.addEventListener('mouseleave', (/**
         * @return {?}
         */
        () => {
            node.classList.remove(SHOWCLS);
        }), false);
        this.floatingEl.appendChild(node);
        return node;
    }
    /**
     * @private
     * @return {?}
     */
    hideAll() {
        /** @type {?} */
        const allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < allNode.length; i++) {
            allNode[i].classList.remove(SHOWCLS);
        }
    }
    // calculate the node position values.
    /**
     * @private
     * @param {?} linkNode
     * @param {?} node
     * @return {?}
     */
    calPos(linkNode, node) {
        /** @type {?} */
        const rect = linkNode.getBoundingClientRect();
        // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
        /** @type {?} */
        const scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
        /** @type {?} */
        const docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
        /** @type {?} */
        let offsetHeight = 0;
        if (docHeight < rect.top + node.clientHeight) {
            offsetHeight = rect.top + node.clientHeight - docHeight;
        }
        node.style.top = `${rect.top + scrollTop - offsetHeight}px`;
        node.style.left = `${rect.right + 5}px`;
    }
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    showSubMenu(e, item) {
        if (this.collapsed !== true) {
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            e.preventDefault();
            /** @type {?} */
            const linkNode = (/** @type {?} */ (e.target));
            this.genFloatingContainer();
            /** @type {?} */
            const subNode = this.genSubNode((/** @type {?} */ (linkNode)), item);
            this.hideAll();
            subNode.classList.add(SHOWCLS);
            this.calPos((/** @type {?} */ (linkNode)), subNode);
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    to(item) {
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
        () => this.router.navigateByUrl((/** @type {?} */ (item.link)))));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleOpen(item) {
        if (!this.openStrictly) {
            this.menuSrv.visit(this._d, (/**
             * @param {?} i
             * @return {?}
             */
            i => {
                if (i !== item)
                    i._open = false;
            }));
            /** @type {?} */
            let pItem = item.__parent;
            while (pItem) {
                pItem._open = true;
                pItem = pItem.__parent;
            }
        }
        item._open = !item._open;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    _click() {
        if (this.isPad && this.collapsed) {
            this.openAside(false);
            this.hideAll();
        }
    }
    /**
     * @return {?}
     */
    _docClick() {
        this.hideAll();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { doc, router, unsubscribe$, menuSrv, cdr } = this;
        this.bodyEl = doc.querySelector('body');
        menuSrv.openedByUrl(router.url, this.recursivePath);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.genFloatingContainer()));
        menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            menuSrv.visit(data, (/**
             * @param {?} i
             * @return {?}
             */
            (i) => {
                if (!i._aclResult) {
                    if (this.disabledAcl) {
                        i.disabled = true;
                    }
                    else {
                        i._hidden = true;
                    }
                }
                if (this.openStrictly) {
                    i._open = i.open != null ? i.open : false;
                }
            }));
            this.list = menuSrv.menus;
            cdr.detectChanges();
        }));
        router.events.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (e instanceof NavigationEnd) {
                this.menuSrv.openedByUrl(e.urlAfterRedirects, this.recursivePath);
                this.underPad();
                this.cdr.detectChanges();
            }
        }));
        this.underPad();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
        this.clearFloatingContainer();
    }
    // #region Under pad
    /**
     * @private
     * @return {?}
     */
    get isPad() {
        return window.innerWidth < 768;
    }
    /**
     * @private
     * @return {?}
     */
    underPad() {
        if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
            setTimeout((/**
             * @return {?}
             */
            () => this.openAside(true)));
        }
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    openAside(status) {
        this.settings.setLayout('collapsed', status);
    }
}
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
SidebarNavComponent.ctorParameters = () => [
    { type: MenuService },
    { type: SettingsService },
    { type: Router },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
];
SidebarNavComponent.propDecorators = {
    disabledAcl: [{ type: Input }],
    autoCloseUnderPad: [{ type: Input }],
    recursivePath: [{ type: Input }],
    openStrictly: [{ type: Input }],
    select: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SidebarNavComponent.prototype, "disabledAcl", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SidebarNavComponent.prototype, "recursivePath", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SidebarNavComponent.prototype, "openStrictly", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBpeGVsbW9uL3Bpa2FjaHUvc2lkZWJhci1uYXYvIiwic291cmNlcyI6WyJzaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBUSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFJckMsT0FBTyxHQUFHLDRCQUE0Qjs7TUFDdEMsV0FBVyxHQUFHLHVCQUF1QjtBQWMzQyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7OztJQW9COUIsWUFDVSxPQUFvQixFQUNwQixRQUF5QixFQUN6QixNQUFjLEVBQ2QsTUFBaUIsRUFDakIsR0FBc0IsRUFDdEIsTUFBYyxFQUNJLEdBQVEsRUFDVixHQUFXO1FBUDNCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFD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Qix1Q0FBaUM7Ozs7O0lBQ2pDLHFDQUFzQjs7Ozs7SUFDdEIscUNBQXlCOzs7OztJQUN6QixrQ0FBOEI7Ozs7O0lBQzlCLHFDQUFzQjs7Ozs7SUFDdEIsa0NBQWtDOzs7OztJQUNsQyxrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnUsIE1lbnVTZXJ2aWNlLCBTZXR0aW5nc1NlcnZpY2UsIFdJTkRPVyB9IGZyb20gJ0BwaXhlbG1vbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAcGl4ZWxtb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vc2lkZWJhci1uYXYudHlwZXMnO1xuXG5jb25zdCBTSE9XQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZy1zaG93JztcbmNvbnN0IEZMT0FUSU5HQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGViYXItbmF2JyxcbiAgZXhwb3J0QXM6ICdzaWRlYmFyTmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdfZG9jQ2xpY2soKScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBib2R5RWw6IEhUTUxCb2R5RWxlbWVudDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGZsb2F0aW5nRWw6IEhUTUxEaXZFbGVtZW50O1xuICBsaXN0OiBOYXZbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZEFjbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0Nsb3NlVW5kZXJQYWQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVjdXJzaXZlUGF0aCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuU3RyaWN0bHkgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVudT4oKTtcblxuICBnZXQgY29sbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51U3J2Lm1lbnVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBXaW5kb3csXG4gICkge31cblxuICBwcml2YXRlIGZsb2F0aW5nQXJlYUNsaWNrSGFuZGxlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGxpbmtOb2RlID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGxpbmtOb2RlLm5vZGVOYW1lICE9PSAnQScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaWQgPSArbGlua05vZGUuZGF0YXNldCEuaWQhO1xuICAgIGxldCBpdGVtOiBOYXY7XG4gICAgdGhpcy5tZW51U3J2LnZpc2l0KHRoaXMuX2QsIGkgPT4ge1xuICAgICAgaWYgKCFpdGVtICYmIGkuX19pZCA9PT0gaWQpIHtcbiAgICAgICAgaXRlbSA9IGk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50byhpdGVtISk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpIHtcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSk7XG4gICAgLy8gZml4IGllOiBodHRwczovL2dpdGh1Yi5jb20vMXppdG9uL3BpeGVsbW9uL2lzc3Vlcy81MlxuICAgIGlmICh0aGlzLmZsb2F0aW5nRWwuaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbkZsb2F0aW5nQ29udGFpbmVyKCkge1xuICAgIHRoaXMuY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpO1xuICAgIHRoaXMuZmxvYXRpbmdFbCA9IHRoaXMucmVuZGVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5jbGFzc0xpc3QuYWRkKEZMT0FUSU5HQ0xTICsgJy1jb250YWluZXInKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZsb2F0aW5nQXJlYUNsaWNrSGFuZGxlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB0aGlzLmJvZHlFbC5hcHBlbmRDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TdWJOb2RlKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIGl0ZW06IE5hdik6IEhUTUxVTGlzdEVsZW1lbnQge1xuICAgIGNvbnN0IGlkID0gYF9zaWRlYmFyLW5hdi0ke2l0ZW0uX19pZH1gO1xuICAgIGNvbnN0IG5vZGUgPSBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xuICAgIG5vZGUuaWQgPSBpZDtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdtb3VzZWxlYXZlJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlQWxsKCkge1xuICAgIGNvbnN0IGFsbE5vZGUgPSB0aGlzLmZsb2F0aW5nRWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBGTE9BVElOR0NMUyk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFsbE5vZGVbaV0uY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICB9XG4gIH1cblxuICAvLyBjYWxjdWxhdGUgdGhlIG5vZGUgcG9zaXRpb24gdmFsdWVzLlxuICBwcml2YXRlIGNhbFBvcyhsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBub2RlOiBIVE1MVUxpc3RFbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGxpbmtOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vIGJ1ZzogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTQ3MjEwMTUvXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgodGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgdGhpcy5ib2R5RWwuc2Nyb2xsVG9wKTtcbiAgICBjb25zdCBkb2NIZWlnaHQgPSBNYXRoLm1heCh0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB0aGlzLmJvZHlFbC5jbGllbnRIZWlnaHQpO1xuICAgIGxldCBvZmZzZXRIZWlnaHQgPSAwO1xuICAgIGlmIChkb2NIZWlnaHQgPCByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0O1xuICAgIH1cbiAgICBub2RlLnN0eWxlLnRvcCA9IGAke3JlY3QudG9wICsgc2Nyb2xsVG9wIC0gb2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBub2RlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnJpZ2h0ICsgNX1weGA7XG4gIH1cblxuICBzaG93U3ViTWVudShlOiBNb3VzZUV2ZW50LCBpdGVtOiBOYXYpIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgdGhpcy5nZW5GbG9hdGluZ0NvbnRhaW5lcigpO1xuICAgICAgY29uc3Qgc3ViTm9kZSA9IHRoaXMuZ2VuU3ViTm9kZShsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIGl0ZW0pO1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgICBzdWJOb2RlLmNsYXNzTGlzdC5hZGQoU0hPV0NMUyk7XG4gICAgICB0aGlzLmNhbFBvcyhsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIHN1Yk5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG8oaXRlbTogTWVudSkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGlmIChpdGVtLmV4dGVybmFsTGluaykge1xuICAgICAgaWYgKGl0ZW0udGFyZ2V0ID09PSAnX2JsYW5rJykge1xuICAgICAgICB0aGlzLndpbi5vcGVuKGl0ZW0uZXh0ZXJuYWxMaW5rKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmV4dGVybmFsTGluaztcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5saW5rISkpO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihpdGVtOiBOYXYpIHtcbiAgICBpZiAoIXRoaXMub3BlblN0cmljdGx5KSB7XG4gICAgICB0aGlzLm1lbnVTcnYudmlzaXQodGhpcy5fZCwgaSA9PiB7XG4gICAgICAgIGlmIChpICE9PSBpdGVtKSBpLl9vcGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGxldCBwSXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgICB3aGlsZSAocEl0ZW0pIHtcbiAgICAgICAgcEl0ZW0uX29wZW4gPSB0cnVlO1xuICAgICAgICBwSXRlbSA9IHBJdGVtLl9fcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpdGVtLl9vcGVuID0gIWl0ZW0uX29wZW47XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuaXNQYWQgJiYgdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMub3BlbkFzaWRlKGZhbHNlKTtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIF9kb2NDbGljaygpIHtcbiAgICB0aGlzLmhpZGVBbGwoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHsgZG9jLCByb3V0ZXIsIHVuc3Vic2NyaWJlJCwgbWVudVNydiwgY2RyIH0gPSB0aGlzO1xuICAgIHRoaXMuYm9keUVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBtZW51U3J2Lm9wZW5lZEJ5VXJsKHJvdXRlci51cmwsIHRoaXMucmVjdXJzaXZlUGF0aCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5nZW5GbG9hdGluZ0NvbnRhaW5lcigpKTtcbiAgICBtZW51U3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh1bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBtZW51U3J2LnZpc2l0KGRhdGEsIChpOiBOYXYpID0+IHtcbiAgICAgICAgaWYgKCFpLl9hY2xSZXN1bHQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZEFjbCkge1xuICAgICAgICAgICAgaS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkuX2hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wZW5TdHJpY3RseSkge1xuICAgICAgICAgIGkuX29wZW4gPSBpLm9wZW4gIT0gbnVsbCA/IGkub3BlbiA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdCA9IG1lbnVTcnYubWVudXM7XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHJvdXRlci5ldmVudHMucGlwZSh0YWtlVW50aWwodW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMubWVudVNydi5vcGVuZWRCeVVybChlLnVybEFmdGVyUmVkaXJlY3RzLCB0aGlzLnJlY3Vyc2l2ZVBhdGgpO1xuICAgICAgICB0aGlzLnVuZGVyUGFkKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVuZGVyUGFkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVbmRlciBwYWRcblxuICBwcml2YXRlIGdldCBpc1BhZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG4gIH1cblxuICBwcml2YXRlIHVuZGVyUGFkKCkge1xuICAgIGlmICh0aGlzLmF1dG9DbG9zZVVuZGVyUGFkICYmIHRoaXMuaXNQYWQgJiYgIXRoaXMuY29sbGFwc2VkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbkFzaWRlKHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5Bc2lkZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldHRpbmdzLnNldExheW91dCgnY29sbGFwc2VkJywgc3RhdHVzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==