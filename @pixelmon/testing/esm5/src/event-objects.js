/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @return {?}
 */
export function createMouseEvent(type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    /** @type {?} */
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, false /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, 0 /* button */, null /* relatedTarget */);
    return event;
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @param {?} type
 * @param {?=} pageX
 * @param {?=} pageY
 * @return {?}
 */
export function createTouchEvent(type, pageX, pageY) {
    if (pageX === void 0) { pageX = 0; }
    if (pageY === void 0) { pageY = 0; }
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    /** @type {?} */
    var event = document.createEvent('UIEvent');
    /** @type {?} */
    var touchDetails = { pageX: pageX, pageY: pageY };
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @param {?=} key
 * @return {?}
 */
export function createKeyboardEvent(type, keyCode, target, key) {
    /** @type {?} */
    var event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    /** @type {?} */
    var initEventFn = (event.initKeyEvent || event.initKeyboardEvent).bind(event);
    /** @type {?} */
    var originalPreventDefault = event.preventDefault;
    initEventFn(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: (/**
             * @return {?}
             */
            function () { return keyCode; }) },
        key: { get: (/**
             * @return {?}
             */
            function () { return key; }) },
        target: { get: (/**
             * @return {?}
             */
            function () { return target; }) },
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = (/**
     * @return {?}
     */
    function () {
        Object.defineProperty(event, 'defaultPrevented', { get: (/**
             * @return {?}
             */
            function () { return true; }) });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    });
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @param {?} type
 * @param {?=} canBubble
 * @param {?=} cancelable
 * @return {?}
 */
export function createFakeEvent(type, canBubble, cancelable) {
    if (canBubble === void 0) { canBubble = true; }
    if (cancelable === void 0) { cancelable = true; }
    /** @type {?} */
    var event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwaXhlbG1vbi90ZXN0aW5nLyIsInNvdXJjZXMiOlsic3JjL2V2ZW50LW9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxDQUFLLEVBQUUsQ0FBSztJQUFaLGtCQUFBLEVBQUEsS0FBSztJQUFFLGtCQUFBLEVBQUEsS0FBSzs7UUFDbkQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBRWhELEtBQUssQ0FBQyxjQUFjLENBQ2xCLElBQUksRUFDSixLQUFLLENBQUMsZUFBZSxFQUNyQixLQUFLLENBQUMsZ0JBQWdCLEVBQ3RCLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLENBQUMsQ0FBQyxZQUFZLEVBQ2QsQ0FBQyxDQUFDLGFBQWEsRUFDZixDQUFDLENBQUMsYUFBYSxFQUNmLENBQUMsQ0FBQyxhQUFhLEVBQ2YsQ0FBQyxDQUFDLGFBQWEsRUFDZixLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxFQUNsQixLQUFLLENBQUMsY0FBYyxFQUNwQixLQUFLLENBQUMsYUFBYSxFQUNuQixDQUFDLENBQUMsWUFBWSxFQUNkLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztJQUVGLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLEtBQVMsRUFBRSxLQUFTO0lBQXBCLHNCQUFBLEVBQUEsU0FBUztJQUFFLHNCQUFBLEVBQUEsU0FBUzs7OztRQUczRCxLQUFLLEdBQVEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7O1FBQzVDLFlBQVksR0FBRyxFQUFFLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFO0lBRXJDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9DLHVGQUF1RjtJQUN2RixxQkFBcUI7SUFDckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtRQUM3QixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtLQUNuQyxDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsT0FBZSxFQUFFLE1BQWdCLEVBQUUsR0FBWTs7UUFDekYsS0FBSyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQU87OztRQUVwRCxXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O1FBQ3pFLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxjQUFjO0lBRW5ELFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUU5RCx3RUFBd0U7SUFDeEUsZ0VBQWdFO0lBQ2hFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7UUFDN0IsT0FBTyxFQUFFLEVBQUUsR0FBRzs7O1lBQUUsY0FBTSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUEsRUFBRTtRQUMvQixHQUFHLEVBQUUsRUFBRSxHQUFHOzs7WUFBRSxjQUFNLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQSxFQUFFO1FBQ3ZCLE1BQU0sRUFBRSxFQUFFLEdBQUc7OztZQUFFLGNBQU0sT0FBQSxNQUFNLEVBQU4sQ0FBTSxDQUFBLEVBQUU7S0FDOUIsQ0FBQyxDQUFDO0lBRUgsb0ZBQW9GO0lBQ3BGLEtBQUssQ0FBQyxjQUFjOzs7SUFBRztRQUNyQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEdBQUc7OztZQUFFLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLDJDQUEyQztRQUMzQyxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFBLENBQUM7SUFFRixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsU0FBZ0IsRUFBRSxVQUFpQjtJQUFuQywwQkFBQSxFQUFBLGdCQUFnQjtJQUFFLDJCQUFBLEVBQUEsaUJBQWlCOztRQUN6RSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDM0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiogQ3JlYXRlcyBhIGJyb3dzZXIgTW91c2VFdmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgb3B0aW9ucy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb3VzZUV2ZW50KHR5cGU6IHN0cmluZywgeCA9IDAsIHkgPSAwKSB7XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcblxuICBldmVudC5pbml0TW91c2VFdmVudChcbiAgICB0eXBlLFxuICAgIGZhbHNlIC8qIGNhbkJ1YmJsZSAqLyxcbiAgICBmYWxzZSAvKiBjYW5jZWxhYmxlICovLFxuICAgIHdpbmRvdyAvKiB2aWV3ICovLFxuICAgIDAgLyogZGV0YWlsICovLFxuICAgIHggLyogc2NyZWVuWCAqLyxcbiAgICB5IC8qIHNjcmVlblkgKi8sXG4gICAgeCAvKiBjbGllbnRYICovLFxuICAgIHkgLyogY2xpZW50WSAqLyxcbiAgICBmYWxzZSAvKiBjdHJsS2V5ICovLFxuICAgIGZhbHNlIC8qIGFsdEtleSAqLyxcbiAgICBmYWxzZSAvKiBzaGlmdEtleSAqLyxcbiAgICBmYWxzZSAvKiBtZXRhS2V5ICovLFxuICAgIDAgLyogYnV0dG9uICovLFxuICAgIG51bGwgLyogcmVsYXRlZFRhcmdldCAqLyxcbiAgKTtcblxuICByZXR1cm4gZXZlbnQ7XG59XG5cbi8qKiBDcmVhdGVzIGEgYnJvd3NlciBUb3VjaEV2ZW50IHdpdGggdGhlIHNwZWNpZmllZCBwb2ludGVyIGNvb3JkaW5hdGVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvdWNoRXZlbnQodHlwZTogc3RyaW5nLCBwYWdlWCA9IDAsIHBhZ2VZID0gMCkge1xuICAvLyBJbiBmYXZvciBvZiBjcmVhdGluZyBldmVudHMgdGhhdCB3b3JrIGZvciBtb3N0IG9mIHRoZSBicm93c2VycywgdGhlIGV2ZW50IGlzIGNyZWF0ZWRcbiAgLy8gYXMgYSBiYXNpYyBVSSBFdmVudC4gVGhlIG5lY2Vzc2FyeSBkZXRhaWxzIGZvciB0aGUgZXZlbnQgd2lsbCBiZSBzZXQgbWFudWFsbHkuXG4gIGNvbnN0IGV2ZW50OiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnVUlFdmVudCcpO1xuICBjb25zdCB0b3VjaERldGFpbHMgPSB7IHBhZ2VYLCBwYWdlWSB9O1xuXG4gIGV2ZW50LmluaXRVSUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMCk7XG5cbiAgLy8gTW9zdCBvZiB0aGUgYnJvd3NlcnMgZG9uJ3QgaGF2ZSBhIFwiaW5pdFRvdWNoRXZlbnRcIiBtZXRob2QgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmVcbiAgLy8gdGhlIHRvdWNoIGRldGFpbHMuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XG4gICAgdG91Y2hlczogeyB2YWx1ZTogW3RvdWNoRGV0YWlsc10gfSxcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKiogRGlzcGF0Y2hlcyBhIGtleWRvd24gZXZlbnQgZnJvbSBhbiBlbGVtZW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIsIHRhcmdldD86IEVsZW1lbnQsIGtleT86IHN0cmluZykge1xuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdLZXlib2FyZEV2ZW50JykgYXMgYW55O1xuICAvLyBGaXJlZm94IGRvZXMgbm90IHN1cHBvcnQgYGluaXRLZXlib2FyZEV2ZW50YCwgYnV0IHN1cHBvcnRzIGBpbml0S2V5RXZlbnRgLlxuICBjb25zdCBpbml0RXZlbnRGbiA9IChldmVudC5pbml0S2V5RXZlbnQgfHwgZXZlbnQuaW5pdEtleWJvYXJkRXZlbnQpLmJpbmQoZXZlbnQpO1xuICBjb25zdCBvcmlnaW5hbFByZXZlbnREZWZhdWx0ID0gZXZlbnQucHJldmVudERlZmF1bHQ7XG5cbiAgaW5pdEV2ZW50Rm4odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBrZXlDb2RlKTtcblxuICAvLyBXZWJraXQgQnJvd3NlcnMgZG9uJ3Qgc2V0IHRoZSBrZXlDb2RlIHdoZW4gY2FsbGluZyB0aGUgaW5pdCBmdW5jdGlvbi5cbiAgLy8gU2VlIHJlbGF0ZWQgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNjczNVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhldmVudCwge1xuICAgIGtleUNvZGU6IHsgZ2V0OiAoKSA9PiBrZXlDb2RlIH0sXG4gICAga2V5OiB7IGdldDogKCkgPT4ga2V5IH0sXG4gICAgdGFyZ2V0OiB7IGdldDogKCkgPT4gdGFyZ2V0IH0sXG4gIH0pO1xuXG4gIC8vIElFIHdvbid0IHNldCBgZGVmYXVsdFByZXZlbnRlZGAgb24gc3ludGhldGljIGV2ZW50cyBzbyB3ZSBuZWVkIHRvIGRvIGl0IG1hbnVhbGx5LlxuICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7IGdldDogKCkgPT4gdHJ1ZSB9KTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgcmV0dXJuIG9yaWdpbmFsUHJldmVudERlZmF1bHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICByZXR1cm4gZXZlbnQ7XG59XG5cbi8qKiBDcmVhdGVzIGEgZmFrZSBldmVudCBvYmplY3Qgd2l0aCBhbnkgZGVzaXJlZCBldmVudCB0eXBlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZha2VFdmVudCh0eXBlOiBzdHJpbmcsIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSB0cnVlKSB7XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIGV2ZW50LmluaXRFdmVudCh0eXBlLCBjYW5CdWJibGUsIGNhbmNlbGFibGUpO1xuICByZXR1cm4gZXZlbnQ7XG59XG4iXX0=