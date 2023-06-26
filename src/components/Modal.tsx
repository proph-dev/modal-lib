import { ReactNode, useRef, useEffect } from "react";
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
    overlayOpacity?: number;
}

export const Modal = ({
    children,
    onClose,
    isOpen,
    modalClass = '',
    overlayClass = '',
    showCloseIcon,
    closeText = '',
    closeClass = '',
    clickClose,
    escapeClose,
    width = '500px',
    height = 'auto',
    borderRadius = '15px',
    overlayOpacity = 6
}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const computedOverlayOpacity = typeof overlayOpacity === 'number' ? overlayOpacity / 10 : 0.6;

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (clickClose && modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (escapeClose && event.key === "Escape") {
              onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        }
        
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };

    }, [clickClose, escapeClose, onClose, isOpen]);

    if(!isOpen) {
        return null;
    }

    return (
        <div
            className={ overlayClass ? `${overlayClass} overlayLibModal` : 'overlayLibModal' }
            style={{ backgroundColor: `rgba(0, 0, 0, ${computedOverlayOpacity})` }}
        >
            <div
                ref={modalRef}
                className={ modalClass ? `${modalClass} libModalWrapper` : 'libModalWrapper' }
                style={{
                    width,
                    height,
                    borderRadius
                }}
            >
                {children}

                {(showCloseIcon || closeText) && (
                    <button onClick={ onClose } className={ closeClass ? `${closeClass} closeButtonModal` : 'closeButtonModal' }>
                        {showCloseIcon ? 'X' : closeText}
                    </button>
                )}
            </div>
        </div>
    );
};