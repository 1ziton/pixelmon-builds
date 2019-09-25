import { Component, ChangeDetectionStrategy, ElementRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '@pixelmon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StepsComponent {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.activeBackground = '#1ECB8E';
        this.activeWidth = '0%';
        this.inactiveBackground = '#EAF0F0';
        this.backgroundImage = '';
        this.activePointColor = '#1ECB8E';
        this.activeContentColor = '#FFFFFF';
        this.activeContentBackground = '#1ECB8E';
        this.keyPointColor = '#1ECB8E';
        this.keyContentColor = '#999999';
        this.keyContentBackground = 'transparent';
        this.keySteps = [];
        this.extraPointColor = '#F5A623';
        this.extraContentColor = '#333333';
        this.extraContentBackground = '#FFFFFF';
        this.extraSteps = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.activeStep) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.updateContentAlign('.p-steps-active-step-content', [this.activeStep]);
            }));
        }
        if (changes.extraSteps) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.updateContentAlign('.p-steps-extra-step-content', this.extraSteps);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * 更新对齐
     * @param {?} contentSelector content的选择器
     * @param {?} steps 对应的steps
     * @return {?}
     */
    updateContentAlign(contentSelector, steps) {
        /** @type {?} */
        const container = this._el.nativeElement.querySelector('.p-steps-container');
        if (!container) {
            return;
        }
        /** @type {?} */
        const containerWidth = DomHandler.getOuterWidth(container);
        /** @type {?} */
        const containerOffsetLeft = DomHandler.getOffset(container).left;
        /** @type {?} */
        const contents = this._el.nativeElement.querySelectorAll(contentSelector);
        if (!contents) {
            return;
        }
        for (let index = 0; index < contents.length; index++) {
            /** @type {?} */
            const content = contents[index];
            /** @type {?} */
            const contentWidth = DomHandler.getOuterWidth(content);
            /** @type {?} */
            const contentOffsetLeft = DomHandler.getOffset(content).left;
            // 原则是能尽量左对齐
            if (steps[index].smartContentAlign === 'right') {
                if (contentWidth * 2 + contentOffsetLeft < containerWidth + containerOffsetLeft) {
                    // 左对齐
                    steps[index].smartContentAlign = 'left';
                }
            }
            else if (contentWidth + contentOffsetLeft > containerWidth + containerOffsetLeft) {
                // 右对齐
                steps[index].smartContentAlign = 'right';
            }
            else {
                // 左对齐
                steps[index].smartContentAlign = 'left';
            }
        }
    }
}
StepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'p-steps',
                template: "<div class=\"p-steps-container\">\n  <!-- background -->\n  <div class=\"p-steps-background\" *ngIf=\"backgroundImage\" [style.backgroundImage]=\"backgroundImage\"></div>\n  <!-- reach-bar -->\n  <div class=\"p-steps-active-bar\" [ngStyle]=\"{ background: activeBackground, width: activeWidth }\"></div>\n  <!-- unreach-bar -->\n  <div class=\"p-steps-inactive-bar\" [ngStyle]=\"{ background: inactiveBackground }\"></div>\n  <!-- active-point -->\n  <ng-container *ngIf=\"activeStep\">\n    <div\n      class=\"p-steps-active-step-point\"\n      [ngStyle]=\"{\n        left: activeStep.index,\n        color: activeStep.pointColor || activePointColor\n      }\"\n      (click)=\"activeStep.hiddenContent = !activeStep.hiddenContent\"\n    >\n      <!-- icon -->\n      <ng-template [ngIf]=\"activePointTemplate\" [ngIfElse]=\"defaultActivePointTemplate\">\n        <ng-container *ngTemplateOutlet=\"activePointTemplate\"></ng-container>\n      </ng-template>\n      <ng-template #defaultActivePointTemplate>\n        <svg t=\"1567664921902\" viewBox=\"0 0 1471 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1120\">\n          <path\n            d=\"M259.519189 848.06455c25.023922 0 46.079856 8.639973 63.231802 25.727919 17.087947 17.151946 25.59992 37.887882 25.59992 62.207806 0 23.487927-8.511973 43.775863-25.59992 60.92781-17.151946 17.087947-38.207881 25.59992-63.231802 25.663919-24.959922 0-46.015856-8.511973-63.167803-25.663919a83.583739 83.583739 0 0 1-25.59992-60.92781c0-24.319924 8.575973-45.055859 25.59992-62.207806 17.151946-17.087947 38.207881-25.72792 63.167803-25.727919z m954.941016 1.407995c24.127925 0 44.92786 8.575973 62.463805 25.72792 17.535945 17.087947 26.367918 37.439883 26.367917 60.79981 0 24.383924-8.831972 45.119859-26.367917 62.271805-17.599945 17.151946-38.39988 25.72792-62.463805 25.72792-24.959922 0-46.079856-8.575973-63.167803-25.72792a84.863735 84.863735 0 0 1-25.59992-62.271805 83.19974 83.19974 0 0 1 25.59992-60.79981c17.151946-17.087947 38.207881-25.72792 63.167803-25.72792zM863.357302 0.0032l2.879991 880.509248a49.279846 49.279846 0 0 1-15.99995 37.887882 53.759832 53.759832 0 0 1-38.143881 14.847954h-378.878816c0-53.119834-13.951956-95.103703-41.66387-125.759607-27.775913-30.591904-71.295777-45.951856-130.559592-46.015857-56.383824 0-99.647689 14.207956-129.727594 42.623867-30.079906 28.415911-45.119859 71.487777-45.119859 129.151597H54.143831a56.447824 56.447824 0 0 1-38.847879-13.567958C5.055984 910.720354 0 897.664395 0 880.512448V177.154646c0-21.631932 4.159987-42.815866 12.479961-63.551801 8.319974-20.735935 20.159937-39.679876 35.391889-56.831822 15.359952-17.151946 33.087897-30.911903 53.439833-41.215872A144.319549 144.319549 0 0 1 167.935475 0.0032H863.357302z m460.79856 597.758132c11.135965 0 20.863935-0.191999 29.183909-0.639998 8.319974-0.511998 12.479961-6.143981 12.479961-16.959947a9.279971 9.279971 0 0 0-0.703998-4.031987 8.959972 8.959972 0 0 1-0.767998-4.095988c-10.175968-44.159862-21.247934-86.783729-33.279896-127.8076a243.19924 243.19924 0 0 0-61.055809-104.831673c-18.559942-17.151946-38.39988-29.503908-59.711813-37.183883a276.415136 276.415136 0 0 0-108.223662-16.959947 604.286112 604.286112 0 0 1-20.799935 1.407995 40.959872 40.959872 0 0 0-30.591904 12.79996 39.039878 39.039878 0 0 0-12.479961 27.775913v123.071616c0 36.095887 0.447999 76.223762 1.407995 120.383624v1.343995c0 4.479986 3.19999 9.919969 9.66397 16.25595 6.52798 6.27198 12.991959 9.47197 19.455939 9.47197h255.487202z m22.27193-290.751091c35.13589 46.847854 61.503808 96.895697 79.039753 150.14353 17.599945 53.119834 29.887907 105.279671 36.863885 156.159512 6.911978 50.943841 10.111968 98.559692 9.66397 142.719554-0.447999 44.159862-0.703998 80.255749-0.703998 108.223662 0 5.375983-0.447999 11.967963-1.343996 19.583939a140.159562 140.159562 0 0 1-4.863984 23.039928c-2.367993 7.679976-5.119984 14.207956-8.319974 19.583939-3.26399 5.375983-7.679976 8.063975-13.247959 8.127974h-56.895822c0-30.655904-4.863985-56.831822-14.527955-78.463754a144.447549 144.447549 0 0 0-38.911878-52.799835 155.071515 155.071515 0 0 0-56.895822-29.759907 244.543236 244.543236 0 0 0-68.671786-9.471971c-24.063925 0-46.271855 4.479986-66.623792 13.567958a171.839463 171.839463 0 0 0-89.53572 89.919719 159.807501 159.807501 0 0 0-13.247958 64.255799h-24.959922a59.711813 59.711813 0 0 1-43.071866-17.599945 56.831822 56.831822 0 0 1-18.047943-41.919869V220.418511c0-9.919969 3.519989-21.439933 10.431967-34.559892 6.975978-13.055959 15.487952-20.031937 25.66392-20.927934a402.558742 402.558742 0 0 1 95.743701 3.391989 507.134415 507.134415 0 0 1 98.559692 25.023922c32.383899 11.711963 62.975803 27.071915 91.647713 46.015856 28.67191 18.943941 52.735835 41.53587 72.127775 67.647789h0.127999z\"\n            p-id=\"1121\"\n          ></path>\n        </svg>\n      </ng-template>\n      <!-- content -->\n      <div\n        class=\"p-steps-active-step-content\"\n        [hidden]=\"activeStep.hiddenContent\"\n        [ngStyle]=\"{\n          background: activeStep.contentBackground || activeContentBackground,\n          color: activeStep.contentBackground || activeContentBackground\n        }\"\n        [ngClass]=\"{\n          left: activeStep.contentAlign === 'left' || activeContentAlign === 'left' || activeStep.smartContentAlign === 'left',\n          right: activeStep.contentAlign === 'right' || activeContentAlign === 'right' || activeStep.smartContentAlign === 'right'\n        }\"\n      >\n        <div\n          class=\"p-steps-active-step-title\"\n          [ngStyle]=\"{\n            color: activeStep.contentColor || activeContentColor\n          }\"\n        >\n          {{ activeStep.title }}\n        </div>\n        <div\n          class=\"p-steps-active-step-description\"\n          [ngStyle]=\"{\n            color: activeStep.contentColor || activeContentColor\n          }\"\n        >\n          {{ activeStep.description }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <!-- key-points -->\n  <ng-container *ngFor=\"let keyStep of keySteps || []\">\n    <div\n      class=\"p-steps-key-step-point\"\n      [ngStyle]=\"{\n        left: keyStep.index,\n        color: keyStep.pointColor || keyPointColor\n      }\"\n    >\n      <!-- icon -->\n      <ng-template [ngIf]=\"keyPointTemplate\" [ngIfElse]=\"defaultKeyPointTemplate\">\n        <ng-container *ngTemplateOutlet=\"keyPointTemplate\"></ng-container>\n      </ng-template>\n      <ng-template #defaultKeyPointTemplate>\n        <svg t=\"1567665154681\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1973\">\n          <path\n            d=\"M512 47.886637C255.677147 47.886637 47.886637 255.677147 47.886637 512S255.677147 976.113363 512 976.113363s464.113363-207.79051 464.113363-464.113363S768.322853 47.886637 512 47.886637zM512 746.102782c-128.160915 0-232.057193-103.895255-232.057193-232.057193s103.895255-232.057193 232.057193-232.057193 232.057193 103.895255 232.057193 232.057193S640.161938 746.102782 512 746.102782z\"\n            p-id=\"1974\"\n          ></path>\n          <path\n            d=\"M512 512m-262.74751872 0a262.74751872 262.74751872 0 1 0 525.49503744 0 262.74751872 262.74751872 0 1 0-525.49503744 0Z\"\n            fill=\"#ffffff\"\n            p-id=\"2875\"\n          ></path>\n        </svg>\n      </ng-template>\n      <!-- content -->\n      <div\n        class=\"p-steps-key-step-content\"\n        [ngStyle]=\"{\n          background: keyStep.contentBackground || keyContentBackground,\n          color: keyStep.contentColor || keyContentBackground\n        }\"\n      >\n        <div\n          class=\"p-steps-key-step-title\"\n          [ngStyle]=\"{\n            color: keyStep.contentColor || keyContentColor\n          }\"\n        >\n          <span *ngIf=\"keyStep.title\">\n            {{ keyStep.title }}\n          </span>\n          <span *ngIf=\"keyStep.subTitle\" class=\"subtitle\">\n            {{ keyStep.subTitle }}\n          </span>\n        </div>\n        <div\n          *ngIf=\"keyStep.description\"\n          class=\"p-steps-key-step-description\"\n          [ngStyle]=\"{\n            color: keyStep.contentColor || keyContentColor\n          }\"\n        >\n          {{ keyStep.description }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <!-- extra-points -->\n  <ng-container *ngFor=\"let extraStep of extraSteps || []\">\n    <div\n      class=\"p-steps-extra-step-point\"\n      [ngStyle]=\"{\n        left: extraStep.index,\n        color: extraStep.pointColor || extraPointColor\n      }\"\n      (click)=\"extraStep.hiddenContent = !extraStep.hiddenContent\"\n    >\n      <!-- icon -->\n      <ng-template [ngIf]=\"extraPointTemplate\" [ngIfElse]=\"defaultExtraPointTemplate\">\n        <ng-container *ngTemplateOutlet=\"extraPointTemplate\"></ng-container>\n      </ng-template>\n      <ng-template #defaultExtraPointTemplate>\n        <svg t=\"1567664856961\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"716\">\n          <path\n            d=\"M1002.552889 62.293333a41.699556 41.699556 0 0 0-41.984 0.568889l-1.763556 1.137778c-64.056889 42.894222-136.874667 73.386667-379.448889 9.671111-83.342222-21.845333-176.810667-21.560889-278.186666 1.024a833.820444 833.820444 0 0 0-157.809778 52.337778 49.493333 49.493333 0 0 0-28.558222 37.148444 40.96 40.96 0 0 0 2.503111 25.827556l335.075555 752.64a41.358222 41.358222 0 0 0 54.385778 20.935111 41.301333 41.301333 0 0 0 20.878222-54.385778L421.717333 671.288889c29.752889-35.953778 126.919111-127.658667 313.230223-75.320889 65.592889 18.432 120.888889 28.103111 164.352 28.728889 36.408889 0.568889 65.706667-5.347556 87.04-17.408 24.974222-14.222222 32.312889-32.938667 34.247111-40.220445l1.365333-5.176888L1024 99.384889v-0.227556a42.097778 42.097778 0 0 0-21.447111-36.864\"\n            p-id=\"717\"\n          ></path>\n        </svg>\n      </ng-template>\n      <!-- content -->\n      <div\n        class=\"p-steps-extra-step-content\"\n        [hidden]=\"extraStep.hiddenContent\"\n        [ngStyle]=\"{\n          background: extraStep.contentBackground || extraContentBackground,\n          color: extraStep.contentBackground || extraContentBackground\n        }\"\n        [ngClass]=\"{\n          left: extraStep.contentAlign === 'left' || extraContentAlign === 'left' || extraStep.smartContentAlign === 'left',\n          right: extraStep.contentAlign === 'right' || extraContentAlign === 'right' || extraStep.smartContentAlign === 'right'\n        }\"\n      >\n        <div\n          class=\"p-steps-extra-step-title\"\n          [ngStyle]=\"{\n            color: extraStep.contentColor || extraContentColor\n          }\"\n        >\n          <span *ngIf=\"extraStep.title\">\n            {{ extraStep.title }}\n          </span>\n          <span *ngIf=\"extraStep.title\" class=\"subtitle\">\n            {{ extraStep.subTitle }}\n          </span>\n        </div>\n        <div\n          *ngIf=\"extraStep.description\"\n          class=\"p-steps-extra-step-description\"\n          [ngStyle]=\"{\n            color: extraStep.contentColor || extraContentColor\n          }\"\n        >\n          {{ extraStep.description }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".p-steps-container{position:relative;display:flex;height:12px;margin:90px 64px 64px;line-height:normal}.p-steps-active-bar{flex:0 0 auto;height:100%;transition:1s}.p-steps-inactive-bar{flex:1 1 auto;height:100%}.p-steps-active-step-point{position:absolute;bottom:12px;z-index:1;width:16px;height:16px;margin-left:-8px;font-size:16px;cursor:pointer;transition:1s}.p-steps-active-step-point svg{width:1em;height:1em;fill:currentcolor}.p-steps-active-step-content{position:absolute;bottom:24px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:8px;border-radius:4px;box-shadow:1px 2px 4px 1px #d1d5db}.p-steps-active-step-content::after{position:absolute;bottom:-4px;border-top:4px solid currentcolor;border-right:4px solid transparent;border-left:4px solid transparent;content:''}.p-steps-active-step-content.left{left:-4px}.p-steps-active-step-content.left::after{left:8px}.p-steps-active-step-content.right{right:-4px}.p-steps-active-step-content.right::after{right:8px}.p-steps-active-step-description,.p-steps-active-step-title{font-size:12px}.p-steps-key-step-point{position:absolute;top:-2px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;margin-left:-8px;font-size:16px;cursor:pointer}.p-steps-key-step-point svg{width:1em;height:1em;fill:currentcolor}.p-steps-key-step-content{position:absolute;top:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:4px}.p-steps-key-step-description,.p-steps-key-step-title{font-size:12px}.p-steps-extra-step-point{position:absolute;bottom:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;margin-left:-8px;font-size:16px;cursor:pointer}.p-steps-extra-step-point svg{width:1em;height:1em;fill:currentcolor}.p-steps-extra-step-content{position:absolute;bottom:24px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:8px;border-radius:4px;box-shadow:1px 2px 4px 1px #d1d5db}.p-steps-extra-step-content::after{position:absolute;bottom:-4px;border-top:4px solid currentcolor;border-right:4px solid transparent;border-left:4px solid transparent;content:''}.p-steps-extra-step-content.left{left:-4px}.p-steps-extra-step-content.left::after{left:8px}.p-steps-extra-step-content.right{right:-4px}.p-steps-extra-step-content.right::after{right:8px}.p-steps-extra-step-description,.p-steps-extra-step-title{font-size:12px}.p-steps-extra-step-title .subtitle{color:red}.p-steps-background{position:absolute;bottom:12px;width:100%;height:90px;background-repeat:no-repeat;background-size:100% 100%}"]
            }] }
];
/** @nocollapse */
StepsComponent.ctorParameters = () => [
    { type: ElementRef }
];
StepsComponent.propDecorators = {
    activeBackground: [{ type: Input }],
    activeWidth: [{ type: Input }],
    inactiveBackground: [{ type: Input }],
    backgroundImage: [{ type: Input }],
    activePointTemplate: [{ type: Input }],
    activePointColor: [{ type: Input }],
    activeContentColor: [{ type: Input }],
    activeContentBackground: [{ type: Input }],
    activeContentAlign: [{ type: Input }],
    activeStep: [{ type: Input }],
    keyPointTemplate: [{ type: Input }],
    keyPointColor: [{ type: Input }],
    keyContentColor: [{ type: Input }],
    keyContentBackground: [{ type: Input }],
    keySteps: [{ type: Input }],
    extraPointTemplate: [{ type: Input }],
    extraPointColor: [{ type: Input }],
    extraContentColor: [{ type: Input }],
    extraContentBackground: [{ type: Input }],
    extraContentAlign: [{ type: Input }],
    extraSteps: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StepsComponent.prototype.activeBackground;
    /** @type {?} */
    StepsComponent.prototype.activeWidth;
    /** @type {?} */
    StepsComponent.prototype.inactiveBackground;
    /** @type {?} */
    StepsComponent.prototype.backgroundImage;
    /** @type {?} */
    StepsComponent.prototype.activePointTemplate;
    /** @type {?} */
    StepsComponent.prototype.activePointColor;
    /** @type {?} */
    StepsComponent.prototype.activeContentColor;
    /** @type {?} */
    StepsComponent.prototype.activeContentBackground;
    /** @type {?} */
    StepsComponent.prototype.activeContentAlign;
    /** @type {?} */
    StepsComponent.prototype.activeStep;
    /** @type {?} */
    StepsComponent.prototype.keyPointTemplate;
    /** @type {?} */
    StepsComponent.prototype.keyPointColor;
    /** @type {?} */
    StepsComponent.prototype.keyContentColor;
    /** @type {?} */
    StepsComponent.prototype.keyContentBackground;
    /** @type {?} */
    StepsComponent.prototype.keySteps;
    /** @type {?} */
    StepsComponent.prototype.extraPointTemplate;
    /** @type {?} */
    StepsComponent.prototype.extraPointColor;
    /** @type {?} */
    StepsComponent.prototype.extraContentColor;
    /** @type {?} */
    StepsComponent.prototype.extraContentBackground;
    /** @type {?} */
    StepsComponent.prototype.extraContentAlign;
    /** @type {?} */
    StepsComponent.prototype.extraSteps;
    /**
     * @type {?}
     * @private
     */
    StepsComponent.prototype._el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StepsModule {
}
StepsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StepsComponent],
                imports: [CommonModule],
                exports: [StepsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Step() { }
if (false) {
    /** @type {?} */
    Step.prototype.index;
    /** @type {?} */
    Step.prototype.title;
    /** @type {?|undefined} */
    Step.prototype.subTitle;
    /** @type {?|undefined} */
    Step.prototype.description;
    /** @type {?|undefined} */
    Step.prototype.pointColor;
    /** @type {?|undefined} */
    Step.prototype.contentColor;
    /** @type {?|undefined} */
    Step.prototype.contentBackground;
    /** @type {?|undefined} */
    Step.prototype.contentAlign;
    /** @type {?|undefined} */
    Step.prototype.smartContentAlign;
    /** @type {?|undefined} */
    Step.prototype.hiddenContent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StepsComponent, StepsModule };
//# sourceMappingURL=steps.js.map
