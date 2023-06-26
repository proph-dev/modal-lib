import { ReactNode } from "react";
import './modal.css';
interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    isOpen: boolean;
    modalClass?: string;
    overlayClass?: string;
    showCloseIcon?: boolean;
    closeText?: string;
    closeClass?: string;
    clickClose?: boolean;
    escapeClose?: boolean;
    width?: string;
    height?: string;
    borderRadius?: string;
    overlayOpacity?: number | boolean;
}
export declare const Modal: ({ children, onClose, isOpen, modalClass, overlayClass, showCloseIcon, closeText, closeClass, clickClose, escapeClose, width, height, borderRadius, overlayOpacity }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
