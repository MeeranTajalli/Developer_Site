import React from 'react'
export function Button({ asChild, children, className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-sky-500 hover:bg-sky-600 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700',
  };
  const cls = `${base} ${variants[variant] || variants.default} ${className}`.trim();
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: `${children.props.className || ''} ${cls}`.trim(), ...props });
  }
  return <button className={cls} {...props}>{children}</button>
}
