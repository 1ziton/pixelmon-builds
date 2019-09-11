import { OnInit, ElementRef, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { Step } from './steps.interface';
export declare class StepsComponent implements OnInit, OnChanges {
    private _el;
    activeBackground: string;
    activeWidth: string;
    inactiveBackground: string;
    backgroundImage: string;
    activePointTemplate: TemplateRef<void>;
    activePointColor: string;
    activeContentColor: string;
    activeContentBackground: string;
    activeContentAlign: 'left' | 'right';
    activeStep: Step;
    keyPointTemplate: TemplateRef<void>;
    keyPointColor: string;
    keyContentColor: string;
    keyContentBackground: string;
    keySteps: Step[];
    extraPointTemplate: TemplateRef<void>;
    extraPointColor: string;
    extraContentColor: string;
    extraContentBackground: string;
    extraContentAlign: 'left' | 'right';
    extraSteps: Step[];
    constructor(_el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    /**
     * 更新对齐
     * @param contentSelector content的选择器
     * @param steps 对应的steps
     */
    updateContentAlign(contentSelector: string, steps: Step[]): void;
}
