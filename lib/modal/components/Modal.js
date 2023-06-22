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
    var children = _a.children, onClose = _a.onClose, showModal = _a.showModal, modalClass = _a.modalClass, blockerClass = _a.blockerClass, showClose = _a.showClose, closeText = _a.closeText, closeClass = _a.closeClass, clickClose = _a.clickClose, escapeClose = _a.escapeClose;
    var modalRef = (0, react_1.useRef)(null);
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
        if (showModal) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        }
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [clickClose, escapeClose, onClose, showModal]);
    if (!showModal) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "".concat(blockerClass, " modal") }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ ref: modalRef, className: modalClass }, { children: [children, showClose && ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClose, className: closeClass }, { children: "X" }))), closeText && !showClose && ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClose, className: closeClass }, { children: closeText })))] })) })));
};
exports.Modal = Modal;
