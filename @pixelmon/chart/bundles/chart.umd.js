/**
 * @Based on pixelmon(cipchk@qq.com) v0.1.10
 * (c) 2019 developer(developer@1ziton.com)
 * 
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@pixelmon/chart/bar'), require('@pixelmon/chart/card'), require('@pixelmon/chart/custom'), require('@pixelmon/chart/gauge'), require('@pixelmon/chart/mini-area'), require('@pixelmon/chart/mini-bar'), require('@pixelmon/chart/mini-progress'), require('@pixelmon/chart/pie'), require('@pixelmon/chart/radar'), require('@pixelmon/chart/tag-cloud'), require('@pixelmon/chart/timeline'), require('@pixelmon/chart/water-wave'), require('@pixelmon/chart/number-info'), require('@pixelmon/chart/trend'), require('@pixelmon/chart/single-bar'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@pixelmon/chart', ['exports', '@pixelmon/chart/bar', '@pixelmon/chart/card', '@pixelmon/chart/custom', '@pixelmon/chart/gauge', '@pixelmon/chart/mini-area', '@pixelmon/chart/mini-bar', '@pixelmon/chart/mini-progress', '@pixelmon/chart/pie', '@pixelmon/chart/radar', '@pixelmon/chart/tag-cloud', '@pixelmon/chart/timeline', '@pixelmon/chart/water-wave', '@pixelmon/chart/number-info', '@pixelmon/chart/trend', '@pixelmon/chart/single-bar', '@angular/core'], factory) :
    (global = global || self, factory((global.pixelmon = global.pixelmon || {}, global.pixelmon.chart = {}), global.pixelmon.chart.bar, global.pixelmon.chart.card, global.pixelmon.chart.custom, global.pixelmon.chart.gauge, global.pixelmon.chart['mini-area'], global.pixelmon.chart['mini-bar'], global.pixelmon.chart['mini-progress'], global.pixelmon.chart.pie, global.pixelmon.chart.radar, global.pixelmon.chart['tag-cloud'], global.pixelmon.chart.timeline, global.pixelmon.chart['water-wave'], global.pixelmon.chart['number-info'], global.pixelmon.chart.trend, global.pixelmon.chart['single-bar'], global.ng.core));
}(this, function (exports, bar, card, custom, gauge, miniArea, miniBar, miniProgress, pie, radar, tagCloud, timeline, waterWave, numberInfo, trend, singleBar, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULES = [
        bar.G2BarModule,
        card.G2CardModule,
        custom.G2CustomModule,
        gauge.G2GaugeModule,
        miniArea.G2MiniAreaModule,
        miniBar.G2MiniBarModule,
        miniProgress.G2MiniProgressModule,
        pie.G2PieModule,
        radar.G2RadarModule,
        tagCloud.G2TagCloudModule,
        timeline.G2TimelineModule,
        waterWave.G2WaterWaveModule,
        singleBar.G2SingleBarModule,
        numberInfo.NumberInfoModule,
        trend.TrendModule,
    ];
    // #endregion
    var PixelmonChartModule = /** @class */ (function () {
        function PixelmonChartModule() {
        }
        PixelmonChartModule.decorators = [
            { type: core.NgModule, args: [{ exports: MODULES },] }
        ];
        return PixelmonChartModule;
    }());

    Object.defineProperty(exports, 'G2BarComponent', {
        enumerable: true,
        get: function () {
            return bar.G2BarComponent;
        }
    });
    Object.defineProperty(exports, 'G2BarModule', {
        enumerable: true,
        get: function () {
            return bar.G2BarModule;
        }
    });
    Object.defineProperty(exports, 'G2CardComponent', {
        enumerable: true,
        get: function () {
            return card.G2CardComponent;
        }
    });
    Object.defineProperty(exports, 'G2CardModule', {
        enumerable: true,
        get: function () {
            return card.G2CardModule;
        }
    });
    Object.defineProperty(exports, 'G2CustomComponent', {
        enumerable: true,
        get: function () {
            return custom.G2CustomComponent;
        }
    });
    Object.defineProperty(exports, 'G2CustomModule', {
        enumerable: true,
        get: function () {
            return custom.G2CustomModule;
        }
    });
    Object.defineProperty(exports, 'G2GaugeComponent', {
        enumerable: true,
        get: function () {
            return gauge.G2GaugeComponent;
        }
    });
    Object.defineProperty(exports, 'G2GaugeModule', {
        enumerable: true,
        get: function () {
            return gauge.G2GaugeModule;
        }
    });
    Object.defineProperty(exports, 'G2MiniAreaComponent', {
        enumerable: true,
        get: function () {
            return miniArea.G2MiniAreaComponent;
        }
    });
    Object.defineProperty(exports, 'G2MiniAreaModule', {
        enumerable: true,
        get: function () {
            return miniArea.G2MiniAreaModule;
        }
    });
    Object.defineProperty(exports, 'G2MiniBarComponent', {
        enumerable: true,
        get: function () {
            return miniBar.G2MiniBarComponent;
        }
    });
    Object.defineProperty(exports, 'G2MiniBarModule', {
        enumerable: true,
        get: function () {
            return miniBar.G2MiniBarModule;
        }
    });
    Object.defineProperty(exports, 'G2MiniProgressComponent', {
        enumerable: true,
        get: function () {
            return miniProgress.G2MiniProgressComponent;
        }
    });
    Object.defineProperty(exports, 'G2MiniProgressModule', {
        enumerable: true,
        get: function () {
            return miniProgress.G2MiniProgressModule;
        }
    });
    Object.defineProperty(exports, 'G2PieComponent', {
        enumerable: true,
        get: function () {
            return pie.G2PieComponent;
        }
    });
    Object.defineProperty(exports, 'G2PieModule', {
        enumerable: true,
        get: function () {
            return pie.G2PieModule;
        }
    });
    Object.defineProperty(exports, 'G2RadarComponent', {
        enumerable: true,
        get: function () {
            return radar.G2RadarComponent;
        }
    });
    Object.defineProperty(exports, 'G2RadarModule', {
        enumerable: true,
        get: function () {
            return radar.G2RadarModule;
        }
    });
    Object.defineProperty(exports, 'G2TagCloudComponent', {
        enumerable: true,
        get: function () {
            return tagCloud.G2TagCloudComponent;
        }
    });
    Object.defineProperty(exports, 'G2TagCloudModule', {
        enumerable: true,
        get: function () {
            return tagCloud.G2TagCloudModule;
        }
    });
    Object.defineProperty(exports, 'G2TimelineComponent', {
        enumerable: true,
        get: function () {
            return timeline.G2TimelineComponent;
        }
    });
    Object.defineProperty(exports, 'G2TimelineData', {
        enumerable: true,
        get: function () {
            return timeline.G2TimelineData;
        }
    });
    Object.defineProperty(exports, 'G2TimelineModule', {
        enumerable: true,
        get: function () {
            return timeline.G2TimelineModule;
        }
    });
    Object.defineProperty(exports, 'G2WaterWaveComponent', {
        enumerable: true,
        get: function () {
            return waterWave.G2WaterWaveComponent;
        }
    });
    Object.defineProperty(exports, 'G2WaterWaveModule', {
        enumerable: true,
        get: function () {
            return waterWave.G2WaterWaveModule;
        }
    });
    Object.defineProperty(exports, 'NumberInfoComponent', {
        enumerable: true,
        get: function () {
            return numberInfo.NumberInfoComponent;
        }
    });
    Object.defineProperty(exports, 'NumberInfoModule', {
        enumerable: true,
        get: function () {
            return numberInfo.NumberInfoModule;
        }
    });
    Object.defineProperty(exports, 'TrendComponent', {
        enumerable: true,
        get: function () {
            return trend.TrendComponent;
        }
    });
    Object.defineProperty(exports, 'TrendModule', {
        enumerable: true,
        get: function () {
            return trend.TrendModule;
        }
    });
    Object.defineProperty(exports, 'G2SingleBarComponent', {
        enumerable: true,
        get: function () {
            return singleBar.G2SingleBarComponent;
        }
    });
    Object.defineProperty(exports, 'G2SingleBarModule', {
        enumerable: true,
        get: function () {
            return singleBar.G2SingleBarModule;
        }
    });
    exports.PixelmonChartModule = PixelmonChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=chart.umd.js.map
