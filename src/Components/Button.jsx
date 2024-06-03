import React from 'react';

function Button({ children, className, ...props }) {
  return (
    <button className={`py-2 px-4 rounded hover:bg-blue-200 ${className}` } {...props}>
      {children}
    </button>
  );
}

export default Button;