import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Badge = React.forwardRef(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants = {
            default: 'bg-accent/20 text-accent border-accent/20',
            success: 'bg-green-500/20 text-green-400 border-green-500/20',
            warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20',
            danger: 'bg-red-500/20 text-red-400 border-red-500/20',
            outline: 'bg-transparent border-white/20 text-gray-300',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = 'Badge';
