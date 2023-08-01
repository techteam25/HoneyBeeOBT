import React from 'react';
import styles from './cards.module.css';

type Card = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Card> = ({ children, className, ...props }) => {
    return <div className={`${styles.cards} ${className}`} {...props}>{children}</div>;
};
