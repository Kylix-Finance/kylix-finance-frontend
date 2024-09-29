import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<"button"> {
    variant?: 'primary' | 'outline';
    color?: 'primary' | 'secondary' | 'white';
    children: React.ReactNode;
}

const Button = ({ variant = 'primary', color = 'primary', children, ...rest }: Props) => {
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';

    const textColor: Record<typeof color, string> = {
        primary: 'text-primary-500',
        secondary: 'text-secondary-500',
        white: 'text-white',
    };

    const variantStyles = {
        primary: `bg-primary-500 ${textColor[color]} hover:bg-primary-600`,
        outline: `bg-transparent border border-secondary-300 ${textColor[color]} hover:bg-secondary-300/10`,
    };

    const mergedClassName = twMerge(clsx(baseStyles, variantStyles[variant]));

    return <button className={mergedClassName} {...rest}>{children}</button>;
};

export default Button;
