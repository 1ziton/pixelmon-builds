/**
 * @Based on pixelmon(cipchk@qq.com) v0.2.0
 * (c) 2019 developer(developer@1ziton.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@pixelmon/pikachu/lodop'), require('@pixelmon/pikachu/notice-icon'), require('@pixelmon/pikachu/page-header'), require('@pixelmon/pikachu/pagination'), require('@pixelmon/pikachu/reuse-tab'), require('@pixelmon/pikachu/sidebar-nav'), require('@pixelmon/pikachu/view'), require('@pixelmon/pikachu/edit'), require('@pixelmon/pikachu/viewer'), require('@pixelmon/pikachu/footer-toolbar'), require('@pixelmon/pikachu/table'), require('@pixelmon/pikachu/upload'), require('@pixelmon/pikachu/steps'), require('@pixelmon/pikachu/address-select'), require('@pixelmon/pikachu/dropdown-panel'), require('@pixelmon/pikachu/smart-text'), require('@pixelmon/pikachu/query-tabs'), require('@pixelmon/pikachu/tag-select'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/pikachu', ['exports', '@pixelmon/pikachu/lodop', '@pixelmon/pikachu/notice-icon', '@pixelmon/pikachu/page-header', '@pixelmon/pikachu/pagination', '@pixelmon/pikachu/reuse-tab', '@pixelmon/pikachu/sidebar-nav', '@pixelmon/pikachu/view', '@pixelmon/pikachu/edit', '@pixelmon/pikachu/viewer', '@pixelmon/pikachu/footer-toolbar', '@pixelmon/pikachu/table', '@pixelmon/pikachu/upload', '@pixelmon/pikachu/steps', '@pixelmon/pikachu/address-select', '@pixelmon/pikachu/dropdown-panel', '@pixelmon/pikachu/smart-text', '@pixelmon/pikachu/query-tabs', '@pixelmon/pikachu/tag-select', '@angular/core'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.pikachu = {}), global.pixelmon.pikachu.lodop, global.pixelmon.pikachu['notice-icon'], global.pixelmon.pikachu['page-header'], global.pixelmon.pikachu.pagination, global.pixelmon.pikachu['reuse-tab'], global.pixelmon.pikachu['sidebar-nav'], global.pixelmon.pikachu.view, global.pixelmon.pikachu.edit, global.pixelmon.pikachu.viewer, global.pixelmon.pikachu['footer-toolbar'], global.pixelmon.pikachu.table, global.pixelmon.pikachu.upload, global.pixelmon.pikachu.steps, global.pixelmon.pikachu['address-select'], global.pixelmon.pikachu['dropdown-panel'], global.pixelmon.pikachu['smart-text'], global.pixelmon.pikachu['query-tabs'], global.pixelmon.pikachu['tag-select'], global.ng.core));
}(this, function (exports, lodop, noticeIcon, pageHeader, pagination, reuseTab, sidebarNav, view, edit, viewer, footerToolbar, table, upload, steps, addressSelect, dropdownPanel, smartText, queryTabs, tagSelect, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULES = [
        queryTabs.QueryTabsModule,
        smartText.SmartTextModule,
        lodop.LodopModule,
        reuseTab.ReuseTabModule,
        noticeIcon.NoticeIconModule,
        sidebarNav.SidebarNavModule,
        view.SVModule,
        edit.SEModule,
        pageHeader.PageHeaderModule,
        table.TableModule,
        upload.UploadModule,
        pagination.PaginationModule,
        footerToolbar.FooterToolbarModule,
        steps.StepsModule,
        addressSelect.AddressSelectModule,
        dropdownPanel.DropdownPanelModule,
        viewer.ViewerDirectiveModule,
        tagSelect.TagSelectModule,
    ];
    var PikachuModule = /** @class */ (function () {
        function PikachuModule() {
        }
        PikachuModule.decorators = [
            { type: core.NgModule, args: [{ exports: MODULES },] }
        ];
        return PikachuModule;
    }());

    Object.defineProperty(exports, 'LodopConfig', {
        enumerable: true,
        get: function () {
            return lodop.LodopConfig;
        }
    });
    Object.defineProperty(exports, 'LodopModule', {
        enumerable: true,
        get: function () {
            return lodop.LodopModule;
        }
    });
    Object.defineProperty(exports, 'LodopService', {
        enumerable: true,
        get: function () {
            return lodop.LodopService;
        }
    });
    Object.defineProperty(exports, 'NoticeIconComponent', {
        enumerable: true,
        get: function () {
            return noticeIcon.NoticeIconComponent;
        }
    });
    Object.defineProperty(exports, 'NoticeIconModule', {
        enumerable: true,
        get: function () {
            return noticeIcon.NoticeIconModule;
        }
    });
    Object.defineProperty(exports, 'NoticeIconTabComponent', {
        enumerable: true,
        get: function () {
            return noticeIcon.NoticeIconTabComponent;
        }
    });
    Object.defineProperty(exports, 'PageHeaderComponent', {
        enumerable: true,
        get: function () {
            return pageHeader.PageHeaderComponent;
        }
    });
    Object.defineProperty(exports, 'PageHeaderConfig', {
        enumerable: true,
        get: function () {
            return pageHeader.PageHeaderConfig;
        }
    });
    Object.defineProperty(exports, 'PageHeaderModule', {
        enumerable: true,
        get: function () {
            return pageHeader.PageHeaderModule;
        }
    });
    Object.defineProperty(exports, 'PaginationComponent', {
        enumerable: true,
        get: function () {
            return pagination.PaginationComponent;
        }
    });
    Object.defineProperty(exports, 'PaginationModule', {
        enumerable: true,
        get: function () {
            return pagination.PaginationModule;
        }
    });
    Object.defineProperty(exports, 'ReuseTabComponent', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabComponent;
        }
    });
    Object.defineProperty(exports, 'ReuseTabContextComponent', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabContextComponent;
        }
    });
    Object.defineProperty(exports, 'ReuseTabContextDirective', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabContextDirective;
        }
    });
    Object.defineProperty(exports, 'ReuseTabContextMenuComponent', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabContextMenuComponent;
        }
    });
    Object.defineProperty(exports, 'ReuseTabContextService', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabContextService;
        }
    });
    Object.defineProperty(exports, 'ReuseTabMatchMode', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabMatchMode;
        }
    });
    Object.defineProperty(exports, 'ReuseTabModule', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabModule;
        }
    });
    Object.defineProperty(exports, 'ReuseTabService', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabService;
        }
    });
    Object.defineProperty(exports, 'ReuseTabStrategy', {
        enumerable: true,
        get: function () {
            return reuseTab.ReuseTabStrategy;
        }
    });
    Object.defineProperty(exports, 'SidebarNavComponent', {
        enumerable: true,
        get: function () {
            return sidebarNav.SidebarNavComponent;
        }
    });
    Object.defineProperty(exports, 'SidebarNavModule', {
        enumerable: true,
        get: function () {
            return sidebarNav.SidebarNavModule;
        }
    });
    Object.defineProperty(exports, 'SVComponent', {
        enumerable: true,
        get: function () {
            return view.SVComponent;
        }
    });
    Object.defineProperty(exports, 'SVConfig', {
        enumerable: true,
        get: function () {
            return view.SVConfig;
        }
    });
    Object.defineProperty(exports, 'SVContainerComponent', {
        enumerable: true,
        get: function () {
            return view.SVContainerComponent;
        }
    });
    Object.defineProperty(exports, 'SVModule', {
        enumerable: true,
        get: function () {
            return view.SVModule;
        }
    });
    Object.defineProperty(exports, 'SVTitleComponent', {
        enumerable: true,
        get: function () {
            return view.SVTitleComponent;
        }
    });
    Object.defineProperty(exports, 'SEComponent', {
        enumerable: true,
        get: function () {
            return edit.SEComponent;
        }
    });
    Object.defineProperty(exports, 'SEConfig', {
        enumerable: true,
        get: function () {
            return edit.SEConfig;
        }
    });
    Object.defineProperty(exports, 'SEContainerComponent', {
        enumerable: true,
        get: function () {
            return edit.SEContainerComponent;
        }
    });
    Object.defineProperty(exports, 'SEErrorComponent', {
        enumerable: true,
        get: function () {
            return edit.SEErrorComponent;
        }
    });
    Object.defineProperty(exports, 'SEModule', {
        enumerable: true,
        get: function () {
            return edit.SEModule;
        }
    });
    Object.defineProperty(exports, 'SETitleComponent', {
        enumerable: true,
        get: function () {
            return edit.SETitleComponent;
        }
    });
    Object.defineProperty(exports, 'ViewerDirective', {
        enumerable: true,
        get: function () {
            return viewer.ViewerDirective;
        }
    });
    Object.defineProperty(exports, 'ViewerDirectiveModule', {
        enumerable: true,
        get: function () {
            return viewer.ViewerDirectiveModule;
        }
    });
    Object.defineProperty(exports, 'ViewerImgDirective', {
        enumerable: true,
        get: function () {
            return viewer.ViewerImgDirective;
        }
    });
    Object.defineProperty(exports, 'FooterToolbarComponent', {
        enumerable: true,
        get: function () {
            return footerToolbar.FooterToolbarComponent;
        }
    });
    Object.defineProperty(exports, 'FooterToolbarModule', {
        enumerable: true,
        get: function () {
            return footerToolbar.FooterToolbarModule;
        }
    });
    Object.defineProperty(exports, 'TableCellComponent', {
        enumerable: true,
        get: function () {
            return table.TableCellComponent;
        }
    });
    Object.defineProperty(exports, 'TableComponent', {
        enumerable: true,
        get: function () {
            return table.TableComponent;
        }
    });
    Object.defineProperty(exports, 'TableFilterComponent', {
        enumerable: true,
        get: function () {
            return table.TableFilterComponent;
        }
    });
    Object.defineProperty(exports, 'TableModule', {
        enumerable: true,
        get: function () {
            return table.TableModule;
        }
    });
    Object.defineProperty(exports, 'UploadModule', {
        enumerable: true,
        get: function () {
            return upload.UploadModule;
        }
    });
    Object.defineProperty(exports, 'UploadServiceToken', {
        enumerable: true,
        get: function () {
            return upload.UploadServiceToken;
        }
    });
    Object.defineProperty(exports, 'ɵa', {
        enumerable: true,
        get: function () {
            return upload.ɵa;
        }
    });
    Object.defineProperty(exports, 'StepsComponent', {
        enumerable: true,
        get: function () {
            return steps.StepsComponent;
        }
    });
    Object.defineProperty(exports, 'StepsModule', {
        enumerable: true,
        get: function () {
            return steps.StepsModule;
        }
    });
    Object.defineProperty(exports, 'AddrCheckedFilterPipe', {
        enumerable: true,
        get: function () {
            return addressSelect.AddrCheckedFilterPipe;
        }
    });
    Object.defineProperty(exports, 'AddrFilterOptionPipe', {
        enumerable: true,
        get: function () {
            return addressSelect.AddrFilterOptionPipe;
        }
    });
    Object.defineProperty(exports, 'AddrLevelFilterPipe', {
        enumerable: true,
        get: function () {
            return addressSelect.AddrLevelFilterPipe;
        }
    });
    Object.defineProperty(exports, 'AddrOptionContainerComponent', {
        enumerable: true,
        get: function () {
            return addressSelect.AddrOptionContainerComponent;
        }
    });
    Object.defineProperty(exports, 'AddrSelectTopControlComponent', {
        enumerable: true,
        get: function () {
            return addressSelect.AddrSelectTopControlComponent;
        }
    });
    Object.defineProperty(exports, 'AddressQueryService', {
        enumerable: true,
        get: function () {
            return addressSelect.AddressQueryService;
        }
    });
    Object.defineProperty(exports, 'AddressSelectComponent', {
        enumerable: true,
        get: function () {
            return addressSelect.AddressSelectComponent;
        }
    });
    Object.defineProperty(exports, 'AddressSelectModule', {
        enumerable: true,
        get: function () {
            return addressSelect.AddressSelectModule;
        }
    });
    Object.defineProperty(exports, 'AddressSelectService', {
        enumerable: true,
        get: function () {
            return addressSelect.AddressSelectService;
        }
    });
    Object.defineProperty(exports, 'DropdownPanelComponent', {
        enumerable: true,
        get: function () {
            return dropdownPanel.DropdownPanelComponent;
        }
    });
    Object.defineProperty(exports, 'DropdownPanelModule', {
        enumerable: true,
        get: function () {
            return dropdownPanel.DropdownPanelModule;
        }
    });
    Object.defineProperty(exports, 'DropdownPanelService', {
        enumerable: true,
        get: function () {
            return dropdownPanel.DropdownPanelService;
        }
    });
    Object.defineProperty(exports, 'PanelFilterOptionPipe', {
        enumerable: true,
        get: function () {
            return dropdownPanel.PanelFilterOptionPipe;
        }
    });
    Object.defineProperty(exports, 'PanelOptionContainerComponent', {
        enumerable: true,
        get: function () {
            return dropdownPanel.PanelOptionContainerComponent;
        }
    });
    Object.defineProperty(exports, 'PanelSelectTopControlComponent', {
        enumerable: true,
        get: function () {
            return dropdownPanel.PanelSelectTopControlComponent;
        }
    });
    Object.defineProperty(exports, 'SmartTextComponent', {
        enumerable: true,
        get: function () {
            return smartText.SmartTextComponent;
        }
    });
    Object.defineProperty(exports, 'SmartTextModule', {
        enumerable: true,
        get: function () {
            return smartText.SmartTextModule;
        }
    });
    Object.defineProperty(exports, 'QueryTabsComponent', {
        enumerable: true,
        get: function () {
            return queryTabs.QueryTabsComponent;
        }
    });
    Object.defineProperty(exports, 'QueryTabsModule', {
        enumerable: true,
        get: function () {
            return queryTabs.QueryTabsModule;
        }
    });
    Object.defineProperty(exports, 'TagSelectComponent', {
        enumerable: true,
        get: function () {
            return tagSelect.TagSelectComponent;
        }
    });
    Object.defineProperty(exports, 'TagSelectModule', {
        enumerable: true,
        get: function () {
            return tagSelect.TagSelectModule;
        }
    });
    exports.PikachuModule = PikachuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pikachu.umd.js.map
