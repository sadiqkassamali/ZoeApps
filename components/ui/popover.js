import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export function Popover({ children, content, trigger = 'click', placement = 'bottom' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const openPopover = () => setIsOpen(true);
  const closePopover = () => setIsOpen(false);
  const togglePopover = () => setIsOpen(prev => !prev);

  const updatePosition = () => {
    if (!triggerRef.current || !popoverRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    let top = 0, left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - popoverRect.height;
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + window.scrollY;
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
        left = triggerRect.left;
        break;
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
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        closePopover();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const triggerProps =
    trigger === 'click'
      ? { onClick: togglePopover }
      : {
          onMouseEnter: openPopover,
          onMouseLeave: closePopover,
        };

  const popover = (
    <div
      ref={popoverRef}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        zIndex: 1000,
        display: isOpen ? 'block' : 'none',
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      {content}
    </div>
  );

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div ref={triggerRef} {...triggerProps}>
        {children}
      </div>
      {isOpen && ReactDOM.createPortal(popover, document.body)}
    </div>
  );
}
