import React from 'react';
import styles from './Typography.module.css';

const classNames = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  p: styles.p,
  span: styles.span
};

type TypographyProps = {
  as: keyof typeof classNames;
  children: React.ReactNode;
  className?: string;
};

export const Typography: React.FC<TypographyProps> = ({ as, children, className, ...props }) => {
  const Tag = as;
  const classNameTag = classNames[as];

  return <Tag className={`${classNameTag} ${className}`} {...props}>{children}</Tag>;
};
