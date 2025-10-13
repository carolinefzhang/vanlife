import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({children, onClick, className, type, disabled, loading}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
