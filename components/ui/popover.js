import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export function Popover({ children, content, trigger = 'click', placement = 'bottom' }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const openPopover = () => setIsOpen(true);
  const closePopover = () => setIsOpen(false);
  const togglePopover = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (
      popoverRef.current && !popoverRef.current.contains(event.target) &&
      triggerRef.current && !triggerRef.current.contains(event.target)
    ) {
      closePopover();
    }
  };

  useEffect(() => {
    if (trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
    } else if (trigger === 'hover') {
      triggerRef.current.addEventListener('mouseenter', openPopover);
      triggerRef.current.addEventListener('mouseleave', closePopover);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (trigger === 'hover') {
        triggerRef.current?.removeEventListener('mouseenter', openPopover);
        triggerRef.current?.removeEventListener('mouseleave', closePopover);
      }
    };
  }, [trigger]);

  const positionPopover = () => {
    if (!popoverRef.current || !triggerRef.current) return {};

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - popoverRect.height;
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom;
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.left - popoverRect.width;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.right;
        break;
      default:
        top = triggerRect.bottom;
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
        break;
    }

    return { top, left };
  };

  const popoverStyle = {
    position: 'fixed',
    zIndex: 10,
    ...positionPopover(),
    display: isOpen ? 'block' : 'none',
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        ref={triggerRef}
        onClick={trigger === 'click' ? togglePopover : undefined}
        onMouseEnter={trigger === 'hover' ? openPopover : undefined}
        onMouseLeave={trigger === 'hover' ? closePopover : undefined}
      >
        {children}
      </div>
      {isOpen &&
        ReactDOM.createPortal(
          <div ref={popoverRef} style={popoverStyle}>
            {content}
          </div>,
          document.body
        )}
    </div>
  );
}
