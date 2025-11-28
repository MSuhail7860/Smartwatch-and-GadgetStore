import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Card = React.forwardRef(
    ({ className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'bg-glass-white backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden',
                    hoverEffect && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';
