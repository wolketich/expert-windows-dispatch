import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center rounded-xl font-medium transition-all',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-primary text-white hover:bg-primary/90 shadow-sm': variant === 'primary',
            'bg-secondary text-white hover:bg-secondary/90 shadow-sm': variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary/10': variant === 'outline',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base min-w-[44px]': size === 'md',
            'h-12 px-8 text-lg min-w-[44px]': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
