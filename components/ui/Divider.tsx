import React from 'react';

export function Divider({ className = '', style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <div 
      className={className} 
      style={{
        width: '100%',
        borderTop: '1px solid rgb(235, 235, 235)',
        ...style
      }} 
    />
  );
}
