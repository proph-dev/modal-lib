"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./modal.css");
var Modal = function (_a) {
    var children = _a.children, onClose = _a.onClose, isOpen = _a.isOpen, _b = _a.modalClass, modalClass = _b === void 0 ? '' : _b, _c = _a.overlayClass, overlayClass = _c === void 0 ? '' : _c, showCloseIcon = _a.showCloseIcon, _d = _a.closeText, closeText = _d === void 0 ? '' : _d, _e = _a.closeClass, closeClass = _e === void 0 ? '' : _e, clickClose = _a.clickClose, escapeClose = _a.escapeClose, _f = _a.width, width = _f === void 0 ? '500px' : _f, _g = _a.height, height = _g === void 0 ? 'auto' : _g, _h = _a.borderRadius, borderRadius = _h === void 0 ? '15px' : _h, _j = _a.overlayOpacity, overlayOpacity = _j === void 0 ? 6 : _j;
    var modalRef = (0, react_1.useRef)(null);
    var computedOverlayOpacity = typeof overlayOpacity === 'number' ? overlayOpacity / 10 : 0.6;
    (0, react_1.useEffect)(function () {
        var handleOutsideClick = function (event) {
            if (clickClose && modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        var handleEscapeKey = function (event) {
            if (escapeClose && event.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        }
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [clickClose, escapeClose, onClose, isOpen]);
    if (!isOpen) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: overlayClass ? "".concat(overlayClass, " overlayLibModal") : 'overlayLibModal', style: { backgroundColor: "rgba(0, 0, 0, ".concat(computedOverlayOpacity, ")") } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ ref: modalRef, className: modalClass ? "".concat(modalClass, " libModalWrapper") : 'libModalWrapper', style: {
                width: width,
                height: height,
                borderRadius: borderRadius
            } }, { children: [children, (showCloseIcon || closeText) && ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClose, className: closeClass ? "".concat(closeClass, " closeButtonModal") : 'closeButtonModal' }, { children: showCloseIcon ? 'X' : closeText })))] })) })));
};
exports.Modal = Modal;
