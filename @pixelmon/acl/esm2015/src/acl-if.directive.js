/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { InputBoolean } from '@pixelmon/util';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
export class ACLIfDirective {
    /**
     * @param {?} templateRef
     * @param {?} srv
     * @param {?} _viewContainer
     */
    constructor(templateRef, srv, _viewContainer) {
        this.srv = srv;
        this._viewContainer = _viewContainer;
        this._thenTemplateRef = null;
        this._elseTemplateRef = null;
        this._thenViewRef = null;
        this._elseViewRef = null;
        this.except = false;
        this._change$ = this.srv.change.pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        r => r != null))).subscribe((/**
         * @return {?}
         */
        () => this._updateView()));
        this._thenTemplateRef = templateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set aclIf(value) {
        this._value = value;
        this._updateView();
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set aclIfThen(templateRef) {
        this._thenTemplateRef = templateRef;
        this._thenViewRef = null;
        this._updateView();
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set aclIfElse(templateRef) {
        this._elseTemplateRef = templateRef;
        this._elseViewRef = null;
        this._updateView();
    }
    /**
     * @protected
     * @return {?}
     */
    _updateView() {
        /** @type {?} */
        const res = this.srv.can(this._value);
        if ((res && !this.except) || (!res && this.except)) {
            if (!this._thenViewRef) {
                this._viewContainer.clear();
                this._elseViewRef = null;
                if (this._thenTemplateRef) {
                    this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef);
                }
            }
        }
        else {
            if (!this._elseViewRef) {
                this._viewContainer.clear();
                this._thenViewRef = null;
                if (this._elseTemplateRef) {
                    this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._change$.unsubscribe();
    }
}
ACLIfDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aclIf]',
                exportAs: 'aclIf',
            },] }
];
/** @nocollapse */
ACLIfDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ACLService },
    { type: ViewContainerRef }
];
ACLIfDirective.propDecorators = {
    aclIf: [{ type: Input }],
    aclIfThen: [{ type: Input }],
    aclIfElse: [{ type: Input }],
    except: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], ACLIfDirective.prototype, "except", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._change$;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._thenTemplateRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._elseTemplateRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._thenViewRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._elseViewRef;
    /** @type {?} */
    ACLIfDirective.prototype.except;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW1CLEtBQUssRUFBYSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFRekIsWUFBWSxXQUE4QixFQUFVLEdBQWUsRUFBVSxjQUFnQztRQUF6RCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBTHJHLHFCQUFnQixHQUE2QixJQUFJLENBQUM7UUFDbEQscUJBQWdCLEdBQTZCLElBQUksQ0FBQztRQUNsRCxpQkFBWSxHQUFpQyxJQUFJLENBQUM7UUFDbEQsaUJBQVksR0FBaUMsSUFBSSxDQUFDO1FBMkJqQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBeEJ0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsSUFDSSxLQUFLLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsV0FBcUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxXQUFxQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUlTLFdBQVc7O2NBQ2IsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ25GO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNuRjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLE9BQU87YUFDbEI7Ozs7WUFWc0QsV0FBVztZQUl6RCxVQUFVO1lBSmlELGdCQUFnQjs7O29CQXdCakYsS0FBSzt3QkFNTCxLQUFLO3dCQU9MLEtBQUs7cUJBT0wsS0FBSzs7QUFBbUI7SUFBZixZQUFZLEVBQUU7OzhDQUFnQjs7Ozs7O0lBaEN4QyxnQ0FBMkI7Ozs7O0lBQzNCLGtDQUErQjs7Ozs7SUFDL0IsMENBQTBEOzs7OztJQUMxRCwwQ0FBMEQ7Ozs7O0lBQzFELHNDQUEwRDs7Ozs7SUFDMUQsc0NBQTBEOztJQTJCMUQsZ0NBQXdDOzs7OztJQXpCSSw2QkFBdUI7Ozs7O0lBQUUsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAcGl4ZWxtb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjbElmXScsXG4gIGV4cG9ydEFzOiAnYWNsSWYnLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xJZkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3ZhbHVlOiBBQ0xDYW5UeXBlO1xuICBwcml2YXRlIF9jaGFuZ2UkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3RoZW5UZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZWxzZVRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF90aGVuVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2Vsc2VWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLCBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5fY2hhbmdlJCA9IHRoaXMuc3J2LmNoYW5nZS5waXBlKGZpbHRlcihyID0+IHIgIT0gbnVsbCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl91cGRhdGVWaWV3KCkpO1xuICAgIHRoaXMuX3RoZW5UZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFjbElmKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl91cGRhdGVWaWV3KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWNsSWZUaGVuKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwpIHtcbiAgICB0aGlzLl90aGVuVGVtcGxhdGVSZWYgPSB0ZW1wbGF0ZVJlZjtcbiAgICB0aGlzLl90aGVuVmlld1JlZiA9IG51bGw7XG4gICAgdGhpcy5fdXBkYXRlVmlldygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFjbElmRWxzZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsKSB7XG4gICAgdGhpcy5fZWxzZVRlbXBsYXRlUmVmID0gdGVtcGxhdGVSZWY7XG4gICAgdGhpcy5fZWxzZVZpZXdSZWYgPSBudWxsO1xuICAgIHRoaXMuX3VwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleGNlcHQgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgX3VwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5zcnYuY2FuKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoKHJlcyAmJiAhdGhpcy5leGNlcHQpIHx8ICghcmVzICYmIHRoaXMuZXhjZXB0KSkge1xuICAgICAgaWYgKCF0aGlzLl90aGVuVmlld1JlZikge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2Vsc2VWaWV3UmVmID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3RoZW5UZW1wbGF0ZVJlZikge1xuICAgICAgICAgIHRoaXMuX3RoZW5WaWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGhlblRlbXBsYXRlUmVmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2Vsc2VWaWV3UmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fdGhlblZpZXdSZWYgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fZWxzZVRlbXBsYXRlUmVmKSB7XG4gICAgICAgICAgdGhpcy5fZWxzZVZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9lbHNlVGVtcGxhdGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=