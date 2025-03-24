import React, {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
    cloneElement,
    isValidElement,
} from 'react';
import ReactDOM from 'react-dom';

const PopoverContext = createContext();

export function Popover({ children, trigger = 'click', placement = 'bottom' }) {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef(null);
    const popoverRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    const updatePosition = () => {
        if (!triggerRef.current || !popoverRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        let top = 0;
        let left = 0;

        switch (placement) {
            case 'top':
                top = triggerRect.top - popoverRect.height + scrollY;
                left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2 + scrollX;
                break;
            case 'bottom':
                top = triggerRect.bottom + scrollY;
                left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2 + scrollX;
                break;
            case 'left':
                top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2 + scrollY;
                left = triggerRect.left - popoverRect.width + scrollX;
                break;
            case 'right':
                top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2 + scrollY;
                left = triggerRect.right + scrollX;
                break;
            default:
                top = triggerRect.bottom + scrollY;
                left = triggerRect.left + scrollX;
        }

        setPosition({ top, left });
    };

    useEffect(() => {
        if (isOpen) {
            updatePosition();
            window.addEventListener('resize', updatePosition);
            window.addEventListener('scroll', updatePosition, true);
        }
        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, [isOpen, placement]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(e.target) &&
                triggerRef.current &&
                !triggerRef.current.contains(e.target)
            ) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <PopoverContext.Provider
            value={{
                isOpen,
                toggle,
                open,
                close,
                trigger,
                triggerRef,
                popoverRef,
                position,
            }}
        >
            {children}
        </PopoverContext.Provider>
    );
}

export function PopoverTrigger({ children }) {
    const { trigger, toggle, open, close, triggerRef } = useContext(PopoverContext);

    const eventHandlers =
        trigger === 'click'
            ? { onClick: toggle }
            : {
                onMouseEnter: open,
                onMouseLeave: close,
            };

    if (!isValidElement(children)) {
        console.warn('PopoverTrigger expects a single valid React element as a child.');
        return null;
    }

    return cloneElement(children, { ref: triggerRef, ...eventHandlers });
}

export function PopoverContent({ children }) {
    const { isOpen, popoverRef, position } = useContext(PopoverContext);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            ref={popoverRef}
            style={{
                position: 'absolute',
                top: `${position.top}px`,
                left: `${position.left}px`,
                zIndex: 1000,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                padding: '10px 14px',
                backgroundColor: '#fff',
                borderRadius: '6px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                minWidth: '160px',
                maxWidth: '300px',
            }}
        >
            {children}
        </div>,
        document.body
    );
}
