import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);
    return (_jsx("div", { className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in-main", onClick: onClose, role: "dialog", "aria-modal": "true", children: _jsxs("div", { className: "relative p-4", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { onClick: onClose, className: "absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold z-10 hover:bg-gray-200", "aria-label": "Close modal", children: "\u00D7" }), children] }) }));
};
export default Modal;
