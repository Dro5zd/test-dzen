import {ButtonHTMLAttributes, FC, ReactNode} from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    buttonStyles: string;
    children: ReactNode;
}

export const Button: FC<Props> = ({
                                      buttonStyles,
                                      type = 'button',
                                      onClick,
                                      children
                                  }) => (
    <button
        onClick={onClick}
        className={buttonStyles}
        type={type}
    >
        {children}
    </button>
);
