import React from 'react'
export function Card({ className = '', children }) {
  return <div className={`rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur ${className}`}>{children}</div>
}
export function CardHeader({ children, className = '' }) {
  return <div className={`p-5 border-b border-slate-800/60 ${className}`}>{children}</div>
}
export function CardTitle({ children, className = '' }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}
export function CardContent({ children, className = '' }) {
  return <div className={`p-5 ${className}`}>{children}</div>
}
