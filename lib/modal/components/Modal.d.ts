import { ReactNode } from "react";
import './modal.css';
interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    showModal: boolean;
    modalClass?: string;
    blockerClass?: string;
    showClose?: boolean;
    closeText?: string;
    closeClass?: string;
    clickClose?: boolean;
    escapeClose?: boolean;
}
export declare const Modal: ({ children, onClose, showModal, modalClass, blockerClass, showClose, closeText, closeClass, clickClose, escapeClose }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
